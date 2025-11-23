import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../constants.ts';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring' } },
};

const Skills: React.FC = () => {
  return (
    <>
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        variants={itemVariants}
      >
        Technical <span className="gradient-text">Arsenal</span>
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={sectionVariants}
      >
        {skillsData.map((category) => (
          <motion.div
            key={category.name}
            className="glass-card p-6 rounded-xl"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <category.icon className="w-8 h-8 text-spidey-red mr-4" />
              <h3 className="text-xl font-bold text-slate-100">{category.name}</h3>
            </div>
            <motion.ul
              className="flex flex-wrap gap-2"
              variants={sectionVariants}
            >
              {category.skills.map((skill) => (
                <motion.li
                  key={skill}
                  className="bg-slate-700/50 text-slate-300 text-sm font-medium px-3 py-1.5 rounded-md cursor-default"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, backgroundColor: '#E62429', color: '#FFFFFF' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Skills;
