import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { scrollToId } from "@/lib/scrollTo";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          type="button"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => scrollToId("#top")}
          className="fixed bottom-4 right-4 z-40 flex size-11 items-center justify-center rounded-full border border-border bg-background/90 shadow-md backdrop-blur-md transition-colors duration-200 hover:border-accent hover:text-accent sm:bottom-6 sm:right-6"
        >
          <ArrowUp className="size-4" strokeWidth={1.75} />
        </m.button>
      )}
    </AnimatePresence>
  );
}
