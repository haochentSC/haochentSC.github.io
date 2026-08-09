# Selection — VALIDATION: reproduce haochent_resume_v1.tex shape (generalist SWE)

Proves the master can regenerate a resume already sent to employers, and exercises R10 condensing.
Every `>` line is a condensed form: shorter than the master's, no figure added.

## summary
MCS student at UIUC with production SWE internship experience building Flask/FastAPI backend
services, async task pipelines, and full-stack TypeScript applications. Shipped and deployed live
systems serving real users.

## experience
### stringer-news
- sn-email-digest-api — core backend, matches the stack
> Shipped a Flask Blueprint with REST endpoints for single-user and batch email digest dispatch, integrating SendGrid dynamic templates, PostgreSQL JSONB queries, and Redis-backed idempotency.
- sn-batch-enrichment — the one defensible scale number
> Built a recommendation enrichment layer joining cached JSONB recommendations with batch event lookups via PostgreSQL array queries, enabling batch sends of 100 users per request.
- sn-api-auth-isolation — auth + fault isolation
> Implemented decorator-based API-key auth and structured 4xx/5xx error handling with per-user isolation, so one failing recipient could not abort an in-flight batch.
- sn-autosave-draftloss — frontend depth with an outcome
- sn-docker-onboarding — DevOps signal

## projects
### agentveris
- av-scan-pipeline — async architecture, the headline system
> Built the asynchronous scan pipeline behind a live SaaS: FastAPI submits and returns immediately, a Celery worker across 4 queues runs 8 check modules under per-check fault isolation, then crawls up to 10 product pages before scoring.
- av-scoring-weights — algorithm design
> Designed the weighted scoring engine turning raw check rows into an agent-readiness score: 38 checks over 7 categories rolled into per-category percentages, then a weight vector summing to 1.0.
- av-nextjs-frontend — full-stack breadth
> Built the Next.js 16 / React 19 / TypeScript frontend — 35 routes across the scan flow, dashboard and remediation workspace — with JWT sessions and TanStack Query polling live scans.
- av-deploy — shipped to production
> Deployed and operate the system in production: containerized FastAPI, Celery worker and MCP server on Railway with managed PostgreSQL and Redis, Next.js on Vercel, continuous deploy from main.
### deepsick-marketplace
- ds-auth-pbkdf2 — security depth, framework-free
> Built the marketplace's authentication from scratch with no auth framework: PBKDF2-SHA256 at 390,000 iterations over a 16-byte random salt, stored so the cost parameter can be raised without invalidating existing hashes.
- ds-fair-price-cte — the strongest SQL in the file
> Built the fair-price query that is the product's differentiator: a two-stage CTE gathering a listing's peer group on null-safe matches across category, brand and condition, returning fair, below-peers or above-peers against a ±20% band.
- ds-serializable-txn — concurrency judgement
> Engineered a SERIALIZABLE transaction wrapper around the stored-procedure call, committing on success and rolling back on any exception, so two rapid clicks cannot create duplicate threads.
<!-- world-models dropped to fit one page. Per layout-budget.md, dropping a whole project reads
     better than leaving it with one orphaned bullet. The ML material leads in the AI-infra variant. -->

## skills
Languages: Python, Go, Java, C/C++, TypeScript, SQL
Backend & APIs: FastAPI, Flask, REST, Celery, JWT, async/await
Frontend: Next.js, React, TypeScript, TanStack Query
Data & Storage: PostgreSQL (JSONB), MySQL, Redis, Alembic
Infra & DevOps: Docker, AWS, GCP, Railway, Vercel, CI/CD
ML & Simulation: PyTorch, Gymnasium, VAE, PPO
Testing & Tools: pytest, Git, Linux/CLI
