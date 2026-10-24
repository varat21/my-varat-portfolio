import { useState } from "react";
import type { Project } from "@/data/projects";

function hostOf(url?: string) {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/**
 * Card thumbnail. Uses `project.image` when provided and loadable; otherwise
 * renders a generated browser-window mock so cards are never empty.
 */
export function ProjectPreview({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const host = hostOf(project.liveUrl);
  const monogram = project.title.split(/\s+/)[0].slice(0, 2).toUpperCase();

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-muted">
      <div className="relative aspect-[16/10] w-full overflow-hidden transition-transform duration-500 ease-signature group-hover:scale-[1.02]">
        {project.image && !failed ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            width={1280}
            height={800}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="size-full object-cover object-top"
          />
        ) : (
          <div aria-hidden className="flex size-full flex-col bg-gradient-to-br from-accent/15 via-background to-accent/5">
            {/* window chrome */}
            <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-border bg-surface/80 px-3">
              <span className="size-2 rounded-full bg-muted-foreground/30" />
              <span className="size-2 rounded-full bg-muted-foreground/30" />
              <span className="size-2 rounded-full bg-muted-foreground/30" />
              <span className="ml-2 flex h-5 max-w-[60%] flex-1 items-center truncate rounded bg-muted px-2 text-xs text-muted-foreground">
                {host || "in development"}
              </span>
            </div>
            {/* page skeleton */}
            <div className="relative flex flex-1 flex-col gap-2 p-4">
              <span className="font-display text-7xl font-medium leading-none text-accent/15 absolute right-4 top-2">
                {monogram}
              </span>
              <span className="h-3 w-1/2 rounded-full bg-foreground/15" />
              <span className="h-2 w-3/4 rounded-full bg-foreground/10" />
              <span className="h-2 w-2/3 rounded-full bg-foreground/10" />
              <span className="mt-1 h-5 w-16 rounded-full bg-accent/60" />
              <div className="mt-auto grid grid-cols-3 gap-2">
                <span className="h-10 rounded-md border border-border bg-surface" />
                <span className="h-10 rounded-md border border-border bg-surface" />
                <span className="h-10 rounded-md border border-border bg-surface" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
