import * as React from "react";
import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-32 w-full resize-y rounded-lg border border-input bg-background px-4 py-3 text-base",
        "placeholder:text-muted-foreground transition-colors duration-200",
        "hover:border-foreground/40 focus-visible:border-accent",
        "aria-[invalid=true]:border-destructive disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
