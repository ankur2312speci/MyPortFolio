"use client";

import { useEffect, useState, useRef } from "react";

export function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      // Calculate normalized coordinates
      const x = ((clientX - left) / width) * 100;
      const y = ((clientY - top) / height) * 100;
      
      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const container = containerRef.current;
    if (container) {
      window.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background"
      aria-hidden="true"
    >
      {/* Layer 1: Soft Moving Mesh Gradients (Emerald/Cyan/Indigo blobs) */}
      <div className="absolute inset-0 overflow-hidden opacity-95">
        {/* Blob 1: Emerald (Top Left) */}
        <div className="absolute top-[-15%] left-[-15%] w-[60vw] h-[60vw] min-w-[400px] min-h-[400px] rounded-full bg-primary/[0.035] dark:bg-primary/[0.05] blur-[100px] md:blur-[160px] animate-blob-drift-1" />

        {/* Blob 2: Cyan (Bottom Right) */}
        <div className="absolute bottom-[-20%] right-[-15%] w-[55vw] h-[55vw] min-w-[380px] min-h-[380px] rounded-full bg-accent/[0.03] dark:bg-accent/[0.045] blur-[110px] md:blur-[170px] animate-blob-drift-2" />

        {/* Blob 3: Deep Forest (Center Left) */}
        <div className="absolute top-[30%] left-[-10%] w-[50vw] h-[50vw] min-w-[320px] min-h-[320px] rounded-full bg-primary/[0.025] dark:bg-primary/[0.03] blur-[90px] md:blur-[140px] animate-blob-drift-3" />

        {/* Blob 4: Soft Cyan (Center Right) */}
        <div className="absolute top-[20%] right-[5%] w-[45vw] h-[45vw] min-w-[300px] min-h-[300px] rounded-full bg-accent/[0.02] dark:bg-accent/[0.03] blur-[100px] md:blur-[150px] animate-blob-drift-4" />
      </div>

      {/* Layer 2: Subtle Animated Topology Contour Lines (SVG) */}
      <div className="absolute inset-0 opacity-[0.045] dark:opacity-[0.03] mix-blend-overlay">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
          {/* Topography Group 1 */}
          <g className="animate-topography-slow">
            <path
              d="M-100,150 C300,50 500,350 800,200 C1100,50 1300,250 1600,100"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="1.2"
              strokeDasharray="8 8"
            />
            <path
              d="M-100,200 C320,110 480,400 820,260 C1120,120 1280,310 1600,160"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="0.8"
            />
            <path
              d="M-100,250 C340,170 460,450 840,320 C1140,190 1260,370 1600,220"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="0.5"
            />
          </g>

          {/* Topography Group 2 */}
          <g className="animate-topography-medium">
            <path
              d="M-100,450 C200,600 600,400 900,550 C1200,700 1350,500 1600,650"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.2"
            />
            <path
              d="M-100,510 C220,650 580,460 920,600 C1220,740 1330,560 1600,700"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="0.6"
              strokeDasharray="4 6"
            />
            <path
              d="M-100,570 C240,700 560,520 940,650 C1240,780 1310,620 1600,750"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="0.8"
            />
          </g>

          {/* Topography Group 3 (Network Nodes & Concentric Loops) */}
          <g className="opacity-75">
            <circle cx="15%" cy="25%" r="60" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="3 9" />
            <circle cx="15%" cy="25%" r="100" fill="none" stroke="var(--primary)" strokeWidth="0.5" />
            
            <circle cx="85%" cy="70%" r="80" fill="none" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 6" />
            <circle cx="85%" cy="70%" r="140" fill="none" stroke="var(--accent)" strokeWidth="0.5" />
          </g>
        </svg>
      </div>

      {/* Layer 3: Soft Interactive Cursor Spotlight Glow */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-out z-10"
        style={{
          opacity: isHovered ? 0.65 : 0.25,
          background: `radial-gradient(550px circle at ${mousePosition.x}% ${mousePosition.y}%, var(--glow-color) 0%, transparent 100%)`,
        }}
      />

      {/* Layer 4: Deep Ambient Vignette (Creates high-contrast focus on the page content) */}
      <div className="absolute inset-0 bg-radial-[ellipse_80%_80%_at_50%_50%,transparent_30%,var(--background)_100%] opacity-90 z-20" />
    </div>
  );
}
export default Background;
