import { Reveal } from "@/components/Reveal";
import { experience, education } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container-edit">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Experience
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">My Journey</h2>
        </Reveal>

        <div className="mt-16 divide-y divide-border border-t border-border">
          {experience.map((role, i) => (
            <Reveal key={role.org} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-12 sm:gap-8">
                <div className="sm:col-span-3">
                  <span className="num text-sm text-muted-foreground">{role.period}</span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-display text-xl font-medium">{role.role}</h3>
                  <p className="mt-1 text-muted-foreground">{role.org}</p>
                </div>
                <div className="sm:col-span-5">
                  <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-[0.95rem] text-muted-foreground sm:grid-cols-2">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <h3 className="text-sm text-muted-foreground">Education</h3>
          <div className="mt-6 divide-y divide-border border-t border-border">
            {education.map((item) => (
              <div
                key={item.degree}
                className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-8"
              >
                <div className="sm:col-span-3">
                  <span className="num text-sm text-muted-foreground">{item.period}</span>
                </div>
                <div className="sm:col-span-9">
                  <p className="font-display text-lg">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
