---
name: html-plan
description: Create a self-contained HTML plan that is pragmatic, simple, and visually organized. Use when the user wants a plan page in the effective HTML style, wants the writing kept close to what they gave you, or wants the grammar cleaned up without turning it into a whole bigger thing.
disable-model-invocation: true
---

# HTML Plan

Review the files throughout `references/html-effectiveness/`.

After reviewing them, create an HTML file for the plan in a similar style.

Keep it pragmatic and simple.

Also review `references/plan-example.html` — a finished example of this skill done well (phased implementation plan with tasks, owners, and status that implements the full quality contract below). Match it.

Always include dark mode: hand-rolled CSS variables on `:root` / `html.dark`, a small theme toggle button, `localStorage` persistence, and an apply-before-paint script in `<head>` (default to `prefers-color-scheme`).

## Quality contract

Every artifact must satisfy all of these — `references/plan-example.html` shows each one in place:

- **Dark mode** — hand-rolled CSS variables on `:root` and `html.dark`, a small theme toggle button, `localStorage` persistence of the choice, and an apply-before-paint inline script in `<head>` that reads `localStorage` else `prefers-color-scheme` and sets the class before first paint (no flash).
- **`@media (prefers-reduced-motion: reduce)`** that disables or limits transitions and animations.
- **Visible `:focus-visible`** rings on every interactive element.
- **`aria-label`** on any icon-only control (e.g. the theme toggle).
- **`<html lang="…">`** and a `<meta name="viewport">`.
- **No emoji as structural icons** — use inline SVG or text.
- **Body and heading contrast ≥ 4.5:1 in both themes.**
