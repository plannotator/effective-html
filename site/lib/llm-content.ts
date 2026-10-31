import {
  catalogArtifacts,
  catalogCategories,
  catalogSkills,
  featuredNativeArtifact,
  nativeExamples,
} from "@/lib/catalog-data";
import { source } from "@/lib/source";

const siteOrigin = "https://www.effectivehtml.com";
const guideOrder = [
  "/docs",
  "/docs/why-html",
  "/docs/big-pics-little-words",
  "/docs/one-pager",
  "/docs/designing-artifacts",
  "/docs/choosing-fidelity",
  "/docs/wireframes",
  "/docs/prototypes",
  "/docs/diagrams",
  "/docs/decks",
  "/docs/plans",
];

function absoluteUrl(path: string) {
  return new URL(path, siteOrigin).toString();
}

function markdownLink(label: string, href: string, description: string) {
  return `- [${label}](${absoluteUrl(href)}): ${description}`;
}

function getOrderedGuidePages() {
  return [...source.getPages()].sort((a, b) => {
    const aIndex = guideOrder.indexOf(a.url);
    const bIndex = guideOrder.indexOf(b.url);
    return (
      (aIndex === -1 ? guideOrder.length : aIndex) -
      (bIndex === -1 ? guideOrder.length : bIndex)
    );
  });
}

/** Return Markdown with headers that make the representation explicit to clients. */
export function markdownResponse(markdown: string) {
  return new Response(markdown.trimEnd() + "\n", {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}

/** Return the Markdown representation of a Fumadocs guide page. */
export async function getGuideMarkdown(
  page: (typeof source)["$inferPage"],
) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title}

> ${page.data.description ?? "Effective HTML guide page."}

Human-readable page: ${absoluteUrl(page.url)}

${processed}`;
}

/** Return the Markdown representation of the homepage. */
export function getHomeMarkdown() {
  return `# Effective HTML

> A reference site showcasing visual and interactive HTML artifacts you can create with agents.

Effective HTML is by [Plannotator](https://plannotator.ai).

Human-readable page: ${absoluteUrl("/")}

## What you can make with HTML

- [Wireframes](${absoluteUrl("/docs/wireframes")}): Compare hierarchy, content, navigation, and responsive structure.
- [Mockups](${absoluteUrl("/docs/choosing-fidelity")}): Show how a product could look with realistic content and visual design.
- [Prototypes](${absoluteUrl("/docs/prototypes")}): Try flows, state changes, validation, loading, errors, and success.
- [Diagrams](${absoluteUrl("/docs/diagrams")}): Explain architecture, sequences, state, hierarchy, and flow.
- [Decks](${absoluteUrl("/docs/decks")}): Build browser-native presentations with interaction and animation.
- [Plans](${absoluteUrl("/docs/plans")}): Add visual comparison, timelines, dependencies, or embedded examples when Markdown is not enough.

## Why HTML?

Markdown is often enough. Use HTML when you need to compare designs, change states, follow a flow, or try the thing yourself.

## Main links

- [Browse the catalog](${absoluteUrl("/catalog")}): Open the complete collection of HTML artifacts, SVGs, examples, and skills.
- [Read the guide](${absoluteUrl("/docs")}): Short overviews of the main artifact formats.
- [View the source](https://github.com/plannotator/effective-html): Repository, examples, and installable skills.`;
}

/** Return a complete Markdown catalog generated from the same data as the UI. */
export function getCatalogMarkdown() {
  const sections = catalogCategories.map((category) => {
    const references = catalogArtifacts.filter(
      (artifact) => artifact.category === category.id,
    );
    const examples = nativeExamples.filter(
      (example) => example.category === category.id,
    );
    const lines = [`## ${category.label}`, "", category.description];

    if (category.id === "diagrams") {
      lines.push(
        "",
        "### Featured interactive artifact",
        "",
        markdownLink(
          featuredNativeArtifact.title,
          featuredNativeArtifact.htmlUrl,
          featuredNativeArtifact.description,
        ),
        "  - [Source](https://github.com/plannotator/effective-html/blob/main/site/public/catalog/featured/workspaces-architecture.html)",
      );
    }

    if (references.length > 0) {
      lines.push("", "### HTML and SVG references", "");
      for (const artifact of references) {
        lines.push(
          markdownLink(artifact.title, artifact.htmlUrl, artifact.description),
          `  - [Static SVG](${absoluteUrl(artifact.staticSvg)})`,
          `  - [Animated SVG](${absoluteUrl(artifact.animatedSvg)})`,
          `  - [Static SVG source](${artifact.staticSourceUrl})`,
          `  - [Animated SVG source](${artifact.animatedSourceUrl})`,
        );
        if (artifact.resourceUrl && artifact.resourceLabel) {
          lines.push(
            `  - [${artifact.resourceLabel}](${absoluteUrl(artifact.resourceUrl)})`,
          );
        }
      }
    }

    if (examples.length > 0) {
      lines.push("", "### Effective HTML examples", "");
      for (const example of examples) {
        lines.push(
          markdownLink(
            `${example.title} (${example.stage})`,
            example.liveUrl,
            example.description,
          ),
          `  - [Guide](${absoluteUrl(example.guideUrl)})`,
          `  - [Source](${example.sourceUrl})`,
        );
      }
    }

    return lines.join("\n");
  });

  const skills = catalogSkills.flatMap((skill) => [
    markdownLink(skill.title, skill.guideUrl, skill.description),
    `  - [Skill source](${skill.sourceUrl})`,
  ]);

  return `# Effective HTML catalog

> Visual and interactive HTML artifacts you can open, inspect, and use as references for agent work.

Human-readable page: ${absoluteUrl("/catalog")}

The catalog combines Thariq Shihipar's twenty HTML references, static and animated Effective SVG interpretations, examples made for Effective HTML, an interactive architecture diagram, and the repository's skills.

${sections.join("\n\n")}

## Skills

${skills.join("\n")}

## Original sources

- [The unreasonable effectiveness of HTML](https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html)
- [HTML effectiveness examples](https://thariqs.github.io/html-effectiveness/)
- [Effective SVG](https://github.com/plannotator/effective-svg)
- [Effective HTML repository](https://github.com/plannotator/effective-html)`;
}

/** Return the Markdown representation of the examples landing page. */
export function getExamplesMarkdown() {
  return `# Release-readiness examples

> A wireframe and working prototype built from the same release-readiness brief.

Human-readable page: ${absoluteUrl("/examples")}

## Release readiness wireframe

A deliberately unfinished artifact for comparing hierarchy, content, navigation, and responsive structure.

- [Open the wireframe](${absoluteUrl("/examples/release-readiness/wireframe.html")})
- [View the source](https://github.com/plannotator/effective-html/blob/main/examples/release-readiness/wireframe.html)
- [Read the wireframe guide](${absoluteUrl("/docs/wireframes")})

## Release readiness prototype

A working flow for testing blocked, ready, loading, failure, and recovery states, including the boundary between validation and release.

- [Open the prototype](${absoluteUrl("/examples/release-readiness/prototype.html")})
- [View the source](https://github.com/plannotator/effective-html/blob/main/examples/release-readiness/prototype.html)
- [Read the prototype guide](${absoluteUrl("/docs/prototypes")})`;
}

/** Return the llms.txt index following the llmstxt.org structure. */
export function getLlmsIndex() {
  const guideLinks = getOrderedGuidePages().map((page) => {
    const markdownPath = page.url === "/docs" ? "/docs.md" : `${page.url}.md`;
    return markdownLink(
      page.data.title,
      markdownPath,
      page.data.description ?? "Effective HTML guide page.",
    );
  });

  return `# Effective HTML

> Effective HTML is a reference site for wireframes, mockups, prototypes, diagrams, decks, plans, and other visual or interactive artifacts made with agents.

Use the Markdown pages below for concise, navigation-free content. The catalog is generated from the same data as the human-facing collection.

## Main pages

${markdownLink("Home", "/index.md", "Overview of Effective HTML and the main artifact formats.")}
${markdownLink("Catalog", "/catalog.md", "Complete catalog of HTML references, SVGs, examples, and skills.")}
${markdownLink("Examples", "/examples.md", "Release-readiness wireframe and prototype.")}
${markdownLink("Complete site context", "/llms-full.txt", "All first-party page content in one file.")}

## Guide

${guideLinks.join("\n")}

## Optional

- [Effective HTML repository](https://github.com/plannotator/effective-html): Source, examples, and installable skills.
- [The unreasonable effectiveness of HTML](https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html): Thariq Shihipar's original essay.
- [Understanding is the new bottleneck](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck): Geoffrey Litt's essay on visual explanations and software understanding.
- [Effective SVG](https://github.com/plannotator/effective-svg): Static and animated SVG interpretations of the reference artifacts.`;
}

/** Return all first-party page content as one Markdown document. */
export async function getLlmsFull() {
  const guides = await Promise.all(getOrderedGuidePages().map(getGuideMarkdown));

  return [
    getHomeMarkdown(),
    getCatalogMarkdown(),
    getExamplesMarkdown(),
    ...guides,
  ].join("\n\n---\n\n");
}
