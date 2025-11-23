import React from 'react';

const iconProps = {
  className: "w-6 h-6",
  strokeWidth: 1.5
};

export const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 19c-4.3 1.4 -4.3-2.5 -6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0 -1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0 -6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0 -2-2 2 2 0 0 0 -2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export const BotIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8V4H8" />
    <rect x="4" y="12" width="16" height="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v-2a3 3 0 0 0-3-3H6" />
  </svg>
);

export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const GitBranchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const ServerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

export const DatabaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

export const CloudIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

export const ToolIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

export const LanguageIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="m5 8 6 6" />
    <path d="m4 14 6-6 2-3" />
    <path d="M2 5h12" />
    <path d="M7 2h1" />
    <path d="m22 22-5-10-5 10" />
    <path d="M14 18h6" />
  </svg>
);

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const RepoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8z" />
    <path d="M2 10V8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2" />
    <path d="M7 15h2" />
  </svg>
);

export const CommitIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" />
    <line x1="3" y1="12" x2="9" y2="12" />
    <line x1="15" y1="12" x2="21" y2="12" />
  </svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const AlertTriangleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const LeetCodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.48 4.49l-2.2-1.8a.5.5 0 0 0-.6 0l-2.2 1.8A.5.5 0 0 0 8 5v14a.5.5 0 0 0 .8.4l2.2-1.8a.5.5 0 0 1 .6 0l2.2 1.8a.5.5 0 0 0 .8-.4V5a.5.5 0 0 0-.52-.51zM10 14H8v-2h2v2zm4 0h-2v-2h2v2zm0-3h-2V9h2v2zm0-3h-2V6h2v2z"/>
  </svg>
);

export const CodeforcesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className || iconProps.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 18V6" stroke="#DC2626" strokeWidth="2.5"/>
    <path d="M12 18V10" stroke="#3B82F6" strokeWidth="2.5"/>
    <path d="M16 18V13" stroke="#4B5563" strokeWidth="2.5"/>
  </svg>
);
