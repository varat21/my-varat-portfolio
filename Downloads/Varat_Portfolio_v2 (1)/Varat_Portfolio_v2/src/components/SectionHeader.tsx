import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("flex flex-col gap-3", className)}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-balance font-display text-h2 font-medium">{title}</h2>
      {description && (
        <p className="max-w-sm text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}
