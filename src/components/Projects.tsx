import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDialog } from "@/components/ProjectDialog";
import { projects, projectFilters, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const project of projects) {
      map.set("All", (map.get("All") ?? 0) + 1);
      for (const cat of project.categories) {
        map.set(cat, (map.get(cat) ?? 0) + 1);
      }
    }
    return map;
  }, []);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work and focus areas."
            description="A few projects that show how I think about product, design, and engineering."
            size="lg"
            className="lg:col-span-9"
          />
        </div>

        {/* Filters */}
        <Reveal delay={0.05}>
          <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {projectFilters.map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 ease-signature focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-surface text-muted-foreground hover:border-accent/50 hover:text-foreground"
                  )}
                >
                  {f}
                  <span
                    className={cn(
                      "num text-xs",
                      isActive ? "text-accent-foreground/80" : "text-muted-foreground/70"
                    )}
                  >
                    {counts.get(f) ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid grid-cols-1 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} onOpen={setActive} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-muted-foreground">
              No projects in this category yet.
            </p>
          )}
        </motion.div>

        <ProjectDialog project={active} onOpenChange={(open) => !open && setActive(null)} />
      </div>
    </section>
  );
}