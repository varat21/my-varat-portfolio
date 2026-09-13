import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ease-signature ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-edit flex h-20 items-center justify-between">
        <a
          href="#top"
          className="font-display text-xl tracking-tight text-foreground hover:text-accent transition-colors duration-300"
        >
          VT
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[0.95rem] text-foreground/80 hover:text-foreground transition-colors duration-300"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 ease-signature group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <ThemeToggle />
          <Button asChild size="sm">
            <a href="#contact">Let&rsquo;s talk</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="flex h-9 w-9 items-center justify-center text-foreground"
              >
                <Menu className="h-5 w-5" strokeWidth={1.5} />
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
                    {links.map((link) => (
                      <motion.div
                        key={link.href}
                        variants={{
                          hidden: { opacity: 0, x: 16 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <SheetClose asChild>
                          <a
                            href={link.href}
                            className="block border-b border-border py-4 font-display text-2xl"
                          >
                            {link.label}
                          </a>
                        </SheetClose>
                      </motion.div>
                    ))}
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
                          <a href="#contact">Let&rsquo;s talk</a>
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
