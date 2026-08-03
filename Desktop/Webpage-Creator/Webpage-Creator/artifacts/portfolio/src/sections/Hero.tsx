import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig, socialLinks } from "@/data/portfolio";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  Code,
} from "lucide-react";

const fallbackImgUrl =
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20headshot%20portrait%20photo%20of%20confident%20young%20nepali%20male%20software%20engineer%20Varat%20Thapa%20in%20a%20minimal%20dark%20studio%20with%20soft%20cinematic%20lighting%20wearing%20a%20clean%20black%20tshirt%2C%20high%20detail%2C%20premium%20aesthetic&image_size=square_hd";

const statsData = [
  { value: siteConfig.yearsOfExperience, label: "Years experience" },
  { value: "30+", label: "Projects shipped" },
  { value: "12+", label: "Happy clients" },
];

export function Hero() {
  const [imgSrc, setImgSrc] = useState<string>("/varat.jpg");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleImgError = () => {
    if (imgSrc !== fallbackImgUrl) {
      setImgSrc(fallbackImgUrl);
    }
  };

  const getSocialUrl = (iconName: string) => {
    const found = socialLinks.find((s) => s.icon === iconName);
    return found?.url ?? "#";
  };

  return (
    <section
      id="hero"
      className="section-full relative overflow-hidden pt-20 md:pt-28"
    >
      <div className="mesh-bg">
        <div
          className="blob top-[10%] -left-[5%] w-[500px] h-[500px] bg-purple-500/20"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="blob top-[5%] right-[0%] w-[600px] h-[600px] bg-fuchsia-500/15"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="blob bottom-[10%] left-[20%] w-[550px] h-[550px] bg-sky-500/15"
          style={{ animationDelay: "-10s" }}
        />
        <div
          className="blob bottom-[0%] right-[10%] w-[500px] h-[500px] bg-indigo-500/15"
          style={{ animationDelay: "-15s" }}
        />
      </div>

      <div className="noise-bg absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto container-px grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass rounded-full px-3.5 py-1.5 inline-flex items-center gap-2 mb-8 border border-emerald-500/20 bg-emerald-500/5"
          >
            <span className="relative inline-flex">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse opacity-100" />
              <span className="absolute inline-flex w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
            </span>
            <span className="text-[11px] font-medium tracking-wide text-emerald-300">
              Available for freelance · Q3 2026
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.95] tracking-tight text-foreground text-balance mb-1">
              Crafting digital
            </h1>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.95] tracking-tight text-balance">
              experiences that{" "}
              <span className="gradient-text-accent">feel effortless.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mt-8 mb-10 text-pretty"
          >
            {siteConfig.tagline} Currently building premium React &amp; Next.js
            products from Kathmandu, Nepal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mt-10 items-center"
          >
            <motion.button
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={() => scrollTo("projects")}
              className="rounded-full px-6 py-3.5 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-2 transition-all duration-300 shadow-[0_1px_0_rgba(255,255,255,0.1)_inset,0_10px_30px_-10px_hsl(var(--accent)/0.5)]"
            >
              View my work
              <ArrowRight size={16} strokeWidth={2} />
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={() => scrollTo("contact")}
              className="glass rounded-full px-6 py-3.5 text-sm font-medium inline-flex items-center gap-2 hover:bg-card transition-all duration-300"
            >
              Get in touch
              <Mail size={16} strokeWidth={2} />
            </motion.button>

            <div className="hidden sm:flex ml-0 sm:ml-2 gap-2 items-center">
              <a
                href={getSocialUrl("github")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border bg-card/50 hover:border-accent/30 hover:text-accent flex items-center justify-center transition-all duration-200"
              >
                <Github size={16} strokeWidth={2} />
              </a>
              <a
                href={getSocialUrl("linkedin")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border bg-card/50 hover:border-accent/30 hover:text-accent flex items-center justify-center transition-all duration-200"
              >
                <Linkedin size={16} strokeWidth={2} />
              </a>
              <a
                href={getSocialUrl("twitter")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border bg-card/50 hover:border-accent/30 hover:text-accent flex items-center justify-center transition-all duration-200"
              >
                <Twitter size={16} strokeWidth={2} />
              </a>
            </div>
          </motion.div>

          <div className="mt-14 md:mt-20 grid grid-cols-3 gap-6 max-w-2xl">
            {statsData.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + i * 0.08,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="glass rounded-2xl p-4 md:p-5 border border-border/50"
              >
                <div className="text-2xl md:text-3xl font-display font-semibold gradient-text-accent">
                  {stat.value}
                </div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="rounded-full border border-dashed border-border w-[480px] h-[480px] hidden xl:block"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute rounded-full border border-dotted border-border w-[400px] h-[400px] hidden xl:block"
            />
          </div>

          <div className="relative w-[280px] h-[340px] sm:w-[340px] sm:h-[410px] lg:w-[380px] lg:h-[460px] shrink-0">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-accent/20 via-fuchsia-500/20 to-sky-500/20 blur-3xl opacity-60" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glow-border glass rounded-[2.5rem] p-2 shadow-[0_50px_100px_-20px_hsl(var(--accent)/0.25)] relative overflow-hidden"
            >
              <div className="relative rounded-[2rem] overflow-hidden w-full h-full bg-gradient-to-br from-card via-secondary to-muted">
                <img
                  src={imgSrc}
                  onError={handleImgError}
                  alt="Varat Thapa — Frontend Developer"
                  width={768}
                  height={1024}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass rounded-2xl p-3 border border-border/60 shadow-xl backdrop-blur-xl absolute -left-4 md:-left-8 bottom-8 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Sparkles size={16} className="text-accent" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xs font-medium">Available now</div>
                  <div className="text-[10px] text-muted-foreground">
                    Taking Q3 projects
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: -2,
              }}
              className="glass rounded-2xl p-3 border border-border/60 shadow-xl absolute -right-2 md:-right-6 top-10 md:top-16 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 w-8 h-8 flex items-center justify-center">
                  <Code size={16} className="text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xs font-medium">React · Next.js</div>
                  <div className="text-[10px] text-muted-foreground">
                    5+ yrs combined
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-foreground/50 via-foreground/20 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [-16, 40] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute w-full h-4 bg-foreground"
          />
        </div>
      </motion.div>
    </section>
  );
}
