---
name: html
description: Create a self-contained HTML file for whatever the user is describing, in the effective HTML style. Use when the user wants an HTML artifact that isn't specifically a diagram or a plan — a report, explainer, comparison, deck, prototype, or anything else best delivered as one HTML file.
disable-model-invocation: true
---

# HTML

Review the files throughout `references/html-effectiveness/`.

Create an HTML file for whatever the user is describing. Use the references as best you can to match alignment — style, density, and tone.

Always include dark mode: hand-rolled CSS variables on `:root` / `html.dark`, a small theme toggle button, `localStorage` persistence, and an apply-before-paint script in `<head>` (default to `prefers-color-scheme`).
