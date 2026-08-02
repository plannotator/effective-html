"use client";

import {
  catalogArtifacts,
  catalogCategories,
  catalogSkills,
  featuredNativeArtifact,
  nativeExamples,
  type CatalogArtifact,
  type CatalogCategory,
} from "@/lib/catalog-data";
import { FeaturedSequence } from "@/components/featured-sequence";
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  ChartNoAxesCombined,
  Code2,
  FileCode2,
  GitCompareArrows,
  Image as ImageIcon,
  MousePointer2,
  PanelsTopLeft,
  Presentation,
  ScanSearch,
  Search,
  Sparkles,
  SwatchBook,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ComponentType } from "react";
import { useMemo, useState } from "react";
import styles from "./catalog-folio.module.css";

const categoryIcons: Record<string, ComponentType<{ "aria-hidden"?: boolean }>> = {
  exploration: GitCompareArrows,
  review: ScanSearch,
  design: SwatchBook,
  prototyping: MousePointer2,
  diagrams: Workflow,
  decks: Presentation,
  research: BookOpen,
  reports: ChartNoAxesCombined,
  editors: PanelsTopLeft,
};

const folioAssets = [
  "/catalog/effective-svg/static/16-implementation-plan.svg",
  "/catalog/effective-svg/animated/18-editor-triage-board.svg",
  "/catalog/effective-svg/static/08-prototype-interaction.svg",
  "/catalog/effective-svg/static/13-flowchart-diagram.svg",
  "/catalog/effective-svg/animated/15-research-concept-explainer.svg",
];

function matchesQuery(values: string[], query: string) {
  return !query || values.join(" ").toLowerCase().includes(query);
}

function FolioSpecimen({
  artifact,
  animated,
}: {
  artifact: CatalogArtifact;
  animated: boolean;
}) {
  const svg = animated ? artifact.animatedSvg : artifact.staticSvg;
  const sourceUrl = animated
    ? artifact.animatedSourceUrl
    : artifact.staticSourceUrl;

  return (
    <article className={styles.specimen}>
      <a
        className={styles.specimenImage}
        href={svg}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${animated ? "animated" : "static"} SVG for ${artifact.title}`}
      >
        <Image
          src={svg}
          alt={`${animated ? "Animated" : "Static"} SVG interpretation of ${artifact.title}`}
          width={165}
          height={202}
          unoptimized
        />
      </a>
      <div className={styles.specimenBody}>
        <span>{String(artifact.order).padStart(2, "0")}</span>
        <h3>{artifact.title}</h3>
        <p>{artifact.description}</p>
        <div className={styles.specimenLinks}>
          <a href={artifact.htmlUrl} target="_blank" rel="noreferrer">
            Original HTML
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            Effective SVG
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function FolioBand({
  category,
  artifacts,
}: {
  category: CatalogCategory;
  artifacts: CatalogArtifact[];
}) {
  const [animated, setAnimated] = useState(false);
  const bandStyle = {
    "--folio-band": category.color,
    "--folio-foreground": category.foreground,
  } as CSSProperties;

  return (
    <section
      className={styles.band}
      id={`folio-${category.id}`}
      style={bandStyle}
    >
      <header className={styles.bandRail}>
        <div>
          <h2>{category.shortLabel}</h2>
          <span>{artifacts.length} in this subject</span>
        </div>
        <div className={styles.bandModes} aria-label={`${category.label} preview mode`}>
          <a href={artifacts[0]?.htmlUrl} target="_blank" rel="noreferrer">
            <Code2 aria-hidden="true" />
            Original HTML
          </a>
          <button
            type="button"
            aria-pressed={!animated}
            onClick={() => setAnimated(false)}
          >
            <ImageIcon aria-hidden="true" />
            Static SVG
          </button>
          <button
            type="button"
            aria-pressed={animated}
            onClick={() => setAnimated(true)}
          >
            <Sparkles aria-hidden="true" />
            Animated SVG
          </button>
        </div>
      </header>
      <div className={styles.specimenShelf} data-count={artifacts.length}>
        {artifacts.map((artifact) => (
          <FolioSpecimen
            artifact={artifact}
            animated={animated}
            key={artifact.id}
          />
        ))}
      </div>
    </section>
  );
}

export function CatalogFolio() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const groupedArtifacts = useMemo(
    () =>
      catalogCategories
        .map((category) => ({
          category,
          artifacts: catalogArtifacts.filter(
            (artifact) =>
              artifact.category === category.id &&
              matchesQuery(
                [artifact.title, artifact.description, category.label, ...artifact.keywords],
                normalizedQuery,
              ),
          ),
        }))
        .filter((group) => group.artifacts.length > 0),
    [normalizedQuery],
  );

  const visibleSkills = catalogSkills.filter((skill) =>
    matchesQuery([skill.title, skill.description], normalizedQuery),
  );
  const visibleNative = nativeExamples.filter((example) =>
    matchesQuery([example.title, example.mode, example.description], normalizedQuery),
  );
  const featuredSequenceVisible = matchesQuery(
    [
      featuredNativeArtifact.title,
      featuredNativeArtifact.eyebrow,
      featuredNativeArtifact.description,
      ...featuredNativeArtifact.flowLabels,
      ...featuredNativeArtifact.keywords,
    ],
    normalizedQuery,
  );
  const visibleCount =
    groupedArtifacts.reduce((total, group) => total + group.artifacts.length, 0) +
    visibleSkills.length +
    visibleNative.length +
    Number(featuredSequenceVisible);

  return (
    <div className={styles.folioPage}>
      <section className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1>Catalog</h1>
          <p>
            A compact folio of references, SVG interpretations, native HTML,
            and the skills behind them.
          </p>
          <Link href="/catalog">
            View the current catalog
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.folioStage} aria-label="Effective HTML artifact folio">
          {folioAssets.map((asset) => (
            <div className={styles.folioSheet} key={asset}>
              <Image
                src={asset}
                alt=""
                aria-hidden="true"
                width={165}
                height={202}
                unoptimized
                loading="eager"
              />
            </div>
          ))}
        </div>

        <aside className={styles.sourceIndex}>
          <label>
            <Search aria-hidden="true" />
            <span className={styles.visuallyHidden}>Search this catalog view</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the source index"
            />
          </label>
          <div className={styles.sourceHeading}>
            <h2>Source index</h2>
            <span>{visibleCount} entries</span>
          </div>
          <nav aria-label="Catalog subjects">
            {catalogCategories.map((category) => {
              const Icon = categoryIcons[category.id] ?? Boxes;
              const count = catalogArtifacts.filter(
                (artifact) => artifact.category === category.id,
              ).length;
              return (
                <a
                  href={`#folio-${category.id}`}
                  key={category.id}
                  aria-label={`${category.shortLabel}, ${count} ${count === 1 ? "artifact" : "artifacts"}`}
                >
                  <Icon aria-hidden={true} />
                  <span>{category.shortLabel}</span>
                  <small>{count}</small>
                </a>
              );
            })}
          </nav>
        </aside>
      </section>

      {featuredSequenceVisible && (
        <FeaturedSequence artifact={featuredNativeArtifact} density="folio" />
      )}

      <div className={styles.bands}>
        {groupedArtifacts.map((group) => (
          <FolioBand
            category={group.category}
            artifacts={group.artifacts}
            key={group.category.id}
          />
        ))}
      </div>

      {visibleNative.length > 0 && (
        <section className={styles.nativeStrip}>
          <header>
            <h2>Native HTML</h2>
            <p>Two additional same-origin examples, served as the work itself.</p>
          </header>
          <div>
            {visibleNative.map((example) => (
              <article key={example.id}>
                <Link href={example.liveUrl}>
                  <Image
                    src={example.screenshot}
                    alt={`Screenshot of ${example.title}`}
                    width={example.screenshotWidth}
                    height={example.screenshotHeight}
                  />
                </Link>
                <div>
                  <span>{example.mode}</span>
                  <h3>{example.title}</h3>
                  <Link href={example.liveUrl}>
                    Open HTML
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {visibleSkills.length > 0 && (
        <section className={styles.skillStrip}>
          <h2>Effective HTML skills</h2>
          <div>
            {visibleSkills.map((skill) => (
              <article key={skill.id}>
                <span data-color={skill.color} aria-hidden="true" />
                <div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
                <div className={styles.skillLinks}>
                  <Link href={skill.guideUrl}>Guide</Link>
                  <a href={skill.sourceUrl} target="_blank" rel="noreferrer">
                    <FileCode2 aria-hidden="true" />
                    Source
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {visibleCount === 0 && (
        <section className={styles.emptyState}>
          <Search aria-hidden="true" />
          <h2>No entry matches that search.</h2>
          <button type="button" onClick={() => setQuery("")}>
            Clear search
          </button>
        </section>
      )}
    </div>
  );
}
