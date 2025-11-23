import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../constants.ts';
import { GitHubIcon, ExternalLinkIcon } from './Icons.tsx';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects: React.FC = () => {
  return (
    <>
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        variants={cardVariants}
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="glass-card rounded-xl overflow-hidden flex flex-col group"
            style={{ transformStyle: 'preserve-3d' }}
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative h-48 overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-spidey-red transition-colors duration-300">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-spidey-red transition-colors z-10">
                      <GitHubIcon />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-spidey-red transition-colors z-10">
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-slate-700 text-red-300 text-xs font-medium px-2.5 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Projects;
