import React from 'react';
import { motion } from 'framer-motion';
import { openSourceData } from '../constants.ts';

const OpenSource: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        Open Source & <span className="gradient-text">Community</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {openSourceData.map((item, index) => (
          <motion.div
            key={index}
            className="glass-card p-8 rounded-xl flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, boxShadow: '0 10px 15px -3px rgba(230, 36, 41, 0.1), 0 4px 6px -2px rgba(230, 36, 41, 0.05)' }}
          >
            <div className="mb-4 text-spidey-red">
              <item.icon className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">{item.title}</h3>
            <p className="text-slate-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OpenSource;
