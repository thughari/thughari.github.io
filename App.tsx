import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import GitHubStats from './components/GitHubStats.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import OpenSource from './components/OpenSource.tsx';
import Skills from './components/Skills.tsx';
import Certifications from './components/Certifications.tsx';
import Contact from './components/Contact.tsx';
import Chatbot from './components/Chatbot.tsx';

const App: React.FC = () => {
  const MotionSection = ({ children, id, className }: { children: React.ReactNode, id: string, className?: string }) => (
    <motion.section
      id={id}
      className={`py-12 px-4 sm:px-6 lg:px-8 overflow-hidden ${className || ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {children}
    </motion.section>
  );

  return (
    <div className="bg-slate-950/50 text-slate-300 relative">
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto">
          <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
            <Hero />
          </section>
          <MotionSection id="about">
            <About />
          </MotionSection>
          <MotionSection id="github">
            <GitHubStats />
          </MotionSection>
          <MotionSection id="experience">
            <Experience />
          </MotionSection>
          <MotionSection id="projects">
            <Projects />
          </MotionSection>
          <MotionSection id="opensource">
            <OpenSource />
          </MotionSection>
          <MotionSection id="skills">
            <Skills />
          </MotionSection>
          <MotionSection id="certifications">
            <Certifications />
          </MotionSection>
          <MotionSection id="contact" className="min-h-screen flex flex-col justify-center">
            <Contact />
          </MotionSection>
        </main>
        <Chatbot />
      </div>
    </div>
  );
};

export default App;
