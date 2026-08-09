# Evidence ledger — Distributed KV Cache for LLM Inference

`repo:` C:\Users\tongh\Distributed-KV-Cache-for-LLM-Inference
`public:` https://github.com/haochentSC/Distributed-KV-Cache-for-LLM-Inference
`portfolio:` src/content/projects/distributed-kv-cache.md
`HEAD at mining:` 6c16320 · 39 commits, 2026-05-24 → 2026-06-15 · solo

Append-only. Newest entries at the bottom.

---

## Provenance chain

```
raw artifact (docs/benchmarks/*.json, *.csv)
  → benchmark write-up (docs/benchmarks/*.md)
    → docs/06-resume-and-interview.md   (the repo's own evidence doc)
      → MASTER-RESUME.md §5
        → portfolio
```

`docs/06-resume-and-interview.md` opens with *"Everything below is measured and traceable to
docs/benchmarks/. Use only these numbers."* **This pass checked that claim rather than trusting it.**
Its numbers verify with two exceptions, both logged below as metric changes.

---

## 2026-08-04 — Verified at tier 1 (recomputed from raw JSON)

**`kv-ttft-crossover` — the headline.** `phase45-distributed-qwen7b-long.json`, repeat=64:
prompt_tokens 4110, baseline p50 1070.307 ms, external-warm p50 954.083 ms. Recomputed
(1070.31 − 954.08)/1070.31 = **10.86% → 10.9%**; delta 116.22 ms → "116 ms" (rounded *down*, which
R4 permits). Environment: g6.2xlarge (1× L4) in us-east-1b, 3× t3.small cache cluster in
us-east-1a, vLLM 0.22.1, Qwen2.5-7B-Instruct bf16, TP=1, p50 of 8 runs.

Worth stating in an interview: **cross-AZ is a bias against the cache**, so the number is
conservative rather than flattering.

**`kv-crossover-envelope`.** Rungs from `phase45-distributed-qwen7b.json` (269/525/1038 tok) and
`-long.json` (2062/4110 tok): −5.3 / −0.5 / −0.2 / +7.6 / +10.9. Break-even sits between 1,038 tok
(−0.2%) and 2,062 tok (+7.6%); "≈1k tokens" is defensible as the last losing rung.

**`kv-a100-no-crossover`.** `phase45-longcontext-qwen7b.json`, six rungs 1038→32271 tok:
−171.1 / −186.1 / −180.5 / −166.7 / −136.6 / −91.1. Monotone shrink after the 2,062-tok rung, never
positive. **Honesty caveat:** `cache_addr` is loopback and single-node — this is a transport/prefill
boundary result, not a distributed result. Do not describe it as a cluster measurement.

**`kv-14b-kv-bytes`.** `phase45-longcontext-qwen14b.json`: 4110 tok −269.5%, 16399 tok −197.4%,
compared against the 7B rung at the identical 4110 tok (−180.5%). The *mechanism* (~3.4× KV bytes
for ~2× prefill FLOPs) is ADR prose, not measured — the bullet claims only the measured comparison.

**`kv-eviction-pareto` and `kv-fairness-knob-saturates`.** `phase5b-frontier.csv`:
`gdsf static-cap` = 12.2 overall / 10.3 min; `gdsf-elastic w=0.25` = 14.4 / 12.3. Deltas recomputed
**+2.2 pts global, +2.0 pts worst-tenant** — both axes improve, so Pareto dominance is correctly
stated. Frontier rows: w=0 → 20.0/1.9; w=0.25 → 14.4/12.3; w=0.5 → 14.0/10.6; w=0.75 → 14.2/12.3;
w=1 → 14.2/11.4. Overall is flat within 0.4 pts across w ∈ [0.25, 1], so "the knob saturates" is
supported by the data, not just the prose.

**Scope caveat:** this sweep is local, single-shard, 3 seeds (`-max-bytes` 16 MiB, 800 requests ×
concurrency 8, seeds 7/11/23). The AWS cluster re-run reproduces the *shape* within ~1.5 pts but has
no w=0.25 row. **Never upgrade this to "on a 3-node cluster."**

---

## 2026-08-04 — Verified at tier 2 (benchmark write-up)

**`kv-tp4-silent-corruption`.** `phase45-gpu-cloud.md` § Session B + ADR 0035, corroborated by
`phase45-tp4-qwen32b.json` (tensor_parallel_size 4, Qwen2.5-32B) and the KV-layout probe (per-rank
shape shows 2 KV heads/rank = 8 ÷ 4 ✓). Pre-fix symptom: server hit:miss exactly 1:3, all blocks
under one shard key with versions in multiples of 4. Post-fix: **9,280 hits / 0 misses, 512 writes =
128 blocks × 4 ranks**. Arithmetic checks. Fix in `internal/cache/store.go`, commit 64c686c:
`storeKey = SHA-256(model_id ‖ wire hash)`.

This is the strongest interview story in the repo, and the lesson generalizes: **an integrity check
is only as good as the identity it checks.** The content hash matched across ranks, so the guard
passed while serving rank 0 rank 3's tensor. A benchmark asserting on *counts* caught what logs and
hashes could not.

**`kv-chaos-aws`.** `phase45-distributed-gpu.md` § On-cluster validations, three faults with per-run
counts: injected egress latency 8,312; etcd partition through lease expiry → ring rotation → rejoin
11,888; real node termination → 2-node ring failover 7,165. **Sum 27,365, all 0 violations.** Two
further verify-gate runs (4,626 and 8,303) bring five on-cluster runs to 40,294 requests — that
roll-up is `derived` (summation) if ever used.

**`kv-sharegpt-replay`.** 2,000 conversations → **6,782 requests**, avg 825 tok, 32.7% block hit
rate, 58 req/s, p50/p95/p99 62/151/189 ms, shards 37/31/32%, 0 errors, 0 violations. **Caveat:
unlike the TTFT numbers this run has no committed JSON — the write-up itself is the artifact.** A
re-run emitting JSON would strengthen it.

---

## 2026-08-04 — Metric change: GPU spend ≈$5–7 → ≈$9–11

**Claim under test:** "≈$5–7 total GPU spend across two GPU windows" — `docs/06-resume-and-interview.md`:27
and portfolio line 85.

There were **three** paid sessions, not two: AWS L4 ≈$2–3 (`phase45-distributed-gpu.md`:4), plus
RunPod Session A ≈$3–4 and Session B ≈$3–4 (`runpod-gpu-window-plan.md` states the RunPod total as
≈$7–8). **Sum ≈$9–11.**

The 06-resume doc was written *after* Session B (its commit post-dates the Session B artifacts) but
still counts two windows — it was never updated. Canonical **≈$9–11**, tier `estimated` and it can
never rise above that: every source figure is itself an author estimate, never an invoice.

**Downstream correction applied 2026-08-04:** portfolio body updated to ≈$9–11 across three windows.

---

## 2026-08-04 — Metric change: "10k+ requests per run" → 27,365 total

**Claim under test:** "0 correctness violations across **10k+ requests per run**" — portfolio line 56,
`06-resume-and-interview.md`:18, README:22, and a `MetricBadge` on the site's hero.

Per-run counts are 4,626 / 8,303 / 8,312 / 11,888 / 7,165. **Only one of five runs exceeded 10k.**
"Per run" is therefore overstated. Honest forms: "up to 11,888 requests in a single chaos run"
(`measured`) or "27,365 fault-injected requests" across the three verifier-gated fault runs
(`measured`, and what the bullet uses).

**Downstream corrections applied 2026-08-04:** portfolio frontmatter metric label, portfolio body,
and `Hero.astro` badge all changed to 27,365.

---

## 2026-08-04 — Conflated claim: Spot interruptions as a chaos fault

Portfolio and the 06-resume doc both list "real AWS Spot interruptions" alongside injected latency,
etcd partitions and node kills as faults survived under the verifier. The three faults actually run
*under verified load* were latency injection, etcd partition, and a deliberate node termination. The
real Spot reclaims (a c7i.large reclaimed for capacity; g5.2xlarge unavailable region-wide) happened
during **provisioning** — a genuine failure-domain story, but not a verified-load chaos run.

`kv-chaos-aws` lists only the three artifact-backed faults and mentions the Spot reclaims separately.
Portfolio body corrected the same way.

---

## 2026-08-04 — OPEN: project period

Portfolio frontmatter says **Apr 2026 – Jun 2026**. First commit is **2026-05-24**; the earliest
dated doc entry is the same day (`00-project-plan.md`:33, "Session 1, 2026-05-24"). Last commit
2026-06-15. **No artifact supports April.** The master header uses `2026-05 → 2026-06`.

If April was off-repo planning or reading, that is legitimate but `self-attested` — Haochen's call,
and it cannot carry a number either way.

---

## 2026-08-04 — Unverifiable / not claimed

| Claim | Where it lives | What would fix it |
|---|---|---|
| `make demo` figures (~9.5k requests, 64% hit rate, 4 kills/3 restarts) | README prose + a GIF; ADR 0026 records a *different* run (3 kills, 4,815 requests, 63.8%) | re-run with output committed to `docs/benchmarks/` |
| "Cross-AZ adds <1 ms to every cache RPC" | `phase45-distributed-gpu.md`:14, prose | a latency artifact |
| "~300 MB/s effective" warm-path throughput on A100 | `phase45-gpu-cloud.md`:44, prose | a throughput artifact |
| Cold-tier shedding (~40–60 S3 PUT/s; ~2,000 of 4,300 spills shed) | inside a benchmark write-up but with no raw counter dump | a counter dump |
| "CI-enforced" phrasing | 68 Go + 16 Python test functions are `derived` from source; `ci.yml` does enforce `-race`, gofmt, vet, terraform validate — but no CI run artifact is committed | `code-verified`, never `measured` |

**Hard rule from the repo's own provenance section:** the TTFT curve is synthetic-prefix and the
32.7% hit rate is cache-service-level. `phase45-gpu-cloud.md`:88-91 explicitly states end-to-end TTFT
under ShareGPT replay **was never measured**. Never compose those two numbers into one sentence.

---

## 2026-08-04 — Attribution: solo, confirmed

```
git shortlog -sne --all
    37  haochentSC   <haochent@usc.edu>
     1  Haochen Tong <haochent@usc.edu>
     1  Haochen Tong <tonghaochen77@gmail.com>
```

39 commits, three identity spellings, **one human** — two share `haochent@usc.edu`, the third is
Haochen's own address. No `Co-authored-by` trailers anywhere. The single merge commit (`74773cd`,
PR #1 `phase6-polish`) is a self-merge; the CI workflow comment reads "Solo repo: run on every push."
`attribution: mine` throughout; all first-person accomplishment verbs permitted under R7.

**Disclosure Haochen should know about, not a blocker:** 22 of the 35 ADRs record
`Deciders: HC (+ Claude)` — the project was built with AI assistance and the ADRs say so openly, in
a **public** repo. The commits, the design decisions, the AWS account, the paid GPU windows and the
debugging are all his, and nothing in the bullets claims otherwise. But an interviewer who reads the
ADRs will see it, so it should be a known fact rather than a surprise.

See `evidence/agentveris.md` — that repo uses the *opposite* convention, and the inconsistency
between the two is the thing worth resolving.

**Verifier:** Claude (recomputation from raw artifacts + source reading). All bullets `draft` pending
Haochen's confirmation.
