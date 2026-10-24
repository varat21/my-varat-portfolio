import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const facts = [
  { label: "Experience", value: "1.5+ years" },
  { label: "Focus", value: "React / Next.js" },
  { label: "Approach", value: "Product thinking" },
  { label: "Craft", value: "Clean architecture" },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-edit">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="About"
              title="About me"
              description="A quick look at who I am and how I work."
              className="lg:sticky lg:top-24"
            />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-8">
            <Reveal>
              <p className="text-balance font-display text-2xl leading-snug sm:text-3xl">
                A frontend developer and product-minded engineer who enjoys transforming
                ideas into <span className="text-accent">polished digital products</span> —
                the kind that hold up under real use, not just in a demo.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="max-w-prose text-muted-foreground">
                I care as much about how an interface behaves — its loading states, its
                edge cases, its keyboard flow — as I do about how it first looks. Most of
                my work sits at that intersection: close enough to design to argue for it,
                close enough to engineering to build it properly.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-6 sm:grid-cols-4">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-1">
                    <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                    <dd className="font-display text-lg font-medium">{fact.value}</dd>
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
