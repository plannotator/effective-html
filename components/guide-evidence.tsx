"use client";

import { ArrowRight, ArrowUpRight, FileCode2, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, KeyboardEvent } from "react";
import { useRef, useState } from "react";
import styles from "./guide-evidence.module.css";

type FidelityId = "wireframe" | "mockup" | "prototype" | "diagram" | "plan";
type GuideChapterId = "why-html" | "wireframes" | "prototypes" | "diagrams" | "plans";

const fidelityEvidence: Array<{
  id: FidelityId;
  label: string;
  title: string;
  decision: string;
  evidence: string;
  stop: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  href: string;
  accent: string;
}> = [
  {
    id: "wireframe",
    label: "Wireframe",
    title: "Decide what belongs and where.",
    decision: "Hierarchy, navigation, grouping, density, and responsive order.",
    evidence: "A deliberately unfinished structure with realistic content.",
    stop: "The layout can be judged without discussing finish.",
    image: "/examples/release-readiness/wireframe-desktop.png",
    imageAlt: "Release readiness wireframe comparing interface structure",
    imageWidth: 1440,
    imageHeight: 1000,
    href: "/examples/release-readiness/wireframe.html",
    accent: "#1649d8",
  },
  {
    id: "mockup",
    label: "Mockup",
    title: "Decide how the resolved surface should feel.",
    decision: "Visual hierarchy, brand expression, density, type, and composition.",
    evidence: "A polished product-interface study without pretending every control works.",
    stop: "Reviewers can evaluate visual direction without inferring behavior.",
    image: "/examples/product-studies/notion-project-space.png",
    imageAlt: "High-fidelity connected project document interface study",
    imageWidth: 1440,
    imageHeight: 900,
    href: "/examples/product-studies/notion-project-space.html",
    accent: "#a884e8",
  },
  {
    id: "prototype",
    label: "Prototype",
    title: "Decide whether the flow behaves credibly.",
    decision: "State change, feedback, validation, recovery, and keyboard behavior.",
    evidence: "One working path with the states that could change the decision.",
    stop: "The critical behavior can be exercised without building the product.",
    image: "/examples/release-readiness/prototype-desktop.png",
    imageAlt: "Interactive release readiness prototype showing behavioral states",
    imageWidth: 1440,
    imageHeight: 1428,
    href: "/examples/release-readiness/prototype.html",
    accent: "#1bae61",
  },
  {
    id: "diagram",
    label: "Diagram",
    title: "Decide whether a relationship is understood.",
    decision: "Sequence, state, hierarchy, ownership, topology, or flow.",
    evidence: "A visual model whose geometry carries the important relationship.",
    stop: "The reader can identify the system boundary and exceptional path.",
    image: "/catalog/featured/workspaces-architecture-poster.jpg",
    imageAlt: "Architecture request-path explorer showing system relationships",
    imageWidth: 1440,
    imageHeight: 892,
    href: "/catalog/featured/workspaces-architecture.html",
    accent: "#e8744f",
  },
  {
    id: "plan",
    label: "Plan",
    title: "Decide how commitments become ordered work.",
    decision: "Sequence, dependencies, scope, validation, and unresolved questions.",
    evidence: "A source-grounded implementation sequence with only useful spatial structure.",
    stop: "The work is actionable and traceable; HTML adds more than ceremony.",
    image: "/catalog/effective-svg/static/16-implementation-plan.svg",
    imageAlt: "Implementation plan arranging milestones and evidence",
    imageWidth: 165,
    imageHeight: 202,
    href: "https://thariqs.github.io/html-effectiveness/16-implementation-plan.html",
    accent: "#f09aa8",
  },
];

export function FidelityWorkbench() {
  const [selectedId, setSelectedId] = useState<FidelityId>("wireframe");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedIndex = fidelityEvidence.findIndex((item) => item.id === selectedId);
  const selected = fidelityEvidence[selectedIndex];

  function selectAt(index: number) {
    const normalized = (index + fidelityEvidence.length) % fidelityEvidence.length;
    setSelectedId(fidelityEvidence[normalized].id);
    tabRefs.current[normalized]?.focus();
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectAt(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectAt(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectAt(0);
    } else if (event.key === "End") {
      event.preventDefault();
      selectAt(fidelityEvidence.length - 1);
    }
  }

  const workbenchStyle = {
    "--evidence-accent": selected.accent,
  } as CSSProperties;

  return (
    <section className={styles.workbench} style={workbenchStyle}>
      <div className={styles.tabRail} role="tablist" aria-label="Compare artifact fidelity">
        {fidelityEvidence.map((item, index) => (
          <button
            key={item.id}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            id={`fidelity-tab-${item.id}`}
            type="button"
            role="tab"
            aria-controls="fidelity-evidence-panel"
            aria-selected={selectedId === item.id}
            tabIndex={selectedId === item.id ? 0 : -1}
            onClick={() => setSelectedId(item.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        id="fidelity-evidence-panel"
        className={styles.evidencePanel}
        role="tabpanel"
        aria-labelledby={`fidelity-tab-${selected.id}`}
      >
        <a
          className={styles.preview}
          href={selected.href}
          target={selected.href.startsWith("http") ? "_blank" : undefined}
          rel={selected.href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={`Open the ${selected.label.toLowerCase()} artifact`}
        >
          <Image
            key={selected.image}
            src={selected.image}
            alt={selected.imageAlt}
            width={selected.imageWidth}
            height={selected.imageHeight}
            sizes="(max-width: 768px) 100vw, 680px"
          />
          <span>
            Open artifact
            <ArrowUpRight aria-hidden="true" />
          </span>
        </a>

        <div className={styles.ledger}>
          <h2>{selected.title}</h2>
          <dl>
            <div>
              <dt>Decision</dt>
              <dd>{selected.decision}</dd>
            </div>
            <div>
              <dt>Evidence</dt>
              <dd>{selected.evidence}</dd>
            </div>
            <div>
              <dt>Stop when</dt>
              <dd>{selected.stop}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

const chapterEvidence: Record<
  Exclude<GuideChapterId, "why-html">,
  {
    eyebrow: string;
    title: string;
    image?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    iframe?: string;
    href: string;
    accent: string;
    checks: Array<{ label: string; value: string }>;
  }
> = {
  wireframes: {
    eyebrow: "Single-artifact evidence",
    title: "Can the structure be judged before the surface is finished?",
    image: "/examples/release-readiness/wireframe-desktop.png",
    imageAlt: "Release readiness wireframe with realistic interface structure",
    imageWidth: 1440,
    imageHeight: 1000,
    href: "/examples/release-readiness/wireframe.html",
    accent: "#1649d8",
    checks: [
      { label: "Hierarchy", value: "The release decision and blockers dominate the page." },
      { label: "Boundary", value: "Primary and supporting actions remain visibly separate." },
      { label: "Reflow", value: "The same content order survives at a narrow viewport." },
    ],
  },
  prototypes: {
    eyebrow: "Live behavioral evidence",
    title: "Exercise the states that could reverse the decision.",
    iframe: "/examples/release-readiness/prototype.html",
    href: "/examples/release-readiness/prototype.html",
    accent: "#1bae61",
    checks: [
      { label: "Path", value: "Resolve one blocker and prepare a release." },
      { label: "States", value: "Blocked, pending, failure, recovery, and ready are operable." },
      { label: "Boundary", value: "The prototype demonstrates behavior without claiming a backend." },
    ],
  },
  diagrams: {
    eyebrow: "Animated relationship evidence",
    title: "Trace one request without flattening the whole system.",
    image: "/catalog/featured/workspaces-architecture-sequence.svg",
    imageAlt: "Animated architecture synopsis tracing selectable request paths",
    imageWidth: 1440,
    imageHeight: 892,
    href: "/catalog/featured/workspaces-architecture.html",
    accent: "#e8744f",
    checks: [
      { label: "Boundary", value: "The architecture remains visible while one request path is emphasized." },
      { label: "Sequence", value: "Ordering and handoffs are carried by geometry and motion." },
      { label: "Exception", value: "The live artifact lets a reviewer choose a different path." },
    ],
  },
  plans: {
    eyebrow: "Selective visual evidence",
    title: "Use HTML only when the plan gains a useful second dimension.",
    image: "/catalog/effective-svg/static/16-implementation-plan.svg",
    imageAlt: "Implementation plan arranging milestones and evidence spatially",
    imageWidth: 165,
    imageHeight: 202,
    href: "https://thariqs.github.io/html-effectiveness/16-implementation-plan.html",
    accent: "#f09aa8",
    checks: [
      { label: "Keep Markdown", value: "The sequence is linear and the source commitments are already clear." },
      { label: "Earn HTML", value: "Overlap, dependencies, alternatives, or attached evidence change the judgment." },
      { label: "Stop", value: "The plan is actionable and traceable without decorative interface work." },
    ],
  },
};

export function GuideChapterEvidence({ chapter }: { chapter: GuideChapterId }) {
  if (chapter === "why-html") {
    return (
      <section className={`${styles.chapterEvidence} ${styles.mediumComparison}`}>
        <header className={styles.chapterEvidenceHeader}>
          <span>Evidence comparison</span>
          <h2>The medium earns its place when it removes translation work.</h2>
        </header>
        <div className={styles.mediumColumns}>
          <div className={styles.markdownSpecimen}>
            <span>Markdown · linear commitment</span>
            <strong>Release readiness</strong>
            <p>Confirm the owner, resolve blockers, validate the build, then release.</p>
            <ol>
              <li>Resolve blocking checks</li>
              <li>Confirm ownership</li>
              <li>Run validation</li>
            </ol>
          </div>
          <a className={styles.htmlSpecimen} href="/examples/release-readiness/wireframe.html">
            <Image
              src="/examples/release-readiness/wireframe-desktop.png"
              alt="HTML wireframe making release hierarchy and responsive structure visible"
              width={1440}
              height={1000}
              sizes="(max-width: 768px) 100vw, 420px"
            />
            <span>
              HTML · spatial evidence
              <ArrowUpRight aria-hidden="true" />
            </span>
          </a>
        </div>
        <p className={styles.comparisonVerdict}>
          Both artifacts can be correct. Use the HTML version only when seeing hierarchy,
          width, state, or interaction changes the review.
        </p>
      </section>
    );
  }

  const evidence = chapterEvidence[chapter];
  const evidenceStyle = { "--evidence-accent": evidence.accent } as CSSProperties;
  const external = evidence.href.startsWith("http");

  return (
    <section className={styles.chapterEvidence} style={evidenceStyle}>
      <header className={styles.chapterEvidenceHeader}>
        <span>{evidence.eyebrow}</span>
        <h2>{evidence.title}</h2>
      </header>
      <div className={styles.chapterEvidenceBody}>
        <div className={styles.chapterVisual}>
          {evidence.iframe ? (
            <iframe
              src={evidence.iframe}
              title="Interactive release readiness prototype"
              loading="lazy"
            />
          ) : (
            <a
              href={evidence.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label="Open the complete artifact"
            >
              <Image
                src={evidence.image!}
                alt={evidence.imageAlt!}
                width={evidence.imageWidth!}
                height={evidence.imageHeight!}
                sizes="(max-width: 768px) 100vw, 620px"
                unoptimized={evidence.image?.endsWith(".svg")}
              />
            </a>
          )}
          <a
            className={styles.chapterOpen}
            href={evidence.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
          >
            Open complete artifact
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <dl className={styles.chapterChecks}>
          {evidence.checks.map((check) => (
            <div key={check.label}>
              <dt>{check.label}</dt>
              <dd>{check.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function GuideHandoff({
  artifactHref,
  sourceHref,
  skillHref,
  artifactLabel = "Open the artifact catalog",
  artifactDescription = "Compare the real rendered work.",
  skillLabel = "Use the HTML skill",
  skillDescription = "Route a real task to the right artifact.",
}: {
  artifactHref: string;
  sourceHref: string;
  skillHref: string;
  artifactLabel?: string;
  artifactDescription?: string;
  skillLabel?: string;
  skillDescription?: string;
}) {
  const actions = [
    {
      label: artifactLabel,
      description: artifactDescription,
      href: artifactHref,
      icon: ArrowUpRight,
    },
    {
      label: "Inspect the source",
      description: "See the brief, states, and implementation.",
      href: sourceHref,
      icon: FileCode2,
    },
    {
      label: skillLabel,
      description: skillDescription,
      href: skillHref,
      icon: Wrench,
    },
  ];

  return (
    <nav className={styles.handoff} aria-label="Put this lesson to work">
      {actions.map((action) => {
        const Icon = action.icon;
        const external = action.href.startsWith("http");
        const content = (
          <>
            <Icon aria-hidden="true" />
            <span>
              <strong>{action.label}</strong>
              <small>{action.description}</small>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </>
        );

        return external ? (
          <a key={action.label} href={action.href} target="_blank" rel="noreferrer">
            {content}
          </a>
        ) : (
          <Link key={action.label} href={action.href}>
            {content}
          </Link>
        );
      })}
    </nav>
  );
}

export function GuideNext({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link className={styles.next} href={href}>
      <span>
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}
