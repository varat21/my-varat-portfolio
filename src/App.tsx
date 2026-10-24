import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useLenis } from "@/lib/useLenis";

function App() {
  useLenis();

  return (
    <ThemeProvider>
      {/* Load only the animation features we use (~15 KB less than the full motion bundle),
          and honour the OS "reduce motion" setting for every JS-driven animation. */}
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:inline-flex focus:h-11 focus:items-center focus:rounded-full focus:bg-foreground focus:px-5 focus:text-sm focus:font-medium focus:text-background"
            >
              Skip to content
            </a>
            <Background />
            <Navbar />
            <main id="main">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Services />
              <Contact />
            </main>
            <Footer />
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
          </>
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
}

export default App;
