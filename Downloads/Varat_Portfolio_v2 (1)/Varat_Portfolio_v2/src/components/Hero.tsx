import { m } from "framer-motion";
import { ArrowRight, Check, Copy, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollLink } from "@/components/ScrollLink";
import { DeveloperProfileCard } from "@/components/developer-profile-card";
import { RoleTicker } from "@/components/RoleTicker";
import { useCopy } from "@/hooks/useCopy";
import { site, socialLinks } from "@/data/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const { copied, copy } = useCopy();
  const emailCopied = copied === site.email;

  return (
    <section id="top" className="relative pb-12 pt-28 md:pb-20 md:pt-36">
      <div className="container-edit">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <m.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="flex max-w-2xl flex-col items-start gap-6"
          >
            <m.p
              variants={item}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="size-4 text-accent" strokeWidth={1.5} aria-hidden />
              {site.location}
            </m.p>

            <m.h1 variants={item} className="font-display text-display font-semibold">
              <span className="text-gradient">{site.name}</span>
            </m.h1>

            <m.p variants={item} className="text-2xl font-medium text-foreground sm:text-3xl">
              <span className="text-muted-foreground">I&rsquo;m a </span>
              <RoleTicker roles={site.roles} />
            </m.p>

            <m.p variants={item} className="max-w-prose text-lead text-muted-foreground">
              Building digital experiences that feel effortless. I turn considered design into
              interfaces that are fast, accessible, and built to last — based in Kathmandu,
              working with teams anywhere.
            </m.p>

            <m.div variants={item} className="flex flex-wrap items-center gap-3">
              <Button asChild className="group hover:scale-[1.02]">
                <ScrollLink href="#projects">
                  Explore work
                  <ArrowRight
                    className="size-4 transition-transform duration-200 ease-signature group-hover:translate-x-1"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </ScrollLink>
              </Button>

              {site.resumeUrl && (
                <Button asChild variant="outline" className="hover:scale-[1.02]">
                  <a href={site.resumeUrl} download>
                    <Download className="size-4" strokeWidth={1.75} aria-hidden />
                    Download CV
                  </a>
                </Button>
              )}

              <Button
                type="button"
                variant="outline"
                className="hover:scale-[1.02]"
                onClick={() => copy(site.email, "Email copied to clipboard")}
              >
                {emailCopied ? (
                  <Check className="size-4 text-success" strokeWidth={2} aria-hidden />
                ) : (
                  <Copy className="size-4" strokeWidth={1.75} aria-hidden />
                )}
                {emailCopied ? "Copied" : "Copy email"}
              </Button>
            </m.div>

            <m.ul variants={item} className="flex items-center gap-1" aria-label="Social links">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-full text-muted-foreground transition-[color,background-color,transform] duration-200 hover:scale-105 hover:bg-muted hover:text-accent active:scale-95"
                  >
                    <Icon className="size-[18px]" strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </m.ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[648px] justify-self-start lg:max-w-[480px] lg:justify-self-end xl:max-w-[520px]"
          >
            <DeveloperProfileCard />
          </m.div>
        </div>
      </div>
    </section>
  );
}
