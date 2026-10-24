import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { AlertCircle, ArrowUpRight, CheckCircle2, Check, Copy, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";
import { useCopy } from "@/hooks/useCopy";
import { site, socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;
type Outcome = { kind: "success" | "error"; text: string } | null;

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

/**
 * Delivery strategy:
 *  - If VITE_CONTACT_ENDPOINT is set (Formspree-compatible JSON endpoint), POST to it.
 *  - Otherwise open the visitor's email client with the message pre-filled.
 */
async function deliver(data: ContactForm): Promise<"sent" | "mailto"> {
  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`);
    return "sent";
  }
  const subject = encodeURIComponent(`Portfolio enquiry from ${data.name}`);
  const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  return "mailto";
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-sm text-destructive">
      {message}
    </p>
  );
}

function CopyRow({ label, value, href, Icon }: { label: string; value: string; href: string; Icon: (typeof socialLinks)[number]["Icon"] }) {
  const { copied, copy } = useCopy();
  const done = copied === value;
  const external = href.startsWith("http");
  return (
    <li className="flex items-center gap-2 rounded-lg border border-border bg-surface p-1.5 pl-3 transition-colors duration-200 hover:border-input">
      <Icon className="size-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden />
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="link-underline min-w-0 flex-1 truncate py-2.5 text-sm font-medium hover:text-accent"
      >
        <span className="text-muted-foreground">{label}</span>
        <span className="mx-2 text-border" aria-hidden>
          /
        </span>
        {value.replace(/^https?:\/\/(www\.)?/, "").replace(/^mailto:/, "")}
      </a>
      <button
        type="button"
        onClick={() => copy(value, `${label} copied`)}
        aria-label={done ? `${label} copied` : `Copy ${label}`}
        className="flex size-10 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-[color,background-color,transform] duration-200 hover:bg-muted hover:text-foreground active:scale-95"
      >
        {done ? (
          <Check className="size-4 text-success" strokeWidth={2} aria-hidden />
        ) : (
          <Copy className="size-4" strokeWidth={1.5} aria-hidden />
        )}
      </button>
    </li>
  );
}

export function Contact() {
  const [outcome, setOutcome] = useState<Outcome>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    setOutcome(null);
    try {
      const result = await deliver(data);
      const text =
        result === "sent"
          ? "Message sent — I'll reply within a day."
          : "Your email app should open with the message ready to send.";
      setOutcome({ kind: "success", text });
      toast.success(result === "sent" ? "Message sent" : "Opening your email app…");
      reset();
    } catch {
      const text = `Something went wrong. You can email me directly at ${site.email}.`;
      setOutcome({ kind: "error", text });
      toast.error("Message failed to send");
    }
  };

  return (
    <section id="contact" className="section border-t border-border">
      <div className="container-edit">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="flex min-w-0 flex-col items-start gap-6 lg:col-span-5">
            <Badge variant="success" className="h-8 gap-2 px-3">
              <span aria-hidden className="size-1.5 animate-pulse rounded-full bg-current" />
              Open to work &amp; freelance
            </Badge>

            <div className="flex flex-col gap-3">
              <h2 className="text-balance font-display text-h2 font-semibold">
                Have an idea? Let&rsquo;s build it.
              </h2>
              <p className="max-w-sm text-muted-foreground">
                Open to frontend roles and freelance product work. If it&rsquo;s a good fit,
                I usually reply within a day.
              </p>
            </div>

            <ul className="flex w-full max-w-md flex-col gap-2" aria-label="Contact links">
              {socialLinks.map(({ label, href, Icon }) => (
                <CopyRow
                  key={label}
                  label={label}
                  Icon={Icon}
                  href={href}
                  value={label === "Email" ? site.email : href}
                />
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05} className="min-w-0 lg:col-span-7">
            <GlowCard innerClassName="p-5 sm:p-6">
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    autoComplete="name"
                    placeholder="Your name"
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                  />
                  <FieldError id="name-error" message={errors.name?.message} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                  />
                  <FieldError id="email-error" message={errors.email?.message} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about the project…"
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    {...register("message")}
                  />
                  <FieldError id="message-error" message={errors.message?.message} />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" aria-hidden />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden />
                      </>
                    )}
                  </Button>

                  {/* Live region: always mounted so screen readers announce the outcome. */}
                  <p
                    role="status"
                    aria-live="polite"
                    className={cn(
                      "flex items-start gap-2 text-sm",
                      outcome?.kind === "success" && "text-success",
                      outcome?.kind === "error" && "text-destructive"
                    )}
                  >
                    {outcome?.kind === "success" && (
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden />
                    )}
                    {outcome?.kind === "error" && (
                      <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
                    )}
                    {outcome?.text}
                  </p>
                </div>
              </form>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
