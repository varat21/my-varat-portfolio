import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type HTMLAttributes,
} from "react";
import {
  Close as DialogClose,
  Content,
  Description,
  Overlay,
  Portal,
  Root as Dialog,
  Title,
  Trigger as DialogTrigger,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const DialogPortal = Portal;

const DialogOverlay = forwardRef<
  ElementRef<typeof Overlay>,
  ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-background/70 backdrop-blur-sm",
      "data-[state=open]:animate-in data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = Overlay.displayName;

const DialogContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <Content
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2",
        "max-h-[88vh] overflow-y-auto bg-background border border-border rounded-2xl p-8 sm:p-12",
        "shadow-[0_25px_80px_-15px_rgba(0,0,0,0.4)] focus:outline-none",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        className
      )}
      {...props}
    >
      {children}
      <DialogClose className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-clay hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/60">
        <X className="h-4 w-4" strokeWidth={1.5} />
        <span className="sr-only">Close</span>
      </DialogClose>
    </Content>
  </DialogPortal>
));
DialogContent.displayName = Content.displayName;

const DialogHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mb-6 flex flex-col gap-1.5", className)} {...props} />
);

const DialogTitle = forwardRef<
  ElementRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={cn("font-display text-3xl sm:text-4xl font-normal leading-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = Title.displayName;

const DialogDescription = forwardRef<
  ElementRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn("text-muted-foreground leading-relaxed", className)}
    {...props}
  />
));
DialogDescription.displayName = Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
