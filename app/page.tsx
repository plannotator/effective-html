import { SiteHeader } from "@/components/site-header";
import { SpecimenStack } from "@/components/specimen-stack";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  LayoutTemplate,
  MousePointerClick,
  Network,
} from "lucide-react";
import Link from "next/link";

const artifactLinks = [
  {
    title: "Wireframes",
    description: "Test hierarchy, content, navigation, and responsive structure.",
    href: "/docs/wireframes",
    color: "cobalt",
    icon: LayoutTemplate,
  },
  {
    title: "Prototypes",
    description: "Test a credible flow, its behavior, and its relevant states.",
    href: "/docs/prototypes",
    color: "green",
    icon: MousePointerClick,
  },
  {
    title: "Diagrams",
    description: "Make relationships and system behavior easier to inspect.",
    href: "/docs/diagrams",
    color: "lilac",
    icon: Network,
  },
  {
    title: "Plans",
    description: "Keep implementation sequences legible and source-grounded.",
    href: "/docs/plans",
    color: "pink",
    icon: Braces,
  },
];

export default function HomePage() {
  return (
    <div className="catalog-page">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-header-field">
        <SiteHeader />
      </div>
      <main id="main-content" tabIndex={-1}>
      <section className="catalog-hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>
              Effective
              <br />
              HTML
            </h1>
            <p className="hero-byline">
              by{" "}
              <a href="https://plannotator.ai">
                <span>Plannotator</span>
              </a>
            </p>
            <h2>HTML for thinking with agents.</h2>
            <p className="hero-intro">
              A visual field guide to choosing and making the right artifact:
              from rough wireframes to working prototypes, diagrams, and small
              purpose-built interfaces.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/docs">
                Read the guide
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="button button-secondary" href="/catalog">
                Browse the catalog
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <SpecimenStack />
        </div>
      </section>

      <section className="catalog-paper artifact-catalog">
        <div className="section-heading">
          <h2>Match the artifact to the decision.</h2>
          <p>
            HTML earns its place when spatial, visual, comparative, or
            interactive expression makes the work easier to understand.
          </p>
        </div>

        <div className="artifact-layout">
          <div className="artifact-feature" aria-hidden="true">
            <div className="feature-wireframe">
              <span className="feature-box feature-box-large" />
              <span className="feature-box" />
              <span className="feature-box" />
              <span className="feature-lines" />
            </div>
            <div className="feature-mockup">
              <span className="feature-sun" />
              <span className="feature-landscape" />
              <span className="feature-copy" />
              <span className="feature-button" />
            </div>
            <div className="feature-prototype">
              <span className="feature-toggle">
                <i />
              </span>
              <span className="feature-panel" />
              <span className="feature-control" />
            </div>
          </div>

          <div className="artifact-index">
            {artifactLinks.map((artifact) => {
              const Icon = artifact.icon;
              return (
                <Link
                  className={`artifact-link artifact-${artifact.color}`}
                  href={artifact.href}
                  key={artifact.title}
                >
                  <span className="artifact-link-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span>
                    <strong>{artifact.title}</strong>
                    <small>{artifact.description}</small>
                  </span>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="catalog-ink why-html">
        <div className="why-statement">
          <h2>Use HTML when the thing itself carries the explanation.</h2>
          <p>
            Markdown is often enough. HTML becomes useful when a reader needs
            to compare structure, manipulate state, inspect relationships, or
            participate in the idea.
          </p>
          <Link className="text-link" href="/docs/why-html">
            Why HTML?
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="why-uses">
          <div>
            <span className="use-mark use-mark-cobalt" />
            <strong>See structure</strong>
            <p>Make layout, hierarchy, and responsive choices visible.</p>
          </div>
          <div>
            <span className="use-mark use-mark-green" />
            <strong>Test behavior</strong>
            <p>Exercise states, feedback, recovery, and product boundaries.</p>
          </div>
          <div>
            <span className="use-mark use-mark-pink" />
            <strong>Share the thing</strong>
            <p>Give collaborators an artifact they can inspect and direct.</p>
          </div>
        </div>
      </section>

      </main>

      <footer className="catalog-footer">
        <div>
          <strong>Effective HTML</strong>
          <span>by Plannotator</span>
        </div>
        <p>Useful artifacts for developers working with agents.</p>
        <nav aria-label="Footer navigation">
          <Link href="/catalog">Catalog</Link>
          <Link href="/docs">Guide</Link>
          <Link href="/examples">Examples</Link>
          <a href="https://github.com/plannotator/effective-html">GitHub</a>
        </nav>
      </footer>
    </div>
  );
}
