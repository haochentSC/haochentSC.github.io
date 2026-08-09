# Evidence ledger — AgentVeris

`repo:` C:\Users\tongh\AgentVeris — **closed source**
`live:` https://www.agentveris.com/ · https://api.agentveris.com/api/health
`portfolio:` src/content/projects/agentveris.md
`HEAD at mining:` db047dd · 44 commits, 2026-03-31 → 2026-07-01 · solo

Append-only. Newest entries at the bottom.

---

## 2026-08-06 — Metric change: scan categories 6 → 7, and three wrong weights

**Claim under test:** portfolio frontmatter `scan categories: 6`, plus a body section listing six
categories with weights, live on the public site.

**Method:** read the weight vector directly from `backend/app/services/scoring.py`:46-54, then
confirmed against the live production API.

```python
CATEGORY_WEIGHTS = {
    "crawlability": 0.20,  "schema": 0.15,  "attributes": 0.20,  "performance": 0.10,
    "ucp": 0.10,  "acp": 0.10,  "mcp": 0.15,          # sums to 1.00
}
```

**Result:** the portfolio was wrong in five ways at once.

| | Portfolio said | Code says |
|---|---|---|
| Category count | 6 | **7** |
| Schema.org | 20% | **15%** |
| Performance | 15% | **10%** |
| UCP | 20% | **10%** |
| Product Data Legibility | *absent* | **20% — tied for the largest weight** |

The missing category is not a rounding error: `attributes` ("Product Data Legibility") carries the
joint-highest weight in the entire rubric, and the code organizes scoring as a **Discover →
Understand → Act** arc that the portfolio didn't mention at all.

**Independently confirmed in production.** A scan submitted to the live API returned
`attributes_score: 100.0` in its payload, so the 7-category scoring is deployed — despite
`ARCHITECTURE.md`:504 and `docs/design/0004` both still saying the work "landed on `dev`, not yet
deployed." The docs lag the deploy, not the other way round.

**Downstream corrections applied this session (R6):** portfolio frontmatter (6 → 7 categories,
30+ → 38 checks), the whole Scoring section rewritten with correct weights and the pillar framing,
"6 category cards" → 7, and `Hero.astro`'s badge 30+ → 38.

---

## 2026-08-06 — Metric change: "~30 seconds" → "under a minute"

**Claim under test:** the tagline, the frontmatter metric, and the body all said "~30 seconds."

**Basis for the original claim:** a code comment in `crawl_site.py`:6 ("scans complete in < 30s").
That is a design intention, not a measurement.

**Measurement taken:** a real scan submitted to the production API (`POST /api/scans` for a large
Shopify storefront, polled to `completed`) took **41 seconds**, crawling 8 product pages and writing
53 check rows across all 7 categories.

**Result:** "~30 seconds" is contradicted by the only measurement that exists. Softened to "under a
minute", which the single sample supports and which the code comment doesn't contradict.

**Still open:** one sample is one sample, and scan time scales with product-page count. To claim a
number, run 5–10 timed scans across storefront sizes and commit the results. Until then this stays
qualitative.

---

## 2026-08-06 — "30+ compliance checks" was under-claiming

Counted every `_add_check(...)` call site, deduplicated per category: ucp 8, schema 10, mcp 5,
crawlability 4, performance 4, acp 4, attributes 3 = **38 distinct checks** (39 including the `meta`
e-commerce detection). A single real scan wrote **53 check rows**, because multi-page crawling
repeats the schema checks per product page.

"30+" was safe but left value on the table. Canonical: **38**.

---

## 2026-08-06 — Eval harness numbers, and one that isn't measured

The Phase 4 agent + evaluation work is the largest block of material here and was absent from both
the portfolio and the old resume.

**Artifact-backed (`measured`):**
- `backend/evals/baseline.json` — n=9, task success 0.7778, constraint adherence 0.7778, grounding
  1.0, tool-call validity 0.9444. This is what the CI gate enforces.
- `report.live.anthropic.claude-sonnet-4-6.md` — 89% success, $0.0350/task, 14,914 ms/task.
- `report.live.ollama.gpt-oss_120b.md` — 78% success, $0/task, 8,406 ms/task.

**Prose-only (`self-attested`) — the judge false-negative rate.** The 25% FNR (and 92% agreement,
0% FPR) appears only in `docs/design/0002-eval-reliability-harness.md`:91-112. `evals/gold/fnr.py`
computes it live and needs an API key; no `fnr.json` is committed. To promote it: run
`uv run python -m evals.gold.fnr` once and commit the output.

**Internal inconsistencies to be aware of:**
- `docs/ROADMAP.md`:29-32 cites "78% task success (constraint 100%, grounding/planning 50%)" as the
  baseline. The 78% matches `baseline.json`, but that file's constraint rate is 77.8% and grounding
  is 100%. The quoted split actually matches the **Ollama** run. The prose conflates two runs — cite
  an artifact, never the ROADMAP sentence.
- The committed `evals/report.md` / `report.json` show **33% success** — they are output from the
  *buggy injection policy*, not the greedy baseline. Anyone opening `report.md` sees a number 45
  points below the baseline sitting in the same directory. Worth regenerating.

---

## 2026-08-06 — Closed source: what a recruiter can and cannot check

This matters for bullet selection, not just honesty.

**Independently verifiable by anyone, right now:** the site renders; `/api/health` returns
`{"status":"ok"}`; the full scan flow works with no signup (verified end to end); the 7 categories
and their weights are displayed and returned by the API; a public agent surface exists at `/agent`.
→ supports `av-live-scan-latency`, `av-deploy`, and the public half of `av-scan-pipeline` and
`av-scoring-weights`.

**Not verifiable without the private repo:** the entire eval block (`av-eval-harness`,
`av-eval-gate`, `av-cross-model`, `av-gold-set`, `av-judge-fnr`, `av-online-oracle`),
`av-trace-schema`, `av-shopping-agent`, remediation, Postgres/CI/frontend counts, and the MCP
*server* (the MCP scanner category is checkable through a scan result; `mcp.agentveris.com` is listed
"deploy pending" in README:49 — the bullet says *built*, not *deployed*, deliberately).

**Never claim:** user counts, traffic, revenue, or conversion. No usage metric exists anywhere in the
repo. Stripe is wired but disabled and the pricing page isn't linked in nav — the product is free.

---

## 2026-08-06 — AI-assistance disclosure: inconsistent with the KV cache repo

Attribution is solo and unambiguous — 44 commits, one human, three identity spellings of the same
person, both PRs self-merges, and every ADR and design doc names Haochen as sole author/decider.
`attribution: mine` throughout; no `shared` or `team-context` tagging is needed.

But the **disclosure convention differs between his two flagship projects**, and only he can decide
which is right:

- **Distributed KV Cache** — 22 of 35 ADRs openly record `Deciders: HC (+ Claude)`. Public repo.
- **AgentVeris** — **no ADR discloses AI assistance**, while the repo carries stronger evidence of
  it: a 13 KB `CLAUDE.md` at root, a commit deleting `CLAUDE_CODE_IMPLEMENTATION_PLAN.md`, a commit
  excluding `.claude/` from version control, and a committed `run-agentveris` Claude Code skill. No
  `Co-Authored-By: Claude` trailers anywhere.

This does not change the attribution tier and nothing in the bullets claims otherwise. It changes
what Haochen should be ready to say out loud — and consistency between the two projects matters more
than which convention he picks. Since AgentVeris is closed source, this is entirely his call.

**Verifier:** Claude (source reading + a live production scan). All bullets `draft` pending Haochen's
confirmation.
