import { forwardRef, type AnchorHTMLAttributes, type MouseEvent } from "react";
import { scrollToId } from "@/lib/scrollTo";

interface ScrollLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  onNavigate?: () => void;
}

export const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  function ScrollLink({ href, children, onNavigate, onClick, ...props }, ref) {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;
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
