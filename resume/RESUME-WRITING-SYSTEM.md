# RESUME WRITING SYSTEM — craft rules

> **Precedence.** `MASTER-RESUME.md` §1 wins over this file, always. §1 governs *what may be
> claimed*; this file governs *how a permitted claim is worded and laid out*. Where a craft rule
> here would require adding, strengthening, or un-hedging a claim, §1 wins and the craft rule loses.
> §8 below lists every known conflict and its resolution, so nobody has to re-litigate them.
>
> Compiled 2026-08-13 from HR/recruiter guidance, university career services, and engineering
> forums. Sources at the bottom. Applies to everything rendered into `applications/`.

---

## 1. Why this file exists

The store already enforces *truth* (§1 of the master: tiers, provenance, no un-sourced numbers). It
enforced nothing about *craft*. Two applications shipped before this file existed, and the second one
regressed on a defect the first had already fixed by hand — "Built" opened five of eleven bullets on
the Google draft, after the 2026-08-10 Snowflake proofread had deliberately cut it to three.

A hand-proofread that isn't written down gets re-derived, badly, under deadline. This is that
proofread, written down.

---

## 2. The one-paragraph version

One page, reverse-chronological, single column, conventional section headings. Every bullet opens
with a past-tense action verb in implied first person, states what was built + how + what changed,
and runs one to two rendered lines. **Every bullet has to survive being read out loud** — the master
is written in lab-notebook register and must be *translated* into human sentences, not merely
trimmed (§4.4). No verb opens more than two bullets. Skills are grouped, ordered by fluency, and
contain nothing that can't be defended in an interview. Check the channel (§7) — a referral means a
person reads it first, so readability beats keyword density. Then run §9's checklist.

---

## 3. Structure

| Rule | Detail |
|---|---|
| **Length** | One page. Non-negotiable under ~10 years' experience. If it doesn't fit, cut content — don't shrink margins below 0.5in or type below 10pt |
| **Order** | Header → (optional summary) → Education → Experience → Projects → Skills. New grads may put Projects above Experience when the projects are stronger; here the internship is real and stays first |
| **Sections** | Use the boring names: `Education`, `Experience`, `Projects` / `Technical Projects`, `Technical Skills`. Parsers are trained on common headers; creative ones get dropped |
| **Bullets per entry** | **Max 3.** Consistent across recruiter sources. A 4th bullet dilutes the first three rather than adding to them |
| **Whitespace** | Target roughly 40–50% white space. A dense wall of text is not "more information," it is less read |
| **Summary** | **Default to omitting it.** Include only if it carries information the entries genuinely cannot — a pivot, a visa status, a relocation. "Builds systems and measures whether they helped" is a claim; the bullets are the evidence, and evidence beats adjectives. Never a list of traits |
| **Links** | GitHub / portfolio in the header, near the top. Project links visible as text, not hidden behind a hyperlinked title — a parser reads text, a recruiter clicks text |

### 3.1 Entry hierarchy

The stronger identifier goes on the bold top line, the role on the secondary line:

```
Experience     **Company Name**            Location
               Job Title                   Dates

Projects       **Project Name**  link      Dates
               Tech stack (plain, secondary)
               • accomplishment
```

### 3.2 Formatting discipline

Formatting exists to establish hierarchy. Nothing else.

- **Bold:** your name, section headings, school names, company names, project names, skills category
  labels. **That is the complete list.**
- **Never bold** a technology, a number, a result, or a phrase inside a bullet. Bolded metrics look
  like a pitch deck and train the eye to skip the unbolded text — which is most of the resume. A
  strong number does not need help.
- **No underlines**, including on links. Underlining is a web convention; on paper it is visual noise.
- **No decorative italics.** Italic is acceptable for a secondary hierarchy line (a job title) and
  nowhere else. Tech-stack lines are plain small text, not italic.
- Consistent dates, capitalization, and punctuation throughout. Pick one en-dash style and hold it.

---

## 4. Bullet construction

### 4.1 The formula

Three sources converge on the same shape, and it is the shape the master already writes in:

> **What you did** (action verb + the thing) · **how you did it** (mechanism, stack) · **what changed**
> (the outcome, quantified when the store can source it).

Laszlo Bock's Google formulation is the same thing ordered for skimming: *"Accomplished [X] as
measured by [Y] by doing [Z]."* Gayle Laakmann McDowell's is *"Accomplished X by implementing Y which
led to Z."* Use whichever ordering reads better for the specific bullet; lead with the strongest half.

### 4.2 Mechanics

- **Past tense throughout**, including the current role. The textbook rule says present tense for
  current work; near-nobody follows it, recruiters don't mind, and mixed tense on one page looks like
  an editing error.
- **Implied first person.** No `I`, `my`, `we`, `our`. Start with the verb.
- **No terminal period ambiguity** — pick one convention and hold it. This store uses a period.
- **One to two rendered lines.** Three is the ceiling and needs a reason. Measure *rendered* lines,
  not characters — the render is the authority.
- **No orphan words.** A bullet whose last line is one or two words wastes a full line. Cut two words
  from the middle and reclaim it.

### 4.3 Verb discipline

- **No verb opens more than two bullets on the page.** Repetition reads as a limited vocabulary to a
  human and can deduplicate keyword signal to a parser.
- **Never open with:** `Responsible for`, `Duties included`, `Helped`, `Assisted`, `Worked on`,
  `Utilized`, `Leveraged`. The first two are job descriptions, not accomplishments; the next three are
  passive; the last two are invisible from overuse.
- **Match the verb to the actual contribution.** `Architected` and `Spearheaded` are strong verbs and
  usually lies at early career. This is not a style preference here — it is **R7**: only `mine`
  bullets may open with a first-person accomplishment verb, and none may overstate the role.

**Verb bank, calibrated to what each one actually asserts:**

| Register | Verbs | Asserts |
|---|---|---|
| Creation | Built · Developed · Wrote · Implemented | You produced the thing |
| Design | Designed · Devised · Modeled · Structured | You made the architectural choices |
| Delivery | Shipped · Deployed · Released · Operated | It reached production |
| Change | Cut · Reduced · Raised · Migrated · Refactored · Optimized | Pair with a number or don't use |
| Investigation | Diagnosed · Characterized · Measured · Profiled · Falsified | You found something out |
| Integration | Integrated · Connected · Instrumented · Automated | You joined systems |
| Rigor | Chaos-tested · Verified · Gated · Benchmarked · Replayed | You proved it |

The last two rows are underused industry-wide and are this candidate's actual differentiator. Prefer
them where they are accurate.

### 4.4 Register — write like a person, not like a paper

**This is the rule that gets broken most, and it is the hardest one to catch yourself on.**

`MASTER-RESUME.md` is written in *lab-notebook register*: precise, technical, complete, optimized for
provenance. That is correct for the master — it is an evidence file. It is wrong for a resume.
Condensing a master bullet by deleting clauses preserves that register and produces sentences no
human would ever write:

> ~~Devised a multi-tenant eviction policy — GDSF cost-awareness plus an elastic max-min fairness
> discount — that Pareto-dominates static quotas: global hit rate 12.2% → 14.4%, worst-tenant
> 10.3% → 12.3%.~~

Nobody talks like that. **Condensing is not the same operation as rewriting.** A master bullet must
be *translated*, not merely trimmed.

**The test:** could you say this sentence out loud to an engineer at a whiteboard without wincing? If
not, it isn't finished.

**How to translate:**

| Symptom | Fix |
|---|---|
| **Stacked asides.** Two or more `—` / `:` / `()` clauses hung off one spine | One aside per bullet. Move the rest into the main clause or cut it |
| **Nominalizations.** "GDSF cost-awareness", "per-check fault isolation", "an elastic max-min fairness discount" | Turn the noun back into a verb or an adjective: "cost-aware", "isolated so one failing check can't sink the run" |
| **Term-of-art as the main verb.** "Pareto-dominates", "monotonically decreases" | Say what it *means*: "improved both at once — a trade-off fixed quotas can't avoid" |
| **Colon-dumped metrics.** "…quotas: 12.2% → 14.4%, 10.3% → 12.3%" | Put the numbers in the sentence: "lifted the overall hit rate from 12.2% to 14.4%" |
| **Acronym pileup.** Three or more unexplained initialisms | Keep the ones a hiring engineer knows cold (REST, gRPC, VAE, PPO). Cut or unpack the rest |
| **Notation.** "RF=2", "64×64×3", "p50/p95/p99" | Prose it: "2× replication", "each 64×64 frame". Notation belongs in the master |
| **Implementation trivia.** "decorator-based", "transposed-conv", "Flask Blueprint" | Cut unless the specific choice is the accomplishment |
| **Framework-count fluff.** "8 check modules across 4 Celery queues" | Name the job in English. Frameworks and queue counts belong on the stack line; if the scheduler matters, call it a job scheduler |
| **Product with no purpose.** A stranger cannot tell what was built | Lead with what it *does* ("scans online stores and scores whether AI agents can read the catalog"), then one credible detail. The reader has no background on the project |

**Keep the register technical enough to be credible.** This is not a push toward vagueness — "backend
infrastructure" is worse than "a distributed KV cache in Go".

### The target is a narrow band, and it is easy to overshoot

Added 2026-08-13 after the first attempt at this section overcorrected. There are **three** registers,
not two, and the failure modes sit on either side:

| | Register | Example | Verdict |
|---|---|---|---|
| **Too far left** | Lab notebook | "…that Pareto-dominates static quotas: global hit rate 12.2% → 14.4%, worst-tenant 10.3% → 12.3%" | Unreadable |
| ✅ | **Resume** | "Designed a cost-aware, multi-tenant cache eviction policy that improved overall hit rate from 12.2% to 14.4% while raising the worst-served tenant from 10.3% to 12.3%." | **Target** |
| **Too far right** | Project write-up | "…by injecting network latency, partitioning etcd, and killing a node outright, while a verifier checked every response: 0 correctness violations" | Sounds like a blog post |

Fixing the first failure by narrating harder produces the second. The corrective is **not** more
voice — it is a plain declarative sentence.

**Concretely, on the right-hand side, avoid:**

- **Em-dash asides used as default punctuation.** One per bullet at most; usually zero. A comma or a
  restructured clause is almost always better.
- **Narrative gerunds.** "by injecting network latency, partitioning etcd, and killing a node
  outright" → "under injected network latency, etcd partitions, and node termination". Prepositional
  phrases scan faster than a story.
- **Editorializing clauses.** "a trade-off fixed quotas cannot avoid", "which is why the boundary was
  drawn there". The reader draws the conclusion; the bullet supplies the fact.
- **Adverbs defending a design choice.** "deliberately just 5 tools" → "a 5-tool interface". Keep the
  constraint only if the constraint itself is the accomplishment.
- **Colloquialisms.** "can't sink the scan", "killed a node outright".
- **A colon delivering the punchline.** It reads as a reveal. Put the result in the sentence.

**The one-sentence rule.** A resume bullet is normally *one sentence*: what you built, the technical
detail that makes it credible, and the result. If it needs a second clause stack to hold together,
it is carrying two accomplishments and should be split or cut.

**Read it as a recruiter with 5–10 seconds.** If a sentence has to be re-read, simplify it. That test
catches both failure modes; nothing else does.

### 4.5 Wording

- **Concrete nouns over category nouns.** "a distributed KV cache in Go" beats "backend
  infrastructure." A parser scores demonstrated application above bare mention: `Python` in a skills
  list is worth less than `Built a data pipeline in Python`.
- **No buzzwords without substance.** `synergy`, `scalable solutions`, `cutting-edge`, `world-class`,
  `passionate`, `results-driven`, `team player`. If deleting the word changes nothing, delete it.
- **Cap jargon per bullet.** Three or four technical terms is plenty. A bullet that is nine
  proper nouns in a trench coat is unreadable to the recruiter who screens it first.
- **Numbers stay exact.** `1,777,411` not `~1.8M`, `10.9%` not `over 10%`. This is R4 and it also
  happens to be more persuasive — an exact figure reads as measured, a round one as estimated.
- **A number you cannot source is worse than no number.** See §8.
- **One entity, one noun.** Do not switch words for the same thing inside a bullet. "isolating
  failures per **user** so one failing **recipient** could not abort a batch" makes the reader stop
  and work out whether users and recipients are the same population. They were. Pick the noun the
  outcome needs and use it throughout.
- **Never state the outcome twice.** The clause after the comma must *add* something. If it
  restates the mechanism in different words, the reader feels the sentence promising information
  and not delivering it — which is what a bullet that "reads oddly" usually turns out to be. Test:
  delete the trailing clause. If the bullet still says the same thing, the clause was never doing
  work; if the bullet gets weaker, keep it.
- **Avoid explanatory contrasts.** Phrases such as `not X`, `rather than X`, `instead of X`, and
  `as opposed to X` often explain a design choice the positive statement already makes clear.
  *"Trained a PPO controller on 32-dimensional VAE latents"* does not need *"not raw pixels."*
  *"Per-recipient error handling"* does not need *"instead of failing the whole batch."* Keep a
  contrast only when the comparison itself is the measured result or the distinction would
  otherwise be ambiguous.
- **Prefer a concrete mechanism to both jargon and its explanation.** `fault isolation` is a useful
  engineering term, but a phrase such as *"per-recipient error handling"* is shorter and needs no
  follow-up clause to decode it.
- **Land the impact as a participle, not a `so that` clause.** `Implemented X, reducing Y` beats
  `Implemented X so that Y`. A purpose clause is a claim about intent; a participle is a claim
  about result, and the result is what was hired for. Hold this consistently down the page — one
  bullet in a different shape reads as the weak one even when its content is not.
- **Never let a negative hypothetical be the payoff.** *"so a single failing recipient **could not
  stop** an entire batch"* ends on something that never happened. Restate it as what the system
  does: *"isolating each failure to a single recipient."* Same fact, positive verb, and it stops
  sounding like a caveat. **If a bullet feels weak, check its last six words before you replace the
  bullet** — the content is usually fine and the landing is what failed.

---

## 5. Skills section

- **Group by category** (Languages / one or two domain groups / Infra & Tooling). Ungrouped keyword
  soup reads as padding.
- **Order by fluency within each line, strongest first**, and lead the whole section with the group
  the target role screens on.
- **List only what you can defend in an interview.** A long list of weak skills reads *less* senior,
  not more — it says you have no primary area.
- **Every entry needs an evidence pointer in §6 of the master.** No pointer, no line. A parser scores
  an unsupported claim below an absent one.
- **Mark honestly-thin entries** rather than dropping or inflating them — `Java, C++ (coursework)`.
  The parenthetical is what makes the basis visible; it is not a hedge to be deleted later.
- **Never list:** MS Office, soft skills, "Agile" as a skill, or a language you last touched in one
  homework.

---

## 6. Projects section

- Name the project so a stranger knows what it is. `Distributed KV Cache for LLM Inference` ✓,
  `CachePro` ✗.
- **Tech stack goes on its own unbulleted italic sub-line**, not in a bullet. A stack list rendered
  as a bullet wastes a bullet marker and pretends to be an accomplishment.
- Working link, visible as text. A dead or private link is worse than none — say
  `(course project · private repo)` instead.
- Same bullet rules as Experience. Projects are not a place to relax.

---

## 7. ATS and file mechanics

**First, decide the channel — it changes how much of this section applies.**

| Channel | Who reads first | What to optimize |
|---|---|---|
| **Cold apply** through a portal | A parser, then a recruiter | Keyword coverage matters. Mirror the posting's honest phrasing. Every rule below applies |
| **Referral**, or a resume sent to a named recruiter or hiring manager | A person, immediately | **Readability wins over keyword density.** §4.4 register matters more than anything here. Keep the structural rules (single column, one page, real text); relax keyword mirroring and trim the skills block to what's defensible rather than what's comprehensive |

A referral does not make the resume *easier* — it raises the bar. The parser was never going to
notice a clumsy sentence; the engineer your referrer forwards it to will.

The structural rules below hold either way, because a referred resume still gets uploaded into the
same system eventually.


- **Single column. No tables, no text boxes, no graphics, no icons, no photo, nothing in the page
  header/footer** — parsers drop headers and footers, so contact details go in the body.
- **Embedded, selectable text.** Verify by extracting text from the rendered PDF; if a bullet doesn't
  come back out, it doesn't exist to the parser.
- **Standard font at 10–12pt, margins ≥0.5in.**
- **Filename:** `Haochen_Tong_Resume.pdf` — not `resume_final_v3.pdf`.
- **Keywords from the posting, but only true ones.** Mirror the posting's phrasing where it's honest
  ("distributed and parallel systems"), never stuff.

---

## 8. Where mainstream advice conflicts with this store — and which wins

Recorded so these are decided once.

| Mainstream advice | Conflict | Resolution |
|---|---|---|
| "Quantify **every** bullet" | Master R1: a number needs a tier, a source, and a date | **Store wins.** An unsourced number is the exact failure this store was built to stop. Ship the metric-free bullet (`sn-autosave-nometric`) over the impressive unverifiable one |
| "Use power verbs: architected, spearheaded, pioneered" | R7 attribution | **Store wins.** The verb must match the real contribution. `team-context` bullets keep their scoping phrase |
| "Submit DOCX, ATS chokes on PDF" | The store renders PDF from `.tex`/HTML | **Advice loses, conditionally.** Google, and every major-tech portal, parse embedded-text PDF fine. This applies to small-shop resume-parser SaaS. Keep `.tex` so a DOCX is possible if a portal demands it |
| "Round numbers for readability" | R4: never round up | **Store wins**, and exactness is more persuasive anyway |
| "Always open with a summary / objective" | — | **Optional.** Two lines max, and only if it adds positioning the bullets can't |
| "Fill the page" | §3 whitespace | **Whitespace wins.** Better a clean 90% page than a cramped 100% one |
| "Drop the hedge, it sounds weak" | R10: removing a hedge counts as adding | **Store wins, absolutely.** `estimated` bullets keep `~` / `about` / `roughly` |
| "Mirror the JD's language" | R10: tailoring may condense, never add | **Both, carefully.** Mirror phrasing only where the claim is already true. Never let JD vocabulary import a claim |

---

## 9. Pre-send checklist

Mechanical. Run every item; none requires judgment.

**Truth (from master §1 — these come first)**
- [ ] Every bullet id exists in `MASTER-RESUME.md` and is `active`
- [ ] No `draft`, `retired`, or `disputed` bullet on the page
- [ ] Every condensed form is strictly shorter than the master's and introduces **no new figure**
- [ ] **Every attribution qualifier in the master survives the condensing** — `reproduction`,
      `course project`, `team of N`, `from the paper`, `fork of`. R10 forbids strengthening a claim,
      and *deleting a qualifier is the cheapest way to strengthen one*: it is shorter, it changes no
      digit, and it silently promotes reproducing someone's architecture into designing it. The
      qualifier may move to the entry heading, where it still governs every bullet under it. It may
      never simply go. This is the one R10 breach that a length-and-digits check cannot see
- [ ] Every `estimated` claim still hedges; every `team-context` claim keeps its scoping phrase
- [ ] Every skills entry resolves to a §6 pointer

**Register — do this one first; it is the one that fails most often**
- [ ] **Read each bullet as a recruiter with 5–10 seconds.** Anything you have to re-read gets
      simplified
- [ ] One sentence per bullet: what you built + the credible technical detail + the result
- [ ] **Too far left:** no term-of-art as the main verb (`Pareto-dominates`), no colon-dumped metric,
      no un-prosed notation (`RF=2`, `64×64×3`)
- [ ] **Too far right:** no em-dash aside used as default punctuation, no narrative gerunds, no
      editorializing clause, no adverb defending a design choice, no colloquialism
- [ ] No explanatory contrast (`not X`, `rather than X`, `instead of X`) when the positive statement
      already carries the same information
- [ ] Every bullet is still concrete — the fix for jargon is plainer words, never vaguer ones

**Formatting**
- [ ] Bold appears only on: name, section headings, schools, companies, projects, skills labels
- [ ] No bold or underline anywhere inside a bullet; no underlined links; no decorative italics

**Craft**
- [ ] No verb opens more than 2 bullets
- [ ] No banned opener (`Responsible for`, `Helped`, `Assisted`, `Worked on`, `Utilized`, `Leveraged`)
- [ ] Every bullet is past tense, implied first person, no pronouns
- [ ] No bullet exceeds 2 rendered lines without a reason
- [ ] No orphan line (a final line of 1–2 words)
- [ ] ≤3 bullets per entry
- [ ] Skills grouped, fluency-ordered, nothing undefendable

**Mechanics**
- [ ] **Compile every format you intend to send, and look at the rasterised page.** A `.tex` and a
      `.html` of "the same" resume are two independent renderers; verifying one says nothing about
      the other. Both of the bugs found on 2026-08-13 — a name that rendered as flat ALL CAPS, and
      a heading running 0.8in past the right margin — existed only in the format that was never
      compiled
- [ ] **Zero overfull boxes** in the LaTeX log. In the Jake template the entry headings are
      `tabular*` rows, and *a tabular row cannot wrap*: too much text runs silently off the page
      instead of breaking. A long repo URL in a heading is the usual cause
- [ ] Renders to exactly 1 page **with visible bottom slack** (~20pt). A page that fits with 8pt to
      spare will spill the moment a different engine breaks one line differently
- [ ] Nothing overlaps. Negative `\vspace` tuned against one set of list-spacing values silently
      stacks text on top of other text when those values change, and the log reports nothing
- [ ] Text extracts from the PDF — every bullet survives
- [ ] Contact details are in the body, not a page header
- [ ] All links resolve; private ones described in words instead
- [ ] Filename is `Haochen_Tong_Resume.pdf`
- [ ] Read once out loud. Typos survive silent reading

---

## Sources

Recruiter and industry guidance
- [An Ex-Meta Recruiter's Inside Guide to Creating a Stand Out SWE Resume — Formation](https://formation.dev/blog/software-engineer-resume-guide-examples) — 3-bullets-per-section cap; skills ordered by fluency; past-tense diversified verbs
- [Software Engineer Resume Tips: Real Advice from Tech Professionals — Blind](https://www.teamblind.com/blog/software-engineer-resume-tips-real-advice-from-tech-professionals-on-blind/) — what gets rejected; only list what you can discuss
- [How to Make Your Resume Bullets Jump — Gayle Laakmann McDowell](https://www.gayle.com/blog/2013/04/04/how-to-make-your-resume-bullets-jump) — accomplishment-oriented bullets; the 10–15 second glance
- [Great Resumes for Software Engineers — Gayle Laakmann McDowell](https://www.gayle.com/careercup-blog/2008/06/great-resumes-for-software-engineers)
- [My Personal Formula for a Winning Resume — Laszlo Bock](https://www.linkedin.com/pulse/20140929001534-24454816-my-personal-formula-for-a-better-resume) — the XYZ formula
- [Quantifying Impact: The Laszlo Bock Formula](https://www.recruiterinyourpocket.com/research/quantifying-impact)

University career services
- [Strong Bullets for Technical Resumes — UT Austin CNS](https://careerservices.cns.utexas.edu/resources/resumes/strong-bullets-technical-resumes) — what/why/how; the four quantification dimensions
- [Resumes with Impact: Creating Strong Bullet Points — Columbia](https://careereducation.columbia.edu/resources/resumes-impact-creating-strong-bullet-points)
- [Writing Great Resume Bullet Points — University of Michigan](https://online.umich.edu/collections/career-kickoff/short/writing-great-resume-bullet-points)
- [Resume Action Verbs — Johns Hopkins](https://studentaffairs.jhu.edu/wp-content/uploads/sites/58/2017/08/Resume_Action_Verbs.pdf)

Wording, verbs, and ATS mechanics
- [Software Engineering Action Verbs — Resume Worded](https://resumeworded.com/software-engineer-resume-action-verbs)
- [The Top 30 Weakest Action Verbs From 102,944 Resumes — Rezi](https://www.rezi.ai/posts/weak-action-verbs-resume)
- [Action verbs to avoid using on your resume, according to experts — CNBC](https://www.cnbc.com/2023/05/02/action-verbs-to-avoid-using-on-your-resume.html)
- [79 Resume Buzzwords You Should Avoid — Novoresume](https://novoresume.com/career-blog/resume-buzzwords-to-avoid)
- [When To Use Pronouns in Your Resume — Resume Worded](https://resumeworded.com/pronouns-on-resume-key-advice)
- [Resume Tense: Past or Present? We Checked 27,000 Bullet Points — Simplify](https://simplify.jobs/blog/resume-past-or-present-tense)
- [Anatomy of an ATS Friendly Resume Format — Jobscan](https://www.jobscan.co/blog/20-ats-friendly-resume-templates/)
- [ATS Resume Formatting Rules 2026 — ResumeAdapter](https://www.resumeadapter.com/blog/ats-resume-formatting-rules-2026)
- [Resume White Space and Margins](https://cv4me.pro/blog/resume-white-space-margins-guide)
- [Fixing the 'Orphan' Word — Askcruit](https://www.askcruit.com/resume/mistakes/fixing-orphan-words)
- [5 Rules for Writing a Software Engineer Resume — The Muse](https://www.themuse.com/advice/how-to-write-software-engineer-resume-example)
