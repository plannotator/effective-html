## HTML skills for pragmatic visual artifacts



https://github.com/user-attachments/assets/24306977-7f30-44c9-9bff-55f901d557b0

_**Note:** The diagram in the video was made by `Fable 5`, I will create more fable 5 artifacts and add them to the skill reference folder for smaller models to distill._


Two focused skills for generating self-contained HTML deliverables with a strong visual bias:

- `html-diagram`: architecture, stack, and systems understanding rendered as full-screen HTML diagrams with high-quality SVG
- `html-plan`: HTML plan pages in the effective HTML style

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

## Skills

- `html-diagram` - Build full-screen HTML architecture and stack diagrams with SVG-first presentation and minimal prose.
- `html-plan` - HTML plan pages in the effective HTML style.

## Repository Shape

Skills live under `skills/<skill-name>/SKILL.md`. Each skill also bundles a copy of the `html-effectiveness` example corpus under `references/html-effectiveness/` so the examples stay local to the skill.

Credit: this repo bundles and uses the `html-effectiveness` examples by Thariq Shihipar: https://thariqs.github.io/html-effectiveness
