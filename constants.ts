import { ExperienceItem, Project, SkillCategory, OpenSourceItem, GitHubStat, TopLanguage, Certification } from './types.ts';
import { HeartIcon, GitBranchIcon, CodeIcon, ServerIcon, DatabaseIcon, CloudIcon, ToolIcon, LanguageIcon, StarIcon, RepoIcon, CommitIcon } from './components/Icons.tsx';

export const personalInfo = {
  name: "Hari Thatikonda",
  title: "Full Stack Software Engineer",
  email: "haribabutatikonda3@gmail.com",
  phone: "+91-90328 05118",
  socials: {
    github: "https://github.com/thughari",
    linkedin: "https://www.linkedin.com/in/hari-thatikonda/",
    dev: "https://g.dev/hariT",
    leetcode: "https://leetcode.com/u/thughari/",
    codeforces: "https://codeforces.com/profile/thughari"
  },
  handle: "thughari"
};

export const experienceData: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Tata Consultancy Services",
    period: "Aug 2022 – Present",
    location: "Hyderabad, India",
    points: [
      "Boosted financial reporting performance by 40% for a Verizon tool by optimizing backend logic.",
      "Strengthened system security by resolving over 100 vulnerabilities for an Equitable application.",
      "Enhanced scalability and maintainability by refactoring legacy modules into microservices.",
      "Improved API response times by 20% using modern Java features like Streams and Lambdas.",
      "Engineered secure APIs with JWT-based authentication, achieving 100% compliance in security audits.",
      "Accelerated release cycles by streamlining CI/CD pipelines with Jenkins and GitHub, cutting manual deployment efforts by 70%."
    ]
  }
];

export const educationData = {
    degree: "B.Tech in Electronics and Communication Engineering (ECE)",
    college: "St. Ann’s College of Engineering and Technology",
    period: "July 2018 – June 2022",
    cgpa: "7.15"
};

export const projectsData: Project[] = [
  {
    title: "RandomChat - Real-time Video Chat",
    description: "A peer-to-peer video chat application built from the ground up, leveraging modern Java features. It uses WebRTC for direct browser-to-browser video streaming and Java 21's Virtual Threads for a highly scalable signaling server.",
    tech: ["Java 21", "Spring Boot", "WebRTC", "WebSockets", "Virtual Threads", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1559704293-9551264de150?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/thughari/RandomChat"
  },
  {
    title: "CollabEditor - Real-time Collaborative Editor",
    description: "An online collaborative text editor that allows multiple users to edit a document simultaneously. Built with a Spring Boot backend using WebSockets for instant synchronization of changes across all clients.",
    tech: ["Java", "Spring Boot", "WebSockets", "Maven", "TypeScript", "Angular"],
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/thughari/CollabEditor"
  },
  {
    title: "AI-Powered Mental Health App",
    description: "A full-stack mental wellness application featuring a microservices backend and a real-time AI chatbot. Integrated Ollama & LLaMA 3 with RAG to provide personalized, context-aware support.",
    tech: ["Java", "Spring Boot", "Angular", "Microservices", "MongoDB", "Ollama", "LLaMA 3"],
    imageUrl: "https://images.unsplash.com/photo-1584441405886-bc91be61e56a?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://mental-health-app-frontend.vercel.app/",
    githubUrl: "https://github.com/thughari/Mental-Health-App-frontend"
  },
  {
    title: "National Scholarship Portal",
    description: "A comprehensive scholarship management system with multi-role access for students, institutes, and administrators. The backend is containerized with Docker for easy deployment and scalability.",
    tech: ["Java", "Spring Boot", "Angular", "MongoDB", "Docker", "REST APIs"],
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://scholarship-portal-frontend.vercel.app/",
    githubUrl: "https://github.com/thughari/scholarship-portal-frontend"
  }
];

export const openSourceData: OpenSourceItem[] = [
    {
        title: "Hacktoberfest Contributor",
        description: "Actively participated in Hacktoberfest, successfully completing multiple pull requests and contributing to a variety of open-source projects. Passionate about giving back to the community and collaborating with developers worldwide.",
        icon: HeartIcon
    },
    {
        title: "Open Source Enthusiast",
        description: "Engaged with the open-source ecosystem by contributing to, forking, and learning from influential projects like Spring AI, Kubernetes, and First Contributions. Always exploring new tools and frameworks to stay at the cutting edge.",
        icon: GitBranchIcon
    }
];

export const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java (21)", "Python", "SQL", "JavaScript", "TypeScript"],
    icon: LanguageIcon
  },
  {
    name: "Backend",
    skills: ["Spring Boot", "Spring MVC", "Microservices", "Hibernate", "WebRTC", "WebSockets", "Virtual Threads"],
    icon: ServerIcon
  },
  {
    name: "Frontend",
    skills: ["Angular", "React", "HTML/CSS", "TailwindCSS", "Bootstrap"],
    icon: CodeIcon
  },
  {
    name: "Databases",
    skills: ["MySQL", "MongoDB"],
    icon: DatabaseIcon
  },
  {
    name: "DevOps & Cloud",
    skills: ["Docker", "Jenkins", "Google Cloud Platform (GCP)"],
    icon: CloudIcon
  },
  {
    name: "Tools & Concepts",
    skills: ["Git", "GitHub", "Postman", "Swagger", "JIRA", "JWT", "Agile", "Design Patterns", "RAG"],
    icon: ToolIcon
  }
];

export const certificationsData: Certification[] = [
  {
    name: "Oracle Certified Professional, Java SE 17 Developer",
    issuer: "Oracle",
    date: "Issued Jan 2024",
    credentialUrl: "#",
    icon: LanguageIcon,
  },
  {
    name: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "Issued Mar 2023",
    credentialUrl: "#",
    icon: CloudIcon,
  },
];

export const githubStatsData: GitHubStat[] = [
    { icon: RepoIcon, value: "60+", label: "Repositories" },
    { icon: CommitIcon, value: "500+", label: "Commits" },
    { icon: StarIcon, value: "30+", label: "Stars" },
];

export const topLanguagesData: TopLanguage[] = [
    { name: "Java", percentage: 45, color: "#E62429" },
    { name: "TypeScript", percentage: 30, color: "#007ACC" },
    { name: "JavaScript", percentage: 15, color: "#F7DF1E" },
    { name: "Python", percentage: 10, color: "#306998" },
];

export const chatbotSystemInstruction = `You are 'Hari's AI Twin', his friendly neighborhood AI assistant for his personal portfolio. Your goal is to provide concise and accurate information about Hari to potential employers and collaborators, based *only* on the context provided below. Your tone should be helpful, a little witty, and professional. **Always use Markdown for formatting**, such as bolding for titles (\`**Title:**\`) and bullet points (\`* item\`) for lists. Do not invent or infer any information.

**Special Instruction:** If a user expresses a desire to send a message, contact Hari, or ask a question directly to him, you MUST respond with **only** the special token \`[START_CONTACT_FLOW]\` and nothing else. The application will then take over to collect the user's message.

Here is the information about Hari Thatikonda:
- **Name:** ${personalInfo.name}
- **Title:** ${personalInfo.title}
- **Bio:** Hari is a software engineer with a deep passion for building things for the internet. He applies his skills professionally at Tata Consultancy Services, but his curiosity drives him to constantly explore, build, and contribute to the open-source community. He experiments with cutting-edge technologies like Java 21's Virtual Threads, WebRTC, and Large Language Models.
- **Contact:** Email (${personalInfo.email}), Phone (${personalInfo.phone})
- **Socials:** GitHub (${personalInfo.socials.github}), LinkedIn (${personalInfo.socials.linkedin}), LeetCode (${personalInfo.socials.leetcode}), Codeforces (${personalInfo.socials.codeforces}), Handle ('${personalInfo.handle}')

**GitHub Stats:**
- Repositories: ${githubStatsData[0].value}
- Commits: ${githubStatsData[1].value}
- Top Languages: ${topLanguagesData.map(l => l.name).join(', ')}

**Experience at Tata Consultancy Services:**
- **Role:** ${experienceData[0].role} (${experienceData[0].period})
- **Key Achievements:**
  * Boosted financial reporting performance by 40%.
  * Strengthened system security by resolving over 100 vulnerabilities.
  * Enhanced scalability by refactoring legacy modules into microservices.
  * Improved API response times by 20% using modern Java features.

**Personal Projects:**
* **${projectsData[0].title}:** ${projectsData[0].description} Tech: ${projectsData[0].tech.join(', ')}.
* **${projectsData[1].title}:** ${projectsData[1].description} Tech: ${projectsData[1].tech.join(', ')}.
* **${projectsData[2].title}:** ${projectsData[2].description} Tech: ${projectsData[2].tech.join(', ')}.
* **${projectsData[3].title}:** ${projectsData[3].description} Tech: ${projectsData[3].tech.join(', ')}.

**Open Source Contributions:**
* **${openSourceData[0].title}:** ${openSourceData[0].description}
* **${openSourceData[1].title}:** ${openSourceData[1].description}

**Skills:**
${skillsData.map(category => `* **${category.name}:** ${category.skills.join(', ')}`).join('\n')}

**Certifications:**
* **${certificationsData[0].name}** from ${certificationsData[0].issuer}
* **${certificationsData[1].name}** from ${certificationsData[1].issuer}

**Education:**
- **Degree:** ${educationData.degree} from ${educationData.college}

When asked for contact details, provide his email, LinkedIn, and phone number.
When asked about projects, briefly describe them and mention the key technologies.
When asked about skills, list them clearly.
When asked about open source, talk about his Hacktoberfest participation and enthusiasm for community projects.
Keep your answers brief and to the point. Start the conversation by introducing yourself and offering to help.`;
