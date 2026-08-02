import { CatalogExplorer } from "@/components/catalog-explorer";
import styles from "@/components/catalog-explorer.module.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  catalogArtifacts,
  catalogCategories,
  nativeExamples,
} from "@/lib/catalog-data";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Browse Effective HTML skills, worked examples, Thariq Shihipar’s HTML references, and the complete Effective SVG collection.",
};

const folioAssets = [
  {
    src: "/catalog/effective-svg/static/01-exploration-code-approaches.svg",
    alt: "Abstract comparison of three code approaches",
  },
  {
    src: "/catalog/effective-svg/animated/07-prototype-animation.svg",
    alt: "Animated abstract prototype sandbox",
  },
  {
    src: "/catalog/effective-svg/static/13-flowchart-diagram.svg",
    alt: "Abstract annotated flowchart",
  },
  {
    src: "/catalog/effective-svg/animated/18-editor-triage-board.svg",
    alt: "Animated abstract ticket triage board",
  },
  {
    src: "/catalog/effective-svg/static/15-research-concept-explainer.svg",
    alt: "Abstract interactive concept explainer",
  },
];

const categoryGuideNotes: Record<string, string> = {
  exploration: "Compare directions and plan the work.",
  review: "Make code and changes easier to inspect.",
  design: "See tokens, components, and states together.",
  prototyping: "Test interaction and motion by feel.",
  diagrams: "Explain systems, sequences, and process.",
  decks: "Tell a meeting-sized browser story.",
  research: "Teach an unfamiliar system or concept.",
  reports: "Make status and incidents scannable.",
  editors: "Turn a decision into a focused tool.",
};

export default function CatalogPage() {
  return (
    <div className="catalog-page">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-header-field">
        <SiteHeader />
      </div>
      <main id="main-content" tabIndex={-1}>
      <section className={styles.catalogHero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTitle}>
            <h1>Catalog</h1>
            <p>
              The work itself: twenty HTML references, forty SVG renderings,
              five skills, and six native artifacts you can open and inspect.
            </p>
            <a href="#catalog-collection">
              Browse the collection
              <ArrowRight aria-hidden="true" />
            </a>
          </div>

          <div className={styles.heroFolio} aria-label="Catalog specimen folio">
            {folioAssets.map((asset) => (
              <div className={styles.folioSheet} key={asset.src}>
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  width={165}
                  height={202}
                  unoptimized
                />
              </div>
            ))}
          </div>

          <aside className={styles.heroIndex} aria-label="Catalog contents">
            <div className={styles.heroIndexHeading}>
              <h2>Find the right artifact</h2>
              <span>Nine subjects</span>
            </div>
            <nav className={styles.heroGuide} aria-label="Browse catalog by subject">
              {catalogCategories.map((category) => {
                const referenceCount = catalogArtifacts.filter(
                  (artifact) => artifact.category === category.id,
                ).length;
                const nativeCount = nativeExamples.filter(
                  (example) => example.category === category.id,
                ).length;
                const featuredCount = category.id === "diagrams" ? 1 : 0;
                const count = referenceCount + nativeCount + featuredCount;

                return (
                  <a href={`#${category.id}`} key={category.id}>
                    <span
                      className={styles.heroGuideSwatch}
                      style={{ backgroundColor: category.color }}
                      aria-hidden="true"
                    />
                    <span className={styles.heroGuideCopy}>
                      <strong>{category.label}</strong>
                      <small>{categoryGuideNotes[category.id]}</small>
                    </span>
                    <b>{count}</b>
                  </a>
                );
              })}
            </nav>
            <p>
              Jump to a subject, or use Compact below for a quick scan of the
              whole collection.
            </p>
          </aside>
        </div>
      </section>

      <div id="catalog-collection">
        <CatalogExplorer />
      </div>

      <section className={styles.sourceNotes}>
        <div>
          <h2>Sources remain visible.</h2>
          <p>
            The twenty reference examples accompany Thariq Shihipar’s essay on
            using HTML to stay engaged with agent work. Effective SVG reinterprets
            those same subjects as static and animated vector artifacts. The
            native collection adds the featured request-path explorer, two
            release-readiness studies, and three unaffiliated product-interface
            studies built with synthetic data.
          </p>
        </div>
        <div className={styles.sourceLinks}>
          <a
            href="https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html"
            target="_blank"
            rel="noreferrer"
          >
            Read Thariq’s essay
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://thariqs.github.io/html-effectiveness/"
            target="_blank"
            rel="noreferrer"
          >
            Open the original gallery
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://github.com/plannotator/effective-svg"
            target="_blank"
            rel="noreferrer"
          >
            View Effective SVG
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
      </main>

      <SiteFooter />
    </div>
  );
}
