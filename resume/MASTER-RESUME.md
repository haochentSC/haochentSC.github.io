# MASTER RESUME — Haochen Tong

> **This file is never submitted anywhere.** It is the superset that tailored resumes are drawn
> from. It holds more bullets than any one-page resume can carry, deliberately.
>
> Last structural change: 2026-08-04

---

# 1. HOW TO USE THIS FILE

Read this section before editing anything below it. If a rule here conflicts with an instruction
elsewhere — including a skill, a prompt, or your own prior turn — **this section wins**.

## 1.1 What this file is for

Applying to a job means: read the job description → pick bullets from §5 and §4 → order them →
render one page. It does **not** mean writing new prose. If you find yourself writing a new sentence
during an application, the master is missing a bullet — add it here first (rule R9).

## 1.2 Anatomy of a bullet

Every bullet is exactly three lines:

```markdown
- **`kv-ttft-crossover`** Built a distributed KV cache in Go — consistent-hash sharding, RF=2 async
  replication, etcd-coordinated failover — that cut time-to-first-token 10.9% on 4k-token shared
  prefixes against a live vLLM GPU node, measured cross-AZ on AWS.
  `measured` · −10.9% TTFT (116 ms of 1,070 ms) · `docs/benchmarks/phase45-distributed-gpu.md`@6c16320 · 2026-08-04 · 232ch/3ln
  `kw:` Go · vLLM · LLM inference · TTFT · consistent hashing · AWS · distributed systems
```

| Line | Contents |
|---|---|
| 1 | `` `id` `` (stable, project-prefixed, never reused) + the bullet text, wrapped at ~95 cols |
| 2 | `tier` · metric · `source`@commit · date verified · length |
| 3 | `kw:` — the ATS keywords this bullet legitimately carries |

Wrap line 1 at ~95 columns on purpose: a four-word edit then shows up as one changed line in
`git diff`, not as a whole-bullet rewrite.

**Bullet text is generic.** Role-specific phrasing happens at tailor time, not here. Write the
clearest complete version of the claim and let the tailoring step trim and re-emphasize.

## 1.3 Verification tiers

The tier names your confidence. It is not decoration — rules below key off it.

| Tier | Means | May carry a number? |
|---|---|---|
| `measured` | A benchmark artifact **in the repo** produced this number | Yes |
| `derived` | Computed from source during verification (e.g. summing layer params) | Yes |
| `code-verified` | Behavior confirmed by reading the code; no number claimed | No |
| `self-attested` | No artifact reachable; the claim rests on the user's memory | At most one |
| `estimated` | Approximate; the bullet text **must** hedge (`~`, `about`, `approx.`) | Yes, hedged |
| `disputed` | Sources conflict, unresolved | **Never ships** |

Recalling a number from memory is `self-attested`, not `measured` — even if you are confident, and
even if it appeared in an earlier resume. A number is `measured` only when you can point at the
artifact that produced it.

## 1.4 Status and attribution

Both default to the common case and are written only when they differ:

- **status** — `active` by default. Write `draft` (mined but not yet confirmed by Haochen; never
  renders) or `retired` (see R3).
- **attribution** — `mine` by default. Write `shared` (co-built) or `team-context` (true of the
  project, not of Haochen personally).

Tag them inline after the id: ``- **`ds-mercari-seed`** `team-context` The marketplace ran on…``

## 1.5 The rules

**R1 — Provenance.** Every number carries a tier, a source, and a verification date. A `disputed`
bullet never enters an application. An `estimated` bullet must hedge in its text. A `self-attested`
bullet carries at most one number, and that number must be an outcome, not an infrastructure fact.

**R2 — Adding.** The project set is exactly the six in §5. A seventh requires Haochen to explicitly
say "add project X." New bullets land as `draft` and do not render until he confirms each number
aloud. Any new subject needs an `evidence/<id>.md` ledger with at least one verification event.

**R3 — Retiring.** Set `retired`, move the bullet to §7, add a one-line reason. **Never delete.**
The record of what was once claimed is what stops a stale number quietly reappearing later. Retired
ids are permanently reserved and never reused.

**R4 — Changing a metric.** Update the verification date in the same edit. If the number changes
but `source`@commit does not, that is an error — a number cannot move without its evidence moving.
Append old → new → why to the ledger. **Never round up:** 1,777,411 → "1.78M" ✓, "1.8M" ✗.

**R5 — Deleting a bullet.** There is no delete, only `retired`. If the id appears in any
`applications/*/selection.md`, it may already be in a submitted resume — retiring it is mandatory
and removing it is forbidden.

**R6 — Resolving a conflict.** Precedence, highest wins:
1. Recomputation from source code, or a benchmark re-run now → `derived` / `measured`
2. A committed benchmark artifact in the repo
3. The repo's README or an ADR
4. Portfolio frontmatter (`src/content/projects/*.md`)
5. The old resume (`haochent_resume_v1.tex`)

Procedure: mark every side `disputed` → recompute at tier 1 → log it in `evidence/<id>.md` → set the
canonical value → **correct every downstream surface in the same session.**

**R7 — Attribution.** Only `mine` bullets may open with a first-person accomplishment verb (Built,
Designed, Shipped, Diagnosed, Engineered). A `team-context` bullet must contain a scoping phrase
("owned X on a 4-person team", "contributed Y to"). Never claim a metric produced by a teammate's
subsystem.

**R8 — Portfolio sync.** The direction is **master → portfolio, always.** The portfolio's
`README.md`, `src/content/config.ts`, `ExperienceItem.astro`, and `SkillGrid.astro` already declare
this file as their upstream. The portfolio may carry *more narrative* than the resume; it may never
carry *different numbers*.

**R9 — Scope.** Bullet-level superset: 8–15 bullets for a major project, 4–6 for a thin one.
Project-level exact set: six. Tailoring changes the summary, the ordering of skills, which bullets
are selected, and — see R10 — how far each selected bullet is condensed. Nothing else.

**R10 — Condensing at tailor time.** Bullets here are written long and complete: they average ~257
characters, where a one-page resume needs ~157 (the length that fit on
`haochent_resume_v1.tex`). Tailoring may therefore **cut** from a selected bullet — drop a clause,
a parenthetical, a secondary metric — to make it fit.

It may **never add**: no new claim, no new number, no metric that isn't already in this file, and
never a change that makes a claim *stronger* than the master states it. Removing a hedge is adding.
Removing a scoping phrase from a `team-context` bullet is adding.

When a condensed version turns out to be good, **write it back here as a second bullet** with its own
id and the same evidence line. That is how the master learns short forms instead of re-deriving them
every application. The provenance never changes — only the prose gets shorter.

## 1.6 Where things live

| Path | Purpose |
|---|---|
| `MASTER-RESUME.md` | This file. Hand-authored, no build step, single copy of every sentence |
| `evidence/<id>.md` | Append-only verification ledger, one per subject |
| `applications/<date>-<company>-<role>/` | `jd.md`, `selection.md`, the rendered resume |

This directory is a **git repo of its own** and is gitignored by the portfolio repo, so career data
never reaches the public GitHub Pages deploy. Because it is ignored, `git clean -fdx` in the
portfolio would delete it — push it to a **private** remote.

---

# 2. PROFILE

**Haochen Tong**
708-548-0314 · tonghaochen77@gmail.com
linkedin.com/in/haochent · github.com/haochentSC · haochentsc.github.io

**Positioning:** Systems & AI-infra engineer. Open to SWE and AI-infra roles.

*Summary lines are written at tailor time against the job description. Keep the raw material here:*

- MCS student at UIUC with production SWE internship experience and a body of self-directed systems
  work in LLM inference infrastructure.
- Builds and measures: distributed caches, vLLM integrations, async web backends, and the
  benchmarks that prove whether they actually helped.
- Ships to production — one live SaaS product with real users, deployed and operated solo.

---

# 3. EDUCATION

**University of Illinois Urbana-Champaign** — Master of Computer Science (MCS) · Urbana, IL
Jan 2026 – Present
`code-verified` · from `haochent_resume_v1.tex` and portfolio Hero.astro · 2026-08-04

**University of Southern California** — B.S. Computer Science · Los Angeles, CA
Aug 2022 – Dec 2025
`code-verified` · from `haochent_resume_v1.tex` · 2026-08-04

*Coursework, GPA, and honors: not yet recorded. Add if a job description asks for them.*

---

# 4. EXPERIENCE

### Software Engineering Intern — Stringer News
`id:` stringer-news · `2025-08 → 2025-12` · Los Angeles, CA · `attribution:` mine
`site:` https://www.info.stringer.news/
`portfolio:` src/components/ExperienceItem.astro
`stack:` Python · Flask · REST · SendGrid · PostgreSQL (JSONB, array queries) · Redis · Docker · PowerShell

> **No local repo on this machine.** Every bullet below is `self-attested`, sourced from
> `haochent_resume_v1.tex` and `ExperienceItem.astro`, professionally tightened. Haochen has said
> he will do a verification pass on this section; until then the numbers are carried forward but
> flagged in `evidence/stringer-news.md`. See `resume-master/references/repoless-interview.md`.

- **`sn-email-digest-api`** Shipped a Flask Blueprint exposing REST endpoints for single-user and
  batch email digest dispatch, integrating SendGrid dynamic templates, PostgreSQL JSONB
  recommendation queries, and Redis-backed idempotency into a production email pipeline.
  `code-verified` · no metric claimed · `haochent_resume_v1.tex`:119 · 2026-08-04 · 242ch/3ln
  `kw:` Python · Flask · REST · API design · SendGrid · PostgreSQL · JSONB · Redis · idempotency

- **`sn-batch-enrichment`** Built a recommendation enrichment layer joining cached JSONB
  recommendations with batch event lookups through PostgreSQL array queries, enabling batch sends of
  100 users per request.
  `self-attested` · 100-user batch per request · `haochent_resume_v1.tex`:120 · 2026-08-04 · 182ch/2ln
  `kw:` PostgreSQL · JSONB · array queries · batch processing · caching · backend

- **`sn-api-auth-isolation`** Implemented decorator-based API-key authentication and structured
  4xx/5xx error handling with per-user isolation in batch dispatch, so a single failing recipient
  could not abort an in-flight batch.
  `code-verified` · no metric claimed · `haochent_resume_v1.tex`:121 · 2026-08-04 · 197ch/2ln
  `kw:` authentication · API keys · error handling · fault isolation · REST · Python

- **`sn-autosave-draftloss`** Engineered debounced auto-save with optimistic UI and sync conflict
  resolution for the article editor, cutting draft loss by 90%.
  `self-attested` · 90% reduction in draft loss · `haochent_resume_v1.tex`:122 · 2026-08-04 · 129ch/2ln
  `kw:` frontend · debouncing · optimistic UI · conflict resolution · state synchronization

- **`sn-autosave-reliability`** Engineered debounced auto-save with optimistic UI and sync conflict
  resolution for the article editor, holding save failures below 0.5% of write attempts.
  `self-attested` · <0.5% save-failure rate · `haochent_resume_v1.tex`:122 · 2026-08-04 · 154ch/2ln
  `kw:` frontend · reliability · optimistic UI · conflict resolution · error rate

- **`sn-autosave-nometric`** Engineered debounced auto-save with optimistic UI and sync conflict
  resolution, eliminating the draft-loss and save-failure paths that made the article editor
  unreliable for writers on slow connections.
  `code-verified` · no metric claimed — the defensible version when the numbers can't be sourced · `haochent_resume_v1.tex`:122 · 2026-08-04 · 202ch/2ln
  `kw:` frontend · debouncing · optimistic UI · conflict resolution · state synchronization

- **`sn-docker-onboarding`** Containerized the backend services with Docker, cutting new-developer
  setup to under 15 minutes.
  `self-attested` · <15 min onboarding · `haochent_resume_v1.tex`:123 · 2026-08-04 · 96ch/1ln
  `kw:` Docker · containerization · developer tooling · onboarding · DevOps

- **`sn-ops-scripts`** Wrote PowerShell operations scripts exercising the dispatch path in both
  dry-run and live modes, making a production send verifiable before it reached real recipients.
  `code-verified` · no metric claimed · `haochent_resume_v1.tex`:121 · 2026-08-04 · 167ch/2ln
  `kw:` PowerShell · operations · scripting · testing · release verification

---

# 5. PROJECTS

<!-- AgentVeris and Deepsick Marketplace are still to be mined; Modality-Aware KV Tiering is
     deferred until the repo is cloned locally. All bullets below are `draft` until Haochen
     confirms each number aloud (R2). -->

### Distributed KV Cache for LLM Inference
`id:` distributed-kv-cache · `2026-05 → 2026-06` · `attribution:` mine
`repo:` C:\Users\tongh\Distributed-KV-Cache-for-LLM-Inference
`public:` https://github.com/haochentSC/Distributed-KV-Cache-for-LLM-Inference
`portfolio:` src/content/projects/distributed-kv-cache.md
`upstream:` docs/benchmarks/ (raw artifacts) → docs/06-resume-and-interview.md → this file
`stack:` Go · gRPC/Protobuf · etcd · consistent hashing · vLLM · AWS · Terraform · Prometheus

- **`kv-ttft-crossover`** Built a distributed KV cache in Go — consistent-hash sharding, RF=2
  async replication, etcd-coordinated failover — that cut time-to-first-token 10.9% on 4k-token
  shared prefixes against a live vLLM GPU node, measured cross-AZ on AWS.
  `measured` · −10.9% TTFT (116 ms of 1,070 ms) · `docs/benchmarks/phase45-distributed-gpu.md`@ccd1afe · 2026-08-04 · 233ch/3ln
  `kw:` Go · vLLM · LLM inference · TTFT · consistent hashing · AWS · distributed systems

- **`kv-crossover-envelope`** Characterized where remote KV caching stops paying rather than
  reporting only the win: on an AWS L4 the cache loses 5.3% at 269-token prefixes, breaks even near
  1k tokens, and wins 7.6% at 2k and 10.9% at 4k — prefill grows super-linearly, the fetch linearly.
  `measured` · −5.3% @ 269 tok → +10.9% @ 4,110 tok · `docs/benchmarks/phase45-distributed-gpu.md`@ccd1afe · 2026-08-04 · 259ch/3ln
  `kw:` benchmarking · performance analysis · latency · caching · GPU · negative results

- **`kv-a100-no-crossover`** Published the negative result alongside the win: on an A100 80GB
  the crossover never lands within 32k tokens of shared prefix — the warm-path deficit shrinks
  monotonically from −171% to −91% but stays negative, because flagship prefill outruns a
  Python-bound gRPC transfer path.
  `measured` · no crossover ≤32,271 tokens · `docs/benchmarks/phase45-longcontext-qwen7b.json`@44a1356 · 2026-08-04 · 278ch/3ln
  `kw:` A100 · long context · performance analysis · honest benchmarking · gRPC · serialization

- **`kv-14b-kv-bytes`** Falsified the naive "bigger model ⇒ the cache wins" assumption by
  measuring Qwen2.5-14B as worse than 7B at the same 4k-token prefix (−270% vs −181%): the crossover
  is set by KV bytes per unit of recompute cost, not by parameter count.
  `measured` · 14B −270% vs 7B −181% @ 4,110 tokens · `docs/benchmarks/phase45-longcontext-qwen14b.json`@44a1356 · 2026-08-04 · 235ch/3ln
  `kw:` LLM inference · KV cache · GQA · scaling analysis · model serving · measurement

- **`kv-tp4-silent-corruption`** Diagnosed a silent KV-shard corruption bug under tensor
  parallelism — four ranks hashed identical tokens but held different KV-head shards, so
  last-writer-wins clobbering still passed the content-hash integrity guard — caught it with a
  benchmark asserting on exact write counts rather than on logs, and fixed it by namespacing store
  keys by model identity.
  `measured` · 512 writes = 128 blocks × 4 ranks, exactly once · `docs/benchmarks/phase45-gpu-cloud.md`@ccd1afe · 2026-08-04 · 356ch/4ln
  `kw:` debugging · tensor parallelism · data integrity · hashing · vLLM · distributed correctness

- **`kv-vllm-connector`** Built a custom vLLM `KVConnectorBase_V1` connector without forking
  vLLM, paging attention KV tensors GPU↔host↔gRPC with tensor-parallel-aware key namespacing,
  validated end-to-end at TP=4 on Qwen2.5-32B across 4× A40 with 9,280 batch-fetch hits and 0 misses.
  `measured` · TP=4 / 32B / 4× A40; 9,280 hits, 0 misses · `docs/benchmarks/phase45-tp4-qwen32b.json`@f3fe7ad · 2026-08-04 · 258ch/3ln
  `kw:` vLLM · Python · ML serving · PagedAttention · tensor parallelism · gRPC · integration

- **`kv-replication-failover`** Designed the cluster's failure story in Go: RF=2 async
  replication placed on a consistent-hash ring, implicit replica promotion by ring rotation when an
  etcd lease expires, and graceful drain wired to EC2 Spot's two-minute interruption notice.
  `code-verified` · no metric claimed · `internal/cluster`, `internal/coord`, `internal/spot`@6c16320 · 2026-08-04 · 243ch/3ln
  `kw:` distributed systems · replication · failover · etcd · leases · consistent hashing · Go

- **`kv-correctness-oracle`** Made "no correctness violations" falsifiable instead of a
  slogan: specified the cache invariant, then built a client-side oracle that regenerates each
  block's expected bytes from its key so a wrong byte fails the run's exit code.
  `code-verified` · no metric claimed · `docs/adr/0016-cache-correctness-invariant.md`@c275cc6 · 2026-08-04 · 229ch/3ln
  `kw:` correctness · testing · chaos engineering · invariants · distributed systems · CI gates

- **`kv-chaos-aws`** Chaos-tested a live 3-node AWS cluster with the correctness verifier
  running through every fault — injected egress latency, an etcd partition through lease expiry and
  ring rejoin, and a real node termination with failover to a 2-node ring — sustaining 0
  correctness violations across 27,365 fault-injected requests.
  `measured` · 0 violations across 27,365 fault-injected requests · `docs/benchmarks/phase45-distributed-gpu.md`@ccd1afe · 2026-08-04 · 315ch/3ln
  `kw:` chaos engineering · fault injection · AWS · etcd · failover · reliability · observability

- **`kv-eviction-pareto`** Devised a work-conserving multi-tenant eviction policy — GDSF
  cost-awareness plus an elastic max-min fairness discount — that Pareto-dominates static per-tenant
  quotas, raising global hit rate 12.2% → 14.4% and worst-tenant hit rate 10.3% → 12.3% at once.
  `measured` · +2.2 pts global, +2.0 pts worst-tenant vs static caps · `docs/benchmarks/phase5b-eviction.md`@ccd1afe · 2026-08-04 · 255ch/3ln
  `kw:` cache eviction · GDSF · multi-tenancy · fairness · max-min · resource allocation · policy design

- **`kv-fairness-knob-saturates`** Swept the efficiency↔fairness frontier across seven
  configurations averaged over three seeds and found the fairness knob saturates: the entire
  transition from a 20.0% global / 1.9% worst-tenant efficiency corner to a ~14% / ~12% plateau
  happens within a quarter of the knob's range.
  `measured` · 20.0%/1.9% → 14.4%/12.3%, plateau for w ≥ 0.25 · `docs/benchmarks/phase5b-frontier.csv`@47b8216 · 2026-08-04 · 282ch/3ln
  `kw:` systems research · parameter sweep · Pareto frontier · fairness · caching · experiment design

- **`kv-sharegpt-replay`** Replayed 2,000 multi-turn ShareGPT conversations — 6,782 requests —
  against the live 3-node AWS cluster, measuring a 32.7% organic block hit rate at 58 req/s with
  p50/p95/p99 of 62/151/189 ms, traffic balanced across shards, 0 errors and 0 violations.
  `measured` · 6,782 requests, 32.7% hit rate, p50 62 ms · `docs/benchmarks/phase45-distributed-gpu.md`@ccd1afe · 2026-08-04 · 251ch/3ln
  `kw:` workload replay · ShareGPT · benchmarking · throughput · tail latency · load balancing

- **`kv-terraform-aws`** Provisioned the entire benchmark cluster from Terraform — VPC, a
  3-node on-demand etcd quorum, Spot cache nodes, ECR, an S3 cold tier, IAM instance roles, and
  CloudWatch alarms — and used real Spot reclaims as an authentic failure signal rather than
  simulating node loss.
  `derived` · 19 Terraform files, 983 lines · `terraform/cluster/`@6c16320 · 2026-08-04 · 271ch/3ln
  `kw:` Terraform · IaC · AWS · EC2 Spot · S3 · IAM · ECR · CloudWatch · cloud infrastructure

- **`kv-observability-nodeloss`** Instrumented the cache with Prometheus behind a metrics-free
  core — private registry, gRPC interceptors, deliberately bounded label cardinality — then fixed
  CloudWatch node-loss alarms that never fired because a terminated instance stops emitting
  datapoints altogether.
  `code-verified` · no metric claimed · `internal/metrics`@2ff687e, `terraform/cluster/cloudwatch.tf`@de11fc8 · 2026-08-04 · 269ch/3ln
  `kw:` Prometheus · observability · metrics · cardinality · Grafana · CloudWatch · alerting · gRPC

- **`kv-gpu-spend`** Ran the whole GPU benchmark program — one AWS L4 window plus two cloud
  sessions on an A100 and on 4× A40 — for approximately $9–11 of total GPU spend, sizing each paid
  window from a written runbook with a cost estimate and an enforced teardown step.
  `estimated` · ≈$9–11 total, hedged · `docs/benchmarks/runpod-gpu-window-plan.md`@f3fe7ad · 2026-08-04 · 249ch/3ln
  `kw:` cost engineering · GPU · cloud economics · Spot · benchmarking · runbooks

---

### World Models — Model-Based RL Pipeline (CarRacing-v3)
`id:` world-models · `2025-08 → 2025-12` · USC CSCI 467 · `attribution:` mine
`repo:` C:\Users\tongh\worldModels_CSCI_467
`public:` https://github.com/haochentSC/worldModels_CSCI_467
`portfolio:` src/content/projects/world-models.md
`stack:` Python · PyTorch · Gymnasium · stable-baselines3 · cma · TensorBoard · NumPy

- **`wm-vae-params`** Built the vision model of a World Models reproduction — a convolutional
  VAE compressing 64×64×3 CarRacing frames to 32-dim latents through four strided conv layers and a
  mirrored transposed-conv decoder, totalling 1,777,411 parameters.
  `derived` · 1,777,411 params (1.78M) · `models/vae.py`:30-83@7a8bd85 · 2026-08-04 · 235ch/3ln
  `kw:` PyTorch · VAE · representation learning · computer vision · CNN · latent space · deep learning

- **`wm-mdrnn-params`** Recomputed the MDN-RNN memory model at 383,557 parameters by summing a
  35→256 LSTM across four gates and three mixture-density heads over five Gaussians, correcting a
  422K figure that had been carried in the README architecture diagram and on the portfolio.
  `derived` · 383,557 params (384K), was 422K · `models/mdrnn.py`:44-50@7a8bd85 · 2026-08-04 · 257ch/3ln
  `kw:` PyTorch · LSTM · mixture density network · sequence modeling · world models · deep learning

- **`wm-controller-params`** Designed the controller as a deliberately minimal 867-parameter
  linear map from the 288-dim [latent, hidden] state to three continuous CarRacing actions, small
  enough to be optimized as a flat vector by CMA-ES rather than by backpropagation.
  `derived` · 867 params (288×3 + 3) · `models/controller.py`:35@7a8bd85 · 2026-08-04 · 241ch/3ln
  `kw:` reinforcement learning · CMA-ES · evolutionary optimization · policy design · PyTorch

- **`wm-posterior-collapse`** Diagnosed VAE posterior collapse that the loss curve hid — the
  default KL weight drove the model to ignore its latents and emit identical blurry reconstructions
  — and restored informative latents by dropping the KL weight to 1e-4, verified visually against
  held-out frames.
  `code-verified` · no metric claimed · `scripts/train_vae.py`:124@7a8bd85 · 2026-08-04 · 273ch/3ln
  `kw:` VAE · posterior collapse · beta-VAE · KL divergence · debugging · model diagnostics · PyTorch

- **`wm-ppo-latent-control`** Trained a PPO controller to drive purely on 32-dim VAE latents
  rather than raw pixels, reaching a mean score of 285 over 10 real-environment episodes after
  500,000 timesteps on a single laptop GPU.
  `measured` · mean 285 over 10 episodes, 500k timesteps · `docs/images/final_scores.png`@7a8bd85 · 2026-08-04 · 197ch/2ln
  `kw:` reinforcement learning · PPO · stable-baselines3 · Gymnasium · GPU training · policy learning

- **`wm-eval-variance`** Reported CarRacing's high evaluation variance honestly by publishing
  two independent 10-episode runs of the same checkpoint — mean 285 and mean 207.6 — rather than the
  single best number, with per-episode rewards committed as raw JSON.
  `measured` · 285 vs 207.6 mean across two 10-episode runs · `docs/demo_results.json`@7a8bd85 · 2026-08-04 · 235ch/3ln
  `kw:` evaluation · variance · reproducibility · benchmarking · reinforcement learning

- **`wm-training-plateau`** Characterized where the training budget stops paying: evaluation
  reward climbed to a peak near 440 by 175k timesteps, then oscillated without further gain through
  the remaining 325k steps.
  `measured` · peak ~440 at 175k of 500k steps · `docs/images/training_curve.png`@7a8bd85 · 2026-08-04 · 188ch/2ln
  `kw:` reinforcement learning · training dynamics · evaluation · negative result · TensorBoard

- **`wm-data-pipeline`** Built a parallel rollout collector that gathered 100,000 CarRacing
  frames from 250 episodes under a Brownian exploration policy, fanned across 8 worker processes via
  a multiprocessing pool and serialized to a single compressed NumPy archive.
  `derived` · 100,000 frames, 250 episodes, 8 workers · `scripts/collect_data.py`:39-141@7a8bd85 · 2026-08-04 · 241ch/3ln
  `kw:` data pipeline · multiprocessing · parallelism · NumPy · Gymnasium · dataset construction

- **`wm-dual-optimizer-paths`** Implemented both controller-training paths from the paper
  behind one module — CMA-ES over a flattened parameter vector, and PPO through a Gymnasium wrapper
  exposing VAE latents as the observation space — so the two optimizers shared one environment stack.
  `code-verified` · no metric claimed · `scripts/train_controller_cma.py`, `utils/envs.py`:108-144@7a8bd85 · 2026-08-04 · 255ch/3ln
  `kw:` reinforcement learning · CMA-ES · PPO · Gymnasium · API design · environment wrappers

- **`wm-repro-artifacts`** Made the result reproducible from a clean checkout by committing
  scored gameplay GIFs, per-episode reward JSON, VAE reconstruction grids and regenerated plots
  alongside seeded runs, checkpointing and TensorBoard logging.
  `code-verified` · no metric claimed · `docs/`, `scripts/plot_results.py`@7a8bd85 · 2026-08-04 · 220ch/3ln
  `kw:` reproducibility · experiment tracking · TensorBoard · checkpointing · MLOps · documentation

---

### NeuroMechFly Vision Sandbox
`id:` neuromechfly · `2025-01 → 2025-05` · `attribution:` mine
`repo:` C:\Users\tongh\NeuroMechFly-MinecraftVisionMapper
`public:` https://github.com/haochentSC/NeuroMechFly-MinecraftVisionMapper
`portfolio:` src/content/projects/neuromechfly.md
`stack:` Python · FlyGym · MuJoCo / MJCF · dm_control · Gymnasium · OpenCV (CUDA) · NumPy · NetworkX

> Thin project — 1,063 LOC, no benchmarks committed. Every bullet is `code-verified` or `derived`
> from a scope count. No performance number exists for this repo and none should be written.

- **`nmf-voxel-mjcf-arena`** Built a voxel-to-MJCF arena generator that parses Minecraft
  region files, extracts the topmost non-air block per column across a 16×16 chunk, and emits a
  dm_control MJCF scene of 256 per-block box geoms over a floor plane, colored by block type.
  `derived` · 256 box geoms (16×16 columns) · `MC2SandboxMapping/out_mjcf/mca_arena.xml`@7999462 · 2026-08-04 · 245ch/3ln
  `kw:` Python · MuJoCo · MJCF · dm_control · procedural generation · voxel · heightmap · simulation

- **`nmf-binocular-retina`** Built a binocular vision front end that splits a frame into
  left/right compound-eye halves and maps each through FlyGym's hexagonal retina model, sampling a
  512×450 raw grid down to 721 ommatidia per eye and reducing the pair to a brightness-asymmetry
  steering vector.
  `derived` · 721 ommatidia/eye from a 512×450 raw grid · `fly_vision_JPG_Movement_Quick.py`:54-77@7999462 · 2026-08-04 · 268ch/3ln
  `kw:` computer vision · OpenCV · NumPy · image processing · bio-inspired · sensorimotor · Python

- **`nmf-cuda-fallback`** Added an OpenCV CUDA path for per-frame color conversion and
  retina-resolution resizing, gated on runtime capability detection with a transparent CPU fallback,
  so the vision loop runs unchanged on machines without a CUDA-enabled OpenCV build.
  `code-verified` · no metric claimed · `fly_vision_JPG_Movement_Quick.py`:8-32@7999462 · 2026-08-04 · 242ch/3ln
  `kw:` CUDA · GPU acceleration · OpenCV · graceful degradation · portability · Python

- **`nmf-gym-env`** Built a Gymnasium environment wrapper over FlyGym's single-fly simulation
  exposing reset/step/render with declared Box observation and action spaces, driving all 42 actuated
  leg degrees of freedom by resampling 2 kHz recorded Drosophila kinematics onto a 10 kHz timestep.
  `derived` · 42 leg DOFs; 2 kHz → 10 kHz resampling · `fly_sandbox_env.py`:13-76@7999462 · 2026-08-04 · 271ch/3ln
  `kw:` Gymnasium · reinforcement learning · RL environment · MuJoCo · API design · simulation

- **`nmf-rule-based-gait`** Wired a rule-based inter-leg coordination gait onto FlyGym's
  rule-based controller, encoding three coupling rules across six legs as a weighted directed
  multigraph and stepping 10,000 position-controlled timesteps with adhesion into a recorded rollout.
  `derived` · 10,000 steps; 3 rules × 6 legs · `vision_ruleBased_controller.py`:18-109@7999462 · 2026-08-04 · 252ch/3ln
  `kw:` control systems · locomotion · graph algorithms · NetworkX · MuJoCo · simulation · Python

- **`nmf-repro-artifacts`** Committed reproducible run artifacts next to every experiment
  script — MP4 rollouts covering kinematic replay, gait control and arena flythrough, plus a
  joint-DOF time-series plot and left/right retinal views — so results stay inspectable without a
  working MuJoCo or CUDA install.
  `derived` · 3 MP4 + 6 PNG tracked in git · `outputs/`, `MC2SandboxMapping/out_mjcf/`@7999462 · 2026-08-04 · 280ch/3ln
  `kw:` reproducibility · visualization · matplotlib · diagnostics · developer experience

---

### Deepsick Marketplace — Second-Hand Marketplace with Fair-Price Analytics
`id:` deepsick-marketplace · `2026-01 → 2026-04` · UIUC CS411 · `attribution:` shared
`team_size:` 4 (Runying Chen [captain], Yutong Liu, Haochen Tong, JiaXin Wu)
`my_scope:` authentication · messaging backend · all three advanced database programs ·
Windows/Cloud SQL connectivity. **Not mine:** the connection pool (Runying Chen), the Mercari
import (Yutong Liu), the committed schema/seed DDL (JiaXin Wu).
`repo:` C:\Users\tongh\sp26-cs411-team038-Deepsick
`public:` https://github.com/cs411-alawini/sp26-cs411-team038-Deepsick (course org, private)
`portfolio:` src/content/projects/deepsick-marketplace.md
`stack:` Python · FastAPI · MySQL 8 · GCP Cloud SQL · React 19 · Vite · PBKDF2 · HMAC · pytest

> **Resolved 2026-08-06.** `doc/project_report.md` credits teammates for `/api/marketplace`,
> `/api/listing-detail` (the peer-stats CTE), and products CRUD, but `git blame` attributes all three
> to Haochen. He confirmed he wrote them — the report split nominal ownership by feature area while
> he integrated and wrote the backend. Those three bullets are now `mine`. See the ledger.

- **`ds-auth-pbkdf2`** Built the marketplace's authentication from scratch with no auth
  framework: PBKDF2-SHA256 password hashing at 390,000 iterations over a 16-byte random salt, stored
  as a self-describing `pbkdf2_sha256$iterations$salt$digest` string so the cost parameter can be
  raised without invalidating existing hashes.
  `derived` · 390,000 iterations, 16-byte salt · `app/backend/main.py`:100,142-147@5a7e69d · 2026-08-06 · 304ch/3ln
  `kw:` Python · authentication · PBKDF2 · password hashing · OWASP · application security · FastAPI

- **`ds-auth-hmac-session`** Designed stateless session tokens as a base64url
  `user_id:issued_at` payload signed with HMAC-SHA256, verified with `hmac.compare_digest` to defeat
  timing attacks and aged out against a configurable 7-day max age, so the API needs no session table
  and no Redis.
  `derived` · 604,800 s default max age · `app/backend/main.py`:172-216@5a7e69d · 2026-08-06 · 261ch/3ln
  `kw:` HMAC · session management · stateless auth · timing attacks · constant-time comparison

- **`ds-auth-multiformat-verify`** Implemented a three-branch password verifier so one login
  path accepts the current PBKDF2 format, 32-character legacy MD5 digests, and a plaintext fallback
  left for demo fixtures, comparing all three in constant time.
  `code-verified` · no metric claimed · `app/backend/main.py`:149-169@5a7e69d · 2026-08-06 · 217ch/3ln
  `kw:` password migration · backward compatibility · MD5 · constant-time comparison · legacy data

- **`ds-storedproc-conversation`** Built the `initiate_conversation` stored procedure, moving
  the whole contact-seller flow into MySQL: a JOIN across products and both user rows validates the
  listing and its participants, four `SIGNAL SQLSTATE` guards return descriptive errors, and a
  `GROUP BY` aggregate caps a buyer at 100 open conversations before the thread is created.
  `derived` · 4 SIGNAL guards, 100-thread cap · `app/backend/setup_advanced_programs.py`:23-104@104cdbe · 2026-08-06 · 339ch/4ln
  `kw:` MySQL · stored procedures · SQL · SIGNAL SQLSTATE · GROUP BY · JOIN · database programming

- **`ds-trigger-unarchive`** Built an `AFTER INSERT` trigger on messages that re-opens a
  conversation by clearing its archived flag, guarded so it only writes when the thread is actually
  archived, keeping inbox state aligned with activity with no application-layer code.
  `code-verified` · no metric claimed · `app/backend/setup_advanced_programs.py`:10-21@104cdbe · 2026-08-06 · 241ch/3ln
  `kw:` MySQL · triggers · database programming · declarative state · SQL · data consistency

- **`ds-serializable-txn`** Engineered a SERIALIZABLE transaction context manager around the
  stored-procedure call that sets the isolation level, commits on success and rolls back on any
  exception, so two rapid "Message Seller" clicks cannot create duplicate threads for one
  buyer-seller-product triple.
  `code-verified` · no metric claimed · `app/backend/database.py`:85-101@2b90f81 · 2026-08-06 · 275ch/3ln
  `kw:` transactions · isolation levels · SERIALIZABLE · race conditions · concurrency · MySQL

- **`ds-messaging-backend`** Built the buyer-seller messaging backend on a FastAPI/MySQL
  stack: thread listing with correlated latest-message and message-count subqueries, chronological
  message history, thread creation and message send, rejecting any sender who is not a party to the
  thread.
  `code-verified` · no metric claimed · `app/backend/main.py`:834-1037@5a7e69d · 2026-08-06 · 262ch/3ln
  `kw:` FastAPI · REST API · backend · SQL · subqueries · authorization · Python · Pydantic

- **`ds-windows-connector-fix`** Diagnosed a Windows-only Cloud SQL connection failure to
  auth-plugin loading in mysql-connector's C extension, fixed it by defaulting the pool to the
  pure-Python connector path with an env-overridable auth plugin, and wrote the runbook that got
  teammates connected.
  `code-verified` · no metric claimed · `app/backend/database.py`:24,33-36@5a7e69d, `doc/windows_start.md` · 2026-08-06 · 265ch/3ln
  `kw:` debugging · MySQL · GCP · Cloud SQL · Cloud SQL Auth Proxy · developer experience · runbooks

- **`ds-backend-tests`** Wrote 44 of the backend suite's 63 pytest tests, covering hash
  round-trip, legacy-MD5 verification, token-signature tampering, expiry and bearer-header
  extraction, plus dependency-injected endpoint tests that assert on the exact SQL parameters bound
  rather than on log output.
  `measured` · 44 of 63 tests authored; 63/63 pass on re-run · `app/backend/tests/test_api.py`@5a7e69d · 2026-08-06 · 276ch/3ln
  `kw:` pytest · testing · test design · dependency injection · FastAPI TestClient · Python

- **`ds-fair-price-cte`** Built the fair-price analytics query that is the product's whole
  differentiator: a two-stage CTE that pins a listing, gathers its peer group on null-safe `<=>`
  matches across category, brand and condition, and returns a verdict of fair, below-peers or
  above-peers against a ±20% band — degrading to `insufficient_peers` rather than lying when fewer
  than two comparables exist.
  `code-verified` · no metric claimed · `app/backend/main.py`:706-782@5a7e69d · 2026-08-06 · 376ch/4ln
  `kw:` SQL · CTE · MySQL · null-safe comparison · analytics · query design · product analytics

- **`ds-marketplace-browse`** Built the marketplace browse endpoint over a parameterized
  query builder: full-text search across name, description and brand, four optional filters, three
  sort orders, and bounded pagination — every branch validated by FastAPI regex and range
  constraints so no user input reaches SQL unparameterized.
  `code-verified` · no metric claimed · `app/backend/main.py`:633-703@5a7e69d · 2026-08-06 · 301ch/3ln
  `kw:` FastAPI · SQL injection prevention · query building · pagination · input validation · REST

- **`ds-products-crud`** Built the seller-side listing lifecycle — create, patch, delete and
  a my-listings view — with ownership checks on every mutating path so a seller can only alter their
  own products.
  `code-verified` · no metric claimed · `app/backend/main.py`:375-536@2b90f81 · 2026-08-06 · 180ch/2ln
  `kw:` FastAPI · REST API · CRUD · authorization · ownership checks · backend · Python

- **`ds-schema-6-tables`** `team-context` Contributed the messaging half of a 6-table
  normalized MySQL 8 schema on a 4-person team, adding the thread and message tables with
  `ON DELETE CASCADE` / `SET NULL` foreign keys and boolean state columns, while teammates owned the
  ERD and the committed DDL.
  `derived` · 6 tables · `app/backend/schema.sql`@ac1a96c · 2026-08-06 · 257ch/3ln
  `kw:` database design · normalization · MySQL · foreign keys · referential integrity · ENUM

- **`ds-mercari-seed`** `team-context` On a 4-person team, developed and demoed against a
  shared Cloud SQL database seeded by a teammate from a Mercari Kaggle export to 19,695 product rows
  — the corpus the fair-price peer-group aggregates were computed over.
  `measured` · 19,695 products / 1,971 users / 1,973 transactions · `doc/Database Design.md`:139-145@4f08259 · 2026-08-06 · 219ch/3ln
  `kw:` MySQL · data seeding · Kaggle · dataset · SQL analytics · Cloud SQL

---

### AgentVeris — Agentic Commerce Compliance Scanner
`id:` agentveris · `2026-03 → present` · `attribution:` mine
`repo:` C:\Users\tongh\AgentVeris — **closed source, no public repo**
`live:` https://www.agentveris.com/
`portfolio:` src/content/projects/agentveris.md
`stack:` Python 3.12 · FastAPI · Celery · PostgreSQL 16 · Redis 7 · SQLAlchemy/Alembic ·
Anthropic SDK · MCP (FastMCP) · Next.js 16 · React 19 · TypeScript · Railway · Vercel

> **Closed source changes what these bullets are worth.** A recruiter can independently verify the
> live product — the site, the health endpoint, the public no-signup scan flow, the 7 categories and
> their weights. Everything about the eval harness, the agent, remediation, and CI rests on a private
> repo: excellent interview material, no independent proof on paper. Lead with the verifiable half.

- **`av-scan-pipeline`** Built the asynchronous scan pipeline behind a live SaaS — FastAPI
  submits a scan and returns immediately, a Celery worker across 4 queues runs 8 check modules under
  per-check fault isolation, then a multi-page crawler follows up to 10 product pages before scoring.
  `derived` · 4 queues, 8 check modules, ≤10 product pages · `app/worker/tasks/crawl_site.py`:113-140@2ab7741 · 2026-08-06 · 264ch/3ln
  `kw:` Python · FastAPI · Celery · Redis · async pipelines · task queues · web crawling · fault isolation

- **`av-live-scan-latency`** Verified the pipeline against production rather than a dev box: a
  scan of a large Shopify storefront submitted to the live API completed end to end in 41 seconds,
  crawling 8 product pages and writing 53 individual check rows across all 7 scoring categories.
  `measured` · 41 s end-to-end; 53 checks, 8 pages · live run vs `api.agentveris.com`, scan `13ea4709`@db047dd · 2026-08-06 · 257ch/3ln
  `kw:` production · latency · end-to-end verification · REST API · web crawling · SaaS · measurement

- **`av-scan-typical-time`** Shipped a public scan flow that returns a full agent-readiness
  score in under a minute with no signup, running the whole check suite and multi-page crawl before
  scoring.
  `estimated` · under a minute — hedged; one production sample at 41 s, scan time scales with product-page count · live `agentveris.com` · 2026-08-06 · 169ch/2ln
  `kw:` SaaS · product · latency · public API · user experience · web crawling

- **`av-scoring-weights`** Designed the weighted scoring engine that turns raw check rows into
  an agent-readiness score: 38 distinct checks over 7 categories, per-check pass/warning/fail points
  rolled into per-category percentages, then a weight vector that sums to exactly 1.0 and is asserted
  by a unit test.
  `derived` · 38 checks, 7 categories, weights sum 1.0 · `app/services/scoring.py`:46-54@2ab7741 · 2026-08-06 · 282ch/3ln
  `kw:` scoring systems · algorithm design · Python · product analytics · unit testing · rubric design

- **`av-mcp-both-sides`** Built MCP on both sides of the product — a 5-check MCP readiness
  category scoring well-known discovery, server-card validity, declared tools and transport
  reachability, and AgentVeris itself as a FastMCP server exposing 3 tools and 5 scan resources so an
  AI client can run a scan over the protocol.
  `derived` · 5 checks · 3 MCP tools + 5 MCP resources · `mcp_server.py`:57-291@c970bd4 · 2026-08-06 · 298ch/3ln
  `kw:` MCP · Model Context Protocol · FastMCP · SSE · AI tooling · protocol design · Anthropic ecosystem

- **`av-remediation-subsystem`** Built a post-scan remediation subsystem as its own bounded
  context: 6 Postgres tables, a normalizer collapsing failed checks into 4 durable site-level issue
  families, a template-driven recommendation engine, evidence links back to the originating check
  rows, and a reconciler grading each re-scan as resolved, improved, unchanged, regressed, or reopened.
  `derived` · 6 tables, 4 issue families, 5 reconciliation outcomes · `app/remediation/`@e47bde7 · 2026-08-06 · 354ch/4ln
  `kw:` domain modeling · PostgreSQL · bounded context · idempotency · REST API design · workflow systems

- **`av-remediation-registration`** Diagnosed remediation runs stuck pending forever: Celery
  autodiscovery expects `tasks.py` modules, so a package-style task layout left the named tasks
  unregistered in the API process that enqueued them — fixed with explicit package imports, a
  registration regression test, and an endpoint that re-queues stale runs and marks crashed ones failed.
  `code-verified` · no metric claimed · `app/worker/celery_app.py`:48-51@63f3189 · 2026-08-06 · 345ch/4ln
  `kw:` debugging · Celery · distributed task queues · reliability · regression testing · failure modes

- **`av-postgres-artifacts`** Modeled the whole product in Postgres across 13 tables and 8
  Alembic migrations, including a raw-capture layer that persists 8 artifact types per scan under a
  2 MB cap, composite indexes, and a 90-day purge task for stored HTML.
  `derived` · 13 tables, 8 migrations, 8 artifact types, 90-day retention · `app/db/models.py`@2ab7741 · 2026-08-06 · 228ch/3ln
  `kw:` PostgreSQL · SQLAlchemy · Alembic · schema design · JSONB · indexing · data retention

- **`av-nextjs-frontend`** Built the Next.js 16 / React 19 / TypeScript frontend — 35 routes
  covering the scan flow, dashboard, remediation workspace, agent trace viewer and marketing pages —
  with JWT session context and TanStack Query polling a running scan every 2 s under a 90 s timeout.
  `derived` · 35 routes, 7,662 LOC TS/TSX · `frontend/app/`, `frontend/hooks/use-scan.ts`@eb53f6c · 2026-08-06 · 263ch/3ln
  `kw:` Next.js · React · TypeScript · TanStack Query · JWT auth · polling · frontend architecture

- **`av-deploy`** Deployed and operate the whole system in production: containerized FastAPI
  API, Celery worker and MCP server on Railway alongside managed PostgreSQL and Redis over an internal
  network, Next.js on Vercel, environment-based config, continuous deploy from main.
  `code-verified` · no metric claimed · `docs/architecture/ARCHITECTURE.md`:75-86@62c5905 · 2026-08-06 · 258ch/3ln
  `kw:` deployment · Railway · Vercel · Docker · managed Postgres · Redis · CI/CD · DevOps · production

- **`av-ci-gates`** Set up two GitHub Actions gates for a repo that previously had no CI — a
  DB-backed job standing up PostgreSQL 16 and Redis 7 service containers to prove the
  submit-to-completed scan path end to end, and a key-free agent/eval job — covering 108 test
  functions across 23 test files.
  `derived` · 2 workflows, 108 test functions, 23 test files · `.github/workflows/backend-tests.yml`@3ad3bfd · 2026-08-06 · 280ch/3ln
  `kw:` CI/CD · GitHub Actions · integration testing · pytest · service containers · test strategy

- **`av-shopping-agent`** Built an LLM shopping agent on the Anthropic SDK that plans,
  searches, compares and carts against a storefront from a brief plus hard constraints, over a
  deliberately small 5-tool surface with a 12-iteration cap, behind a storefront adapter whose
  frozen-fixture and live-site implementations run identical agent code.
  `derived` · 5 tools, 12-iteration cap, 2 adapter implementations · `app/agent/shopping_agent.py`@3ad3bfd · 2026-08-06 · 317ch/4ln
  `kw:` LLM agents · Anthropic SDK · tool use · agentic loop · adapter pattern · Claude · AI engineering

- **`av-trace-schema`** Instrumented the agent as it was built rather than after: every run
  emits a structured trace to 2 Postgres tables with 6 ordered event types, per-event tokens, latency
  and JSONB payloads rolled up to per-run cost — so the eval harness reads a queryable contract
  instead of scraping logs.
  `derived` · 2 tables, 6 event types, per-run token/cost rollup · `docs/adr/0002-agent-trace-schema.md`@939e13f · 2026-08-06 · 287ch/3ln
  `kw:` observability · tracing · LLM observability · schema design · PostgreSQL · JSONB · cost tracking

- **`av-eval-harness`** Built an evaluation and reliability harness for the agent: a 6-class
  failure taxonomy, 9 graded cases over 3 frozen storefront fixtures, and a split grader where a
  programmatic oracle owns every computable verdict and an LLM judge owns only the subjective slice,
  so a programmatic failure can never be overruled by the judge.
  `derived` · 6 failure classes, 9 cases, 3 fixtures · `evals/taxonomy.py`, `evals/cases/__init__.py`@8a6cd39 · 2026-08-06 · 325ch/4ln
  `kw:` LLM evaluation · evals · LLM-as-judge · test design · AI reliability · taxonomy · measurement

- **`av-eval-gate`** Gated merges on agent reliability rather than on tests alone: CI re-runs
  the deterministic 9-case suite and fails the PR if any of 4 metrics drops below a committed
  baseline — then proved the gate catches regressions by injecting a budget-ignoring policy it must
  reject.
  `measured` · baseline 78% success / 78% constraint / 100% grounding / 94% tool validity, n=9 · `backend/evals/baseline.json`@8a6cd39 · 2026-08-06 · 270ch/3ln
  `kw:` CI gates · regression testing · LLM evaluation · reliability engineering · GitHub Actions

- **`av-cross-model`** Measured the same 9 cases, oracle and judge across two agent backends
  after adding an Ollama client mimicking the Anthropic surface: Claude Sonnet 4.6 reached 89% task
  success at $0.035 and 14.9 s per task, open-weight gpt-oss:120b 78% at 8.4 s and no marginal cost —
  making model choice a measured eval dimension.
  `measured` · 89% vs 78% success; $0.035 vs $0; 14.9 s vs 8.4 s · `evals/report.live.anthropic.claude-sonnet-4-6.md`@cb1c937 · 2026-08-06 · 314ch/3ln
  `kw:` model evaluation · benchmarking · Claude · open-weight models · cost/latency analysis · Ollama

- **`av-gold-set`** Refused to assume the LLM judge was correct and built the instrument to
  catch it: a hand-labeled gold set of 12 frozen agent outcomes, 4 of them deliberately
  confident-but-wrong, plus a unit test that runs a rubber-stamp judge over the set and asserts it
  scores a perfect false-negative rate.
  `derived` · 12 items (8 pass / 4 fail), 4 confident-wrong · `evals/gold/labels.json`@8a6cd39 · 2026-08-06 · 292ch/3ln
  `kw:` LLM-as-judge · ground truth · adversarial test design · evaluation reliability · testing

- **`av-judge-fnr`** Measured the judge's own reliability against the human gold set and
  published the miss: it waved through a quarter of the true failures, and the case it missed hinged
  on a size encoded in a SKU rather than the product title — a computable fact the programmatic
  oracle already owned, which is why the boundary was drawn there.
  `self-attested` · 25% judge false-negative rate · `docs/design/0002-eval-reliability-harness.md`:91-112@80cc0ed (prose; no committed artifact) · 2026-08-06 · 325ch/4ln
  `kw:` LLM-as-judge · false-negative rate · evaluation reliability · error analysis · honest reporting

- **`av-online-oracle`** Took the reliability layer to production traffic: every public agent
  run is graded online by the same authoritative oracle as the offline gate with no second copy of
  the logic, and the demo is bounded by fixture-only anonymous runs, DNS-resolving SSRF validation
  before any user-supplied URL is fetched, and fail-open Redis quotas.
  `code-verified` · no metric claimed · `evals/oracle/online.py`, `app/services/url_safety.py`@5ee40b8 · 2026-08-06 · 331ch/4ln
  `kw:` production reliability · SSRF · security · rate limiting · Redis · LLM safety · code reuse

---

# 6. SKILLS INVENTORY

Every entry carries an evidence pointer — the bullet or subject that substantiates it. A skill with
no pointer does not go on a resume (see `resume-tailor/references/ats.md`: parsers score an
unsupported claim *lower* than no claim).

**Languages** — Python `av-*`, `wm-*`, `ds-*`, `nmf-*` · Go `kv-*` · TypeScript `av-nextjs-frontend`
· SQL `ds-storedproc-conversation`, `av-postgres-artifacts` · JavaScript/JSX `ds-*` frontend

**Backend & APIs** — FastAPI `av-scan-pipeline`, `ds-messaging-backend` · Flask `sn-email-digest-api`
· Celery `av-scan-pipeline` · REST `av-*`, `sn-*` · async/await `av-scan-pipeline` ·
authentication & sessions `ds-auth-pbkdf2`, `ds-auth-hmac-session`, `sn-api-auth-isolation`

**LLM systems & AI infra** — vLLM `kv-vllm-connector` · KV caching `kv-*` · tensor parallelism
`kv-tp4-silent-corruption` · Anthropic SDK `av-shopping-agent` · MCP `av-mcp-both-sides` ·
LLM agents `av-shopping-agent` · LLM evaluation `av-eval-harness`, `av-eval-gate`, `av-gold-set` ·
LLM-as-judge `av-judge-fnr`

**Distributed systems** — gRPC/Protobuf `kv-vllm-connector` · consistent hashing `kv-ttft-crossover`
· etcd `kv-replication-failover` · replication & failover `kv-replication-failover` ·
chaos engineering `kv-chaos-aws` · correctness oracles `kv-correctness-oracle`

**Infra & DevOps** — Docker `sn-docker-onboarding`, `av-deploy` · AWS `kv-terraform-aws` ·
Terraform `kv-terraform-aws` · GCP / Cloud SQL `ds-gcp-cloudsql` · Railway & Vercel `av-deploy` ·
CI/CD `av-ci-gates`, `av-eval-gate`

**Data & storage** — PostgreSQL `av-postgres-artifacts`, `sn-email-digest-api` · JSONB
`sn-batch-enrichment` · MySQL `ds-*` · Redis `av-scan-pipeline`, `sn-email-digest-api` ·
schema design & normalization `ds-schema-6-tables` · Alembic `av-postgres-artifacts` ·
stored procedures / triggers / transactions `ds-storedproc-conversation`, `ds-serializable-txn`

**ML & simulation** — PyTorch `wm-*` · VAE `wm-vae-params` · PPO `wm-ppo-latent-control` ·
CMA-ES `wm-controller-params` · Gymnasium `wm-dual-optimizer-paths`, `nmf-gym-env` ·
MuJoCo / MJCF `nmf-voxel-mjcf-arena` · OpenCV `nmf-cuda-fallback` · NumPy `wm-data-pipeline`

**Frontend** — Next.js / React `av-nextjs-frontend` · TanStack Query `av-nextjs-frontend` ·
optimistic UI & conflict resolution `sn-autosave-nometric` · Tailwind `av-nextjs-frontend`

**Observability & testing** — Prometheus `kv-observability-nodeloss` · CloudWatch
`kv-observability-nodeloss` · pytest `ds-backend-tests`, `av-ci-gates` · benchmark-driven
development `kv-crossover-envelope`, `kv-a100-no-crossover` · regression gates `av-eval-gate`

## 6.1 Claims currently on the portfolio with NO evidence pointer

`SkillGrid.astro` publishes these; nothing in the six projects substantiates them. Each needs a
decision — keep with a stated basis, or cut from both surfaces (R8).

| Claim | Status |
|---|---|
| **Java**, **C/C++** | Real from USC coursework, but no in-scope project uses either. **Decision 2026-08-06: keep.** A languages line is conventional; be ready to speak to them. |
| ~~**Firebase**~~ | **Cut 2026-08-06** — its only basis was BeachApp, which is out of scope. Removed from `SkillGrid.astro`; replaced with MySQL, which `ds-*` backs. |
| **RAG**, **multimodal RAG**, **BM25**, **RRF**, **CLIP**, **Qwen3-Omni** | All from Modality-Aware KV Tiering, which has no local clone and has not been mined. Portfolio prose is the only source. **Blocked until the repo is cloned** — see §5 note. |

---

# 7. RETIRED

*Nothing retired yet. Entries here are kept permanently as an audit trail — see R3 and R5.*
