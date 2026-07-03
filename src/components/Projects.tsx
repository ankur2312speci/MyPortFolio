"use client";

import { projectsData } from "@/data/portfolioData";
import { Github, Filter, BookOpen, Layers, ShieldCheck, X, Activity, Server, Database, Terminal, Cpu, Layout, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Projects() {
  const [selectedTech, setSelectedTech] = useState<string>("All");
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  // Extract all unique technologies from project list
  const allTechs = ["All", ...Array.from(new Set(projectsData.flatMap((p) => p.technologies)))];

  const filteredProjects = selectedTech === "All"
    ? projectsData
    : projectsData.filter((p) => p.technologies.includes(selectedTech));

  const activeProject = projectsData.find((p) => p.id === activeProjectId);

  // 1. High-fidelity Interactive SaaS Architecture SVG Diagram
  const renderSaaSArchitecture = () => {
    return (
      <div className="w-full h-full min-h-[340px] md:min-h-[400px] relative overflow-hidden bg-card/25 backdrop-blur-md rounded-3xl border border-primary/10 p-6 flex flex-col justify-between group/diagram select-none">
        {/* Abstract structural grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.015)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
        
        <div className="flex justify-between items-center z-10">
          <span className="font-mono text-[9px] font-bold text-accent uppercase tracking-widest flex items-center gap-1.5">
            <Activity className="h-3.5 w-3.5 text-accent animate-pulse" />
            <span>ARCHITECTURE: FULL_STACK_SAAS</span>
          </span>
          <span className="text-[8px] font-mono text-muted-foreground/60">NODE_GATEWAY_V1</span>
        </div>

        {/* SVG Drawing area */}
        <svg viewBox="0 0 400 240" className="w-full h-full z-10 mt-4" xmlns="http://www.w3.org/2000/svg">
          {/* Connecting Path: Client -> Server */}
          <path id="saas-path-1" d="M 60 120 Q 130 50 200 120" fill="none" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3" />
          {/* Connecting Path: Server -> DB */}
          <path id="saas-path-2" d="M 200 120 Q 270 190 340 120" fill="none" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3" />
          
          {/* Packet Flow Dots */}
          <circle r="3" fill="var(--primary)">
            <animateMotion dur="3.5s" repeatCount="indefinite">
              <mpath href="#saas-path-1" />
            </animateMotion>
          </circle>
          <circle r="3" fill="var(--accent)">
            <animateMotion dur="2.8s" repeatCount="indefinite">
              <mpath href="#saas-path-2" />
            </animateMotion>
          </circle>

          {/* Node 1: Client Front-End (Vite/React) */}
          <g className="cursor-pointer">
            <circle cx="60" cy="120" r="22" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.2" />
            <circle cx="60" cy="120" r="16" fill="var(--primary)" fillOpacity="0.04" />
            <g transform="translate(50, 110) scale(0.8)">
              <Layout className="h-6 w-6 text-primary" strokeWidth="1.8" />
            </g>
            <text x="60" y="160" textAnchor="middle" fill="var(--foreground)" fontSize="8" fontFamily="monospace" fontWeight="bold">VITE / REACT</text>
          </g>

          {/* Node 2: Server Gateway (Node/Express/JWT) */}
          <g className="cursor-pointer">
            <circle cx="200" cy="120" r="26" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.8" />
            <circle cx="200" cy="120" r="20" fill="var(--primary)" fillOpacity="0.08" />
            <g transform="translate(188, 108) scale(0.9)">
              <Server className="h-6 w-6 text-primary" strokeWidth="1.8" />
            </g>
            <text x="200" y="162" textAnchor="middle" fill="var(--foreground)" fontSize="8" fontFamily="monospace" fontWeight="bold">EXPRESS API</text>
          </g>

          {/* Node 3: Database Node (MongoDB Atlas) */}
          <g className="cursor-pointer">
            <circle cx="340" cy="120" r="22" fill="var(--card)" stroke="var(--accent)" strokeWidth="1.2" />
            <circle cx="340" cy="120" r="16" fill="var(--accent)" fillOpacity="0.04" />
            <g transform="translate(330, 110) scale(0.8)">
              <Database className="h-6 w-6 text-accent" strokeWidth="1.8" />
            </g>
            <text x="340" y="160" textAnchor="middle" fill="var(--foreground)" fontSize="8" fontFamily="monospace" fontWeight="bold">MONGODB DB</text>
          </g>
        </svg>

        <div className="flex justify-between items-center z-10 font-mono text-[8px] text-muted-foreground/60 border-t border-border/30 pt-3">
          <span>PORT: 3000 &rarr; REST_API</span>
          <span>STATUS: SECURE_TUNNEL</span>
        </div>
      </div>
    );
  };

  // 2. High-fidelity Interactive Security Lab Topology SVG Diagram
  const renderLabTopology = () => {
    return (
      <div className="w-full h-full min-h-[340px] md:min-h-[400px] relative overflow-hidden bg-card/25 backdrop-blur-md rounded-3xl border border-accent/10 p-6 flex flex-col justify-between group/diagram select-none">
        {/* Abstract structural grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.015)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
        
        <div className="flex justify-between items-center z-10">
          <span className="font-mono text-[9px] font-bold text-primary uppercase tracking-widest flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-primary animate-pulse" />
            <span>TOPOLOGY: AUDIT_VMWARE_NET</span>
          </span>
          <span className="text-[8px] font-mono text-muted-foreground/60">SUBNET_VLAN_10</span>
        </div>

        {/* SVG Drawing area */}
        <svg viewBox="0 0 400 240" className="w-full h-full z-10 mt-4" xmlns="http://www.w3.org/2000/svg">
          {/* Connection Lines (Kali -> VM Switch -> Metasploitable) */}
          <path id="lab-path-1" d="M 70 120 L 200 120" fill="none" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3" />
          <path id="lab-path-2" d="M 200 120 L 330 120" fill="none" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3" />

          {/* Packet Flow dots */}
          <circle r="3" fill="var(--accent)">
            <animateMotion dur="2s" repeatCount="indefinite">
              <mpath href="#lab-path-1" />
            </animateMotion>
          </circle>
          <circle r="3" fill="var(--primary)">
            <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.5s">
              <mpath href="#lab-path-2" />
            </animateMotion>
          </circle>

          {/* Node 1: Kali Attacker Node */}
          <g className="cursor-pointer">
            <circle cx="70" cy="120" r="22" fill="var(--card)" stroke="var(--accent)" strokeWidth="1.2" />
            <circle cx="70" cy="120" r="16" fill="var(--accent)" fillOpacity="0.04" />
            <g transform="translate(60, 110) scale(0.8)">
              <Terminal className="h-6 w-6 text-accent" strokeWidth="1.8" />
            </g>
            <text x="70" y="160" textAnchor="middle" fill="var(--foreground)" fontSize="8" fontFamily="monospace" fontWeight="bold">KALI AUDIT</text>
          </g>

          {/* Node 2: Firewall / Virtual Switch */}
          <g className="cursor-pointer">
            <circle cx="200" cy="120" r="26" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.8" />
            <circle cx="200" cy="120" r="20" fill="var(--primary)" fillOpacity="0.08" />
            <g transform="translate(188, 108) scale(0.9)">
              <Lock className="h-6 w-6 text-primary" strokeWidth="1.8" />
            </g>
            <text x="200" y="162" textAnchor="middle" fill="var(--foreground)" fontSize="8" fontFamily="monospace" fontWeight="bold">VM_SWITCH</text>
          </g>

          {/* Node 3: Metasploitable Vulnerable VM */}
          <g className="cursor-pointer">
            <circle cx="330" cy="120" r="22" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.2" />
            <circle cx="330" cy="120" r="16" fill="var(--primary)" fillOpacity="0.04" />
            <g transform="translate(320, 110) scale(0.8)">
              <Cpu className="h-6 w-6 text-primary" strokeWidth="1.8" />
            </g>
            <text x="330" y="160" textAnchor="middle" fill="var(--foreground)" fontSize="8" fontFamily="monospace" fontWeight="bold">TARGET VM</text>
          </g>
        </svg>

        <div className="flex justify-between items-center z-10 font-mono text-[8px] text-muted-foreground/60 border-t border-border/30 pt-3">
          <span>SUBNET: 192.168.1.0/24</span>
          <span>IDS: DEPLOYED_VIRTUAL</span>
        </div>
      </div>
    );
  };

  // 3. High-fidelity Interactive CipherNet E2EE Social Platform SVG Diagram
  const renderCipherNet = () => {
    return (
      <div className="w-full h-full min-h-[340px] md:min-h-[400px] relative overflow-hidden bg-card/25 backdrop-blur-md rounded-3xl border border-primary/10 p-6 flex flex-col justify-between group/diagram select-none">
        {/* Abstract structural grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.015)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
        
        <div className="flex justify-between items-center z-10">
          <span className="font-mono text-[9px] font-bold text-accent uppercase tracking-widest flex items-center gap-1.5">
            <Activity className="h-3.5 w-3.5 text-accent animate-pulse" />
            <span>ARCHITECTURE: CLIENT_SIDE_E2EE_ORCHESTRATION</span>
          </span>
          <span className="text-[8px] font-mono text-muted-foreground/60">SECURE_RELAY_V1</span>
        </div>

        {/* SVG Drawing area */}
        <svg viewBox="0 0 400 240" className="w-full h-full z-10 mt-4" xmlns="http://www.w3.org/2000/svg">
          {/* Paths */}
          <path id="cipher-path-1" d="M 60 120 L 200 120" fill="none" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3" />
          <path id="cipher-path-2" d="M 200 120 L 340 120" fill="none" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3" />
          
          {/* Animated packets */}
          <circle r="3.5" fill="var(--primary)">
            <animateMotion dur="2.5s" repeatCount="indefinite">
              <mpath href="#cipher-path-1" />
            </animateMotion>
          </circle>
          <circle r="3" fill="var(--accent)">
            <animateMotion dur="2.0s" repeatCount="indefinite">
              <mpath href="#cipher-path-2" />
            </animateMotion>
          </circle>

          {/* Node 1: Vite / React (Web Crypto & IndexedDB) */}
          <g className="cursor-pointer">
            <circle cx="60" cy="120" r="22" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.2" />
            <circle cx="60" cy="120" r="16" fill="var(--primary)" fillOpacity="0.04" />
            <g transform="translate(50, 110) scale(0.8)">
              <Lock className="h-6 w-6 text-primary" strokeWidth="1.8" />
            </g>
            <text x="60" y="160" textAnchor="middle" fill="var(--foreground)" fontSize="8" fontFamily="monospace" fontWeight="bold">VITE / REACT</text>
            <text x="60" y="172" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6" fontFamily="monospace">WEB CRYPTO / IDB</text>
          </g>

          {/* Node 2: Express API (Signaling / Metadata Relay) */}
          <g className="cursor-pointer">
            <circle cx="200" cy="120" r="26" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.8" />
            <circle cx="200" cy="120" r="20" fill="var(--primary)" fillOpacity="0.08" />
            <g transform="translate(188, 108) scale(0.9)">
              <Server className="h-6 w-6 text-primary" strokeWidth="1.8" />
            </g>
            <text x="200" y="162" textAnchor="middle" fill="var(--foreground)" fontSize="8" fontFamily="monospace" fontWeight="bold">EXPRESS API</text>
            <text x="200" y="174" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6" fontFamily="monospace">SOCKET.IO SIGNAL</text>
          </g>

          {/* Node 3: MongoDB Database (Blind Ciphertext Store) */}
          <g className="cursor-pointer">
            <circle cx="340" cy="120" r="22" fill="var(--card)" stroke="var(--accent)" strokeWidth="1.2" />
            <circle cx="340" cy="120" r="16" fill="var(--accent)" fillOpacity="0.04" />
            <g transform="translate(330, 110) scale(0.8)">
              <Database className="h-6 w-6 text-accent" strokeWidth="1.8" />
            </g>
            <text x="340" y="160" textAnchor="middle" fill="var(--foreground)" fontSize="8" fontFamily="monospace" fontWeight="bold">MONGODB DB</text>
            <text x="340" y="172" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6" fontFamily="monospace">BLIND STORE</text>
          </g>
        </svg>

        <div className="flex justify-between items-center z-10 font-mono text-[8px] text-muted-foreground/60 border-t border-border/30 pt-3">
          <span>PORT: 5173 / 5000 &rarr; REST &amp; WS</span>
          <span>STATUS: ZERO_TRUST_TUNNEL</span>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="projects" 
      className="py-[140px] px-[clamp(32px,6vw,96px)] border-b border-border"
    >
      {/* Widescreen Outer Wrapper */}
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-mono tracking-widest text-primary uppercase mb-2">04. Works</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">Projects</h2>
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mt-3 rounded-full" />
          </div>

          {/* Technology Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-medium text-muted-foreground flex items-center gap-1.5 mr-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter:</span>
            </span>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium cursor-pointer transition-colors ${
                  selectedTech === tech
                    ? "bg-primary/10 border border-primary text-primary"
                    : "bg-muted/30 border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Alternating Editorial Case Studies List */}
        <div className="flex flex-col gap-28 md:gap-36">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isFeatured ? "border-b border-border/30 pb-20 md:pb-28" : ""
                }`}
              >
                {/* Visual Blueprint / Diagram (Left if odd, Right if even) */}
                <div className={`lg:col-span-5 w-full ${!isEven ? "lg:order-1" : "lg:order-2"}`}>
                  {project.id === "saas-project-management-platform"
                    ? renderSaaSArchitecture()
                    : project.id === "cipher-net-e2ee-social-platform"
                    ? renderCipherNet()
                    : renderLabTopology()
                  }
                </div>

                {/* Details side (Left if even, Right if odd) */}
                <div className={`lg:col-span-7 flex flex-col gap-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-primary font-bold">{`0${idx + 1}.`}</span>
                    <span className="text-muted-foreground uppercase">{project.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3.5xl font-extrabold tracking-tight text-foreground font-sans">
                    {project.title}
                  </h3>

                  {/* Storytelling segments */}
                  <div className="text-sm md:text-base text-muted-foreground leading-[1.7] font-sans flex flex-col gap-5 max-w-[660px]">
                    <div>
                      <strong className="text-foreground text-xs font-mono uppercase tracking-widest block mb-1.5">
                        Context &amp; Motivation
                      </strong>
                      <p>{project.motivation}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                      <div>
                        <strong className="text-foreground text-xs font-mono uppercase tracking-widest block mb-1.5">
                          Problem statement
                        </strong>
                        <p className="text-xs leading-relaxed">
                          {project.id === "saas-project-management-platform" 
                            ? "Overcoming crud constraints: secure user credential flows, cross-resource role checks (auth), and managing API status errors." 
                            : project.id === "cipher-net-e2ee-social-platform"
                            ? "Securing user communication on the web: traditional social networks trust the server with unencrypted messages, exposing chats to database breaches and server leaks."
                            : "Understanding vulnerabilities in isolated networks without risks: reconnaissance, enumeration layers, and local virtual host structures."
                          }
                        </p>
                      </div>
                      <div>
                        <strong className="text-foreground text-xs font-mono uppercase tracking-widest block mb-1.5">
                          Architectural Solution
                        </strong>
                        <p className="text-xs leading-relaxed">
                          {project.id === "saas-project-management-platform"
                            ? "Designed Express middleware checks for admin limits, combined with Mongo Atlas schema validators and custom hooks."
                            : project.id === "cipher-net-e2ee-social-platform"
                            ? "Engineered a client-side cryptography pipeline using ECDH P-256 for asymmetric key exchange, AES-256-GCM for symmetric message encryption, and WebRTC for direct P2P streaming."
                            : "Constructed isolated virtual network adapters inside VMware, isolating Kali audits from guest targets."
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 8).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono bg-muted/40 text-muted-foreground px-2.5 py-1 rounded-md border border-border/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 8 && (
                      <span className="text-[10px] font-mono text-muted-foreground/60 px-1 py-1">
                        +{project.technologies.length - 8} more
                      </span>
                    )}
                  </div>

                  {/* Action triggers */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      onClick={() => setActiveProjectId(project.id)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold cursor-pointer shadow-md shadow-primary/10 transition-colors w-fit"
                    >
                      <span>Explore Project</span>
                      <BookOpen className="h-4 w-4" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-border bg-card hover:bg-muted text-foreground text-xs font-semibold cursor-pointer transition-colors"
                      >
                        <Github className="h-4.5 w-4.5 text-muted-foreground" />
                        <span>Source Repository</span>
                      </a>
                    )}
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Project Detail Overlay (Modal Drawer) */}
        <AnimatePresence>
          {activeProjectId && activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-full max-w-3xl max-h-[85vh] rounded-3xl border border-border bg-card shadow-2xl overflow-y-auto flex flex-col"
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between z-10">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                      Project Details
                    </span>
                    <h3 className="text-xl font-bold text-foreground font-sans">{activeProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setActiveProjectId(null)}
                    className="p-2 rounded-full border border-border bg-muted/40 hover:bg-muted/90 text-foreground cursor-pointer transition-colors"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-8 flex flex-col gap-6">
                  {/* Overview */}
                  <div>
                    <h4 className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Layers className="h-4 w-4 text-primary" />
                      <span>Overview &amp; Objectives</span>
                    </h4>
                    <p className="text-sm text-foreground/95 leading-relaxed bg-muted/15 p-4.5 rounded-2xl border border-border/40 font-mono">
                      {activeProject.overview}
                    </p>
                  </div>

                  {/* E2EE Key Exchange Sequence Timeline for CipherNet */}
                  {activeProject.id === "cipher-net-e2ee-social-platform" && (
                    <div className="border-t border-border pt-6">
                      <h4 className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-1.5">
                        <Lock className="h-4 w-4 text-accent animate-pulse" />
                        <span>E2EE Key Exchange Lifecycle &amp; Cryptography</span>
                      </h4>
                      
                      {/* Responsive E2EE Sequence Visualization */}
                      <div className="bg-muted/10 border border-border/60 rounded-3xl p-5 md:p-6 flex flex-col gap-6 font-mono text-[10px] md:text-xs overflow-x-auto scrollbar-thin">
                        <div className="min-w-[620px] flex flex-col gap-6">
                          {/* Actor Columns */}
                          <div className="grid grid-cols-3 text-center border-b border-border/30 pb-3 font-bold">
                            <span className="text-primary tracking-wide">ALICE (CLIENT)</span>
                            <span className="text-muted-foreground tracking-wide">NODE.JS SERVER (BLIND RELAY)</span>
                            <span className="text-accent tracking-wide">BOB (CLIENT)</span>
                          </div>

                          {/* Step 1: Alice KeyGen */}
                          <div className="flex flex-col gap-2 relative">
                            <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                              <span className="bg-primary/10 border border-primary/20 px-2 py-0.5 rounded text-foreground">ECDH P-256 KeyGen (Priv stored in IndexedDB)</span>
                              <span className="text-primary font-bold animate-pulse">&rarr; Uploads Public JWK Key &rarr;</span>
                              <span className="bg-muted/30 border border-border/40 px-2 py-0.5 rounded">Stores Alice&apos;s Public JWK</span>
                            </div>
                            <div className="h-0.5 bg-gradient-to-r from-primary to-border/40 relative">
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
                            </div>
                          </div>

                          {/* Step 2: Bob KeyGen */}
                          <div className="flex flex-col gap-2 relative">
                            <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                              <span className="bg-muted/30 border border-border/40 px-2 py-0.5 rounded">Stores Bob&apos;s Public JWK</span>
                              <span className="text-accent font-bold animate-pulse">&larr; Uploads Public JWK Key &larr;</span>
                              <span className="bg-accent/10 border border-accent/20 px-2 py-0.5 rounded text-foreground">ECDH P-256 KeyGen (Priv stored in IndexedDB)</span>
                            </div>
                            <div className="h-0.5 bg-gradient-to-l from-accent to-border/40 relative">
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full" />
                            </div>
                          </div>

                          {/* Step 3: DH Derivation & Symmetric Key Agreement */}
                          <div className="flex flex-col gap-3 pt-2">
                            <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                              <span className="bg-primary/5 px-2 py-0.5 rounded">3. Requests Bob&apos;s Public Key</span>
                              <span className="text-primary">&rarr; Fetch Req &rarr;</span>
                              <span className="bg-muted/20 px-2 py-0.5 rounded">Retrieves from MongoDB</span>
                            </div>
                            <div className="h-0.5 bg-gradient-to-r from-primary via-primary/50 to-border/20 relative">
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                            </div>
                            <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                              <span className="bg-primary/20 px-2.5 py-1 rounded text-foreground font-bold border border-primary/30">Derives Shared AES-256 Secret Key</span>
                              <span className="text-primary font-bold">&larr; Sends Bob&apos;s Public JWK &larr;</span>
                              <span className="bg-muted/50 px-2 py-0.5 rounded">Relays Public JWK</span>
                            </div>
                            <div className="h-0.5 bg-gradient-to-l from-primary via-primary/50 to-border/20 relative">
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                            </div>
                          </div>

                          {/* Step 4: Encrypted Socket Relay & Decryption */}
                          <div className="flex flex-col gap-3 pt-2">
                            <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                              <span className="bg-primary/5 px-2 py-0.5 rounded">4. Encrypts Msg (AES-GCM)</span>
                              <span className="text-primary font-bold">&rarr; Sends payload {`{ ciphertext, iv }`} &rarr;</span>
                              <span className="bg-muted/20 px-2 py-0.5 rounded">Metadata Relay (Server is Blind)</span>
                            </div>
                            <div className="h-0.5 bg-gradient-to-r from-primary to-accent relative">
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full" />
                            </div>
                            <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                              <span className="text-muted-foreground/60">(Server saves encrypted blob in DB)</span>
                              <span className="text-accent font-bold">&rarr; Broadcast payload via Socket.IO &rarr;</span>
                              <span className="bg-accent/20 px-2.5 py-1 rounded text-foreground font-bold border border-accent/30 font-sans">Decrypts plaintext in Sandbox</span>
                            </div>
                            <div className="h-0.5 bg-gradient-to-r from-border/40 to-accent relative">
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full" />
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* Technical Specs List */}
                      <div className="mt-4 bg-muted/20 border border-border/60 p-4.5 rounded-2xl flex flex-col gap-2">
                        <strong className="text-foreground text-xs uppercase tracking-wider">🛡️ Cryptographic Implementation Details:</strong>
                        <ul className="list-disc list-inside text-xs text-muted-foreground flex flex-col gap-1.5 leading-relaxed font-sans">
                          <li><strong>Asymmetric Key Negotiation</strong>: Generates an <strong>ECDH P-256</strong> key pair client-side upon signup.</li>
                          <li><strong>Secure Hardware-backed Storage</strong>: Private key is stored locally in <strong>IndexedDB</strong> (`CipherNetE2EE`) and marked <code>extractable: false</code> to prevent exfiltration.</li>
                          <li><strong>Diffie-Hellman Key Exchange</strong>: Performs client-side ECDH key agreement to derive a shared <strong>AES-256 symmetric session key</strong>.</li>
                          <li><strong>AES-256-GCM Encryption</strong>: Messages are encrypted with a unique 12-byte IV before transmission. The server remains blind to plaintext data.</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Architecture Features */}
                  <div>
                    <h4 className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      <span>Key Architectures &amp; Features</span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeProject.features.map((feat, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground bg-muted/30 border border-border/50 p-3 rounded-xl flex items-start gap-2 leading-relaxed">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Layer */}
                  <div>
                    <h4 className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Technologies Layer</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1.5 rounded-xl border border-border bg-muted/20 text-muted-foreground text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenge / Learnings */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border">
                    <div>
                      <h5 className="font-bold text-sm text-foreground mb-2 font-sans">Technical Challenges</h5>
                      <p className="text-xs text-muted-foreground leading-[1.6]">
                        {activeProject.challenges}
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-foreground mb-2 font-sans">Key Learnings</h5>
                      <p className="text-xs text-muted-foreground leading-[1.6]">
                        {activeProject.learnings}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="sticky bottom-0 bg-card border-t border-border px-6 py-4 flex flex-wrap gap-3 justify-end">
                  <button
                    onClick={() => setActiveProjectId(null)}
                    className="px-5 py-2.5 rounded-full border border-border bg-muted/20 hover:bg-muted/70 text-foreground text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Close
                  </button>
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-muted/20 hover:bg-muted/70 text-foreground text-xs font-semibold cursor-pointer transition-colors"
                    >
                      <Github className="h-4 w-4 text-muted-foreground" />
                      <span>Repository</span>
                    </a>
                  )}
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
export default Projects;
