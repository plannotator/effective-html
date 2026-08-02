---
name: html
description: Create or redesign self-contained single-file HTML artifacts with a visual direction shaped by the user's brief, project, and subject. Use when HTML is the deliverable for a report, explainer, landing page, presentation, tool, mixed artifact, or broad request. This is the collection's only implicit router. Route clear wireframe, prototype, mockup, plan, or diagram requests to the matching direct-invocation specialist when available. Do not use for ordinary application implementation when a standalone HTML file is not the deliverable.
---

# HTML

Build one self-contained HTML file that makes the subject clearer, easier to use, or easier to understand. The standard is consistent care, not a consistent look. Do not reproduce a house palette, typography stack, card system, or layout from prior runs.

## Route the request first

Use the narrowest skill that owns the main review question:

- Read and compose [`design-artifact`](../design-artifact/SKILL.md) with the
  chosen workflow when palette, type, composition, theming, or overall visual
  register remain open. It provides creative direction; it does not replace the
  specialist that owns fidelity, structure, or behavior.
- Read and follow [`html-wireframe`](../html-wireframe/SKILL.md) when structure, information hierarchy, navigation, or task flow is still unsettled. It should remain visibly low fidelity and may compare two or three layout directions.
- Read and follow [`html-prototype`](../html-prototype/SKILL.md) when the user needs a polished mockup or a working interactive flow. A mockup is the static fidelity mode inside that skill.
- Read and follow [`html-plan`](../html-plan/SKILL.md) when the artifact is primarily a plan, roadmap, implementation sequence, or rollout document whose source commitments must remain easy to verify.
- Read and follow [`html-diagram`](../html-diagram/SKILL.md) when relationships, sequence, topology, state, hierarchy, or system behavior are the main content.
- Continue with `html` for reports, explainers, presentations, landing pages, data stories, tools, and mixed artifacts that do not have a clearer owner.

These sibling links are the nesting mechanism when the collection is installed together. If a specialized skill is unavailable, continue here and load the closest reference below. Do not make the user install another skill before completing the request.

## Read the room before designing

Inspect the user's request and any material they supplied. When working in a repository, look for its design language in `AGENTS.md`, `CLAUDE.md`, design-system documentation, tokens, existing components, and nearby artifacts.

Authority runs in this order:

1. The user's explicit visual and functional instructions.
2. The project's established design system and conventions.
3. The subject matter, audience, and purpose of this artifact.
4. Your own design judgment.

Before coding, settle five things in working notes:

- **Audience and job:** who will use this, and what should they understand or do?
- **Form:** document, presentation, interface, diagram, or data visualization.
- **Register:** quiet and workmanlike, polished and editorial, or intentionally expressive.
- **Fidelity:** whether to preserve the user's structure and wording or synthesize more freely.
- **Interaction:** what benefits from exploration, sequencing, filtering, or motion, if anything.

If the project already answers the visual questions, follow it. Otherwise read
and compose [`design-artifact`](../design-artifact/SKILL.md) when it is
available. If the collection was installed without that sibling skill, read
[`references/creative-direction.md`](references/creative-direction.md) before
choosing the palette, type, composition, or motion.

## Load only the guidance the artifact needs

- For reports, briefs, plans, explainers, and decks, read [`references/documents-and-presentations.md`](references/documents-and-presentations.md).
- For interfaces, calculators, and other tools that remain in this broad skill, read [`references/interfaces.md`](references/interfaces.md).
- For architecture, process, sequence, state, hierarchy, or concept diagrams, read [`references/diagrams.md`](references/diagrams.md).
- For quantitative charts, tables, metrics, or data stories, read [`references/charts-and-data.md`](references/charts-and-data.md).

Requests can span forms. Read every reference that materially applies, then give the artifact one coherent direction.

## Build contract

- Produce one `.html` file with its essential CSS and JavaScript inline. It should work when opened directly, without a build step. Do not require a network connection unless the user permits external dependencies.
- Use real content. Do not fill prominent space with placeholder copy, decorative statistics, or controls that do nothing.
- Let content determine structure. A sequence should read in order; a comparison should make differences easy to scan; an interface should expose state and actions; a diagram should make relationships legible.
- Use semantic HTML, responsive layout, accessible contrast, visible keyboard focus, and reduced-motion handling. Make interactive elements work with a keyboard.
- Keep the page body free of accidental horizontal overflow. Put intentionally broad content in a contained scrolling or pannable region.
- Define a small set of CSS tokens for the chosen direction and use them consistently. Tokens are an implementation tool, not a predetermined palette.
- Treat motion as explanation or feedback. If removing an animation loses no meaning or useful feedback, remove it.
- Follow the user's or project's theme policy. When none exists, give durable utility artifacts considered light and dark themes if that improves their use. A deliberate single-theme concept is valid.

## Finish the work

Write the file to the requested location, or choose a clear filename in the current workspace. When browser tooling is available, open it and inspect a wide and narrow viewport. Exercise its controls, check the console, and fix clipping, overlap, illegible text, broken states, and accidental overflow.

Before delivery, run one originality check: if the subject were swapped for a neighboring topic, would the same visual concept still make just as much sense? If yes, the direction is too generic; revise the composition, type, color, imagery, or interaction so it belongs to this subject.

Return the absolute path and a short description of the artifact's visual and interaction choices.
