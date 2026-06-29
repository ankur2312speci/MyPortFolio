"use client";



export function SectionDivider() {
  return (
    <div className="h-28 w-full flex items-center justify-center relative z-10 pointer-events-none select-none my-2 overflow-hidden">
      <svg 
        width="200" 
        height="112" 
        viewBox="0 0 200 112" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-25 dark:opacity-20"
      >
        {/* Main central vertical route trunk */}
        <path 
          id="trunk" 
          d="M 100 0 L 100 112" 
          stroke="var(--border)" 
          strokeWidth="1.2" 
        />

        {/* Branch Route A (Security Accent - Left) */}
        <path 
          id="branch-a"
          d="M 100 35 L 60 55 L 60 85" 
          stroke="var(--primary)" 
          strokeWidth="0.8" 
          strokeDasharray="2 3"
        />
        <circle cx="60" cy="85" r="2.5" fill="var(--primary)" />

        {/* Branch Route B (Network Accent - Right) */}
        <path 
          id="branch-b"
          d="M 100 65 L 140 85 L 140 105" 
          stroke="var(--accent)" 
          strokeWidth="0.8" 
        />
        <circle cx="140" cy="105" r="2.5" fill="var(--accent)" />

        {/* Animated Data Packets flowing along trunk */}
        <circle r="2" fill="var(--primary)">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M 100 0 L 100 112" />
        </circle>
        
        {/* Animated Data Packets flowing along branches */}
        <circle r="1.5" fill="var(--primary)">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 100 35 L 60 55 L 60 85" />
        </circle>
        <circle r="1.5" fill="var(--accent)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 100 65 L 140 85 L 140 105" />
        </circle>
      </svg>
    </div>
  );
}
export default SectionDivider;
