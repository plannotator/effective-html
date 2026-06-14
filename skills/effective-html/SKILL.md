---
name: effective-html
description: Create elegant, self-contained HTML artifacts in the effective-HTML style. This skill should be used whenever the user wants something delivered as a single HTML file — a general artifact (report, explainer, comparison, slide deck, prototype), a full-screen architecture/system diagram (low-prose, high-quality interactive SVG), or a pragmatic plan page. Routes the request to the matching mode and follows the bundled reference examples for style, density, and tone.
---

# Effective HTML

One entry point for producing self-contained HTML artifacts in the effective-HTML style. This file is a router: pick the mode that matches the request, follow its notes, and apply the shared requirement below to every mode.

## Read first

Review the example files throughout [`references/html-effectiveness/`](references/html-effectiveness/). Match their alignment — style, density, and tone — as closely as the request allows. Every mode below assumes these examples are in mind.

## Mode routing

| The user wants… | Mode | Mode-specific guidance |
|---|---|---|
| A general artifact — report, explainer, comparison, slide deck, prototype, or anything else best delivered as one HTML file | **Artifact** | Build the HTML for whatever is being described, leaning on the references to match style, density, and tone. |
| A full-screen architecture or system diagram, light on prose, that makes the stack click fast | **Diagram** | Build a high-quality SVG and iterate on the diagram more than anything else. Keep prose minimal — simplify toward a full-screen diagram. Where it helps, make the diagram interactive and animate different sequences of system behavior. Also review [`references/architecture-example.html`](references/architecture-example.html) — a finished example (full-screen SVG stage, clickable nodes, flow chips that light up and animate request paths). Style the SVG through CSS classes that use the theme variables — never hard-coded hex inside the SVG — so the diagram follows the theme. |
| A plan page that stays pragmatic and close to what they gave you | **Plan** | Keep it pragmatic and simple. Keep the writing close to the user's input; clean up the grammar without turning it into something bigger. |

When a request spans modes, pick the dominant one and borrow from the others as needed.

## Always (every mode)

Include dark mode: hand-rolled CSS variables on `:root` / `html.dark`, a small theme toggle button, `localStorage` persistence, and an apply-before-paint script in `<head>` (default to `prefers-color-scheme`).
