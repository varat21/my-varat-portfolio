import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export function Projects() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div className="max-w-7xl mx-auto container-px relative">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-gradient-to-r from-accent to-fuchsia-500" />
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            05 / Selected work
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight max-w-3xl mb-6">
          Projects I've poured my craft into.
        </h2>

        <p className="text-muted-foreground max-w-2xl text-lg">
          A small cross-section of recent work — from startups and nonprofits to personal experiments.
        </p>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => {
            const isFeatured = i === 0;
            const description = project.longDescription ?? project.description;
            const hasDemo = project.demoUrl && project.demoUrl !== '#';
            const hasCode = project.codeUrl && project.codeUrl !== '#';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={cn(isFeatured && 'md:col-span-full')}
              >
                <a
                  href={project.demoUrl || '#'}
                  target={hasDemo ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <div className="glass-strong rounded-3xl border border-border/50 overflow-hidden card-hover glow-border relative h-full flex flex-col">
                    <div
                      className={cn(
                        'relative overflow-hidden bg-muted',
                        isFeatured
                          ? 'aspect-[16/9] md:aspect-[21/9]'
                          : 'aspect-[16/10] md:aspect-[16/9]'
                      )}
                    >
                      <div
                        className={cn(
                          'absolute inset-0 bg-gradient-to-t',
                          project.accent
                        )}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,hsl(var(--card)/0.8)_100%)]" />
                      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:24px_24px]" />
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        width={1200}
                        height={800}
                        className="w-full h-full object-cover object-center mix-blend-normal transition-transform duration-[0.8s] ease-[0.22,1,0.36,1] group-hover:scale-[1.03]"
                      />
                      {project.year && (
                        <span className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground border border-border/60 backdrop-blur-xl">
                          {project.year}
                        </span>
                      )}
                    </div>

                    <div className="p-6 md:p-8 lg:p-10 flex flex-col flex-grow">
                      <div className="flex justify-between items-start gap-4 mb-4">
                        <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex gap-2 shrink-0">
                          {hasCode && (
                            <span
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (project.codeUrl) window.open(project.codeUrl, '_blank', 'noopener,noreferrer');
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  if (project.codeUrl) window.open(project.codeUrl, '_blank', 'noopener,noreferrer');
                                }
                              }}
                              role="link"
                              tabIndex={0}
                              className="rounded-lg w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all cursor-pointer"
                              aria-label="View source code"
                            >
                              <Github size={16} strokeWidth={2} />
                            </span>
                          )}
                          {hasDemo && (
                            <span
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (project.demoUrl) window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  if (project.demoUrl) window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                                }
                              }}
                              role="link"
                              tabIndex={0}
                              className="rounded-lg w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all cursor-pointer"
                              aria-label="View live demo"
                            >
                              <ExternalLink size={16} strokeWidth={2} />
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground text-[15px] leading-relaxed max-w-2xl mb-6">
                        {description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md px-2.5 py-1 text-[11px] font-medium bg-muted/50 text-muted-foreground border border-border/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 inline-flex items-center text-sm font-medium text-foreground group/btn">
                        View case study
                        <span className="ml-2 transition-transform duration-200 group-hover/btn:translate-x-1">
                          <ArrowRight size={14} strokeWidth={2} />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
