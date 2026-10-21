/**
 * ---------------------------------------------------------------------------
 *  ALL SITE CONTENT LIVES HERE
 * ---------------------------------------------------------------------------
 *  Replace these placeholder details with your own and the entire site updates.
 *  Icons are referenced by string name and resolved through `src/lib/icons.js`
 *  to a lucide-react component, so you never need to touch component code.
 * ---------------------------------------------------------------------------
 */

export const profile = {
  name: 'Alex Morgan',
  firstName: 'Alex',
  initials: 'AM',
  roles: [
    'Full-Stack Developer',
    'UI/UX Enthusiast',
    'Open-Source Contributor',
    'Performance Nerd',
  ],
  tagline: 'I build fast, accessible, and delightful products for the web.',
  bio: "I'm a full-stack developer with 6+ years of experience turning complex problems into clean, scalable software. I care deeply about craft — from pixel-perfect interfaces and buttery-smooth animations to rock-solid APIs and infrastructure.",
  longBio: [
    "I'm a full-stack developer based in San Francisco with 6+ years of experience shipping products end-to-end. I thrive at the intersection of design and engineering — translating fuzzy ideas into polished, accessible interfaces backed by robust APIs.",
    "My day-to-day stack is React, TypeScript, and Node.js on AWS, but I'm just as comfortable diving into database query plans, CI/CD pipelines, or a Figma file. I care about performance budgets, semantic HTML, and writing code that the next developer will actually enjoy reading.",
    "Outside of work I contribute to open source, mentor junior developers, and write about front-end architecture. When I'm not at a keyboard you'll find me trail running or hunting for the city's best espresso.",
  ],
  email: 'alex.morgan@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  avatar: '/images/profile.svg',
  resumeUrl: '/resume.pdf',
  availableForWork: true,
  availabilityText: 'Available for freelance & full-time roles',
  socials: [
    { name: 'GitHub', url: 'https://github.com/alexmorgan', icon: 'Github' },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/alexmorgan',
      icon: 'Linkedin',
    },
    { name: 'Email', url: 'mailto:alex.morgan@example.com', icon: 'Mail' },
  ],
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  {
    label: 'Years of Experience',
    value: 6,
    suffix: '+',
    icon: 'Briefcase',
    description: 'Shipping production software',
  },
  {
    label: 'Projects Completed',
    value: 45,
    suffix: '+',
    icon: 'Layers',
    description: 'Across web, mobile & APIs',
  },
  {
    label: 'Happy Clients',
    value: 30,
    suffix: '+',
    icon: 'Users',
    description: 'Startups to enterprise',
  },
  {
    label: 'Open-Source Commits',
    value: 850,
    suffix: '+',
    icon: 'GitBranch',
    description: 'Giving back to the community',
  },
];

export const about = {
  highlights: [
    { icon: 'Zap', label: 'Performance-obsessed' },
    { icon: 'Accessibility', label: 'Accessibility-first' },
    { icon: 'Palette', label: 'Design-minded' },
    { icon: 'Users', label: 'Great communicator' },
  ],
  principles: [
    {
      icon: 'Braces',
      title: 'Clean, maintainable code',
      description:
        'Small modules, clear boundaries, and tests that let me refactor with confidence.',
    },
    {
      icon: 'Gauge',
      title: 'Performance by default',
      description:
        'Fast First Contentful Paint, tiny bundles, and 60fps interactions — never an afterthought.',
    },
    {
      icon: 'Accessibility',
      title: 'Accessible to everyone',
      description:
        'Semantic markup, keyboard support, and WCAG-minded contrast on every interface I build.',
    },
  ],
};

/**
 * Skill groups. `level` is 0–100 and drives the animated progress bar.
 * `icon` must match a key in src/lib/icons.js.
 */
export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'Atom',
    description: 'Crafting responsive, accessible interfaces with modern frameworks.',
    skills: [
      { name: 'React & Next.js', icon: 'Atom', level: 95 },
      { name: 'TypeScript', icon: 'Braces', level: 92 },
      { name: 'Tailwind CSS', icon: 'Palette', level: 94 },
      { name: 'HTML & CSS', icon: 'Layout', level: 96 },
      { name: 'Framer Motion', icon: 'Sparkles', level: 85 },
      { name: 'Mobile / Responsive', icon: 'Smartphone', level: 90 },
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    description: 'Designing reliable APIs and data layers that scale with the product.',
    skills: [
      { name: 'Node.js & Express', icon: 'Server', level: 90 },
      { name: 'PostgreSQL & MongoDB', icon: 'Database', level: 85 },
      { name: 'REST & GraphQL APIs', icon: 'Workflow', level: 88 },
      { name: 'Python & FastAPI', icon: 'Terminal', level: 78 },
      { name: 'Auth & Security', icon: 'Lock', level: 82 },
      { name: 'Redis & Queues', icon: 'Layers', level: 75 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'Wrench',
    description: 'The tooling that keeps shipping fast, safe, and repeatable.',
    skills: [
      { name: 'Git & GitHub', icon: 'GitBranch', level: 95 },
      { name: 'AWS & Vercel', icon: 'Cloud', level: 82 },
      { name: 'Docker', icon: 'Container', level: 78 },
      { name: 'CI/CD Pipelines', icon: 'Workflow', level: 80 },
      { name: 'Figma & Design Systems', icon: 'Figma', level: 85 },
      { name: 'Testing (Vitest/Playwright)', icon: 'Shield', level: 80 },
    ],
  },
];

/**
 * Projects shown in the Projects section.
 * Swap `liveUrl` / `githubUrl` for real links, and drop real screenshots
 * into public/images/ (referenced by `image`).
 */
export const projects = [
  {
    id: 'nebula-commerce',
    title: 'Nebula Commerce',
    description:
      'A headless e-commerce platform with real-time inventory, Stripe checkout, and an admin dashboard. Handles 12k+ orders/month with a 98 Lighthouse performance score.',
    image: '/images/project-nebula.svg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://example.com/nebula',
    githubUrl: 'https://github.com/alexmorgan/nebula',
    icon: 'ShoppingCart',
    accent: 'from-indigo-500 via-violet-500 to-teal-400',
  },
  {
    id: 'pulse-analytics',
    title: 'Pulse Analytics',
    description:
      'Real-time analytics dashboard visualising millions of events with streaming charts, custom funnels, and shareable reports for product teams.',
    image: '/images/project-pulse.svg',
    tags: ['React', 'D3.js', 'Node.js', 'WebSocket', 'Redis'],
    liveUrl: 'https://example.com/pulse',
    githubUrl: 'https://github.com/alexmorgan/pulse',
    icon: 'LineChart',
    accent: 'from-teal-500 via-cyan-500 to-sky-500',
  },
  {
    id: 'atlas-planner',
    title: 'Atlas Trip Planner',
    description:
      'AI-assisted travel planner that builds day-by-day itineraries from a prompt, with interactive maps, budgets, and collaborative packing lists.',
    image: '/images/project-atlas.svg',
    tags: ['React', 'Mapbox', 'FastAPI', 'OpenAI', 'Tailwind'],
    liveUrl: 'https://example.com/atlas',
    githubUrl: 'https://github.com/alexmorgan/atlas',
    icon: 'Map',
    accent: 'from-amber-500 via-orange-500 to-rose-500',
  },
  {
    id: 'whisper-chat',
    title: 'Whisper Chat',
    description:
      'End-to-end encrypted messaging app with presence, typing indicators, and offline-first sync. Sub-100ms message delivery globally via edge WebSockets.',
    image: '/images/project-whisper.svg',
    tags: ['React', 'Socket.io', 'Go', 'SQLite', 'Docker'],
    liveUrl: 'https://example.com/whisper',
    githubUrl: 'https://github.com/alexmorgan/whisper',
    icon: 'MessageSquare',
    accent: 'from-fuchsia-500 via-pink-500 to-rose-500',
  },
  {
    id: 'forge-ds',
    title: 'Forge Design System',
    description:
      'A themeable component library with 60+ accessible primitives, dark mode, and full documentation. Adopted by 5 product teams across the org.',
    image: '/images/project-forge.svg',
    tags: ['React', 'Radix UI', 'Storybook', 'Tokens', 'Testing'],
    liveUrl: 'https://example.com/forge',
    githubUrl: 'https://github.com/alexmorgan/forge',
    icon: 'Boxes',
    accent: 'from-violet-500 via-indigo-500 to-blue-500',
  },
  {
    id: 'lumen-ai',
    title: 'Lumen AI Assistant',
    description:
      'Retrieval-augmented assistant that answers questions from your own docs. Hybrid vector + keyword search with streaming responses and citations.',
    image: '/images/project-lumen.svg',
    tags: ['Next.js', 'FastAPI', 'pgvector', 'OpenAI', 'AWS'],
    liveUrl: 'https://example.com/lumen',
    githubUrl: 'https://github.com/alexmorgan/lumen',
    icon: 'Brain',
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
];

/**
 * Combined experience & education timeline (newest first).
 * `type` is either 'work' or 'education' — it picks the Briefcase /
 * GraduationCap icon and accent styling.
 */
export const timeline = [
  {
    id: 'exp-vertex',
    type: 'work',
    role: 'Senior Full-Stack Developer',
    organization: 'Vertex Labs',
    period: '2023 — Present',
    location: 'San Francisco, CA (Remote)',
    description:
      'Lead engineer for the core customer platform serving 200k+ monthly users.',
    highlights: [
      'Re-architected the front-end to Next.js App Router, cutting TTI by 47%',
      'Designed a multi-tenant API layer handling 40M requests/month',
      'Mentor a team of 4 engineers and run the frontend guild',
    ],
  },
  {
    id: 'exp-northwind',
    type: 'work',
    role: 'Full-Stack Developer',
    organization: 'Northwind Digital',
    period: '2021 — 2023',
    location: 'Austin, TX',
    description:
      'Built customer-facing products for fintech and healthcare clients.',
    highlights: [
      'Shipped a HIPAA-compliant patient portal used by 12 clinics',
      'Introduced component-driven development and visual regression tests',
      'Reduced AWS spend 30% by right-sizing services and adding autoscaling',
    ],
  },
  {
    id: 'exp-brightbyte',
    type: 'work',
    role: 'Frontend Developer',
    organization: 'BrightByte Agency',
    period: '2019 — 2021',
    location: 'Remote',
    description:
      'Delivered 20+ marketing sites and web apps for agency clients.',
    highlights: [
      'Built a reusable Next.js starter that halved project setup time',
      'Achieved consistent 95+ Lighthouse scores across client sites',
      'Collaborated daily with designers in Figma to nail pixel-perfect builds',
    ],
  },
  {
    id: 'edu-ms',
    type: 'education',
    role: 'M.S. Computer Science',
    organization: 'State University',
    period: '2017 — 2019',
    location: 'California',
    description:
      'Specialised in human-computer interaction and distributed systems. GPA: 3.9/4.0.',
    highlights: [
      'Thesis: latency-aware scheduling for edge web applications',
      'Teaching assistant for the undergraduate web development course',
    ],
  },
  {
    id: 'edu-bs',
    type: 'education',
    role: 'B.S. Software Engineering',
    organization: 'Pacific Institute of Technology',
    period: '2013 — 2017',
    location: 'California',
    description:
      'Graduated summa cum laude. Captain of the ACM programming team.',
    highlights: ['Dean’s List (6 semesters)', '1st place, Regional Hackathon 2016'],
  },
];

/** Contact section info cards (icons resolved via src/lib/icons.js). */
export const contactInfo = [
  {
    icon: 'Mail',
    label: 'Email',
    value: 'alex.morgan@example.com',
    href: 'mailto:alex.morgan@example.com',
    description: 'My inbox — I reply within 24 hours.',
  },
  {
    icon: 'Phone',
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    description: 'Weekdays, 9am–6pm PT.',
  },
  {
    icon: 'MapPin',
    label: 'Location',
    value: 'San Francisco, CA',
    href: null,
    description: 'Open to remote roles worldwide.',
  },
];
