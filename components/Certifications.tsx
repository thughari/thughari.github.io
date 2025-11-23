import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../constants.ts';
import { ExternalLinkIcon } from './Icons.tsx';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Certifications: React.FC = () => {
  return (
    <>
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        variants={cardVariants}
      >
        Licenses & <span className="gradient-text">Certifications</span>
      </motion.h2>
      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            className="glass-card rounded-xl p-6 flex items-start group"
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow: '0 10px 15px -3px rgba(230, 36, 41, 0.1), 0 4px 6px -2px rgba(230, 36, 41, 0.05)',
              transition: { duration: 0.3 }
            }}
          >
            <div className="mr-5 flex-shrink-0 pt-1">
              <cert.icon className="w-8 h-8 text-spidey-red" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-slate-100">{cert.name}</h3>
              <p className="text-slate-300 font-medium">{cert.issuer}</p>
              <p className="text-sm text-slate-400 mt-1">{cert.date}</p>
            </div>
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-slate-400 opacity-50 group-hover:opacity-100 group-hover:text-spidey-red transition-all duration-300 self-center"
              aria-label={`View credential for ${cert.name}`}
            >
              <ExternalLinkIcon className="w-5 h-5" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Certifications;
