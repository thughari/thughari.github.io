export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: React.FC<{ className?: string }>;
}

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

export interface OpenSourceItem {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}

export interface GitHubStat {
    icon: React.FC<{ className?: string }>;
    value: string;
    label: string;
}

export interface TopLanguage {
    name: string;
    percentage: number;
    color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  icon: React.FC<{ className?: string }>;
}
