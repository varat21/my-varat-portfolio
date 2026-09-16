import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollLink } from "@/components/ScrollLink";
import { scrollToId } from "@/lib/scrollTo";

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

const socials = [
  { href: "https://github.com", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:varat.thapa21@gmail.com", label: "Email", Icon: Mail },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-8%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] h-[320px] w-[320px] rounded-full bg-clay/5 blur-[100px]" />
      </div>

      <div className="container-edit">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="max-w-2xl"
          >
            <motion.div
              variants={item}
              className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
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

            <motion.p
              variants={item}
              className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground"
            >
              I&rsquo;m Varat Thapa, a frontend developer and product engineer. I turn
              considered design into interfaces that are fast, accessible, and built to
              last — currently based in Kathmandu, working with teams anywhere.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild>
                <ScrollLink href="#projects">
                  View my work
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </ScrollLink>
              </Button>
              <Button asChild variant="outline">
                <ScrollLink href="#contact">Let&rsquo;s talk</ScrollLink>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-shrink-0 flex-col items-center gap-6"
          >
            <div className="group relative">
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-accent/20 via-transparent to-clay/10 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-3xl border border-border bg-accent/5 p-1.5 transition-all duration-500 group-hover:bg-accent/10">
                <div className="relative h-[320px] w-[260px] overflow-hidden rounded-[20px] bg-muted sm:h-[360px] sm:w-[290px]">
                  <img
                    src="/images/varat.JPG"
                    alt="Varat Thapa"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Floating availability chip */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/85 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Open to work
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background/60 p-1.5 backdrop-blur-sm">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors duration-300 hover:bg-accent/10 hover:text-accent"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
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
          onClick={(e) => {
            e.preventDefault();
            scrollToId("#about");
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-accent"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
        </motion.a>
      </motion.div>
    </section>
  );
}