import { cn } from "@/lib/utils";

/** "Available for hire" indicator with a glowing pulse. */
export function StatusPill({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 items-center gap-2 rounded-full border border-border bg-surface/60 px-3 text-xs font-medium text-foreground backdrop-blur",
        className
      )}
    >
      <span aria-hidden className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-success/60" />
        <span className="relative inline-flex size-2 rounded-full bg-success shadow-[0_0_10px_hsl(var(--success))]" />
      </span>
      Available for hire
    </span>
  );
}
