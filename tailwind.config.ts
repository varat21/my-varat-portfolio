import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

/**
 * Design tokens live in two places:
 *  - Colour / section rhythm  -> CSS custom properties in src/index.css
 *  - Type scale / radii / fonts -> here
 * Spacing uses Tailwind's default 4px scale. Only the multiples below are
 * used in components: 1 (4) 2 (8) 3 (12) 4 (16) 5 (20) 6 (24) 8 (32) 10 (40) 12 (48) 16 (64).
 * Two semantic tokens (`section`, `gutter`) adapt per breakpoint.
 */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: "hsl(var(--success))",
        destructive: "hsl(var(--destructive))",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans Variable'", "'Inter Variable'", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["'Inter Variable'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid headings, fixed body steps.
        display: [
          "clamp(2.5rem, 1.5rem + 4vw, 4.25rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em" },
        ],
        h2: [
          "clamp(1.75rem, 1.25rem + 2vw, 2.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        h3: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.01em" }],
        lead: ["1.125rem", { lineHeight: "1.75rem" }],
      },
      spacing: {
        section: "var(--section-y)",
        gutter: "var(--gutter)",
      },
      maxWidth: {
        content: "75rem", // 1200px
        prose: "40rem",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "10px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        glow: "0 0 0 1px hsl(var(--accent) / 0.35), 0 8px 32px -8px hsl(var(--accent) / 0.35)",
        card: "0 1px 0 0 hsl(var(--foreground) / 0.04) inset, 0 12px 32px -16px hsl(0 0% 0% / 0.5)",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(.22,1,.36,1)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
