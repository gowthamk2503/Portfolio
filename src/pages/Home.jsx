import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Gowtham K — Full Stack Developer & Software Engineer</title>
        <meta
          name="description"
          content="Gowtham K is a Full Stack Developer specializing in scalable web systems, distributed architectures, MERN stack, and Python. B.Tech IT student at Sri Eshwar College of Engineering."
        />
        <meta
          name="keywords"
          content="Gowtham K, Full Stack Developer, Software Engineer, MERN Stack, React, Node.js, Python, Data Engineering, Portfolio"
        />
        <meta property="og:title" content="Gowtham K — Full Stack Developer & Software Engineer" />
        <meta
          property="og:description"
          content="BUILD THOUGHTFULLY. DESIGN BEAUTIFULLY. ENGINEER IMPACT."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://gowthamk.vercel.app" />
      </Helmet>

      {/* Completely New Creative Editorial Layout - No fixed left sidebar */}
      <div className="min-h-screen bg-ivory dark:bg-dark-bg text-charcoal dark:text-dark-text selection:bg-soft-lime selection:text-charcoal relative">
        <Navbar />

        <main className="w-full overflow-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
