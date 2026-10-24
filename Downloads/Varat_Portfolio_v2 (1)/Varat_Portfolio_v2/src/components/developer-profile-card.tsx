import type { ReactNode } from "react";
import { m, type Variants } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const codeContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.075, delayChildren: 0.18 },
  },
};

const codeLine: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: EASE },
  },
};

const footer: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.5, ease: EASE },
  },
};

const badge: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, delay: 0.68, ease: EASE },
  },
};

function PropertyName({ children }: { children: ReactNode }) {
  return <span className="text-[#9AA8BE]">{children}</span>;
}

function Punctuation({ children }: { children: ReactNode }) {
  return <span className="text-[#CBD5E1]">{children}</span>;
}

function StringValue({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="text-[#B8B8FF]">&apos;</span>
      <span className="text-[#7BE4B6]">{children}</span>
      <span className="text-[#B8B8FF]">&apos;</span>
    </>
  );
}

export function DeveloperProfileCard() {
  return (
    <m.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      whileHover={{ y: -4 }}
      aria-label="Varat Thapa developer profile"
      className="relative w-full max-w-[648px] rounded-[24px] border border-[#273247] bg-[#0F1524] p-5 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.9)] sm:p-7 md:p-8"
    >
      <header className="flex items-center justify-between gap-4 border-b border-[#273247] pb-4">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="size-3 rounded-full bg-[#FF5F57] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.25)]" />
          <span className="size-3 rounded-full bg-[#FEBC2E] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.25)]" />
          <span className="size-3 rounded-full bg-[#28C840] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.25)]" />
        </div>
        <span className="truncate font-mono text-[11px] tracking-wide text-[#7F8CA3] sm:text-xs">
          varat-profile.tsx
        </span>
      </header>

      <m.pre
        variants={codeContainer}
        initial="hidden"
        animate="visible"
        aria-label="Developer profile code"
        className="mt-5 overflow-hidden font-mono text-[12.5px] leading-6 text-[#E5EAF2] sm:mt-6 sm:text-[13.5px] sm:leading-7"
      >
        <code className="block whitespace-pre-wrap break-words [overflow-wrap:anywhere]">
          <m.span
            variants={codeLine}
            className="block whitespace-pre-wrap break-words"
          >
            <span className="inline-block w-full rounded-md bg-[#49B8D3] px-2.5 py-0.5 text-white">
              const developer = {"{"}
            </span>
          </m.span>

          <m.span
            variants={codeLine}
            className="block whitespace-pre-wrap break-words"
          >
            <span className="inline-block w-full rounded-md bg-[#49B8D3] px-2.5 py-0.5 text-white">
              {"  "}name: &apos;Varat Thapa&apos;,
            </span>
          </m.span>

          <m.span
            variants={codeLine}
            className="block whitespace-pre-wrap break-words"
          >
            {"  "}
            <PropertyName>role</PropertyName>
            <Punctuation>: </Punctuation>
            <StringValue>Software Developer &amp; IT Strategist</StringValue>
            <Punctuation>,</Punctuation>
          </m.span>

          <m.span
            variants={codeLine}
            className="block whitespace-pre-wrap break-words"
          >
            {"  "}
            <PropertyName>techStack</PropertyName>
            <Punctuation>: [</Punctuation>
            <StringValue>React</StringValue>
            <Punctuation>, </Punctuation>
            <StringValue>Next.js</StringValue>
            <Punctuation>, </Punctuation>
            <StringValue>Tailwind</StringValue>
            <Punctuation>, </Punctuation>
            <StringValue>Python</StringValue>
            <Punctuation>],</Punctuation>
          </m.span>

          <m.span
            variants={codeLine}
            className="block whitespace-pre-wrap break-words"
          >
            {"  "}
            <PropertyName>focus</PropertyName>
            <Punctuation>: </Punctuation>
            <StringValue>Modern Web Apps &amp; Enterprise Scalability</StringValue>
            <Punctuation>,</Punctuation>
          </m.span>

          <m.span
            variants={codeLine}
            className="block whitespace-pre-wrap break-words"
          >
            {"  "}
            <PropertyName>rating</PropertyName>
            <Punctuation>: </Punctuation>
            <span className="text-[#FFD34E]">9.8</span>
          </m.span>

          <m.span variants={codeLine} className="block text-[#CBD5E1]">
            {"}"}
            <span className="text-[#CBD5E1]">;</span>
          </m.span>
        </code>
      </m.pre>

      <m.footer
        variants={footer}
        initial="hidden"
        animate="visible"
        className="mt-6 flex flex-col gap-3 border-t border-[#273247] pt-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-2 text-sm text-[#9AA8BE]">
          <ShieldCheck
            className="size-4 shrink-0 text-[#4ADE80]"
            strokeWidth={2}
            aria-hidden="true"
          />
          <span>Verified Tech Stack</span>
        </div>

        <m.span
          variants={badge}
          className="inline-flex w-fit items-center rounded-full border border-[#49B8D3]/60 bg-[#49B8D3]/10 px-3 py-1 font-mono text-[11px] tracking-wide text-[#7ED8EE]"
        >
          Next.js 14 + Tailwind
        </m.span>
      </m.footer>
    </m.article>
  );
}

