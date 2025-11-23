import React from 'react';
import { motion } from 'framer-motion';
import { githubStatsData, topLanguagesData } from '../constants.ts';

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

const GitHubStats: React.FC = () => {
  return (
    <>
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        variants={itemVariants}
      >
        My GitHub <span className="gradient-text">Activity</span>
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        variants={sectionVariants}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={itemVariants}
        >
          {githubStatsData.map((stat) => (
            <div key={stat.label} className="glass-card p-6 rounded-xl text-center flex flex-col items-center justify-center">
              <stat.icon className="w-10 h-10 text-spidey-red mb-3" />
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="glass-card p-6 rounded-xl"
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold text-slate-100 mb-4">Top Languages</h3>
          <div className="space-y-3">
            {topLanguagesData.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-slate-300">{lang.name}</span>
                  <span className="text-sm font-medium text-slate-400">{lang.percentage}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5">
                  <motion.div
                    className="h-2.5 rounded-full"
                    style={{ backgroundColor: lang.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default GitHubStats;
