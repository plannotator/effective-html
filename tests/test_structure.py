"""Structural integrity tests for the effective-html plugin repo.

Run from the repo root:
    python -m unittest discover -s tests

All paths are resolved relative to the tests/ directory so the suite is
CWD-independent.
"""

import json
import re
import unittest
from pathlib import Path

# Repo root is the parent of the tests/ directory.
REPO = Path(__file__).resolve().parents[1]

PLUGIN_JSON = REPO / ".claude-plugin" / "plugin.json"
MARKETPLACE_JSON = REPO / ".claude-plugin" / "marketplace.json"
SKILLS_SH_JSON = REPO / "skills.sh.json"

EXPECTED_SKILLS = {"html", "html-diagram", "html-plan"}

EXEMPLAR_FILENAMES = {
    "html": "effective-html-example.html",
    "html-plan": "plan-example.html",
    "html-diagram": "architecture-example.html",
}

DARK_MODE_REQUIRED = {
    "prefers-color-scheme",
    "localStorage",
}
DARK_MODE_INDICATORS = {
    "html.dark",
    "classList.toggle",
    "data-theme",
    "toggleTheme",
}


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _load_json(path: Path) -> object:
    with path.open(encoding="utf-8") as fh:
        return json.load(fh)


def _read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def _parse_frontmatter(path: Path) -> dict:
    """Return a dict of key: value from the leading --- ... --- block.

    Uses a simple line scan — no yaml dependency.
    """
    result = {}
    text = _read_text(path)
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return result
    for line in lines[1:]:
        if line.strip() == "---":
            break
        if ":" in line:
            key, _, value = line.partition(":")
            result[key.strip()] = value.strip()
    return result


def _html_files_under(directory: Path):
    """Yield all .html files under *directory* recursively."""
    return list(directory.rglob("*.html"))


# ---------------------------------------------------------------------------
# Tests
# ---------------------------------------------------------------------------

class TestRepoStructure(unittest.TestCase):

    # T1 ----------------------------------------------------------------
    def test_t1_all_three_manifests_parse_as_valid_json(self):
        """plugin.json, marketplace.json, and skills.sh.json are valid JSON."""
        for path in (PLUGIN_JSON, MARKETPLACE_JSON, SKILLS_SH_JSON):
            with self.subTest(file=path.name):
                self.assertTrue(
                    path.exists(),
                    f"Manifest file not found: {path}",
                )
                try:
                    _load_json(path)
                except json.JSONDecodeError as exc:
                    self.fail(f"{path.name} is not valid JSON: {exc}")

    # T2 ----------------------------------------------------------------
    def test_t2_plugin_name_consistent_across_manifests(self):
        """plugin.json['name'] == marketplace.json['plugins'][0]['name'] == 'effective-html'."""
        plugin = _load_json(PLUGIN_JSON)
        market = _load_json(MARKETPLACE_JSON)

        plugin_name = plugin.get("name")
        marketplace_name = market.get("plugins", [{}])[0].get("name")

        self.assertEqual(
            plugin_name,
            "effective-html",
            f"plugin.json name is '{plugin_name}', expected 'effective-html'",
        )
        self.assertEqual(
            marketplace_name,
            "effective-html",
            f"marketplace.json plugins[0].name is '{marketplace_name}', expected 'effective-html'",
        )
        self.assertEqual(
            plugin_name,
            marketplace_name,
            "plugin.json name and marketplace.json plugins[0].name do not match",
        )

    # T3 ----------------------------------------------------------------
    def test_t3_plugin_skills_entries_resolve_to_dirs_with_skill_md(self):
        """Every entry in plugin.json['skills'] resolves to a dir containing SKILL.md."""
        plugin = _load_json(PLUGIN_JSON)
        skills_entries = plugin.get("skills", [])
        self.assertTrue(skills_entries, "plugin.json['skills'] is empty")

        for entry in skills_entries:
            skill_dir = (REPO / entry).resolve()
            with self.subTest(entry=entry):
                self.assertTrue(
                    skill_dir.is_dir(),
                    f"skills entry '{entry}' does not resolve to a directory: {skill_dir}",
                )
                skill_md = skill_dir / "SKILL.md"
                self.assertTrue(
                    skill_md.is_file(),
                    f"SKILL.md not found in {skill_dir}",
                )

    # T4 ----------------------------------------------------------------
    def test_t4_skill_md_frontmatter_has_nonempty_name_and_description(self):
        """Each skills/*/SKILL.md has YAML frontmatter with non-empty name: and description:."""
        for skill_name in EXPECTED_SKILLS:
            skill_md = REPO / "skills" / skill_name / "SKILL.md"
            with self.subTest(skill=skill_name):
                self.assertTrue(
                    skill_md.is_file(),
                    f"SKILL.md not found: {skill_md}",
                )
                fm = _parse_frontmatter(skill_md)
                self.assertIn(
                    "name",
                    fm,
                    f"{skill_md} frontmatter missing 'name:' key",
                )
                self.assertTrue(
                    fm["name"],
                    f"{skill_md} frontmatter 'name:' is empty",
                )
                self.assertIn(
                    "description",
                    fm,
                    f"{skill_md} frontmatter missing 'description:' key",
                )
                self.assertTrue(
                    fm["description"],
                    f"{skill_md} frontmatter 'description:' is empty",
                )

    # T5 ----------------------------------------------------------------
    def test_t5_skill_names_consistent_with_skills_sh_json(self):
        """skills.sh.json grouping skills match plugin.json skill basenames exactly."""
        skills_sh = _load_json(SKILLS_SH_JSON)
        plugin = _load_json(PLUGIN_JSON)

        # Collect all skill names referenced in skills.sh.json groupings
        sh_skills = set()
        for group in skills_sh.get("groupings", []):
            for s in group.get("skills", []):
                sh_skills.add(s)

        # Collect basenames from plugin.json skills paths
        plugin_skill_basenames = {
            Path(entry).name for entry in plugin.get("skills", [])
        }

        self.assertEqual(
            sh_skills,
            EXPECTED_SKILLS,
            f"skills.sh.json groupings skills {sh_skills} != expected {EXPECTED_SKILLS}",
        )
        self.assertEqual(
            plugin_skill_basenames,
            EXPECTED_SKILLS,
            f"plugin.json skill basenames {plugin_skill_basenames} != expected {EXPECTED_SKILLS}",
        )
        self.assertEqual(
            sh_skills,
            plugin_skill_basenames,
            f"skills.sh.json skills {sh_skills} do not match plugin.json basenames {plugin_skill_basenames}",
        )

        # Also verify each referenced skill dir exists
        for skill_name in sh_skills:
            skill_dir = REPO / "skills" / skill_name
            with self.subTest(skill=skill_name):
                self.assertTrue(
                    skill_dir.is_dir(),
                    f"Skill directory not found: {skill_dir}",
                )

    # T6 ----------------------------------------------------------------
    def test_t6_each_skill_has_nonempty_html_effectiveness_references_dir(self):
        """Each of the three skills has a non-empty references/html-effectiveness/ dir (≥1 .html file)."""
        for skill_name in EXPECTED_SKILLS:
            refs_dir = REPO / "skills" / skill_name / "references" / "html-effectiveness"
            with self.subTest(skill=skill_name):
                self.assertTrue(
                    refs_dir.is_dir(),
                    f"references/html-effectiveness/ dir not found for skill '{skill_name}': {refs_dir}",
                )
                html_files = _html_files_under(refs_dir)
                self.assertGreater(
                    len(html_files),
                    0,
                    f"references/html-effectiveness/ for skill '{skill_name}' contains no .html files",
                )

    # T7 ----------------------------------------------------------------
    def test_t7_marketplace_json_source_and_category(self):
        """marketplace.json plugins[0].source == '.' and category is a non-empty string."""
        market = _load_json(MARKETPLACE_JSON)
        plugin_entry = market.get("plugins", [{}])[0]

        self.assertEqual(
            plugin_entry.get("source"),
            ".",
            f"marketplace.json plugins[0].source is '{plugin_entry.get('source')}', expected '.'",
        )
        category = plugin_entry.get("category", "")
        self.assertIsInstance(
            category,
            str,
            "marketplace.json plugins[0].category is not a string",
        )
        self.assertTrue(
            category,
            "marketplace.json plugins[0].category is empty",
        )

    # T8 ----------------------------------------------------------------
    def test_t8_no_tracked_text_file_contains_stale_plannotator_npx_path(self):
        """No *.md or *.json file under the repo contains the stale string 'plannotator/effective-html'."""
        stale = "plannotator/effective-html"
        offending = []

        for pattern in ("**/*.md", "**/*.json"):
            for path in REPO.rglob(pattern.lstrip("**/")):
                # Skip .git directory
                if ".git" in path.parts:
                    continue
                try:
                    text = _read_text(path)
                except (OSError, PermissionError):
                    continue
                if stale in text:
                    offending.append(str(path.relative_to(REPO)))

        self.assertFalse(
            offending,
            f"Stale string '{stale}' found in: {offending}",
        )

    # T9 ----------------------------------------------------------------
    def test_t9_dark_mode_contract_in_references(self):
        """For each skill, at least one .html file under references/ contains the full dark-mode contract."""
        for skill_name in EXPECTED_SKILLS:
            refs_dir = REPO / "skills" / skill_name / "references"
            with self.subTest(skill=skill_name):
                self.assertTrue(
                    refs_dir.is_dir(),
                    f"references/ dir not found for skill '{skill_name}': {refs_dir}",
                )
                html_files = _html_files_under(refs_dir)
                self.assertGreater(
                    len(html_files),
                    0,
                    f"No .html files found under references/ for skill '{skill_name}'",
                )

                found_compliant = False
                for html_path in html_files:
                    try:
                        content = _read_text(html_path)
                    except (OSError, PermissionError):
                        continue

                    has_required = all(token in content for token in DARK_MODE_REQUIRED)
                    has_indicator = any(token in content for token in DARK_MODE_INDICATORS)

                    if has_required and has_indicator:
                        found_compliant = True
                        break

                self.assertTrue(
                    found_compliant,
                    (
                        f"No .html file under skills/{skill_name}/references/ satisfies the "
                        f"dark-mode contract (must contain ALL of {DARK_MODE_REQUIRED} "
                        f"and at least one of {DARK_MODE_INDICATORS})"
                    ),
                )

    # T10 ---------------------------------------------------------------
    def test_t10_skill_md_mentions_canonical_exemplar_filename(self):
        """Each SKILL.md mentions the canonical exemplar filename for its skill."""
        for skill_name, exemplar in EXEMPLAR_FILENAMES.items():
            skill_md = REPO / "skills" / skill_name / "SKILL.md"
            with self.subTest(skill=skill_name):
                self.assertTrue(
                    skill_md.is_file(),
                    f"SKILL.md not found: {skill_md}",
                )
                content = _read_text(skill_md)
                self.assertIn(
                    exemplar,
                    content,
                    f"skills/{skill_name}/SKILL.md does not mention exemplar '{exemplar}'",
                )

    # T11 ---------------------------------------------------------------
    def test_t11_plugin_json_has_required_metadata_fields(self):
        """plugin.json contains non-empty version, description, author, keywords, homepage, repository, license."""
        plugin = _load_json(PLUGIN_JSON)
        required_fields = ["version", "description", "author", "keywords", "homepage", "repository", "license"]

        for field in required_fields:
            with self.subTest(field=field):
                value = plugin.get(field)
                self.assertIsNotNone(
                    value,
                    f"plugin.json missing field '{field}'",
                )
                # For lists and dicts, check non-empty; for strings, check truthy
                if isinstance(value, (list, dict)):
                    self.assertTrue(
                        value,
                        f"plugin.json field '{field}' is empty",
                    )
                else:
                    self.assertTrue(
                        str(value).strip(),
                        f"plugin.json field '{field}' is empty or blank",
                    )

    # T12 ---------------------------------------------------------------
    def test_t12_readme_and_installation_md_contain_required_strings(self):
        """README.md and docs/installation.md reference the install slug and repo; NOTICE+README credit upstream authors."""
        readme = REPO / "README.md"
        installation = REPO / "docs" / "installation.md"
        notice = REPO / "NOTICE"

        install_slug = "effective-html@effective-html"
        repo_slug = "azagreev/effective-html"

        for path in (readme, installation):
            with self.subTest(file=path.name, check="install_slug"):
                self.assertTrue(path.is_file(), f"File not found: {path}")
                content = _read_text(path)
                self.assertIn(
                    install_slug,
                    content,
                    f"{path.name} does not contain install slug '{install_slug}'",
                )
            with self.subTest(file=path.name, check="repo_slug"):
                content = _read_text(path)
                self.assertIn(
                    repo_slug,
                    content,
                    f"{path.name} does not contain repo slug '{repo_slug}'",
                )

        # Upstream credits in NOTICE and README (case-insensitive for flexibility)
        upstream_credits = [
            ("plannotator", "backnotprop"),
            ("thariqs", "html-effectiveness"),
        ]
        for credit_path in (notice, readme):
            with self.subTest(file=credit_path.name, check="upstream_credits"):
                self.assertTrue(credit_path.is_file(), f"File not found: {credit_path}")
                content_lower = _read_text(credit_path).lower()
                for term_a, term_b in upstream_credits:
                    with self.subTest(file=credit_path.name, credit=f"{term_a}/{term_b}"):
                        found = term_a.lower() in content_lower or term_b.lower() in content_lower
                        self.assertTrue(
                            found,
                            (
                                f"{credit_path.name} does not mention upstream credit "
                                f"'{term_a}' or '{term_b}'"
                            ),
                        )

    # T13 ---------------------------------------------------------------
    def test_t13_license_and_notice_contain_author_name(self):
        """LICENSE and NOTICE both contain 'Andrey Zagreev'."""
        author = "Andrey Zagreev"
        for path in (REPO / "LICENSE", REPO / "NOTICE"):
            with self.subTest(file=path.name):
                self.assertTrue(
                    path.is_file(),
                    f"File not found: {path}",
                )
                content = _read_text(path)
                self.assertIn(
                    author,
                    content,
                    f"{path.name} does not contain author name '{author}'",
                )


if __name__ == "__main__":
    unittest.main()
