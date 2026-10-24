# Varat Thapa — Portfolio (v2)

React 18 · Vite · TypeScript · Tailwind CSS · Framer Motion (LazyMotion) · Lucide · Radix primitives · `clsx` + `tailwind-merge`.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build  -> dist/
npm run lint
```

## Deploy to Vercel

1. Push the repo to GitHub.
2. vercel.com → **Add New → Project** → import it. Vercel auto-detects Vite (build `npm run build`, output `dist`). No config needed.
3. Optional env var: `VITE_CONTACT_ENDPOINT` (see below). Add your domain under Project → Domains.

CLI alternative: `npm i -g vercel && vercel --prod`.

## Structure

```
src/
  App.tsx                    providers (LazyMotion strict, MotionConfig reducedMotion="user")
  index.css                  design tokens (HSL vars), utilities: .text-gradient, .link-underline, .glow-card, .bg-grid
  components/
    Background.tsx           grid + cursor spotlight (rAF-lerped, GPU transform); static on touch/reduced motion
    GlowCard.tsx             pointer-tracking border glow + optional 3D tilt (CSS vars, no re-render)
    Navbar.tsx               floating glass nav, scroll-spy, "Available for hire" pulse, mobile drawer
    Hero.tsx  RoleTicker.tsx gradient name, rotating roles (no layout shift), Explore work / Copy email / Download CV
    About.tsx  Skills.tsx    bento skills grid
    Projects.tsx ProjectCard.tsx ProjectPreview.tsx ProjectDialog.tsx
    Experience.tsx           vertical timelines (work + education)
    Services.tsx  Contact.tsx  Footer.tsx  ScrollToTop.tsx
    Reveal.tsx               <Reveal> fade-up, <Stagger>/<StaggerItem> (staggerChildren 0.1), viewport margin -100px
    ui/                      button, badge, input, textarea, label, dialog, sheet
  hooks/useCopy.ts           clipboard + fallback + feedback + toast
  data/                      site.ts (identity, links, roles), projects.ts, skills.ts, experience.ts
  lib/                       utils.ts (cn), scrollTo.ts, useLenis.ts
```

## Customize

| What | Where |
|---|---|
| Name, email, roles, socials, nav | `src/data/site.ts` |
| **Show "Download CV"** | put `resume.pdf` in `public/`, set `resumeUrl: "/resume.pdf"` in `site.ts` |
| **Show X / Twitter** | set `twitterUrl` in `site.ts` |
| LinkedIn URL | replace the placeholder in `site.ts` |
| Project screenshots | add e.g. `public/images/project-01.jpg` (16:10), set `image` in `src/data/projects.ts`; otherwise a generated preview is used |
| Colours / spacing tokens | `src/index.css` (`:root` and `.dark`) |
| Contact delivery | set `VITE_CONTACT_ENDPOINT=https://formspree.io/f/xxxx`; without it the form opens the visitor's email app, pre-filled |

## Behaviour notes

- Dark-first (saved choice in `localStorage`, toggle in nav). Light theme is fully supported.
- Mouse-only effects (spotlight, glow, tilt) are disabled on touch devices and with `prefers-reduced-motion`; all JS animations honour it via `MotionConfig`.
- Colour tokens are checked to ≥ 7:1 for text (WCAG AAA contrast) and ≥ 3:1 for UI borders in both themes.
- Footer badge shows the package version and build date (injected by Vite at build time), not a live uptime probe.
- Domain `https://varatthapa.dev` is assumed in `index.html`, `robots.txt`, `sitemap.xml`.
