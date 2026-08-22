// export const siteConfig = {
//   name: 'Varat Thapa',
//   shortName: 'Varat',
//   role: 'Frontend Developer & Product Engineer',
//   tagline: 'Crafting premium digital experiences with clean code and thoughtful design.',
//   location: 'Kathmandu, Nepal',
//   email: 'varat.thapa21@.com',
//   phone: '+977-9847502403',
//   url: 'https://varatthapa.com',
//   resumeUrl: '#',
//   availableForWork: true,
//   yearsOfExperience: '1.5+',
// };

// export const navLinks = [
//   { label: 'About', href: '#about' },
//   { label: 'Skills', href: '#skills' },
//   { label: 'Experience', href: '#experience' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Contact', href: '#contact' },
// ];

// export interface TechBadge {
//   name: string;
//   icon: string;
//   category: 'frontend' | 'backend' | 'tools' | 'design';
// }

// export const techBadges: TechBadge[] = [
//   { name: 'React', icon: 'react', category: 'frontend' },
//   { name: 'Next.js', icon: 'next', category: 'frontend' },
//   { name: 'TypeScript', icon: 'ts', category: 'frontend' },
//   { name: 'Node.js', icon: 'node', category: 'backend' },
//   { name: 'Python', icon: 'python', category: 'backend' },
//   { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
//   { name: 'Vite', icon: 'vite', category: 'tools' },
//   { name: 'Figma', icon: 'figma', category: 'design' },
//   { name: 'PostgreSQL', icon: 'db', category: 'backend' },
//   { name: 'MongoDB', icon: 'db', category: 'backend' },
//   { name: 'Git', icon: 'git', category: 'tools' },
//   { name: 'Docker', icon: 'docker', category: 'tools' },
// ];

// export interface Skill {
//   name: string;
//   level: number;
//   category: 'frontend' | 'backend' | 'tools' | 'design';
// }

// export const skills: Skill[] = [
//   { name: 'React / Next.js', level: 92, category: 'frontend' },
//   { name: 'TypeScript', level: 88, category: 'frontend' },
//   { name: 'Tailwind CSS', level: 95, category: 'frontend' },
//   { name: 'HTML / CSS', level: 96, category: 'frontend' },
//   { name: 'JavaScript (ES6+)', level: 90, category: 'frontend' },
//   { name: 'Node.js / Express', level: 80, category: 'backend' },
//   { name: 'Python', level: 75, category: 'backend' },
//   { name: 'PostgreSQL / MongoDB', level: 72, category: 'backend' },
//   { name: 'REST / GraphQL APIs', level: 78, category: 'backend' },
//   { name: 'Git / CI/CD', level: 85, category: 'tools' },
//   { name: 'Figma / Design Systems', level: 82, category: 'design' },
//   { name: 'Vite / Webpack', level: 80, category: 'tools' },
// ];

// export const stats = [
//   { value: '1.5+', label: 'Years of Experience', icon: 'sparkles' },
//   { value: '30+', label: 'Projects Delivered', icon: 'folder' },
//   { value: '12+', label: 'Happy Clients', icon: 'users' },
//   { value: '∞', label: 'Passion & Curiosity', icon: 'heart' },
// ];

// export interface Education {
//   id: number;
//   degree: string;
//   school: string;
//   date: string;
//   description?: string;
//   logo?: string;
// }

// export const education: Education[] = [
//   {
//     id: 1,
//     degree: 'MBA in Information Technology',
//     school: 'School of Management, Tribhuvan University',
//     date: '2025 – Present',
//     description: 'Advanced studies in information technology management, digital transformation, strategic decision-making, business analytics, and the effective use of technology to support organizational goals.',
//   },
//   {
//     id: 2,
//     degree: 'BSc (Hons) Computing',
//     school: 'London Metropolitan University',
//     date: '2022 – 2025',
//     description: 'Focused on software engineering, web development, databases, and modern computing paradigms.',
//   },
// ];

// export interface Achievement {
//   id: number;
//   title: string;
//   description: string;
//   icon: string;
//   year?: string;
// }

// export const achievements: Achievement[] = [
//   // {
//   //   id: 1,
//   //   title: 'Top Performer',
//   //   description: 'Recognized for delivering the ExtendMy.Life wellness platform ahead of schedule.',
//   //   icon: 'award',
//   //   year: '2026',
//   // },
//   {
//     id: 2,
//     degree: 'Web Development & IT Consultant',
//     school: 'Nepal Health Economics Association (NHEA)',
//     date: '2025 – Present',
//     description: 'Providing web development and IT consulting support to enhance NHEA’s digital presence, website functionality, and technology infrastructure.',
//   },
//   // {
//   //   id: 3,
//   //   title: 'Dean\u2019s List',
//   //   description: 'Consistently ranked top 10% in cohort during BSc Computing program.',
//   //   icon: 'medal',
//   //   year: '2023',
//   // },
// ];

// export interface ExperienceItem {
//   id: number;
//   role: string;
//   company: string;
//   date: string;
//   logo: string;
//   type?: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
//   location?: string;
//   points: string[];
//   tags: string[];
// }

// export const experience: ExperienceItem[] = [
//   {
//     id: 1,
//     role: 'Product Manager & Frontend Lead',
//     company: 'ExtendMy.Life',
//     date: '2026 – Present',
//     logo: '/images/exp1.png',
//     type: 'Full-time',
//     location: 'Remote',
//     points: [
//       'Lead frontend architecture for a comprehensive wellness tracking platform using React, Next.js, and TypeScript.',
//       'Collaborate cross-functionally with designers, backend engineers, and stakeholders to ship premium user experiences.',
//       'Establish design system and component library reducing new feature build time by 35%.',
//       'Mentor junior developers and drive code quality through thorough reviews and best practices.',
//     ],
//     tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Product Strategy'],
//   },
//   {
//     id: 2,
//     role: 'IT & Web Developer Consultant',
//     company: 'NHEA — Nepal Health Economics Association',
//     date: '2025 – 2026',
//     logo: '/images/exp2.png',
//     type: 'Contract',
//     location: 'Kathmandu, Nepal',
//     points: [
//       'Designed, developed, and maintained the nonprofit\u2019s flagship website with donation portal and event CMS.',
//       'Optimized database queries and page performance, cutting LCP by 58% and improving Core Web Vitals scores.',
//       'Implemented responsive, accessible layouts achieving 98 Lighthouse accessibility score.',
//       'Trained internal staff on content management and basic web maintenance workflows.',
//     ],
//     tags: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'Performance'],
//   },
//   {
//     id: 3,
//     role: 'Freelance Web Developer',
//     company: 'Self-Employed',
//     date: '2022 – 2026',
//     logo: '/images/exp3.png',
//     type: 'Freelance',
//     location: 'Kathmandu, Nepal',
//     points: [
//       'Delivered 20+ custom web applications for startups, small businesses, and creators across multiple industries.',
//       'Built social media tools, e-commerce storefronts, and content platforms with modern React stacks.',
//       'Owned end-to-end client lifecycle — discovery, scoping, architecture, build, launch, and support.',
//       'Maintained 100% client satisfaction with average 5-star feedback and repeat engagements.',
//     ],
//     tags: ['React', 'Node.js', 'MongoDB', 'Figma', 'Client Work'],
//   },
// ];

// export interface Project {
//   id: number;
//   title: string;
//   description: string;
//   longDescription?: string;
//   image: string;
//   accent: string;
//   tags: string[];
//   demoUrl?: string;
//   codeUrl?: string;
//   featured?: boolean;
//   year?: string;
// }

// export const projects: Project[] = [
//   {
//     id: 1,
//     title: 'RentEasy',
//     description: 'Modern real estate marketplace for renting and selling properties with smart filtering, booking flows, and user dashboards.',
//     longDescription: 'A full-featured real estate platform built with Next.js, featuring advanced property search, map integration, secure booking, and separate owner/tenant portals. Focused on reducing friction in the Nepali rental market.',
//     image: '/images/project1.png',
//     accent: 'from-rose-500/30 via-pink-500/20 to-orange-500/30',
//     tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Maps'],
//     demoUrl: '#',
//     codeUrl: '#',
//     featured: true,
//     year: '2026',
//   },
//   {
//     id: 2,
  
//     title: 'Nepal Health Economics Association (NHEA)',
  
//     description:
//       'A modern, responsive website developed for the Nepal Health Economics Association to strengthen its digital presence and showcase its work.',
  
//     longDescription:
//       'Developed a modern and responsive website for the Nepal Health Economics Association (NHEA) using Next.js and TypeScript. The platform provides information about the organization, research, publications, events, members, and health economics activities. The project focuses on a professional user interface, responsive design, improved content accessibility, and a strong digital presence.',
  
//     image: '/images/project2.png',
  
//     accent: 'from-sky-500/30 via-blue-500/20 to-indigo-500/30',
  
//     tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Responsive Design'],
  
//     demoUrl: 'https://nheanepal.org',
  
//     codeUrl: '#',
  
//     featured: true,
  
//     year: '2026',
//   },
//   {
//     id: 3,
//     title: 'Portfolio v3',
//     description: 'The portfolio you are currently viewing. Hand-crafted with Vite, React, Tailwind, Framer Motion, and obsessive attention to detail.',
//     longDescription: 'Premium portfolio website designed with Apple/Vercel-inspired aesthetics. Features scroll-synced animations, glassmorphism, gradient mesh backgrounds, smooth scrolling, and custom cursor interactions.',
//     image: '/images/project3.png',
//     accent: 'from-violet-500/30 via-purple-500/20 to-fuchsia-500/30',
//     tags: ['React', 'Vite', 'Tailwind', 'Framer Motion', 'Lenis'],
//     demoUrl: '#',
//     codeUrl: '#',
//     featured: true,
//     year: '2026',
//   },
// ];

// export interface Testimonial {
//   id: number;
//   quote: string;
//   name: string;
//   title: string;
//   avatar: string;
//   rating?: number;
// }

// export const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     quote:
//       'Working with Varat was an absolute pleasure. He delivered our wellness platform ahead of schedule, with a level of polish and attention to detail that exceeded every expectation. Rare combination of product sense and technical craft.',
//     name: 'Sarah K.',
//     title: 'Product Manager, ExtendMy.Life',
//     avatar: '/images/client1.png',
//     rating: 5,
//   },
//   {
//     id: 2,
//     quote:
//       'Varat transformed our nonprofit\u2019s digital presence. The new site beautifully communicates our mission and has already driven a measurable increase in donations and event sign-ups. Thoughtful, responsive, and truly cares about outcomes.',
//     name: 'Rajan P.',
//     title: 'Director, NHEA',
//     avatar: '/images/client2.png',
//     rating: 5,
//   },
//   {
//     id: 3,
//     quote:
//       'I\u2019ve worked with many developers over the years — Varat stands out for his creativity, communication, and commitment to quality. Our MVP shipped quickly and looked like it was designed by a top-tier studio. Highly recommended.',
//     name: 'Anika M.',
//     title: 'Founder, Early-stage Startup',
//     avatar: '/images/client3.png',
//     rating: 5,
//   },
// ];

// export interface SocialLink {
//   name: string;
//   url: string;
//   icon: 'linkedin' | 'github' | 'twitter' | 'dribbble' | 'email';
// }

// export const socialLinks: SocialLink[] = [
//   { name: 'LinkedIn', url: 'https://linkedin.com/in/varatthapa', icon: 'linkedin' },
//   { name: 'GitHub', url: 'https://github.com/varatthapa', icon: 'github' },
//   { name: 'Twitter', url: 'https://twitter.com/varatthapa', icon: 'twitter' },
//   { name: 'Email', url: 'mailto:hello@varatthapa.com', icon: 'email' },
// ];




export const siteConfig = {
  name: 'Varat Thapa',
  shortName: 'Varat',
  role: 'Frontend Developer & Product Engineer',
  tagline:
    'Crafting premium digital experiences with clean code and thoughtful design.',
  location: 'Kathmandu, Nepal',
  email: 'varat.thapa21@gmail.com',
  phone: '+977-9847502403',
  url: 'https://varatthapa.com',
  resumeUrl: '#',
  availableForWork: true,
  yearsOfExperience: '1.5+',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export interface TechBadge {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export const techBadges: TechBadge[] = [
  { name: 'React', icon: 'react', category: 'frontend' },
  { name: 'Next.js', icon: 'next', category: 'frontend' },
  { name: 'TypeScript', icon: 'ts', category: 'frontend' },
  { name: 'Node.js', icon: 'node', category: 'backend' },
  { name: 'Python', icon: 'python', category: 'backend' },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
  { name: 'Vite', icon: 'vite', category: 'tools' },
  { name: 'Figma', icon: 'figma', category: 'design' },
  { name: 'PostgreSQL', icon: 'db', category: 'backend' },
  { name: 'MongoDB', icon: 'db', category: 'backend' },
  { name: 'Git', icon: 'git', category: 'tools' },
  { name: 'Docker', icon: 'docker', category: 'tools' },
];

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export const skills: Skill[] = [
  { name: 'React / Next.js', level: 92, category: 'frontend' },
  { name: 'TypeScript', level: 88, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'HTML / CSS', level: 96, category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 90, category: 'frontend' },
  { name: 'Node.js / Express', level: 80, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'PostgreSQL / MongoDB', level: 72, category: 'backend' },
  { name: 'REST / GraphQL APIs', level: 78, category: 'backend' },
  { name: 'Git / CI/CD', level: 85, category: 'tools' },
  { name: 'Figma / Design Systems', level: 82, category: 'design' },
  { name: 'Vite / Webpack', level: 80, category: 'tools' },
];

export const stats = [
  { value: '1.5+', label: 'Years of Experience', icon: 'sparkles' },
  { value: '30+', label: 'Projects Delivered', icon: 'folder' },
  { value: '12+', label: 'Happy Clients', icon: 'users' },
  { value: '∞', label: 'Passion & Curiosity', icon: 'heart' },
];

export interface Education {
  id: number;
  degree: string;
  school: string;
  date: string;
  description?: string;
  logo?: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: 'MBA in Information Technology',
    school: 'School of Management, Tribhuvan University',
    date: '2025 – Present',
    description:
      'Advanced studies in information technology management, digital transformation, strategic decision-making, business analytics, and the effective use of technology to support organizational goals.',
  },
  {
    id: 2,
    degree: 'BSc (Hons) Computing',
    school: 'London Metropolitan University',
    date: '2022 – 2025',
    description:
      'Focused on software engineering, web development, databases, and modern computing paradigms.',
  },
];

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  year?: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Web Development & IT Consultant',
    description:
      'Providing web development and IT consulting support to enhance NHEA’s digital presence, website functionality, and technology infrastructure.',
    icon: 'briefcase',
    year: '2025 – Present',
  },
];

/* =========================
   EXPERIENCE
========================= */

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  logo: string;
  type?: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  location?: string;
  points: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: 'Product Manager & Frontend Lead',
    company: 'ExtendMy.Life',
    date: '2026 – Present',
    logo: '/images/exp1.png',
    type: 'Full-time',
    location: 'Remote',
    points: [
      'Lead frontend architecture for a comprehensive wellness tracking platform using React, Next.js, and TypeScript.',
      'Collaborate cross-functionally with designers, backend engineers, and stakeholders to ship premium user experiences.',
      'Establish design system and component library reducing new feature build time by 35%.',
      'Mentor junior developers and drive code quality through thorough reviews and best practices.',
    ],
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Product Strategy',
    ],
  },
  {
    id: 2,
    role: 'IT & Web Developer Consultant',
    company: 'NHEA — Nepal Health Economics Association',
    date: '2025 – 2026',
    logo: '/images/exp2.png',
    type: 'Contract',
    location: 'Kathmandu, Nepal',
    points: [
      'Designed, developed, and maintained the nonprofit’s flagship website with donation portal and event CMS.',
      'Optimized database queries and page performance, cutting LCP by 58% and improving Core Web Vitals scores.',
      'Implemented responsive, accessible layouts achieving 98 Lighthouse accessibility score.',
      'Trained internal staff on content management and basic web maintenance workflows.',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'Performance'],
  },
  {
    id: 3,
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    date: '2022 – 2026',
    logo: '/images/exp3.png',
    type: 'Freelance',
    location: 'Kathmandu, Nepal',
    points: [
      'Delivered 20+ custom web applications for startups, small businesses, and creators across multiple industries.',
      'Built social media tools, e-commerce storefronts, and content platforms with modern React stacks.',
      'Owned end-to-end client lifecycle — discovery, scoping, architecture, build, launch, and support.',
      'Maintained 100% client satisfaction with average 5-star feedback and repeat engagements.',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Figma', 'Client Work'],
  },
];

/* =========================
   PROJECTS
========================= */

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  accent: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  year?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'RentEasy',
    description:
      'Modern real estate marketplace for renting and selling properties with smart filtering, booking flows, and user dashboards.',
    longDescription:
      'A full-featured real estate platform built with Next.js, featuring advanced property search, map integration, secure booking, and separate owner/tenant portals. Focused on reducing friction in the Nepali rental market.',
    image: '/images/project1.png',
    accent: 'from-rose-500/30 via-pink-500/20 to-orange-500/30',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Maps'],
    demoUrl: '#',
    codeUrl: '#',
    featured: true,
    year: '2026',
  },
  {
    id: 2,
    title: 'Nepal Health Economics Association (NHEA)',
    description:
      'A modern, responsive website developed for the Nepal Health Economics Association to strengthen its digital presence and showcase its work.',
    longDescription:
      'Developed a modern and responsive website for the Nepal Health Economics Association (NHEA) using Next.js and TypeScript. The platform provides information about the organization, research, publications, events, members, and health economics activities. The project focuses on a professional user interface, responsive design, improved content accessibility, and a strong digital presence.',
    image: '/images/project2.png',
    accent: 'from-sky-500/30 via-blue-500/20 to-indigo-500/30',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'React',
      'Responsive Design',
    ],
    demoUrl: 'https://nheanepal.org',
    codeUrl: '#',
    featured: true,
    year: '2026',
  },
  {
    id: 3,
    title: 'Portfolio v3',
    description:
      'The portfolio you are currently viewing. Hand-crafted with Vite, React, Tailwind, Framer Motion, and obsessive attention to detail.',
    longDescription:
      'Premium portfolio website designed with Apple/Vercel-inspired aesthetics. Features scroll-synced animations, glassmorphism, gradient mesh backgrounds, smooth scrolling, and custom cursor interactions.',
    image: '/images/project3.png',
    accent: 'from-violet-500/30 via-purple-500/20 to-fuchsia-500/30',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion', 'Lenis'],
    demoUrl: '#',
    codeUrl: '#',
    featured: true,
    year: '2026',
  },
];

/* =========================
   TESTIMONIALS
========================= */

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Working with Varat was an absolute pleasure. He delivered our wellness platform ahead of schedule, with a level of polish and attention to detail that exceeded every expectation. Rare combination of product sense and technical craft.',
    name: 'Sarah K.',
    title: 'Product Manager, ExtendMy.Life',
    avatar: '/images/client1.png',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'Varat transformed our nonprofit’s digital presence. The new site beautifully communicates our mission and has already driven a measurable increase in donations and event sign-ups. Thoughtful, responsive, and truly cares about outcomes.',
    name: 'Rajan P.',
    title: 'Director, NHEA',
    avatar: '/images/client2.png',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'I’ve worked with many developers over the years — Varat stands out for his creativity, communication, and commitment to quality. Our MVP shipped quickly and looked like it was designed by a top-tier studio. Highly recommended.',
    name: 'Anika M.',
    title: 'Founder, Early-stage Startup',
    avatar: '/images/client3.png',
    rating: 5,
  },
];

/* =========================
   SOCIAL LINKS
========================= */

export interface SocialLink {
  name: string;
  url: string;
  icon: 'linkedin' | 'github' | 'twitter' | 'dribbble' | 'email';
}

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/varatthapa',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/varatthapa',
    icon: 'github',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/varatthapa',
    icon: 'twitter',
  },
  {
    name: 'Email',
    url: 'mailto:hello@varatthapa.com',
    icon: 'email',
  },
];