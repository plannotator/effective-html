---
name: html-plan
description: Create a self-contained HTML plan that is pragmatic, simple, and visually organized. Use when the user wants a plan page in the effective HTML style, wants the writing kept close to what they gave you, or wants the grammar cleaned up without turning it into a whole bigger thing.
disable-model-invocation: true
---

# HTML Plan

Review the files throughout `references/html-effectiveness/`.

After reviewing them, create an HTML file for the plan in a similar style.

Keep it pragmatic and simple.

Always include dark mode: hand-rolled CSS variables on `:root` / `html.dark`, a small theme toggle button, `localStorage` persistence, and an apply-before-paint script in `<head>` (default to `prefers-color-scheme`).
