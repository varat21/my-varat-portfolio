import { Reveal } from "@/components/Reveal";

const facts = [
  { label: "Experience", value: "1.5+ years" },
  { label: "Focus", value: "React / Next.js" },
  { label: "Approach", value: "Product thinking" },
  { label: "Craft", value: "Clean architecture" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                About
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">About me</h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-balance font-display text-2xl leading-snug sm:text-3xl">
                A frontend developer and product-minded engineer who enjoys
                transforming ideas into polished digital products — the kind that
                hold up under real use, not just in a demo.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
                I care as much about how an interface behaves — its loading states,
                its edge cases, its keyboard flow — as I do about how it first looks.
                Most of my work sits at that intersection: close enough to design to
                argue for it, close enough to engineering to build it properly.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-10 sm:grid-cols-4">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                    <dd className="mt-2 font-display text-xl">{fact.value}</dd>
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
