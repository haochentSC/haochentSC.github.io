# Selection — Snowflake, Software Engineer / SnowConvert AI (ASHREQ-5474)

Lead with AgentVeris: the JD's center of gravity is *agentic AI plus execution-level validation*,
and the eval harness — programmatic oracle owns every computable verdict, LLM judge owns only the
subjective slice — is the closest thing in the master to a semantic-equivalence checker. Then the
Go KV cache for distributed systems and performance, then Deepsick for database-code depth, which
is what SnowConvert actually converts.

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
- av-scan-pipeline — async/event-driven Python at production scale; Celery is the closest orchestrator he has shipped
> Built the asynchronous pipeline behind a live SaaS: FastAPI submits and returns immediately, a Celery worker across 4 queues runs 8 check modules under per-check fault isolation, then crawls before scoring.
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

<!-- world-models and neuromechfly dropped: no signal for this role. AgentVeris bullets not
     selected but strong in interview — av-mcp-both-sides (MCP on both sides of the product),
     av-cross-model (Claude vs open-weight cost/latency), av-judge-fnr (the judge's own miss rate).
     KV bullets held back: kv-replication-failover was cut for space, and its content survives —
     kv-ttft-crossover already names consistent-hash sharding, RF=2 replication and etcd failover,
     and kv-chaos-aws proves them under fault. kv-eviction-pareto and kv-gpu-spend both answer
     "optimizing pipelines for performance and cost efficiency" if that comes up. -->

## skills
Languages: Python, Go, SQL, TypeScript
Agentic AI & LLM: Anthropic SDK, LLM agents, tool use, MCP (FastMCP), LLM-as-judge evaluation, vLLM, KV caching
Backend & APIs: FastAPI, Flask, REST API design, Celery, async/await, gRPC/Protobuf, authentication
Distributed Systems: etcd, consistent hashing, replication & failover, chaos engineering, correctness oracles
Data & Storage: PostgreSQL, MySQL, stored procedures, triggers, transactions, CTEs, Redis, JSONB, Alembic
Infra, CI & Testing: Docker, AWS, Terraform, GCP/Cloud SQL, Railway, Vercel, GitHub Actions, pytest
