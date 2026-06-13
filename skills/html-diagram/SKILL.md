---
name: html-diagram
description: Create a self-contained HTML file for visualizing architecture and understanding the stack with a high-quality SVG diagram. Use when the user wants a full-screen diagram, wants the output to be light on prose, or wants an HTML artifact that is mostly there to make the architecture click fast.
disable-model-invocation: true
---

# HTML Diagram

Review the SVG diagrams used throughout `references/html-effectiveness/`.

There are a bunch in there, and some of them are focused on architecture and whatnot.

After reviewing them, create an HTML file that is strictly for visualizing the architecture and understanding the stack.

It should not be prose-heavy. It should simplify more into a full-screen diagram and whatnot.

Build a high-quality diagram in SVG. Take your time iterating on the diagram more than anything.

If it makes sense, make the diagram interactive and able to visualize and animate different sequences of system behavior.

Also review `references/architecture-example.html` — a finished example of this skill done well (full-screen SVG stage, clickable nodes, flow chips that light up and animate request paths).

Always include dark mode: hand-rolled CSS variables on `:root` / `html.dark`, a small theme toggle button, `localStorage` persistence, and an apply-before-paint script in `<head>` (default to `prefers-color-scheme`). Style the SVG through CSS classes using those variables — never hard-coded hex inside the SVG — so the diagram follows the theme.
