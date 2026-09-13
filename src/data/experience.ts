export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    org: "Everest Technology",
    period: "2025 — Present",
    points: [
      "React and Next.js development",
      "Responsive interfaces",
      "Reusable components",
      "API integration",
      "Performance optimization",
      "Cross-team collaboration",
    ],
  },
  {
    role: "Web Development & IT Consultant",
    org: "Nepal Health Economic Association",
    period: "2024 — 2025",
    points: [
      "Website development",
      "Website maintenance",
      "CMS and content management",
      "Technical support",
      "Digital workflow improvements",
    ],
  },
];

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

export const education: EducationItem[] = [
  {
    degree: "MBA in Information Technology",
    school: "School of Management, Tribhuvan University",
    period: "2025 — Present",
  },
  {
    degree: "Bachelor in Information Technology",
    school: "InfoTech College of Pokhara",
    period: "Completed 2025",
  },
];
