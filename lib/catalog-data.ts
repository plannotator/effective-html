export type CatalogCategoryId =
  | "exploration"
  | "review"
  | "design"
  | "prototyping"
  | "diagrams"
  | "decks"
  | "research"
  | "reports"
  | "editors";

export type CatalogCategory = {
  id: CatalogCategoryId;
  label: string;
  shortLabel: string;
  description: string;
  color: string;
  foreground: string;
};

export type CatalogArtifact = {
  id: string;
  order: number;
  category: CatalogCategoryId;
  title: string;
  description: string;
  htmlUrl: string;
  resourceUrl?: string;
  resourceLabel?: string;
  staticSvg: string;
  animatedSvg: string;
  keywords: string[];
};

export type NativeExample = {
  id: string;
  category: CatalogCategoryId;
  title: string;
  mode: string;
  description: string;
  screenshot: string;
  screenshotWidth: number;
  screenshotHeight: number;
  liveUrl: string;
  guideUrl: string;
};

/** A first-party HTML artifact with media that previews, but does not replace, the live work. */
export type FeaturedNativeArtifact = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  htmlUrl: string;
  videoUrl: string;
  posterUrl: string;
  posterWidth: number;
  posterHeight: number;
  animatedPreviewUrl: string;
  readmeMediaUrl: string;
  flowLabels: string[];
  keywords: string[];
};

export type CatalogSkill = {
  id: string;
  title: string;
  description: string;
  guideUrl: string;
  sourceUrl: string;
  color: "cobalt" | "green" | "lilac" | "pink" | "coral";
};

export const catalogCategories: CatalogCategory[] = [
  {
    id: "exploration",
    label: "Exploration & planning",
    shortLabel: "Exploration",
    description:
      "Put alternatives beside one another, choose a direction, then make the implementation legible.",
    color: "#1649d8",
    foreground: "#fff9ef",
  },
  {
    id: "review",
    label: "Code review & understanding",
    shortLabel: "Review",
    description:
      "Give diffs, modules, and reviewer guidance enough spatial structure to be scanned instead of decoded.",
    color: "#a884e8",
    foreground: "#141413",
  },
  {
    id: "design",
    label: "Design systems",
    shortLabel: "Design",
    description:
      "Turn tokens, components, variants, and states into a reference people can actually inspect.",
    color: "#1bae61",
    foreground: "#141413",
  },
  {
    id: "prototyping",
    label: "Prototyping",
    shortLabel: "Prototyping",
    description:
      "Make motion and interaction tangible enough to tune, compare, and redirect before production work.",
    color: "#f09aa8",
    foreground: "#141413",
  },
  {
    id: "diagrams",
    label: "Illustrations & diagrams",
    shortLabel: "Diagrams",
    description:
      "Use vector scenes and interactive diagrams when relationships are the explanation.",
    color: "#e8744f",
    foreground: "#141413",
  },
  {
    id: "decks",
    label: "Decks",
    shortLabel: "Decks",
    description:
      "Sequence a meeting-sized story in one portable file with deliberate pacing and keyboard navigation.",
    color: "#1649d8",
    foreground: "#fff9ef",
  },
  {
    id: "research",
    label: "Research & learning",
    shortLabel: "Research",
    description:
      "Give an unfamiliar system multiple coordinated views, live explanations, and a navigable reading path.",
    color: "#a884e8",
    foreground: "#141413",
  },
  {
    id: "reports",
    label: "Reports",
    shortLabel: "Reports",
    description:
      "Make recurring status and incident documents faster to scan without flattening their evidence.",
    color: "#1bae61",
    foreground: "#141413",
  },
  {
    id: "editors",
    label: "Custom editing interfaces",
    shortLabel: "Editors",
    description:
      "Replace an awkward text instruction with a purpose-built interface that exports the human’s decision.",
    color: "#f09aa8",
    foreground: "#141413",
  },
];

const svgPaths = (file: string) => ({
  staticSvg: `/catalog/effective-svg/static/${file}.svg`,
  animatedSvg: `/catalog/effective-svg/animated/${file}.svg`,
});

export const catalogArtifacts: CatalogArtifact[] = [
  {
    id: "01-exploration-code-approaches",
    order: 1,
    category: "exploration",
    title: "Three code approaches",
    description:
      "Compare three implementations side by side, with trade-offs called out where the code actually differs.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/01-exploration-code-approaches.html",
    ...svgPaths("01-exploration-code-approaches"),
    keywords: ["comparison", "code", "approaches", "exploration"],
  },
  {
    id: "02-exploration-visual-designs",
    order: 2,
    category: "exploration",
    title: "Visual design directions",
    description:
      "Render several layout and tone directions live so reviewers can react to the actual alternatives.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/02-exploration-visual-designs.html",
    ...svgPaths("02-exploration-visual-designs"),
    keywords: ["design", "directions", "comparison", "mockup"],
  },
  {
    id: "16-implementation-plan",
    order: 16,
    category: "exploration",
    title: "Implementation plan",
    description:
      "Combine milestones, data flow, mockups, code, risks, and open decisions in one inspectable handoff.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/16-implementation-plan.html",
    ...svgPaths("16-implementation-plan"),
    keywords: ["plan", "milestones", "roadmap", "implementation"],
  },
  {
    id: "03-code-review-pr",
    order: 3,
    category: "review",
    title: "Annotated pull request",
    description:
      "Render a real diff with margin notes, severity, jump links, and clear places for a reviewer to focus.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/03-code-review-pr.html",
    ...svgPaths("03-code-review-pr"),
    keywords: ["pull request", "diff", "review", "annotations"],
  },
  {
    id: "17-pr-writeup",
    order: 17,
    category: "review",
    title: "PR writeup for reviewers",
    description:
      "Explain motivation, before and after behavior, the file-by-file tour, and where scrutiny matters most.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/17-pr-writeup.html",
    ...svgPaths("17-pr-writeup"),
    keywords: ["pull request", "writeup", "reviewers", "change"],
  },
  {
    id: "04-code-understanding",
    order: 4,
    category: "review",
    title: "Module map",
    description:
      "Draw an unfamiliar package as a readable system with its hot path, boundaries, and entry points visible.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/04-code-understanding.html",
    ...svgPaths("04-code-understanding"),
    keywords: ["module", "architecture", "code understanding", "map"],
  },
  {
    id: "05-design-system",
    order: 5,
    category: "design",
    title: "Living design system",
    description:
      "Turn colors, type, spacing, and interface primitives into a reference that stays concrete and copyable.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/05-design-system.html",
    ...svgPaths("05-design-system"),
    keywords: ["design system", "tokens", "swatches", "typography"],
  },
  {
    id: "06-component-variants",
    order: 6,
    category: "design",
    title: "Component variants",
    description:
      "Lay out sizes, states, and intents together so a component can be reviewed as a complete family.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/06-component-variants.html",
    ...svgPaths("06-component-variants"),
    keywords: ["components", "variants", "states", "design system"],
  },
  {
    id: "07-prototype-animation",
    order: 7,
    category: "prototyping",
    title: "Animation sandbox",
    description:
      "Isolate a transition with controls for duration and easing so the movement can be tuned by feel.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/07-prototype-animation.html",
    ...svgPaths("07-prototype-animation"),
    keywords: ["animation", "motion", "prototype", "easing"],
  },
  {
    id: "08-prototype-interaction",
    order: 8,
    category: "prototyping",
    title: "Clickable flow",
    description:
      "Connect only the screens needed to feel whether an interaction, transition, or task flow is right.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/08-prototype-interaction.html",
    ...svgPaths("08-prototype-interaction"),
    keywords: ["interaction", "flow", "prototype", "clickable"],
  },
  {
    id: "10-svg-illustrations",
    order: 10,
    category: "diagrams",
    title: "SVG figure sheet",
    description:
      "Collect crisp figures for an article in one editable vector sheet instead of describing them in prose.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/10-svg-illustrations.html",
    ...svgPaths("10-svg-illustrations"),
    keywords: ["svg", "illustration", "figures", "article"],
  },
  {
    id: "13-flowchart-diagram",
    order: 13,
    category: "diagrams",
    title: "Annotated flowchart",
    description:
      "Draw a process as a real flowchart and let each step reveal the timing, work, and failure path underneath.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/13-flowchart-diagram.html",
    ...svgPaths("13-flowchart-diagram"),
    keywords: ["flowchart", "diagram", "process", "pipeline"],
  },
  {
    id: "09-slide-deck",
    order: 9,
    category: "decks",
    title: "Arrow-key slide deck",
    description:
      "Turn source material into a short browser-native presentation with a real sequence and no export step.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/09-slide-deck.html",
    resourceUrl: "https://github.com/zarazhangrui/frontend-slides",
    resourceLabel: "Frontend Slides",
    ...svgPaths("09-slide-deck"),
    keywords: ["slides", "deck", "presentation", "keyboard"],
  },
  {
    id: "14-research-feature-explainer",
    order: 14,
    category: "research",
    title: "How a feature works",
    description:
      "Combine a summary, collapsible request path, code samples, and questions into a navigable system explanation.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/14-research-feature-explainer.html",
    ...svgPaths("14-research-feature-explainer"),
    keywords: ["research", "feature", "explainer", "code"],
  },
  {
    id: "15-research-concept-explainer",
    order: 15,
    category: "research",
    title: "Interactive concept explainer",
    description:
      "Teach a difficult idea with a manipulable model, aligned comparison, and glossary that respond together.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/15-research-concept-explainer.html",
    ...svgPaths("15-research-concept-explainer"),
    keywords: ["research", "concept", "explainer", "interactive"],
  },
  {
    id: "11-status-report",
    order: 11,
    category: "reports",
    title: "Weekly status",
    description:
      "Give shipped work, slips, risks, and one useful chart enough structure for a quick operational read.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/11-status-report.html",
    ...svgPaths("11-status-report"),
    keywords: ["status", "report", "weekly", "operations"],
  },
  {
    id: "12-incident-report",
    order: 12,
    category: "reports",
    title: "Incident timeline",
    description:
      "Join the minute-by-minute timeline, evidence, impact, and follow-up work into one readable post-mortem.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/12-incident-report.html",
    ...svgPaths("12-incident-report"),
    keywords: ["incident", "timeline", "postmortem", "report"],
  },
  {
    id: "18-editor-triage-board",
    order: 18,
    category: "editors",
    title: "Ticket triage board",
    description:
      "Reorder a concrete set of tickets across decision buckets, then export the resulting judgment.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/18-editor-triage-board.html",
    ...svgPaths("18-editor-triage-board"),
    keywords: ["editor", "triage", "tickets", "prioritization"],
  },
  {
    id: "19-editor-feature-flags",
    order: 19,
    category: "editors",
    title: "Feature flag editor",
    description:
      "Edit structured configuration with dependencies and warnings, then copy only the keys that changed.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/19-editor-feature-flags.html",
    ...svgPaths("19-editor-feature-flags"),
    keywords: ["editor", "feature flags", "configuration", "diff"],
  },
  {
    id: "20-editor-prompt-tuner",
    order: 20,
    category: "editors",
    title: "Prompt tuner",
    description:
      "Edit a reusable template while representative inputs render beside it, then export the tuned result.",
    htmlUrl:
      "https://thariqs.github.io/html-effectiveness/20-editor-prompt-tuner.html",
    ...svgPaths("20-editor-prompt-tuner"),
    keywords: ["editor", "prompt", "template", "live preview"],
  },
];

export const nativeExamples: NativeExample[] = [
  {
    id: "release-readiness-wireframe",
    category: "exploration",
    title: "Release readiness wireframe",
    mode: "Structure",
    description:
      "Three deliberately unfinished directions for deciding hierarchy, evidence, navigation, and responsive structure.",
    screenshot: "/examples/release-readiness/wireframe-desktop.png",
    screenshotWidth: 1440,
    screenshotHeight: 1000,
    liveUrl: "/examples/release-readiness/wireframe.html",
    guideUrl: "/docs/wireframes",
  },
  {
    id: "release-readiness-prototype",
    category: "prototyping",
    title: "Release readiness prototype",
    mode: "Behavior",
    description:
      "A working blocked-to-ready flow with validation, status changes, recovery, keyboard support, and mobile behavior.",
    screenshot: "/examples/release-readiness/prototype-desktop.png",
    screenshotWidth: 1440,
    screenshotHeight: 1428,
    liveUrl: "/examples/release-readiness/prototype.html",
    guideUrl: "/docs/prototypes",
  },
  {
    id: "linear-issue-workspace",
    category: "prototyping",
    title: "Linear issue workspace",
    mode: "Interface study · Linear",
    description:
      "A calm, dense issue workspace with active and backlog filters, keyboard-ready rows, and a focused issue detail rail.",
    screenshot: "/examples/product-studies/linear-issue-workspace.png",
    screenshotWidth: 1440,
    screenshotHeight: 900,
    liveUrl: "/examples/product-studies/linear-issue-workspace.html",
    guideUrl: "/docs/prototypes",
  },
  {
    id: "notion-project-space",
    category: "prototyping",
    title: "Notion project space",
    mode: "Interface study · Notion",
    description:
      "A connected project document that keeps strategy, properties, tasks, progress, and a timeline in one navigable surface.",
    screenshot: "/examples/product-studies/notion-project-space.png",
    screenshotWidth: 1440,
    screenshotHeight: 900,
    liveUrl: "/examples/product-studies/notion-project-space.html",
    guideUrl: "/docs/prototypes",
  },
  {
    id: "vercel-deployment-dashboard",
    category: "prototyping",
    title: "Vercel deployment ledger",
    mode: "Interface study · Vercel",
    description:
      "A chronological deployment ledger with environment filters, expandable build evidence, and explicit promotion actions.",
    screenshot: "/examples/product-studies/vercel-deployment-dashboard.png",
    screenshotWidth: 1440,
    screenshotHeight: 900,
    liveUrl: "/examples/product-studies/vercel-deployment-dashboard.html",
    guideUrl: "/docs/prototypes",
  },
];

/** The request-path explorer featured in the Effective HTML README. */
export const featuredNativeArtifact: FeaturedNativeArtifact = {
  id: "workspaces-architecture-sequence",
  title: "Architecture request-path explorer",
  eyebrow: "Interactive sequence diagram · README artifact",
  description:
    "Select one of six request paths to dim the surrounding system, trace causality across the architecture, and reveal the nodes and explanation for that flow.",
  htmlUrl: "/catalog/featured/workspaces-architecture.html",
  videoUrl: "/catalog/featured/workspaces-architecture-demo.mp4",
  posterUrl: "/catalog/featured/workspaces-architecture-poster.jpg",
  posterWidth: 1440,
  posterHeight: 892,
  animatedPreviewUrl:
    "/catalog/featured/workspaces-architecture-sequence.svg",
  readmeMediaUrl:
    "https://github.com/user-attachments/assets/24306977-7f30-44c9-9bff-55f901d557b0",
  flowLabels: [
    "Create",
    "Live edit",
    "Agent edit",
    "Public read",
    "Login",
    "HTML render",
  ],
  keywords: [
    "architecture",
    "sequence",
    "request path",
    "interactive diagram",
    "animation",
    "worker",
    "durable object",
    "system",
  ],
};

const repoSource =
  "https://github.com/plannotator/effective-html/blob/main/skills";

export const catalogSkills: CatalogSkill[] = [
  {
    id: "html",
    title: "HTML",
    description:
      "The broad router for reports, explainers, presentations, interfaces, data stories, and mixed artifacts.",
    guideUrl: "/docs",
    sourceUrl: `${repoSource}/html/SKILL.md`,
    color: "cobalt",
  },
  {
    id: "html-wireframe",
    title: "HTML wireframe",
    description:
      "Low-fidelity structure for reviewing content, hierarchy, navigation, task flow, and responsive behavior.",
    guideUrl: "/docs/wireframes",
    sourceUrl: `${repoSource}/html-wireframe/SKILL.md`,
    color: "lilac",
  },
  {
    id: "html-prototype",
    title: "HTML prototype",
    description:
      "Polished mockups and bounded working flows with the states and interactions needed for a real decision.",
    guideUrl: "/docs/prototypes",
    sourceUrl: `${repoSource}/html-prototype/SKILL.md`,
    color: "green",
  },
  {
    id: "html-plan",
    title: "HTML plan",
    description:
      "Plans that preserve source commitments while clarifying sequence, ownership, dependencies, and completion.",
    guideUrl: "/docs/plans",
    sourceUrl: `${repoSource}/html-plan/SKILL.md`,
    color: "pink",
  },
  {
    id: "html-diagram",
    title: "HTML diagram",
    description:
      "Purpose-built visual models for topology, sequence, process, state, hierarchy, time, and quantity.",
    guideUrl: "/docs/diagrams",
    sourceUrl: `${repoSource}/html-diagram/SKILL.md`,
    color: "coral",
  },
];
