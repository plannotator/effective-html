---
version: 1
slug: "app-catalog-folio-page-tsx"
primary_target: "app/catalog/folio/page.tsx"
related_targets: ["components/catalog-folio.tsx", "components/catalog-folio.module.css"]
---

# Retired catalog folio route

Approved visual reference: `.impeccable/mocks/catalog-editorial-category-bands.png`

## Status and visitor mode

Retired route `/catalog/folio`; Experience mode. The separate comparison page no longer exists because its compact folio behavior is now a mode of the primary catalog.

## Redirect behavior

Requests redirect to `/catalog#catalog-collection`, placing the visitor at the primary catalog controls and shared collection. The redirect preserves old review links while avoiding two divergent catalog implementations.

All twenty-eight entries, filters, source actions, and Expanded / Compact presentation now live at `/catalog`. Compact is a state of that route, not a separate URL or reduced evidence set.

## Retired implementation guidance

- Do not rebuild or maintain a second catalog at this route.
- Do not encode the active catalog view in this legacy path.
- Make catalog layout, motion, accessibility, and responsive changes in the primary `/catalog` surface and its shared explorer.

## Reviewer verdict

PASS
