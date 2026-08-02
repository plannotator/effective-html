import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="docs-wordmark">
          <span className="docs-wordmark-mark" aria-hidden="true" />
          Effective HTML
        </span>
      ),
      url: "/",
    },
    links: [
      {
        text: "Catalog",
        url: "/catalog",
      },
      {
        text: "Examples",
        url: "/examples",
      },
      {
        text: "GitHub",
        url: "https://github.com/plannotator/effective-html",
        external: true,
      },
    ],
    githubUrl: "https://github.com/plannotator/effective-html",
  };
}
