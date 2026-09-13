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
import { useLenis } from "@/lib/useLenis";

function App() {
  useLenis();

  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={200}>
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
        <Toaster position="bottom-right" theme="system" />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
