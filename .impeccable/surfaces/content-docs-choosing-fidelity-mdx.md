---
version: 1
slug: "content-docs-choosing-fidelity-mdx"
primary_target: "content/docs/choosing-fidelity.mdx"
related_targets: ["components/guide-evidence.tsx", "components/mdx.tsx", "app/global.css"]
---

# Evidence-led guide chapter pattern

## Job and audience

Choosing Fidelity is a Read-mode chapter for developers working with coding agents who know they need something more useful than prose but have not yet chosen the right artifact form. The chapter must help them select the lowest fidelity that answers the next human decision without turning the guide into a catalog or a component demo.

## Outcome and proof

The reader should leave able to distinguish wireframe, mockup, prototype, diagram, and plan by the decision each one supports. The proof is one bounded interactive evidence bench using real Effective HTML artifacts: the release-readiness wireframe and prototype, a shipped product-interface study, the request-path diagram, and the implementation-plan reference. Switching the selected form must change the visible artifact, the decision it supports, the evidence it adds, and the signal to stop.

Every evidence-led chapter ends with the same three-part handoff:

1. **Open artifact** — inspect the real rendered work.
2. **Inspect source** — open the relevant skill or source material.
3. **Use the skill** — continue into the practical method.

One final next-chapter link preserves the reading path.

## Selected direction

Use a single wide Working Atlas evidence sheet embedded inside the calm Fumadocs reading column. A narrow ruled selector names the artifact forms; one dominant preview and one concise decision ledger change together. The composition should feel like evidence laid on a reading desk, not a row of equal feature cards. Warm Paper carries the preview, Ink carries the decision ledger, and the existing cobalt, lilac, green, pink, and coral inks identify the selected form.

Choosing Fidelity is the interactive pilot. The reusable chapter shell must also support paired comparisons and single inspectable artifacts so later chapters can choose the medium that matches their lesson instead of repeating the same tabbed widget everywhere.

## Scope and boundaries

- Production-ready responsive chapter component within the existing Fumadocs route.
- Reuse only truthful, already-shipped assets and links; do not fabricate product behavior or examples.
- Preserve the standard guide title, description, sidebar, search, table of contents, and readable prose measure.
- Do not restyle the guide into the catalog, add a second page hero, or turn chapters into equal card grids.
- Do not autoplay media. Respect reduced motion and keep the selected state understandable without animation or color alone.
- Keep each chapter to one primary evidence moment. Supporting links belong in the handoff, not scattered throughout the prose.

## States and ranges

- Five fidelity choices in the pilot; one selected at a time with Wireframe as the initial state.
- Complete labels at every width; on mobile the selector becomes a horizontally scrollable tablist with the selected tab brought into view while the document remains overflow-free.
- Keyboard behavior follows tabs: Arrow Left/Right, Home, End, Enter/Space, visible focus, and `aria-selected` state.
- Assets use descriptive alternatives. Interactive meaning remains available in adjacent text.
- Narrow layouts stack preview, ledger, and handoff actions. Desktop keeps preview and ledger visible together.

## Reusable chapter sequence

1. Standard Fumadocs title and description.
2. Short thesis naming the decision.
3. One `GuideEvidence` moment in interactive, comparison, or single-artifact mode.
4. Interpretation: what the evidence changes and what it deliberately leaves unresolved.
5. `GuideHandoff`: Open artifact, Inspect source, Use the skill.
6. `GuideNext`: one named next chapter and the reason to continue.

## Confirmed implementation consequence

The previous critique and approved remediation sequence settle the product choices: Choosing Fidelity is the representative pilot; evidence format is chosen deliberately by chapter; and the current Working Atlas visual authority remains binding. No additional user decision is required before implementation.
