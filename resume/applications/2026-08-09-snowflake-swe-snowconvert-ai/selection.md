# Selection — Snowflake, Software Engineer / SnowConvert AI (ASHREQ-5474)

Second variant, dated 2026-08-09. Same winning strategy as 2026-08-07 — lead with AgentVeris
(agentic AI + execution-level validation, the closest thing in the master to a semantic-equivalence
checker), then the Go KV cache for distributed systems and performance, then Deepsick for the
database-code depth SnowConvert actually converts.

**The one change vs 2026-08-07:** `av-scan-pipeline` → `av-cross-model`, to carry a measured
cost/latency tradeoff (a strongly-desired JD item) and the "rapidly test emerging capabilities"
signal. Net bullet count is unchanged (4 / 2 / 2), so the one-page budget is preserved.

Every `>` line is an R10 condensed form: strictly shorter than the master's, no figure added, no
claim strengthened.

## summary
MCS student at UIUC with production SWE internship experience and self-directed work in agentic AI
and distributed systems. Builds async Python and Go backends, LLM agents, and the evaluation
harnesses that measure whether they actually work.

## experience
### stringer-news
- sn-email-digest-api — production Python/Flask REST API design, the JD's first hard requirement
> Shipped a Flask Blueprint exposing REST endpoints for single-user and batch email digest dispatch, integrating SendGrid templates, PostgreSQL JSONB queries, and Redis-backed idempotency.
- sn-batch-enrichment — the only batch-pipeline bullet; nearest thing to the ETL/ELT ask
> Built a recommendation enrichment layer joining cached JSONB data with batch event lookups through PostgreSQL array queries, enabling batch sends of 100 users per request.
- sn-api-auth-isolation — API design plus reliability: one failure cannot take down the batch
> Implemented decorator-based API-key authentication and structured 4xx/5xx error handling with per-user isolation, so a single failing recipient could not abort an in-flight batch.

## projects
### agentveris
- av-shopping-agent — hands-on agentic AI; the adapter running identical agent code against frozen fixtures and live sites is the migration-validation pattern
> Built an LLM shopping agent on the Anthropic SDK over a small 5-tool surface with a 12-iteration cap, behind an adapter whose frozen-fixture and live-site implementations run identical agent code.
- av-eval-harness — the strongest bullet in the file for this role: execution-level validation, oracle over judge
> Built an agent evaluation harness with a 6-class failure taxonomy and 9 graded cases, where a programmatic oracle owns every computable verdict and an LLM judge owns only the subjective slice.
- av-eval-gate — automatic testing components, and the measurement-judgment bullet: the gate was proved by injecting a regression
> Gated merges on agent reliability, not tests alone: CI re-runs the 9-case suite and fails the PR if any of 4 metrics drops below a committed baseline, proved by injecting a regression it must reject.
- av-cross-model — the JD's "cost efficiency" + "rapidly test emerging capabilities": model choice made a measured eval dimension
> Measured two agent backends on one 9-case harness via an added Ollama client: Claude Sonnet 4.6 hit 89% success at $0.035/task vs open-weight gpt-oss:120b at 78% with no marginal cost — making model choice a measured eval dimension.
### distributed-kv-cache
- kv-ttft-crossover — GoLang for high-performance backend services, with a measured number
> Built a distributed KV cache in Go — consistent-hash sharding, RF=2 async replication, etcd-coordinated failover — cutting time-to-first-token 10.9% on 4k-token shared prefixes, measured cross-AZ on AWS.
- kv-chaos-aws — reliability under fault injection, verified rather than asserted
> Chaos-tested a live 3-node AWS cluster with a correctness verifier running through injected egress latency, an etcd partition and a real node termination: 0 violations across 27,365 fault-injected requests.
### deepsick-marketplace
- ds-storedproc-conversation — writes the exact class of database code SnowConvert translates
> Built a stored procedure moving the contact-seller flow into MySQL: JOINs validate the listing and participants, four SIGNAL SQLSTATE guards return descriptive errors, a GROUP BY caps open threads.
- ds-fair-price-cte — non-trivial analytical SQL at a data-platform company
> Built the fair-price analytics query: a two-stage CTE gathering a listing's peer group on null-safe matches across category, brand and condition, scored against a ±20% band.

<!-- world-models and neuromechfly dropped: no signal for this role. Held back but strong in
     interview: av-scan-pipeline (async Celery pipeline, 4 queues / 8 modules — swapped out here for
     av-cross-model but still the go-to answer on "async/event-driven pipelines"), av-mcp-both-sides
     (MCP on both sides of the product), av-judge-fnr (the judge's own 25% miss rate). KV bullets
     held back: kv-replication-failover's content survives in kv-ttft-crossover + kv-chaos-aws;
     kv-eviction-pareto and kv-gpu-spend both answer "optimizing pipelines for performance and cost
     efficiency" if that thread continues past av-cross-model. -->

## skills
Languages: Python, Go, SQL, TypeScript
Agentic AI & LLM: Anthropic SDK, LLM agents, tool use, MCP (FastMCP), LLM-as-judge evaluation, cross-model cost/latency benchmarking, vLLM, KV caching
Backend & APIs: FastAPI, Flask, REST API design, Celery, async/await, gRPC/Protobuf, authentication
Distributed Systems: etcd, consistent hashing, replication & failover, chaos engineering, correctness oracles
Data & Storage: PostgreSQL, MySQL, stored procedures, triggers, transactions, CTEs, Redis, JSONB, Alembic
Infra, CI & Testing: Docker, AWS, Terraform, GCP/Cloud SQL, Railway, Vercel, GitHub Actions, pytest
