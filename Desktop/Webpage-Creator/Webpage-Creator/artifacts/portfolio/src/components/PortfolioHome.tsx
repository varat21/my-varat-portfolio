'use client';

import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { NoiseOverlay } from '@/components/layout/NoiseOverlay';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Testimonials } from '@/sections/Testimonials';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { SectionDots } from '@/components/layout/SectionDots';

export function PortfolioHome() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <NoiseOverlay />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <SectionDots />
    </SmoothScroll>
  );
}
