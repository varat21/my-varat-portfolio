import { lazy, Suspense } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useLenis } from "@/lib/useLenis";

const About = lazy(() =>
  import("@/components/About").then((module) => ({ default: module.About }))
);
const Skills = lazy(() =>
  import("@/components/Skills").then((module) => ({ default: module.Skills }))
);
const Experience = lazy(() =>
  import("@/components/Experience").then((module) => ({ default: module.Experience }))
);
const Projects = lazy(() =>
  import("@/components/Projects").then((module) => ({ default: module.Projects }))
);
const Services = lazy(() =>
  import("@/components/Services").then((module) => ({ default: module.Services }))
);
const Contact = lazy(() =>
  import("@/components/Contact").then((module) => ({ default: module.Contact }))
);
const Footer = lazy(() =>
  import("@/components/Footer").then((module) => ({ default: module.Footer }))
);

function SectionFallback({ minHeight }: { minHeight: number }) {
  return <div aria-hidden className="w-full" style={{ minHeight }} />;
}

function App() {
  useLenis();

  return (
    <ThemeProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-foreground focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-background"
      >
        Skip to content
      </a>
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <Suspense fallback={<SectionFallback minHeight={420} />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight={560} />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight={880} />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight={960} />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight={560} />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight={640} />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback minHeight={320} />}>
        <Footer />
      </Suspense>
      <ScrollToTop />
      <Toaster
        position="bottom-right"
        theme="system"
        toastOptions={{
          style: {
            borderRadius: "12px",
            border: "1px solid hsl(var(--border))",
            background: "hsl(var(--surface))",
            color: "hsl(var(--foreground))",
          },
        }}
      />
    </ThemeProvider>
  );
}

export default App;
