import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDialog } from "@/components/ProjectDialog";
import { projects, projectFilters, type Project } from "@/data/projects";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-edit">
        <div className="flex flex-col gap-4">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Projects
            </span>
            <h2 className="mt-2 font-display text-4xl font-medium sm:text-5xl lg:text-6xl">
              Selected work and <br className="hidden sm:block" /> focus areas.
            </h2>
          </Reveal>
        </div>

        <motion.div layout className="mt-16 grid grid-cols-1 gap-6 sm:mt-20">
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
        </motion.div>

        <ProjectDialog project={active} onOpenChange={(open) => !open && setActive(null)} />
      </div>
    </section>
  );
}
