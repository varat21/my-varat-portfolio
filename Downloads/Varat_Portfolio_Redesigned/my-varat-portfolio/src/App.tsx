import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useLenis } from "@/lib/useLenis";

function App() {
  useLenis();

  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={200}>
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
          <About />
          <Skills />
          <Experience />
          <Projects />
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
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;