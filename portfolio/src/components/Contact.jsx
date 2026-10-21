import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Loader2, Send } from 'lucide-react';
import { contactInfo, profile } from '../data/portfolio.js';
import { getIcon } from '../lib/icons.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const inputClasses =
  'w-full rounded-xl border border-slate-300 bg-white/70 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-400';

/**
 * Contact: form (name / email / message) beside contact info cards.
 * The form is front-end only — wire `handleSubmit` to Formspree, EmailJS,
 * or your own API to deliver real messages.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate a network request — replace with your real endpoint.
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1400);
  };

  return (
    <section id="contact" className="scroll-mt-24 pt-6 pb-8 sm:pt-8 sm:pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project in mind, or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Form */}
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-5 shadow-sm shadow-slate-900/[0.03] dark:border-slate-800/70 dark:bg-slate-900/40">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, and goals…"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-teal-400 px-5 py-2.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.01] hover:shadow-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : status === 'sent' ? (
                    <>
                      <Check className="h-4 w-4" aria-hidden="true" />
                      Message sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status for screen readers + visible confirmation */}
                <div aria-live="polite" className="min-h-6">
                  <AnimatePresence>
                    {status === 'sent' && (
                      <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300"
                      >
                        <Check className="h-4 w-4" aria-hidden="true" />
                        Thanks! I&apos;ll get back to you within 24 hours.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </Reveal>

          {/* Info cards */}
          <div className="flex flex-col gap-3">
            {contactInfo.map((info, i) => {
              const Icon = getIcon(info.icon);
              const Wrapper = info.href ? 'a' : 'div';
              const wrapperProps = info.href ? { href: info.href } : {};

              return (
                <Reveal key={info.label} delay={0.1 + i * 0.08}>
                  <Wrapper
                    {...wrapperProps}
                    className="group flex w-full items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/60 p-4 text-left shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300/70 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-slate-800/70 dark:bg-slate-900/40 dark:hover:border-indigo-500/40"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400 text-white shadow-md shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-500 dark:text-slate-400">
                        {info.label}
                      </span>
                      <span className="mt-0.5 block truncate text-base font-bold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
                        {info.value}
                      </span>
                      <span className="mt-1 block text-sm text-slate-500 dark:text-slate-500">
                        {info.description}
                      </span>
                    </span>
                  </Wrapper>
                </Reveal>
              );
            })}

            {/* Availability note */}
            <Reveal
              delay={0.4}
              className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-teal-400/10 p-4"
            >
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white">{profile.name}</span> is currently
                {profile.availableForWork ? ' available for new opportunities' : ' not taking on new work'} —
                reach out at{' '}
                <a
                  href={`mailto:${profile.email}`}
                  className="font-semibold text-indigo-600 underline decoration-indigo-500/40 underline-offset-4 transition-colors hover:text-indigo-500 dark:text-indigo-300"
                >
                  {profile.email}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
