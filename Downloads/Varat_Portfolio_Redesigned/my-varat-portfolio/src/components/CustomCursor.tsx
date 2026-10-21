import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "link" | "project";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>("default");
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  const frame = useRef<number>();

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const handleMove = (e: PointerEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
      });
    };

    const handleOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      const projectEl = target.closest<HTMLElement>("[data-cursor='project']");
      const linkEl = target.closest("a, button");

      if (projectEl) {
        setState("project");
        setLabel(projectEl.dataset.cursorLabel ?? "View");
      } else if (linkEl) {
        setState("link");
        setLabel(null);
      } else {
        setState("default");
        setLabel(null);
      }
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          width: state === "project" ? 72 : state === "link" ? 14 : 8,
          height: state === "project" ? 72 : state === "link" ? 14 : 8,
          backgroundColor:
            state === "project" ? "hsl(var(--clay))" : "hsl(var(--foreground))",
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center rounded-full"
      >
        {state === "project" && (
          <span className="text-[0.7rem] font-medium tracking-wide text-background">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
