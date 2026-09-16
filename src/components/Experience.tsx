import { GraduationCap, Briefcase } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { experience, education } from "@/data/experience";

const indexLabel = (i: number) => String(i + 1).padStart(2, "0");

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container-edit">
        <SectionHeader
          eyebrow="Experience"
          title="My Journey"
          description="Where I've worked, what I've shipped, and what I'm learning along the way."
        />

        {/* Work experience */}
        <div className="mt-16">
          <h3 className="flex items-center gap-2.5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            <Briefcase className="h-4 w-4 text-accent" strokeWidth={1.5} />
            Work experience
          </h3>

          <div className="mt-6 divide-y divide-border border-t border-border">
            {experience.map((role, i) => {
              const isCurrent = role.period.includes("Present");
              return (
                <Reveal key={role.org} delay={i * 0.06}>
                  <div className="relative -mx-4 grid grid-cols-1 gap-x-6 gap-y-5 rounded-2xl px-4 py-8 transition-colors duration-300 hover:bg-muted/40 sm:-mx-8 sm:grid-cols-12 sm:px-8 sm:py-10">
                    <div className="sm:col-span-3">
                      <div className="flex items-center gap-2.5">
                        <span className="num text-sm text-muted-foreground">
                          {role.period}
                        </span>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[0.7rem] font-medium text-emerald-600 dark:text-emerald-400">
                            <span className="h-1 w-1 rounded-full bg-current" />
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <div className="flex items-center gap-3">
                        <span className="num hidden font-display text-sm text-accent/70 lg:block">
                          {indexLabel(i)}
                        </span>
                        <div>
                          <h4 className="font-display text-xl font-medium">
                            {role.role}
                          </h4>
                          <p className="mt-1 text-muted-foreground">{role.org}</p>
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-5">
                      <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 text-[0.95rem] text-muted-foreground sm:grid-cols-2">
                        {role.points.map((point) => (
                          <li key={point} className="flex gap-2.5">
                            <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <Reveal delay={0.1} className="mt-20">
          <h3 className="flex items-center gap-2.5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            <GraduationCap className="h-4 w-4 text-accent" strokeWidth={1.5} />
            Education
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {education.map((item) => {
              const isCurrent = item.period.includes("Present");
              return (
                <div
                  key={item.degree}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 ease-signature hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <GraduationCap className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <p className="font-display text-lg leading-snug">{item.degree}</p>
                    </div>
                    {isCurrent && (
                      <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[0.7rem] font-medium text-emerald-600 dark:text-emerald-400">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-3 pl-[3.375rem] text-sm text-muted-foreground">
                    {item.school}
                  </p>
                  <p className="num mt-4 pl-[3.375rem] text-xs uppercase tracking-wider text-muted-foreground/70">
                    {item.period}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}