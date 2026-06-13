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

## Install via Claude Code marketplace

```bash
/plugin marketplace add azagreev/effective-html
/plugin install effective-html@effective-html
```

In Cowork: **Customize → Browse plugins → Personal → + → Add marketplace from GitHub → `azagreev/effective-html`**, then install the **effective-html** plugin.

See [docs/installation.md](docs/installation.md) for all install channels (Claude Code / Cowork, skills.sh, and manual copy), plus verify and uninstall steps.

## Install via skills.sh

```bash
npx skills add azagreev/effective-html
```

List available skills first:

```bash
npx skills add azagreev/effective-html --list
```

Install a specific skill:

```bash
npx skills add azagreev/effective-html --skill html-diagram
npx skills add azagreev/effective-html --skill html-plan
```

## Skills

- `html` - Create an HTML file for whatever the user is describing, matching the effective HTML references.
- `html-diagram` - Build full-screen HTML architecture and stack diagrams with SVG-first presentation and minimal prose.
- `html-plan` - HTML plan pages in the effective HTML style.

## Repository Shape

Skills live under `skills/<skill-name>/SKILL.md`. Each skill also bundles a copy of the `html-effectiveness` example corpus under `references/html-effectiveness/` so the examples stay local to the skill.

## Attribution

- Fork origin: [backnotprop/plannotator](https://github.com/backnotprop/plannotator).
- Bundled example corpus: this repo bundles and uses the `html-effectiveness` examples by Thariq Shihipar — https://thariqs.github.io/html-effectiveness ([thariqs/html-effectiveness](https://github.com/thariqs/html-effectiveness)).
