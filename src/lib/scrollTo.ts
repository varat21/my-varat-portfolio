import type Lenis from "lenis";

let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

export function scrollToId(href: string) {
  if (!href.startsWith("#")) return;
  const el = document.querySelector<HTMLElement>(href);
  if (!el) return;

  if (lenis) {
    lenis.scrollTo(el, { offset: 96, duration: 1.1 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}