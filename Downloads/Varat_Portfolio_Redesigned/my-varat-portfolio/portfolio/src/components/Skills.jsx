import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolio.js';
import { getIcon } from '../lib/icons.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
};

/**
 * Skills: three grouped cards (Frontend / Backend / Tools) with an icon and
 * an animated progress bar per skill.
 */
export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 pt-8 pb-10 sm:pt-10 sm:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="The tools I reach for"
          description="A modern full-stack toolkit — honed over six years of shipping real products."
        />

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const GroupIcon = getIcon(group.icon);

            return (
              <motion.article
                key={group.title}
                variants={cardVariants}
                className="group flex flex-col rounded-2xl border border-slate-200/70 bg-white/60 p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/70 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-slate-800/70 dark:bg-slate-900/40 dark:hover:border-indigo-500/40"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400 text-white shadow-md shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-110">
                    <GroupIcon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{group.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{group.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {group.skills.map((skill, i) => {
                    const SkillIcon = getIcon(skill.icon);
                    return (
                      <li key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between gap-3">
                          <span className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                            <SkillIcon className="h-4 w-4 text-indigo-500 dark:text-indigo-400" aria-hidden="true" />
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold tabular-nums text-slate-400 dark:text-slate-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div
                          className="h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800"
                          role="progressbar"
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} proficiency`}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 1, delay: 0.1 + i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-teal-400"
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>

        <Reveal delay={0.2} className="mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Always learning — currently exploring Rust, WebGPU, and local-first architectures.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
