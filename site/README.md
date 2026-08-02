# EffectiveHTML.com

This directory contains the Next.js and Fumadocs application deployed at
[effectivehtml.com](https://www.effectivehtml.com/). The installable skills,
plugin manifests, and source examples remain at the repository root.

## Develop locally

```bash
pnpm install
pnpm dev
```

Run the production checks from this directory:

```bash
pnpm lint
pnpm build
```

The Vercel project uses `site/` as its Root Directory. Files under `public/`
are the deployable catalog and example assets used by the application.
