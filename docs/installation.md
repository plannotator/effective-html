# Installation — effective-html

These skills ship two ways: as a **Claude Code plugin** (a GitHub marketplace) and as **skills.sh skills** you can pull into any project. The bundle contains three skills: `html`, `html-diagram`, and `html-plan`.

Both channels stay prominent — pick whichever fits your setup.

---

## Channel 1: Claude Code / Cowork — plugin marketplace (recommended)

### Cowork (GUI, no files)

1. Open **Customize** (bottom-left).
2. **Browse plugins → Personal → +**.
3. **Add marketplace from GitHub**.
4. Enter: `azagreev/effective-html`.
5. Install the plugin **effective-html** — the three skills connect automatically.

### Claude Code (CLI)

```bash
# 1. Add the marketplace from GitHub
/plugin marketplace add azagreev/effective-html

# 2. Install the plugin (format: <plugin>@<marketplace>)
/plugin install effective-html@effective-html
```

Once installed, `html`, `html-diagram`, and `html-plan` activate automatically when you ask for HTML artifacts, diagrams, or plan pages.

### Local pre-publish check (from a clone)

You can add the marketplace from a local folder — handy before pushing, or to test changes:

```bash
git clone https://github.com/azagreev/effective-html.git
cd effective-html
/plugin marketplace add ./           # path to the folder containing .claude-plugin/marketplace.json
/plugin install effective-html@effective-html
```

> The plugin `source` is `.` (the repo root), so adding the marketplace locally resolves exactly the same way as adding it from GitHub.

---

## Channel 2: skills.sh

Install all three skills into the current project with one command:

```bash
npx skills add azagreev/effective-html
```

List available skills before installing:

```bash
npx skills add azagreev/effective-html --list
```

Install a specific skill only:

```bash
npx skills add azagreev/effective-html --skill html-diagram
npx skills add azagreev/effective-html --skill html-plan
```

---

## Channel 3: Manual copy into the Claude skills dir

Each skill is self-contained under `skills/<skill-name>/`, so you can copy the folders straight into Claude's skills directory:

- **macOS**: `~/Library/Application Support/Claude/skills/`
- **Windows**: `%APPDATA%/Claude/skills/`
- **Linux**: `~/.config/Claude/skills/`

```bash
git clone https://github.com/azagreev/effective-html.git
cd effective-html

# copy each skill folder (Linux path shown; swap for your OS dir above)
cp -r skills/html         ~/.config/Claude/skills/html
cp -r skills/html-diagram ~/.config/Claude/skills/html-diagram
cp -r skills/html-plan    ~/.config/Claude/skills/html-plan
```

On Windows (PowerShell):

```powershell
Copy-Item -Recurse skills\html         "$env:APPDATA\Claude\skills\html"
Copy-Item -Recurse skills\html-diagram "$env:APPDATA\Claude\skills\html-diagram"
Copy-Item -Recurse skills\html-plan    "$env:APPDATA\Claude\skills\html-plan"
```

Each `skills/<name>/` folder bundles its own copy of the `html-effectiveness` example corpus under `references/html-effectiveness/`, so the examples travel with the skill — no extra steps.

Restart Claude after copying.

---

## Verify

Ask in any chat:

```
Make an HTML diagram of a three-tier web app architecture
```

`html-diagram` should activate and produce a full-screen SVG-first HTML diagram. Try `html` for a general artifact and `html-plan` for a plan page.

### If a skill doesn't activate

1. **Claude Code:** run `/plugin` → confirm `effective-html` is installed and enabled; `/reload-plugins` if needed.
2. In `/plugin` → Marketplaces, check the marketplace version matches the latest release (third-party marketplaces do not auto-update).
3. **Manual / skills.sh:** confirm the skill folder exists in your skills dir and contains `SKILL.md`, then restart Claude.

---

## Uninstall

```bash
# Claude Code plugin
/plugin uninstall effective-html@effective-html
/plugin marketplace remove effective-html

# Manual install (Linux path; swap for your OS)
rm -rf ~/.config/Claude/skills/html \
       ~/.config/Claude/skills/html-diagram \
       ~/.config/Claude/skills/html-plan
```

For skills.sh installs, remove the skill folders that `npx skills add` placed in your project's skills directory.

---

## Attribution

- Fork origin: [backnotprop/plannotator](https://github.com/backnotprop/plannotator).
- Bundled example corpus: `html-effectiveness` by Thariq Shihipar — https://thariqs.github.io/html-effectiveness ([thariqs/html-effectiveness](https://github.com/thariqs/html-effectiveness)).
</content>
</invoke>
