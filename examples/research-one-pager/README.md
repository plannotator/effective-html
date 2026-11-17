# Research one-pager

Turn public documentation into a page a teammate can read in a minute, while
keeping each factual claim connected to its source. The topic is deliberately
small: what a shareable HTML brief can do without JavaScript.

[Open the one-pager](one-pager.html) directly in a browser. It needs no build,
JavaScript, or network connection to render. Following an external reference
requires a connection. Try the disclosure, follow a numbered citation to its
reference, and use the browser's print preview to see the full source URLs.

## Start with the existing skill

From the repository root, copy the example if you want to adapt it:

```bash
cp examples/research-one-pager/one-pager.html my-brief.html
```

To compose a new version with your agent, install `one-pager` using the
[repository's installation instructions](../../README.md#install), then supply
the [brief and source notes](brief.md) with this prompt:

```text
Use one-pager and examples/research-one-pager/brief.md to make my-brief.html.
Write one self-contained HTML page for a teammate who has a minute.
Use the supplied research notes; do not browse or add factual claims.
Keep the recommendation separate from the documented facts.
Place a numbered citation beside each fact and link it to a visible References
section. Preserve every source URL exactly, including its path and case.
Show the full URLs in the references so they survive printing.
Keep the facts and references visible without opening a disclosure.
Verify a wide and narrow viewport, keyboard operation, and print layout.
```

In Codex, invoke the installed skill as `$one-pager`. The committed HTML is a
worked example, not an expected pixel-for-pixel result from this prompt.

## Optional: refresh the public research with Parallel

You can use supplied sources or your existing research tools. If your agent
host supports MCP, [Parallel MCP setup](https://docs.parallel.ai/integrations/mcp/quickstart)
offers `web_search` and `web_fetch` without a Parallel key, subject to lower
rate limits. For example, add a separately named server in Codex:

```bash
codex mcp add effective-html-research --url https://mcp.parallel.ai/mcp
```

Restart the agent session if needed so the server's tools become available.
Keep your host's normal tool permissions. Replace the supplied-notes instruction
in the prompt with:

```text
Before making the page, use effective-html-research's web_search to find public
MDN documentation about HTML hyperlinks, details/summary, and CSS print styles.
Read the relevant excerpts; use web_fetch if a claim needs more context.
Save each chosen result's title, exact URL, supported fact, and today's check
date in research-notes.md. Use those notes as the source for the one-pager.
If research fails or is rate-limited, report it and use only the supplied notes;
keep their original check date. Do not invent a citation or mark them refreshed.
```

Review the source notes before sharing the HTML. Removing this optional server
leaves the supplied-notes workflow available:

```bash
codex mcp remove effective-html-research
```

The example was contributed by George Pickett, who works at Parallel.
See the [validation record](validation.md) for what was actually exercised.
