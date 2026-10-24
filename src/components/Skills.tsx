import { Braces, Database, Server } from "lucide-react";
import {
  SiFigma,
  SiGit,
  SiGithub,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";
import { SectionHeader } from "@/components/SectionHeader";
import { skillGroups } from "@/data/skills";

const brandIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss,
  "Tailwind CSS": SiTailwindcss,
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

  if (Brand) return <Brand size={14} className="text-accent" aria-hidden />;
  if (Generic) return <Generic size={14} className="text-accent" strokeWidth={1.5} aria-hidden />;
  return <span aria-hidden className="size-1.5 rounded-full bg-accent" />;
}

export function Skills() {
  return (
    <section id="skills" className="section border-t border-border">
      <div className="container-edit flex flex-col gap-10">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools & technologies"
          description="The stack I reach for most, kept deliberately small."
        />

        <Stagger className="grid gap-4 sm:grid-cols-12">
          {skillGroups.map((group) => (
            <StaggerItem key={group.label} className={group.span}>
              <GlowCard className="h-full" innerClassName="flex h-full flex-col gap-5 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <group.Icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-display text-h3 font-semibold">{group.label}</h3>
                    <p className="text-sm text-muted-foreground">{group.blurb}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="inline-flex h-8 items-center gap-2 rounded-full border border-border bg-background/60 px-3 text-sm transition-[transform,border-color,box-shadow] duration-200 ease-signature hover:scale-105 hover:border-accent/60 hover:shadow-glow"
                    >
                      <SkillIcon name={skill} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
