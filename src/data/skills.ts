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
  items: [
    "Next.js API Routes",
    "Next.js Server Actions",
    "PHP",
    "SQL",
    "Supabase",
    "Python",
    "Email Authentication",
  ],
},
  {
    label: "Tools",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Figma"],
  },
];
