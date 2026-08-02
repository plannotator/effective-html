---
name: html-diagram
description: Direct-invocation specialist for self-contained HTML diagrams whose layout, notation, and interaction clarify relationships, sequence, topology, state, hierarchy, or quantitative structure. Use when the user explicitly invokes html-diagram or the broad html skill routes a diagram request here. Do not activate independently from a general request.
---

# HTML Diagram

Build the smallest visual model that makes the relationship easier to understand than prose alone. Match the notation and visual language to the user's project and subject. Do not force every topic into the same SVG boxes and arrows.

## Choose the right model

Identify the question the reader should answer, then select the form:

- topology for components and connections;
- sequence for ordered messages over time;
- process for steps, branches, and handoffs;
- state for transitions and conditions;
- hierarchy for containment or ownership;
- timeline for change over time;
- matrix for repeated relationships;
- quantitative view when magnitude matters.

Decide what must remain visible together and what can be revealed on demand. Use a simpler form when it carries the same meaning.

## Choose the rendering method

Use HTML and CSS, SVG, Canvas, or WebGL according to the information and scale. Do not use SVG merely because the output is a diagram.

- Keep labels, grouping, direction, and connectors legible before adding interaction.
- Use stable node positions when readers must compare states or steps.
- Keep edge crossings and ambiguous arrowheads to a minimum.
- Put intentionally broad canvases in a contained pan or scroll region.
- Use legends only when notation is not self-explanatory.

Add sequencing, filtering, path tracing, pan and zoom, or animation only when it helps answer the stated question. Keep overlays dismissible, controls keyboard-accessible, and motion compatible with `prefers-reduced-motion`.

When [`design-artifact`](../design-artifact/SKILL.md) is available, read it for
the diagram's surrounding composition and visual register. Keep the chosen
diagram grammar, label legibility, and relationships authoritative over
decorative treatment.

## Build and verify

Deliver one self-contained HTML file with essential CSS and JavaScript inline. Require no build step or external service. Use accessible text alternatives and keep important meaning available without animation or color alone.

Inspect the result at wide and narrow widths. Check label collisions, clipped nodes, edge routing, reading order, keyboard operation, overflow, and every interactive state.

Return the absolute path, the diagram form chosen, and the main simplifications or assumptions.
