import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

/** Copy text to the clipboard with a legacy fallback, visual feedback state and a toast. */
export function useCopy(resetMs = 1800) {
  const [copied, setCopied] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text: string, label = "Copied to clipboard") => {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const el = document.createElement("textarea");
          el.value = text;
          el.setAttribute("readonly", "");
          el.style.position = "fixed";
          el.style.opacity = "0";
          document.body.appendChild(el);
          el.select();
          const ok = document.execCommand("copy");
          document.body.removeChild(el);
          if (!ok) throw new Error("execCommand failed");
        }
        setCopied(text);
        toast.success(label);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(null), resetMs);
      } catch {
        toast.error("Couldn't copy. Please copy it manually.");
      }
    },
    [resetMs]
  );

  return { copied, copy };
}
