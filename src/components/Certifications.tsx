"use client";

import { Award, ExternalLink, ShieldCheck, Lock } from "lucide-react";
import { motion } from "framer-motion";

// Local dataset mapping Ankur's actual academic and lab accomplishments into grouped certificate nodes
const certificateGroups = [
  {
    category: "Cyber Security",
    certs: [
      { 
        name: "Threat Reconnaissance & Subnet Vulnerability Audit", 
        issuer: "VMware Security Laboratory", 
        date: "June 2024", 
        skills: "Nmap Scans, Service Enumeration, Nikto Web Audits, Port Mapping", 
        status: "verified", 
        verificationLink: "https://github.com/ankur2312speci" 
      }
    ]
  },
  {
    category: "Networking",
    certs: [
      { 
        name: "Virtual Subnetting & Isolated VLAN Orchestration", 
        issuer: "VMware Workstation Virtual Adapter", 
        date: "January 2024", 
        skills: "VLAN Segments, DHCP Configurations, Routing Tables, TCP/IP Suite", 
        status: "verified", 
        verificationLink: "https://github.com/ankur2312speci" 
      }
    ]
  },
  {
    category: "Programming",
    certs: [
      { 
        name: "Role-Based Token Authentication & Verification", 
        issuer: "SaaS API Local Validator Unit", 
        date: "May 2024", 
        skills: "React, Node.js REST APIs, Mongoose Data Schemas, JWT Auth Checks", 
        status: "verified", 
        verificationLink: "https://github.com/ankur2312speci" 
      }
    ]
  },
  {
    category: "Cloud",
    certs: [
      { 
        name: "Docker Container Host Namespace Isolation", 
        issuer: "Proxmox VE Hypervisor Node", 
        date: "Active Lab Study", 
        skills: "Container security, LXC Resource Allocation, SSH Keys, Volumes", 
        status: "pending", 
        verificationLink: undefined 
      }
    ]
  },
  {
    category: "Professional Development",
    certs: [
      { 
        name: "B.Tech CSE Core Coursework Verification", 
        issuer: "Academic CSE Registry", 
        date: "Active", 
        skills: "Data Structures & Algorithms, Operating Systems, Discrete Math", 
        status: "verified", 
        verificationLink: "https://github.com/ankur2312speci" 
      }
    ]
  }
];

export function Certifications() {
  return (
    <section 
      id="certifications" 
      className="py-[140px] px-[clamp(32px,6vw,96px)] border-b border-border bg-muted/10"
    >
      {/* Widescreen Container */}
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-primary uppercase mb-2">05. Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">Achievement Gallery</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mt-3 rounded-full" />
        </div>

        {/* Grouped Categories Stack */}
        <div className="flex flex-col gap-12">
          {certificateGroups.map((group) => (
            <div key={group.category} className="flex flex-col gap-6">
              
              {/* Category Heading Tag */}
              <h3 className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{group.category}</span>
              </h3>

              {/* Framed Documents Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.certs.map((cert, idx) => {
                  const isVerified = cert.status === "verified";

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.015 }}
                      className="relative w-full aspect-[4/3] rounded-2xl border-4 border-card shadow-lg bg-card overflow-hidden group select-none hover:shadow-xl transition-all cursor-default"
                      style={{
                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(16,185,129,0.1)"
                      }}
                    >
                      {/* 1. Document Frame Inner Bevel Shadow */}
                      <div className="absolute inset-2 border border-border/80 rounded-lg pointer-events-none z-10" />

                      {/* 2. Textured Document Background */}
                      <div className="absolute inset-1.5 bg-gradient-to-br from-card to-muted/20 flex flex-col justify-between p-6">
                        
                        {/* Certificate Header Stamp */}
                        <div className="flex justify-between items-start">
                          <span className="font-mono text-[7px] text-muted-foreground/60 tracking-wider">
                            ID_REF: SEC_CRED_2026
                          </span>
                          
                          {/* Circular Security Seal */}
                          <div className={`h-8 w-8 rounded-full border flex items-center justify-center ${
                            isVerified 
                              ? "border-primary/20 bg-primary/5 text-primary shadow-[0_0_8px_rgba(16,185,129,0.05)]" 
                              : "border-amber-500/20 bg-amber-500/5 text-amber-500"
                          }`}>
                            <Award className="h-4.5 w-4.5" />
                          </div>
                        </div>

                        {/* Certificate Copy Details */}
                        <div className="flex flex-col gap-1.5 my-auto text-center items-center justify-center px-4">
                          <span className="font-mono text-[8px] text-muted-foreground tracking-[0.2em] uppercase">
                            Certificate of Lab Achievement
                          </span>
                          <h4 className="text-xs md:text-sm font-bold text-foreground leading-snug line-clamp-2">
                            {cert.name}
                          </h4>
                          <div className="h-[1px] w-8 bg-border my-1" />
                          <span className="font-mono text-[8px] text-primary/80 font-medium uppercase">
                            Granted to: Ankur Singh
                          </span>
                        </div>

                        {/* Certificate Seal Footer */}
                        <div className="flex justify-between items-end font-mono text-[7.5px] text-muted-foreground/60 border-t border-border/40 pt-2 shrink-0">
                          <span>Date: {cert.date}</span>
                          <span className="flex items-center gap-0.5">
                            <ShieldCheck className="h-3 w-3 text-primary" />
                            <span>{isVerified ? "STATUS: VERIFIED" : "STATUS: PENDING"}</span>
                          </span>
                        </div>

                      </div>

                      {/* 3. Sliding Translucent Hover Overlay details */}
                      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-between p-6">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between border-b border-border/20 pb-2">
                            <span className="font-mono text-[9px] font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                              <ShieldCheck className="h-3.5 w-3.5" />
                              <span>Credential details</span>
                            </span>
                            <span className="text-[8px] font-mono text-muted-foreground">{cert.date}</span>
                          </div>

                          <div className="flex flex-col gap-1">
                            <span className="text-[8px] font-mono text-muted-foreground/60 uppercase">Issuer</span>
                            <p className="text-xs font-semibold text-foreground">{cert.issuer}</p>
                          </div>

                          <div className="flex flex-col gap-1">
                            <span className="text-[8px] font-mono text-muted-foreground/60 uppercase">Skills Acquired</span>
                            <p className="text-[10px] text-muted-foreground leading-relaxed">{cert.skills}</p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end pt-3 border-t border-border/10 shrink-0">
                          {cert.verificationLink ? (
                            <a
                              href={cert.verificationLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-[10px] font-mono font-bold cursor-pointer transition-colors"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              <span>Verify Credential</span>
                            </a>
                          ) : (
                            <div className="inline-flex items-center gap-1 px-4.5 py-2.5 rounded-xl border border-border/20 bg-muted/10 text-muted-foreground/40 text-[10px] font-mono font-bold cursor-default select-none">
                              <Lock className="h-3 w-3" />
                              <span>Pending Nodes</span>
                            </div>
                          )}
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Certifications;
