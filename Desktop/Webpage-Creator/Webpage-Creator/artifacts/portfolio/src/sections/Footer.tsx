import { navLinks, socialLinks, siteConfig } from "@/data/portfolio";
import { Linkedin, Github, Twitter, Mail, MapPin } from "lucide-react";

const socialIconMap: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  email: Mail,
};

export function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-background/60 backdrop-blur-sm py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-1">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#hero");
              }}
              className="font-display text-2xl font-semibold inline-block mb-4"
              aria-label="Varat Thapa - Home"
            >
              Varat Thapa<span className="gradient-text-accent">.</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Frontend Developer &amp; Product Engineer. Crafting premium digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-5">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.href);
                      }}
                      className="block text-sm text-muted-foreground hover:text-foreground py-1 transition-colors duration-200"
                      aria-label={`Navigate to ${link.label} section`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-5">
              Connect
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon] || Mail;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="rounded-lg border border-border w-10 h-10 flex items-center justify-center hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 text-muted-foreground hover:text-foreground"
                    aria-label={link.name}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 text-muted-foreground shrink-0"
                />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label="Send email"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 text-muted-foreground shrink-0"
                />
                <span className="text-sm text-muted-foreground">
                  {siteConfig.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2026 Varat Thapa. All rights reserved.</p>
          <p>Crafted with React, Tailwind &amp; obsession for detail.</p>
        </div>
      </div>
    </footer>
  );
}
