"use client";

import { heroInfo } from "@/data/portfolioData";
import { Download, MapPin, Globe, BookOpen, Target, GraduationCap, Cpu, Layers } from "lucide-react";
import { motion } from "framer-motion";

// Specific vertical timeline milestones requested by the user
const timelineMilestones = [
  { emoji: "🎓", title: "Started Computer Science", desc: "Began fundamental training in structured programming, algorithms, and computing systems." },
  { emoji: "🌐", title: "Discovered Networking", desc: "Fascinated by network packets, TCP/IP stack routing, DNS queries, and switching." },
  { emoji: "🐧", title: "Learned Linux", desc: "Mastered shell scripting (Bash), server administration, system orchestration, and file systems." },
  { emoji: "🛡️", title: "Began Cyber Security Labs", desc: "Constructed local VMware environments to practice vulnerability assessment, recon, and defense auditing." },
  { emoji: "💻", title: "Built Full Stack Applications", desc: "Developed secure, full-stack SaaS project management pipelines with JWT auth and database modeling." },
  { emoji: "🚀", title: "Continuously Learning", desc: "Exploring DevSecOps frameworks, advanced penetration scans, and network automation layers." }
];

// Interests tags for Card 3
const interests = [
  "Networking",
  "Linux",
  "Ethical Hacking",
  "Cloud",
  "Automation",
  "System Design",
  "Web Development"
];

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  } as const;

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" as const } 
    }
  } as const;

  return (
    <section 
      id="about" 
      className="py-[140px] px-[clamp(24px,6vw,80px)] border-b border-border bg-muted/10 relative overflow-hidden"
    >
      {/* Maximum content width container */}
      <div className="max-w-[1440px] mx-auto">
        
        {/* 12-Column CSS Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7/12 Columns): Personal Story & Vertical Scroll Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Small Label */}
            <span className="font-mono text-xs font-bold text-primary tracking-[0.25em] uppercase select-none">
              ABOUT
            </span>

            {/* Space Grotesk Heading (Display font) */}
            <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-bold font-display text-foreground leading-[1.08] tracking-tight max-w-[620px]">
              Engineering Secure Systems with Curiosity &amp; Purpose
            </h2>

            {/* Introduction Paragraph (Inter font, 18px, 1.7 line height) */}
            <p className="text-lg leading-[1.7] text-muted-foreground font-sans max-w-[660px]">
              Fascinated by how data travels globally, I chose to specialize in Cyber Security and Networking. 
              My learning is hands-on: building isolated labs, hardening servers, and constructing secure 
              full-stack software systems to understand the dual nature of connectivity and defense.
            </p>

            {/* Vertical Timeline Wrapper */}
            <div className="relative mt-8 pl-4">
              {/* Central vertical path line (Emerald/Cyan gradient track) */}
              <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-accent to-muted" />

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-10"
              >
                {timelineMilestones.map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    variants={timelineItemVariants}
                    className="flex gap-6 items-start relative group"
                  >
                    {/* Floating circular icon container */}
                    <div className="h-12 w-12 rounded-full border border-border bg-card/90 flex items-center justify-center text-lg shadow-sm shrink-0 z-10 group-hover:border-primary/30 transition-colors">
                      {milestone.emoji}
                    </div>

                    {/* Milestone description details */}
                    <div className="flex flex-col pt-1.5 max-w-[500px]">
                      <h4 className="font-bold text-base text-foreground font-sans">
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1 font-sans">
                        {milestone.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>

          {/* Right Column (5/12 Columns): 4 Translucent, Lightweight Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 1: Education */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -3 }}
              className="p-6 rounded-3xl border border-primary/10 bg-card/25 backdrop-blur-md shadow-sm transition-all flex flex-col gap-4 group hover:border-primary/25"
            >
              <h4 className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1.5 border-b border-border/30 pb-2.5">
                <GraduationCap className="h-4 w-4" />
                <span>Education Node</span>
              </h4>
              <div className="flex flex-col gap-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-semibold">Degree:</span>
                  <span className="text-foreground font-bold">Bachelor of Technology</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-semibold">Major:</span>
                  <span className="text-foreground font-bold text-right">Computer Science &amp; Eng.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-semibold">Specialization:</span>
                  <span className="text-primary font-bold">Cyber Security &amp; Net</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-semibold">Status:</span>
                  <span className="text-foreground font-medium">Active Study (3rd Year)</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Current Focus */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -3 }}
              className="p-6 rounded-3xl border border-accent/10 bg-card/25 backdrop-blur-md shadow-sm transition-all flex flex-col gap-4 group hover:border-accent/25"
            >
              <h4 className="font-mono text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1.5 border-b border-border/30 pb-2.5">
                <Cpu className="h-4 w-4" />
                <span>Current Targets</span>
              </h4>
              <div className="flex flex-col gap-2 font-mono text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Full Stack Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Cyber Security Labs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Network Topology Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Linux Server Orchestrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Docker Container Security</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Core Interests (Animated chips) */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -3 }}
              className="p-6 rounded-3xl border border-primary/10 bg-card/25 backdrop-blur-md shadow-sm transition-all flex flex-col gap-4 group hover:border-primary/25"
            >
              <h4 className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1.5 border-b border-border/30 pb-2.5">
                <Layers className="h-4 w-4" />
                <span>Core Interests</span>
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {interests.map((interest) => (
                  <motion.span
                    key={interest}
                    whileHover={{ scale: 1.04, borderColor: "var(--primary)" }}
                    className="px-3 py-1.5 rounded-xl border border-border bg-muted/20 text-muted-foreground font-mono text-[10px] cursor-default transition-colors duration-200"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Card 4: Quick Facts & Resume Action */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -3 }}
              className="p-6 rounded-3xl border border-accent/10 bg-card/25 backdrop-blur-md shadow-sm transition-all flex flex-col gap-4 group hover:border-accent/25"
            >
              <h4 className="font-mono text-[10px] font-bold text-accent uppercase tracking-widest border-b border-border/30 pb-2.5 mb-1.5">
                Quick Diagnostics
              </h4>
              
              <div className="flex flex-col gap-3 font-mono text-[11px] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>Location Node: India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5 text-accent shrink-0" />
                  <span>Protocols: English, Hindi</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>Learning: Penetration Scans</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-3.5 w-3.5 text-accent shrink-0" />
                  <span>Target: DevSecOps Engineer</span>
                </div>
              </div>

              {/* Download Resume Button */}
              <a
                href={heroInfo.resumeUrl}
                download
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white text-xs font-semibold cursor-pointer shadow-md transition-all duration-300"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
export default About;
