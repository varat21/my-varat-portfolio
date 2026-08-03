import { motion } from "framer-motion";
import { testimonials } from "@/data/portfolio";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <div className="mesh-bg">
        <div className="blob bg-accent/10 w-[400px] h-[400px] -top-20 -left-20" style={{ animationDelay: "0s" }} />
        <div className="blob bg-fuchsia-500/10 w-[350px] h-[350px] -bottom-20 -right-10" style={{ animationDelay: "5s" }} />
      </div>

      <div className="max-w-7xl mx-auto container-px relative z-10">
        <div>
          <p className="text-accent font-medium tracking-wide text-sm mb-4">06 / Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight max-w-3xl mb-6">
            Kind words from collaborators.
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            I'm lucky to work with thoughtful people who push me to do my best work. Here's what a few of them had to say.
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-6 md:p-8 border border-border/50 card-hover relative h-full flex flex-col"
            >
              <div className="flex items-center gap-1 mb-6">
                {t.rating ? (
                  Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400/90 text-amber-400/90" strokeWidth={0} />
                  ))
                ) : (
                  Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400/90 text-amber-400/90" strokeWidth={0} />
                  ))
                )}
              </div>

              <div className="absolute -top-4 left-5 text-7xl font-display text-accent/10 select-none pointer-events-none">
                &ldquo;
              </div>
              <blockquote className="text-[15px] md:text-base leading-relaxed text-foreground/90 mb-8 flex-grow text-pretty font-medium">
                {t.quote}
              </blockquote>

              <div className="mt-auto pt-6 border-t border-border/50 flex items-center gap-4">
                <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden ring-2 ring-border bg-muted">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-sm font-semibold truncate">{t.name}</h4>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">{t.title}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
