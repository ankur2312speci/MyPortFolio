import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { LearningTimeline } from "@/components/LearningTimeline";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full selection:bg-primary/20">
      {/* Dynamic Cursor-Responsive Ambient Background */}
      <Background />

      {/* Floating Pill Glassmorphic Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="relative z-10 mx-auto w-full flex flex-col items-center">
        {/* Hero Landing */}
        <Hero />

        <SectionDivider />

        {/* Section 1: Editorial Bio */}
        <About />

        <SectionDivider />

        {/* Section 2: Technical Skill segments */}
        <Skills />

        <SectionDivider />

        {/* Section 3: Learning Timelines */}
        <LearningTimeline />

        <SectionDivider />

        {/* Section 4: Projects & Case Studies */}
        <Projects />

        <SectionDivider />

        {/* Section 5: Credentials & Certifications */}
        <Certifications />

        <SectionDivider />

        {/* Section 6: CV Document View */}
        <Resume />

        <SectionDivider />

        {/* Section 7: Validated Contact Console */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
