import { useEffect, useRef } from "react";

/**
 * Fixed page background: faint grid, a brighter grid revealed around the cursor,
 * and a soft accent spotlight that eases toward the pointer (lerped in rAF, GPU transform).
 * On touch devices / reduced motion it renders the static grid + top glow only.
 */
export function Background() {
  const root = useRef<HTMLDivElement>(null);
  const bright = useRef<HTMLDivElement>(null);
  const spot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const sp = spot.current;
    const br = bright.current;
    if (!el || !sp || !br) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let tx = window.innerWidth / 2;
    let ty = 240;
    let x = tx;
    let y = ty;
    let raf = 0;

    const tick = () => {
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      sp.style.transform = `translate3d(${x - 320}px, ${y - 320}px, 0)`;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      raf = Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5 ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      tx = e.clientX;
      ty = e.clientY;
      sp.style.opacity = "1";
      br.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={root}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-grid absolute inset-0" />
      <div ref={bright} className="bg-grid-bright absolute inset-0 opacity-0 transition-opacity duration-700" />
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,hsl(var(--accent)/0.14),transparent)]" />
      <div
        ref={spot}
        className="absolute left-0 top-0 size-[640px] rounded-full opacity-0 transition-opacity duration-700 will-change-transform"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.13) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
