<p align="center">
  <img src="./assets/effective-html-banner.png" width="1280" alt="Effective HTML by Plannotator — HTML wireframes, mockups, prototypes, charts, and diagrams">
</p>

# Effective HTML

Effective HTML is a field guide and reference collection for creating useful,
self-contained HTML artifacts with agents.

## Fat artifacts + fat context

A **fat artifact** carries the working detail: structure, visuals, states,
interactions, annotations, and evidence. **Fat context** gives the agent the
source material it needs to understand the real problem: the brief, code,
constraints, examples, and accepted decisions. The prompt and skills can stay
thin because the context and the artifact do the work.

> [!NOTE]
> You can use this repo without installing anything. Treat it as a reference
> first and an installable skill collection second. Read the patterns, borrow
> what fits, and ask your agent for the artifact directly. Install a skill only
> when you want a recurring workflow or shared defaults.

https://github.com/user-attachments/assets/24306977-7f30-44c9-9bff-55f901d557b0

<p align="center">
  <a href="https://github.com/backnotprop/plannotator">
    <img src="./star-plannotator.svg" width="340" alt="Star Plannotator on GitHub">
  </a>
</p>
<p align="center">
Render and annotate local HTML with <a href="https://github.com/backnotprop/plannotator">Plannotator</a>.
</p>

## Skill references

The repo includes six optional skills for pragmatic visual artifacts.

| Skill | Use it for |
| --- | --- |
| [`html`](skills/html/SKILL.md) | Broad HTML requests, mixed artifacts, reports, explainers, presentations, landing pages, tools, and routing to a specialist |
| [`design-artifact`](skills/design-artifact/SKILL.md) | Subject-specific creative direction for any HTML artifact without imposing a reusable house style |
| [`html-wireframe`](skills/html-wireframe/SKILL.md) | Low-fidelity layout directions that test content, hierarchy, navigation, flows, and responsive structure |
| [`html-prototype`](skills/html-prototype/SKILL.md) | Working prototypes with realistic states, interaction, keyboard support, and responsive behavior |
| [`html-plan`](skills/html-plan/SKILL.md) | Plans, roadmaps, rollouts, and implementation sequences that preserve source commitments |
| [`html-diagram`](skills/html-diagram/SKILL.md) | Architecture, sequence, process, state, hierarchy, timeline, and system diagrams |

Visit: <a href="https://www.effectivehtml.com/">Effective HTML Website/Guide</a> for more details.


## Install

Install the collection when you want these references available to your agent as
reusable workflows:

```bash
npx skills add plannotator/effective-html
```

List or install individual skills:

```bash
npx skills add plannotator/effective-html --list
npx skills add plannotator/effective-html --skill design-artifact
npx skills add plannotator/effective-html --skill html-wireframe
npx skills add plannotator/effective-html --skill html-prototype
```

Invoke a skill directly:

```text
Use $html-wireframe to explore three responsive layouts for this checkout brief.

Use $html-prototype to make the checkout flow work, including validation, loading, failure, success, keyboard, and mobile states.

Use $design-artifact with $html-diagram to give this architecture explainer a visual direction rooted in the system it describes.
```

`$html` can route a broad request, while `$design-artifact` can supply creative direction across artifact types. Call a specialist directly when you know the artifact type. Each specialist remains independently usable when invoked directly.

### Claude Code plugin

```text
/plugin marketplace add plannotator/effective-html
/plugin install plannotator-effective-html@effective-html
```

### Codex plugin

```bash
codex plugin marketplace add plannotator/effective-html
codex plugin add plannotator-effective-html@effective-html
```

## How the skills work

The skills separate creative freedom from reliability:

- Visual direction comes from the conversation, project, audience, and subject.
- `design-artifact` provides a reusable design process without prescribing a reusable look.
- Wireframes stay intentionally unfinished so reviewers focus on structure.
- Prototypes implement one credible flow and its relevant states.
- Plans preserve source commitments.
- Diagrams choose a visual model and rendering method that fit the relationship being explained.
- Every artifact is responsive, accessible, self-contained, and verified in a browser.

Detailed guidance lives only where it is needed. The broad `html` skill routes the work, `design-artifact` supplies optional creative direction, and specialist skills own fidelity and behavior. Each skill remains independently usable.

## Repository shape

```text
skills/
├── html/
│   ├── SKILL.md
│   ├── agents/openai.yaml
│   └── references/
├── design-artifact/
├── html-wireframe/
├── html-prototype/
├── html-plan/
└── html-diagram/

examples/
└── release-readiness/
    ├── brief.md
    ├── states.md
    ├── wireframe.html
    ├── prototype.html
    └── screenshots/

site/
├── app/          # Next.js routes
├── content/docs/ # Fumadocs guide
└── public/       # Deployed catalog artifacts
```

The installable skills and their examples stay at the repository root. The
website is isolated under `site/` and deployed from that directory.

This project was inspired by Thariq Shihipar's [The unreasonable effectiveness of HTML](https://thariqs.github.io/html-effectiveness).

<p align="center">
  <a href="https://github.com/plannotator/tot">
    <img src="./use-tot.svg" width="300" alt="Share HTML with tot">
  </a>
</p>
<p align="center">
Create a shareable link for an HTML file with <a href="https://github.com/plannotator/tot">tot</a>.
</p>
