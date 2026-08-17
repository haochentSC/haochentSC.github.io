# Selection — Google, Software Engineer, Early Career, Campus (2026-08-13)

**Design principle: breadth, not depth.** The Snowflake referral resume was built for two reqs that
wanted one deep story, so it stacked three backend/data projects. Google's posting is a generalist L3
requisition — a nine-item **OR** list of preferred quals, "versatile," "across the full-stack,"
"opportunities to switch teams," and a team-match step that happens *after* the hiring committee. He
is being screened for "would any Google team want this person," so the page is arranged as four
non-overlapping axes:

| Axis | Carried by | Maps to |
|---|---|---|
| Production backend + frontend | Stringer News | web app development; ships real software |
| Distributed systems + algorithms | Distributed KV Cache | "distributed and parallel systems," DSA min qual, networking |
| AI / agents + shipping to production | AgentVeris | **AI productivity tools min qual**, large software systems |
| Machine learning | World Models | "machine learning" preferred qual |

**11 bullets (3 / 3 / 3 / 2)** — the same count the Snowflake render fit on one page, so the budget
holds.

Changes vs. the 2026-08-10 Snowflake resume:
- **Deepsick Marketplace → World Models.** Deepsick's strength is advanced SQL (stored procedures,
  CTEs, transactions) — that was Snowflake-specific and overlaps the axes already covered here.
  Google names machine learning twice (preferred quals *and* the "about the job" blurb) and nothing
  else in the store speaks to it. Deepsick is held back, not retired.
- **KV cache promoted to first project.** "Google is an engineering company at heart… scalability and
  storage solutions." The Go distributed cache is the single most Google-shaped thing he has built,
  and it carries the DSA minimum qualification.
- **`kv-eviction-pareto` added.** The DSA min qual needs an actual algorithm, not just "used a hash
  ring." A work-conserving eviction policy that Pareto-dominates static quotas is a real
  policy-design problem with a two-sided measured result — and it doubles as GCA signal
  (reasoning through a trade-off).
- **`av-mcp-both-sides` added, `av-eval-harness` / `av-eval-gate` dropped.** The eval bullets were the
  Snowflake centerpiece (execution-level validation). Here the scarcer requirement is the new
  **"AI productivity tools to streamline business or development workflows"** minimum qual, and MCP —
  AgentVeris exposed as a server an AI client can drive over the protocol — reads onto it directly.
- **`av-scan-pipeline` added** for "developing large software systems."
- **`sn-batch-enrichment` → `sn-autosave-nometric`.** Batch/ETL was the Snowflake hook. Google's
  posting says "full-stack" and lists "UI design"; the auto-save work is the only frontend
  engineering he has from a production job, and it makes the internship read as full-stack rather
  than backend-only.

## Two honesty calls, both flagged for Haochen

**1. Auto-save: the version with no number.** `sn-autosave-draftloss` carries "cutting draft loss by
90%" and `sn-autosave-reliability` carries "<0.5% save-failure rate." Both are `self-attested`
against `haochent_resume_v1.tex` with no artifact, and both are on the store's open-items list
awaiting his verification pass. Google's screen rewards numbers, so the 90% would help — but the
2026-08-10 precedent was his own call that defensible beats impressive, and "how did you measure
that?" currently has no answer. **Shipped `sn-autosave-nometric` (no metric claimed).** One-word swap
if he can source the 90%; the condensed form is written in this file below.

**2. Java and C++ appear on the languages line as `(coursework)`.** Google's min qual names
"Python, C, C++, Java, JavaScript" — Python alone satisfies it, so nothing is at stake, but a campus
recruiter expects a CS graduate to have touched them. §6.1 records the 2026-08-06 decision to keep
Java and C/C++ with USC coursework as the stated basis. The parenthetical is what makes that basis
visible instead of implied; without it, §6's rule ("a skill with no pointer does not go on a resume")
would exclude them. **This is the honest form, not a hedge to be deleted.**

## Open items this application surfaced

- **No expected graduation date** for the MCS. This is a *campus* req — recruiters filter on grad
  cohort. Not recorded in §3. The resume ships `Jan 2026 – Present`. Fix upstream first.
- **No bullet for actually using AI dev tools** (Claude Code / Copilot / Gemini) in his own workflow.
  If true, it is ownable and would convert the min qual from "met by adjacency" to "met literally."
  Belongs in the master as `draft` via `resume-master`, never written here.
- **`ds-auth-basic` does not exist in `MASTER-RESUME.md`.** It was selected and shipped in the
  2026-08-10 Snowflake referral resume. Under R5, a bullet that appears in a submitted
  `selection.md` cannot simply not exist — either it needs to be written into §5 with provenance, or
  the shipped resume contains prose with no upstream. Not touched here (not selected for Google), but
  it is an open R9 violation.
- **Date drift.** The 2026-08-10 resume shipped KV cache as `May 2026 – Jul 2026` and Deepsick as
  `Jan 2026 – May 2026`; the master says `2026-05 → 2026-06` and `2026-01 → 2026-04`. Those
  corrections came from Haochen but never landed upstream (R4). This resume carries
  `May 2026 – Jul 2026` for consistency with what was already submitted.

## Craft revision (2026-08-13, second pass)

Revised against the new `resume/RESUME-WRITING-SYSTEM.md`, which was compiled from recruiter,
career-services and engineering-forum guidance *after* this resume was first drafted. Seven defects
found, all fixed. **No bullet was added, removed, or reselected** — the selection above is unchanged.
Every fix is lateral or a deletion, so R10 holds throughout.

1. **Verb repetition — the real defect.** "Built" opened **5 of 11** bullets, three of them
   consecutively in AgentVeris. The 2026-08-10 Snowflake proofread had already caught and fixed this
   exact fault by hand, and it came straight back because the fix was never written down. That is
   why the system doc now exists. Three lateral swaps, each matching the actual contribution:
   `av-scan-pipeline` Built → **Designed** (the bullet is an architecture: submit-and-return, queue
   fan-out, fault isolation, crawl-then-score ordering), `av-shopping-agent` Built → **Developed**,
   `av-mcp-both-sides` Built → **Integrated** (he integrated the protocol on both sides — as a scored
   category and as a server). Now: Shipped · Engineered · Implemented · Built · Devised ·
   Chaos-tested · Designed · Developed · Integrated · Built · Trained. Max repetition 2.
2. **Tech-stack lines were rendered as bullets.** A stack list with a bullet marker pretends to be an
   accomplishment and burns a marker. Moved to an unbulleted italic sub-line in both HTML and LaTeX.
   Reclaimed the vertical space that paid for fix 6.
3. **Six bullets ran to 3 rendered lines.** Trimmed `kv-eviction-pareto` (240→202),
   `av-scan-pipeline` (252→214), `av-mcp-both-sides` (265→208), `wm-vae-params` (225→184),
   `kv-ttft-crossover` (203→188), `kv-chaos-aws` (206→183) — all pure deletions. The
   `av-mcp-both-sides` trim dropped the four sub-check names, which were the least legible part;
   `wm-vae-params` dropped "of a World Models reproduction" and "CarRacing" as redundant against the
   project heading directly above it. **All 11 bullets now render at exactly 2 lines**, verified
   against a screenshot of the render, with no orphan final lines.
4. **`Linux` was on the skills line with no §6 evidence pointer.** I put it there to reach for the
   "Unix/Linux environments" preferred qual. §6's own rule is that a skill with no pointer does not
   go on a resume, and a parser scores an unsupported claim below an absent one. **Removed.** Docker
   and AWS carry the same signal honestly.
5. **The skills section had 15 items crammed on one line.** Split into `Backend & Data` and
   `Cloud & Tooling`. Five grouped lines, each fluency-ordered, 31 entries, all §6-backed.
6. **Summary ran 3 lines.** Cut to 2 and made punchier — "Builds and measures systems" leads now,
   which is the actual thesis, rather than trailing a clause about the degree.
7. **Filename.** Ships as `resume.pdf` to match `.gitignore`; **rename to
   `Haochen_Tong_Resume.pdf` before uploading.**

Verified after revision: 1 page · 11/11 condensed forms strictly shorter than the master with zero
new figures · no verb over 2 uses · no banned opener · no pronouns · no buzzwords · no bullet over
~2 lines · ≤3 bullets per entry · every skills entry resolves to §6.

## Register rewrite (2026-08-13, third pass) — Haochen's call

He read the shipped text and rejected it: *"no one is gonna write the resume like that."* The example
he pulled was exact:

> ~~Devised a multi-tenant eviction policy — GDSF cost-awareness plus an elastic max-min fairness
> discount — that **Pareto-dominates static quotas**: global hit rate 12.2% → 14.4%, worst-tenant
> 10.3% → 12.3%.~~

He is right, and the diagnosis matters more than the fix. **The master is written in lab-notebook
register** — precise, complete, provenance-first — which is correct for an evidence file. The first
two passes *condensed* those bullets by deleting clauses, which preserves the register and produces
sentences no engineer would ever say out loud. Condensing and rewriting are different operations, and
only the first one had been happening. That is now `RESUME-WRITING-SYSTEM.md` §4.4, with this bullet
as its worked example.

**All 11 bullets rewritten**, not trimmed. Representative:

| Was | Now |
|---|---|
| "…that Pareto-dominates static quotas: 12.2% → 14.4%, worst-tenant 10.3% → 12.3%" | "…lifted overall hit rate from 12.2% to 14.4% and the worst-served tenant from 10.3% to 12.3% at once, a trade-off fixed quotas cannot avoid" |
| "Chaos-tested … with a correctness verifier through injected egress latency, an etcd partition and a real node termination: 0 violations" | "Chaos-tested … by injecting network latency, partitioning etcd, and killing a node outright, while a verifier checked every response: 0 correctness violations" |
| "over a small 5-tool surface with a 12-iteration cap, behind an adapter whose frozen-fixture and live-site implementations run identical agent code" | "deliberately just 5 tools and a 12-step cap — running the same code against frozen test fixtures and against live storefronts" |
| "a 5-check MCP readiness category, and AgentVeris itself as a FastMCP server exposing 3 tools and 5 scan resources" | "the scanner grades a site's MCP readiness across 5 checks, and the product itself runs as an MCP server with 3 tools" |
| "compressing 64×64×3 frames to 32-dim latents through four strided conv layers and a mirrored transposed-conv decoder, 1,777,411 parameters" | "a 1,777,411-parameter convolutional VAE that compresses each 64×64 frame into a 32-dimensional latent, with a mirrored decoder to reconstruct it" |

Notation was prosed (`RF=2` → "2× replication", `500,000` → "500k"), nominalizations turned back into
verbs, and implementation trivia cut ("Flask Blueprint", "decorator-based", "strided", "transposed-
conv"). **No claim changed and no figure moved** — verified mechanically, with the two plain-English
number rewordings whitelisted as exact equivalents.

**Channel correction:** Haochen has a **referral**, so a person reads this before any parser does.
Per the new §7, that flips the optimization target from keyword coverage to readability. The skills
block was accordingly cut from 5 ATS-shaped lines (31 entries) to 4 curated ones, dropping the
redundant padding (Protobuf under gRPC, JavaScript under TypeScript, Next.js under React, REST, GCP).

Two orphan lines caught in the render and fixed: `wm-ppo-latent-control` was ending with "GPU." alone
on its own line, and `sn-api-auth-isolation` was breaking mid-word across "in-flight". Both now fit
cleanly; each of those two bullets is a single line.

**Final state:** 1 page · 11/11 forms strictly shorter than the master, zero new figures · zero
lab-notebook terms remaining · ≤1 aside per bullet · no verb over 2 uses · no orphan lines · every
skills entry §6-backed.

## Fourth pass (2026-08-13) — external guideline, applied with judgement

Haochen brought a resume-writing guideline from ChatGPT. **Its central criticism was correct and it
caught an error I introduced:** the third pass diagnosed the lab-notebook problem right but
overcorrected past the target into *project-write-up* register — em-dash pairs as default
punctuation, narrative gerunds ("killing a node outright"), editorializing ("a trade-off fixed quotas
cannot avoid"), and adverbs defending design choices ("deliberately just 5 tools"). Its rewrite of the
chaos bullet is plainly better than mine. `RESUME-WRITING-SYSTEM.md` §4.4 now names **three**
registers, not two, because fixing the left-hand failure by narrating harder produces the right-hand
one.

Adopted from the guideline:
- One declarative sentence per bullet; prepositional phrases over narrative gerunds.
- **Summary removed.** It was positioning, not information — the entries are the evidence. This is
  now the store's default (§3).
- **Formatting policy** (§3.2): bold only on name, headings, schools, companies, projects, skills
  labels. Nothing bold or underlined inside a bullet, no underlined links, tech-stack lines plain
  rather than italic.
- **Entry hierarchy flipped** to `Company / Location` over `Title / Dates`.
- `Technical Projects` → `Projects`, `Technical Skills` → `Skills`.
- Skills regrouped into the guideline's four categories.

**Where I did not follow it, and why:**

1. **`C++ (coursework)` keeps its marker.** The guideline's own skills example lists Java and C++
   bare. Neither language appears in any project in the store; §6.1 records the 2026-08-06 decision to
   keep them with USC coursework as the stated basis. Listing them unqualified next to Python and Go
   implies production experience he does not have — and the guideline's own rules 4 and 5 (flag
   unsupported claims, prefer evidence over adjectives) point the same way. The marker stays.
2. **"in Go" stays in the KV cache bullet.** The guideline's model rewrite drops it. Go is the single
   most relevant language signal for an infrastructure team and it is the only bullet carrying it.
3. **`Git` is not in the skills list** despite appearing in the guideline's example. It is table
   stakes and reads as padding.
4. **Numbers kept exact** where the guideline was neutral: `27,365`, `44 of 63`, `10.9%`. Only
   `1,777,411 → 1.78M` and `500,000 → 500k` were softened, both permitted by R4 (never round *up*).

**Deepsick Marketplace added as a fourth project.** Removing the summary and tightening bullets left
the page roughly a fifth empty, which reads as unfinished. Deepsick fills it with the two things
nothing else on the page carried: **non-trivial SQL** ("data storage" is named in the posting) and
**a 4-person team** — Leadership is one of Google's four scored signals and the store had no
collaboration evidence anywhere. Bullets are `ds-fair-price-cte` and `ds-backend-tests`, both `mine`
per the 2026-08-06 attribution resolution, so their first-person verbs are R7-clean. **Easily
reversible** if he wants the three-project version back.

Six orphan lines were caught across three render passes and fixed — including "GPU." and
"idempotency." sitting alone on their own lines, and a mid-word break across "in-flight". Character
counts do not catch these; only looking at the render does.

**Final state:** 13 bullets, 1 page, ~87% full. All 13 exist in the master, all strictly shorter,
zero new figures. Zero lab-notebook terms, zero project-write-up tells, zero em-dashes inside
bullets, ≤1 aside per bullet. Max verb repetition 2. No bold, underline, or italic inside any bullet.
No orphan lines.

## Fifth pass (2026-08-13) — render bugs, found by actually compiling the LaTeX

Haochen reported two faults from Overleaf that no earlier pass could have caught, because every
earlier pass verified the **HTML** render and treated `resume.tex` as a hand-maintained mirror.
It was never compiled. Both reports reproduced on the first real compile.

**Tooling change.** There is no LaTeX on this machine. A portable `tectonic` binary (single .exe,
unzipped into the scratchpad, no system install) compiles this file directly, and `pymupdf`
installed with `pip --target` into a scratchpad-local `libs/` rasterises the PDF for inspection.
Latin Modern shares Computer Modern's metrics, so tectonic's XeTeX line breaks track Overleaf's
pdfLaTeX closely. `\input{glyphtounicode}` and `\pdfgentounicode` are now wrapped in
`\ifdefined\pdfgentounicode` so the file compiles under both engines; under Overleaf's pdfLaTeX
the guard is a no-op and behaviour is unchanged.

**Bug 1 — the name rendered as flat ALL CAPS in the PDF.** Both files asked for small caps
(`\scshape`, `font-variant: small-caps`). Overleaf has real Latin Modern small-cap glyphs and
rendered it correctly; Chrome has none for the fallback serif, so it synthesises small caps by
scaling capitals, and at 24pt the size step is invisible. **Fix: title case in both files.** This
is a genuine portability defect, not a Chrome quirk to work around — a resume must not depend on
the reader having a specific font installed. One-word revert if the small-caps look is wanted and
Overleaf is the only render path.

**Bug 2 — two pages, with text past the right margin.** Two independent causes:

1. *Overfull \hbox, 57.4pt (0.8in) too wide*, on the KV Cache heading. `\resumeProjectHeading`
   builds a `tabular*`, and **a tabular row cannot wrap** — it silently runs off the page. The
   left cell held a 38-character bold title plus the 58-character repo URL. Fix: the two GitHub
   links now show `[GitHub]` rather than the full URL. AgentVeris keeps a visible `agentveris.com`
   because it is short and the domain is itself the signal that the product is live. The header
   already carries `github.com/haochentSC`, so nothing becomes unfindable in print.
2. *Stack lines were each a bare `\item[]`* inside the outer itemize. That collects `\itemsep` +
   `\parsep` on top of the text, four times over. The stack is now the third argument to
   `\resumeProjectHeading` and is typeset inside the heading's own `\item`, so it takes no list
   glue — and, being an ordinary paragraph rather than a tabular cell, it wraps instead of
   overflowing if it ever grows.

**Spacing was made explicit.** The stock template leaves `\topsep`/`\parsep`/`\itemsep` at their
11pt defaults (~9pt each) and claws the space back with negative `\vspace`. Those are now set
outright via `enumitem`. The first attempt kept the stock `\vspace{-7pt}` alongside the new
`\topsep=2pt` and **the stack lines landed on top of the first bullet in all four projects** — a
defect the log reports as nothing at all, and which only the rasterised page showed. The trailing
values are retuned to match; the comment in `resume.tex` says so, because this is exactly the kind
of coupling that gets "fixed" back to the stock value later.

**Two bullets shortened for slack, both R10-safe.** The first one-page compile left only 8pt of
bottom margin, which is one bad line break away from spilling again. `wm-vae-params` drops
`latent representations` to `latents` (already this resume's word for it, in the next bullet), and
`wm-ppo-latent-control` drops `rather than` to `not`. Both are strict shortenings with no figure
changed. Slack is now ~20pt, and the second edit also cleared a single-word `GPU.` orphan that had
reappeared in the HTML render.

**Verified on both renderers.** LaTeX (tectonic): 1 page, 0 overfull boxes, 0 warnings, ink ends
93% down. HTML (Chrome): 1 page, ink ends 90% down. R10 all clear on all 13 bullets, register and
craft checks unchanged, no orphans in either.

`resume.pdf` is now the LaTeX build rather than the Chrome build, since the LaTeX file is what
gets uploaded.

## Sixth pass (2026-08-13) — an attribution overclaim I introduced

Haochen asked whether World Models should say it reproduces a paper, noting that "just saying built
a convolutional VAE is a bit too much" and describing his actual contribution as tuning, changing,
training, testing, then retraining with more tuning.

He was right, and the master was already right. `wm-vae-params` reads **"Built the vision model of a
World Models reproduction — a convolutional VAE…"**. The shipped bullet read **"Built a
1.78M-parameter convolutional VAE that compresses 64x64 driving frames into 32-dimensional
latents."** Condensing had deleted *"of a World Models reproduction"*, which promotes reproducing a
published architecture into designing one.

**This is an R10 breach, and the class of breach matters more than the instance.** R10 forbids
strengthening a claim, but every automated check here was length-and-digits: the bad bullet was
*shorter* than the master's and introduced *no new figure*, so it passed cleanly four times.
**Deleting a qualifier is the cheapest possible way to strengthen a claim.** The pre-send checklist
in `RESUME-WRITING-SYSTEM.md` §9 now carries an explicit attribution item, and the verifier now
diffs the master's qualifiers (`reproduction`, `course project`, `team`, `from the paper`, `fork`,
…) against the page, accepting the qualifier if it has moved to the entry heading and failing if it
has simply gone.

**Fixes applied.**

1. The entry heading now reads `World Models · paper reproduction, CarRacing-v3`, matching how
   Deepsick already carries `4-person course project, private repo`. Stating it once in the heading
   governs both bullets and costs no bullet length.
2. `wm-vae-params` was **replaced by `wm-posterior-collapse`**. This is the more honest bullet and
   the stronger one: parameter counts describe the paper's architecture, whereas diagnosing a
   posterior collapse the loss curve concealed, fixing it with a KL weight of 1e-4, and re-checking
   against held-out frames is precisely the tune/change/train/test loop Haochen described as his
   contribution. It is `code-verified` at `scripts/train_vae.py`:124, a stronger tier than the
   `derived` parameter count.
3. `wm-ppo-latent-control` regained `32-dimensional`, which the previous condensing had dropped and
   which `wm-vae-params` had been silently supplying as the antecedent for "those latents".

**Cost.** The entry grew by one rendered line and bottom slack fell to 8pt. Reclaimed by dropping
the inner list `itemsep` from 2pt to 1pt — the density knob documented in `resume.tex` — rather
than by cutting content. Slack is back to ~18pt.

**Verified.** LaTeX and HTML both 1 page, 0 overfull boxes, no orphans. R10 all clear on 13/13,
attribution check clean, max verb repetition 2 (`Diagnosed` is a new opener, so nothing regressed).

## Seventh pass (2026-08-14) — remove explanatory contrasts

Haochen flagged two phrases that still sounded generated: *"isolating each failure to a single
recipient instead of the whole batch"* and *"on those 32-dimensional latents, not raw pixels."*
Both explain a contrast after the positive statement has already made the point. The same test was
applied to all 13 bullets in both renderers.

The revision removes contrastive afterthoughts, trims explanatory jargon, and makes each bullet lead
with the work itself. It also simplifies several clause-heavy bullets: the MCP bullet now names the
two deliverables directly, the Deepsick testing bullet opens with the 44-of-63 contribution, and the
World Models debugging bullet states the diagnosis without personifying the loss curve. The laptop
GPU qualifier was also dropped from the PPO bullet because it defended the training constraint
without strengthening the result. No project, claim, metric, attribution qualifier, or skill
changed. `RESUME-WRITING-SYSTEM.md` §4.5 and the pre-send checklist now reject unnecessary `not X`,
`rather than X`, and `instead of X` phrasing.

## Eighth pass (2026-08-14) — Stringer source recovery

The local Stringer repository was recovered at commit `5b8b129`. Direct code inspection replaced
the old resume as the highest-precedence source and required two factual corrections:

1. `sn-email-digest-api` no longer claims Redis-backed idempotency. An idempotency helper exists but
   is never imported by the notification routes or email service.
2. `sn-autosave-nometric` now describes only the code Haochen authored: a 3-second debounce,
   persistent draft-ID reuse, and edit-only triggers. The repository contains no optimistic UI,
   sync-conflict handling, slow-connection logic, or artifacts for the previously circulated 90%,
   <0.5%, and ~200 ms outcomes.

The repository also disproved the Docker onboarding bullet, whose files predate the internship and
were authored by other contributors. That bullet was retired in the master and removed from the
portfolio. The current resume still contains 13 bullets and changes no project selection.

## Ninth pass (2026-08-15) — Google SWE feedback: jargon, intern title, AgentVeris

A Google SWE who read this resume (and the LinkedIn) gave three notes. Applied below. No bullet
was added or removed; one entry moved section.

**1. Jargon / fluff.** The example was exact: *"Designed the asynchronous scan pipeline behind a
live SaaS product to run 8 check modules across 4 Celery queues" really means "Designed a web
scraper". If you want to mention the job scheduler, mention that specifically.* Recruiters will not
know the frameworks, and people reading the page have no background on the projects. LinkedIn was
cited as the better register — it leads with what the product *does*.

All 13 bullets rewritten toward that register. The scanner bullet now says "website scanner" +
"background job scheduler" rather than Celery queue counts. Framework names that are not the
accomplishment moved off the bullets (they remain on stack lines and in Skills). This is now a
named failure mode in `RESUME-WRITING-SYSTEM.md` §4.4 (`Framework-count fluff`, `Product with no
purpose`), because pass three already proved that an unwritten proofread comes back.

Not adopted: reducing the scanner to "web scraper". That overshoots into vagueness (§4.4, too far
right). The product crawls, checks, and scores; the bullet now says that in order.

**2. Stringer intern title and dates. Not changed.** LinkedIn also lists `Software Engineering
Intern, Aug 2025 – Dec 2025`. The reviewer asked whether that title is accurate under a background
check, and noted that four months is an unusual internship length (a fall-semester stint, not
unheard of). **Haochen must confirm the offer letter / HR record says intern before this goes to
Google.** If the relationship was contractor, volunteer, or untitled part-time work, the title
here and on LinkedIn both have to move, together. Dates stay unless the record says otherwise.

**3. AgentVeris description + section.** Deepsick already carries `4-person course project` and
World Models `paper reproduction`. AgentVeris had no qualifier, so a stranger could not tell
whether it was a class project, a job, or a side project. Two changes:

- Moved to **Experience**, reverse-chronological, above Stringer. LinkedIn already does this
  (title: Technical Co-Founder). The reviewer suggested the move "if you say it's a startup
  possibility."
- Title was briefly **Independent Developer**, then corrected to **Technical Co-Founder** to
  match LinkedIn. Haochen confirmed (2026-08-15): a teammate participates in brainstorming;
  all coding is his. The evidence ledger's solo-commit record is consistent with that split.
  Resume and LinkedIn now use the same title.

R10: every condensed form remains shorter than its master bullet; no new figure. "Job scheduler"
unpacks Celery. "Scores whether AI shopping agents can read the catalog" is the product purpose
already in the master project title (`Agentic Commerce Compliance Scanner`) and in
`av-scan-typical-time`'s agent-readiness score — it is not a new claim.

**Final state:** 13 bullets, AgentVeris in Experience, 3 projects. Intern title unchanged pending
Haochen. Max verb repetition 2 (`Built`, `Implemented`, `Wrote`).

## Tenth pass (2026-08-17) — title, best-episode figure, pre-send proofread

Three changes, then a full §9 run before sending the page back to the reviewing Googler.

**1. AgentVeris title → `Technical Co-Founder`.** Haochen confirmed a second person co-founded the
company and participates in brainstorming while **all coding is his**. Title now matches LinkedIn
exactly. `attribution:` stays `mine` on every `av-*` bullet because each describes code he wrote, so
no `team-context` scoping phrase is required under R7. Recorded in `MASTER-RESUME.md` under the
AgentVeris entry, specifically so a later session does not read the ledger's "44 commits, one human"
authorship finding as a statement about company structure and revert the title as an overclaim.

**2. `wm-ppo-latent-control` now leads with best episode 600.** Sourced from
`checkpoints/ppo_results.json`@`7a8bd85`: `max(rewards)` 599.7098 → **600**, `mean_reward` 284.7075 →
**285**, `std` 195.44, 500,000 timesteps, n=10. The master's source pointer moved from
`docs/images/final_scores.png` to the JSON in the same edit (R4) and the verification date advanced
to 2026-08-17. The `docs/demo_results.json` run (mean 207.6, best 398) is a **different**
10-episode run and still backs `wm-eval-variance` — do not merge the two runs' best episodes.

The earlier draft of this bullet carried "(a finished lap on this track scores near 1000)" as reader
context. **Cut.** It invited a percentage reading of 285/1000, and the environment's maximum is
Gymnasium's design rather than anything measured in the repo.

**3. Read-aloud proofread — five lateral fixes, no claim touched.**

| Bullet | Defect | Fix |
|---|---|---|
| `av-scan-pipeline` | "runs compliance checks … to run the checks" said the same thing twice | "crawls online stores and scores whether … , running its compliance checks through a background job scheduler" |
| `sn-email-digest-api` | "to one user or a batch with SendGrid" — modifier could attach to "batch" | "…to one user or a batch, using SendGrid and PostgreSQL" |
| `kv-eviction-pareto` | "raised … while also raising"; and a policy cannot raise a *tenant* | "lifted overall hit rate … and the worst-served tenant's from 10.3% to 12.3%" |
| `ds-fair-price-cte` | "condition and labels" stacked two `and`s; opener duplicated the next bullet's `Wrote` | "…condition, then labels…", opener → `Designed` |
| `wm-ppo-latent-control` | "those compressed frames" did not match the antecedent noun in the bullet above | "that compressed representation" (§4.5 one entity, one noun) |

**Verified after the edits.** LaTeX (tectonic) and HTML (headless Chrome) both **1 page**;
**0 overfull boxes, 0 warnings** in the log beyond the template's pre-existing benign `footskip`
note; all 13 bullets survive PDF text extraction in **both** renderers; no continuation line shorter
than 3 words; ink ends ~696pt of a 756pt text area (~60pt slack). R10 machine-checked on 13/13 —
every shipped form strictly shorter than its master text, zero new figures (the sole flag,
`500k` against the master's `500,000`, is the equivalence whitelisted in the third pass). No banned
opener, no pronoun, max verb repetition 2 (`Built`, `Implemented`, `Designed`). Attribution
qualifiers intact: `4-person course project` and `paper reproduction` both still in their headings.

**Blocking before upload:** rename to `Haochen_Tong_Resume.pdf`. **Still open upstream:** no expected
MCS graduation date (§3) on a *campus* requisition, and the Stringer intern title is unconfirmed
against HR records.

**Cover letter cut (2026-08-17, Haochen's call).** `cover-letter.md` / `.html` / `.pdf` deleted; he
is not sending one. This agrees with `hiring-research.md` §1, which records that Google's own
guidance is a letter "may or may not be considered" and that the resume carries the entire
pre-screen. **Do not regenerate one for this application.** The material it carried is not lost: the
Googleyness / negative-results bullets it was built around (`kv-a100-no-crossover`,
`kv-crossover-envelope`, `kv-14b-kv-bytes`, `wm-eval-variance`, `av-judge-fnr`) are listed in the
held-back block below and remain interview material. It also resolves the last inconsistency in this
folder — the letter described AgentVeris as built and operated "on my own", which read oddly beside
the `Technical Co-Founder` title now on the resume.

---

Every `>` line below is an R10 condensed form: strictly shorter than the master's, no figure
introduced, no claim strengthened, no hedge removed. **The `>` lines record the selection's intent;
`resume.html` / `resume.tex` carry the shipped text.**

## summary
<!-- Grounded in §2's raw material. "Builds and measures" and "deployed and operated solo" are §2
     verbatim. Ordered for a 6-15 second skim: degree, real job, then the three axes in the order
     the projects appear. No JD phrases copied in. -->
MCS student at UIUC with a production SWE internship and self-directed systems work in LLM inference
infrastructure. Builds and measures across the stack — a distributed KV cache in Go, LLM agents and
MCP tooling in Python, and a live SaaS product deployed and operated solo.

## experience
### agentveris
<!-- Moved out of Projects in the ninth pass. Title is Technical Co-Founder to match
     LinkedIn (teammate brainstorms; all coding is Haochen's — see ninth-pass note 3). -->
- av-scan-pipeline — "developing large software systems"; establishes what the product is
> Built a live website scanner that crawls online stores, runs compliance checks, and scores whether AI shopping agents can read the catalog, using a background job scheduler to run the checks.
- av-shopping-agent — an AI system automating a multi-step business workflow
> Developed an AI shopping agent that plans, searches, compares, and adds items to a cart, with 5 tools and a 12-step limit, tested on saved catalogs and live storefronts.
- av-mcp-both-sides — "AI productivity tools to streamline workflows", unpacked for a recruiter
> Implemented Model Context Protocol (MCP) on both sides, checking whether a site speaks MCP and exposing 3 tools AI clients use to run a scan.

### stringer-news
- sn-email-digest-api — production Python REST API design; the anchor that this is real shipped software, not coursework
> Shipped a Python API sending personalized email digests to one user or a batch with SendGrid and PostgreSQL.
- sn-autosave-nometric — the full-stack/UI axis; metric-free version by deliberate choice, see honesty call 1
> Added auto-save for article drafts, saving only after typing stops and reusing the same draft across saves.
- sn-api-auth-isolation — fault isolation in a production path
> Implemented API-key authentication on the email endpoints and kept sending after individual recipients failed.

<!-- Swap-in if the 90% gets sourced (R10-condensed, ready to use):
     sn-autosave-draftloss >
     Engineered debounced auto-save with optimistic UI and sync conflict resolution for the article
     editor, cutting draft loss by 90%. -->

## projects
### distributed-kv-cache
<!-- Leads the section. "Google is an engineering company at heart… scalability and storage
     solutions, large-scale applications." Go is not on their language list, which makes it read as
     range rather than as a miss. -->
- kv-ttft-crossover — distributed and parallel systems (preferred qual) + networking, with the strongest measured number on the page
> Built a distributed cache in Go that lets GPU servers reuse prefixes another server already computed, cutting time-to-first-token 10.9% on 4k-token shared prefixes on AWS.
- kv-eviction-pareto — carries the data-structures/algorithms minimum qualification, and doubles as GCA signal: a stated trade-off resolved with a two-sided measured result
> Designed a cache eviction policy that raised overall hit rate from 12.2% to 14.4% while also raising the worst-served tenant from 10.3% to 12.3%.
- kv-chaos-aws — "test, deploy, maintain" from the responsibilities, proven rather than asserted; reliability at scale
> Ran failure tests on a 3-node AWS cluster with network delay, coordinator outages, and node shutdowns, completing 27,365 requests with no correctness violations.

### agentveris
<!-- Moved to Experience in the ninth pass. Ids unchanged. -->

### world-models
<!-- The machine-learning axis, which Google names in the preferred quals AND the job blurb, and
     which nothing else in the store covers. Two bullets: architecture, then a measured result.
     Replaces Deepsick relative to the Snowflake resume. -->
- wm-posterior-collapse — the actual contribution (tune/diagnose), plain-language for recruiter skim
> Diagnosed a vision model that was ignoring its compressed representation and outputting blurry frames, then fixed it by lowering a training penalty and checking frames it had not seen.
- wm-ppo-latent-control — closes the ML story; leads with best episode 600 (measured from ppo_results.json), mean 285 retained
> Trained a controller to drive from those compressed frames, reaching a best CarRacing score of 600 and a mean of 285 over 10 evaluation episodes after 500k training steps.

<!-- Held back, strong in interview:
     Googleyness / intellectual humility — the best material he has, and all of it is cut from the
       page on purpose: kv-a100-no-crossover (published the negative result), kv-14b-kv-bytes
       (falsified his own assumption), kv-crossover-envelope (where the cache stops paying),
       wm-eval-variance (two runs, 285 and 207.6, rather than the better one), av-judge-fnr (the
       judge missed a quarter of true failures).
     GCA / debugging — kv-tp4-silent-corruption (silent KV-shard clobbering under TP=4; caught by
       asserting on write counts, not logs) is the single best story on the whole store.
     RRK breadth — av-eval-harness + av-eval-gate (the Snowflake centerpiece: oracle over judge,
       CI gate proven by injecting a regression), av-ci-gates (108 tests, 23 files), av-deploy,
       av-postgres-artifacts, kv-terraform-aws, kv-vllm-connector.
     Full Deepsick block — ds-fair-price-cte, ds-storedproc-conversation, ds-backend-tests,
       ds-serializable-txn: the answer to any database, SQL, or team-collaboration question.
     neuromechfly dropped entirely: no signal for this role. -->

## skills
<!-- Four lines. Leads with Languages (min qual), then AI (min qual), then the two preferred-qual
     clusters. Java/C++ marked (coursework) per honesty call 2 — that parenthetical is load-bearing,
     not filler. Security deliberately absent, per the 2026-08-10 authenticity rework. -->
Languages: Python, Go, SQL, TypeScript/JavaScript, Java and C++ (coursework)
AI & Agents: Anthropic SDK, LLM agents, MCP, LLM evaluation harnesses, PyTorch, vLLM
Distributed Systems: consistent hashing, gRPC/Protobuf, etcd, replication & failover, chaos engineering, Prometheus
Backend & Infra: FastAPI, Flask, Celery, REST, PostgreSQL, MySQL, Redis, Next.js/React, AWS, Terraform, GCP, Docker, Linux, CI/CD, pytest
