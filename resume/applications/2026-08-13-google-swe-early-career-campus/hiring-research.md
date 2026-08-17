# Google hiring research — early-career SWE

`researched:` 2026-08-13 · sources listed at the bottom · **all of this is external commentary, not
resume-store fact.** Nothing here is a claim about Haochen and nothing here may become a bullet.

---

## 1. The pipeline

```
application (resume; cover letter optional and largely ignored)
   → recruiter / ATS screen        ← the only stage this resume has to survive
   → optional online assessment
   → technical phone screen(s)
   → onsite loop (coding × 2–3, system design, behavioral)
   → hiring committee              ← senior Googlers, never met you, read a written packet
   → team match
   → executive review / offer
```

Two facts about this shape that change how the resume is written:

- **Google does not weight cover letters.** Their own guidance is that one "may or may not be
  considered." The resume carries the entire pre-screen signal, so nothing important can be deferred
  to a letter.
- **Team match happens *after* the committee.** He is not being screened for one team's stack; he is
  being screened for "would any Google team want this person." That is a direct argument for breadth
  over a single narrow story — and the opposite of how the Snowflake referral resume was built.

## 2. The four scored signals

Google scores every candidate on four axes. An offer generally needs at least *Hire* overall with no
*Strong No-Hire* on any single axis.

| Signal | What it is | What the resume can do about it |
|---|---|---|
| **GCA** (General Cognitive Ability) | Decomposing ambiguous problems, reasoning through trade-offs | Bullets that name a trade-off rather than a feature — `kv-eviction-pareto` (efficiency vs. fairness), `kv-crossover-envelope` (where the cache stops paying) |
| **RRK** (Role-Related Knowledge) | DSA, systems design, the actual craft | The `kv-*` block, end to end |
| **Leadership** | Influence without authority; driving decisions | **Nothing in the store speaks to this.** Interview-stage problem, but a real hole (see `jd.md` weak spot 5) |
| **Googleyness** | Intellectual humility, comfort with ambiguity, low ego | Unusually well served by this store: `kv-a100-no-crossover` and `wm-eval-variance` publish results that *undercut* the project. Held back from the page, but they are the best behavioral-round material he has |

## 3. Resume screen mechanics

- **6–15 seconds.** Consistently reported across sources. The top third of page one decides it.
- **One page.** Standard for <10 years' experience; not negotiable at early career.
- **Reverse-chronological, single column, plain text.** No tables, no columns, no graphics, no
  headshot, no icons — these break ATS parsing. The existing Jake-template LaTeX/HTML render is
  already compliant; keep it.
- **Keywords lifted from the posting**, but no stuffing. An unsupported keyword parses *worse* than
  an omitted one (see `resume-tailor/references/ats.md` — same conclusion, independently).
- **GitHub / personal site near the top.** Already in the header block.
- **New grads: projects and coursework count as experience.** Google says this explicitly. A
  three-project section is not padding here, it is the expected shape.

## 4. The XYZ formula (Laszlo Bock, ex-SVP People Ops)

> **"Accomplished [X] as measured by [Y] by doing [Z]."**

Result → number → method, readable in one glance. This is the single most-cited piece of Google
resume advice and it is *already* how the master's bullets are constructed — which is why tailoring
for Google is mostly selection, not rewriting.

Checked against the selected set:

| Bullet | X (result) | Y (measure) | Z (method) |
|---|---|---|---|
| `kv-ttft-crossover` | cut time-to-first-token | 10.9% on 4k-token prefixes, cross-AZ | consistent-hash sharding, RF=2 replication, etcd failover |
| `kv-eviction-pareto` | Pareto-dominated static quotas | 12.2→14.4% global, 10.3→12.3% worst-tenant | GDSF + elastic max-min fairness |
| `kv-chaos-aws` | no correctness violations under fault | 0 across 27,365 requests | injected latency, etcd partition, real node kill |
| `wm-ppo-latent-control` | drove on latents, not pixels | mean 285 over 10 episodes, 500k steps | PPO over 32-dim VAE latents |
| `av-scan-pipeline` | shipped an async scan pipeline | 4 queues, 8 modules, ≤10 pages | FastAPI + Celery under per-check fault isolation |

Five of eleven bullets carry a hard outcome number, and every one of those five is `measured` or
`derived`. That ratio is the point of the whole store.

## 5. What is new in the 2026 reqs

The **"AI productivity tools"** minimum qualification is genuinely new to Google's early-career
postings this cycle. Read it as Google treating AI-assisted development as baseline literacy, the way
version control became baseline a decade ago — not as a request for AI *research* experience. See
`jd.md` for how this application covers it and where the honest gap is.

---

## Sources

- [Google Careers — Software Engineer, Early Career, Campus](https://www.google.com/about/careers/applications/jobs/results/78703249065943750-software-engineer-early-career-campus)
- [How to Get a Job at Google in 2026: Hiring Committees, the Four Signals & The Technical Bar Decoded](https://blog.fastapply.co/how-to-get-a-job-at-google-in-2026)
- [How Fresh Graduates Can Land an Entry-Level Job at Google (2026 Guide)](https://www.lockedinai.com/blog/get-hired-google-2026)
- [Quantifying Impact: The Laszlo Bock Formula](https://www.recruiterinyourpocket.com/research/quantifying-impact)
- [My Personal Formula for a Winning Resume — Laszlo Bock](https://www.linkedin.com/pulse/20140929001534-24454816-my-personal-formula-for-a-better-resume)
- [Google Software Engineer Resume Examples and Templates for 2026 — ResumeBuilder](https://www.resumebuilder.com/resume-examples/google-software-engineering/)
- [6 Google resume examples (+ tips on optimizing for Google) — IGotAnOffer](https://igotanoffer.com/blogs/tech/google-resume-examples-tips)
- [Google Interview Process 2026: Loop & Committee — ResumeAdapter](https://www.resumeadapter.com/companies/google/interview-process)
- [AI in software engineering at Google: Progress and the path ahead — Google Research](https://research.google/blog/ai-in-software-engineering-at-google-progress-and-the-path-ahead/)
