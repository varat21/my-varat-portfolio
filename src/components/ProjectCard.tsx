import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      data-cursor="project"
      data-cursor-label="View"
      layout
      className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-surface p-8 text-left transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 sm:p-12"
    >
      {/* Watermark index */}
      <span
        aria-hidden
        className="num pointer-events-none absolute -bottom-8 -right-4 select-none font-display text-[9rem] leading-none text-accent/5 transition-colors duration-500 group-hover:text-accent/10 sm:text-[13rem]"
      >
        {project.index}
      </span>

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {project.categories.map((cat) => (
                <Badge key={cat} variant="solid">
                  {cat}
                </Badge>
              ))}
            </div>
            <h3 className="font-display text-2xl font-medium tracking-tight transition-transform duration-300 ease-signature group-hover:translate-x-1 sm:text-3xl lg:text-4xl">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 text-sm font-medium text-accent">
              {project.tech.map((t, i) => (
                <span key={t}>
                  {t}
                  {i < project.tech.length - 1 && (
                    <span className="ml-2 inline-block h-1 w-1 rounded-full bg-border align-middle" />
                  )}
                </span>
              ))}
            </div>
          </div>
          <motion.span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground"
            whileHover={{ scale: 1.05 }}
          >
            <ArrowUpRight
              className="h-5 w-5 transition-transform duration-300 ease-signature group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </motion.span>
        </div>

        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {project.description}
        </p>

        <div className="mt-4 flex items-center gap-4 text-sm font-medium text-muted-foreground/60">
          <span>{project.year}</span>
          <span className="h-4 w-px bg-border" />
          <span>{project.role}</span>
        </div>
      </div>

      {/* Subtle background glow on hover */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.button>
  );
}