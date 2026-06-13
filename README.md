## HTML skills for pragmatic visual artifacts



https://github.com/user-attachments/assets/24306977-7f30-44c9-9bff-55f901d557b0

_**Note:** The diagram was made by `Fable 5`, I will create more fable 5 artifacts and add them to the skill folder for smaller models to distill._
[example demo](https://x.com/backnotprop/status/2065479594023829619?s=20)


Focused skills for generating self-contained HTML deliverables with a strong visual bias:

- `html`: an HTML file for whatever you're describing, in the effective HTML style
- `html-diagram`: architecture, stack, and systems understanding rendered as full-screen HTML diagrams with high-quality SVG
- `html-plan`: HTML plan pages in the effective HTML style

<p align="center">
  <a href="https://github.com/backnotprop/plannotator">
    <img src="./star-plannotator.svg" width="340" alt="like this? star Plannotator">
  </a>
</p>
<p align="center">
Render and annotate your HTML with Plannotator (optional): https://github.com/backnotprop/plannotator
</p>

--- 

## Install

```bash
npx skills add plannotator/effective-html
```

List available skills first:

```bash
npx skills add plannotator/effective-html --list
```

Install a specific skill:

```bash
npx skills add plannotator/effective-html --skill html-diagram
npx skills add plannotator/effective-html --skill html-plan
```

### As a Claude Code plugin

This repo is also a [plugin marketplace](https://code.claude.com/docs/en/plugin-marketplaces). Add it and install:

```
/plugin marketplace add plannotator/effective-html
/plugin install plannotator-effective-html@effective-html
```

### As a Codex plugin

```bash
codex plugin marketplace add plannotator/effective-html
codex plugin add plannotator-effective-html@effective-html
```

## Skills

- `html` - Create an HTML file for whatever the user is describing, matching the effective HTML references.
- `html-diagram` - Build full-screen HTML architecture and stack diagrams with SVG-first presentation and minimal prose.
- `html-plan` - HTML plan pages in the effective HTML style.

## Repository Shape

Skills live under `skills/<skill-name>/SKILL.md`. Each skill also bundles a copy of the `html-effectiveness` example corpus under `references/html-effectiveness/` so the examples stay local to the skill.

Credit: this repo bundles and uses the `html-effectiveness` examples by Thariq Shihipar: https://thariqs.github.io/html-effectiveness
