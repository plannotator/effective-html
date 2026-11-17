# Validation record

Checked November 17, 2026, on Linux. The artifact was composed from the
[brief](brief.md) using the existing one-pager format. The checks below cover
live research, host configuration, and the committed HTML separately. They do
not establish a complete agent-driven generation run from the README prompt.

## Public research

- An anonymous Unified MCP connection initialized successfully and listed
  `web_search` and `web_fetch`.
- A real search for MDN documentation about hyperlinks, details/summary, and
  print styles returned all three URLs recorded in `brief.md`.
- A real fetch of those three URLs returned relevant excerpts with no reported
  extraction errors. The notes paraphrase those excerpts and search results.
- Requests sent `User-Agent: effective-html-research-example/1.0` and no
  authorization header, API key, or account state. Research was performed with
  a temporary Python standard-library MCP client, independently of the HTML.

See [Parallel MCP setup](https://docs.parallel.ai/integrations/mcp/quickstart)
for the current service and client configuration.

## Optional host configuration

The documented `codex mcp add` and `codex mcp remove` commands were exercised
with Codex CLI 0.153.3 in an empty, temporary configuration directory. The
intermediate configuration contained the named Streamable HTTP server with no
bearer token or headers; removing it left no server entry. This checks
registration and cleanup, not a live tool call through an agent session.

## HTML artifact

Playwright 1.58.2 with Chromium 145.0.7632.6 opened `one-pager.html` directly
from disk, with JavaScript disabled and the browser offline.

| Check | Result |
| --- | --- |
| Source identity | All three URLs match the search results, fetched URLs, notes, reference `href` values, and visible URL text exactly |
| Inline citations | All three keyboard-activated citations reach the corresponding visible reference entry |
| Native disclosure | Space opens it; Enter closes it; facts and references stay visible |
| Keyboard focus | Links and summary have a visible outline |
| Responsive layout | No page overflow at widths of 320, 390, and 1440 CSS pixels in light and dark themes |
| Self-containment | No external resource requests, remote assets, scripts, or stylesheets |
| Runtime errors | No console or page errors in the tested views |
| Automated accessibility | axe-core 4.11.1 reported no WCAG A/AA violations in the 390-pixel light and dark views |
| Print | One A4 PDF page at 12 mm margins retains all three facts and full source URLs |

Desktop and mobile renders were also visually inspected. Automated checks do
not replace assistive-technology testing. No claim is made about other browser
engines or a clean invocation of the skill in a new agent session.

## Recheck after adapting

1. Open `one-pager.html` directly in a browser, then disable the network and
   reload. Confirm that all essential content remains visible.
2. At desktop and phone widths, check for clipping and horizontal scrolling.
   Check both OS color themes.
3. Tab to each numbered citation and press Enter. Compare the destination
   entry's full URL with its original source note, including path and case.
4. Tab to the disclosure and try Space and Enter. Confirm that closing it
   leaves the facts and references available.
5. Open print preview. Verify the facts and all full URLs remain legible. The
   optional disclosure is omitted from the print layout.
6. For refreshed research, check the original source pages before updating
   claims and dates. Test research failures separately from rendering.
