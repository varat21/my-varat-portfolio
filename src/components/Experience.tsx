import { Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { education, experience } from "@/data/experience";

const isCurrent = (period: string) => period.includes("Present");

function TimelineDot({ current }: { current: boolean }) {
  return (
    <span
      aria-hidden
      className="absolute -left-[calc(1.25rem+6.5px)] top-1.5 flex size-3 items-center justify-center rounded-full border border-accent bg-background sm:-left-[calc(2rem+6.5px)]"
    >
      {current && <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />}
    </span>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section border-t border-border">
      <div className="container-edit flex flex-col gap-10">
        <SectionHeader
          eyebrow="Experience"
          title="My Journey"
          description="Where I've worked, what I've shipped, and what I'm learning along the way."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-5 lg:col-span-7">
            <h3 className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              <Briefcase className="size-4 text-accent" strokeWidth={1.5} aria-hidden />
              Work experience
            </h3>
            <Stagger as="ol" className="relative ml-1.5 flex flex-col gap-8 border-l border-border pl-5 sm:ml-2 sm:pl-8">
              {experience.map((role) => (
                <StaggerItem as="li" key={role.org} className="relative">
                  <TimelineDot current={isCurrent(role.period)} />
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="num text-sm text-muted-foreground">{role.period}</span>
                      {isCurrent(role.period) && <Badge variant="success">Current</Badge>}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-display text-h3 font-semibold">{role.role}</h4>
                      <p className="text-muted-foreground">{role.org}</p>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {role.points.map((point) => (
                        <li
                          key={point}
                          className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted-foreground"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-5">
            <h3 className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              <GraduationCap className="size-4 text-accent" strokeWidth={1.5} aria-hidden />
              Education
            </h3>
            <Stagger as="ol" className="relative ml-1.5 flex flex-col gap-8 border-l border-border pl-5 sm:ml-2 sm:pl-8">
              {education.map((item) => (
                <StaggerItem as="li" key={item.degree} className="relative">
                  <TimelineDot current={isCurrent(item.period)} />
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="num text-sm text-muted-foreground">{item.period}</span>
                      {isCurrent(item.period) && <Badge variant="success">Current</Badge>}
                    </div>
                    <h4 className="font-display text-lg font-semibold leading-snug">{item.degree}</h4>
                    <p className="text-sm text-muted-foreground">{item.school}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
