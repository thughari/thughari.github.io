import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useGeminiChat } from '../hooks/useGeminiChat.ts';
import { BotIcon, CloseIcon, SendIcon } from './Icons.tsx';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const { messages, isLoading, sendMessage, initializeChat } = useGeminiChat();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      initializeChat();
    }
  }, [isOpen, initializeChat]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (userInput.trim() && !isLoading) {
      sendMessage(userInput.trim());
      setUserInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-spidey-red text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open AI Chat"
      >
        <BotIcon className="w-8 h-8" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-4 sm:right-8 w-[90vw] max-w-md h-[70vh] max-h-[600px] bg-[#111827] rounded-2xl shadow-2xl flex flex-col z-50 border border-slate-700"
            role="dialog"
            aria-modal="true"
            aria-labelledby="chatbot-title"
          >
            <header className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center space-x-3">
                <BotIcon className="w-6 h-6 text-spidey-red" />
                <h2 id="chatbot-title" className="font-bold text-lg text-slate-100">Hari's AI Twin</h2>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white" aria-label="Close chat">
                <CloseIcon />
              </button>
            </header>

            <div ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'bot' && <BotIcon className="w-6 h-6 text-spidey-red flex-shrink-0 mt-1" />}
                  <div className={`max-w-[85%] rounded-xl px-4 py-2 ${msg.sender === 'user' ? 'bg-spidey-blue text-white' : 'bg-slate-700 text-slate-200'}`}>
                    <div className="prose prose-sm prose-invert">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.sender === 'user' && (
                 <div className="flex items-end gap-2 justify-start">
                    <BotIcon className="w-6 h-6 text-spidey-red flex-shrink-0" />
                    <div className="max-w-[80%] rounded-xl px-4 py-2 bg-slate-700 text-slate-200">
                        <div className="flex items-center space-x-1">
                            <span className="w-2 h-2 bg-spidey-red rounded-full animate-pulse delay-0"></span>
                            <span className="w-2 h-2 bg-spidey-red rounded-full animate-pulse delay-150"></span>
                            <span className="w-2 h-2 bg-spidey-red rounded-full animate-pulse delay-300"></span>
                        </div>
                    </div>
                 </div>
              )}
            </div>

            <footer className="p-4 border-t border-slate-700">
              <div className="flex items-center bg-slate-800 rounded-lg">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about my skills..."
                  className="w-full bg-transparent p-3 text-slate-200 focus:outline-none"
                  disabled={isLoading}
                />
                <button onClick={handleSend} disabled={isLoading || !userInput.trim()} className="p-3 text-slate-400 disabled:text-slate-600 disabled:cursor-not-allowed hover:text-spidey-red transition-colors">
                  <SendIcon />
                </button>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
