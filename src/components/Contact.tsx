"use client";

import { contactInfo, heroInfo } from "@/data/portfolioData";
import { Mail, MapPin, Github, Linkedin, Send, AlertCircle, CheckCircle, Clock, Download, Radio } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      setIsSubmitting(false);
      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitError(data.error || "Failed to transmit message. Please try again.");
      }
    } catch {
      setIsSubmitting(false);
      setSubmitError("Network exception: could not establish a connection to the transmission gateway.");
    }
  };

  return (
    <section 
      id="contact" 
      className="py-[140px] px-[clamp(32px,6vw,96px)] border-b border-border bg-muted/10 relative overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-primary uppercase mb-2">07. Interconnect</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">Collaboration Hub</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mt-3 rounded-full" />
        </div>

        {/* 12-Column Grid Layout: Details left, Form right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (5/12 Columns): Collaboration Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Display Title */}
            <h3 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold font-display text-foreground leading-[1.1] tracking-tight">
              Ready for the Next Challenge
            </h3>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans max-w-[450px]">
              Have a network topology optimization project, security auditing requirement, or full-stack software idea? 
              Reach out and let&apos;s build secure, optimized systems together.
            </p>

            {/* Structured Info Links List */}
            <div className="flex flex-col gap-4 mt-4 font-mono text-xs text-muted-foreground">
              
              {/* Location Node */}
              <div className="flex items-center gap-3">
                <MapPin className="h-4.5 w-4.5 text-primary shrink-0" />
                <span>Location Node: {contactInfo.location}</span>
              </div>

              {/* Email Link */}
              <div className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-accent shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-foreground hover:underline truncate">
                  {contactInfo.email}
                </a>
              </div>

              {/* GitHub Link */}
              <div className="flex items-center gap-3">
                <Github className="h-4.5 w-4.5 text-primary shrink-0" />
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">
                  github.com/ankur2312speci
                </a>
              </div>

              {/* LinkedIn Link */}
              <div className="flex items-center gap-3">
                <Linkedin className="h-4.5 w-4.5 text-accent shrink-0" />
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">
                  linkedin/profile
                </a>
              </div>

              {/* Resume download link */}
              <div className="flex items-center gap-3">
                <Download className="h-4.5 w-4.5 text-primary shrink-0" />
                <a href={heroInfo.resumeUrl} download className="text-foreground hover:underline flex items-center gap-1">
                  <span>Download Resume PDF</span>
                </a>
              </div>

              {/* Latency / Response Time */}
              <div className="flex items-center gap-3 border-t border-border/40 pt-4 mt-2">
                <Clock className="h-4.5 w-4.5 text-accent shrink-0 animate-pulse" />
                <div className="flex items-center gap-2">
                  <span>Response Latency:</span>
                  <span className="text-primary font-bold uppercase">&lt; 48 Hours</span>
                  <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                </div>
              </div>

            </div>

          </div>

          {/* Right Column (7/12 Columns): Submission Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-3xl border border-primary/10 bg-card/25 backdrop-blur-md shadow-sm group hover:border-primary/15 transition-all">
              <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-widest mb-6 flex items-center gap-1.5 pb-3 border-b border-border/30">
                <Radio className="h-3.5 w-3.5 text-primary animate-pulse" />
                <span>Transmit Secure Inquiry</span>
              </h4>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-sans">
                {/* Sender Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                    Sender Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-muted/10 text-foreground text-xs font-mono focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all ${
                      errors.name ? "border-red-500/50 focus:ring-red-500/20" : "border-border/60 focus:border-primary"
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="h-3 w-3" />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Return Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                    Return Email Node
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-muted/10 text-foreground text-xs font-mono focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all ${
                      errors.email ? "border-red-500/50 focus:ring-red-500/20" : "border-border/60 focus:border-primary"
                    }`}
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="h-3 w-3" />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>

                {/* Transmission Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                    Transmission Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-muted/10 text-foreground text-xs font-mono focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all ${
                      errors.subject ? "border-red-500/50 focus:ring-red-500/20" : "border-border/60 focus:border-primary"
                    }`}
                    placeholder="Subject of inquiry"
                  />
                  {errors.subject && (
                    <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="h-3 w-3" />
                      <span>{errors.subject}</span>
                    </span>
                  )}
                </div>

                {/* Payload Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                    Payload Details (Message)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-muted/10 text-foreground text-xs font-mono focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all resize-none ${
                      errors.message ? "border-red-500/50 focus:ring-red-500/20" : "border-border/60 focus:border-primary"
                    }`}
                    placeholder="Write details..."
                  />
                  {errors.message && (
                    <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="h-3 w-3" />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                {/* Action Trigger */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white text-xs font-semibold cursor-pointer shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting secure tunnel...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              {/* SUCCESS TOAST */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 rounded-xl border border-green-500/20 bg-green-500/5 text-green-600 dark:text-green-400 text-xs font-semibold flex items-center gap-2"
                  >
                    <CheckCircle className="h-4.5 w-4.5 shrink-0" />
                    <span>Message transmitted successfully! Secure tunnel closed.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ERROR TOAST */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-500 text-xs font-semibold flex items-center gap-2"
                  >
                    <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                    <span>{submitError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
export default Contact;
