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

## Adding / editing a project

Create or edit a file in `src/content/projects/`. Required frontmatter: `title`, `tagline`,
`role`, `period`, `stack`. Optional: `metrics`, `categories`, `links`, `cover`, `order`, `featured`.
Numbers must match the master resume — never invent metrics.

## Deploy

Push to `main`; GitHub Actions builds and deploys. In repo Settings → Pages, set the source to
**GitHub Actions** (one-time).
