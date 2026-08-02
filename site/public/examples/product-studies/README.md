# High-fidelity product-interface studies

This directory is the work order and source set for three standalone HTML studies in the Effective HTML catalog.

## Goal

Show that a developer can use an agent to study a familiar product’s information architecture, interaction grammar, and visual restraint—then build an inspectable HTML prototype instead of describing the idea in prose. The studies are unaffiliated, use synthetic data, make no product claims, and do not reuse logos or production assets.

## Studies

- `linear-issue-workspace.html` — a dense issue list, active/backlog views, row selection, and a focused detail rail.
- `notion-project-space.html` — a project document with properties, connected tasks, live progress, and timeline views.
- `vercel-deployment-dashboard.html` — a chronological deployment ledger with environment filters, expandable build evidence, and promotion actions.

Each study must remain a single responsive HTML file with keyboard-accessible controls, useful interaction, reduced-motion behavior, and synthetic content. The catalog uses a 1440×900 screenshot for discovery, but the live HTML remains the primary artifact.

## Research basis

- Linear: [UI refresh](https://linear.app/changelog/2026-03-12-ui-refresh) and [team issues page](https://linear.app/changelog/2024-10-24-new-team-issues-page)
- Notion: [Projects](https://www.notion.com/product/projects) and [page layouts](https://www.notion.com/help/layouts)
- Vercel: [Managing deployments](https://vercel.com/docs/deployments/managing-deployments) and [dashboard tour](https://vercel.com/academy/optimize-your-vercel-account/tour-the-dashboard)

## Completion criteria

1. Desktop and mobile layouts remain legible without horizontal overflow.
2. The central interaction works without a framework or build step.
3. Visible data is realistic enough to explain the product pattern, but entirely synthetic.
4. A 1440×900 catalog screenshot exists beside each HTML file.
5. All three entries are filterable under **Prototyping** and **Native examples** in `/catalog`.
