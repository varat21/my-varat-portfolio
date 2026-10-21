import { ArrowUp, Heart } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import { getIcon } from '../lib/icons.js';

/**
 * Footer: socials, copyright, and a "Back to top" button.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/70 bg-white/50 backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-950/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        {/* Brand + socials */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <a href="#home" className="flex items-center gap-3" aria-label={`${profile.name} — back to top of page`}>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-teal-400 text-sm font-bold text-white shadow-md shadow-indigo-500/25">
              {profile.initials}
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              {profile.name}
            </span>
          </a>

          <ul className="flex items-center gap-3">
            {profile.socials.map((social) => {
              const Icon = getIcon(social.icon);
              return (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer noopener"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-indigo-500/50 dark:hover:text-indigo-300"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Copyright */}
        <p className="flex items-center gap-1.5 text-sm text-slate-500 md:order-none dark:text-slate-400">
          © {year} {profile.name}. All rights reserved.
          <span className="hidden items-center gap-1 sm:inline-flex">
            {' '}· Built with{' '}
            <Heart className="h-3.5 w-3.5 text-rose-500" aria-label="love" /> React &amp; Tailwind CSS
          </span>
        </p>

        {/* Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-500/10 md:order-none dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-indigo-500/50 dark:hover:text-indigo-300"
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
