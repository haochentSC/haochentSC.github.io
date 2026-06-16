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

## What I built

- A CPU-only distributed cache in Go that shares attention KV tensors across a multi-node vLLM
  serving cluster, so any node can reuse prefill another node already computed. Cut time-to-first-token
  by **10.9% at 4k-token shared prefixes** (116 ms off a 1,070 ms TTFT) against a live GPU node,
  measured cross-AZ on AWS, and characterized the crossover where remote caching stops paying
  (break-even ~1k tokens on an L4).
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

### Infrastructure
Provisioned and benchmarked the cluster on AWS via Terraform — Spot cache nodes, a 3-node etcd
quorum, S3 cold tier, ECR, and CloudWatch alarms with `treat_missing_data="breaching"` for node-loss
detection. Replayed **6,782 ShareGPT requests** on the live 3-node cluster at a **32.7% organic block
hit rate**, p50 62 ms, balanced across shards, for ≈$5–7 total GPU spend.
