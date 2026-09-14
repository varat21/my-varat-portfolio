// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
// import { ThemeToggle } from "@/components/ThemeToggle";
// import { CgProfile } from "react-icons/cg";

// const links = [
//   { label: "About", href: "#about" },
//   { label: "Experience", href: "#experience" },
//   { label: "Projects", href: "#projects" },
//   { label: "Contact", href: "#contact" },
// ];

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ease-signature ${
//         scrolled
//           ? "border-b border-border bg-background/80 backdrop-blur-md"
//           : "border-b border-transparent bg-transparent"
//       }`}
//     >
//       <div className="container-edit flex h-20 items-center justify-between">
//         <a
//           href="#top"
//           className="font-display text-xl tracking-tight text-foreground hover:text-accent transition-colors duration-300"
//         >
//           {/* VT */}
//           <CgProfile />

//         </a>

//         <nav className="hidden items-center gap-10 md:flex">
//           {links.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="group relative text-[0.95rem] text-foreground/80 hover:text-foreground transition-colors duration-300"
//             >
//               {link.label}
//               <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 ease-signature group-hover:w-full" />
//             </a>
//           ))}
//         </nav>

//         <div className="hidden items-center gap-5 md:flex">
//           <ThemeToggle />
//           <Button asChild size="sm">
//             <a href="#contact">Let&rsquo;s talk</a>
//           </Button>
//         </div>

//         <div className="flex items-center gap-2 md:hidden">
//           <ThemeToggle />
//           <Sheet open={open} onOpenChange={setOpen}>
//             <SheetTrigger asChild>
//               <button
//                 aria-label="Open menu"
//                 className="flex h-9 w-9 items-center justify-center text-foreground"
//               >
//                 <Menu className="h-5 w-5" strokeWidth={1.5} />
//               </button>
//             </SheetTrigger>
//             <SheetContent>
//               <AnimatePresence>
//                 {open && (
//                   <motion.nav
//                     initial="hidden"
//                     animate="visible"
//                     exit="hidden"
//                     variants={{
//                       visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
//                       hidden: {},
//                     }}
//                     className="mt-16 flex flex-col gap-1"
//                   >
//                     {links.map((link) => (
//                       <motion.div
//                         key={link.href}
//                         variants={{
//                           hidden: { opacity: 0, x: 16 },
//                           visible: { opacity: 1, x: 0 },
//                         }}
//                         transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//                       >
//                         <SheetClose asChild>
//                           <a
//                             href={link.href}
//                             className="block border-b border-border py-4 font-display text-2xl"
//                           >
//                             {link.label}
//                           </a>
//                         </SheetClose>
//                       </motion.div>
//                     ))}
//                     <motion.div
//                       variants={{
//                         hidden: { opacity: 0, x: 16 },
//                         visible: { opacity: 1, x: 0 },
//                       }}
//                       transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//                       className="pt-6"
//                     >
//                       <SheetClose asChild>
//                         <Button asChild className="w-full">
//                           <a href="#contact">Let&rsquo;s talk</a>
//                         </Button>
//                       </SheetClose>
//                     </motion.div>
//                   </motion.nav>
//                 )}
//               </AnimatePresence>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </motion.header>
//   );
// }



import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  const [active, setActive] = useState<string>("#top");
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  // Scroll shell state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
  }, [active, scrolled]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6"
    >
      <div
        className={`container-edit flex h-16 items-center justify-between rounded-full border transition-[background-color,border-color,box-shadow] duration-500 ease-signature ${
          scrolled
            ? "border-border/80 bg-background/80 px-6 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] backdrop-blur-md"
            : "border-transparent bg-transparent px-6"
        }`}
      >
        <a
          href="#top"
          onClick={() => setActive("#top")}
          className="font-display text-lg tracking-tight text-foreground hover:text-accent transition-colors duration-300"
        >
          VT
        </a>

        <nav
          ref={navRef}
          className="relative hidden items-center gap-1 md:flex"
        >
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
              <a
                key={link.href}
                ref={(el) => (linkRefs.current[link.href] = el)}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`relative z-10 rounded-full px-4 py-2 text-[0.9rem] transition-colors duration-300 ${
                  isActive
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
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
                            <a
                              href={link.href}
                              onClick={() => setActive(link.href)}
                              className={`flex items-center justify-between border-b border-border py-4 font-display text-2xl transition-colors duration-300 ${
                                isActive ? "text-accent" : "text-foreground"
                              }`}
                            >
                              {link.label}
                              {isActive && (
                                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                              )}
                            </a>
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