import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import {
  FidelityWorkbench,
  GuideChapterEvidence,
  GuideHandoff,
  GuideNext,
} from "@/components/guide-evidence";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    FidelityWorkbench,
    GuideChapterEvidence,
    GuideHandoff,
    GuideNext,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
