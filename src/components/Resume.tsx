"use client";

import { heroInfo, aboutInfo, skillCategories } from "@/data/portfolioData";
import { FileText, Download, Printer, Maximize2, ShieldCheck, Eye, GraduationCap, Server, Layers, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Resume() {
  const [isFullscreenPreview, setIsFullscreenPreview] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleOpenFullscreen = () => {
    window.open(heroInfo.resumeUrl, "_blank");
  };

  const renderA4Content = (isModal = false) => {
    return (
      <div className={`w-full bg-card text-card-foreground select-none relative font-sans flex flex-col justify-between ${
        isModal ? "p-8 md:p-12 min-h-[90vh]" : "p-6 md:p-8 aspect-[1/1.414] overflow-hidden"
      }`}>
        {/* Decorative Cryptographic Header Bar */}
        <div className="flex justify-between items-center border-b border-border/40 pb-3 mb-4 shrink-0">
          <span className="text-[7px] md:text-[8px] font-mono text-muted-foreground/60 uppercase tracking-widest">
            SEC_REP: CV_ANKUR_SINGH.json
          </span>
          <div className="flex items-center gap-1 text-[7px] md:text-[8px] font-mono font-bold text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded">
            <ShieldCheck className="h-3 w-3 text-primary" />
            <span>SIGNATURE: CRYPTO_VERIFIED</span>
          </div>
        </div>

        {/* Header Details */}
        <div className="border-b border-border pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-3 shrink-0">
          <div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">{heroInfo.name}</h3>
            <h4 className="text-xs font-semibold text-primary font-mono mt-0.5">{heroInfo.title}</h4>
          </div>
          <div className="text-left md:text-right text-[9px] md:text-[10px] font-mono text-muted-foreground flex flex-col gap-0.5">
            <span>Location: India</span>
            <span>Contact: ankursingh9408@gmail.com</span>
          </div>
        </div>

        {/* Objective */}
        <div className="flex flex-col gap-1.5 mt-3 shrink-0">
          <h5 className="text-[9px] font-mono font-bold tracking-widest text-muted-foreground uppercase">
            Professional Objective
          </h5>
          <p className="text-[10px] md:text-xs text-foreground/90 leading-relaxed font-normal">
            {aboutInfo.careerGoal} {aboutInfo.specialization}
          </p>
        </div>

        {/* Education */}
        <div className="flex flex-col gap-1.5 mt-3 shrink-0">
          <h5 className="text-[9px] font-mono font-bold tracking-widest text-muted-foreground uppercase">
            Education History
          </h5>
          <div className="bg-muted/30 border border-border/60 p-3 rounded-xl flex flex-col gap-1">
            <div className="flex justify-between items-start flex-wrap gap-2 text-[10px] md:text-xs font-bold text-foreground">
              <span>Bachelor of Technology in Computer Science &amp; Engineering</span>
              <span className="font-mono text-[9px] font-semibold text-primary bg-primary/5 border border-primary/10 px-1.5 py-0.2 rounded">
                Active Study
              </span>
            </div>
            <p className="text-[9px] md:text-[10px] text-muted-foreground leading-normal">
              {aboutInfo.education}
            </p>
          </div>
        </div>

        {/* Competencies Grid */}
        <div className="flex flex-col gap-1.5 mt-3 flex-1 overflow-hidden">
          <h5 className="text-[9px] font-mono font-bold tracking-widest text-muted-foreground uppercase">
            Core Competencies Matrix
          </h5>
          <div className="grid grid-cols-2 gap-2.5 overflow-hidden">
            {skillCategories.slice(0, 4).map((cat) => (
              <div key={cat.category} className="border border-border/50 rounded-xl p-2.5 bg-muted/10 flex flex-col gap-1.5 overflow-hidden">
                <h6 className="text-[9px] font-bold text-foreground font-mono border-b border-border/30 pb-1 uppercase">{cat.category}</h6>
                <div className="flex flex-wrap gap-1">
                  {cat.skills.slice(0, 3).map((skill) => (
                    <span key={skill.name} className="text-[8px] font-medium bg-card text-muted-foreground px-1.5 py-0.5 rounded border border-border">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer verification stamp */}
        <div className="border-t border-dashed border-border/60 pt-3 mt-4 flex justify-between items-center shrink-0 font-mono text-[7px] md:text-[8px] text-muted-foreground/50">
          <span>PORTFOLIO_NODE: SYNC_V1.1</span>
          <span>CURRICULUM_VITAE</span>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="resume" 
      className="py-[140px] px-[clamp(32px,6vw,96px)] border-b border-border"
    >
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-primary uppercase mb-2">06. Resume</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">Curriculum Vitae</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mt-3 rounded-full" />
        </div>

        {/* Horizontal Split: Floating A4 left, Highlights right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (5/12 Columns): Floating A4 Paper Preview */}
          <div className="lg:col-span-5 flex flex-col gap-6 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="w-full max-w-[340px] md:max-w-[360px] rounded-2xl border border-border/80 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden bg-card transition-all duration-300 relative group"
            >
              {renderA4Content()}

              {/* Quick overlay controls appear on hover */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <button
                  onClick={() => setIsFullscreenPreview(true)}
                  className="p-3 rounded-full bg-card border border-border shadow hover:scale-105 transition-transform cursor-pointer text-foreground"
                  title="Preview CV Document"
                >
                  <Eye className="h-4.5 w-4.5" />
                </button>
                <a
                  href={heroInfo.resumeUrl}
                  download
                  className="p-3 rounded-full bg-primary hover:bg-primary/95 text-white shadow hover:scale-105 transition-transform cursor-pointer"
                  title="Download PDF"
                >
                  <Download className="h-4.5 w-4.5" />
                </a>
              </div>
            </motion.div>

            {/* Document Actions Bar */}
            <div className="flex flex-wrap gap-2.5 items-center justify-center pt-2">
              <button
                onClick={() => setIsFullscreenPreview(true)}
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl border border-border bg-card/60 hover:bg-muted text-foreground text-xs font-semibold cursor-pointer transition-colors"
              >
                <Eye className="h-4 w-4 text-muted-foreground" />
                <span>Preview</span>
              </button>

              <a
                href={heroInfo.resumeUrl}
                download
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold cursor-pointer shadow-sm transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </a>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl border border-border bg-card/60 hover:bg-muted text-foreground text-xs font-semibold cursor-pointer transition-colors"
              >
                <Printer className="h-4 w-4 text-muted-foreground" />
                <span>Print</span>
              </button>

              <button
                onClick={handleOpenFullscreen}
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl border border-border bg-card/60 hover:bg-muted text-foreground text-xs font-semibold cursor-pointer transition-colors"
              >
                <Maximize2 className="h-4 w-4 text-muted-foreground" />
                <span>Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Right Column (7/12 Columns): Metadata highlights pane */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Highlight 1: Academic Focus */}
            <div className="p-6 rounded-3xl border border-primary/10 bg-card/25 backdrop-blur-md flex gap-4.5 items-start">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                <GraduationCap className="h-5.5 w-5.5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-foreground font-sans">
                  Academic Focus &amp; Credentials
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-1 font-sans">
                  Pursuing a B.Tech in CSE specializing in Security &amp; Networks. The curriculum fuses standard 
                  operating systems, network protocol hierarchies, structured cryptography models, and object-oriented architectures.
                </p>
              </div>
            </div>

            {/* Highlight 2: Technical Specialization */}
            <div className="p-6 rounded-3xl border border-accent/10 bg-card/25 backdrop-blur-md flex gap-4.5 items-start">
              <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent shrink-0">
                <Server className="h-5.5 w-5.5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-foreground font-sans">
                  System Administration &amp; DevOps
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-1 font-sans">
                  Proficient in managing Linux servers, Bash automation scripting, and hypervisor allocations (VMware Workstation, Proxmox VE, ESXi Virtualization).
                </p>
              </div>
            </div>

            {/* Highlight 3: Core Projects Highlights */}
            <div className="p-6 rounded-3xl border border-primary/10 bg-card/25 backdrop-blur-md flex gap-4.5 items-start">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                <Layers className="h-5.5 w-5.5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-foreground font-sans">
                  SaaS &amp; Pentesting Projects
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-1 font-sans">
                  Designed full-stack dashboards with role-based access validation, and conducted security 
                  reconnaissance, directory scans, and service auditing inside isolated host adapters.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Preview Overlay */}
      <AnimatePresence>
        {isFullscreenPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="w-full max-w-4xl max-h-[90vh] rounded-3xl border border-border bg-card shadow-2xl overflow-y-auto flex flex-col"
            >
              {/* Lightbox Header */}
              <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <FileText className="h-4.5 w-4.5 text-primary" />
                  <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wide">
                    Visual Document Previewer
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrint}
                    className="p-2 rounded-full border border-border bg-muted/40 hover:bg-muted/90 text-foreground cursor-pointer transition-colors"
                    title="Print Document"
                  >
                    <Printer className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setIsFullscreenPreview(false)}
                    className="p-2 rounded-full border border-border bg-muted/40 hover:bg-muted/90 text-foreground cursor-pointer transition-colors"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>

              {/* A4 Paper Contents (Modal Mode) */}
              <div className="flex-1 overflow-y-auto bg-muted/5 p-4 md:p-10 flex justify-center">
                <div className="w-full max-w-3xl rounded-xl border border-border shadow-md overflow-hidden bg-card">
                  {renderA4Content(true)}
                </div>
              </div>

              {/* Lightbox Footer Actions */}
              <div className="sticky bottom-0 bg-card border-t border-border px-6 py-4 flex gap-3 justify-end z-10">
                <button
                  onClick={() => setIsFullscreenPreview(false)}
                  className="px-5 py-2.5 rounded-full border border-border bg-muted/20 hover:bg-muted/70 text-foreground text-xs font-semibold cursor-pointer transition-colors"
                >
                  Close Preview
                </button>
                <a
                  href={heroInfo.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold cursor-pointer transition-colors shadow-md shadow-primary/10"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
export default Resume;
