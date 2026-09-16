import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollLink } from "@/components/ScrollLink";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#top");
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  // Scroll shell + reading progress
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: track which section is currently in view
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Move the sliding pill indicator to sit under the active link
  useEffect(() => {
    const el = linkRefs.current[active];
    if (el && navRef.current) {
      const navBox = navRef.current.getBoundingClientRect();
      const linkBox = el.getBoundingClientRect();
      setIndicator({
        left: linkBox.left - navBox.left,
        width: linkBox.width,
        opacity: 1,
      });
    } else {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [active, scrolled, open]);

  const markActive = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6"
    >
      {/* Reading progress */}
      <motion.span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-clay/70"
        style={{ scaleX: progress }}
      />

      <div
        className={`container-edit flex h-16 items-center justify-between rounded-full border transition-[background-color,border-color,box-shadow] duration-500 ease-signature ${
          scrolled
            ? "border-border/80 bg-background/80 px-6 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] backdrop-blur-md"
            : "border-transparent bg-transparent px-6"
        }`}
      >
        <ScrollLink
          href="#top"
          onNavigate={() => markActive("#top")}
          aria-label="Back to top"
          className="flex items-baseline gap-px font-display text-lg tracking-tight text-foreground transition-colors duration-300 hover:text-clay"
        >
          VT<span className="text-clay">.</span>
        </ScrollLink>

        <nav ref={navRef} className="relative hidden items-center gap-1 lg:flex">
          <motion.span
            className="absolute inset-y-1 rounded-full bg-accent/10"
            animate={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <ScrollLink
                key={link.href}
                href={link.href}
                ref={(el) => {
                  linkRefs.current[link.href] = el;
                }}
                onNavigate={() => markActive(link.href)}
                aria-current={isActive ? "true" : undefined}
                className={`relative z-10 rounded-full px-4 py-2 text-[0.9rem] transition-colors duration-300 ${
                  isActive
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </ScrollLink>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Button asChild size="sm">
            <ScrollLink href="#contact" onNavigate={() => markActive("#contact")}>
              Let&rsquo;s talk
            </ScrollLink>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/60"
              >
                {open ? (
                  <X className="h-5 w-5" strokeWidth={1.5} />
                ) : (
                  <Menu className="h-5 w-5" strokeWidth={1.5} />
                )}
              </button>
            </SheetTrigger>
            <SheetContent>
              <AnimatePresence>
                {open && (
                  <motion.nav
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                      hidden: {},
                    }}
                    className="mt-16 flex flex-col gap-1"
                  >
                    {links.map((link) => {
                      const isActive = active === link.href;
                      return (
                        <motion.div
                          key={link.href}
                          variants={{
                            hidden: { opacity: 0, x: 16 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <SheetClose asChild>
                            <ScrollLink
                              href={link.href}
                              onNavigate={() => markActive(link.href)}
                              className={`flex items-center justify-between border-b border-border py-4 font-display text-2xl transition-colors duration-300 ${
                                isActive ? "text-accent" : "text-foreground"
                              }`}
                            >
                              {link.label}
                              {isActive && (
                                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                              )}
                            </ScrollLink>
                          </SheetClose>
                        </motion.div>
                      );
                    })}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: 16 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="pt-6"
                    >
                      <SheetClose asChild>
                        <Button asChild className="w-full">
                          <ScrollLink href="#contact" onNavigate={() => markActive("#contact")}>
                            Let&rsquo;s talk
                          </ScrollLink>
                        </Button>
                      </SheetClose>
                    </motion.div>
                  </motion.nav>
                )}
              </AnimatePresence>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}