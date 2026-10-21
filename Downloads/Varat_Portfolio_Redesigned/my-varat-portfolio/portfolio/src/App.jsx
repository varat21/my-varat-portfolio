import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

/**
 * Single-page portfolio. Sections are declared in visual order and every
 * one carries an `id` matching the navbar links for smooth scrolling.
 */
export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <a href="#about" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
