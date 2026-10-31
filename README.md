<p align="center">
  <img src="./assets/effective-html-banner.png" width="1280" alt="Effective HTML by Plannotator — HTML wireframes, mockups, prototypes, charts, and diagrams">
</p>

# Effective HTML

[简体中文](README.zh.md)

Focused agent skills for creating useful, self-contained HTML artifacts, from low-fidelity wireframes to working interactive prototypes.

## Fat artifacts + fat context

Modern models can do a lot. Give them plenty of useful references and use
artifacts to show what you mean. HTML can visualize almost anything, often more
clearly than a wall of text. Your prompt can simply point to the artifacts,
repositories, and folders that carry the context.

> [!NOTE]
> You can use this repo without installing anything. Treat it as a reference
> first and an installable skill collection second. See the
> [Effective HTML guide](https://www.effectivehtml.com/).

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

The repo includes eight optional skills for pragmatic visual artifacts.

| Skill | Use it for |
| --- | --- |
| [`html`](skills/html/SKILL.md) | Broad HTML requests, mixed artifacts, reports, explainers, presentations, landing pages, tools, and routing to a specialist |
| [`big-pics-little-words`](skills/big-pics-little-words/SKILL.md) | Explain the current subject in HTML with large visuals and minimal text while preserving key details; copied from [bro](https://github.com/backnotprop/bro/blob/main/skills/big-pics-little-words/SKILL.md) |
| [`one-pager`](skills/one-pager/SKILL.md) | Make a one-pager: one HTML page that shares an idea with teammates early, or recaps work for them, with big pictures and little words; the same skill is in [bro](https://github.com/backnotprop/bro) |
| [`design-artifact`](skills/design-artifact/SKILL.md) | Subject-specific creative direction for any HTML artifact without imposing a reusable house style |
| [`html-wireframe`](skills/html-wireframe/SKILL.md) | Low-fidelity layout directions that test content, hierarchy, navigation, flows, and responsive structure |
| [`html-prototype`](skills/html-prototype/SKILL.md) | Working prototypes with realistic states, interaction, keyboard support, and responsive behavior |
| [`html-plan`](skills/html-plan/SKILL.md) | Plans, roadmaps, rollouts, and implementation sequences that preserve source commitments |
| [`html-diagram`](skills/html-diagram/SKILL.md) | Architecture, sequence, process, state, hierarchy, timeline, and system diagrams |

Practical guide: [HTML Wireframes and Prototypes for Coding Agents](https://docs.plannotator.ai/learn/code-context/html-wireframes-and-prototypes-for-coding-agents).

## Install

Install the collection when you want these references available to your agent as
reusable workflows:

```bash
npx skills add plannotator/effective-html
```

List or install individual skills:

```bash
npx skills add plannotator/effective-html --list
npx skills add plannotator/effective-html --skill big-pics-little-words
npx skills add plannotator/effective-html --skill one-pager
npx skills add plannotator/effective-html --skill design-artifact
npx skills add plannotator/effective-html --skill html-wireframe
npx skills add plannotator/effective-html --skill html-prototype
```

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

This project was inspired by Thariq Shihipar's [The unreasonable effectiveness of HTML](https://thariqs.github.io/html-effectiveness).

<p align="center">
  <a href="https://github.com/plannotator/tot">
    <img src="./use-tot.svg" width="300" alt="Share HTML with tot">
  </a>
</p>
<p align="center">
Create a shareable link for an HTML file with <a href="https://github.com/plannotator/tot">tot</a>.
</p>
