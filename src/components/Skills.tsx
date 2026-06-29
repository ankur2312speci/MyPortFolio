"use client";

import { skillCategories } from "@/data/portfolioData";
import { Shield, Network, Code, Server, Layout, Database, Terminal, Settings, Cpu, Radio, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// In-depth diagnostic details for all of Ankur's actual technologies
const techDetails: Record<string, { desc: string; exp: string; related: string[]; projects: string[] }> = {
  // Programming Languages
  "Python": { desc: "General-purpose language used for writing threat intelligence tools, vulnerability scanners, and automated packet monitoring scripts.", exp: "3+ Years (Active)", related: ["Shell Scripting (Bash)", "C / C++"], projects: ["Security Lab Reconnaissance Automation"] },
  "TypeScript": { desc: "Strongly typed superset of JavaScript used to develop secure, type-safe full-stack software dashboards and server APIs.", exp: "2 Years", related: ["React", "Node.js", "Express.js"], projects: ["SaaS Project Management Platform"] },
  "JavaScript": { desc: "Core scripting language utilized for asynchronous client-side routing, event handlers, and lightweight dashboard animations.", exp: "2 Years", related: ["TypeScript", "React"], projects: ["SaaS Project Management Platform"] },
  "C / C++": { desc: "Systems programming language used to study low-level memory control, buffer management, and structural OS architectures.", exp: "1.5 Years", related: ["Python", "Linux Administration"], projects: ["Academic OS Kernel coursework"] },
  "Shell Scripting (Bash)": { desc: "Command-line script automation for quick system deployments, backups, security updates, and automated security cron triggers.", exp: "3 Years", related: ["Linux Administration", "Python"], projects: ["Metasploitable Lab setup automation"] },

  // Frontend
  "React": { desc: "Modern frontend SPA library used for modular, declarative dashboard view layouts and complex state flows.", exp: "2 Years", related: ["Vite", "Tailwind CSS", "TypeScript"], projects: ["SaaS Project Management Platform"] },
  "Vite": { desc: "Ultra-fast frontend bundling tool used to compile and hot-reload local Dev server assets quickly and cleanly.", exp: "2 Years", related: ["React", "TypeScript"], projects: ["SaaS Project Management Platform"] },
  "Tailwind CSS": { desc: "Utility-first CSS styling system utilized to craft custom, highly original, fully responsive component layouts.", exp: "2 Years", related: ["React", "HTML5 & CSS3"], projects: ["SaaS Project Management Platform"] },
  "HTML5 & CSS3": { desc: "Standard structuring and layout markup languages used to build semantic, fully accessible page layouts.", exp: "3 Years", related: ["Tailwind CSS", "React"], projects: ["SaaS Project Management Platform"] },

  // Backend & APIs
  "Node.js": { desc: "Server runtime used to construct scalable, non-blocking asynchronous APIs and secure system utilities.", exp: "2 Years", related: ["Express.js", "REST APIs", "JWT"], projects: ["SaaS Project Management Platform"] },
  "Express.js": { desc: "Minimalist server framework used to design API routing structures, request handlers, and middleware checks.", exp: "2 Years", related: ["Node.js", "REST APIs", "JWT"], projects: ["SaaS Project Management Platform"] },
  "REST APIs": { desc: "Structured architectural endpoints designed for client-server data transfer using standardized JSON routing payloads.", exp: "2 Years", related: ["Express.js", "Node.js"], projects: ["SaaS Project Management Platform"] },

  // Databases
  "MongoDB Atlas": { desc: "Cloud-hosted NoSQL document database used to store client profiles, project schema indexes, and user records.", exp: "1.5 Years", related: ["Mongoose", "SQLite"], projects: ["SaaS Project Management Platform"] },
  "Mongoose": { desc: "Object data modeling library providing structured schema enforcement, validators, and relationships inside MongoDB collections.", exp: "1.5 Years", related: ["MongoDB Atlas"], projects: ["SaaS Project Management Platform"] },
  "SQLite": { desc: "Serverless relational database engine used for local caching, configuration stores, and lightweight development tasks.", exp: "2 Years", related: ["MongoDB Atlas"], projects: ["Local Lab configuration caches"] },

  // Cyber Security
  "Vulnerability Assessment": { desc: "Reconnaissance audits to discover exposed service versions, weak passwords, and misconfigured ports on target subnets.", exp: "2 Years", related: ["Nmap", "Nikto", "OWASP Top 10"], projects: ["Metasploitable Security Lab audits"] },
  "Firewall Configuration": { desc: "Setting up local rule groups, blocking malicious traffic blocks, and creating network access control lists.", exp: "2 Years", related: ["TCP/IP Suite", "VLANs & Subnetting"], projects: ["Metasploitable Lab virtual network security"] },
  "Threat Analysis": { desc: "Examining network logs and vulnerability outputs to detect potential system exploits and classify risk levels.", exp: "1.5 Years", related: ["Wireshark Packet Analysis", "Vulnerability Assessment"], projects: ["Metasploitable Security Lab scanning"] },
  "OWASP Top 10": { desc: "Security model addressing critical web application vulnerabilities like XSS, SQL Injection, and broken access controls.", exp: "2 Years", related: ["Vulnerability Assessment", "JWT"], projects: ["SaaS Project Management Platform auth checks"] },

  // Networking
  "TCP/IP Suite": { desc: "Core stack protocols (IP, TCP, UDP, ICMP) analyzed to map transport routing and secure communication paths.", exp: "3 Years", related: ["Wireshark Packet Analysis", "DNS & Routing Configuration"], projects: ["Security Lab Network Architecture"] },
  "DNS & Routing Configuration": { desc: "Orchestrating local domain names, custom routing paths, and mapping virtual gateway networks.", exp: "2 Years", related: ["TCP/IP Suite", "VLANs & Subnetting"], projects: ["Security Lab network mapping"] },
  "VLANs & Subnetting": { desc: "Segmenting IP address pools, designing subnets, and creating isolated VLAN channels for virtual lab machines.", exp: "2.5 Years", related: ["TCP/IP Suite", "Firewall Configuration"], projects: ["VMware host isolation configuration"] },
  "Wireshark Packet Analysis": { desc: "Capturing network frames and inspecting packet structures to debug connections and detect plain-text anomalies.", exp: "2 Years", related: ["TCP/IP Suite", "Threat Analysis"], projects: ["Security Lab reconnaissance scans"] },

  // Linux & Virtualization
  "Linux Administration": { desc: "Configuring user permissions, kernel settings, system service logs, security checks, and automation scripts on Linux servers.", exp: "3 Years (Active)", related: ["Shell Scripting (Bash)", "Docker Containerization"], projects: ["Kali Linux & Metasploitable 2 setups"] },
  "VMware Workstation": { desc: "Type-2 hypervisor used to host, configure, and isolate guest operating systems inside virtual subnet environments.", exp: "2 Years", related: ["Proxmox VE", "ESXi Virtualization"], projects: ["Metasploitable Security Lab"] },
  "Proxmox VE": { desc: "Bare-metal virtual environment used to orchestrate lightweight LXC containers and secure virtual machines.", exp: "1.5 Years", related: ["VMware Workstation", "ESXi Virtualization"], projects: ["Homelab infrastructure construction"] },
  "ESXi Virtualization": { desc: "Enterprise-grade bare-metal hypervisor utilized to provision, partition, and secure server resources.", exp: "1 Year", related: ["Proxmox VE", "VMware Workstation"], projects: ["Homelab secure networks mapping"] },

  // Tools & Platforms (DevOps)
  "Git / Version Control": { desc: "Distributed version control system used to track changes, manage codebase branches, and preserve history.", exp: "3 Years", related: ["GitHub"], projects: ["SaaS Project Management Platform", "Portfolio app"] },
  "GitHub": { desc: "Web-based repository host used for collaborative software reviews, code backup, and managing dev milestones.", exp: "3 Years", related: ["Git / Version Control"], projects: ["SaaS Project Management Platform", "Portfolio app"] },
  "Postman": { desc: "API platform used to test REST endpoints, verify authentication payloads, and audit backend response states.", exp: "2 Years", related: ["REST APIs", "Express.js"], projects: ["SaaS Project Management Platform APIs auditing"] },
  "Docker Containerization": { desc: "Packaging applications and backend services into isolated containers to secure host kernels and simplify deployments.", exp: "2.5 Years", related: ["Linux Administration", "Proxmox VE"], projects: ["Homelab automated containers config"] }
};

export function Skills() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Group skill categories into 9 floating ecosystem panels
  const ecosystemCategories = [
    { title: "Programming", icon: <Code className="h-4.5 w-4.5 text-primary" />, key: "Programming Languages" },
    { title: "Frontend", icon: <Layout className="h-4.5 w-4.5 text-accent" />, key: "Frontend" },
    { title: "Backend", icon: <Server className="h-4.5 w-4.5 text-primary" />, key: "Backend" },
    { title: "Databases", icon: <Database className="h-4.5 w-4.5 text-accent" />, key: "Databases" },
    { title: "Cyber Security", icon: <Shield className="h-4.5 w-4.5 text-primary" />, key: "Cyber Security" },
    { title: "Networking", icon: <Network className="h-4.5 w-4.5 text-accent" />, key: "Networking" },
    { title: "Linux", icon: <Terminal className="h-4.5 w-4.5 text-primary" />, key: "Linux & Virtualization" },
    { title: "Virtualization", icon: <Cpu className="h-4.5 w-4.5 text-accent" />, key: "Linux & Virtualization" },
    { title: "DevOps", icon: <Settings className="h-4.5 w-4.5 text-primary" />, key: "Tools & Platforms" },
  ];

  // Get skills for a particular ecosystem slot
  const getSkillsForCategory = (title: string, key: string) => {
    const matched = skillCategories.find(c => c.category.toLowerCase() === key.toLowerCase());
    if (!matched) return [];
    
    // Virtualization / Linux split
    if (title === "Linux") {
      return matched.skills.filter(s => s.name.toLowerCase().includes("linux") || s.name.toLowerCase().includes("bash"));
    }
    if (title === "Virtualization") {
      return matched.skills.filter(s => !s.name.toLowerCase().includes("linux") && !s.name.toLowerCase().includes("bash"));
    }
    
    // DevOps maps to Tools & Platforms
    return matched.skills;
  };

  const activeTechInfo = hoveredTech ? techDetails[hoveredTech] : null;

  return (
    <section id="skills" className="py-[140px] px-[clamp(32px,6vw,96px)] border-b border-border">
      {/* Widescreen container */}
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-primary uppercase mb-2">02. Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">Technology Ecosystem</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mt-3 rounded-full" />
        </div>

        {/* 12-Column Split: Ecosystem Grid Left, Inspector Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative">
          
          {/* Left Area (8/12 Columns): Floating connected category panels */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            
            {/* SVG Link lines behind the panels */}
            <div className="absolute inset-0 z-0 opacity-15 pointer-events-none hidden md:block">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Visual connectors representing network link paths between bento slots */}
                <path d="M 120 100 Q 250 100 250 200" fill="none" stroke="var(--primary)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M 380 200 C 450 100 500 300 500 200" fill="none" stroke="var(--accent)" strokeWidth="1" />
                <path d="M 250 200 L 250 400" fill="none" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>

            {ecosystemCategories.map((eco) => {
              const skills = getSkillsForCategory(eco.title, eco.key);

              return (
                <div
                  key={eco.title}
                  className="p-5.5 rounded-3xl border border-border/75 bg-card/35 backdrop-blur-sm shadow-sm transition-all hover:border-primary/15 relative z-10 flex flex-col gap-4 group"
                >
                  {/* Panel Header */}
                  <div className="flex items-center gap-2.5 border-b border-border/30 pb-2.5">
                    <div className="p-2 rounded-xl bg-muted/65 border border-border/60">
                      {eco.icon}
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider text-foreground uppercase">
                      {eco.title}
                    </span>
                  </div>

                  {/* Skills Node Chips */}
                  <div className="flex flex-wrap gap-1.5 flex-1 items-start content-start">
                    {skills.map((skill) => (
                      <button
                        key={skill.name}
                        onMouseEnter={() => setHoveredTech(skill.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className={`px-3 py-1.5 rounded-xl border border-border/80 bg-muted/15 font-mono text-[10px] cursor-default transition-all duration-200 ${
                          hoveredTech === skill.name
                            ? "border-primary/35 bg-primary/5 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:border-border-hover"
                        }`}
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Area (4/12 Columns): Interactive Technology Inspector Card */}
          <div className="lg:col-span-4 sticky top-24 z-10">
            <div className="p-6 md:p-7 rounded-3xl border border-primary/10 bg-card/25 backdrop-blur-md shadow-sm min-h-[380px] flex flex-col justify-between group hover:border-primary/20 transition-all select-none">
              
              <AnimatePresence mode="wait">
                {hoveredTech && activeTechInfo ? (
                  <motion.div
                    key={hoveredTech}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-5 flex-1 justify-between"
                  >
                    <div className="flex flex-col gap-4">
                      {/* Tech Label & Accent */}
                      <div className="flex items-center justify-between border-b border-border/30 pb-3">
                        <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1.5">
                          <Radio className="h-3.5 w-3.5 text-primary animate-pulse" />
                          <span>Ecosystem_node.scan</span>
                        </span>
                        <span className="text-[9px] font-mono text-muted-foreground font-medium uppercase bg-muted/40 border border-border/50 px-2 py-0.5 rounded">
                          Scan Active
                        </span>
                      </div>

                      {/* Tech Title */}
                      <div>
                        <h4 className="text-xl font-bold text-foreground font-sans tracking-tight">
                          {hoveredTech}
                        </h4>
                        <span className="text-[10px] font-mono text-muted-foreground block mt-0.5">
                          Familiarity: {activeTechInfo.exp}
                        </span>
                      </div>

                      {/* Tech Description */}
                      <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                        {activeTechInfo.desc}
                      </p>
                    </div>

                    {/* Meta Details */}
                    <div className="flex flex-col gap-3.5 pt-4 border-t border-border/40">
                      {/* Related Technologies */}
                      <div>
                        <span className="text-[8px] font-mono font-bold text-muted-foreground/60 uppercase tracking-widest block mb-1.5">
                          Related Node Elements
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeTechInfo.related.map((rel) => (
                            <span key={rel} className="px-2 py-1 rounded bg-muted/30 border border-border text-[9px] font-mono text-muted-foreground">
                              {rel}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Projects Using Tech */}
                      <div>
                        <span className="text-[8px] font-mono font-bold text-muted-foreground/60 uppercase tracking-widest block mb-1">
                          Integration Target
                        </span>
                        <div className="flex flex-col gap-1 font-mono text-[9px] text-foreground">
                          {activeTechInfo.projects.map((proj) => (
                            <div key={proj} className="flex items-center gap-1">
                              <span className="h-1 w-1 rounded-full bg-accent" />
                              <span>{proj}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center gap-4 py-20 flex-1"
                  >
                    <Eye className="h-8 w-8 text-muted-foreground/60 animate-pulse" />
                    <div className="flex flex-col gap-1">
                      <h4 className="font-mono text-xs font-bold text-foreground">
                        ECOSYSTEM_INSPECTOR
                      </h4>
                      <p className="text-[10px] text-muted-foreground max-w-[200px] leading-relaxed">
                        Hover any technology chip node to scan system logs and review related applications.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Status bar */}
              <div className="font-mono text-[8px] text-muted-foreground/40 text-center uppercase tracking-wider border-t border-border/30 pt-3 mt-4 shrink-0">
                Ecosys_Index_OK
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
export default Skills;
