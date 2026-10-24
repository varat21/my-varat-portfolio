import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/GlowCard";
import { ProjectPreview } from "@/components/ProjectPreview";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  onOpen,
  onIntent,
}: {
  project: Project;
  onOpen: (project: Project) => void;
  /** Fired on hover/focus so the dialog chunk can be prefetched. */
  onIntent?: () => void;
}) {
  return (
    <GlowCard
      as="article"
      tilt={2.5}
      onPointerEnter={onIntent}
      className="group"
      innerClassName="grid gap-5 p-4 sm:p-5 md:grid-cols-12 md:gap-8"
    >
      <div className="md:col-span-5">
        <ProjectPreview project={project} />
      </div>

      <div className="flex flex-col gap-3 md:col-span-7 md:py-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="num text-sm text-muted-foreground">
            {project.index} — {project.year}
          </span>
          {project.categories.map((cat) => (
            <Badge key={cat} variant="solid">
              {cat}
            </Badge>
          ))}
        </div>

        <h3 className="font-display text-h3 font-semibold sm:text-2xl">
          {/* Stretched button: the whole card opens the case study; headings stay valid HTML. */}
          <button
            type="button"
            onClick={() => onOpen(project)}
            onFocus={onIntent}
            className="text-left after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
          >
            {project.title}
          </button>
        </h3>

        <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-accent">
          {project.tech.map((t, i) => (
            <li key={t} className="flex items-center gap-2">
              {t}
              {i < project.tech.length - 1 && (
                <span aria-hidden className="size-1 rounded-full bg-muted-foreground/40" />
              )}
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground">{project.description}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2 text-sm">
          {/* Links sit above the stretched button (z-20) so they stay independently clickable. */}
          <div className="relative z-20 flex items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex min-h-10 items-center gap-1 font-medium hover:text-accent"
              >
                Live demo
                <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex min-h-10 items-center gap-1.5 font-medium hover:text-accent"
              >
                <Github className="size-4" strokeWidth={1.5} aria-hidden />
                GitHub
              </a>
            )}
            {!project.liveUrl && !project.githubUrl && (
              <span className="text-muted-foreground">{project.role}</span>
            )}
          </div>
          <span className="inline-flex items-center gap-1 text-muted-foreground transition-colors duration-200 group-hover:text-accent">
            Case study
            <ArrowUpRight
              className="size-4 transition-transform duration-200 ease-signature group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.75}
              aria-hidden
            />
          </span>
        </div>
      </div>
    </GlowCard>
  );
}
