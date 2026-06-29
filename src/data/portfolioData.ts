export interface HeroInfo {
  name: string;
  title: string;
  subtitle: string;
  currentFocus: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface AboutInfo {
  education: string;
  careerGoal: string;
  interests: string[];
  philosophy: string;
  specialization: string;
  journey: string[];
  languages: string[];
  educationHighlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[]; // Level out of 5 (used for progress indicators, e.g. beginner/intermediate/advanced indicator)
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  skillsLearned: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  overview: string;
  motivation: string;
  features: string[];
  technologies: string[];
  challenges: string;
  learnings: string;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  previewUrl?: string;
  downloadUrl?: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

// ==========================================
// PORTFOLIO DATA (PLACEHOLDERS WITH TODOs)
// ==========================================

export const heroInfo: HeroInfo = {
  name: "Ankur Singh",
  title: "Cyber Security & Networking Specialist",
  subtitle: "B.Tech Computer Science student building resilient, secure network architectures and software systems.",
  currentFocus: "Currently studying secure network communications, automated threat intelligence, and systems auditing.",
  resumeUrl: "/Ankur_Singh_CV.pdf", // TODO: Put your actual resume.pdf in the /public directory
  githubUrl: "https://github.com/ankur2312speci", // TODO: Update with your GitHub profile link
  linkedinUrl: "https://linkedin.com/in", // TODO: Update with your LinkedIn profile link
};

export const aboutInfo: AboutInfo = {
  education: "B.Tech in Computer Science and Engineering (Spec. Cyber Security & Networking) — [TODO: Insert University/College Name]",
  careerGoal: "Seeking to secure networks, design automated vulnerability management tools, and construct robust defense systems in enterprise infrastructures.",
  interests: ["Penetration Testing", "Network Routing Protocols", "Linux Server Hardening", "Self-hosting & Virtualization"],
  philosophy: "Security is not an afterthought; it is a fundamental architectural requirement. Understanding how networks break is essential to understanding how to build them securely.",
  specialization: "Dedicated student specializing in vulnerability analysis, firewall orchestration, secure TCP/IP communication layers, and Linux system engineering.",
  journey: [
    "Fascinated by how computers communicate across global channels, I chose to specialize in Cyber Security & Networking to understand the dual nature of connectivity and defense.",
    "Driven by hands-on experiments in virtualization environments and home servers, I learn continuously by constructing lab environments, configuring firewall rules, and analyzing packets."
  ],
  languages: ["English (Professional)", "Hindi (Native)"],
  educationHighlights: [
    "Computer Networks & Switching layers",
    "Cryptography & System Security Principles",
    "Hands-on Metasploitable lab assessment",
    "Shell scripting & automated system tasks"
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 4 },
      { name: "TypeScript", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "C / Java", level: 3 },
      // { name: "", level: 4 },
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 3 },
      { name: "Vite", level: 3 },
      { name: "Tailwind CSS", level: 4 },
      { name: "HTML5 & CSS3", level: 4 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 3 },
      { name: "Express.js", level: 3 },
      { name: "REST APIs", level: 3 },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB Atlas", level: 3 },
      { name: "Mongoose", level: 3 },
      { name: "SQLite", level: 3 },
    ]
  },
  {
    category: "Cyber Security",
    skills: [
      { name: "Vulnerability Assessment", level: 3 },
      { name: "Firewall Configuration", level: 3 },
      { name: "Threat Analysis", level: 2 },
      { name: "OWASP Top 10", level: 3 },
      { name: "Nmap Tool , Metasploitable", level: 3 },
    ]
  },
  {
    category: "Networking",
    skills: [
      { name: "TCP/IP Suite", level: 4 },
      { name: "DNS & Routing Configuration", level: 3 },
      { name: "VLANs & Subnetting", level: 4 },
      { name: "Wireshark Packet Analysis", level: 3 },
    ]
  },
  {
    category: "Linux & Virtualization",
    skills: [
      { name: "Linux Administration", level: 4 },
      { name: "VMware Workstation", level: 3 },
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git / Version Control", level: 4 },
      { name: "GitHub", level: 4 },
      { name: "Postman", level: 3 },
      { name: "Docker Containerization", level: 3 },
    ]
  }
];

export const timelineMilestones: TimelineMilestone[] = [
  // TODO: Add academic and technical milestones representing your learning journey.
  {
    year: "2024 - Present",
    title: "Specialized Coursework",
    subtitle: "Cyber Security & Networking focus",
    description: "Deepened knowledge in Network Protocols, Information Security, Cryptography, and Operating Systems.",
    skillsLearned: ["Subnetting", "Routing & Switching", "Cryptography Principles"]
  },
  {
    year: "2023",
    title: "Lab Environment Construction",
    subtitle: "Linux & Virtualization Lab",
    description: "Built a home lab to simulate cyber defense environments. Configured local DNS servers, firewalls, and hosted services.",
    skillsLearned: ["Docker", "Linux Kernel Management", "Firewall Rules"]
  },
  {
    year: "2022",
    title: "B.Tech Commenced",
    subtitle: "Computer Science & Engineering",
    description: "Began fundamental academic training in structured programming, data structures, and computer architecture.",
    skillsLearned: ["Python", "Object-Oriented Programming", "Discrete Mathematics"]
  }
];

export const projectsData: ProjectCaseStudy[] = [
  // TODO: Add your actual projects here as case studies. Do not fabricate.
  
{
  id: "saas-project-management-platform",
  title: "SaaS Project Management Platform",
  category: "Full-Stack Web Application",

  overview:
    "A full-stack SaaS application built to explore modern web application architecture, secure authentication, and scalable backend development. The platform enables users to manage projects, authenticate securely, and access features based on their assigned roles while following production-oriented development practices.",

  motivation:
    "I wanted to move beyond basic CRUD projects and build a real-world full-stack application that combines frontend development, backend APIs, authentication, database design, and user authorization. This project helped me understand how modern SaaS platforms are structured and secured.",

  features: [
    "Secure JWT Authentication and Authorization",
    "User Registration & Login",
    "Role-Based Access Control (Admin/User)",
    "Project CRUD Operations",
    "Subscription Plan Management",
    "Protected API Routes",
    "Responsive Dashboard Interface",
    "REST API Integration",
    "MongoDB Database Integration",
    "Password Encryption using bcrypt"
  ],

  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "Mongoose",
    "JWT",
    "bcrypt",
    "Git",
    "GitHub",
    "Postman"
  ],

  challenges:
    "The biggest challenge was implementing a secure authentication flow while maintaining a clean separation between the frontend and backend. Designing role-based authorization, protecting routes, structuring MongoDB collections, and managing asynchronous API communication required careful planning and significantly improved my understanding of scalable application architecture.",

  learnings:
    "This project strengthened my understanding of full-stack development by giving me practical experience with REST APIs, JWT authentication, password hashing, MongoDB data modeling, React state management, backend architecture, API error handling, and scalable project organization. It also improved my debugging and problem-solving skills while integrating multiple technologies into one application.",

  githubUrl: "https://github.com/YOUR_USERNAME/YOUR_REPOSITORY",

  demoUrl: undefined,

  imageUrl: undefined
},



{
  id: "metasploitable-security-lab",
  title: "Metasploitable Security Lab",
  category: "Cyber Security Lab",

  overview:
    "A hands-on cybersecurity lab built using Kali Linux and Metasploitable 2 inside VMware to learn network reconnaissance, service enumeration, vulnerability assessment, and basic penetration testing techniques in a safe, isolated environment.",

  motivation:
    "I wanted practical experience beyond theory by setting up a controlled lab where I could safely practice security concepts, understand common vulnerabilities, and become familiar with industry-standard tools used during the reconnaissance and enumeration phases of a security assessment.",

  features: [
    "Local Virtual Lab using VMware",
    "Kali Linux & Metasploitable 2 Environment",
    "Network Discovery using Nmap",
    "Service Enumeration",
    "Web Server Analysis",
    "Directory Enumeration with Gobuster",
    "Web Vulnerability Scanning using Nikto",
    "SSH & FTP Service Analysis",
    "Network Mapping & Documentation",
    "Learning-Oriented Security Workflow"
  ],

  technologies: [
    "Kali Linux",
    "Metasploitable 2",
    "VMware Workstation",
    "Nmap",
    "Gobuster",
    "Nikto",
    "Linux",
    "TCP/IP Networking",
    "SSH",
    "FTP"
  ],

  challenges:
    "One of the biggest challenges was understanding how different enumeration tools complement each other during an assessment. Interpreting scan results, identifying exposed services, troubleshooting connectivity between virtual machines, and documenting findings required patience and a methodical approach.",

  learnings:
    "This lab strengthened my understanding of network reconnaissance, port scanning, service detection, web enumeration, Linux environments, and virtual lab setup. It also taught me the importance of systematic information gathering before attempting deeper security analysis and reinforced responsible, ethical testing practices.",

  githubUrl: undefined,

  demoUrl: undefined,

  imageUrl: undefined
}


];

export const certificationsData: Certification[] = [
  // TODO: Add your actual certifications here. Do not invent certificates.
  // {
  //   name: "Certification Name Placeholder (e.g., CompTIA Security+)",
  //   issuer: "Issuer Organization (e.g., CompTIA / Cisco)",
  //   issueDate: "Issue Date (e.g., June 2024)",
  //   credentialUrl: "https://example.com", // Optional verification link
  //   downloadUrl: undefined // Optional PDF download link
  // },
  // {
  //   name: "Certification Name Placeholder (e.g., CCNA)",
  //   issuer: "Issuer Organization (e.g., Cisco)",
  //   issueDate: "Issue Date (e.g., Jan 2024)",
  //   credentialUrl: "https://example.com",
  //   downloadUrl: undefined
  // }
];

export const contactInfo: ContactInfo = {
  email: "ankursingh9408@gmail.com", // TODO: Update with your professional email address
  github: "https://github.com/ankur2312speci", // TODO: Update with your GitHub profile link
  linkedin: "https://linkedin.com/in", // TODO: Update with your LinkedIn profile link
  location: "India", // TODO: Update with your location
};
