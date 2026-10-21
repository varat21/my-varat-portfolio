import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "w-full border-0 border-b border-border bg-transparent py-3 text-base",
          "placeholder:text-muted-foreground focus-visible:border-clay focus-visible:outline-none",
          "aria-invalid:border-clay transition-colors duration-300 ease-signature disabled:opacity-40",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };