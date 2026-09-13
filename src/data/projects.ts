export type ProjectCategory = "Frontend" | "Web Apps" | "UI/UX";

export interface Project {
  id: string;
  index: string;
  title: string;
  year: string;
  role: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  categories: ProjectCategory[];
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "professor-portfolio",
    index: "01",
    title: "Professor Portfolio",
    year: "2025",
    role: "Frontend Developer",
    description:
      "A modern academic portfolio platform designed for an educator and researcher.",
    overview:
      "An academic portfolio built for a university professor to present publications, courses, and research in a clear, citation-friendly layout. The brief called for something that felt closer to a personal journal than an institutional page.",
    challenge:
      "Academic content is dense — publications, citations, course lists — and needed structure without feeling like a spreadsheet. The existing university template buried the professor's work under generic branding.",
    solution:
      "Designed a content model that separates research, teaching, and writing into distinct rhythms, then built a Next.js front end on Supabase so the professor can update publications without touching code.",
    result:
      "Faster to scan for visiting students and collaborators, and now maintained entirely by the professor without developer involvement.",
    categories: ["Frontend", "Web Apps"],
    tech: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    image: "/images/project-01.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "nhea-website",
    index: "02",
    title: "NHEA Website",
    year: "2024",
    role: "Web Development & IT Consultant",
    description:
      "A professional nonprofit website and content platform focused on clear information architecture and maintainability.",
    overview:
      "The Nepal Health Economic Association needed a public-facing website to host research, events, and membership information, replacing an outdated site that was difficult to update.",
    challenge:
      "The organization has a small, non-technical team, so the site needed to be simple to maintain long after launch, while still presenting research credibly to an academic audience.",
    solution:
      "Restructured the information architecture around three clear paths — research, events, membership — and connected a lightweight CMS so staff can publish updates directly.",
    result:
      "The association now manages its own content updates, and page load times improved significantly over the previous site.",
    categories: ["Frontend", "UI/UX"],
    tech: ["React", "Next.js", "Tailwind CSS", "CMS"],
    image: "/images/project-02.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "personal-portfolio",
    index: "03",
    title: "Personal Portfolio",
    year: "2026",
    role: "Designer & Developer",
    description:
      "A premium portfolio focused on frontend engineering, product design, and professional branding.",
    overview:
      "This site — built to present my own work with the same editorial care I bring to client projects, from typography through motion.",
    challenge:
      "Most developer portfolios default to the same template shapes. The goal was a site that reads as considered rather than assembled from a kit.",
    solution:
      "Built an editorial grid system in React and Framer Motion, with a single restrained motion language and a typographic system built around Fraunces and Inter.",
    result:
      "A fast, accessible, and distinct site that doubles as a working example of the craft it's advertising.",
    categories: ["Frontend", "UI/UX"],
    tech: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
    image: "/images/project-03.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const projectFilters: ("All" | ProjectCategory)[] = [
  "All",
  "Frontend",
  "Web Apps",
  "UI/UX",
];
