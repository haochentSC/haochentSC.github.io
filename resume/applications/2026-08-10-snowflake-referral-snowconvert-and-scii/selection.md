# Selection — Snowflake referral, ONE resume for SnowConvert AI (ASHREQ-5474) + SCII (REQ19880)

A single resume submitted by a referrer against both reqs. It has to carry the agentic-AI +
execution-validation story (SnowConvert) AND the authentication/cryptography story (SCII) on one
page, leaning on the shared spine both postings want: Python/Go, distributed systems, reliability,
tested code, multi-cloud, high agency.

**Design:** kept the SnowConvert winning order (AgentVeris → Go KV cache → Deepsick database code),
then surfaced Deepsick's from-scratch crypto/auth bullets that SCII needs. Net bullet count is
unchanged at 11 (3 / 3 / 2 / 3), so the one-page budget holds.

- Dropped vs the SnowConvert-only resume: `av-cross-model`, `ds-fair-price-cte`.
- Added: `ds-auth-pbkdf2`, `ds-auth-hmac-session`.

## Proofread pass (2026-08-10) — human-reader referral, recruiter-guidance grounded
Four changes, all lateral (no claim added, no figure changed, no hedge removed — R10 preserved):
1. **Lead-verb variety.** "Built" opened 6 of 11 bullets (a repetition recruiters flag). Reduced to
   3 via lateral swaps that keep the exact same claim: `sn-batch-enrichment` Built→**Engineered**,
   `av-eval-harness` Built→**Designed** (he designed the taxonomy), `ds-storedproc-conversation`
   Built→**Wrote** (if anything more modest). Master bullets keep their original "Built".
2. **AgentVeris date added** — `Mar 2026 – Present` (from the master's `2026-03 → present`), for
   parity with the other two projects and to show the work is current.
3. **Deepsick repo link → `(course project · private repo)`** — the private course URL was long,
   wrapped badly, and could not be opened by a human reader; the words carry the same information.
4. **Summary parallelism** — "LLM agents with the evaluation harnesses" → "…and the evaluation
   harnesses". Tense is uniformly past across all bullets; no other grammar issues found.

Every `>` line is an R10 condensed form: strictly shorter than the master's, no figure added, no
claim strengthened.

## summary
<!-- Rewritten 2026-08-10: prior version leaned on JD-matching phrasing ("application security",
     "HMAC-signed session infrastructure"). Replaced with a natural description grounded in the real
     projects — every noun traces to actual work (eval harness -> AgentVeris; correctness oracle +
     chaos test -> KV cache; full-stack apps -> Deepsick/Stringer). Security still lives honestly in
     the Deepsick bullets rather than being forced into the opening line. -->
MCS student at UIUC with a production SWE internship and self-directed projects in LLM agents and
distributed systems. Builds async backends in Python and Go — LLM agents on the Anthropic SDK, a
distributed KV cache in Go, and the evaluation harnesses that measure agent reliability.

## experience
### stringer-news
- sn-email-digest-api — production Python/Flask REST API design; shared first requirement of both postings
> Shipped a Flask Blueprint exposing REST endpoints for single-user and batch email digest dispatch, integrating SendGrid templates, PostgreSQL JSONB queries, and Redis-backed idempotency.
- sn-batch-enrichment — batch pipeline; nearest thing to the ETL/ELT ask (Posting A)
> Engineered a recommendation enrichment layer joining cached JSONB data with batch event lookups through PostgreSQL array queries, enabling batch sends of 100 users per request.
- sn-api-auth-isolation — authentication + fault isolation: bridges both postings (SCII authN, SnowConvert reliability)
> Implemented decorator-based API-key authentication and structured 4xx/5xx error handling with per-user isolation, so a single failing recipient could not abort an in-flight batch.

## projects
### agentveris
- av-shopping-agent — hands-on agentic AI (Posting A); the adapter running identical agent code against frozen fixtures and live sites is the migration-validation pattern
> Built an LLM shopping agent on the Anthropic SDK over a small 5-tool surface with a 12-iteration cap, behind an adapter whose frozen-fixture and live-site implementations run identical agent code.
- av-eval-harness — the strongest bullet for SnowConvert: execution-level validation, oracle over judge
> Designed an agent evaluation harness with a 6-class failure taxonomy and 9 graded cases, where a programmatic oracle owns every computable verdict and an LLM judge owns only the subjective slice.
- av-eval-gate — automatic testing components (A) and enforcement-by-detection (reads for B's "detect policy violations"): the gate proven by injecting a regression
> Gated merges on agent reliability, not tests alone: CI re-runs the 9-case suite and fails the PR if any of 4 metrics drops below a committed baseline, proved by injecting a regression it must reject.
### distributed-kv-cache
- kv-ttft-crossover — GoLang high-performance backend service (A strongly desired), reliable scalable software on AWS (B bonus), with a measured number
> Built a distributed KV cache in Go — consistent-hash sharding, RF=2 async replication, etcd-coordinated failover — cutting time-to-first-token 10.9% on 4k-token shared prefixes, measured cross-AZ on AWS.
- kv-chaos-aws — reliability under fault injection verified rather than asserted: B's "reliability impact at scale" + on-call posture; A's distributed-systems depth
> Chaos-tested a live 3-node AWS cluster with a correctness verifier running through injected egress latency, an etcd partition and a real node termination: 0 violations across 27,365 fault-injected requests.
### deepsick-marketplace
<!-- 2026-08-10 AUTHENTICITY REWORK (Haochen's call): the earlier two crypto bullets (ds-auth-pbkdf2,
     ds-auth-hmac-session) over-sold the security depth. Haochen built basic auth but has not done
     deep security work (one security course) and could not defend PBKDF2-iteration / constant-time /
     timing-attack detail in an interview. Replaced with the project's REAL moat — the fair-price
     analytics engine (the product differentiator) — plus the stored-procedure database depth, and
     kept auth to ONE modest, defensible line. This also strengthens Posting A (data/SQL) while
     giving Posting B only an honest, rough auth mention. Dates corrected: Deepsick Jan–May 2026,
     KV cache May–Jul 2026. Deepsick tech-stack tags dropped PBKDF2/HMAC. -->
- ds-fair-price-cte — the product's actual differentiator (the moat); non-trivial analytical SQL at a data-platform company (Posting A)
> Built the fair-price analytics query — the product's core differentiator: a two-stage CTE that gathers a listing's peer group on null-safe matches across category, brand and condition, returning a fair / below / above verdict against a ±20% band.
- ds-storedproc-conversation — writes the exact class of database code SnowConvert translates (Posting A)
> Wrote a stored procedure moving the contact-seller flow into MySQL: JOINs validate the listing and participants, four SIGNAL SQLSTATE guards return descriptive errors, a GROUP BY caps open threads.
- ds-auth-basic — ONE modest, defensible auth mention (rough security nod for Posting B); deep crypto specifics deliberately cut so it invites no drilling Haochen can't answer
> Built the marketplace's login and session authentication from scratch with no auth framework — PBKDF2 password hashing and signed session tokens.

<!-- Held back but strong in interview:
     Posting A: av-cross-model (measured cost/latency across model families — the go-to answer on
     "cost efficiency" and "rapidly test emerging capabilities"); av-scan-pipeline (async Celery,
     4 queues/8 modules — "async/event-driven pipelines"); av-mcp-both-sides (MCP protocol depth,
     the nearest thing to open-source agentic-framework work).
     Posting B: ds-auth-multiformat-verify (constant-time three-branch verifier + password
     migration — SSDLC/backward-compat); ds-backend-tests (token-tampering/expiry tests —
     security testing); ds-serializable-txn (isolation levels, race conditions); kv-correctness-
     oracle and kv-terraform-aws (IAM roles, provisioned security posture — multi-cloud infra).
     world-models and neuromechfly dropped: no signal for either role. -->

## skills
<!-- 2026-08-10: de-emphasized security to match the authenticity rework — dropped the dedicated
     "Security & Auth" line, folded a modest "authentication" into AI & Backend, and promoted a
     "Data & Databases" line to reflect Deepsick's real (database) strength. Final resume = 4 lines. -->
Languages: Python, Go, SQL, TypeScript
AI & Backend: Anthropic SDK, LLM agents and eval harnesses, MCP, FastAPI/Flask, REST & gRPC, Celery, authentication
Data & Databases: PostgreSQL, MySQL, stored procedures, transactions, CTEs, Redis, JSONB
Systems & Infra: distributed systems, etcd, chaos engineering, AWS, Terraform, GCP, Docker, pytest
