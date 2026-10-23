import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";
import {
  Close as SheetClose,
  Content,
  Overlay,
  Portal,
  Root as Sheet,
  Trigger as SheetTrigger,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const SheetPortal = Portal;

const SheetOverlay = forwardRef<
  ElementRef<typeof Overlay>,
  ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-background/90 backdrop-blur-sm", className)}
    {...props}
  />
));
SheetOverlay.displayName = Overlay.displayName;

const SheetContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <Content
      ref={ref}
      className={cn(
        "fixed inset-y-0 right-0 z-50 h-full w-full sm:w-[420px] bg-background border-l border-border",
        "p-8 focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
      <SheetClose className="absolute right-6 top-6 text-muted-foreground hover:text-clay transition-colors duration-300 focus-visible:outline-none">
        <X className="h-5 w-5" strokeWidth={1.5} />
        <span className="sr-only">Close menu</span>
      </SheetClose>
    </Content>
  </SheetPortal>
));
SheetContent.displayName = Content.displayName;

export { Sheet, SheetTrigger, SheetContent, SheetClose };
