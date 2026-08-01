import type { FeaturedNativeArtifact } from "@/lib/catalog-data";
import { ArrowUpRight, CirclePlay, MousePointer2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./featured-sequence.module.css";

type FeaturedSequenceProps = {
  artifact: FeaturedNativeArtifact;
  density?: "open" | "folio";
};

export function FeaturedSequence({
  artifact,
  density = "open",
}: FeaturedSequenceProps) {
  return (
    <section
      className={styles.feature}
      data-density={density}
      id="featured-sequence"
      aria-labelledby={`featured-sequence-title-${density}`}
    >
      <div className={styles.copy}>
        <span className={styles.eyebrow}>{artifact.eyebrow}</span>
        <h2 id={`featured-sequence-title-${density}`}>
          Follow a request through the whole stack.
        </h2>
        <p>{artifact.description}</p>

        <ul className={styles.flowList} aria-label="Selectable request paths">
          {artifact.flowLabels.map((flow) => (
            <li key={flow}>{flow}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href={artifact.htmlUrl} target="_blank" rel="noreferrer">
            <MousePointer2 aria-hidden="true" />
            Open interactive HTML
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <a href={artifact.readmeMediaUrl} target="_blank" rel="noreferrer">
            <CirclePlay aria-hidden="true" />
            Original README recording
          </a>
        </div>
      </div>

      <figure className={styles.recording}>
        <video
          controls
          muted
          playsInline
          preload="metadata"
          poster={artifact.posterUrl}
          aria-label="Recording of the interactive architecture request-path explorer"
        >
          <source src={artifact.videoUrl} type="video/mp4" />
        </video>
        <figcaption>
          <span>30.5 second interaction recording</span>
          <span>The diagram responds to flow and node selection.</span>
        </figcaption>
      </figure>

      <a
        className={styles.synopsis}
        href={artifact.animatedPreviewUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Open the animated SVG synopsis of the request paths"
      >
        <span>
          <Sparkles aria-hidden="true" />
          Animated synopsis
        </span>
        <Image
          src={artifact.animatedPreviewUrl}
          alt="Animated synopsis cycling through four architecture request paths"
          width={960}
          height={540}
          unoptimized
        />
        <small>Supporting preview · the live HTML is the artifact</small>
      </a>
    </section>
  );
}
