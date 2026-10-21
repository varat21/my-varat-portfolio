import Reveal from './Reveal.jsx';

/**
 * Consistent section heading: gradient eyebrow, display title, subtitle.
 * Spacing rhythm: mb-3 eyebrow → title → mb-3 subtitle → mb-10 to content.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <Reveal className={`mb-8 flex flex-col ${alignment}`} delay={0.05}>
      <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-300">
        {eyebrow}
      </span>
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
          {description}
        </p>
      )}
    </Reveal>
  );
}
