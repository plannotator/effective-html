import Link from "next/link";

export function SiteFooter() {
  return (
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
      <nav className="footer-references" aria-label="References">
        <span>References</span>
        <a
          href="https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html"
          target="_blank"
          rel="noreferrer"
        >
          The unreasonable effectiveness of HTML
        </a>
        <a
          href="https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck"
          target="_blank"
          rel="noreferrer"
        >
          Understanding is the new bottleneck
        </a>
        <a
          href="https://thariqs.github.io/html-effectiveness/"
          target="_blank"
          rel="noreferrer"
        >
          Original HTML gallery
        </a>
      </nav>
    </footer>
  );
}
