---
title: AgentVeris
tagline: Production SaaS that scans any e-commerce site and scores its readiness for AI shopping agents — results in ~30 seconds, no signup.
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
  - MCP
  - Railway / Vercel
metrics:
  - { label: "compliance checks", value: "30+" }
  - { label: "scan categories", value: "6" }
  - { label: "time to result", value: "~30s" }
categories:
  - fullstack
  - ai-tooling
links:
  live: https://www.agentveris.com/
featured: true
order: 3
---

## Problem

As AI shopping agents start to crawl and transact on e-commerce sites, store owners have no easy way
to tell whether their site is actually readable and usable by those agents. AgentVeris scans a site
and returns an agent-readiness score in ~30 seconds, no signup required.

## Scoring

A weighted score across **6 categories** (80+ = Agent-Ready · 50–79 = Needs Work · <50 = Not Ready):

- **UCP Compliance** (20%) — `/.well-known/ucp` manifest: version, services, capabilities, signing keys
- **Schema.org Quality** (20%) — Product JSON-LD on homepage + up to 10 product pages; Shopify feed
- **AI Bot Crawlability** (20%) — robots.txt permissions for 16 AI search/shopping bots; sitemaps
- **Performance** (15%) — response time, HTTPS enforcement, redirect-chain length, catalog speed
- **ACP Readiness** (10%) — Stripe/checkout-API indicators, catalog feed presence
- **MCP Readiness** (15%) — `/.well-known/mcp.json` discovery, server-card validity, commerce tools

Per-check scoring (pass=10 / warning=5 / fail=0 / info excluded) rolls up to a per-category percentage,
then the weighted overall. ACP/MCP use a half-credit `info` rule to keep their nascent denominators stable.

## What I built

- A production SaaS platform, end-to-end, deployed and live.
- An **asynchronous scan pipeline** — FastAPI API + Celery workers across **4 queues**
  (crawl, email, report, remediation), PostgreSQL 16, Redis 7. URL reachability pre-checks, a master
  crawl orchestrator wiring every category check, multi-page crawling over up to 10 product pages, a
  weighted scoring engine, and post-scan remediation generation.
- **MCP readiness scanning** plus an **AgentVeris MCP server** (3 tools, 5 resources) so AI clients
  can submit scans and read status, results, and artifacts directly over MCP.
- A **remediation foundation**: issue normalization, recommendation generation, and verification-history
  APIs, with Celery-registered tasks, summary-triggered retries, and failed-run surfacing.
- PostgreSQL schemas (Alembic-migrated) for scan history, raw scan artifacts (a data moat), and
  remediation workflows — persisting evidence links from failed checks into normalized issues.
- A **Next.js 16 / React 19** frontend: JWT auth, live-polling results (TanStack Query, 2s/90s),
  6 category cards, scan history dashboard, remediation workspace, issue detail pages, and a full set
  of marketing/docs pages.
- Deployment: Railway for containerized FastAPI, Celery workers, Redis, PostgreSQL, and the MCP server;
  Vercel for Next.js — environment-based config, continuous deployment from `main`.
