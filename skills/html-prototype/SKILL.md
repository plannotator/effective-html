---
name: html-prototype
description: Direct-invocation specialist for polished, responsive, self-contained HTML mockups and interactive prototypes grounded in the user's conversation, product context, and design language. Use when the user explicitly invokes html-prototype or the broad html skill routes a mockup or prototype request here. Do not activate independently from a general request. Treat a mockup as a noninteractive fidelity mode within this skill, not as a separate skill.
---

# HTML Prototype

Build a credible model of a product decision. Match the artifact to the user's context instead of applying a recurring house style. The goal is not to make every possible screen. The goal is to make the important visual or behavioral question testable.

## Choose the fidelity mode

Use one of two modes:

- **Mockup:** Create a polished, responsive, mostly static artifact when the open question is visual hierarchy, layout, typography, color, or product fit.
- **Prototype:** Create a working flow when the open question is navigation, input, state change, feedback, recovery, or transition.

Do not create a separate `html-mockup` skill. Do not add behavior merely to make a mockup seem more complete. If a user asks for both modes, preserve the same content and structure so changes in fidelity remain easy to compare.

## Derive the direction from context

Inspect the conversation, supplied references, and project before designing. Look for design-system documentation, tokens, existing components, product screenshots, and nearby artifacts.

Authority runs in this order:

1. The user's explicit visual and functional instructions.
2. The project's established design language and interaction conventions.
3. The product, audience, content, and scenario.
4. Your own design judgment.

Before coding, settle:

- the user and critical job;
- the bounded scenario under review;
- mockup or prototype mode;
- the source of the visual direction;
- the relevant state model;
- the point where the real product would take over.

When no design system exists, create a specific direction from the subject and use case. Do not default to a gradient, a dark dashboard, interchangeable cards, or decorative metrics. A prototype for a field tool, an editorial workflow, and a financial approval should not feel like the same product.

When [`design-artifact`](../design-artifact/SKILL.md) is available and the visual
direction remains open, read and compose it with this skill. Use it to choose
the register, palette, type, and composition; keep this skill authoritative for
fidelity, state, and interaction completeness.

## Scope one credible experience

Choose the smallest flow that can answer the review question. Use realistic, internally consistent names, dates, statuses, quantities, and copy.

- Make navigation work for the modeled scope.
- Implement forms with labels, validation, submission feedback, and sensible defaults.
- Use dialogs only when interruption or confirmation is part of the scenario.
- Use transitions to clarify continuity or state change, not as decoration.
- Remove dead buttons. If an action belongs to the real system, explain the boundary instead of pretending it completed.

## Model relevant states

List the states before building. Include the states that the chosen scenario can actually reach:

- loading;
- empty;
- error;
- success;
- disabled;
- mobile;
- domain-specific states from the brief.

An asynchronous-looking prototype action should normally show loading, success, and failure or recovery. A collection should normally consider empty state. A gated action should show why it is disabled. Do not force irrelevant states into the main flow just to satisfy a checklist. Make omitted states explicit in the handoff.

## Make interaction complete

- Use native elements when they provide the right semantics.
- Support the entire modeled flow with a keyboard.
- Keep focus visible and place it deliberately after meaningful transitions.
- Give dialogs an accessible name, contain focus, close on `Escape`, and restore focus to the trigger.
- Associate form errors with their controls and announce important status changes.
- Do not hide essential behavior behind hover.
- Respect `prefers-reduced-motion` while preserving state feedback.
- Make touch targets usable and prevent accidental page-level horizontal overflow.

In mockup mode, preserve semantic structure and visible focus styles even if the controls are not wired. Make the static review boundary clear.

## Build contract

- Deliver one self-contained `.html` file with essential CSS and JavaScript inline.
- Require no build tooling, authentication, live API, or external service.
- Use a responsive composition rather than shrinking a desktop canvas.
- Keep design tokens small and specific to the chosen direction.
- Use accessible contrast and more than color alone to communicate state.
- Prefer depth and correctness in one flow over breadth across a fake product.

## Verify and hand off

Test the artifact at wide desktop and narrow mobile widths. Exercise every modeled state and control. Test `Tab`, `Shift+Tab`, `Enter`, `Space`, arrow keys where appropriate, and `Escape` for dialogs. Check the console, page overflow, long content, disabled behavior, focus restoration, and reduced-motion mode.

Inspect computed foreground and background colors on every distinct surface, especially text that may inherit the body color inside a dark or tinted region. If browser tooling is unavailable, say which visual and interaction checks remain unverified instead of treating source inspection as a substitute.

Return the absolute file path, the fidelity mode, the scenario modeled, the states implemented, and the production behavior deliberately left out.

## Further reading

Read Plannotator's [HTML wireframes and prototypes for coding agents](https://docs.plannotator.ai/learn/code-context/html-wireframes-and-prototypes-for-coding-agents) for guidance on moving from an approved structure to a mockup or working prototype.
