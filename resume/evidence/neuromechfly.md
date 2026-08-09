# Evidence ledger — NeuroMechFly Vision Sandbox

`canonical local path:` C:\Users\tongh\NeuroMechFly-MinecraftVisionMapper
`canonical remote:` git@github.com:haochentSC/NeuroMechFly-MinecraftVisionMapper.git
`portfolio:` src/content/projects/neuromechfly.md
`verification commit:` 7999462 (2026-02-26) · 27 commits · solo

**Do not verify against `C:\Users\tongh\flygym-sandbox`** — see the duplicate-clone entry below.

Append-only. Newest entries at the bottom.

---

## 2026-08-04 — Duplicate-clone resolution

Two local clones exist with identical history:

| | `NeuroMechFly-MinecraftVisionMapper` | `flygym-sandbox` |
|---|---|---|
| HEAD | `7999462…` | `7999462…` (same) |
| HEAD tree | `6f66272…` | `6f66272…` (same) |
| commits | 27 | 27 |
| `origin` | current name | **pre-rename URL** |
| working tree | **clean** | **dirty** — ` M outputs/gym_basics/fly_simulation.mp4` |

The GitHub repo was renamed `flygym-sandbox` → `NeuroMechFly-MinecraftVisionMapper`; the old clone's
remote still carries the pre-rename URL (GitHub redirects, so both still fetch).

**Committed content is byte-identical — the working trees are not.** The `flygym-sandbox` clone has
an uncommitted modification to a committed MP4, so any filesystem or `git status` comparison against
it reports a spurious change.

**Ruling: `NeuroMechFly-MinecraftVisionMapper` is canonical** (clean tree, correct remote). Recommend
deleting `flygym-sandbox` or renaming it `flygym-sandbox.STALE` so a future verification pass cannot
diff the wrong tree.

---

## 2026-08-04 — This project has no metrics, by fact rather than by omission

Grepped for benchmark artifacts: **no `docs/`, no ADRs, no `evals/`, no results JSON, no CI, no
tests.** Three scripts print a wall-clock `time_usage` to stdout but nothing is persisted.

**There is no `measured` number available for this project and none should be manufactured.** Every
bullet is `code-verified` or `derived` from a scope count. Scope substitutes for a metric here (see
the mining playbook's second bullet formula) — ommatidia per eye, actuated DOFs, geom counts, and
timestep counts are all real, checkable, and honest.

Scale for the record: **1,063 LOC across 15 `.py` files**, 27 commits, 31 tracked files.

---

## 2026-08-04 — Numbers verified

All recomputed at tier 1 — the FlyGym library was introspected in the `flygym` conda env, and the
geom count was taken from the committed MJCF artifact rather than from the generator's source.

| Claim | Value | Method |
|---|---|---|
| Box geoms in generated arena | 256 (+1 floor plane) | `grep -c 'type="box"' MC2SandboxMapping/out_mjcf/mca_arena.xml`; matches 16×16 from the nested loops in `mca_to_mjcf_arena.py`:27-28 |
| Voxel chunk footprint | 16×16 columns, Y scanned 255→0 | literals in `mca_to_mjcf_arena.py`:27-33, `mca_surface_extraction.py`:19-25 |
| Ommatidia per eye | 721 | `len(np.unique(Retina().ommatidia_id_map)) - 1` |
| Retina raw sampling grid | 512 rows × 450 cols | `Retina().nrows` / `.ncols`; consumed as the resize target at `fly_vision_JPG_Movement_Quick.py`:55 |
| Actuated leg DOFs | 42 (6 legs × 7) | `len(flygym.preprogrammed.all_leg_dofs)`; passed as `actuated_joints` in `fly_sandbox_env.py`:21 |
| Kinematic resample | 2 kHz → 10 kHz (5×) | `timestep=1e-4` (`fly_sandbox_env.py`:16); source 2000 Hz per `self.data["meta"]["timestep"]`; `np.interp` at :39 |
| Gait controller steps | 10,000 | `run_time=1.0 / timestep=1e-4` (`vision_ruleBased_controller.py`:54-55, 90) |
| Committed media | 3 MP4, 6 PNG | `git ls-files '*.mp4' '*.png'` |

The committed region file `r.0.0.mca` (2.3 MB) is a **real Minecraft world save**, not a synthetic
fixture: block ids in the generated MJCF are `grass_block` (199), `grass` (47), `stone` (5),
`cave_air` (2), `tall_grass` (2), `granite` (1) — whereas `anvil_parser.py` would emit a uniform
stone/dirt cube.

---

## 2026-08-04 — Corrected claim: the vision pipeline and the gait controller are not connected

**Claim under test:** portfolio lines 41-42 — *"a rule-based controller mapping retinal observations
to discrete locomotion primitives."*

`vision_ruleBased_controller.py` **uses no vision at all** — no `Retina`, no `enable_vision`, no
`obs["vision"]`. Its rules graph is an *inter-leg coordination* graph (which leg swings next), driven
entirely by `PreprogrammedSteps`. The filename is misleading. The retinal→steering mapping is real
but lives in the four standalone `fly_vision_*` scripts and is never wired to the controller or to
the Env; the steering vector is printed and never consumed.

**Result:** two disconnected subsystems, not one integrated pipeline. Bullets split accordingly —
`nmf-binocular-retina` for the vision→steering mapping, `nmf-rule-based-gait` for leg coordination.
Portfolio body rewritten to say so, and to name closing the loop as the obvious next step.

---

## 2026-08-04 — Corrected claim: the Gymnasium Env is a replay env

`FlySandboxEnv.step()` accepts an `action` argument and then **discards it**, substituting
`self.data_block[:, self.current_step]` (`fly_sandbox_env.py`:62-64). The interface is
Gymnasium-shaped and would accept a policy, but as committed **no policy can influence the
simulation**. "For downstream RL policies" overstated it; `nmf-gym-env` says "exposing" and names the
kinematic replay explicitly. Portfolio updated to "a replay environment with an RL-shaped interface,
not yet a policy-driven one."

---

## 2026-08-04 — README is wrong in two places (repo hygiene, not resume-relevant)

- `README.md`:126-131 documents a class `FlyVisionEnv(gym.Env)` in `fly_vision_env.py`. **That file
  is a 35-line top-level script with no class and no gymnasium import.** The only `gym.Env` subclass
  is `FlySandboxEnv`. Under R6, source beats README — bullets cite `fly_sandbox_env.py`.
- `README.md`:46-58 and 72-89 document CLI flags (`--input`, `--output`, `--duration`, `--env`,
  `--policy`). `grep -rn "argparse\|sys.argv"` returns **nothing** — every script hardcodes its paths.
  No bullet claims a CLI.
- `README.md`:17-18 and :251 still point at the pre-rename `flygym-sandbox` clone URL.
- `MC2SandboxMapping/__pycache__/SingleBlockArena.cpython-312.pyc` is committed (added in `b3adf21`);
  there is no `.gitignore` in the repo at all. Noted so a later pass doesn't mistake it for source.

---

## 2026-08-04 — Observation found during verification, deliberately NOT a bullet

The surface scan filters on `block.id != "air"`. Minecraft's `cave_air` is a **distinct block id**,
so 2 of the 256 columns in the committed MJCF are named `cave_air_*` — two "surface" blocks that are
actually air.

This is a genuine off-by-semantics bug, but **it was found during this verification pass, not by
Haochen during the build.** Writing it as a "silent bug I diagnosed" bullet would be false
attribution of the discovery. If Haochen confirms he knew about it at the time, it can be revisited.

---

## 2026-08-04 — Unverifiable

| Claim | Why it can't be sourced | What would fix it |
|---|---|---|
| Any speedup from the OpenCV CUDA path | Three scripts print `time_usage` to stdout; nothing persisted. No CPU-vs-GPU comparison exists. | Run both paths on one image, commit both timings plus the OpenCV build string |
| That the CUDA path ever executed on GPU | `USE_CUDA = has_cuda()`; stock `pip install opencv-python` ships **no** `cv2.cuda`, so the fallback is the likely path on a default install. The code is correct either way — which is exactly what `nmf-cuda-fallback` claims. | `cv2.getBuildInformation()` output, or a run log showing CUDA available |
| Any accuracy or behavioral result of the vision→steering mapping | No task, no success criterion, no closed loop | Close the loop and define a task — a real scope gap, not a documentation gap |
| "Jan 2025" project start | First commit is 2025-02-09 | Haochen's recollection; stays `self-attested` in the header, never in a bullet |

**Explicitly not claimed anywhere:** any latency, throughput, FPS, speedup, accuracy, or success
rate. This project has none.

Period note: the portfolio says Jan–May 2025 and the last *code* commit is 2025-05-04, so the May end
is right. The 13 later commits (through 2026-02) are README and banner edits only.

---

## 2026-08-04 — Attribution: solo, confirmed

```
git shortlog -sn --all
    14  Haochen Tong
    13  haochentSC
git log --format='%an <%ae>' | sort | uniq -c
    14  Haochen Tong <haochent@usc.edu>
    13  haochentSC   <haochent@usc.edu>
```

Two author *names*, **one email** on all 27 commits — the standard split between a locally configured
`user.name` and GitHub's web-editor handle (the `haochentSC` commits are the "Update README.md" web
edits). No second contributor, no merge commits, no PRs. `attribution: mine` for all six bullets.

**One honesty caveat, already applied in the bullet text:** `RuleBasedController`,
`PreprogrammedSteps`, `Retina`, `BaseArena` and `SingleFlySimulation` are all **FlyGym library
classes**, and the gait rules-graph structure follows the FlyGym locomotion tutorial. What is
Haochen's is the wiring, the graph and weight encoding, the arena subclasses, the voxel parser, the
CUDA path, and the Env. That is why `nmf-rule-based-gait` opens with "Wired … onto FlyGym's
rule-based controller" rather than "Built a rule-based controller" — the latter would claim library
code as his own.

**Verifier:** Claude (library introspection + committed-artifact inspection). All bullets `draft`
pending Haochen's confirmation.
