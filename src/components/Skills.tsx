import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Tech Stack
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">Tools &amp; technologies</h2>
              <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
                The stack I reach for most, kept deliberately small.
              </p>
            </Reveal>
          </div>

          <div className="space-y-12 lg:col-span-8">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.08}>
                <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:gap-10">
                  <span className="w-32 shrink-0 text-sm text-muted-foreground">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
