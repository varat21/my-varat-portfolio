import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="container-edit">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.div
            variants={item}
            className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for opportunities
            </span>
            <span aria-hidden className="text-border">
              /
            </span>
            <span>Kathmandu, Nepal</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance font-display text-[clamp(2.75rem,6vw,6rem)] font-normal leading-[1.02] tracking-tight"
          >
            Building digital
            <br />
            experiences that
            <br />
            feel effortless.
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              I&rsquo;m Varat Thapa, a frontend developer and product engineer. I turn
              considered design into interfaces that are fast, accessible, and built to
              last — currently based in Kathmandu, working with teams anywhere.
            </p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-accent transition-colors duration-300"
              >
                <Github className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-accent transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@varatthapa.dev"
                aria-label="Email"
                className="hover:text-accent transition-colors duration-300"
              >
                <Mail className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-14 flex flex-wrap items-center gap-4">
            <Button asChild>
              <a href="#projects">
                View my work
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Let&rsquo;s talk</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="mt-24 hidden justify-center sm:flex"
      >
        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-muted-foreground hover:text-accent transition-colors duration-300"
        >
          <ArrowDown className="h-5 w-5" strokeWidth={1.5} />
        </motion.a>
      </motion.div>
    </section>
  );
}
