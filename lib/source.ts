import { defineDocs } from "fumadocs-mdx/macro";
import { loader } from "fumadocs-core/source";

const docs = defineDocs({
  dir: "content/docs",
});

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});
