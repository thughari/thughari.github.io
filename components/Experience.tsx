import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../constants.ts';

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        Professional <span className="gradient-text">Experience</span>
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-slate-700 -translate-x-1/2"></div>

        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className="relative mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center md:justify-normal md:odd:flex-row-reverse">
              <div className="w-full md:w-1/2 md:pr-8 md:odd:pr-0 md:odd:pl-8">
                <div className="glass-card p-6 rounded-xl shadow-lg">
                  <p className="text-sm text-slate-400">{item.period}</p>
                  <h3 className="text-2xl font-bold text-spidey-red mt-1">{item.role}</h3>
                  <p className="text-lg font-semibold text-slate-200 mb-3">{item.company} - {item.location}</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Timeline dot */}
            <div className="absolute top-1 left-4 md:left-1/2 w-4 h-4 bg-spidey-red rounded-full -translate-x-1/2 border-4 border-slate-800"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
