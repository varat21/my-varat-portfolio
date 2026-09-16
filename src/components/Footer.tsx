import { Github, Linkedin, Mail } from "lucide-react";
import { ScrollLink } from "@/components/ScrollLink";
import { scrollToId } from "@/lib/scrollTo";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { href: "https://github.com", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:varat.thapa21@gmail.com", label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-edit flex flex-col gap-12 py-14 sm:py-16 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xs">
          <ScrollLink
            href="#top"
            aria-label="Back to top"
            className="inline-flex items-baseline gap-px font-display text-2xl tracking-tight text-foreground transition-colors duration-300 hover:text-clay"
          >
            VT<span className="text-clay">.</span>
          </ScrollLink>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Frontend developer & product engineer based in Kathmandu, Nepal —
            building interfaces that feel fast, accessible, and effortless.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-6" aria-label="Footer">
          {links.map((link) => (
            <ScrollLink
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-accent"
            >
              {link.label}
            </ScrollLink>
          ))}
          <button
            type="button"
            onClick={() => scrollToId("#top")}
            className="text-left text-sm text-muted-foreground transition-colors duration-300 hover:text-accent"
          >
            Back to top
          </button>
        </nav>

        <div className="flex items-center gap-2">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-edit flex flex-col items-center justify-between gap-2 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Varat Thapa. All rights reserved.</p>
          <p>Designed &amp; built in Kathmandu.</p>
        </div>
      </div>
    </footer>
  );
}