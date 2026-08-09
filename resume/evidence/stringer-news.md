# Evidence ledger — Stringer News (SWE Intern, Aug–Dec 2025)

`repo:` **none on this machine**
`sources:` `C:\Users\tongh\Downloads\haochent_resume_v1.tex` · portfolio `src/components/ExperienceItem.astro`

Append-only. Newest entries at the bottom.

---

## 2026-08-04 — Initial intake, no code available

**Situation.** An exhaustive scan of `C:\` for git repositories found no Stringer News clone. The
work is real but the artifact is unreachable from here, so every bullet in §4 is `self-attested`
per §1.3 of MASTER-RESUME.md.

**Action taken.** Carried the five bullets from `haochent_resume_v1.tex` forward, professionally
tightened per Haochen's instruction, and split them so that no `self-attested` bullet carries more
than one number (R1). The original `haochent_resume_v1.tex:122` bullet stacked three figures — 90%
draft-loss, <0.5% save-failure, ~200 ms perceived latency — in a single sentence; that is now three
separate bullets, one of which carries no number at all.

**Numbers in circulation, none with an artifact behind them:**

| Number | Bullet | Status |
|---|---|---|
| 100-user batch sends per request | `sn-batch-enrichment` | Architectural; likely defensible from the design itself |
| 90% reduction in draft loss | `sn-autosave-draftloss` | **Measurement method unknown** |
| <0.5% save-failure rate | `sn-autosave-reliability` | **Measurement method unknown** |
| <15 min new-developer setup | `sn-docker-onboarding` | Plausible, low stakes, low value |
| ~200 ms perceived latency | *not carried as a bullet* | Held here pending verification |

The ~200 ms figure was deliberately **not** promoted to a bullet. It is the weakest of the three
editor metrics — "perceived" latency is the hardest to defend under a follow-up question — and R1
caps a self-attested bullet at one number, so it lost the slot to the 90% draft-loss figure.

**`sn-autosave-nometric` exists on purpose.** It states the same engineering work — debounced
auto-save, optimistic UI, conflict resolution — with no figures at all. It is the version to select
when Haochen would rather not defend a number he can't reconstruct. Every ATS keyword survives the
drop; only the digits go.

**Open — for Haochen's verification pass.** For each number above: how was it measured? A dashboard,
a log query, a before/after comparison, or an estimate? Anything that turns out to be an estimate
should either gain a hedge and move to `estimated`, or lose its number and fall back to
`sn-autosave-nometric`. See `resume-master/references/repoless-interview.md` for the full question
set.

**Verifier:** none yet — bullets are carried at `self-attested` and have not been promoted past it.
