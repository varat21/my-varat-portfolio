import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";
import { Root } from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

const Label = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
Label.displayName = Root.displayName;

export { Label };
