import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../constants.ts';

const About: React.FC = () => {
  const profileImageUrl = "/public/resources/hari.png";

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        About <span className="gradient-text">Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <motion.div
          className="md:col-span-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-spidey-red to-spidey-blue rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img 
              src={profileImageUrl} 
              alt="Hari Thatikonda" 
              className="relative w-full max-w-xs mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </motion.div>
        <div className="md:col-span-3 text-lg text-slate-300 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Hello! I'm Hari, your friendly neighborhood software engineer with a deep passion for building things that live on the internet. My journey in tech is driven by a relentless curiosity to explore, build, and contribute.
            </p>
            <p>
              Professionally, I enhance enterprise applications at Tata Consultancy Services. In my personal time, I dive into cutting-edge technologies. My recent experiments include building a real-time video chat app with Java 21's Virtual Threads and WebRTC, and creating a collaborative editor from scratch using WebSockets. I'm also fascinated by the potential of AI and have integrated large language models into my projects.
            </p>
          </motion.div>
          <motion.div
            className="glass-card p-6 rounded-xl mt-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-spidey-red mb-4">Education</h3>
            <p className="font-semibold text-slate-100">{educationData.degree}</p>
            <p className="text-slate-400">{educationData.college}</p>
            <p className="text-sm text-slate-500 mt-1">{educationData.period}</p>
            <p className="text-sm text-slate-500">CGPA: {educationData.cgpa}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
