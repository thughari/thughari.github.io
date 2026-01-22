import { ExperienceItem, Project, SkillCategory, OpenSourceItem, GitHubStat, TopLanguage, Certification } from './types.ts';
import { HeartIcon, GitBranchIcon, CodeIcon, ServerIcon, DatabaseIcon, ToolIcon, StarIcon, RepoIcon, CommitIcon, AIIcon, GoogleCloudIcon, CloudIcon } from './components/Icons.tsx';

export const personalInfo = {
  name: "Hari Thatikonda",
  title: "Full Stack Developer",
  email: "haribabutatikonda3@gmail.com",
  phone: "+91-90328 05118",
  resume: "HariThatikonda.pdf",
  socials: {
    github: "https://github.com/thughari",
    linkedin: "https://www.linkedin.com/in/hari-thatikonda/",
    googleDev: "https://g.dev/hariT",
    leetcode: "https://leetcode.com/u/thughari/",
    codeforces: "https://codeforces.com/profile/hari3",
    twitter: "https://twitter.com/thughari",
    instagram: "https://www.instagram.com/thug_hari/",
    medium: "https://medium.com/@hari3"
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
    title: "JobTrackerPro - Manage all your job applications in one place",
    description: "A robust full-stack dashboard to visualize and manage the job search pipeline. Features a hybrid OAuth2/JWT security system, multi-threaded analytics for real-time D3.js charts, and atomic profile updates using Cloudflare R2 storage. Includes AI-powered email parsing for automated job entry.",
    tech: ["Java 21", "Spring Boot 3", "Angular 17 (Signals)", "TailwindCSS", "D3.js", "Cloudflare R2", "PostgreSQL", "Google Gemini API", "Docker", "Google Cloud Run", "OAuth2", "JWT"],
    imageUrl: "./images/jobtrackerpro.png",
    demoUrl: "https://thughari.github.io/JobTrackerPro/",
    githubUrl: "https://github.com/thughari/JobTrackerPro"
  },
  {
    title: "CarbonScope - Emissions Analytics Dashboard",
    description: "an end-to-end emissions analytics platform with Chart.js visualizations, Gemini-powered data analysis and web insights, deployed on Google Cloud Run for scalability.",
    tech: ["Java", "Spring Boot", "Angular", "Chart.js", "Google Cloud Run", "Gemini API", "Docker"],
    imageUrl: "./images/carbon-scope.png",
    demoUrl: "https://thughari.github.io/carbon-scope/",
    githubUrls: {
      frontend: "https://github.com/thughari/carbon-scope",
      backend: "https://github.com/thughari/carbonscope"
    }
  },
  {
    title: "RandomChat - Peer To Peer Video Chat",
    description: "A peer-to-peer video chat application built from the ground up, leveraging modern Java features. It uses WebRTC for direct browser-to-browser video streaming and Java 21's Virtual Threads for a highly scalable signaling server.",
    tech: ["Java 21", "Spring Boot", "WebRTC", "WebSockets", "Virtual Threads", "JavaScript"],
    imageUrl: "./images/randomchat.png",
    demoUrl: "https://randomchat-hfta.onrender.com/",
    githubUrl: "https://github.com/thughari/RandomChat"
  },
  {
    title: "CollabEditor - Online Editor like Google Docs",
    description: "An online collaborative text editor that allows multiple users to edit a document simultaneously. Built with a Spring Boot backend using WebSockets for instant synchronization of changes across all clients.",
    tech: ["Java", "Spring Boot", "WebSockets", "Maven", "TypeScript", "Angular"],
    imageUrl: "./images/collabeditor.png",
    demoUrl: "https://thughari.github.io/Collaborative-Editor-UI/editor/hari",
    githubUrl: "https://github.com/thughari/CollabEditor",
    githubUrls: {
      frontend: "https://github.com/thughari/Collaborative-Editor-UI",
      backend: "https://github.com/thughari/CollabEditor"
    }
  },
  {
    title: "AI-Powered Mental Health App",
    description: "A full-stack mental wellness application featuring a microservices backend and a real-time AI chatbot. Integrated Ollama & LLaMA 3 with RAG to provide personalized, context-aware support.",
    tech: ["Java", "Spring Boot", "Angular", "Microservices", "MongoDB", "Ollama", "LLaMA 3"],
    imageUrl: "./images/mental-health.png",
    demoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7313487684994285568?compact=1",
    githubUrl: "https://github.com/thughari/Mental-Health-App-Backend",
    githubUrls: {
      frontend: "https://github.com/thughari/Mental-Health-App",
      backend: "https://github.com/thughari/Mental-Health-App-Backend"
    }
  },
  {
    title: "National Scholarship Portal",
    description: "A comprehensive scholarship management system with multi-role access for students, institutes, and administrators. The backend is containerized with Docker for easy deployment and scalability.",
    tech: ["Java", "Spring Boot", "Angular", "MongoDB", "Docker", "REST APIs"],
    imageUrl: "./images/nsp.png",
    demoUrl: "https://thughari.github.io/NationalScholarshipPortal-FrontEnd/#/",
    githubUrl: "https://github.com/thughari/NationalScholarshipPortal-FrontEnd",
    githubUrls: {
      frontend: "https://github.com/thughari/NationalScholarshipPortal-FrontEnd",
      backend: "https://github.com/thughari/National_Scholarship_Portal_Backend"
    }
  }, 
  {
    title: "Music Player Web App",
    description: "A sleek and responsive music player web application that allows users to play, pause, and skip tracks. Built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    imageUrl: "./images/image.png",
    demoUrl: "https://thughari.github.io/music-player/",
    githubUrl: "https://github.com/thughari/music-player"
  }
];

export const openSourceData: OpenSourceItem[] = [
    {
        title: "Hacktoberfest Supercontributor",
        description: "Achieved Supercontributor status in Hacktoberfest by completing numerous high-quality pull requests and actively contributing to open-source projects. Passionate about giving back and collaborating with developers worldwide.",
        icon: HeartIcon
    },
    {
        title: "Open Source Enthusiast",
        description: "Engaged with the open-source ecosystem by contributing to, forking, and learning from influential projects like Spring, Apache, GSoC and First Contributions. Always exploring new tools and frameworks to stay at the cutting edge.",
        icon: GitBranchIcon
    }
];

export const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java (21)", "Python", "SQL", "JavaScript", "TypeScript", "C"],
    icon: CodeIcon
  },
  {
    name: "Backend",
    skills: ["Spring Boot", "Spring MVC", "Microservices", "Hibernate", "WebRTC", "WebSockets", "Virtual Threads"],
    icon: ServerIcon
  },
  {
    name: "Frontend",
    skills: ["Angular", "HTML/CSS", "TailwindCSS", "Bootstrap"],
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
    skills: ["Git", "GitHub", "Postman", "Swagger", "JIRA", "JWT", "Agile", "Design Patterns", "RAG", "Veracode",  "Fortify", "SonarQube", "Burp Suite"],
    icon: ToolIcon
  }
];

export const certificationsData: Certification[] = [
  {
    name: "Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "Issued Dec 2024",
    credentialUrl: "https://learn.microsoft.com/en-us/users/harithatikonda/credentials/ba767343eef28046",
    icon: AIIcon,
  },
  {
    name: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "Issued Feb 2025",
    credentialUrl: "https://www.credly.com/badges/e37732c2-6766-4b6a-b42a-a25aa6b24fe9_url",
    icon: GoogleCloudIcon,
  },
];

export const githubStatsData: GitHubStat[] = [
    { icon: RepoIcon, value: "67", label: "Repositories" },
    { icon: CommitIcon, value: "1000+", label: "Commits" },
    { icon: StarIcon, value: "30+", label: "Stars" },
];

export const topLanguagesData: TopLanguage[] = [
    { name: "Java", percentage: 45, color: "#E62429" },
    { name: "TypeScript", percentage: 30, color: "#007ACC" },
    { name: "JavaScript", percentage: 15, color: "#F7DF1E" },
    { name: "Python", percentage: 10, color: "#306998" },
];

export const chatbotSystemInstruction = `You are '${personalInfo.name}'s AI Twin', his friendly neighborhood AI assistant for his personal portfolio. Your goal is to provide concise and accurate information about Hari to potential employers and collaborators, based *only* on the context provided below. Your tone should be helpful, a little witty, and professional. **Always use Markdown for formatting**, such as bolding for titles (\`**Title:**\`) and bullet points (\`* item\`) for lists. Do not invent or infer any information.

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
