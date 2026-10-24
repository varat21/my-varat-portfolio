import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";

/**
 * Rotating role line. A hidden sizer holds the longest role so the width never shifts.
 * Screen readers get the full list once; the visual rotation is aria-hidden.
 * With reduced motion the first role is shown statically.
 */
export function RoleTicker({ roles, intervalMs = 2600 }: { roles: readonly string[]; intervalMs?: number }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce || roles.length < 2) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % roles.length), intervalMs);
    return () => window.clearInterval(id);
  }, [reduce, roles.length, intervalMs]);

  const longest = roles.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <>
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden className="relative inline-flex overflow-hidden align-bottom">
        <span className="invisible whitespace-nowrap">{longest}</span>
        <AnimatePresence mode="wait" initial={false}>
          <m.span
            key={roles[i]}
            initial={{ y: "70%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-70%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 whitespace-nowrap text-accent"
          >
            {roles[i]}
          </m.span>
        </AnimatePresence>
      </span>
    </>
  );
}
