# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-06-13

### Added
- Claude Code marketplace distribution: root `.claude-plugin/marketplace.json` (install via `/plugin marketplace add azagreev/effective-html`).
- Enriched `.claude-plugin/plugin.json` (version, description, author, keywords, homepage, repository, license); plugin renamed to `effective-html`.
- `docs/installation.md` covering both channels (Claude Code marketplace + skills.sh) and manual install.
- New dark-mode exemplars: `skills/html/references/effective-html-example.html` and `skills/html-plan/references/plan-example.html`; all three SKILL.md now point at a canonical exemplar and carry an explicit Quality-contract checklist (dark mode, reduced-motion, focus-visible, aria-labels, contrast).
- Dependency-free structural test suite `tests/test_structure.py` (manifest integrity, name consistency, dark-mode contract, attribution).
- Repo hygiene: `.gitattributes` (LF normalization), `.gitignore`, `NOTICE` (upstream attribution: backnotprop/plannotator, thariqs/html-effectiveness).

### Changed
- README install instructions corrected to the fork `azagreev/effective-html` npx slug (previously pointed at the upstream org); added marketplace section and upstream attribution.

[0.1.0]: https://github.com/azagreev/effective-html/releases/tag/v0.1.0
