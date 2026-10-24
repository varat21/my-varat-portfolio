import { Github, Linkedin, Mail, Twitter, type LucideIcon } from "lucide-react";

/** Single source of truth for identity, links and navigation. */
export const site = {
  name: "Hari Thapa",
  initials: "HT",
  title: "Frontend Developer & Product Engineer",
  location: "Kathmandu, Nepal",
  email: "varat.thapa21@gmail.com",
  url: "https://varatthapa.dev",
  /** Rotating roles in the hero. */
  roles: [
    "Frontend developer",
    "Product engineer",
    "React & Next.js builder",
    "Full-stack when it counts",
  ],
  /** Set to e.g. "/resume.pdf" (file in /public) to show a "Download CV" button. */
  resumeUrl: undefined as string | undefined,
  /** Set to your X/Twitter profile URL to show it in Contact. */
  twitterUrl: undefined as string | undefined,
} as const;

export interface SocialLink {
  label: string;
  href: string;
  Icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  // GitHub handle taken from the repository remote (github.com/varat21).
  { label: "GitHub", href: "https://github.com/varat21", Icon: Github },
  // TODO: replace with your full LinkedIn profile URL.
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: Linkedin },
  ...(site.twitterUrl ? [{ label: "X / Twitter", href: site.twitterUrl, Icon: Twitter }] : []),
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;
