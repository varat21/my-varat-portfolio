import { Blocks, Layers, Server, Wrench, type LucideIcon } from "lucide-react";

export interface SkillGroup {
  label: string;
  blurb: string;
  Icon: LucideIcon;
  items: string[];
  /** Tailwind column span at `sm` and up (12-col bento). */
  span: string;
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    blurb: "Interfaces that are fast, responsive and accessible.",
    Icon: Layers,
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
    span: "sm:col-span-12 lg:col-span-7",
  },
  {
    label: "Backend & data",
    blurb: "APIs, auth and storage behind the UI.",
    Icon: Server,
    items: [
      "Next.js API Routes",
      "Next.js Server Actions",
      "PHP",
      "SQL",
      "Supabase",
      "Python",
      "Email Authentication",
    ],
    span: "sm:col-span-12 lg:col-span-5",
  },
  {
    label: "Tools & deploy",
    blurb: "Shipping workflow, from design to production.",
    Icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Vercel", "Figma"],
    span: "sm:col-span-6 lg:col-span-5",
  },
  {
    label: "Architecture & practice",
    blurb: "How I structure and ship work.",
    Icon: Blocks,
    items: [
      "Reusable components",
      "Responsive interfaces",
      "API integration",
      "Performance optimization",
      "Clean architecture",
      "Product thinking",
    ],
    span: "sm:col-span-6 lg:col-span-7",
  },
];
