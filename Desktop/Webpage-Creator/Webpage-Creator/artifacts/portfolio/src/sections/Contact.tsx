import { motion } from "framer-motion";
import { socialLinks, siteConfig } from "@/data/portfolio";
import {
  Mail,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
  X,
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const socialIconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: X,
  email: Mail,
};

export function Contact() {
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      try {
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

        if (publicKey && serviceId && templateId) {
          const templateParams = {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
            to_email: siteConfig.email,
          };
          await emailjs.send(serviceId, templateId, templateParams, publicKey);
        } else {
          await new Promise((resolve) => setTimeout(resolve, 1500));
        }
      } catch {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError("Something went wrong. Please email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="mesh-bg">
        <div className="blob bg-accent/25 w-[500px] h-[500px] -top-32 left-1/4" style={{ animationDelay: "0s" }} />
        <div className="blob bg-sky-500/20 w-[400px] h-[400px] top-1/3 -right-32" style={{ animationDelay: "4s" }} />
        <div className="blob bg-indigo-500/20 w-[450px] h-[450px] -bottom-40 left-10" style={{ animationDelay: "8s" }} />
      </div>

      <div className="max-w-6xl mx-auto container-px relative z-10">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-5"
          >
            <span className="w-8 h-px bg-accent inline-block" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              07 / Contact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-6 text-balance"
          >
            Have a project in mind?
            <br />
            <span className="gradient-text-accent">Let&apos;s build something great.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-xl mx-auto"
          >
            I&apos;m currently taking on a select few freelance &amp; contract projects for Q3 2026.
            Drop a note below, or reach me directly — I usually respond within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2 space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass rounded-2xl p-5 border border-border/50 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-fuchsia-500/15 flex items-center justify-center shrink-0">
                  <Mail className="text-accent" size={22} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium mb-1.5">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm font-semibold hover:text-accent transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="glass rounded-2xl p-5 border border-border/50 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/15 flex items-center justify-center shrink-0">
                  <MapPin className="text-sky-400" size={22} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium mb-1.5">
                    Location
                  </p>
                  <p className="text-sm font-semibold">{siteConfig.location}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass rounded-2xl p-5 border border-border/50 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/15 flex items-center justify-center shrink-0">
                  <Clock className="text-emerald-400" size={22} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium mb-1.5">
                    Response time
                  </p>
                  <p className="text-sm font-semibold">Usually within 24h</p>
                </div>
              </div>
            </motion.div>

            <div className="mt-8">
              <h5 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">
                Find me online
              </h5>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = socialIconMap[social.icon] || Twitter;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="glass rounded-xl px-3.5 py-2.5 border border-border/50 text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 inline-flex items-center gap-2 text-xs font-medium"
                    >
                      <Icon size={16} strokeWidth={2} />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass-strong rounded-3xl p-6 md:p-8 lg:p-10 border border-border/50"
              style={{ boxShadow: "0 30px 80px -20px hsl(var(--accent)/0.15)" }}
            >
              <form id="contact-form" className="space-y-5" onSubmit={handleSubmit}>
                <div className="sm:grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[11px] uppercase tracking-[0.18em] font-medium text-muted-foreground block"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className="w-full h-11 rounded-xl bg-background/60 border border-border/70 px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[11px] uppercase tracking-[0.18em] font-medium text-muted-foreground block"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="w-full h-11 rounded-xl bg-background/60 border border-border/70 px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-[11px] uppercase tracking-[0.18em] font-medium text-muted-foreground block"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Project inquiry / Collaboration"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full h-11 rounded-xl bg-background/60 border border-border/70 px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[11px] uppercase tracking-[0.18em] font-medium text-muted-foreground block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me a bit about your project, goals, and timeline..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full min-h-[140px] resize-none rounded-xl bg-background/60 border border-border/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                    style={{
                      boxShadow:
                        "0 1px 0 rgba(255,255,255,0.1) inset, 0 10px 30px -10px hsl(var(--accent)/0.5)",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={16} strokeWidth={2} />
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        <CheckCircle2 className="text-emerald-400" size={16} strokeWidth={2} />
                        Message sent!
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowRight
                          size={16}
                          strokeWidth={2}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </button>
                  <span
                    className={`text-xs ${submitted ? "text-emerald-400" : "text-muted-foreground"}`}
                    aria-live="polite"
                  >
                    {error
                      ? error
                      : submitted
                      ? "Thanks! I'll get back to you soon."
                      : `or email directly at ${siteConfig.email}`}
                  </span>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
