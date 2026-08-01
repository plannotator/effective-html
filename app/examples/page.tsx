import { SiteHeader } from "@/components/site-header";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "Inspect Effective HTML wireframes and prototypes built from the same product brief.",
};

export default function ExamplesPage() {
  return (
    <div className="examples-page">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-header-field">
        <SiteHeader />
      </div>
      <main id="main-content" tabIndex={-1}>
      <section className="examples-hero">
        <div className="examples-hero-copy">
          <h1>Examples you can inspect, not just admire.</h1>
          <p>
            The same release-readiness brief becomes two different artifacts.
            The wireframe supports structural judgment. The prototype supports
            behavioral judgment.
          </p>
        </div>
      </section>

      <section className="examples-list">
        <article className="example-entry" id="wireframe">
          <div className="example-entry-copy">
            <h2>Release readiness wireframe</h2>
            <p>
              A deliberately unfinished artifact for comparing hierarchy,
              content, navigation, and responsive structure before visual polish
              raises the cost of change.
            </p>
            <a
              href="/examples/release-readiness/wireframe.html"
              target="_blank"
              rel="noreferrer"
            >
              Open standalone wireframe
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="example-frame example-frame-wireframe">
            <iframe
              src="/examples/release-readiness/wireframe.html"
              title="Interactive preview of the release readiness wireframe"
              loading="lazy"
            />
          </div>
        </article>

        <article className="example-entry example-entry-reverse" id="prototype">
          <div className="example-entry-copy">
            <h2>Release readiness prototype</h2>
            <p>
              A working flow for testing blocked, ready, loading, failure, and
              recovery states, including the product boundary between
              validation and release.
            </p>
            <a
              href="/examples/release-readiness/prototype.html"
              target="_blank"
              rel="noreferrer"
            >
              Open standalone prototype
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="example-frame example-frame-prototype">
            <iframe
              src="/examples/release-readiness/prototype.html"
              title="Interactive preview of the release readiness prototype"
              loading="lazy"
            />
          </div>
        </article>
      </section>
      </main>
    </div>
  );
}
