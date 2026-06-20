---
title: Distributed KV Cache
tagline: Prefix-sharing cache for multi-node vLLM serving — cut TTFT 10.9% at 4k-token shared prefixes on a live GPU cluster.
role: Solo build
period: Apr 2026 – Jun 2026
status: complete
stack:
  - Go
  - gRPC/Protobuf
  - etcd
  - consistent hashing
  - vLLM (KVConnectorBase_V1)
  - AWS
  - Terraform
  - Prometheus
metrics:
  - { label: "TTFT @ 4k tokens", value: "−10.9%" }
  - { label: "correctness violations / 10k+ req", value: "0" }
  - { label: "ShareGPT requests replayed", value: "6,782" }
  - { label: "organic block hit rate", value: "32.7%" }
categories:
  - distributed-systems
  - ai-infra
links:
  github: https://github.com/haochentSC/Distributed-KV-Cache-for-LLM-Inference
featured: true
order: 1
---

## Problem

When several vLLM nodes serve the same model, each node recomputes prefill for prefixes another
node has already processed. A CPU-only distributed cache that shares attention KV tensors across the
cluster lets any node reuse a prefix another node already computed — cutting time-to-first-token,
but only past the point where the network round-trip is cheaper than recompute.

<figure>
  <img src="/media/distributed-kv-cache/ttft-crossover-l4.png" alt="TTFT crossover curve: warm distributed-cache hits beat the vLLM baseline by 10.9% at 4k-token shared prefixes on an AWS L4, with a break-even point near 1k tokens." />
  <figcaption>TTFT crossover, Qwen2.5-7B on AWS g6.2xlarge (1× L4), cross-AZ cache. Warm hits win +10.9% at 4k tokens; below ~1k tokens the round-trip costs more than recompute.</figcaption>
</figure>

## What I built

- A CPU-only distributed cache in Go that shares attention KV tensors across a multi-node vLLM
  serving cluster, so any node can reuse prefill another node already computed. Cut time-to-first-token
  by **10.9% at 4k-token shared prefixes** (116 ms off a 1,070 ms TTFT) against a live GPU node,
  measured cross-AZ on AWS, and characterized the crossover where remote caching stops paying
  (break-even ~1k tokens on an L4).

<figure>
  <img src="/media/distributed-kv-cache/demo-chaos.gif" alt="Terminal recording of `make demo` bringing up 3 cache nodes plus etcd at RF=2 under verified load while a node is hard-killed every 15 seconds." />
  <figcaption>Chaos demo: 3 cache nodes + etcd, RF=2, under verified load while a node is hard-killed every 15s — 0 correctness violations.</figcaption>
</figure>
- Consistent-hashing shard placement, **RF=2 async replication** with implicit promotion, and
  etcd-coordinated failover with graceful Spot drain; sustained **0 correctness violations across
  10k+ requests per run** under injected latency, etcd partitions, hard node kills, and real AWS Spot
  interruptions — verified by a client-side integrity oracle that re-hashes every fetched block.
- A custom vLLM `KVConnectorBase_V1` connector (no fork) that pages KV tensors GPU↔host↔gRPC, with
  tensor-parallel-aware key namespacing validated end-to-end at **TP=4 / Qwen2.5-32B on 4× A40**
  (512 writes = 128 blocks × 4 ranks, exactly once).

## Key technical decisions

### The TP=4 silent-corruption bug
At tensor parallelism, the store was keyed by content hash — so per-rank shards with identical content
hashed to the same key and clobbered each other under last-writer-wins. It produced no logs and no
crash. A benchmark asserting on exact write counts (not logs) caught it: 512 writes were expected
(128 blocks × 4 ranks), and the count was wrong. The fix was tensor-parallel-aware key namespacing.

### Eviction policy
A work-conserving multi-tenant eviction policy (GDSF cost-awareness + an elastic max-min fairness
knob, `H_eff = H/(1 + w·overage)`) that **Pareto-dominates static per-tenant quotas** — simultaneously
raising global and worst-tenant hit rate. Sweeping the efficiency↔fairness frontier surfaced that the
fairness knob saturates within `w ∈ (0, 0.25]`.

<figure>
  <img src="/media/distributed-kv-cache/fairness-frontier.png" alt="Efficiency-vs-fairness scatter: the GDSF-elastic policy curve sits above and to the right of both the LRU baseline and static per-tenant caps, dominating them; the fairness knob plateaus at w≥0.25." />
  <figcaption>Efficiency↔fairness frontier. The GDSF-elastic policy Pareto-dominates LRU and static per-tenant caps; raising both global and worst-tenant hit rate, with the fairness knob plateauing at w ≥ 0.25.</figcaption>
</figure>

### Infrastructure
Provisioned and benchmarked the cluster on AWS via Terraform — Spot cache nodes, a 3-node etcd
quorum, S3 cold tier, ECR, and CloudWatch alarms with `treat_missing_data="breaching"` for node-loss
detection. Replayed **6,782 ShareGPT requests** on the live 3-node cluster at a **32.7% organic block
hit rate**, p50 62 ms, balanced across shards, for ≈$5–7 total GPU spend.

## Where the cache *doesn't* win

The crossover is driven by KV-bytes / recompute-cost, not model size. On a flagship A100, prefill is
so fast that the Python-bound warm path never catches up within 32k context — and a 14B model is
*worse* than 7B at the same prefix length because it carries ~3.4× the KV bytes per token for only
~2× the prefill FLOPs. The win shows up on cost-tier, compute-bound GPUs (the AWS L4 above), not on
flagship throughput.

<figure>
  <img src="/media/distributed-kv-cache/longcontext-a100.png" alt="Log-log TTFT curves on an A100: both 7B and 14B warm-cache lines sit above their baselines at every shared-prefix length up to 32k tokens, so the cache never wins on flagship hardware." />
  <figcaption>No crossover on an A100 80GB up to 32k tokens — prefill is too fast and the warm path is Python-bound. 14B is worse than 7B at equal prefix length (more KV bytes per recompute FLOP).</figcaption>
</figure>

## Demo

A small chat UI over `vllm serve` + the connector: every replayed turn lights up a ground-truth
`KV cache hit` badge and reports per-turn TTFT, so a cache hit is observable end-to-end rather than
asserted.

<figure>
  <img src="/media/distributed-kv-cache/demo-chat.gif" alt="Chat UI demo: a conversation is sent once, then replayed; each replayed turn shows a green KV cache hit badge and per-turn TTFT next to a TinyLlama vLLM backend." />
  <figcaption>Chat demo over vLLM + connector — chat once, replay, and every replayed turn shows a ground-truth KV-cache-hit badge with per-turn TTFT.</figcaption>
</figure>
