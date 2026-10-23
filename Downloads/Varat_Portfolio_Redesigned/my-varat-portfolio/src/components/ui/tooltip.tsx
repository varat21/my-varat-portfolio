import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";
import {
  Content,
  Provider,
  Root,
  Trigger,
} from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const TooltipProvider = Provider;
const Tooltip = Root;
const TooltipTrigger = Trigger;

const TooltipContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 8, ...props }, ref) => (
  <Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-sm border border-border bg-foreground px-3 py-1.5 text-xs text-background",
      "animate-fade-in",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
