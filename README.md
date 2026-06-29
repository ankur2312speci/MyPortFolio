# Ankur Singh - Master Portfolio

A unique, production-ready developer portfolio for **Ankur Singh**, specializing in **Cyber Security & Networking**. Built using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** with smooth-scrolling by **Lenis**.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 (with semantic variables mapping)
- **Theme:** `next-themes` (Dark Mode by default, Light, System)
- **Animations:** Framer Motion (subtle fades, layout-transitions)
- **Scroll Engine:** Lenis Smooth Scroll
- **Icons:** Lucide Icons

---

## 📂 Project Structure

```text
├── public/                 # Static assets (Resume, images)
├── src/
│   ├── app/                # Next.js App Router (pages & global layouts)
│   │   ├── globals.css     # Global styles & Tailwind v4 variables
│   │   ├── layout.tsx      # Base layout, metadata, font configuration
│   │   └── page.tsx        # Homepage orchestrator
│   ├── components/         # Reusable presentation & feature components
│   │   ├── Background.tsx  # Cursor-responsive SVG networking grid
│   │   ├── Navbar.tsx      # Floating nav with theme toggle & intersection observer
│   │   ├── Hero.tsx        # Title & animated cyber terminal logger
│   │   ├── About.tsx       # Bio & education overview
│   │   ├── Skills.tsx      # Skill groups & proficiency indicators
│   │   ├── LearningTimeline.tsx # Milestone timeline with gained competencies
│   │   ├── Projects.tsx    # Tech filter & modal-based case study reader
│   │   ├── Certifications.tsx # Cards & verification lightboxes
│   │   ├── Resume.tsx      # CV interactive preview & print controls
│   │   ├── Contact.tsx     # Validated contact form & social channels
│   │   └── Footer.tsx      # Copyright & social anchors
│   ├── data/
│   │   └── portfolioData.ts # Typed central data model (Modify this to customize content)
│   └── hooks/
│       └── useActiveSection.ts # Intersection observer for navigation highlighting
```

---

## 🚀 Getting Started

### 1. Pre-requisites
Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed.

### 2. Install Dependencies
Initialize package dependencies:
```bash
npm install
```

### 3. Run Development Server
Start local server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) on your browser.

### 4. Build Production Bundle
Build and verify static optimization:
```bash
npm run build
```

---

## 🖊️ Content Customization

To populate your projects, skills, certificates, and details, modify the typed database file:
📄 `src/data/portfolioData.ts`

Any edits to this file will instantly cascade throughout the site components, JSON-LD rich search schemas, print CV outlines, and case study selectors.
