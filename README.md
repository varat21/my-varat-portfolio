# Varat Thapa — Portfolio

A personal portfolio built with React, Vite, TypeScript, Tailwind CSS, Radix/shadcn-style UI primitives, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/
│   ├── ui/            shadcn-style primitives (Button, Badge, Dialog, Sheet, Tooltip, Input, Textarea, Separator, Label)
│   ├── Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx, Experience.tsx,
│   ├── Projects.tsx, ProjectCard.tsx, ProjectDialog.tsx, Services.tsx,
│   ├── Contact.tsx, Footer.tsx, ThemeToggle.tsx, ThemeProvider.tsx,
│   ├── CustomCursor.tsx, Reveal.tsx
├── data/               projects.ts, skills.ts, experience.ts — edit these to update content
├── lib/                utils.ts (cn helper), useLenis.ts (smooth scroll)
├── App.tsx, main.tsx, index.css
```

## Things to customize

- **Project images**: drop real images into `public/images/` as `project-01.jpg`, `project-02.jpg`, `project-03.jpg` (referenced in `src/data/projects.ts`). If an image is missing, the card falls back to a styled monogram automatically — nothing breaks.
- **Profile photo / OG image**: add `public/images/profile.jpg` and `public/images/og-cover.jpg` if you want to use them; wire the OG image path into `index.html`.
- **Contact form**: the form in `src/components/Contact.tsx` is frontend-only right now — it validates and shows a toast, but does not send anything. Wire the `onSubmit` handler up to Formspree, EmailJS, Resend, or your own API route to actually deliver messages.
- **Links**: update the GitHub/LinkedIn/email links in `Hero.tsx` and the live/source links in `src/data/projects.ts`.
- **Theme colors**: CSS variables live in `src/index.css` under `:root` (light) and `.dark` (dark mode).

## Notes

- Dark mode persists to `localStorage` and respects system preference on first load.
- The custom cursor and Lenis smooth scroll both automatically disable when the browser reports `prefers-reduced-motion: reduce`, and the cursor is disabled entirely on touch devices.
- Verified: `npm install`, `npm run build`, and `npx eslint .` all run clean.
