---
version: 1
slug: "app-catalog-page-tsx"
primary_target: "app/catalog/page.tsx"
related_targets: ["components/catalog-explorer.tsx"]
---

# Editorial Category Bands catalog

Approved visual reference: `.impeccable/mocks/catalog-editorial-category-bands.png`

## Scope and visitor mode

Route `/catalog`; Experience mode. Developers should be able to browse the real artifact collection, understand what each form is useful for, and open the underlying HTML or SVG without crossing a decorative marketing layer first.

The first viewport is a guide, not merely an introduction. It names all nine subjects—Exploration, Review, Design, Prototyping, Diagrams, Decks, Research, Reports, and Editors—with the real category color, a one-line use case, an artifact count, and a direct anchor into that subject. The guide precedes the collection on both desktop and mobile so visitors can form a map before they scroll.

## Content and actions

- Twenty Thariq HTML references, grouped by the nine source categories and linked to the original live files, each paired with an Effective SVG subject in locally served static and animated versions.
- Six native Effective HTML artifacts: the featured architecture request-path explorer, two release-readiness studies, and three standalone product-interface studies.
- The featured explorer is the interactive diagram from the Effective HTML README. Its live HTML is the source artifact; a 30.5-second recording, poster, and four-flow animated SVG are supporting previews of the same work, not additional catalog entries.
- The standalone studies are a Linear-like issue workspace, a Notion-like connected project document, and a Vercel-like deployment ledger. All three use synthetic data, are explicitly unaffiliated, and make no commercial product claims or use product logos.
- The five Effective HTML skills as the methods behind the catalog.
- Thirty-one catalog entries total: twenty HTML + SVG pairs, six native examples, and five skills. The collection is intentionally too small to justify free-text search or intersecting taxonomies, so discovery uses the nine-subject guide plus one Collection control: All, References, Hi-fi mockups, or Skills. Hi-fi mockups is the direct showcase path to the Linear-like, Notion-like, and Vercel-like studies; primary actions are Open HTML, Static SVG, and Animated SVG.
- One global SVG Preview control switches all twenty paired SVG previews together. Preview defaults to Animated, and individual specimen cards do not carry their own animation toggles.
- Expanded and Compact are two presentations of this same filtered collection. Switching modes must preserve every result, preview state, source link, and action rather than routing to a second catalog.

## Direction and memorable moment

Use full-width printed-ink category bands containing staggered warm-paper specimen sheets of unequal scale. The page opens with a compact title, dense artifact folio, and a nine-subject wayfinding guide; the first-class request-path explorer follows before the category bands take over. HTML and its SVG interpretation remain paired in each specimen so the relationship is visible rather than explained. The hero title owns protected layout space: the folio sheets may gather around it, but must never cover it at 1033px, 1375px, 1728px, or the widths immediately around those checkpoints.

Expanded is the expressive, full-width reading mode. Its category heading occupies a protected identity rail that specimen cards cannot cover, even when the sheets are staggered. Compact folds the same material into contained colored shelves: each category keeps its identity rail while its specimens become concise, horizontally arranged working artifacts. The memorable transition is the collection visibly settling into a high-level scan without losing the underlying evidence.

## Implementation inventory

| Visible ingredient | Medium |
| --- | --- |
| Thin shared navigation and compact title | Existing SiteHeader plus semantic HTML/CSS |
| Dense opening folio of distinct artifact sheets | Real local SVG assets and same-origin screenshots in HTML/CSS frames |
| Nine-subject first-viewport guide | Semantic anchor navigation with category swatches, use-case copy, live counts, and direct section links |
| Sticky collection controls and result count | One accessible Collection control, contextual global SVG Preview, and Expanded/Compact controls; no free-text search or Subject dropdown |
| Expanded / Compact view selector | Accessible pressed-state buttons controlling one shared result tree |
| Featured architecture request-path explorer | Live standalone HTML with six selectable flows; supporting video, poster, and four-flow animated SVG synopsis |
| Nine category bands | Full-width editorial fields in Expanded; contained colored shelves in Compact |
| Twenty artifact specimens | Data-driven HTML; local SVG `<img>` previews and verified external links |
| Global static/animated preview state | One accessible Preview control swaps all twenty paired local SVG assets together; Animated is the default and cards have no individual animation toggles |
| Six native worked examples | Featured request-path explorer, two release-readiness studies, and three product-interface studies, all with same-origin live HTML |
| Product-interface discovery media | Three local 1440×900 PNG images that link into the live Linear-like, Notion-like, and Vercel-like studies |
| Five skills rail | Ruled semantic links to local guide chapters and GitHub source files |

## Featured artifact behavior

- The explorer exposes six flow chips with `aria-pressed`, keyboard-operable SVG nodes, and live-region updates for the selected flow or node detail.
- The recording never autoplays. It uses the poster as its resting state and remains a supporting demonstration rather than the artifact itself.
- The animated SVG synopsis honors reduced-motion preferences; its four summarized paths do not replace the six selectable flows in the live HTML.
- Featured actions maintain a 48px minimum target size.

## Catalog view behavior

- The sticky control bar uses one content taxonomy: All, References, Hi-fi mockups, or Skills. Subject discovery stays in the nine-subject guide rather than becoming a second intersecting filter.
- SVG Preview defaults to Animated and switches all twenty paired SVG specimens as a group. It appears only for All and References, where it applies; Hi-fi mockups and Skills do not carry an irrelevant preview control.
- Expanded is the initial mode and retains the spacious, staggered editorial bands.
- Compact is a denser scan of the same visible results. It compresses the featured explorer, category bands, native examples, and skills without removing their content or actions.
- View buttons expose their current state with `aria-pressed`; the live result summary names the active mode and current result count.
- Where supported, the mode change uses the native View Transition API. A CSS-keyed fallback provides the same purposeful fold when that API is unavailable.
- Both transition paths use a 420ms sharp cubic easing (`cubic-bezier(0.645, 0.045, 0.355, 1)`) with no spring or bounce. Stable transition names keep category identities coherent while the layout changes.
- Reduced-motion mode removes the fold animation and layout transitions; the catalog changes state immediately while preserving color and information hierarchy.

## Shipped product-interface studies

- **Linear-like issue workspace:** Active and Backlog filtering, issue-row selection, and a focused detail rail keep list context visible while inspecting synthetic work.
- **Notion-like connected project document:** Content, Tasks, and Timeline views remain connected; changing a task updates the live completion count, percentage, and transform-based progress bar.
- **Vercel-like deployment ledger:** Environment filters, expandable build evidence, and explicit action feedback support a chronological operational read.
- All three entries are categorized under Prototyping and Native examples. Each has same-origin live HTML and a local 1440×900 PNG discovery image.
- The studies intentionally retain the information architecture, density, typography, hierarchy, and interaction grammar of their referenced product families. Do not normalize them into the Effective HTML palette; only the surrounding Catalog shell remains Working Atlas.
- Every study carries a visible standalone disclosure that it is an unaffiliated interface study using synthetic data. No study uses a product logo or makes a commercial claim.
- The research basis is recorded in `public/examples/product-studies/README.md` using official Linear, Notion, and Vercel sources.

## Responsive constraints

Desktop Expanded may stagger two or three sheets within a band; Compact uses contained shelves with a category rail and concise specimen grid. At every desktop and large-tablet width, the hero title and each expanded category heading retain reserved, non-overlapping rails. Explicit regression checkpoints are 1033px, 1375px, and 1728px, plus adjacent widths where the layout changes. Tablet reduces each expanded band to a label rail plus one or two columns.

On mobile, the nine-subject guide remains before the artifact folio so the visitor sees the catalog map first. Expanded becomes a vertical sequence with full-width previews and persistent readable actions. Compact keeps each colored category band contained and lets its specimen shelf scroll horizontally inside the band; the document itself must remain overflow-free. The featured explorer stacks copy, video, and animated synopsis in that order. Reduced-motion preferences disable the view-change animation at every breakpoint.

The three product-interface studies are verified at 1440×900 and 390×844. At both sizes they have no document-level horizontal overflow and keep the unaffiliated synthetic-data disclosure visible. Linear and Notion expose complete tab semantics with roving focus plus Arrow Left, Arrow Right, Home, and End keyboard behavior; all studies preserve keyboard access, visible focus, and reduced-motion support.

## Validation notes

- One-time mechanical detector warnings about distinct local tokens and fonts are intentional: these standalone specimens have product-family-specific visual worlds.
- The detector's layout-transition warning was resolved by changing live task progress to transform-based scale motion.
- Lint, TypeScript, and the production build pass.

## Reviewer verdict

SHIP — no remaining findings.
