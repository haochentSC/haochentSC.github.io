# Evidence ledger — Deepsick Marketplace

`repo:` C:\Users\tongh\sp26-cs411-team038-Deepsick
`upstream:` https://github.com/cs411-alawini/sp26-cs411-team038-Deepsick (course org)
`HEAD at mining:` a6a97fa (2026-04-28)
`team:` 4 — Runying Chen (captain), Yutong Liu, Haochen Tong, JiaXin Wu

Append-only. Newest entries at the bottom.

---

## 2026-08-06 — Attribution baseline

56 commits, single `main` branch, **zero merge commits, zero `Co-authored-by` trailers** — so
authorship is resolvable per line rather than squashed.

```
git shortlog -sne --all
    20  LYT-Mariana (Yutong Liu)      20  runying (Runying Chen)
    12  jessiaW (JiaXin Wu)            3  haochentSC     1  Haochen Tong
```

Commit count badly understates Haochen's share — his 4 commits are large (2,701 / 1,595 / 377
insertions) while many teammate commits are single-file doc or image uploads through the GitHub web
UI. Line-level blame across all application code (4,851 lines, lockfile excluded):

```
3,063 haochentSC (63.1%)   975 runying (20.1%)   813 jessiaW (16.8%)   0 LYT-Mariana
```

**Verified `mine`:** authentication (100% of `main.py`:131-373), messaging backend, the stored
procedure and trigger (147/147 lines of `setup_advanced_programs.py`), the SERIALIZABLE wrapper, and
the Windows/Cloud SQL connectivity path.

**Note on `advanced_programs.sql`:** blamed 95/95 to JiaXin Wu, but it is a byte-for-byte
transcription of Haochen's `setup_advanced_programs.py` from the day before — identical SIGNAL
strings, identical 100-thread cap, identical logic order. She packaged his programs; she did not
author them. Bullets cite the Python file, which predates it.

---

## 2026-08-06 — Metric change: Mercari listings, ~1.4M → 19,695

**Claim under test:** "seeded from ~1.4M Mercari listings" — portfolio frontmatter `metrics[]` and
body, live on the public site.

| Source | Value | Precedence tier (R6) |
|---|---|---|
| `doc/Database Design.md`:139-141 + `doc/images/products.png` (`count(*)` screenshot) | **19,695** | 2 — committed artifact |
| `doc/project_report.md`:137 | "over 1.4 million rows **in a TSV file**" | 3 — prose |
| portfolio frontmatter | ~1.4M | 4 |

**Result:** DISPUTED → RESOLVED. Canonical **19,695 product rows** (plus 1,971 users, 1,973
transactions, 99 returns), tier `measured`.

The 1.4M is the row count of the **source Kaggle TSV**, not of the Cloud SQL `products` table. The
project report says so explicitly; the portfolio silently converted "1.4M rows in a TSV" into
"seeded from ~1.4M listings." No import script was ever committed
(`git log --all --diff-filter=A` shows no ETL file in history), so nothing supports the larger
number ever reaching the database. **This was a 71× overstatement on a public page.**

Consequence worth noting: `doc/project_report.md`:163 also claims the peer-stats CTE ran "on our
dataset of ~1.4M listings," which is wrong for the same reason — that query ran over 19,695 rows.
The associated "several seconds → under 100ms" figure has no benchmark artifact and is credited to a
teammate; it must never appear on Haochen's resume.

**Downstream corrections applied this session (R6):**
- `src/content/projects/deepsick-marketplace.md` frontmatter: "~1.4M Mercari listings" → "19,695"
- same file, body: rewritten to "computed over 19,695 product rows loaded from a Mercari Kaggle export"

---

## 2026-08-06 — Retracted claim: database connection pooling

**Claim under test:** portfolio "My role" — *"I owned the authentication system, the messaging
backend, all three advanced database programs, **and the database connection pooling**."* Repeated in
`doc/project_report.md`:187.

**Method:** `git blame -L 40,52 app/backend/database.py` → **13/13 lines author `runying`**, commit
`660dbdd`, 2026-04-12 — ten days before Haochen's first code commit. The `MySQLConnectionPool`
construction, the double-checked lock, `_pool`, `_pool_lock`, `_db_config`, `get_pool`,
`get_connection`, and `fetch_all` are all hers.

Haochen's actual contribution to that file is 37 of 106 lines: `execute_write`,
`get_transaction_connection` (the SERIALIZABLE wrapper), and the `use_pure` / `auth_plugin` config
keys that fixed the Windows connector failure.

**Result:** the pooling claim is **not supportable as `mine`** and no pooling bullet exists. Removed
from the portfolio's "My role" paragraph this session; replaced with the Windows/Cloud SQL
connectivity work, which blame does support.

---

## 2026-08-06 — Corrected claim: read tracking and thread archiving

Portfolio said *"thread + message CRUD with per-message read tracking and thread archiving."* The
shipped `main.py` exposes 19 endpoints and **none marks a message read or archives a thread**.
`is_read` and `is_archived` are schema columns, always inserted `FALSE` and read back in SELECTs; the
only thing that ever writes either is Haochen's trigger, which clears `is_archived`. No mark-read or
archive endpoint exists in any commit in history. Portfolio line rewritten to describe the messaging
API that does exist.

---

## 2026-08-06 — OPEN: four contradictions between the report and git blame

`doc/project_report.md`:187-190 carries a division-of-labor table that disagrees with blame in four
places. Haochen authored 178 of that file's 192 lines, so he wrote the table himself.

| Report credits | Blame says |
|---|---|
| Haochen — "connection pooling" | **runying** (resolved above; retracted) |
| Yutong Liu — products CRUD, My Listings | **haochentSC** (`main.py`:375-536); Liu has 0 code lines repo-wide |
| Runying Chen — marketplace browse endpoint | **haochentSC** (`main.py`:633-703) |
| JiaXin Wu — fair-price analytics, listing detail | **haochentSC** wrote `/api/listing-detail` incl. the `peer_stats` CTE (`main.py`:706-782) |

Three of the four run *against* Haochen — the report gives teammates credit for code blame assigns to
him. Two readings fit equally: the team split nominal ownership by feature area for the report while
Haochen integrated and pushed most of the backend, or teammates wrote code he committed without
co-author trailers. Note both Liu and Wu pushed their own commits for docs and tests, so they had
working git access.

**RESOLVED 2026-08-06 — Haochen confirms he wrote all three.** The report split nominal ownership by
feature area for the course deliverable while he was the integrator who actually wrote the backend.
This is consistent with the evidence: he holds 63.1% of all blamed application lines, his three code
commits are 2,701 / 1,595 / 377 insertions against teammate commits that are largely single-file doc
and image uploads through the web UI, and Yutong Liu — credited in the report with products CRUD —
has **zero** blamed lines anywhere in the repo.

Three bullets promoted to `attribution: mine` and added to §5:
- `ds-fair-price-cte` — the two-stage peer-stats CTE (`main.py`:706-782). Null-safe `<=>` matching on
  category/brand/condition, a ±20% fairness band, and an `insufficient_peers` verdict when fewer than
  two comparables exist. This is the product's differentiator and the strongest SQL in the project.
- `ds-marketplace-browse` — parameterized query builder with search, four filters, three sorts and
  bounded pagination (`main.py`:633-703).
- `ds-products-crud` — seller listing lifecycle with ownership checks on every mutating path
  (`main.py`:375-536).

The pooling claim stays retracted — that one ran the *other* way and blame is unambiguous.

---

## 2026-08-06 — Unverifiable / not claimed

- **Legacy MD5 migration.** The verifier's MD5 branch exists and is unit-tested, but no MD5 hash
  exists anywhere in the repo — committed `seed_data.sql` stores plaintext. The bullet claims the
  verifier, not a migration that happened. *Question for Haochen: did real MD5 rows ever exist?*
- **SERIALIZABLE preventing a real race.** The isolation level is set and a test asserts the string
  is passed, but that is a mock assertion — no two-client concurrency test was ever run. Hence
  `code-verified` with no metric.
- **"Backend hosted on GCP."** Evidenced only as documented connection targets in the runbook. There
  is no deploy config, Dockerfile, or CI; both tiers start from local scripts. The bullet claims only
  that the **database** ran on Cloud SQL, which is what the evidence supports.

**Verifier:** Claude (blame + artifact inspection). All bullets `draft` pending Haochen's
confirmation.
