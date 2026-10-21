import * as React from "react";
import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full resize-none border-0 border-b border-border bg-transparent py-3 text-base",
          "placeholder:text-muted-foreground focus-visible:border-clay focus-visible:outline-none",
          "aria-invalid:border-clay transition-colors duration-300 ease-signature disabled:opacity-40",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };