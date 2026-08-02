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
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  FileCode2,
  GalleryVerticalEnd,
  Image as ImageIcon,
  Rows3,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import styles from "./catalog-explorer.module.css";

type CollectionFilter = "all" | "pairs" | "mockups" | "skills";
type CatalogView = "expanded" | "compact";
type PreviewMode = "static" | "animated";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => unknown;
};

const highFidelityMockups = nativeExamples.filter((example) =>
  example.mode.startsWith("Interface study"),
);

const collectionOptions: Array<{
  id: CollectionFilter;
  label: string;
  count: number;
}> = [
  {
    id: "all",
    label: "All",
    count: catalogArtifacts.length + nativeExamples.length + catalogSkills.length + 1,
  },
  { id: "pairs", label: "References", count: 20 },
  {
    id: "mockups",
    label: "Hi-fi mockups",
    count: highFidelityMockups.length,
  },
  { id: "skills", label: "Skills", count: 5 },
];

const totalEntryCount = collectionOptions[0].count;
const catalogCategoryIds = new Set<string>(
  catalogCategories.map((category) => category.id),
);

function parseCollection(value: string | null): CollectionFilter {
  return value === "pairs" || value === "mockups" || value === "skills"
    ? value
    : "all";
}

function parseView(value: string | null): CatalogView {
  return value === "compact" ? "compact" : "expanded";
}

function parsePreview(value: string | null): PreviewMode {
  return value === "static" ? "static" : "animated";
}

function ArtifactSpecimen({
  artifact,
  previewMode,
}: {
  artifact: CatalogArtifact;
  previewMode: PreviewMode;
}) {
  const animated = previewMode === "animated";
  const activeSvg = animated ? artifact.animatedSvg : artifact.staticSvg;

  return (
    <article className={styles.specimen}>
      <div className={styles.specimenMeta}>
        <span>{String(artifact.order).padStart(2, "0")}</span>
      </div>
      <a
        className={styles.specimenPreview}
        href={activeSvg}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open the ${animated ? "animated" : "static"} SVG for ${artifact.title}`}
      >
        <Image
          src={activeSvg}
          alt={`${animated ? "Animated" : "Static"} abstract SVG for ${artifact.title}`}
          width={165}
          height={202}
          unoptimized
        />
      </a>
      <div className={styles.specimenCopy}>
        <h3>{artifact.title}</h3>
        <p>{artifact.description}</p>
      </div>
      <div className={styles.specimenControls}>
        <div className={styles.specimenActions}>
          <a href={artifact.htmlUrl} target="_blank" rel="noreferrer">
            HTML
            <ExternalLink aria-hidden="true" />
          </a>
          <a href={activeSvg} target="_blank" rel="noreferrer">
            SVG
            <ExternalLink aria-hidden="true" />
          </a>
          {artifact.resourceUrl && artifact.resourceLabel && (
            <a href={artifact.resourceUrl} target="_blank" rel="noreferrer">
              {artifact.resourceLabel}
              <ExternalLink aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function CategoryBand({
  category,
  artifacts,
  previewMode,
}: {
  category: CatalogCategory;
  artifacts: CatalogArtifact[];
  previewMode: PreviewMode;
}) {
  const bandStyle = {
    "--band-color": category.color,
    "--band-foreground": category.foreground,
    viewTransitionName: `catalog-${category.id}`,
  } as CSSProperties;

  return (
    <section
      className={styles.categoryBand}
      data-catalog-motion={`category-${category.id}`}
      id={category.id}
      style={bandStyle}
    >
      <div className={styles.bandInner}>
        <header className={styles.bandHeader}>
          <h2 tabIndex={-1}>{category.shortLabel}</h2>
          <p>{category.description}</p>
          <span>
            {artifacts.length} {artifacts.length === 1 ? "artifact" : "artifacts"}
          </span>
        </header>
        <div
          className={styles.specimenGrid}
          data-count={Math.min(artifacts.length, 3)}
        >
          {artifacts.map((artifact) => (
            <ArtifactSpecimen
              artifact={artifact}
              key={artifact.id}
              previewMode={previewMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CatalogExplorer() {
  const [collection, setCollection] = useState<CollectionFilter>("all");
  const [previewMode, setPreviewMode] = useState<PreviewMode>("animated");
  const [view, setView] = useState<CatalogView>("expanded");
  const [hasChangedView, setHasChangedView] = useState(false);
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null);

  useEffect(() => {
    function applyLocationState() {
      const url = new URL(window.location.href);
      const hashTarget = decodeURIComponent(url.hash.slice(1));
      const targetsSubject = catalogCategoryIds.has(hashTarget);
      const hasExplicitView = url.searchParams.has("view");
      const nextCollection = targetsSubject
        ? "all"
        : parseCollection(url.searchParams.get("collection"));
      const nextView = hasExplicitView
        ? parseView(url.searchParams.get("view"))
        : window.matchMedia("(max-width: 640px)").matches
          ? "compact"
          : "expanded";

      setCollection(nextCollection);
      setPreviewMode(parsePreview(url.searchParams.get("preview")));
      setView(nextView);

      if (!hasExplicitView && nextView === "compact") {
        url.searchParams.set("view", "compact");
        window.history.replaceState(null, "", url);
      }

      if (targetsSubject && url.searchParams.has("collection")) {
        url.searchParams.delete("collection");
        window.history.replaceState(null, "", url);
      }

      if (hashTarget) setPendingAnchor(hashTarget);
    }

    applyLocationState();
    window.addEventListener("hashchange", applyLocationState);
    window.addEventListener("popstate", applyLocationState);

    return () => {
      window.removeEventListener("hashchange", applyLocationState);
      window.removeEventListener("popstate", applyLocationState);
    };
  }, []);

  useEffect(() => {
    if (!pendingAnchor) return;

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(pendingAnchor);
      const catalogControls = document.querySelector<HTMLElement>(
        '[aria-label="Catalog filters"]',
      );

      if (pendingAnchor === "catalog-collection" && catalogControls) {
        catalogControls.scrollIntoView({ block: "start" });
        catalogControls
          .querySelector<HTMLElement>(
            '[aria-label="Collection"] button[aria-pressed="true"]',
          )
          ?.focus({ preventScroll: true });
      } else if (target) {
        target.scrollIntoView({ block: "start" });
        target
          .querySelector<HTMLElement>("h2, h3")
          ?.focus({ preventScroll: true });
      }

      setPendingAnchor(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [collection, pendingAnchor]);

  const visibleArtifacts =
    collection === "mockups" || collection === "skills"
      ? []
      : catalogArtifacts;

  const visibleNativeExamples =
    collection === "pairs" || collection === "skills"
      ? []
      : collection === "mockups"
        ? highFidelityMockups
        : nativeExamples;

  const featuredSequenceVisible =
    collection === "all";

  const visibleSkills =
    collection === "pairs" || collection === "mockups"
      ? []
      : catalogSkills;

  const groupedArtifacts = catalogCategories
    .map((item) => ({
      category: item,
      artifacts: visibleArtifacts.filter(
        (artifact) => artifact.category === item.id,
      ),
    }))
    .filter((group) => group.artifacts.length > 0);

  const visibleCount =
    visibleArtifacts.length +
    visibleNativeExamples.length +
    visibleSkills.length +
    Number(featuredSequenceVisible);

  function updateUrl(
    next: {
      collection?: CollectionFilter;
      previewMode?: PreviewMode;
      view?: CatalogView;
    },
    options: { clearHash?: boolean; replace?: boolean } = {},
  ) {
    const url = new URL(window.location.href);
    const nextCollection = next.collection ?? collection;
    const nextPreview = next.previewMode ?? previewMode;
    const nextView = next.view ?? view;

    if (nextCollection === "all") url.searchParams.delete("collection");
    else url.searchParams.set("collection", nextCollection);

    if (nextPreview === "animated") url.searchParams.delete("preview");
    else url.searchParams.set("preview", nextPreview);

    if (nextView === "expanded") url.searchParams.delete("view");
    else url.searchParams.set("view", nextView);

    if (options.clearHash) url.hash = "";

    window.history[options.replace ? "replaceState" : "pushState"](
      null,
      "",
      url,
    );
  }

  function chooseCollection(next: CollectionFilter) {
    if (next === collection) return;
    setCollection(next);
    updateUrl({ collection: next }, { clearHash: true });
  }

  function choosePreview(next: PreviewMode) {
    if (next === previewMode) return;
    setPreviewMode(next);
    updateUrl({ previewMode: next });
  }

  function chooseView(next: CatalogView) {
    if (next === view) return;

    const update = () =>
      flushSync(() => {
        setHasChangedView(true);
        setView(next);
      });
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const transitionDocument = document as ViewTransitionDocument;

    if (!reduceMotion && transitionDocument.startViewTransition) {
      transitionDocument.startViewTransition(update);
      updateUrl({ view: next });
      return;
    }

    update();
    updateUrl({ view: next });
  }

  return (
    <>
      <section className={styles.catalogControls} aria-label="Catalog filters">
        <div
          className={`${styles.controlsInner} ${
            collection === "mockups" || collection === "skills"
              ? styles.controlsInnerWithoutPreview
              : ""
          }`}
        >
          <div className={styles.collectionFilters} role="group" aria-label="Collection">
            {collectionOptions.map((option) => (
              <button
                type="button"
                key={option.id}
                aria-pressed={collection === option.id}
                onClick={() => chooseCollection(option.id)}
              >
                <span>{option.label}</span>
                <small>{option.count}</small>
              </button>
            ))}
          </div>

          {(collection === "all" || collection === "pairs") && (
            <div
              className={styles.previewToggle}
              role="group"
              aria-label="SVG preview mode"
            >
              <button
                type="button"
                aria-pressed={previewMode === "static"}
                onClick={() => choosePreview("static")}
              >
                <ImageIcon aria-hidden="true" />
                Static
              </button>
              <button
                type="button"
                aria-pressed={previewMode === "animated"}
                onClick={() => choosePreview("animated")}
              >
                <Sparkles aria-hidden="true" />
                Animated
              </button>
            </div>
          )}

          <div className={styles.viewToggle} role="group" aria-label="Catalog view">
            <button
              type="button"
              aria-pressed={view === "expanded"}
              onClick={() => chooseView("expanded")}
            >
              <GalleryVerticalEnd aria-hidden="true" />
              Expanded
            </button>
            <button
              type="button"
              aria-pressed={view === "compact"}
              onClick={() => chooseView("compact")}
            >
              <Rows3 aria-hidden="true" />
              Compact
            </button>
          </div>
        </div>
        <p className={styles.resultCount} aria-live="polite">
          Showing {visibleCount} of {totalEntryCount} ·{" "}
          {view === "compact" ? "Compact" : "Expanded"}
        </p>
      </section>

      <div
        className={styles.catalogResults}
        data-view={view}
        data-view-motion={hasChangedView ? view : undefined}
      >
        {featuredSequenceVisible && (
          <div
            className={styles.featuredSequenceWrap}
            data-catalog-motion="featured-sequence"
          >
            <FeaturedSequence
              artifact={featuredNativeArtifact}
              density={view === "compact" ? "folio" : "open"}
            />
          </div>
        )}

        {groupedArtifacts.map((group) => (
          <CategoryBand
            category={group.category}
            artifacts={group.artifacts}
            key={group.category.id}
            previewMode={previewMode}
          />
        ))}

        {visibleNativeExamples.length > 0 && (
          <section
            className={styles.nativeSection}
            data-catalog-motion="native-examples"
            id="native-examples"
          >
            <header className={styles.sectionIntro}>
              <h2>
                {collection === "mockups"
                  ? "High-fidelity product mockups."
                  : "Built here, open in place."}
              </h2>
              <p>
                {collection === "mockups"
                  ? "Three responsive, interactive HTML studies that borrow the information density and interaction grammar of familiar products."
                  : "Readiness studies and high-fidelity product-interface studies, built as responsive, interactive HTML. Each one is the artifact, not a screenshot standing in for it."}
              </p>
            </header>
            <div className={styles.nativeExamples}>
              {visibleNativeExamples.map((example) => (
                <article className={styles.nativeExample} key={example.id}>
                  <Link className={styles.nativePreview} href={example.liveUrl}>
                    <Image
                      src={example.screenshot}
                      alt={`Screenshot of ${example.title}`}
                      width={example.screenshotWidth}
                      height={example.screenshotHeight}
                    />
                  </Link>
                  <div className={styles.nativeCopy}>
                    <span>{example.mode}</span>
                    <h3>{example.title}</h3>
                    <p>{example.description}</p>
                    <div>
                      <Link href={example.liveUrl}>
                        Open live HTML
                        <ArrowUpRight aria-hidden="true" />
                      </Link>
                      <Link href={example.guideUrl}>
                        Read the guide
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {visibleSkills.length > 0 && (
          <section
            className={styles.skillsSection}
            data-catalog-motion="skills"
            id="skills"
          >
            <header className={styles.sectionIntro}>
              <h2>The methods behind the artifacts.</h2>
              <p>
                Five focused skills turn a broad request into an artifact with
                the right fidelity, behavior, and verification boundary.
              </p>
            </header>
            <div className={styles.skillLedger}>
              {visibleSkills.map((skill) => (
                <article className={styles.skillRow} key={skill.id}>
                  <span
                    className={`${styles.skillMark} ${styles[`skillMark${skill.color[0].toUpperCase()}${skill.color.slice(1)}`]}`}
                    aria-hidden="true"
                  />
                  <div>
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                  </div>
                  <div className={styles.skillActions}>
                    <Link href={skill.guideUrl}>
                      <BookOpen aria-hidden="true" />
                      Guide
                    </Link>
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

      </div>
    </>
  );
}
