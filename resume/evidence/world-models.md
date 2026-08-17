# Evidence ledger — World Models

`repo:` C:\Users\tongh\worldModels_CSCI_467
`portfolio:` src/content/projects/world-models.md

Append-only. Newest entries at the bottom. See §1.5 R4 and R6 of MASTER-RESUME.md.

---

## 2026-08-04 — VAE parameter count

**Claim under test:** "convolutional VAE (4.35M params)" — portfolio `world-models.md` frontmatter
`metrics[]` and body, live on the public site.

**Conflicting sources:**
| Source | Value | Precedence tier (R6) |
|---|---|---|
| `models/vae.py` (recomputed) | 1,777,411 | 1 — recomputation from source |
| repo `README.md:22` architecture diagram | 1.78M | 3 — README |
| portfolio `world-models.md` frontmatter | 4.35M | 4 — portfolio frontmatter |
| `haochent_resume_v1.tex:158` | 1.77M | 5 — old resume |

**Method:** summed weights + biases per layer from `models/vae.py`. `torch` is not installed in the
Anaconda base env on this machine, so the count was done by hand from the layer definitions rather
than by instantiating the module.

Encoder (`models/vae.py:30-38`):
```
conv1  Conv2d(3,32,k4)      32·3·4·4   = 1,536   + 32   =   1,568
conv2  Conv2d(32,64,k4)     64·32·4·4  = 32,768  + 64   =  32,832
conv3  Conv2d(64,128,k4)    128·64·4·4 = 131,072 + 128  = 131,200
conv4  Conv2d(128,256,k4)   256·128·16 = 524,288 + 256  = 524,544
fc_mu      Linear(4096,32)  131,072    + 32            = 131,104
fc_logvar  Linear(4096,32)  131,072    + 32            = 131,104
                                                 encoder = 952,352
```
Decoder (`models/vae.py:78-83`):
```
fc       Linear(32,4096)          131,072 + 4,096 = 135,168
deconv1  ConvTranspose2d(256,128) 524,288 + 128   = 524,416
deconv2  ConvTranspose2d(128,64)  131,072 + 64    = 131,136
deconv3  ConvTranspose2d(64,32)    32,768 + 32    =  32,800
deconv4  ConvTranspose2d(32,3)      1,536 + 3     =   1,539
                                            decoder = 825,059
```
**Total = 952,352 + 825,059 = 1,777,411**

**Result:** DISPUTED → RESOLVED. Canonical value **1.78M (1,777,411)**, tier `derived`.
- README 1.78M — correct, agrees with recomputation.
- Old resume 1.77M — truncation rather than rounding. Drop from circulation (R4: never round *up*,
  but 1,777,411 rounds to 1.78M, not 1.77M).
- Portfolio 4.35M — **unsourced and wrong.** No layer configuration in `models/vae.py` produces it.

**Downstream corrections applied this session (R6):**
- `haochentSC.github.io/src/content/projects/world-models.md` frontmatter `metrics[]`: 4.35M → 1.78M
- same file, body "What I built": "VAE (4.35M params)" → "VAE (1.78M params)"

**Still open:** the sibling metrics "MDN-RNN 422K params" and "PPO controller 867 params" have not
been recomputed. Verify them from `models/mdrnn.py` and `models/controller.py` during Phase 2 before
either is promoted out of `draft`. The old resume's additional claim of "0.005 reconstruction error
with stable latent variance" also needs an artifact or it becomes `self-attested`.

**Verifier:** Claude (recomputation) — pending Haochen's confirmation before the bullet leaves
`draft`.

---

## 2026-08-17 � Best-episode score 600 sourced; mean 285 artifact corrected

**Claim under test:** portfolio best episode **600** and mean **285 � 195** (frontmatter + body).
Google resume was leading with mean 285 only; Haochen asked to lead with the best-episode figure.

**Artifact:** `checkpoints/ppo_results.json`@`7a8bd85`

| Field | Value |
|---|---|
| `max(rewards)` | **599.7098�** ? reported **600** (nearest integer; not inflated from below .5) |
| `mean_reward` | **284.7075�** ? **285** |
| `std_reward` | **195.4408�** ? **�195** |
| `timesteps` | 500,000 |
| n episodes | 10 |

**Source correction:** `wm-ppo-latent-control` previously cited `docs/images/final_scores.png`.
The JSON is the authoritative measured source (same run that produced the mean-285 claim).
`docs/demo_results.json` remains a *second* independent 10-episode run (mean 207.6, best 398)
and continues to back `wm-eval-variance` � do not conflate the two runs' best episodes.

**Master update:** `wm-ppo-latent-control` now carries best 600 + mean 285; verification date
2026-08-17. Google application condensed form leads with best 600.

**Verifier:** direct read of committed JSON; Haochen confirmed use of the best-episode figure
("this one go").
