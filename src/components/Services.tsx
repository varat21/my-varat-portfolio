import { Code2, Compass, Globe, PanelsTopLeft, type LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";
import { SectionHeader } from "@/components/SectionHeader";

const services: { index: string; title: string; description: string; Icon: LucideIcon }[] = [
  {
    index: "01",
    title: "Frontend development",
    description: "Modern, responsive web applications built with React and Next.js.",
    Icon: Code2,
  },
  {
    index: "02",
    title: "UI implementation",
    description: "Turning high-quality designs into polished, production-ready interfaces.",
    Icon: PanelsTopLeft,
  },
  {
    index: "03",
    title: "Product-focused development",
    description: "Building interfaces around real user needs and business goals, not just tickets.",
    Icon: Compass,
  },
  {
    index: "04",
    title: "Website development",
    description: "Fast, responsive, maintainable websites for organizations and businesses.",
    Icon: Globe,
  },
];

export function Services() {
  return (
    <section id="services" className="section border-t border-border">
      <div className="container-edit">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Services"
              title="What I do"
              description="Four ways I can help you ship better digital products."
              className="lg:sticky lg:top-24"
            />
          </div>

          <Stagger as="ul" className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {services.map((service) => (
              <StaggerItem as="li" key={service.title}>
                <GlowCard className="h-full" innerClassName="flex h-full flex-col gap-3 p-5">
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <service.Icon className="size-5" strokeWidth={1.5} aria-hidden />
                    </span>
                    <span className="num text-sm text-muted-foreground">{service.index}</span>
                  </div>
                  <h3 className="font-display text-h3 font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
