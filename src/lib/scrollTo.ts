import type Lenis from "lenis";

let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

/**
 * Smooth-scroll to a section. Both paths (Lenis and native `scrollIntoView`)
 * honour the element's CSS `scroll-margin-top`, so the landing offset is
 * defined once, in index.css, and the two behave identically.
 */
export function scrollToId(href: string) {
  if (!href.startsWith("#")) return;
  if (href === "#top") {
    if (lenis) lenis.scrollTo(0, { duration: 1.1 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector<HTMLElement>(href);
  if (!el) return;

  if (lenis) {
    lenis.scrollTo(el, { duration: 1.1 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
