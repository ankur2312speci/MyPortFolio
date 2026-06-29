"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Sun, Moon, Laptop, Menu, X, Home, User, Code, Activity, Folder, Award, FileText, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", id: "home", icon: <Home className="h-4 w-4" /> },
  { label: "About", id: "about", icon: <User className="h-4 w-4" /> },
  { label: "Skills", id: "skills", icon: <Code className="h-4 w-4" /> },
  { label: "Timeline", id: "learning", icon: <Activity className="h-4 w-4" /> },
  { label: "Projects", id: "projects", icon: <Folder className="h-4 w-4" /> },
  { label: "Certifications", id: "certifications", icon: <Award className="h-4 w-4" /> },
  { label: "Resume", id: "resume", icon: <FileText className="h-4 w-4" /> },
  { label: "Contact", id: "contact", icon: <Send className="h-4 w-4" /> },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    if (!mounted) return;
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };

  const getThemeIcon = () => {
    if (!mounted) return <Sun className="h-4 w-4" />;
    if (theme === "dark") return <Moon className="h-4 w-4 text-primary" />;
    if (theme === "light") return <Sun className="h-4 w-4 text-accent" />;
    return <Laptop className="h-4 w-4 text-primary" />;
  };

  return (
    <>
      {/* Desktop & Tablet Floating Navbar */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav className="glass flex items-center justify-between w-full max-w-[1500px] h-18 rounded-3xl px-6 py-2 shadow-lg transition-all duration-300 border border-primary/10">
          
          {/* Logo & Identity info on the Left */}
          <div 
            onClick={() => handleScroll("home")}
            className="flex items-center gap-3.5 cursor-pointer select-none group"
          >
            {/* Hexagon AS Badge */}
            <div className="h-11 w-11 rounded-xl bg-card border-2 border-primary flex items-center justify-center font-mono font-bold text-sm text-foreground shadow-[0_0_12px_rgba(239,68,68,0.15)] group-hover:shadow-[0_0_18px_rgba(239,68,68,0.25)] transition-all shrink-0">
              AS
            </div>

            {/* Profile Titles */}
            <div className="hidden lg:flex flex-col text-left shrink-0">
              <span className="font-bold text-xs text-foreground tracking-wide leading-tight group-hover:text-primary transition-colors">
                Ankur Singh
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary ml-1.5 animate-pulse" />
              </span>
              <span className="font-mono text-[8px] font-bold text-muted-foreground uppercase tracking-wider mt-0.5">
                CYBER SECURITY &amp; NETWORKING ENGINEER
              </span>
            </div>
          </div>

          {/* Center Navigation Tabs (with Icons & Text labels) */}
          <div className="hidden md:flex items-center gap-3.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`relative px-3 py-1 rounded-2xl flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors duration-250 ${
                    isActive 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.icon}
                  <span className="text-[9px] font-semibold tracking-wide uppercase select-none">
                    {item.label}
                  </span>
                  
                  {/* Underline indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 h-0.5 w-6 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Controls Area */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-2xl border border-border bg-muted/30 hover:bg-muted/70 text-foreground cursor-pointer transition-colors"
              title="Toggle Theme Mode"
            >
              {getThemeIcon()}
            </button>

            {/* Let's Connect CTA Button */}
            <button
              onClick={() => handleScroll("contact")}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary text-xs font-semibold cursor-pointer transition-colors shadow-[0_0_8px_rgba(239,68,68,0.05)]"
            >
              <span>Let&apos;s Connect</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-2xl border border-border bg-muted/30 hover:bg-muted/70 text-foreground cursor-pointer transition-colors"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </nav>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden glass rounded-3xl p-6 shadow-2xl flex flex-col gap-4 border border-border"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-3 ${
                    activeSection === item.id
                      ? "bg-primary/10 text-primary border-l-4 border-primary"
                      : "text-muted-foreground hover:bg-muted/20 hover:text-foreground"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Navbar;
