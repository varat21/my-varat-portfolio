import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StatusPill } from "@/components/StatusPill";
import { ScrollLink } from "@/components/ScrollLink";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

const SPY_IDS = ["#top", ...navLinks.map((l) => l.href)];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#top");
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ x: 0, width: 0, visible: false });

  // Reading progress is a motion value, so scrolling never re-renders the navbar.
  const { scrollYProgress } = useScroll();

  // setState bails out when the value is unchanged, so this only renders on threshold change.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy. `#top` is observed too, so the highlight clears when back at the hero.
  useEffect(() => {
    const targets = SPY_IDS.map((id) => document.querySelector(id)).filter(
      (el): el is Element => Boolean(el)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(`#${hit.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  // Position the sliding pill under the active link. Re-measure whenever the
  // nav resizes (e.g. when web fonts finish loading).
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const measure = () => {
      const el = linkRefs.current[active];
      setIndicator(
        el
          ? { x: el.offsetLeft, width: el.offsetWidth, visible: true }
          : (prev) => ({ ...prev, visible: false })
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(nav);
    return () => ro.disconnect();
  }, [active]);

  const go = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <>
      <m.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
      />
      <m.header
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-40 pt-3"
      >
        <div className="container-edit">
          <div
            className={cn(
              "flex h-14 items-center justify-between rounded-full border px-3 transition-[background-color,border-color,box-shadow] duration-300 ease-signature sm:px-4",
              scrolled
                ? "border-border bg-background/95 shadow-card backdrop-blur-md backdrop-saturate-150"
                : "border-transparent bg-transparent"
            )}
          >
            <div className="flex items-center gap-2">
            <ScrollLink
              href="#top"
              onNavigate={() => go("#top")}
              aria-label={`${site.initials} — ${site.name}, back to top`}
              className="inline-flex h-10 min-w-10 items-center rounded-full px-3 font-display text-lg font-medium tracking-tight transition-colors duration-200 hover:text-accent"
            >
              {site.initials}
              <span className="text-accent">.</span>
            </ScrollLink>
              <StatusPill className="hidden xl:inline-flex" />
            </div>

            <nav
              ref={navRef}
              aria-label="Primary"
              className="relative hidden items-center gap-1 lg:flex"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 rounded-full bg-accent/10 transition-[transform,width,opacity] duration-300 ease-signature"
                style={{
                  width: indicator.width,
                  transform: `translateX(${indicator.x}px)`,
                  opacity: indicator.visible ? 1 : 0,
                }}
              />
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <ScrollLink
                    key={link.href}
                    href={link.href}
                    ref={(el) => {
                      linkRefs.current[link.href] = el;
                    }}
                    onNavigate={() => go(link.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative z-10 inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors duration-200",
                      isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </ScrollLink>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <ThemeToggle />
              <Button asChild size="sm">
                <ScrollLink href="#contact" onNavigate={() => go("#contact")}>
                  Let&rsquo;s talk
                </ScrollLink>
              </Button>
            </div>

            <div className="flex items-center gap-1 lg:hidden">
              <ThemeToggle />
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    aria-label="Open menu"
                    className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors duration-200 hover:bg-muted"
                  >
                    <Menu className="size-5" strokeWidth={1.5} />
                  </button>
                </SheetTrigger>
                <SheetContent>
                  <SheetTitle className="eyebrow">Menu</SheetTitle>
                  <StatusPill className="mt-4" />
                  <AnimatePresence>
                    {open && (
                      <m.nav
                        aria-label="Mobile"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                          visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
                          hidden: {},
                        }}
                        className="mt-6 flex flex-col"
                      >
                        {navLinks.map((link) => {
                          const isActive = active === link.href;
                          return (
                            <m.div
                              key={link.href}
                              variants={{
                                hidden: { opacity: 0, x: 12 },
                                visible: { opacity: 1, x: 0 },
                              }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <SheetClose asChild>
                                <ScrollLink
                                  href={link.href}
                                  onNavigate={() => go(link.href)}
                                  aria-current={isActive ? "location" : undefined}
                                  className={cn(
                                    "flex min-h-12 items-center justify-between border-b border-border font-display text-xl transition-colors duration-200",
                                    isActive ? "text-accent" : "text-foreground"
                                  )}
                                >
                                  {link.label}
                                  {isActive && <span className="size-1.5 rounded-full bg-accent" />}
                                </ScrollLink>
                              </SheetClose>
                            </m.div>
                          );
                        })}
                        <m.div
                          variants={{
                            hidden: { opacity: 0, x: 12 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="pt-6"
                        >
                          <SheetClose asChild>
                            <Button asChild className="w-full">
                              <ScrollLink href="#contact" onNavigate={() => go("#contact")}>
                                Let&rsquo;s talk
                              </ScrollLink>
                            </Button>
                          </SheetClose>
                        </m.div>
                      </m.nav>
                    )}
                  </AnimatePresence>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </m.header>
    </>
  );
}
