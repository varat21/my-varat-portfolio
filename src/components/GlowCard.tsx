import { useRef, type PointerEvent, type ReactNode } from "react";
import { m, useMotionValue, useReducedMotion, useSpring, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps extends Omit<HTMLMotionProps<"div">, "children" | "ref" | "style"> {
  children: ReactNode;
  /** Classes for the inner wrapper (padding / layout). */
  innerClassName?: string;
  /** Max tilt in degrees. 0 disables tilt. */
  tilt?: number;
  as?: "div" | "article" | "li";
}

/**
 * Surface with a cursor-following accent border + wash and optional 3D tilt.
 * Pointer position is written straight to CSS variables (no React re-render);
 * tilt uses spring motion values (GPU transforms). Mouse-only, off for reduced motion.
 */
export function GlowCard({
  children,
  className,
  innerClassName,
  tilt = 0,
  as = "div",
  onPointerEnter,
  ...rest
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 220, damping: 22 });
  const sry = useSpring(ry, { stiffness: 220, damping: 22 });
  const frame = useRef<number | undefined>(undefined);
  const canTilt = tilt > 0 && !reduce;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const x = clientX - r.left;
      const y = clientY - r.top;
      el.style.setProperty("--gx", `${x}px`);
      el.style.setProperty("--gy", `${y}px`);
      if (canTilt) {
        ry.set((x / r.width - 0.5) * 2 * tilt);
        rx.set(-(y / r.height - 0.5) * 2 * tilt);
      }
    });
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const Comp = m[as] as typeof m.div;

  return (
    <Comp
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onPointerEnter={onPointerEnter}
      style={canTilt ? { rotateX: srx, rotateY: sry, transformPerspective: 1000 } : undefined}
      className={cn(
        "glow-card card relative shadow-card transition-shadow duration-300 hover:shadow-glow",
        className
      )}
      {...rest}
    >
      <div className={cn("relative z-10 h-full", innerClassName)}>{children}</div>
    </Comp>
  );
}
