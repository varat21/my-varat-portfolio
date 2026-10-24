import { ArrowUp } from "lucide-react";
import { scrollToId } from "@/lib/scrollTo";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-edit flex flex-col gap-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Designed &amp; built in Kathmandu.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <span
            className="inline-flex h-8 items-center gap-2 rounded-full border border-border bg-surface px-3 text-xs font-medium text-foreground"
            title="Version and build date of this deployment"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-success shadow-[0_0_8px_hsl(var(--success))]" />
            <span>
              v{__APP_VERSION__} · built <time dateTime={__BUILD_DATE__}>{__BUILD_DATE__}</time>
            </span>
          </span>

          <button
            type="button"
            onClick={() => scrollToId("#top")}
            className="group inline-flex h-10 items-center gap-2 rounded-full border border-border bg-surface px-4 font-medium text-foreground transition-[border-color,color,transform] duration-200 hover:scale-[1.02] hover:border-accent hover:text-accent active:scale-[0.98]"
          >
            Back to top
            <ArrowUp
              className="size-4 transition-transform duration-200 ease-signature group-hover:-translate-y-0.5"
              strokeWidth={1.75}
              aria-hidden
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
