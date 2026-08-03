import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export function Experience() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <div className="max-w-7xl mx-auto container-px relative">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-gradient-to-r from-accent to-fuchsia-500" />
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            04 / Experience
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight max-w-3xl mb-6">
          Where I've been making an impact.
        </h2>

        <p className="text-muted-foreground max-w-2xl text-lg">
          A snapshot of roles and contracts that shaped how I build products today.
        </p>

        <div className="mt-16 md:mt-20 relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border/60 to-transparent" />

          {experience.map((job, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  'relative mb-14 last:mb-0',
                  'md:grid md:grid-cols-2 md:gap-16'
                )}
              >
                <div
                  className={cn(
                    'absolute top-8 w-3 h-3 rounded-full bg-gradient-to-br from-accent to-fuchsia-500 ring-4 ring-background z-10',
                    '-left-8 md:left-1/2 md:-translate-x-1/2'
                  )}
                />

                {isEven ? (
                  <>
                    <div className="hidden md:block" />
                    <div className="md:pl-4">
                      <ExperienceCard job={job} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:pr-4">
                      <ExperienceCard job={job} />
                    </div>
                    <div className="hidden md:block" />
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  job: (typeof experience)[number];
}

function ExperienceCard({ job }: ExperienceCardProps) {
  return (
    <div className="glass rounded-2xl p-6 md:p-8 border border-border/50 card-hover relative">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
        <div>
          <h3 className="text-xl md:text-2xl font-display font-semibold leading-tight">
            {job.role}
          </h3>
          <p className="mt-1 text-accent text-sm font-medium">{job.company}</p>
        </div>
        <div className="text-right">
          <span className="glass inline-block rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground border border-border/60">
            {job.date}
          </span>
          {job.location && (
            <div className="mt-2 text-[11px] text-muted-foreground flex items-center justify-end gap-1.5">
              <MapPin size={12} strokeWidth={2} />
              {job.location}
            </div>
          )}
        </div>
      </div>

      {job.type && (
        <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-medium px-2.5 py-1 rounded-md bg-accent/10 text-accent/90 mb-5">
          {job.type}
        </span>
      )}

      <ul className="space-y-3 mb-6">
        {job.points.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-sm md:text-[15px] text-muted-foreground leading-relaxed"
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-accent to-fuchsia-500 shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-5 border-t border-border/50">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full px-3 py-1 text-[11px] font-medium bg-muted/60 border border-border/50 text-muted-foreground hover:text-foreground hover:border-accent/30 transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
