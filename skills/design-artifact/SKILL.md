---
name: design-artifact
description: Provide subject-specific creative direction for any self-contained HTML artifact, including reports, plans, diagrams, decks, landing pages, mockups, prototypes, and small tools. Use when the user asks for a polished or distinctive visual artifact, when palette, type, composition, or theming remain open, or when another Effective HTML skill needs art direction that avoids generic AI styling. Do not use this skill to override an established design system or a specialist skill's fidelity and behavior contract.
---

# Design Artifact

Give each HTML artifact a visual identity that belongs to its brief. This skill
can work alone for broad visual deliverables or alongside `html`,
`html-wireframe`, `html-prototype`, `html-plan`, or `html-diagram`.

It is creative-direction guidance, not a template. Do not reproduce a house
palette, type stack, card system, layout, or static reference from a previous
artifact.

## Compose it with the artifact skill

Let the artifact skill own the form:

- `html` chooses the broad workflow and shared build contract.
- `html-wireframe` keeps the result intentionally low fidelity.
- `html-prototype` decides whether the artifact is a mockup or working flow.
- `html-plan` preserves source commitments and traceability.
- `html-diagram` chooses the visual model and rendering method.
- `design-artifact` shapes palette, type, composition, visual register, and the
  amount of expressive treatment.

Creative direction must not smuggle polish into a wireframe, decoration into a
plan, or spectacle into a diagram whose relationships need to remain quiet and
legible.

## Establish authority before taste

Inspect the request, supplied references, and current project before choosing a
direction. Look for `AGENTS.md`, `CLAUDE.md`, `DESIGN.md`, product documentation,
tokens, components, screenshots, and nearby artifacts.

Authority runs in this order:

1. The user's explicit instructions and accepted decisions.
2. The project's established design system and conventions.
3. The subject, audience, content, and purpose of this artifact.
4. Your own design judgment.

Use bundled or external references to understand technique and constraints, not
as a visual answer to copy.

## Size the treatment to the brief

Choose the register before writing CSS:

- **Workmanlike:** quiet hierarchy, exact spacing, restrained color, and direct
  language for plans, briefs, reports, and many tools.
- **Editorial:** stronger composition, distinctive type, deliberate pacing, and
  one memorable move for explainers, launches, research stories, and decks.
- **Expressive:** a more immersive visual or interactive premise whose execution
  is part of the message. Use it only when the subject earns it.

Every register deserves care. A memo does not need a theatrical hero, and a
landing page does not become distinctive merely by becoming louder.

## Derive the direction from the subject

Find one organizing idea in the subject's own world: its materials, tools,
environment, notation, history, audience, or language. Let that idea influence
the grid, type, color, imagery, diagram grammar, density, or interaction.

Use real content from the first draft. Placeholder copy, invented metrics, and
generic product names weaken the design because they remove the constraints that
should shape it.

Before building, write a short design plan in working notes:

- **Premise:** the visual idea and why it belongs to this subject.
- **Color:** named roles with actual values, including neutrals and status colors
  when needed.
- **Type:** the display, body, and utility roles the content actually needs.
- **Layout:** the organizing composition and intended reading path.
- **Interaction:** the one place, if any, where motion or input carries meaning.

Do not satisfy a quota. The number of colors, typefaces, columns, and components
should follow the idea.

## Apply the fundamentals

### Typography

Use type to establish voice and hierarchy. One well-used family can outperform
an arbitrary pairing; multiple roles are useful only when they remain coherent.
Keep prose readable, balance headings, and use tabular numerals where values
align. Use system fonts when they fit. Embed custom fonts only when their value
and license justify the file weight; do not depend on a font CDN.

### Color and themes

Choose neutrals as deliberately as accents. Keep semantic status colors separate
from decorative color. Follow the user's or project's theme policy. When both
light and dark themes are required, define component-facing tokens and give each
theme equal care instead of mechanically inverting values. A deliberate
single-theme concept is valid when the brief calls for it.

### Layout and cascade

Let containers own spacing through grid, flex, and `gap`. Keep prose measures
readable and place broad tables, diagrams, or code in contained scrolling or
pannable regions. Organize selectors so component spacing cannot be quietly
overridden by unrelated rules. Prevent accidental page-level overflow.

### Copy and structure

Treat words as part of the interface. Use the reader's language, active verbs,
specific labels, and useful error messages. Numbering, labels, dividers, badges,
and callouts should express real order, state, grouping, or importance rather
than decorate empty structure.

### Interaction and motion

Make controls look actionable and make their effects clear. Preserve keyboard
access, visible focus, and state feedback. Allocate motion to explanation,
continuity, or feedback. Respect `prefers-reduced-motion`; remove animation that
does not change understanding.

## Avoid the template reflex

Common components are not a visual direction. Cards, pills, rounded rectangles,
gradients, tiny uppercase labels, giant numerals, side rails, and centered heroes
may be useful, but each must express something true about the content.

Vary more than color. A new palette on the same hero and card grid is still the
same design. Reconsider composition, scale, density, typography, shape language,
navigation, imagery, and interaction.

Current generic AI output often defaults to interchangeable dark dashboards,
purple-blue gradients, universal rounded cards, safe grotesk type, decorative
metrics, and effects distributed evenly across the page. Do not reject a choice
because it is common; reject it when it has no reason to be there.

Concentrate the strongest visual decision in one place and let the rest of the
artifact support it.

## Build and verify

Follow the active artifact skill's build contract. For a standalone artifact,
produce one self-contained HTML file with essential CSS and JavaScript inline
and no network requirement unless the user permits one.

Inspect the result at wide and narrow widths. Exercise the important controls,
check the console, test keyboard focus and reduced motion, and fix clipping,
overlap, unreadable text, broken states, and accidental overflow.

Finish with an originality check: if the subject were swapped for a neighboring
topic, would the visual idea still make just as much sense? If so, revise the
composition, type, color, imagery, or interaction until the artifact belongs to
this brief.

Return the absolute path and a short account of the visual premise, register,
and interaction choices.
