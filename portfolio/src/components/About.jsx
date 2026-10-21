import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { about, profile, stats } from '../data/portfolio.js';
import { getIcon } from '../lib/icons.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

/** Animates a number up when its card scrolls into view. */
function CountUp({ value, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setCount(value);
      return undefined;
    }

    const duration = 1400;
    const start = performance.now();
    let frameId;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/**
 * About: photo + bio side by side, core principles, and animated stat cards.
 */
export default function About() {
  return (
    <section id="about" className="scroll-mt-24 pt-6 pb-8 sm:pt-8 sm:pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="A developer who sweats the details"
          description="From database schemas to micro-interactions, I care about every layer of the product."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Photo */}
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none" y={36}>
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-indigo-500/25 via-violet-500/15 to-teal-400/25 blur-xl dark:from-indigo-600/20 dark:via-violet-600/15 dark:to-teal-500/20"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:shadow-black/40">
              <img
                src={profile.avatar}
                alt={`${profile.name} smiling at a coworking space`}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Bio + principles */}
          <div className="space-y-4">
            <Reveal delay={0.1} className="space-y-3">
              {about.longBio.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <ul className="grid gap-4 sm:grid-cols-1">
              {about.principles.map((principle, i) => {
                const Icon = getIcon(principle.icon);
                return (
                  <Reveal as="li" key={principle.title} delay={0.15 + i * 0.08}>
                    <div className="group flex gap-3 rounded-2xl border border-slate-200/70 bg-white/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300/70 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-slate-800/70 dark:bg-slate-900/40 dark:hover:border-indigo-500/40">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-teal-400/10 text-indigo-600 transition-colors group-hover:text-indigo-500 dark:bg-indigo-500/15 dark:text-indigo-300">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">{principle.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat, i) => {
            const Icon = getIcon(stat.icon);
            return (
              <Reveal
                key={stat.label}
                delay={i * 0.08}
                className="group rounded-2xl border border-slate-200/70 bg-white/60 p-4 text-center shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/70 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-slate-800/70 dark:bg-slate-900/40 dark:hover:border-indigo-500/40"
              >
                <span className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400 text-white shadow-md shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300">{stat.label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500">{stat.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
