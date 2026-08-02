import "@fontsource-variable/inter";
import "@fontsource-variable/inter-tight";
import "./global.css";

import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";

const directionContract = `<!--
THESIS: Effective HTML makes the artifact itself the proof and refuses the generic docs landing built from interchangeable cards.
OWN-WORLD: Ink and warm paper carry crisp cobalt, lilac, green, and pink specimens with exact grotesk type, fine rules, paper tooth, and controlled overlap.
STORY: A developer sees what Effective HTML is, understands when visual or interactive artifacts add leverage, and enters the guide or real examples.
FIRST VIEWPORT: A quiet five-column title field faces one dense seven-column specimen stack; the guide action sits beneath the thesis on the left.
FORM: Open Specimen, grounded surface candidate 7, seed key 46b33988.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->
<!--
THESIS: The catalog keeps HTML references and SVG interpretations visibly paired and refuses the equal-card gallery.
OWN-WORLD: Full-width cobalt, lilac, green, pink, and coral bands carry staggered warm-paper specimens, crisp rules, exact grotesk type, and bounded physical depth.
STORY: A developer searches by decision, inspects the representation that helps, and opens the original HTML, local SVG, native example, or skill source.
FIRST VIEWPORT: A compact title faces one dense artifact folio and a ruled source count; real search controls introduce the first vivid category band.
FORM: Editorial Category Bands, grounded surface candidate 7, seed key 637d14dd.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export const metadata: Metadata = {
  metadataBase: new URL("https://effectivehtml.com"),
  title: {
    default: "Effective HTML",
    template: "%s · Effective HTML",
  },
  description:
    "A visual field guide for using HTML effectively with coding agents.",
  openGraph: {
    title: "Effective HTML",
    description:
      "Wireframes, prototypes, diagrams, and useful interfaces for thinking with agents.",
    images: ["/brand/effective-html-banner.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Effective HTML",
    description:
      "A visual field guide for using HTML effectively with coding agents.",
    images: ["/brand/effective-html-banner.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <template
          data-impeccable-direction-contract
          dangerouslySetInnerHTML={{ __html: directionContract }}
        />
        <RootProvider
          search={{ enabled: true }}
          theme={{ defaultTheme: "light", enableSystem: true }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
