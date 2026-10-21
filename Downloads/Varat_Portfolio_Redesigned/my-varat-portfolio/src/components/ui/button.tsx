import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[0.9rem] font-medium transition-all duration-300 ease-signature disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-background px-6 py-3 hover:bg-clay hover:text-accent-foreground",
        outline:
          "border border-border bg-transparent px-6 py-3 text-foreground hover:border-clay hover:text-clay",
        ghost: "text-foreground/80 hover:text-clay px-1 py-1 underline-offset-4",
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