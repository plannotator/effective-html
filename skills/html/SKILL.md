---
name: html
description: Create a self-contained HTML file for whatever the user is describing, in the effective HTML style. Use when the user wants an HTML artifact that isn't specifically a diagram or a plan — a report, explainer, comparison, deck, prototype, or anything else best delivered as one HTML file.
disable-model-invocation: true
---

# HTML

Review the files throughout `references/html-effectiveness/`.

Create an HTML file for whatever the user is describing. Use the references as best you can to match alignment — style, density, and tone.

Also review `references/effective-html-example.html` — a finished example of this skill done well (status-report / comparison layout that implements the full quality contract below). Match it.

Always include dark mode: hand-rolled CSS variables on `:root` / `html.dark`, a small theme toggle button, `localStorage` persistence, and an apply-before-paint script in `<head>` (default to `prefers-color-scheme`).

## Quality contract

Every artifact must satisfy all of these — `references/effective-html-example.html` shows each one in place:

- **Dark mode** — hand-rolled CSS variables on `:root` and `html.dark`, a small theme toggle button, `localStorage` persistence of the choice, and an apply-before-paint inline script in `<head>` that reads `localStorage` else `prefers-color-scheme` and sets the class before first paint (no flash).
- **`@media (prefers-reduced-motion: reduce)`** that disables or limits transitions and animations.
- **Visible `:focus-visible`** rings on every interactive element.
- **`aria-label`** on any icon-only control (e.g. the theme toggle).
- **`<html lang="…">`** and a `<meta name="viewport">`.
- **No emoji as structural icons** — use inline SVG or text.
- **Body and heading contrast ≥ 4.5:1 in both themes.**
