import { useState } from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Medal } from "lucide-react";
import { skills, techBadges, achievements, type Skill } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type SkillCategory = "all" | "frontend" | "backend" | "tools" | "design";

const categories: { key: SkillCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
  { key: "design", label: "Design" },
];

const achievementIconMap: Record<string, typeof Award> = {
  award: Award,
  "trending-up": TrendingUp,
  medal: Medal,
};

const headerViewport = { once: true, margin: "-100px" };
const skillsViewport = { once: true, margin: "-50px" };

export function Skills() {
  const [activeCat, setActiveCat] = useState<SkillCategory>("all");
  const filterActive = activeCat !== "all";

  return (
    <section
      id="skills"
      className="section-pad relative overflow-hidden"
      aria-label="Skills and achievements"
    >
      <div className="max-w-7xl mx-auto container-px relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={headerViewport}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-5"
          >
            <span className="w-8 h-px bg-accent inline-block" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              02 / Skills &amp; stack
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={headerViewport}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight max-w-3xl mb-6 text-balance"
          >
            Technologies I use to bring ideas to life.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={headerViewport}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            Over the last few years I've worked across the stack, but my sweet
            spot is the intersection of product, design, and frontend
            engineering.
          </motion.p>
        </div>

        <div
          className="mt-12 mb-10 flex flex-wrap gap-2.5"
          role="tablist"
          aria-label="Skill categories"
        >
          {categories.map((cat) => {
            const isActive = activeCat === cat.key;
            return (
              <button
                key={cat.key}
                role="tab"
                aria-selected={isActive}
                aria-label={`Filter by ${cat.label} skills`}
                onClick={() => setActiveCat(cat.key)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200",
                  isActive
                    ? "bg-foreground text-background"
                    : "glass border border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div
          className="grid md:grid-cols-2 gap-x-10 gap-y-7 max-w-5xl"
          role="list"
          aria-label="Skills proficiency"
        >
          {skills.map((skill: Skill, index: number) => {
            const dimmed = filterActive && skill.category !== activeCat;
            return (
              <motion.div
                role="listitem"
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={skillsViewport}
                transition={{ delay: index * 0.04 }}
                className={cn(
                  "group",
                  dimmed && "opacity-30 transition-opacity duration-300"
                )}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {skill.level}%
                  </span>
                </div>
                <div
                  className="relative h-1.5 w-full rounded-full bg-muted overflow-hidden"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${skill.name} proficiency`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={skillsViewport}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-accent via-fuchsia-500 to-sky-500"
                    style={{ backgroundSize: "200% 100%" }}
                  />
                </div>
                <div className="mt-2">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div
          className="mt-20 max-w-4xl mx-auto flex flex-wrap gap-2.5 justify-center"
          role="list"
          aria-label="Technology badges"
        >
          {techBadges.map((badge) => (
            <motion.div
              role="listitem"
              key={badge.name}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <div className="glass rounded-full px-4 py-2 border border-border/60 flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all duration-200">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-accent/30 to-fuchsia-500/30" />
                <span className="text-xs">{badge.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-accent inline-block" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              03 / Achievements
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-10 max-w-xl text-balance">
            Moments I'm proud of
          </h3>

          <div
            className="grid md:grid-cols-3 gap-5"
            role="list"
            aria-label="Achievements"
          >
            {achievements.map((achievement, i) => {
              const Icon = achievementIconMap[achievement.icon] ?? Award;
              return (
                <motion.div
                  role="listitem"
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={headerViewport}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-2xl p-6 border border-border/50 card-hover h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 via-fuchsia-500/15 to-sky-500/15 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold font-display mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {achievement.description}
                  </p>
                  {achievement.year && (
                    <p className="text-xs text-accent mt-4 font-medium">
                      {achievement.year}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
