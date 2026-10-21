import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons.jsx';
import { profile, projects } from '../data/portfolio.js';
import { getIcon } from '../lib/icons.js';
import SectionHeading from './SectionHeading.jsx';

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
};

/**
 * Projects: responsive grid of cards with thumbnail zoom, tech tags,
 * and Live Demo / GitHub actions.
 */
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 pt-8 pb-10 sm:pt-10 sm:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built recently"
          description="A selection of product work — from e-commerce platforms to real-time dashboards and AI tooling."
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => {
            const ProjectIcon = getIcon(project.icon);

            return (
              <motion.article
                key={project.id}
                variants={card}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-300/70 hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-slate-800/70 dark:bg-slate-900/40 dark:hover:border-indigo-500/40"
              >
                {/* Thumbnail with hover zoom */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot placeholder for ${project.title}`}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-15 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-25 dark:mix-blend-overlay`}
                  />
                  <span className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/85 text-slate-800 shadow-lg backdrop-blur-md dark:bg-slate-950/80 dark:text-slate-200">
                    <ProjectIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-indigo-500/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-indigo-700 uppercase dark:bg-indigo-500/15 dark:text-indigo-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="mt-4 flex items-center gap-3 border-t border-slate-200/70 pt-4 dark:border-slate-800/70">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/35"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Link out to profile */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href={profile.socials.find((s) => s.name === 'GitHub')?.url ?? '#'}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            See more on GitHub
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </motion.p>
      </div>
    </section>
  );
}
