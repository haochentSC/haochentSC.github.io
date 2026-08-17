# Evidence ledger — Stringer News (SWE Intern, Aug–Dec 2025)

`repo:` `C:\Users\tongh\stringer` at `5b8b129465782f43f3034e224690b78f236e0520`
`sources:` recovered repo · `Email Notification System Documentation.docx` (local, credential-bearing,
untracked) · `C:\Users\tongh\Downloads\haochent_resume_v1.tex` · portfolio
`src/components/ExperienceItem.astro`

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

---

## 2026-08-13 — Portfolio re-checked against the master; R8 violation found

**Situation.** Haochen resurfaced the four live portfolio bullets during the Google application and
asked whether the store needed updating. It does not: `src/components/ExperienceItem.astro` was
re-read today and its four bullets are **byte-for-byte what was mined on 2026-08-04**. Nothing new
has appeared, and all four already have ids.

| Portfolio bullet | Master id | On the Google resume? |
|---|---|---|
| Flask Blueprint / SendGrid / JSONB / Redis | `sn-email-digest-api` | yes |
| Recommendation enrichment, 100-user batches | `sn-batch-enrichment` | no |
| Auto-save — 90%, <0.5%, ~200 ms | *no single id* — see below | as `sn-autosave-nometric` |
| Docker, <15 min onboarding | `sn-docker-onboarding` | no |

**The portfolio is not independent verification.** The lineage is
`haochent_resume_v1.tex` → portfolio → master. All three are the same author asserting the same
thing, so seeing the numbers rendered on a live site moves nothing from `self-attested` toward
`measured`. The verification pass opened on 2026-08-04 is still open.

**R8 violation, and R8 fixes its own direction.** The portfolio's third bullet stacks all three
editor metrics in one sentence — 90% draft-loss, <0.5% save-failure, ~200 ms perceived latency.
That is the un-split `haochent_resume_v1.tex:122` sentence the 2026-08-04 intake deliberately broke
into `sn-autosave-draftloss` / `sn-autosave-reliability` / `sn-autosave-nometric`. Two problems:

1. **R1** caps a `self-attested` bullet at one number. The portfolio bullet carries three.
2. **The ~200 ms figure is carried by no bullet at all**, on purpose (see the 2026-08-04 entry:
   "perceived" latency is the hardest of the three to defend under a follow-up). R8 says the
   portfolio "may never carry *different numbers*" than the master — and a number the master
   refuses to carry is the strongest form of different.

R8's direction is **master → portfolio, always**, so the correction would belong in
`ExperienceItem.astro`, not here.

**Decision (2026-08-13, Haochen): leave the portfolio as it stands.** Presented with three options
— trim the portfolio to match, run the verification pass and promote the numbers upward, or accept
the asymmetry — he chose to accept it. `ExperienceItem.astro` therefore keeps all three editor
metrics in one sentence, including the ~200 ms figure that no master bullet carries.

**This is a knowing, standing exception to R8 and R1, not an oversight. Do not re-raise it.** What
it does *not* change: the master still refuses to carry ~200 ms, `sn-autosave-*` stays split three
ways, and every Stringer number stays `self-attested`. Applications continue to select from the
master only, so the exception is confined to the website.

**Also noted, lower stakes.** `sn-batch-enrichment`'s "100 users per request" is closer to an
infrastructure fact than an outcome, which R1 discourages for a `self-attested` bullet. The
2026-08-04 entry already judged it "likely defensible from the design itself"; recording the
tension rather than reopening it.

**Consequence now live.** The Google resume ships `sn-autosave-nometric` (no figures) while its
header links `haochentsc.github.io`, which carries three. A recruiter who clicks through sees
stronger claims on the site than on the resume. Not dishonest, but it is backwards.

**Verifier:** none — this entry re-checks provenance only and promotes nothing.

---

## 2026-08-14 — Source repository recovered; claims re-verified at `5b8b129`

**Situation.** Haochen recovered a local checkout at `C:\Users\tongh\stringer`. The GitHub remote is
no longer accessible to him, but the checkout contains full history through
`5b8b129465782f43f3034e224690b78f236e0520` (2025-12-04). The working tree is dirty, so all
verification below uses committed `HEAD` unless explicitly stated otherwise. This repository now
outranks the old resume and portfolio under R6.

The accompanying `Email Notification System Documentation.docx` was also reviewed. Its SHA-256 is
`0D50F4B1EC4B9C433DAFC808F9DF396330DF50CFC8F03527A39429ADD5054247`. It accurately summarizes much
of the committed email code, but it contains plaintext credential values and must remain untracked.
No credential value is reproduced here. Both the SendGrid key and internal email API key should be
treated as exposed and rotated.

### Claim-by-claim result

| Bullet | Verdict | Source-backed correction |
|---|---|---|
| `sn-email-digest-api` | **Verified after correction** | Single-user and batch Flask routes, PostgreSQL-backed recommendation enrichment, and SendGrid dynamic templates are implemented. Remove Redis idempotency: `server/utils/idempotency.py` exists, but no route or service imports or calls it. |
| `sn-batch-enrichment` | **Verified; promote the 100-user default** | `dispatch_simple()` defaults `limit` to 100 and passes it into `fetch_opted_in_users`; `_fetch_recommendations()` joins cached JSONB recommendations to event rows through one `ANY(uuid[])` query. The number is an architectural default, not a measured throughput result. |
| `sn-api-auth-isolation` | **Verified** | Both routes use `require_email_api_key`; the batch loop catches send errors per recipient, records the error, and continues. |
| `sn-autosave-draftloss` | **Mechanism verified; 90% remains self-attested** | Haochen authored the 3-second debounce, persistent draft-ID reuse, edit tracking, and programmatic-load guard. No benchmark, log query, or before/after artifact supports 90%. |
| `sn-autosave-reliability` | **Mechanism verified; <0.5% remains self-attested** | The UI exposes saving/saved/error state, but no telemetry or save-failure calculation exists. |
| `sn-autosave-nometric` | **Verified after correction** | Replace “optimistic UI and sync conflict resolution”; neither exists in the recovered code. The defensible claim is 3-second debouncing, draft-ID reuse, and edit-only triggering. |
| `sn-docker-onboarding` | **Contradicted; retire** | Dockerfiles and the root Compose setup predate the internship, and `git blame` / `git log --author=haochentSC` show no Haochen-authored Docker changes. No artifact supports the <15-minute onboarding result. |
| `sn-ops-scripts` | **Verified after correction** | Haochen authored scripts for the single-user and batch endpoints. The committed scripts do not implement dry-run mode. The route reads and echoes `dry_run` but sends email regardless, so the old “dry-run and live modes” wording was false. |

### Exact code sources

- Email orchestration and per-recipient continuation:
  `server/routes/notifications.py`:14-108@`5b8b129`
- PostgreSQL opt-in, cached JSONB, and array-query helpers:
  `server/utils/db_simple.py`:13-64@`5b8b129`
- SendGrid dynamic-template sending:
  `server/utils/email_service.py`:10-64@`5b8b129`
- API-key decorator:
  `server/utils/auth.py`:9-17@`5b8b129`
- Unused Redis helper:
  `server/utils/idempotency.py`:1-25@`5b8b129`
- Autosave implementation and authorship:
  `client/src/pages/posts/create.js`:708-802@`5b8b129`, primarily commits `35cdc440` and
  `7b9967d1`
- Operations scripts:
  `server/utils/batch_digest_send.ps1`:1-37@`5b8b129` and
  `server/utils/single_digest_send.ps1`:1-36@`5b8b129`

### Security and working-tree notes

The recovered checkout has uncommitted edits that hardcode `EMAIL_API_KEY` in both PowerShell
scripts. Those edits are not evidence and are not cited. They should be reverted or redacted locally
after the credential is rotated. The `.docx` also embeds a SendGrid key and the same internal API
key. Neither artifact should be committed in its current form.

**Verifier:** direct source inspection and `git blame` / `git log` at committed
`5b8b129465782f43f3034e224690b78f236e0520`.
