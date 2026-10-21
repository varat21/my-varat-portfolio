import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const facts = [
  { label: "Experience", value: "1.5+ years" },
  { label: "Focus", value: "React / TypeScript" },
  { label: "Approach", value: "Product thinking" },
  { label: "Craft", value: "Accessible UI" },
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="About"
              title="About me"
              description="A focused look at who I am and how I work."
            />
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-balance font-display text-2xl leading-snug sm:text-3xl">
                A frontend developer and product-minded engineer who enjoys
                transforming ideas into{" "}
                <span className="italic text-clay">polished digital products</span> — the
                kind that hold up under real use, not just in a demo.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                I care as much about how an interface behaves — its loading states,
                its edge cases, its keyboard flow — as I do about how it first looks.
                Most of my work sits at that intersection: close enough to design to
                argue for it, close enough to engineering to build it properly.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-4 sm:gap-x-8">
                {facts.map((fact) => (
                  <div key={fact.label} className="group">
                    <dt className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-clay">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 font-display text-lg sm:text-xl">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}