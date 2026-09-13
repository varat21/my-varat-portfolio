import { Reveal } from "@/components/Reveal";

const services = [
  {
    index: "01",
    title: "Frontend development",
    description: "Modern, responsive web applications built with React and Next.js.",
  },
  {
    index: "02",
    title: "UI implementation",
    description: "Turning high-quality designs into polished, production-ready interfaces.",
  },
  {
    index: "03",
    title: "Product-focused development",
    description: "Building interfaces around real user needs and business goals, not just tickets.",
  },
  {
    index: "04",
    title: "Website development",
    description: "Fast, responsive, maintainable websites for organizations and businesses.",
  },
];

export function Services() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Services
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">What I do</h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-border border-t border-border">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={i * 0.06}>
                  <div className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-12 sm:gap-8">
                    <span className="num text-sm text-muted-foreground sm:col-span-1">
                      {service.index}
                    </span>
                    <h3 className="font-display text-xl sm:col-span-4">{service.title}</h3>
                    <p className="leading-relaxed text-muted-foreground sm:col-span-7">
                      {service.description}
                    </p>
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
