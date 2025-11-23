import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactForm } from '../hooks/useContactForm.ts';
import { SendIcon, CheckCircleIcon, AlertTriangleIcon } from './Icons.tsx';

const Contact: React.FC = () => {
  const { formData, status, errorMessage, handleChange, handleSubmit } = useContactForm();

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  return (
    <div className="max-w-2xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Send Me a <span className="gradient-text">Message</span>
      </motion.h2>
      <motion.p
        className="text-lg text-slate-400 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Have a question or want to work together? Drop me a line! Your message will be sent directly to my inbox.
      </motion.p>

      <motion.form
        id="contactForm"
        onSubmit={handleSubmit}
        className="text-left space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-spidey-red transition-all"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-spidey-red transition-all"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-spidey-red transition-all"
            placeholder="Your message here..."
          ></textarea>
        </div>
        
        <div className="text-center pt-2">
          <motion.button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center bg-spidey-red text-white font-semibold px-8 py-3 rounded-lg shadow-lg shadow-red-600/30 transition-all duration-300 hover:bg-red-500 hover:shadow-xl hover:shadow-red-500/40 disabled:bg-slate-500 disabled:cursor-not-allowed"
            whileHover={{ scale: isLoading ? 1 : 1.05 }}
            whileTap={{ scale: isLoading ? 1 : 0.95 }}
          >
            {isLoading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <SendIcon className="w-5 h-5 mr-2" />
            )}
            {isLoading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </div>
      </motion.form>

      <AnimatePresence>
        {isSuccess && (
          <motion.div
            id="confirmationMessage"
            className="mt-6 p-4 bg-green-500/20 border border-green-500 text-green-300 rounded-lg flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <CheckCircleIcon className="w-6 h-6" />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </motion.div>
        )}
        {isError && (
          <motion.div
            id="errorMessage"
            className="mt-6 p-4 bg-red-500/20 border border-red-500 text-red-300 rounded-lg flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <AlertTriangleIcon className="w-6 h-6" />
            <span>{errorMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-20 pt-8 border-t border-slate-800">
        <p className="text-slate-500">
          Designed & Built by your friendly neighborhood software engineer, Hari Thatikonda.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
