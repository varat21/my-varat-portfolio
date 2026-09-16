import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/Reveal";

const EMAIL = "varat.thapa21@gmail.com";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const socials = [
  { href: "https://github.com", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  // NOTE: this is a frontend-only form. Wire this handler to Formspree, EmailJS,
  // Resend, or a custom API endpoint to actually deliver messages.
  const onSubmit = async (data: ContactForm) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      console.log("Contact form submitted:", data);
      toast.success("Message ready to send — connect a form backend to deliver it.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="rule py-24 sm:py-32">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-8 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
                Open to work &amp; freelance
              </span>
            </div>

            <Reveal>
              <h2 className="text-balance font-display text-4xl sm:text-5xl">
                Have an idea?
                <br />
                Let&rsquo;s build it.
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
                Open to frontend roles and freelance product work. If it&rsquo;s a good
                fit, I usually reply within a day.
              </p>

              <a
                href={`mailto:${EMAIL}`}
                className="mt-8 inline-flex items-center gap-2 font-display text-xl transition-colors duration-300 hover:text-clay"
              >
                <Mail className="h-5 w-5" strokeWidth={1.5} />
                {EMAIL}
              </a>

              <div className="mt-8 flex items-center gap-2">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    aria-invalid={errors.name ? true : undefined}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-clay" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    aria-invalid={errors.email ? true : undefined}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-clay" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about the project…"
                    aria-invalid={errors.message ? true : undefined}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-clay" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : "Send message"}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}