# A brief that survives forwarding

## Reader and question

A teammate deciding how to share a short technical finding. What can a single
HTML brief do without JavaScript?

## Recommendation

Use native HTML for a readable brief: keep the finding and references visible,
put optional explanation in a disclosure, and include print styles. This is an
editorial recommendation based on the facts below, not a conclusion attributed
to MDN. External reference pages still require a network connection.

## Public source notes

Checked November 17, 2026 with anonymous Parallel MCP `web_search` and
`web_fetch`. These are paraphrased findings, not copied documentation. The check
date records retrieval, not a source publication date or a guarantee of freshness.

### 1. Hyperlinks

- Title: MDN — `<a>`: The Anchor element
- URL: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a
- Supported fact: An anchor with an `href` can link to a page or a location in
  the same document.
- Use in the artifact: Each inline citation links to a local reference entry;
  that entry retains the public source URL.

### 2. Disclosure

- Title: MDN — `<details>`: The Details disclosure element
- URL: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details
- Supported fact: `details` provides a disclosure whose `summary` labels the
  content that can be expanded or collapsed.
- Use in the artifact: One working native disclosure holds optional explanation.
  Keep the cited facts and references outside it.

### 3. Print styles

- Title: MDN — Printing
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Printing
- Supported fact: A CSS `@media print` rule can apply different styles when a
  page is printed on paper or to PDF.
- Use in the artifact: A print rule simplifies the layout. Full source URLs
  remain visible text, so readers can recover the references from paper too.

## Artifact constraints

One HTML file with inline CSS, no scripts, no remote assets or fonts, and no
data requests. Use a small visual explanation, concise prose, numbered inline
citations, and a visible reference section. Keep all three exact URLs intact.
The artifact should open directly from disk and reflow on a narrow screen.
