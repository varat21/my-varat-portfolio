import { forwardRef, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";
import { scrollToId } from "@/lib/scrollTo";

interface ScrollLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  onNavigate?: () => void;
}

export const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  function ScrollLink({ href, children, onNavigate, onClick, ...props }, ref) {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (href.startsWith("#")) {
        e.preventDefault();
        scrollToId(href);
        onNavigate?.();
      }
    };

    return (
      <a ref={ref} href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }
);