"use client";

import { heroInfo } from "@/data/portfolioData";
import { ArrowRight, Download, ShieldCheck, Cpu, Network, Lock } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Node coordinates relative to SVG center (180, 180)
  const networkNodes = [
    { id: "node-1", cx: 100, cy: 100, label: "IDS_NODE", type: "security", delay: "0s" },
    { id: "node-2", cx: 280, cy: 110, label: "FW_GATEWAY", type: "security", delay: "0.8s" },
    { id: "node-3", cx: 70, cy: 230, label: "IP_TUNNEL", type: "network", delay: "1.4s" },
    { id: "node-4", cx: 290, cy: 240, label: "SUBNET_VLAN", type: "network", delay: "0.4s" },
    { id: "node-5", cx: 180, cy: 70, label: "DNS_SEC", type: "security", delay: "1.9s" },
    { id: "node-6", cx: 180, cy: 290, label: "PROXY_NODE", type: "network", delay: "1.1s" },
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 py-24 md:py-0 relative overflow-hidden"
    >
      <div className="max-w-7xl xl:max-w-[1500px] w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Left Side: Bio & Specialization (55% Column) */}
        <div className="w-full md:w-[53%] flex flex-col gap-6 justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 text-primary text-xs font-mono px-3.5 py-1.5 rounded-full w-fit shadow-[0_0_12px_rgba(16,185,129,0.05)]"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-wider">Security Architecture</span>
            <span className="text-muted-foreground/35">•</span>
            <Network className="h-3.5 w-3.5 text-accent" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-accent">Network Topologies</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] font-sans"
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[size:200%] animate-pulse" style={{ animationDuration: "6s" }}>{heroInfo.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl font-semibold text-muted-foreground font-mono flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>{heroInfo.title}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[500px]"
          >
            {heroInfo.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs text-primary/85 font-mono bg-muted/30 border border-border/50 px-4 py-2.5 rounded-xl w-fit flex items-center gap-2"
          >
            <Cpu className="h-4 w-4 text-accent animate-spin" style={{ animationDuration: "10s" }} />
            <span>Target: {heroInfo.currentFocus}</span>
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <button
              onClick={() => handleScroll("projects")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold cursor-pointer shadow-md shadow-primary/10 transition-colors"
            >
              <span>View Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href={heroInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-border bg-card/60 hover:bg-muted text-foreground text-sm font-semibold cursor-pointer transition-colors"
            >
              <Download className="h-4 w-4 text-muted-foreground" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Network Topology Sphere (43% Column) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-[43%] flex justify-center z-10"
        >
          <div className="w-full aspect-square max-w-[380px] rounded-3xl border border-border/60 bg-card/45 backdrop-blur-sm shadow-xl p-6 relative flex items-center justify-center group overflow-hidden select-none hover:border-primary/15 transition-all">
            
            {/* Interactive SVG Sphere Container */}
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 360 360" 
              className="w-full h-full relative"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glow Gradients */}
                <radialGradient id="emeraldGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* 1. Orbit Ring 1 (Inner Network Shield) */}
              <circle 
                cx="180" 
                cy="180" 
                r="65" 
                fill="none" 
                stroke="var(--primary)" 
                strokeWidth="0.8" 
                strokeOpacity="0.25" 
                strokeDasharray="4 6" 
                className="animate-spin"
                style={{ transformOrigin: "180px 180px", animationDuration: "40s" }}
              />

              {/* 2. Orbit Ring 2 (Middle Subnet Bridge) */}
              <circle 
                cx="180" 
                cy="180" 
                r="115" 
                fill="none" 
                stroke="var(--accent)" 
                strokeWidth="0.8" 
                strokeOpacity="0.2" 
                strokeDasharray="6 8"
                className="animate-spin"
                style={{ transformOrigin: "180px 180px", animationDuration: "60s", animationDirection: "reverse" }}
              />

              {/* 3. Orbit Ring 3 (Outer Boundary) */}
              <circle 
                cx="180" 
                cy="180" 
                r="145" 
                fill="none" 
                stroke="var(--primary)" 
                strokeWidth="0.5" 
                strokeOpacity="0.15" 
                strokeDasharray="3 3"
                className="animate-spin"
                style={{ transformOrigin: "180px 180px", animationDuration: "80s" }}
              />

              {/* 4. Connective Topological Paths */}
              {networkNodes.map((node) => (
                <g key={`path-${node.id}`}>
                  {/* Winding bezier connection route for organic lines */}
                  <path
                    id={`route-${node.id}`}
                    d={`M 180 180 Q ${(180 + node.cx) / 2 + 10} ${(180 + node.cy) / 2 - 10} ${node.cx} ${node.cy}`}
                    fill="none"
                    stroke={node.type === "security" ? "var(--primary)" : "var(--accent)"}
                    strokeWidth="0.8"
                    strokeOpacity="0.18"
                    strokeDasharray="2 4"
                  />

                  {/* Packet flow circles traversing routes */}
                  <circle r="2.5" fill={node.type === "security" ? "var(--primary)" : "var(--accent)"} className="opacity-95 shadow-lg">
                    <animateMotion dur={node.type === "security" ? "2.5s" : "3.2s"} repeatCount="indefinite" begin={node.delay}>
                      <mpath href={`#route-${node.id}`} />
                    </animateMotion>
                  </circle>
                </g>
              ))}

              {/* 5. Glowing Central Node (Core Security Hub) */}
              <g className="cursor-pointer group/center">
                {/* Glow ring */}
                <circle cx="180" cy="180" r="32" fill="url(#emeraldGlow)" className="animate-pulse" />
                {/* Outer border */}
                <circle cx="180" cy="180" r="20" fill="none" stroke="var(--primary)" strokeWidth="1.2" strokeOpacity="0.35" className="animate-ping" style={{ animationDuration: "3s" }} />
                {/* Core Circle */}
                <circle cx="180" cy="180" r="16" fill="var(--card)" stroke="var(--primary)" strokeWidth="2.5" className="shadow-md" />
                {/* Miniature Lock Icon Visual */}
                <g transform="translate(172, 172) scale(0.66)" className="text-primary opacity-90">
                  <Lock className="h-6 w-6 text-primary" strokeWidth="2.5" />
                </g>
              </g>

              {/* 6. Satellite Topological Nodes */}
              {networkNodes.map((node) => (
                <g 
                  key={node.id} 
                  className="cursor-pointer group/node"
                  transform={`translate(0, 0)`}
                >
                  {/* Subtle Node Glow */}
                  <circle 
                    cx={node.cx} 
                    cy={node.cy} 
                    r="12" 
                    fill={node.type === "security" ? "url(#emeraldGlow)" : "url(#cyanGlow)"} 
                    className="opacity-0 group-hover/node:opacity-100 transition-opacity duration-300"
                  />
                  {/* Node Outer Ring */}
                  <circle 
                    cx={node.cx} 
                    cy={node.cy} 
                    r="6.5" 
                    fill="none" 
                    stroke={node.type === "security" ? "var(--primary)" : "var(--accent)"} 
                    strokeWidth="1.5" 
                    className="group-hover/node:stroke-[2px] transition-all duration-300"
                  />
                  {/* Node Center core */}
                  <circle 
                    cx={node.cx} 
                    cy={node.cy} 
                    r="3.5" 
                    fill={node.type === "security" ? "var(--primary)" : "var(--accent)"}
                    className="group-hover/node:scale-110 transition-transform"
                  />
                  {/* Node Text Flag (Appears on hover) */}
                  <g className="opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <rect 
                      x={node.cx - 36} 
                      y={node.cy - 22} 
                      width="72" 
                      height="14" 
                      rx="3" 
                      fill="var(--card)" 
                      stroke="var(--border)" 
                      strokeWidth="1" 
                    />
                    <text 
                      x={node.cx} 
                      y={node.cy - 12} 
                      textAnchor="middle" 
                      fill="var(--foreground)" 
                      fontSize="7" 
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {node.label}
                    </text>
                  </g>
                </g>
              ))}
            </svg>

            {/* Micro status bar at the bottom inside card */}
            <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center font-mono text-[8px] text-muted-foreground/60">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span>SEC_CORE_VERIFIED</span>
              </span>
              <span>TOPOLOGY: ONLINE</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
export default Hero;
