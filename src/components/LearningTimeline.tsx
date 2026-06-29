"use client";

import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// The 7 specific milestones requested by the user
const roadmapMilestones = [
  {
    id: "foundations",
    year: "2022",
    title: "Programming Foundations",
    emoji: "💻",
    desc: "Began fundamental training in structured object-oriented programming, logical algorithms, memory allocation, and data structures.",
    skills: ["Python", "C / C++", "Object-Oriented Programming", "Logic Gates"]
  },
  {
    id: "networking",
    year: "2022 - 2023",
    title: "Networking Basics",
    emoji: "🌐",
    desc: "Discovered transport protocols. Mastered the TCP/IP suite, DNS setups, VLAN division, subnetting, and packet structure analysis.",
    skills: ["TCP/IP Suite", "DNS & Routing", "VLANs & Subnetting", "Wireshark"]
  },
  {
    id: "linux",
    year: "2023",
    title: "Linux Command Line",
    emoji: "🐧",
    desc: "Learned Unix-based operating systems. Focused on Bash scripting, user privileges management, cron automation, and server hardening.",
    skills: ["Linux Administration", "Shell Scripting (Bash)", "SSH Secure Config", "FTP Server Setup"]
  },
  {
    id: "security",
    year: "2023 - 2024",
    title: "Cyber Security Labs",
    emoji: "🛡️",
    desc: "Constructed local virtualization laboratories to practice service discovery, directory enumeration, vulnerability assessment, and auditing.",
    skills: ["Kali Linux", "Metasploitable 2", "VMware Workstation", "Nmap", "Nikto", "Gobuster"]
  },
  {
    id: "fullstack",
    year: "2024",
    title: "Full Stack Development",
    emoji: "⚙️",
    desc: "Integrated front-end dashboards with backend server logic. Built secure SaaS application databases, password encryption, and JWT handlers.",
    skills: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT Auth"]
  },
  {
    id: "devops",
    year: "2024 - Present",
    title: "Cloud & DevOps Labs",
    emoji: "🐳",
    desc: "Began containerizing systems. Provisioned hypervisors, configured Docker file systems, and established Git/GitHub automation flows.",
    skills: ["Docker Containerization", "Proxmox VE", "ESXi Virtualization", "Git", "GitHub Actions"]
  },
  {
    id: "goals",
    year: "Future Target",
    title: "Future Security Goals",
    emoji: "🚀",
    desc: "Aiming to specialize in DevSecOps orchestration, designing automated malware detection platforms, and managing secure cloud routing systems.",
    skills: ["Kubernetes", "DevSecOps", "Cloud Security Architectures", "Intrusion Detection"]
  }
];

export function LearningTimeline() {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>("foundations");

  const activeMilestone = roadmapMilestones.find(m => m.id === selectedMilestoneId) || roadmapMilestones[0];

  // Coordinates for the 7 checkpoints along the 1000px horizontal curved SVG roadmap line
  const desktopCheckpoints = [
    { id: "foundations", cx: 60, cy: 110 },
    { id: "networking", cx: 210, cy: 60 },
    { id: "linux", cx: 360, cy: 160 },
    { id: "security", cx: 510, cy: 80 },
    { id: "fullstack", cx: 660, cy: 140 },
    { id: "devops", cx: 810, cy: 70 },
    { id: "goals", cx: 940, cy: 110 }
  ];

  return (
    <section 
      id="learning" 
      className="py-[140px] px-[clamp(32px,6vw,96px)] border-b border-border bg-muted/10"
    >
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-primary uppercase mb-2">03. Milestones</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">Learning Journey</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mt-3 rounded-full" />
        </div>

        {/* 1. Desktop Curved Roadmap (Hidden on Mobile/Tablet) */}
        <div className="hidden lg:flex flex-col gap-10 items-center justify-center relative select-none w-full bg-card/25 border border-border/60 rounded-3xl p-8 shadow-sm">
          
          <div className="w-full h-[220px] relative">
            {/* The SVG Track Line */}
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 1000 220" 
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Curved winding path */}
              <path 
                id="roadmap-track"
                d="M 60 110 C 130 50 160 50 210 60 C 270 70 300 200 360 160 C 420 120 450 50 510 80 C 570 110 600 170 660 140 C 720 110 750 50 810 70 C 870 90 900 110 940 110" 
                fill="none" 
                stroke="var(--border)" 
                strokeWidth="2" 
                strokeOpacity="0.5"
              />

              {/* Glowing Mint Track Overlay */}
              <path 
                d="M 60 110 C 130 50 160 50 210 60 C 270 70 300 200 360 160 C 420 120 450 50 510 80 C 570 110 600 170 660 140 C 720 110 750 50 810 70 C 870 90 900 110 940 110" 
                fill="none" 
                stroke="var(--primary)" 
                strokeWidth="1.5" 
                strokeOpacity="0.25"
                strokeDasharray="5 5"
              />

              {/* Animated data packet traveling the curved track */}
              <circle r="3" fill="var(--accent)" className="shadow-[0_0_8px_var(--accent)]">
                <animateMotion dur="6s" repeatCount="indefinite" path="M 60 110 C 130 50 160 50 210 60 C 270 70 300 200 360 160 C 420 120 450 50 510 80 C 570 110 600 170 660 140 C 720 110 750 50 810 70 C 870 90 900 110 940 110" />
              </circle>

              {/* Interactive Checkpoint circle elements */}
              {desktopCheckpoints.map((pt) => {
                const milestone = roadmapMilestones.find(m => m.id === pt.id)!;
                const isSelected = selectedMilestoneId === pt.id;

                return (
                  <g 
                    key={pt.id} 
                    className="cursor-pointer"
                    onClick={() => setSelectedMilestoneId(pt.id)}
                  >
                    {/* Glowing outer aura for selected checkpoint */}
                    {isSelected && (
                      <circle 
                        cx={pt.cx} 
                        cy={pt.cy} 
                        r="20" 
                        fill="var(--primary)" 
                        fillOpacity="0.08"
                        className="animate-pulse"
                      />
                    )}
                    {/* Checkpoint boundary border */}
                    <circle 
                      cx={pt.cx} 
                      cy={pt.cy} 
                      r="10" 
                      fill="var(--card)" 
                      stroke={isSelected ? "var(--primary)" : "var(--border)"} 
                      strokeWidth={isSelected ? "2.5" : "1.5"}
                      className="transition-all duration-300 hover:stroke-primary/50"
                    />
                    {/* Checkpoint inner dot */}
                    <circle 
                      cx={pt.cx} 
                      cy={pt.cy} 
                      r="4.5" 
                      fill={isSelected ? "var(--primary)" : "var(--muted-foreground)"}
                      className="transition-all duration-300"
                    />
                    {/* Interactive flag labels */}
                    <text 
                      x={pt.cx} 
                      y={pt.cy - 18} 
                      textAnchor="middle" 
                      fill={isSelected ? "var(--foreground)" : "var(--muted-foreground)"} 
                      fontSize="9" 
                      fontFamily="monospace"
                      fontWeight={isSelected ? "bold" : "normal"}
                      className="transition-all duration-200"
                    >
                      {milestone.year}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Checkpoint Emoji labels floating above nodes */}
            {desktopCheckpoints.map((pt) => {
              const milestone = roadmapMilestones.find(m => m.id === pt.id)!;
              const isSelected = selectedMilestoneId === pt.id;
              
              return (
                <div
                  key={`emoji-${pt.id}`}
                  onClick={() => setSelectedMilestoneId(pt.id)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 select-none flex items-center justify-center rounded-full h-8 w-8 text-sm ${
                    isSelected 
                      ? "scale-115 border border-primary/20 bg-card shadow-sm"
                      : "scale-90 hover:scale-100 opacity-60"
                  }`}
                  style={{ left: `${pt.cx / 10}%`, top: `${pt.cy}px` }}
                >
                  {milestone.emoji}
                </div>
              );
            })}
          </div>

          {/* Prompt banner inside bento block */}
          <span className="font-mono text-[9px] text-muted-foreground/40 uppercase tracking-widest border-t border-border/30 pt-3 w-full text-center">
            Tap a network checkpoint node to view learnings &amp; timeline data logs
          </span>
        </div>

        {/* 2. Mobile/Tablet Grid list (Vertically stacked timeline checkpoints) */}
        <div className="lg:hidden flex flex-col gap-4">
          {roadmapMilestones.map((m) => {
            const isSelected = selectedMilestoneId === m.id;

            return (
              <button
                key={m.id}
                onClick={() => setSelectedMilestoneId(m.id)}
                className={`w-full p-5 rounded-2xl border text-left flex items-center justify-between gap-4 transition-all ${
                  isSelected 
                    ? "border-primary/20 bg-primary/[0.02] shadow-sm"
                    : "border-border bg-card/45"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl border border-border/80 bg-card flex items-center justify-center text-base shrink-0">
                    {m.emoji}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{m.title}</h4>
                    <span className="text-[10px] font-mono text-muted-foreground mt-0.5 block">{m.year}</span>
                  </div>
                </div>
                <ArrowRight className={`h-4 w-4 text-muted-foreground transition-transform ${isSelected ? "rotate-90 text-primary" : ""}`} />
              </button>
            );
          })}
        </div>

        {/* 3. Detailed Milestone Expansion Panel (Responsive layout below path) */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMilestoneId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8 rounded-3xl border border-primary/10 bg-card/25 backdrop-blur-md shadow-sm flex flex-col md:flex-row justify-between gap-8 group hover:border-primary/15 transition-all"
            >
              {/* Left detail area */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-3.5 border-b border-border/30 pb-3">
                  <span className="text-2xl">{activeMilestone.emoji}</span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-sans">
                      {activeMilestone.title}
                    </h3>
                    <span className="text-xs font-mono text-primary flex items-center gap-1 mt-0.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Timeline log: {activeMilestone.year}</span>
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed font-sans max-w-[700px]">
                  {activeMilestone.desc}
                </p>
              </div>

              {/* Right skill-acquisition column */}
              <div className="w-full md:w-[320px] shrink-0 flex flex-col gap-3.5 md:border-l md:border-border/40 md:pl-8">
                <h4 className="font-mono text-[9px] font-bold text-accent uppercase tracking-widest flex items-center gap-1.5 border-b border-border/30 pb-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Modules &amp; Technology Acquired</span>
                </h4>
                
                <div className="flex flex-wrap gap-1.5">
                  {activeMilestone.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg border border-border/80 bg-muted/20 font-mono text-[10px] text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
export default LearningTimeline;
