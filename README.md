## HTML skills for pragmatic visual artifacts



https://github.com/user-attachments/assets/24306977-7f30-44c9-9bff-55f901d557b0

_**Note:** The diagram was made by `Fable 5`, I will create more fable 5 artifacts and add them to the skill folder for smaller models to distill._
[example demo](https://x.com/backnotprop/status/2065479594023829619?s=20)


One skill for generating self-contained HTML deliverables with a strong visual bias. It routes to the mode that fits the request:

- **Artifact**: an HTML file for whatever you're describing, in the effective HTML style
- **Diagram**: architecture, stack, and systems understanding rendered as a full-screen HTML diagram with high-quality SVG
- **Plan**: an HTML plan page in the effective HTML style, kept close to what you wrote

<p align="center">
  <a href="https://github.com/backnotprop/plannotator">
    <img src="./star-plannotator.svg" width="340" alt="like this? star Plannotator">
  </a>
</p>
<p align="center">
Render and annotate your HTML with Plannotator (optional): https://github.com/backnotprop/plannotator
</p>
<br/>
<p align="center">
  <a href="https://github.com/plannotator/tot">
    <img src="./use-tot.svg" width="300" alt="share your HTML? use tot">
  </a>
</p>

<p align="center">
Create instant share links for your HTML files (optional): https://github.com/plannotator/tot<br/> HTML from video: https://tot.page/0CW7xV96XMxnalrzwRl4eQ
</p>



## Install

```bash
npx skills add plannotator/effective-html
```

List available skills first:

```bash
npx skills add plannotator/effective-html --list
```

Install the skill by name:

```bash
npx skills add plannotator/effective-html --skill effective-html
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

## Skill

`effective-html` reads the request and picks a mode:

- **Artifact** - an HTML file for whatever the user is describing, matching the effective HTML references.
- **Diagram** - a full-screen HTML architecture or stack diagram, SVG-first, minimal prose. Also draws on `references/architecture-example.html`.
- **Plan** - an HTML plan page in the effective HTML style.

## Repository Shape

The skill lives at `skills/effective-html/SKILL.md` and bundles the `html-effectiveness` example corpus under `references/html-effectiveness/`, so the examples stay local to the skill.

Credit: this repo bundles and uses the `html-effectiveness` examples by Thariq Shihipar: https://thariqs.github.io/html-effectiveness
