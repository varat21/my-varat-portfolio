import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function SectionDots() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: '-10% 0px -30% 0px' },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="group relative flex items-center justify-center w-8 h-8"
          aria-label={`Go to ${label} section`}
          aria-current={activeSection === id ? 'true' : undefined}
        >
          <span
            className={cn(
              'absolute right-10 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em]',
              'bg-card/90 backdrop-blur border border-border text-foreground',
              'px-2.5 py-1 rounded-md shadow-lg',
              'opacity-0 pointer-events-none translate-x-2 transition-all duration-200 ease-out',
              'group-hover:opacity-100 group-hover:translate-x-0',
              activeSection === id && 'opacity-100 translate-x-0',
            )}
          >
            {label}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              'relative block rounded-full transition-all duration-300 ease-out',
              activeSection === id
                ? 'w-2.5 h-2.5 bg-gradient-to-br from-accent to-fuchsia-500 scale-100 shadow-[0_0_0_3px_hsl(var(--accent)/0.2)]'
                : 'w-2 h-2 bg-muted-foreground/40 hover:bg-foreground/60 hover:scale-110',
            )}
          />
        </button>
      ))}
    </nav>
  );
}
