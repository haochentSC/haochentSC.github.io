# resume/ — the master resume store

**Start here if you are a new session, a new machine, or a future Haochen who forgot how this works.**

This directory is the single upstream source of truth for every factual claim Haochen makes about
his work — on a resume, on the portfolio site, or in an interview. It exists because the same facts
were being re-derived from scratch for every application, and the numbers were drifting apart.

They had drifted badly. When this store was built, **fourteen published claims did not survive
verification** against the repos they came from. Two examples of the failure mode:

- The live site claimed the World Models VAE had **4.35M parameters**. Summing the layers in
  `models/vae.py` gives **1,777,411**.
- It claimed the Deepsick marketplace was seeded with **~1.4M Mercari listings**. The database holds
  **19,695 product rows** — 1.4M was the row count of the *source TSV*, not of what was loaded. A
  71× overstatement, on a public page, under his own name.

Nothing in the old workflow would have caught either. That is what this directory is for.

---

## Read this before touching anything

**`MASTER-RESUME.md` §1 is the governing ruleset.** It wins over everything: this README, both
skills, any prompt, and any instruction from Haochen that conflicts with it. Read §1 first, every
time. It is about 120 lines.

The rules you will trip over first:

| Rule | In one line |
|---|---|
| **R1** | Every number carries a verification tier, a source, and a date. `disputed` never ships. |
| **R2** | New bullets land as `draft` and do not render until Haochen confirms the number aloud. |
| **R3** | Never delete a bullet. Retire it to §7 with a reason. Ids are never reused. |
| **R4** | A number cannot move without its `source@commit` moving in the same edit. Never round up. |
| **R6** | On a conflict, recomputation from source beats a benchmark artifact beats a README beats the portfolio beats the old resume. |
| **R7** | Only `mine` bullets may open with "Built / Designed / Shipped". Team work needs a scoping phrase. |
| **R8** | Sync direction is **master → portfolio, always.** Never the reverse. |
| **R10** | Tailoring may *condense* a bullet. It may never *add* — and removing a hedge counts as adding. |

**The tiers are not decoration.** `measured` means an artifact in the repo produced the number.
Recalling a number you are confident about is `self-attested`, even if it appeared on a resume he
already sent. Getting this wrong is the whole failure mode this store exists to prevent.

---

## Layout

```
resume/
├── README.md                  <- you are here
├── MASTER-RESUME.md           <- §1 rules, then all content. Hand-authored; no build step
├── RESUME-WRITING-SYSTEM.md   <- craft rules: wording, verbs, layout, ATS + a pre-send checklist
├── evidence/<id>.md           <- append-only verification ledger, one per subject
└── applications/
    └── <YYYY-MM-DD>-<company>-<role>/
        ├── jd.md         <- the posting verbatim + a gap analysis
        ├── selection.md  <- which bullets, why, and any R10 condensed forms
        └── resume.tex / resume.html / resume.pdf
```

**The two governing documents split cleanly.** `MASTER-RESUME.md` §1 decides *what may be claimed*;
`RESUME-WRITING-SYSTEM.md` decides *how a permitted claim is worded and laid out*. §1 wins on any
conflict, and the writing system's §8 already records every known conflict and its resolution — so
don't re-litigate them. Run its §9 checklist before any resume ships.

`MASTER-RESUME.md` sections: §1 rules · §2 profile · §3 education · §4 experience · §5 projects
(six) · §6 skills inventory · §7 retired.

`applications/_validation-*` and `_smoketest` are calibration fixtures, not real applications. They
are kept because the page-budget numbers in `resume-tailor` are calibrated against them.

Rendered PDFs are gitignored (see `.gitignore` here) — they regenerate from `selection.md` in one
command, and binaries in git history are not worth the diff noise.

---

## The two skills

Never edit this store by hand when a skill covers the task. They are installed at
`C:\Users\tongh\.claude\skills\`. The split is **write vs. read**, and it is load-bearing.

### `resume-master` — the only thing allowed to write `MASTER-RESUME.md`

Use for: adding a project, mining a repo for bullets, changing or re-verifying a metric, resolving a
conflict, retiring a bullet, auditing claims, syncing the portfolio.

Its enforcement script is the gate. Run it before you call any session done:

```bash
python "C:/Users/tongh/.claude/skills/resume-master/scripts/check.py"
```

It checks provenance (tier + source + date on every number, no active `disputed` bullet, every
`estimated` bullet hedges), flags orphan-risk bullet lengths, and diffs every `metrics[]` value in
`src/content/projects/*.md` against the master. Last recorded run: **72 bullets, 0 errors,
7 warnings** (the warnings are cosmetic line-length notes plus one architectural constant on a
`code-verified` bullet — all reviewed and accepted).

### `resume-tailor` — reads the master, writes only into `applications/`

Use when a job description shows up. Selection, not authorship: pick bullets, order them, condense
to fit, render.

```bash
python "C:/Users/tongh/.claude/skills/resume-tailor/scripts/render.py" \
  --selection "resume/applications/<dir>/selection.md"          # add --check for budget only
```

It refuses `draft` and `retired` bullets, enforces R10 mechanically (a condensed form must be
strictly shorter and may introduce no figure absent from the master), reports the one-page line
budget, and after rendering re-extracts the PDF text to prove every selected bullet survived.

**If tailoring needs a bullet that does not exist, stop and hand off to `resume-master`.** Do not
write it in the output. That boundary is what keeps deadline pressure from becoming fabrication
pressure, and it is the single most important thing in this system.

### Rendering reality on this machine

No LaTeX is installed. `render.py` probes tectonic → latexmk → pdflatex → **headless Chrome
`--print-to-pdf`**, which is what actually runs today. `resume.tex` is always written, so Overleaf
is never blocked. `winget install TectonicProject.Tectonic` would make the PDF byte-match the
LaTeX layout.

---

## Why this lives in the portfolio repo

It used to be a separate nested git repo, gitignored by the portfolio, specifically so career data
could not reach the public GitHub Pages deploy. Haochen consolidated it here on **2026-08-09** for
one place to manage and back up.

**This repository must therefore stay PRIVATE.** What is in here that should not be public:

- Contact details, and the complete claim inventory including every `self-attested` weak spot
- `evidence/` ledgers containing candid verification notes — attribution investigations via
  `git blame`, corrections of his own published numbers
- §6.1, which lists exactly which claims on the live site have **no** evidence backing
- AgentVeris internals — architecture, table counts, eval baselines — from a **closed-source** repo
- `applications/*/jd.md`, which carries a blunt per-company gap analysis

Note that GitHub Pages from a private repo requires **GitHub Pro or Team**. On the Free plan,
flipping this repo to private unpublishes the site.

**Nothing here reaches the website either way.** Astro builds `src/` and `public/` only, and
`.github/workflows/deploy.yml` uploads `dist/`. Verified: no string from this directory appears in
a production build.

### The standalone history

The 12 commits from when this was its own repo did not merge into the portfolio history — the
subtree merge was blocked by a sandbox guard. That history is preserved intact at:

```
C:\Users\tongh\.claude\backups\resume-store-standalone-2026-08-09.bundle   # git clone this
C:\Users\tongh\.claude\backups\resume-store.git                           # bare clone, same content
```

R4 auditability ("a number cannot move without its evidence moving") depends on being able to read
that history, so **do not delete those without grafting them in first.** To graft:

```bash
git remote add resume-store "C:/Users/tongh/.claude/backups/resume-store.git"
git fetch resume-store
git merge -s ours --no-commit --allow-unrelated-histories resume-store/main
git read-tree --prefix=resume/ resume-store/main
git commit -m "Graft the standalone resume-store history"
git remote remove resume-store
```

---

## Current state (updated 2026-08-14)

**72 total bullets: 71 active, 1 retired.** Six projects plus one internship.

| Subject | Bullets | Notes |
|---|---|---|
| Stringer News (internship) | 7 active, 1 retired | Repo recovered at `C:\Users\tongh\stringer`; email and autosave mechanisms code-verified, two autosave outcomes remain `self-attested` |
| Distributed KV Cache | 15 | Richest evidence: committed benchmarks, 35 ADRs |
| AgentVeris | 19 | Live in production; **closed source**, so no independent proof on paper |
| Deepsick Marketplace | 14 | Team of 4 — attribution resolved by `git blame` |
| World Models | 10 | |
| NeuroMechFly | 6 | Thin: 1,063 LOC, no benchmarks. No performance number exists — write none |

Applications sent: one real (`2026-08-07-snowflake-swe-snowconvert-ai`), plus validation fixtures.

### Open items, all needing Haochen

1. **Stringer News outcomes.** The recovered repository verifies the email system, 100-user batch
   default, API-key authentication, per-recipient continuation, and 3-second autosave debounce.
   It does not verify the 90% draft-loss or <0.5% save-failure outcomes, which remain
   `self-attested` and stay off current applications. The ~200 ms claim remains rejected, and the
   Docker onboarding bullet was retired after git history contradicted its attribution.
2. **Modality-Aware KV Tiering is not cloned.** It is the sixth project and has zero bullets. It
   also blocks the entire RAG skills group — RAG, multimodal RAG, BM25, RRF, CLIP, Qwen3-Omni are
   published on `SkillGrid.astro` with no evidence pointer (§6.1). Cloning it is the largest
   remaining gain in the whole store.
3. **`av-judge-fnr` is `self-attested`** at a 25% judge false-negative rate. One command in the
   AgentVeris repo — `uv run python -m evals.gold.fnr` — plus a committed artifact promotes it to
   `measured`. It is currently the weakest claim in the file.
4. **`ds-gcp-cloudsql` in §6 is a dangling pointer** — no such bullet id exists. The real evidence
   is `ds-windows-connector-fix`. `check.py` does not validate §6 pointers, so there may be others.

## Known gaps in the tooling

- `check.py` does not verify that §6 skill pointers resolve to real bullet ids (see item 4).
- The `resume-tailor` line-budget estimator is calibrated, not exact. **The render is the
  authority** — `render.py` reports the true page count from the PDF. Believe that number.
