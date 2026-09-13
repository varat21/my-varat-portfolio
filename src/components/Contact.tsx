import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/Reveal";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

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
            <Reveal>
              <h2 className="text-balance font-display text-4xl sm:text-5xl">
                Have an idea?
                <br />
                Let&rsquo;s build it.
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
                Open to frontend roles and freelance product work. If it's a good
                fit, I usually reply within a day.
              </p>
              <a
                href="mailto:hello@varatthapa.dev"
                className="mt-8 inline-flex items-center gap-2 font-display text-xl hover:text-clay transition-colors duration-300"
              >
                <Mail className="h-5 w-5" strokeWidth={1.5} />
                hello@varatthapa.dev
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" {...register("name")} />
                  {errors.name && (
                    <p className="mt-2 text-sm text-clay">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-clay">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about the project…"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-clay">{errors.message.message}</p>
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
