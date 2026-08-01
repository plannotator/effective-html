---
name: "Effective HTML — Working Atlas"
description: "A tactile, graphic field guide whose real HTML artifacts make the case for the medium."
colors:
  ink: "#141413"
  ink-soft: "#2A2926"
  paper: "#F3E6D2"
  paper-bright: "#FFF9EF"
  paper-muted: "#DED1BE"
  paper-deep: "#EADCC7"
  paper-edge: "#D6B995"
  line: "#B9AE9D"
  text-muted: "#6E675E"
  copy-on-paper: "#575149"
  copy-on-ink: "#CFC2B2"
  muted-on-ink: "#A99C8C"
  strong-on-ink: "#D9CDBD"
  cobalt: "#1649D8"
  lilac: "#A884E8"
  green: "#1BAE61"
  green-hover: "#3AC579"
  pink: "#F09AA8"
  coral: "#E8744F"
  tape: "rgba(169, 155, 134, 0.72)"
typography:
  display:
    fontFamily: "\"Inter Tight Variable\", \"Inter Variable\", sans-serif"
    fontSize: "clamp(4.6rem, 7.2vw, 6rem)"
    fontWeight: 830
    lineHeight: 0.84
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "\"Inter Tight Variable\", \"Inter Variable\", sans-serif"
    fontSize: "clamp(3.4rem, 6.3vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  title:
    fontFamily: "\"Inter Tight Variable\", \"Inter Variable\", sans-serif"
    fontSize: "1.45rem"
    fontWeight: 740
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "\"Inter Variable\", Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body-small:
    fontFamily: "\"Inter Variable\", Inter, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.58
    letterSpacing: "normal"
  label:
    fontFamily: "\"Inter Tight Variable\", sans-serif"
    fontSize: "0.84rem"
    fontWeight: 720
    lineHeight: 1.2
    letterSpacing: "normal"
  label-compact:
    fontFamily: "\"Inter Tight Variable\", \"Inter Variable\", sans-serif"
    fontSize: "0.76rem"
    fontWeight: 720
    lineHeight: 1.2
    letterSpacing: "normal"
  caption:
    fontFamily: "\"Inter Variable\", Inter, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  micro:
    fontFamily: "\"Inter Variable\", Inter, sans-serif"
    fontSize: "0.58rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "normal"
rounded:
  none: "0"
  sheet: "0.35rem"
  control: "0.38rem"
  specimen: "0.42rem"
  panel: "0.5rem"
  frame: "0.55rem"
  full: "999px"
motion:
  fast:
    duration: "160ms"
    easing: "ease-out"
    use: "Arrow, underline, and compact control feedback"
  preview:
    duration: "240ms"
    easing: "cubic-bezier(0.16, 1, 0.3, 1)"
    use: "Single specimen image lift"
  fold:
    duration: "420ms"
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
    use: "Explicit catalog Expanded/Compact mode change"
spacing:
  micro: "0.25rem"
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  page-gutter: "2rem"
  editorial-section: "clamp(6rem, 10vw, 10rem)"
components:
  catalog-shell:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-bright}"
  guide-shell:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.85rem 1.05rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.green-hover}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.85rem 1.05rem"
    height: "3rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.paper-bright}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.85rem 1.05rem"
    height: "3rem"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-bright}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.85rem 1.05rem"
    height: "3rem"
  button-ink-hover:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper-bright}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.85rem 1.05rem"
    height: "3rem"
  specimen-browser:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.specimen}"
  specimen-interaction:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.paper}"
    rounded: "{rounded.specimen}"
  artifact-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "1.5rem 0"
  catalog-filter-active:
    backgroundColor: "{colors.green}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.65rem 0.8rem"
    height: "3rem"
  catalog-specimen:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    rounded: "{rounded.specimen}"
  native-example:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
  guide-evidence:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
    accentColor: "contextual by artifact family"
---

# Design System: Effective HTML — Working Atlas

## Overview

**Creative North Star: "Working Atlas"**

Working Atlas makes Effective HTML feel like an open practitioner’s folio: tactile, graphic, technically calm, and generous with inspectable work. Its approved specimen expressions put the artifact itself in the foreground, so the interface proves the value of HTML instead of describing it through generic documentation cards.

The system has two coordinated registers. The Catalog opens as a compact Ink folio, then becomes a run of vivid category fields carrying staggered Bright Paper evidence; the Guide is a broad Paper Bright reading surface that preserves familiar Fumadocs navigation, search, table-of-contents, and prose behavior. Ink, warm paper, exact grotesk typography, fine rules, and specimen geometry make the registers one visual world.

Imperfection is controlled and material, never careless. Paper tooth, slight sheet rotation, tape, overlap, and offset depth live around artifact surfaces, while text, controls, navigation, and diagrams stay crisp. The resulting character is editorial rather than institutional, playful inside the examples, and restrained in the surrounding chrome.

Catalog utility stays practical inside that expression. Search, collection, and subject controls remain persistent and compact; original HTML sources stay visibly paired with local static and animated SVG interpretations; and native examples and skill-ledger rows expose the work and methods without a marketplace layer.

**Key Characteristics:**

- The artifact is the proof; previews are real evidence, not decoration.
- A quiet field opposes one dense, readable specimen mass.
- Full-width printed category bands turn the collection itself into the visual rhythm.
- Warm paper, dark stock, and saturated printed fields remain materially distinct.
- Variable grotesk type carries both the bold thesis and practical reading experience.
- The Catalog may be expressive, while the Guide remains familiar enough for sustained reading.

## Colors

The palette starts with Ink and warm Paper, then treats cobalt, lilac, green, pink, and coral as flat printed inks with specific jobs.

### Primary

- **Structural Cobalt:** Carries technical emphasis, structure, active guide links, the large browser specimen field, and the Exploration and Decks catalog bands.
- **Action Green:** Marks true actions, enabled state, progress, the primary guide button, and the Design and Reports catalog bands; its brighter companion is reserved for hover.

### Secondary

- **Exploratory Lilac:** Signals alternate possibilities, interaction surfaces, text selection, the shared visible focus outline, and the Review and Research catalog bands.
- **Human Pink:** Adds warmth to specimen geometry and owns the Prototyping and Editors catalog bands rather than generic site chrome.

### Tertiary

- **Registry Coral:** A small editorial registration color for annotations and moments that need attention, expanding to the full-width Diagrams catalog band when the subject owns the field.

### Neutral

- **Working Ink:** The Catalog field, primary text on paper, code-like stock, rules, and diagram geometry.
- **Soft Ink:** The dark secondary surface used by interaction specimens and dark guide surfaces.
- **Warm Paper:** The signature physical-sheet and specimen material.
- **Bright Paper:** The long-form guide field and high-contrast text on Ink.
- **Muted Paper, Paper Edge, and Line:** The quiet material and rule vocabulary for guide chrome, specimen edges, and separations.
- **Deep Paper:** The slightly darker evidence field behind contained screenshots and animated diagrams.
- **Copy on Paper:** Long supporting copy inside constructed artifact furniture where full Ink would overstate hierarchy.
- **Copy, Muted, and Strong on Ink:** Three verified contrast steps for explanatory copy, metadata, and emphasized secondary text on the dark register.
- **Muted Text:** Supporting copy and metadata in the surrounding guide shell.
- **Studio Tape:** A translucent physical join used only in the authored specimen cluster.

### Named Rules

**The Specimen Ink Rule.** Surrounding chrome uses Ink and Paper; saturated inks belong inside artifacts or as the single full-width field owned by a catalog category, never as generic wrapper chrome.

**The Authored Theme Rule.** The Guide’s dark mode is composed from Ink, Soft Ink, Bright Paper, and Lilac; it is not a mechanical inversion of the light register.

## Typography

**Display Font:** Inter Tight Variable (with Inter Variable and sans-serif fallback)

**Body Font:** Inter Variable (with Inter and sans-serif fallback)

**Label Font:** Inter Tight Variable (with sans-serif fallback)

**Character:** One variable grotesk family provides compressed, forceful display typography and a closely related practical reading voice. Editorial character comes from scale, cropping, rhythm, and contrast—not from introducing a decorative serif.

### Hierarchy

- **Display:** The stacked Effective HTML title and examples hero. Keep it very heavy, tightly tracked, short, and deliberately broken.
- **Headline:** Oversized editorial section theses on Ink and Paper fields and short category names on printed catalog bands.
- **Title:** Artifact names, use-case labels, and compact section entries.
- **Body:** Reading copy, explanations, captions, and Fumadocs prose; keep long-form text near the implemented 72-character measure.
- **Label:** Buttons, text links, navigation, and compact metadata.
- **Body Small:** Explanatory interface copy on dense catalog and sequence surfaces.
- **Label Compact:** Space-constrained controls and artifact actions; never long prose.
- **Caption:** Counts, provenance, evidence labels, and compact descriptions.
- **Micro:** Recording metadata and dense specimen annotations only; it is not a navigation or body size.

### Named Rules

**The Exact Grotesk Rule.** Inter Tight Variable carries the thesis and decisive controls; Inter Variable carries reading and interface copy. Do not add a serif merely to make the system look editorial.

**The Short Heavy Rule.** Display weights belong to short statements with authored line breaks, never to paragraphs or dense navigation.

## Layout

The main editorial canvas is fluid up to 90rem, with 2rem desktop gutters. The landing page’s first viewport uses a true five-to-seven split: a left title and action field faces one right-hand specimen stack. The title column stays quiet; the specimen column is dense but reads as a single mass with a dominant browser, rear wireframe, narrow dark interaction surface, diagram sheet, and implementation strip.

The dedicated Catalog route uses a compact three-part Ink hero: title and route action, a real five-sheet SVG folio, and a ruled subject index with counts. Its sticky utility rail contains one collection choice, the relevant SVG preview choice, the Expanded/Compact presentation choice, and a live result count. Subject wayfinding belongs to the hero index rather than a second filter system. Below it, each category owns a full-width cobalt, lilac, green, pink, or coral band. A narrow label rail faces a 12-column specimen field whose Bright Paper sheets take unequal spans and staggered vertical starts.

Catalog behavior resolves at three implemented thresholds. At 1180px the subject index becomes a three-column ruled guide beneath the title/folio pair, controls reflow to two columns, and each band header becomes a horizontal rail. At 820px the hero, controls, band header, specimen field, worked examples, and source notes stack; the presentation choice precedes the more specialized SVG-preview choice and gutters reduce to 1rem. At 640px a URL with no explicit view opens Compact while desktop remains Expanded. At 540px the hero folio reduces from five visible sheets to four, the subject guide becomes one complete-label column, the filter rail returns to normal document flow, specimen actions stack, and skill-ledger actions become a single-column sequence. The broader landing page still compresses at 1120px, stacks at 900px, and reaches its narrow state at 640px. The Guide keeps Fumadocs’ sidebar, search, table of contents, and a prose measure of 72ch so sustained reading remains conventional.

### Named Rules

**The One Anchor Rule.** Keep one quiet field opposite one dense specimen mass; never distribute the hero artifacts as a row of equally important cards.

**The Band Is the Category Rule.** Let category color own the full viewport-width field and vary sheet width and offset inside it; do not reduce the collection to equal cards on a neutral canvas.

**The Useful Familiarity Rule.** Preserve familiar documentation behavior even when the surrounding materials and typography carry the Working Atlas identity.

## Elevation & Depth

Depth comes from overlap, tonal contrast, one-pixel printed edges, and a small shadow vocabulary. Folio specimens on Ink use a strong physical-sheet shadow (`0 18px 38px rgba(0, 0, 0, 0.34)`); category specimens use softer Ink shadows around 20% opacity and lift slightly on hover. Native worked examples return to the stronger dark-field shadow because they sit on Ink. The mobile navigation panel uses the same dark-field family rather than inventing another elevation tier.

Paper tooth is a fine radial texture applied to material surfaces at very low opacity. Saturated color blocks, text, controls, and diagram lines stay crisp. There are no gradients, glass layers, glow, or glossy depth effects in the implemented system.

### Shadow Vocabulary

- **Specimen Lift** (`0 18px 38px rgba(0, 0, 0, 0.34)`): Physical separation for layered specimens on the Catalog’s Ink field.
- **Menu Lift** (`0 18px 36px rgba(0, 0, 0, 0.34)`): The compact mobile navigation panel.
- **Paper Sheet** (`0 18px 32px rgba(20, 20, 19, 0.20)`): Constructed artifact surfaces over warm paper.
- **Example Frame** (`0 18px 34px rgba(20, 20, 19, 0.20)`): Inspectable screenshots and embedded examples.
- **Catalog Specimen Hover** (`0 24px 38px rgba(20, 20, 19, 0.25)`): The small upward response of a Bright Paper catalog sheet.
- **Catalog Native Frame** (`0 18px 34px rgba(0, 0, 0, 0.34)`): Same-origin worked examples on the Catalog’s Ink section.

### Named Rules

**The Physical Separation Rule.** Add depth only where one authored sheet visibly sits over another; flat controls and guide surfaces stay flat.

## Shapes

The form language comes from browser windows, paper sheets, compact controls, and diagram notation. Sheets and artifact features use small, nearly square corners; specimen browsers and example frames are gently rounded; true toggles, status dots, and icon buttons may be circular or pill-shaped. Segmented controls clip their children into a compact control edge, so keyboard focus is drawn inside the clipped boundary rather than outside it. One-pixel rules define frames and hierarchy, while triangles, squares, and circles distinguish specimen layers.

Rotation is bounded to the specimen composition and real example frames. Tape appears as a single translucent join. Navigation, buttons, form controls, and prose containers remain level and exact.

### Named Rules

**The Bounded Imperfection Rule.** Rotation, tape, and paper tooth belong at the perimeter of authored artifacts, never on reading text, navigation, or ordinary controls.

**The No Soft SaaS Rule.** Use the shipped small-corner vocabulary; do not turn sections into large, interchangeable rounded containers.

## Motion

Motion is a state explanation, not ambient decoration. Fast 160ms movement belongs to arrows, underlines, and compact control feedback. A 240ms expressive ease is reserved for a single preview image responding to hover. The 420ms fold curve belongs only to the explicit Expanded/Compact catalog mode change and its View Transition. Artifact SVGs may animate because motion is the content being cataloged; the surrounding site does not autoplay decorative choreography.

Reduced motion preserves every selected state, spatial hierarchy, and direct link while removing authored transitions. Component-level static alternatives take precedence over a global duration kill.

### Named Rules

**The Motion Explains State Rule.** Motion must clarify a user-triggered state change or be the artifact under inspection; otherwise keep the surface still.

## Components

### Buttons

Buttons are compact, exact, and action-led, with a 3rem minimum height and shared Inter Tight label treatment.

- **Primary:** Action Green with Working Ink text; used for the Guide action and brightened on hover.
- **Secondary:** Transparent on Ink with a fine Paper border; used for the adjacent examples path.
- **Ink:** Working Ink on Paper; becomes Structural Cobalt on hover.
- **Hover / Focus:** Arrow icons move diagonally by a few pixels over 160ms. All variants use the global 3px Lilac focus outline with a 4px offset.

### Navigation

The Catalog header is a thin Ink rail. Its geometric wordmark uses two Paper blocks and one Green registry block; text links are muted until hover, when a fine Green underline draws from left to right. Search, theme, and source controls remain compact. Below 900px, the navigation becomes a bordered menu control with a Soft Ink panel rather than hiding the core routes.

### Catalog Controls

The controls form one persistent utility rail rather than a floating filter card. Four collection segments—All, References, Hi-fi mockups, and Skills—show a label and tabular count; the selected segment turns Action Green with Working Ink text. The separate presentation group changes Expanded/Compact, while Static/Animated appears only when SVG references are visible. Because segmented wrappers clip overflow, focus uses a 2px inset outline with a -3px offset: Bright Paper on inactive Ink controls and Working Ink on active Green or Lilac segments. At 820px the groups stack with presentation before SVG preview; at 540px counts disappear before labels compress and the rail stops sticking.

### Artifact Links

Artifact links are ruled rows, not cards. A colored circular icon identifies the artifact family, the title and one-sentence decision sit in the center, and the arrow confirms that the whole row opens a deeper guide path.

### Landing Artifact Specimens

The signature specimen family has five distinct silhouettes: rear wireframe sheet, dominant colorful browser, narrow interaction stock, hierarchy diagram, and implementation strip. Their overlap and material differences communicate fidelity; a universal card wrapper would erase that meaning.

### Catalog Category Bands

Each category is a full-width printed-ink section with a compact label rail and one to three staggered Bright Paper sheets. Three-sheet groups use unequal four-, five-, and three-column spans with increasing offsets; two-sheet groups use five- and seven-column spans; a single specimen begins one column in and spans nine. At 820px every group becomes a full-width vertical sequence rather than shrinking the artifacts.

### Catalog Artifact Specimens

Each sheet keeps source and interpretation visibly paired: an attributed original HTML link sits alongside local Static and Animated SVG states. The preview itself opens the currently selected SVG. A compact inset-focus segmented control swaps the local asset, while separate HTML and SVG links preserve provenance and direct inspection. Animated is the intentional initial state so the catalog reveals its motion work without requiring 20 individual activations; Static remains one explicit choice away. All surrounding transitions disappear under reduced motion while the selected representation remains clear.

### Native Worked Examples

Same-origin worked examples appear as large Bright Paper frames on Ink, pairing a real screenshot with fidelity label, explanation, live HTML action, and Guide path. The image or interactive artifact owns the visual weight; the frame is quiet evidence furniture rather than a generic promotional card.

### Skill Ledger

The methods behind the artifacts appear as full-width ruled rows on Warm Paper. A circle, square, triangle, or diamond in one catalog ink marks the method; a large title and concise description carry the center; Guide and Source actions remain explicit at the edge. At narrow widths, identity, copy, and actions stack without losing the rules or source path.

### Guide Shell

The Guide uses the same fonts and colors through Fumadocs’ standard layout. Bright Paper is the reading field, Cobalt is the light-theme link and focus accent, and Lilac takes that role in dark mode. The sidebar receives restrained paper tooth, while prose stays crisp. Chapters follow a reusable evidence rhythm: thesis, one bounded evidence form, interpretation, ruled artifact/source/skill handoff, and a decisive next step. Choosing Fidelity uses an accessible comparison tabset; Why HTML uses a medium comparison; Wireframes, Diagrams, and Plans use single-artifact evidence; Prototypes embeds the live same-origin behavior.

### Named Rules

**The Evidence Rule.** A specimen must reveal a real artifact, the decision it supports, and a direct path to inspect it; decorative card furniture is not a substitute.

## Do's and Don'ts

### Do:

- **Do** make real artifacts the visual proof of major claims.
- **Do** preserve quiet space around one dense, intentionally composed specimen cluster.
- **Do** use the full accent palette inside specimens and full-width category fields, while keeping generic site chrome to Ink and Paper.
- **Do** keep the five-to-seven first-viewport split and the Guide action in the left thesis field on desktop.
- **Do** open the Catalog with a compact title, real SVG folio, and ruled source index before the collection takes over.
- **Do** pair every catalog reference with its original HTML and local static and animated SVG controls.
- **Do** keep collection, representation, presentation, and result count together in the persistent rail through desktop and tablet, while keeping subject wayfinding in the hero index.
- **Do** carry Ink, warm Paper, flat color, fine rules, and specimen geometry into the Guide while preserving familiar reading behavior.
- **Do** keep all controls keyboard reachable, visibly focused, and complete without motion.
- **Do** stack or crop authored specimen layers at narrow widths instead of uniformly shrinking them.

### Don't:

- **Don't** turn the landing page into a dashboard, template marketplace, or uniform card catalog.
- **Don't** collapse catalog category bands into an equal card grid or detach them from their category ink.
- **Don't** replace the warm paper surfaces with generic white or gray cards.
- **Don't** introduce a serif, glass effect, glow, gradient, or neutral SaaS component library.
- **Don't** use robots, brains, code rain, glowing networks, or other generic AI shorthand.
- **Don't** let tape, rotation, texture, or overlap reduce the precision of text and controls.
- **Don't** imply that higher fidelity is always better or that HTML should replace Markdown everywhere.
- **Don't** let visual customization erase Fumadocs’ useful search, navigation, table-of-contents, and reading conventions.
