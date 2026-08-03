import { motion } from "framer-motion";
import { Sparkles, Zap, Heart, GraduationCap } from "lucide-react";
import { stats, education } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const viewport = { once: true, margin: "-100px" };

export function About() {
  return (
    <section
      id="about"
      className="section-pad relative overflow-hidden"
      aria-label="About me"
    >
      <div className="mesh-bg" aria-hidden="true">
        <div
          className="blob"
          style={{
            width: "520px",
            height: "520px",
            background:
              "linear-gradient(135deg, hsl(var(--accent) / 0.18) 0%, hsl(280, 85%, 65% / 0.12) 100%)",
            top: "-10%",
            right: "-8%",
            opacity: 0.15,
          }}
        />
        <div
          className="blob"
          style={{
            width: "420px",
            height: "420px",
            background:
              "linear-gradient(135deg, hsl(210, 95%, 65% / 0.14) 0%, hsl(var(--accent) / 0.1) 100%)",
            bottom: "-6%",
            left: "-6%",
            animationDelay: "-8s",
            opacity: 0.15,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto container-px relative z-10">
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-5"
          >
            <span className="w-8 h-px bg-accent inline-block" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              01 / About me
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight max-w-3xl mb-6 text-balance"
          >
            I build thoughtful digital products with clean code and obsessive
            attention to detail.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            I'm Varat Thapa — a Frontend Developer & Product Engineer from
            Kathmandu, Nepal, with 1.5+ years building production-grade React,
            Next.js, and full-stack applications. I care deeply about craft:
            performance, accessibility, typography, micro-interactions, and
            products that feel great to use.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mt-16 md:mt-24">
          <div className="lg:col-span-7 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[15px] md:text-base text-muted-foreground leading-relaxed"
            >
              Most recently, I've been leading frontend and product work at a
              wellness startup, where I built a new design system, shipped the
              core platform 3 weeks early, and mentored two junior engineers. I
              enjoy the intersection of product thinking, design, and
              engineering — the space where 10x experiences get made.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] md:text-base text-muted-foreground leading-relaxed"
            >
              Outside of client work, I'm pursuing an MBA in IT to sharpen the
              business side of my craft. When I'm not coding, you'll find me
              reading about design systems, experimenting with Framer Motion
              animations, or exploring the hills around Kathmandu.
            </motion.p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4" role="list">
              <motion.div
                role="listitem"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass rounded-2xl p-5 border border-border/50 card-hover"
              >
                <Sparkles className="w-6 h-6 gradient-text-accent" />
                <h4 className="font-display font-semibold mt-3">
                  Craft first
                </h4>
                <p className="text-sm text-muted-foreground mt-1.5">
                  Every pixel, interaction, and line of code gets the attention
                  it deserves.
                </p>
              </motion.div>

              <motion.div
                role="listitem"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="glass rounded-2xl p-5 border border-border/50 card-hover"
              >
                <Zap className="w-6 h-6 text-amber-400" />
                <h4 className="font-display font-semibold mt-3">Ship fast</h4>
                <p className="text-sm text-muted-foreground mt-1.5">
                  Prefer small, frequent releases with tight feedback loops
                  over big bangs.
                </p>
              </motion.div>

              <motion.div
                role="listitem"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass rounded-2xl p-5 border border-border/50 card-hover"
              >
                <Heart className="w-6 h-6 text-rose-400" />
                <h4 className="font-display font-semibold mt-3">
                  User obsessed
                </h4>
                <p className="text-sm text-muted-foreground mt-1.5">
                  If an experience doesn't feel great for the user, it doesn't
                  ship.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="grid grid-cols-2 gap-4" role="list" aria-label="Statistics">
              {stats.map((stat, i) => (
                <motion.div
                  role="listitem"
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
                  className="glass rounded-2xl p-5 md:p-6 border border-border/50 card-hover"
                >
                  <div className="text-3xl md:text-4xl font-display font-semibold gradient-text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-5">
              <h5 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">
                Education
              </h5>
              <div className="space-y-3" role="list" aria-label="Education history">
                {education.map((edu, i) => (
                  <motion.div
                    role="listitem"
                    key={edu.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                    className="glass rounded-xl p-4 border border-border/50 flex gap-4 card-hover last:mb-0"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-accent/20 to-fuchsia-500/20 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <h5 className="text-sm font-semibold leading-snug">
                        {edu.degree}
                      </h5>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {edu.school}
                      </p>
                      <p className="text-xs text-accent/90 mt-0.5">
                        {edu.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
