import { lazy, Suspense, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, projectFilters, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const loadDialog = () => import("@/components/ProjectDialog");
const ProjectDialog = lazy(() =>
  loadDialog().then((mod) => ({ default: mod.ProjectDialog }))
);

type Filter = (typeof projectFilters)[number];

const matches = (project: Project, filter: Filter) =>
  filter === "All" || project.categories.includes(filter);

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  // `active` is kept after closing so the dialog can play its exit animation.
  const [active, setActive] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const filtered = projects.filter((p) => matches(p, filter));

  const openProject = (project: Project) => {
    setActive(project);
    setOpen(true);
  };

  return (
    <section id="projects" className="section border-t border-border">
      <div className="container-edit flex flex-col gap-8">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work and focus areas."
          description="A few projects that show how I think about product, design, and engineering."
        />

        <Reveal>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {projectFilters.map((f) => {
              const isActive = filter === f;
              const count = projects.filter((p) => matches(p, f)).length;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-surface text-muted-foreground hover:border-input hover:text-foreground"
                  )}
                >
                  {f}
                  <span className={cn("num text-xs", isActive && "opacity-70")}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <p className="sr-only" role="status">
          Showing {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </p>

        <ul className="grid gap-5">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((project, i) => (
              <m.li
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                exit={{ opacity: 0, y: 8, transition: { duration: 0.2, delay: 0 } }}
                // 0.1s stagger per card, so cards visible together enter in sequence.
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} onOpen={openProject} onIntent={loadDialog} />
              </m.li>
            ))}
          </AnimatePresence>
        </ul>

        {active && (
          <Suspense fallback={null}>
            <ProjectDialog project={active} open={open} onOpenChange={setOpen} />
          </Suspense>
        )}
      </div>
    </section>
  );
}
