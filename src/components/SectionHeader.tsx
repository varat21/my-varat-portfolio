import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  size = "md",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <span className="text-xs font-bold uppercase tracking-widest text-accent">
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-3 font-display tracking-tight text-balance",
          size === "lg"
            ? "text-4xl font-medium sm:text-5xl lg:text-6xl"
            : "text-3xl font-normal sm:text-4xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  );
}