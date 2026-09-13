export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "REST APIs", "SQL", "Supabase"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Figma"],
  },
];
