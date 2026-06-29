"use client";

import { contactInfo } from "@/data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border bg-card/45 backdrop-blur-sm z-10 relative">
      <div className="max-w-7xl xl:max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Title */}
        <div className="font-mono text-xs text-muted-foreground flex items-center gap-1">
          <span className="text-primary font-bold">&lt;</span>
          <span>ankur.singh</span>
          <span className="text-accent font-bold">/&gt;</span>
        </div>

        {/* Copyright notice */}
        <div className="text-xs text-muted-foreground text-center md:text-left">
          &copy; {currentYear} Ankur Singh. All rights reserved.
        </div>

        {/* Minimal Social Links */}
        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors p-1"
            aria-label="GitHub Profile"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors p-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="hover:text-primary transition-colors p-1"
            aria-label="Email Contact"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
