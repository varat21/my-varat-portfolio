import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "h-11 w-full rounded-lg border border-input bg-background px-4 text-base",
        "placeholder:text-muted-foreground transition-colors duration-200",
        "hover:border-foreground/40 focus-visible:border-accent",
        "aria-[invalid=true]:border-destructive disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
