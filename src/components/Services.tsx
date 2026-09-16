import { ArrowUpRight, Code2, PanelsTopLeft, Compass, Globe, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
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
    <section id="services" className="py-24 sm:py-32">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Services"
              title="What I do"
              description="Four ways I can help you ship better digital products."
            />
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-border border-t border-border">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={i * 0.06}>
                  <div className="group grid grid-cols-1 gap-3 py-8 transition-colors duration-300 hover:bg-muted/40 sm:grid-cols-12 sm:gap-6 sm:rounded-xl sm:px-4">
                    <span className="num text-sm text-muted-foreground sm:col-span-1 sm:pt-1">
                      {service.index}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent sm:col-span-1">
                      <service.Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="font-display text-xl transition-colors duration-300 group-hover:text-accent sm:col-span-3">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground sm:col-span-6">
                      {service.description}
                    </p>
                    <ArrowUpRight
                      className="hidden h-5 w-5 text-accent opacity-0 transition-all duration-300 ease-signature group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:col-span-1 sm:block sm:justify-self-end"
                      strokeWidth={1.5}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}