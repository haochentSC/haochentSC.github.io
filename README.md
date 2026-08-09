# haochentSC.github.io

Personal portfolio for **Haochen Tong** — systems & AI-infra engineer.

Built with [Astro](https://astro.build/) + Tailwind v4, deployed to GitHub Pages.
Terminal / AI-infra aesthetic. The visual system is authored in
[Claude Design](https://claude.ai/design) (see `design/`) and ported into Astro components.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output -> dist/
npm run preview  # serve the build locally
```

## Structure

| Path | Purpose |
|---|---|
| `src/content/projects/*.md` | One typed Markdown file per project (the data layer) |
| `src/content/config.ts` | Content-collection schema (build fails on missing fields) |
| `src/components/*.astro` | UI components, ported from the Claude Design library |
| `src/layouts/` | `Base` (home) and `ProjectLayout` (detail pages) |
| `src/pages/` | `index.astro` + `projects/[slug].astro` |
| `src/styles/global.css` | Design tokens (Tailwind v4 `@theme`) |
| `design/**/*.html` | Claude Design component previews (synced via `/design-sync`) |
| `.github/workflows/deploy.yml` | Build + deploy to GitHub Pages |
| `resume/` | **Master resume store — upstream of every number on this site. Not part of the build.** See [`resume/README.md`](resume/README.md) |

## Adding / editing a project

Create or edit a file in `src/content/projects/`. Required frontmatter: `title`, `tagline`,
`role`, `period`, `stack`. Optional: `metrics`, `categories`, `links`, `cover`, `order`, `featured`.
Numbers must match the master resume — never invent metrics.

## Numbers on this site come from `resume/`

Every metric here is downstream of [`resume/MASTER-RESUME.md`](resume/MASTER-RESUME.md). The sync
direction is **master → portfolio, always** — never edit a number here and expect it to propagate
back. To change one, use the `resume-master` skill, which updates the master and fans the correction
out to every surface in the same session.

`python C:/Users/tongh/.claude/skills/resume-master/scripts/check.py` diffs every `metrics[]` value
in `src/content/projects/*.md` against the master and fails on a mismatch. Run it before pushing a
change that touches a number.

**Keep this repository private.** `resume/` carries contact details, candid verification notes, and
internals of a closed-source project. It is not part of the build — Astro compiles `src/` and
`public/`, and the Pages workflow uploads `dist/` — but it *is* browsable to anyone who can read the
repo. Read [`resume/README.md`](resume/README.md) first.

## Deploy

Push to `main`; GitHub Actions builds and deploys. In repo Settings → Pages, set the source to
**GitHub Actions** (one-time).
