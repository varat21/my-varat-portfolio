import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import { useTypingEffect } from '../hooks/useTypingEffect.js';
import { getIcon } from '../lib/icons.js';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
};

/**
 * Hero: headline with animated typing role, CTAs, socials, and a
 * profile image framed by a soft gradient glow.
 */
export default function Hero() {
  const typedRole = useTypingEffect(profile.roles);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16 pb-10">
      {/* Decorative background: gradient orbs + subtle grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-600/15" />
        <div className="absolute top-1/3 -left-40 h-[380px] w-[380px] rounded-full bg-teal-400/20 blur-3xl dark:bg-teal-500/10" />
        <div className="absolute right-[-10%] bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-600/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_40%,transparent_100%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* Copy — uniform 20px rhythm via space-y, no per-child margins */}
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-start space-y-4">
          <motion.div variants={item}>
            {profile.availableForWork && (
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {profile.availabilityText}
              </span>
            )}
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-teal-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-xl font-medium text-slate-700 sm:text-2xl dark:text-slate-300">
            I&apos;m a{' '}
            <span className="font-semibold text-indigo-600 dark:text-indigo-300">{typedRole}</span>
            <span
              aria-hidden="true"
              className="ml-0.5 inline-block w-[3px] translate-y-0.5 animate-blink bg-indigo-500 dark:bg-indigo-400"
              style={{ height: '1.1em' }}
            />
          </motion.p>

          <motion.p variants={item} className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-teal-400 px-5 py-2.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-indigo-500/40"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="group inline-flex items-center gap-3 rounded-2xl border border-slate-300 bg-white/70 px-5 py-2.5 text-base font-semibold text-slate-800 backdrop-blur transition-all duration-300 hover:scale-[1.03] hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-indigo-500/60 dark:hover:text-indigo-300"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.ul variants={item} className="flex items-center gap-3">
            {profile.socials.map((social) => {
              const Icon = getIcon(social.icon);
              return (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer noopener"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-indigo-500/50 dark:hover:text-indigo-300"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>

        {/* Portrait with gradient glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          {/* Soft gradient glow behind the photo */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-indigo-500/40 via-violet-500/30 to-teal-400/40 blur-2xl dark:from-indigo-600/30 dark:via-violet-600/25 dark:to-teal-500/30"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-2xl shadow-indigo-500/10 dark:border-slate-800 dark:shadow-black/40">
            <img
              src={profile.avatar}
              alt={`${profile.name}, ${profile.roles[0]}`}
              width={800}
              height={1000}
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent"
            />
          </div>

          {/* Floating stat chips */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-4 rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 shadow-xl backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/85"
          >
            <p className="text-2xl font-bold text-slate-900 dark:text-white">6+</p>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Years building for the web</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -top-4 -right-4 rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 shadow-xl backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/85"
          >
            <p className="text-2xl font-bold text-slate-900 dark:text-white">45+</p>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Projects shipped</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-400 transition-colors hover:text-indigo-500 sm:flex dark:text-slate-500"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.2em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </a>
    </section>
  );
}
