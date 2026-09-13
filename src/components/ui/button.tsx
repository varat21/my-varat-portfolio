import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[0.9rem] font-medium transition-colors duration-300 ease-signature disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none",
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-background hover:bg-clay hover:text-accent-foreground rounded-sm px-6 py-3",
        outline:
          "border border-border text-foreground hover:border-clay hover:text-clay rounded-sm px-6 py-3",
        ghost:
          "text-foreground/80 hover:text-clay px-1 py-1 underline-offset-4",
        link: "text-foreground px-0 py-0",
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
