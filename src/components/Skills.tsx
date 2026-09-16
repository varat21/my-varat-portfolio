import { Database, Server, Braces } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiSupabase,
  SiPython,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { skillGroups } from "@/data/skills";
import type { IconType } from "react-icons";

const brandIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Supabase: SiSupabase,
  Python: SiPython,
  Git: SiGit,
  GitHub: SiGithub,
  Vercel: SiVercel,
  Figma: SiFigma,
};

const genericIcons: Record<string, typeof Server> = {
  "REST APIs": Server,
  SQL: Database,
  "VS Code": Braces,
};

function SkillIcon({ name }: { name: string }) {
  const Brand = brandIcons[name];
  const Generic = genericIcons[name];

  if (Brand) return <Brand size={14} className="text-accent" />;
  if (Generic) return <Generic size={14} className="text-accent" strokeWidth={1.5} />;
  return <span className="h-1.5 w-1.5 rounded-full bg-accent" />;
}

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Tech Stack"
              title="Tools & technologies"
              description="The stack I reach for most, kept deliberately small."
            />
          </div>

          <div className="space-y-12 lg:col-span-8">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.08}>
                <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:gap-10">
                  <span className="w-32 shrink-0 pe-2 text-sm text-muted-foreground">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[0.85rem] text-muted-foreground transition-all duration-300 ease-signature hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/5 hover:text-foreground"
                      >
                        <SkillIcon name={skill} />
                        {skill}
                      </span>
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