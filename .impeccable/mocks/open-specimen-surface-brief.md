# Open Specimen landing surface

Approved visual reference: `.impeccable/mocks/landing-open-specimen.png`

## Product job

Introduce Effective HTML as a field guide and catalog for developers using agents to create useful visual artifacts. The landing page should establish the value quickly, show the artifact range concretely, and move readers into the guide or examples.

## Visible ingredients

- Thin near-black navigation with the Effective HTML wordmark, Guide, Examples, Principles, GitHub, search, and theme control.
- Large quiet hero field with the stacked title `Effective HTML`, headline `HTML for thinking with agents.`, a short explanatory paragraph, and two clear actions.
- One dense, controlled specimen cluster: dominant colorful browser mockup, warm-paper wireframe behind it, narrow black interaction panel, warm-paper hierarchy diagram, and thin implementation strip.
- Warm-paper second fold that introduces the catalog through one oversized specimen and an asymmetric chapter index rather than a uniform card grid.
- Subsequent editorial chapters for why HTML, choosing fidelity, and the guide path, alternating Ink and Paper surfaces.
- A compact footer that retains the paper-and-ink vocabulary.

## Visual system

- Ink `#141413`, Paper `#F3E6D2`, cobalt `#1649D8`, lilac `#A884E8`, green `#1BAE61`, pale pink `#F09AA8`, coral `#E8744F`.
- Flat printed fields, fine dark rules, subtle physical paper tooth, controlled overlaps, and soft offset depth only where stacked sheets require it.
- Heavy self-hosted grotesk display face; practical sans for interface and body copy.
- No gradients, glow, glass, generic dashboard cards, mascots, hands, connector lines, or fake generated text.

## Interaction and responsive behavior

- The specimen cluster has one restrained authored entrance and subtle focus/hover responses; content remains fully visible with reduced motion.
- Buttons and navigation have complete keyboard focus states.
- Desktop preserves the 5/7 title-to-specimen split.
- Tablet stacks the title over a slightly compressed specimen cluster.
- Mobile keeps the title dominant, turns the specimen cluster into a carefully cropped layered composition, and simplifies the navigation without hiding core routes.
- Search and theme controls must work, not merely decorate the mock.

## Implementation direction

Use a conventional Next.js App Router application with Fumadocs MDX and Vercel deployment assumptions. The custom landing page lives at `/`; the guide lives under `/docs`; examples remain first-class routes. Build the specimen graphics as crisp HTML/CSS geometry so they scale and remain accessible, using the approved composition as direction rather than embedding the comp as a single hero image.
