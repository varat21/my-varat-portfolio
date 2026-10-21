import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { timeline } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

const itemVariants = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
};

/**
 * Experience & Education: a vertical timeline. Work entries use a Briefcase
 * icon (indigo accent), education entries use GraduationCap (teal accent).
 */
export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 pt-6 pb-8 sm:pt-8 sm:pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & education"
          description="Six years of building products, leading teams, and never stopping learning."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical timeline rail */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[27px] w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-teal-400/60 sm:left-[31px]"
          />

          <motion.ol
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-4"
          >
            {timeline.map((entry) => {
              const isWork = entry.type === 'work';
              const Icon = isWork ? Briefcase : GraduationCap;

              return (
                <motion.li key={entry.id} variants={itemVariants} className="relative pl-20 sm:pl-24">
                  {/* Icon node on the rail */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-1 left-0 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-lg sm:h-16 sm:w-16 ${
                      isWork
                        ? 'border-indigo-500/30 bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-indigo-500/25'
                        : 'border-teal-500/30 bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-teal-500/25'
                    }`}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </span>

                  <article className="rounded-2xl border border-slate-200/70 bg-white/60 p-5 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300/70 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-slate-800/70 dark:bg-slate-900/40 dark:hover:border-indigo-500/40">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wide uppercase ${
                          isWork
                            ? 'bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300'
                            : 'bg-teal-500/10 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300'
                        }`}
                      >
                        {isWork ? 'Work' : 'Education'}
                      </span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {entry.period}
                      </span>
                    </div>

                    <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl dark:text-white">
                      {entry.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                      {entry.organization}
                    </p>

                    <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {entry.location}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {entry.description}
                    </p>

                    {entry.highlights?.length > 0 && (
                      <ul className="mt-2 space-y-1.5">
                        {entry.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
