import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../constants.ts';
import { GitHubIcon, ExternalLinkIcon } from './Icons.tsx';
import type { Project } from '../types.ts';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalPanel = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } },
};

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeMaybeBlocked, setIframeMaybeBlocked] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    // prevent background page scrolling while modal is open
    if (selected) {
      document.body.style.overflow = 'hidden';
      setIframeLoaded(false);
      setIframeMaybeBlocked(false);
      // if iframe doesn't call onLoad within 1500ms, show a helpful note
      timer = window.setTimeout(() => setIframeMaybeBlocked(true), 1500);
    } else {
      document.body.style.overflow = '';
      setIframeLoaded(false);
      setIframeMaybeBlocked(false);
    }
    return () => {
      if (timer) window.clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [selected]);

  const openPreview = (project: Project) => {
    setSelected(project);
  };

  const closePreview = () => {
    setSelected(null);
  };

  const openInNewTab = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
            className="glass-card rounded-xl overflow-hidden flex flex-col group cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              transition: { duration: 0.3 }
            }}
            onClick={() => openPreview(project)}
          >
            <div className="relative h-48 overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => { e.stopPropagation(); openPreview(project); }}
                  className="bg-spidey-red text-white px-4 py-2 rounded-md"
                >
                  Preview
                </button>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-spidey-red transition-colors duration-300">{project.title}</h3>
                <div className="flex items-center space-x-4 z-10">
                  {project.githubUrl && (
                    <a onClick={(e) => { e.stopPropagation(); openInNewTab(project.githubUrl); }} className="text-slate-400 hover:text-spidey-red transition-colors cursor-pointer" aria-label="Open GitHub repo">
                      <GitHubIcon />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a onClick={(e) => { e.stopPropagation(); openInNewTab(project.demoUrl); }} className="text-slate-400 hover:text-spidey-red transition-colors cursor-pointer" aria-label="Open demo">
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

      {/* Preview Modal */}
      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalBackdrop}
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closePreview}
            aria-hidden
          />
          <motion.div
            className="relative w-full max-w-4xl h-[80vh] bg-slate-900 rounded-2xl overflow-auto border border-slate-700"
            variants={modalPanel}
            role="dialog"
            aria-modal="true"
            aria-label={`Preview ${selected.title}`}
          >
            <header className="flex items-center justify-between p-4 border-b border-slate-700 sticky top-0 bg-slate-900 z-10">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">{selected.title}</h3>
                <p className="text-sm text-slate-400">{selected.tech.join(', ')}</p>
              </div>
              <div className="flex items-center gap-3">
                {selected.demoUrl && (
                  <button onClick={() => openInNewTab(selected.demoUrl)} className="px-3 py-2 text-sm bg-spidey-red text-white rounded-md">
                    Open Project
                  </button>
                )}
                {selected.githubUrl && (
                  <button onClick={() => openInNewTab(selected.githubUrl)} className="px-3 py-2 text-sm bg-slate-700 text-slate-200 rounded-md">
                    View Repo
                  </button>
                )}
                <button onClick={closePreview} className="px-3 py-2 text-sm text-slate-300">Close</button>
              </div>
            </header>

            <div className="h-full">
              {(selected.demoUrl || selected.githubUrl) ? (
                <iframe
                  title={`Preview - ${selected.title}`}
                  src={selected.demoUrl || selected.githubUrl}
                  className="w-full h-full bg-white"
                  onLoad={() => { setIframeLoaded(true); setIframeMaybeBlocked(false); }}
                  sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-presentation"
                />
              ) : (
                <div className="h-full flex items-center justify-center text-slate-300">
                  No preview available for this project.
                </div>
              )}
            </div>

            <div className="absolute left-4 bottom-4 text-sm text-slate-300">
              {!iframeLoaded && iframeMaybeBlocked && (
                <div className="bg-yellow-900/40 px-3 py-2 rounded-md border border-yellow-800">
                  Preview may be blocked by the remote site. Use "Open Project" to view in a new tab.
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Projects;
