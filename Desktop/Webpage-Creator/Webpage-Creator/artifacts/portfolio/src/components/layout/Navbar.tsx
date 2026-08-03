import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          isScrolled ? "glass-strong py-2.5" : "py-5 bg-transparent"
        )}
        aria-label="Primary navigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#hero");
            }}
            className="font-display font-semibold tracking-tight text-lg"
            aria-label="Varat - Home"
          >
            Varat<span className="gradient-text-accent">.</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="group relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              disabled={!mounted}
              className="w-9 h-9 rounded-full border border-border bg-card/50 hover:bg-card text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center justify-center disabled:opacity-50"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {mounted && (
                theme === "dark" ? (
                  <Sun size={16} strokeWidth={2} />
                ) : (
                  <Moon size={16} strokeWidth={2} />
                )
              )}
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              className="rounded-full px-4 py-2 text-xs font-medium tracking-wide bg-foreground text-background hover:bg-foreground/90 transition-all duration-200"
              aria-label="Get in touch - Navigate to contact section"
            >
              Get in touch
            </button>
          </div>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={20} strokeWidth={2} />
            ) : (
              <Menu size={20} strokeWidth={2} />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[45] glass-strong flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-5 flex items-center justify-between">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#hero");
                }}
                className="font-display font-semibold tracking-tight text-lg"
              >
                Varat<span className="gradient-text-accent">.</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-card/50 text-foreground"
                aria-label="Close menu"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.06, duration: 0.4 }}
                  className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-200"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.06, duration: 0.4 }}
                className="flex items-center gap-4 mt-6"
              >
                <button
                  onClick={toggleTheme}
                  className="w-10 h-10 rounded-full border border-border bg-card/50 hover:bg-card text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center justify-center"
                  aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                >
                  {mounted && (
                    theme === "dark" ? (
                      <Sun size={18} strokeWidth={2} />
                    ) : (
                      <Moon size={18} strokeWidth={2} />
                    )
                  )}
                </button>

                <button
                  onClick={() => scrollTo("#contact")}
                  className="rounded-full px-6 py-3 text-sm font-medium tracking-wide bg-foreground text-background hover:bg-foreground/90 transition-all duration-200"
                  aria-label="Get in touch"
                >
                  Get in touch
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
