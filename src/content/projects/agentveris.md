---
title: AgentVeris
tagline: Production SaaS that scores whether an e-commerce site is discoverable and legible to AI shopping assistants — then sends a real LLM agent to shop the catalog and measures what it can and can't do. Results in under a minute, no signup.
role: Full-stack build & deploy
period: 2026 – Present
status: live
stack:
  - Python 3.12
  - FastAPI
  - Celery
  - PostgreSQL 16
  - Redis 7
  - Next.js 16
  - React 19
  - TypeScript
  - Anthropic API
  - MCP
  - LLM eval harness
  - Railway / Vercel
metrics:
  - { label: "time to result", value: "<1 min" }
  - { label: "scoring categories", value: "7" }
  - { label: "compliance checks", value: "38" }
  - { label: "AI crawlers checked", value: "16" }
categories:
  - fullstack
  - ai-tooling
links:
  live: https://www.agentveris.com/
featured: true
order: 3
---

## Problem

AI assistants now sit between shoppers and stores — roughly a fifth of online spend is AI-mediated
discovery, and most of it is zero-click. But store owners have no way to tell whether an AI assistant
can actually **find, understand, and trust** their products. AgentVeris scans a site and returns an
agent-readiness score in under a minute, no signup required — then goes a step further and runs a real
shopping agent against the catalog to show what an assistant experiences.

The product deliberately leads with **discoverability and representation** rather than autonomous
checkout (design-0004): as AI-mediated discovery became mainstream while consumer auto-buy retreated,
the sharper, more defensible question became "can an assistant read your catalog?" — not "can it buy
for you?"

## Scoring

A weighted score across **7 categories** organized as a **Discover → Understand → Act** arc
(80+ = Agent-Ready · 50–79 = Needs Work · <50 = Not Ready):

- **Discover (20%)** — **AI Bot Crawlability**: `robots.txt` permissions across **16 AI crawlers**
  from 8 companies (OpenAI, Anthropic, Google, Perplexity, Meta, ByteDance, Amazon, Apple), split by
  search / user-triggered / training intent; sitemaps.
- **Understand (35%)** — **Schema.org Quality** (15%): Product JSON-LD on homepage + up to 10 product
  pages, plus the Shopify feed. **Product Data Legibility** (20%): static analysis of attribute
  *completeness*, *granularity*, and *cross-source consistency* over JSON-LD and the products feed —
  distinct from schema presence; this is whether the data is actually usable, not just valid.
- **Act (35%)** — the forward transaction layer: **UCP** (10%, `/.well-known/ucp` manifest),
  **ACP** (10%, Stripe/checkout-API + catalog-feed indicators), **MCP** (15%, `/.well-known/mcp.json`
  discovery, server-card validity, commerce tools).
- **Performance (10%)** — response time, HTTPS enforcement, redirect-chain length, catalog speed.

Per-check scoring (pass=10 / warning=5 / fail=0 / info excluded) rolls up to a per-category percentage,
then the weighted overall. ACP/MCP use a half-credit `info` rule to keep their nascent denominators stable.

## The shopping agent + eval harness

The differentiator vs. the crowded GEO/AEO tooling market: AgentVeris doesn't just inspect markup — it
sends an agent to shop the store and grades the run.

- **A real LLM shopping agent** (Anthropic SDK) that runs an agentic tool-use loop against a storefront
  — a frozen fixture *or* a live Shopify catalog (`/products.json`) — with a dedicated tool surface,
  word-boundary catalog search, and a structured trace recorder capturing every step, tool call, and
  cart mutation.
- **An eval / reliability harness** that grades each run against a principled **6-class failure taxonomy**
  (grounding, tool-use, planning, constraint, non-determinism, cost/latency). A **two-tier oracle** keeps
  it honest: a **programmatic oracle** owns everything computable from the trace + catalog and is
  authoritative, while an **LLM judge** (Opus) owns only subjective criteria — and *its* false-negative
  rate is itself measured against a hand-labeled gold set. Frozen storefront fixtures back a **CI gate**,
  and a pinned `baseline.json` is the regression bar.
- **Provider fallback + guardrails**: the agent and judge resolve their model by **availability**
  (local Ollama first, Claude fallback) to protect a small API budget, with a **maintenance mode**, a
  per-IP burst limiter, and a **global daily spend circuit-breaker that fails closed**.

## What I built

- A production SaaS platform, end-to-end, deployed and live.
- An **asynchronous scan pipeline** — FastAPI API + Celery workers across **4 queues**
  (crawl, email, report, remediation), PostgreSQL 16, Redis 7. URL reachability pre-checks, a master
  crawl orchestrator wiring all 8 category checks, multi-page crawling over up to 10 product pages, a
  weighted scoring engine, and post-scan remediation generation.
- The **agent + evaluation stack** above: shopping agent, storefront adapters, trace model, the
  failure-taxonomy eval harness with a programmatic/judge oracle split, gold-set FNR measurement, and a
  fixture-backed CI gate — plus the availability-based provider fallback and anti-abuse breakers.
- **MCP readiness scanning** plus an **AgentVeris MCP server** (3 tools, 5 resources) so AI clients
  can submit scans and read status, results, and artifacts directly over MCP.
- A **remediation foundation**: issue normalization, recommendation generation, and verification-history
  APIs, with Celery-registered tasks, summary-triggered retries, and failed-run surfacing.
- PostgreSQL schemas (Alembic-migrated) for scan history, raw scan artifacts (a data moat), agent runs
  and trace events, and remediation workflows — with production migrations auto-run on deploy via a
  Railway `preDeployCommand` so schema never lags shipping code.
- A **Next.js 16 / React 19** frontend: JWT auth, live-polling results (TanStack Query, 2s/90s), the
  7 category cards grouped into the Discover→Understand→Act triad, a scan-history dashboard, a
  remediation workspace, issue-detail pages, and a **live agent-shopping surface** (run launcher +
  trace-timeline viewer with cart and run stats).
- Deployment: Railway for containerized FastAPI, Celery workers, Redis, PostgreSQL, and the MCP server;
  Vercel for Next.js — environment-based config, continuous deployment from `main`.
