import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter.ts';
import { personalInfo } from '../constants.ts';
import { GitHubIcon, LinkedInIcon, MailIcon, LeetCodeIcon, CodeforcesIcon } from './Icons.tsx';

const Hero: React.FC = () => {
  const typedTitle = useTypewriter(personalInfo.title, 50, 1000);

  const iconVariants = {
    hover: { scale: 1.2, rotate: 5, color: '#E62429' },
    tap: { scale: 0.9 }
  };
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-100 tracking-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        {personalInfo.name}
      </motion.h1>
      <motion.h2
        className="mt-4 text-2xl md:text-4xl font-semibold gradient-text h-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {typedTitle}
        <span className="inline-block w-1 h-8 md:h-10 bg-spidey-red animate-pulse ml-1"></span>
      </motion.h2>
      <motion.p
        className="mt-6 max-w-2xl text-lg md:text-xl text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Your friendly neighborhood software engineer, building robust backend systems and dynamic user interfaces. Passionate about open source and exploring the frontiers of technology.
      </motion.p>
      <motion.div
        className="mt-10 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button
            onClick={scrollToProjects}
            className="bg-spidey-red text-white font-semibold px-8 py-3 rounded-lg shadow-lg shadow-red-600/30 transition-all duration-300 hover:bg-red-500 hover:shadow-xl hover:shadow-red-500/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-3 bg-slate-800/60 text-slate-100 rounded-lg border border-slate-700 hover:bg-slate-700 transition"
              aria-label="View Resume"
            >
              View Resume
            </a>
            <a
              href={personalInfo.resume}
              download="Hari Thatikonda.pdf"
              className="inline-flex items-center px-4 py-3 bg-spidey-red text-white rounded-lg hover:bg-red-500 transition"
              aria-label="Download Resume"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center space-x-5">
          <motion.a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover="hover" whileTap="tap" aria-label="GitHub Profile">
            <GitHubIcon className="w-7 h-7 text-slate-400 transition-colors" />
          </motion.a>
          <motion.a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover="hover" whileTap="tap" aria-label="LinkedIn Profile">
            <LinkedInIcon className="w-7 h-7 text-slate-400 transition-colors" />
          </motion.a>
          <motion.a href={personalInfo.socials.leetcode} target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover="hover" whileTap="tap" aria-label="LeetCode Profile">
            <LeetCodeIcon className="w-7 h-7 text-slate-400 transition-colors" />
          </motion.a>
          <motion.a href={personalInfo.socials.codeforces} target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover="hover" whileTap="tap" aria-label="Codeforces Profile">
            <CodeforcesIcon className="w-7 h-7 text-slate-400 transition-colors" />
          </motion.a>
          <motion.a href={`mailto:${personalInfo.email}`} variants={iconVariants} whileHover="hover" whileTap="tap" aria-label="Send Email">
            <MailIcon className="w-7 h-7 text-slate-400 transition-colors" />
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
