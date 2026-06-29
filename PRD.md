# Product Requirements Document (PRD)

## Project: Ankur Singh Master Portfolio

---

## 🎯 1. Core Objective
Construct a unique, premium developer portfolio for **Ankur Singh**, a B.Tech Computer Science student specializing in **Cyber Security & Networking**. The portfolio highlights continuous academic progress, practical systems expertise, and professional projects without utilizing cliché template looks.

---

## 🎨 2. Visual Standards & Aesthetics
- **Core Mood:** Minimal, editorial, modern, premium, technical, elegant.
- **Theme Identity:** Deep Indigo, Slate, and Carbon accents. High-contrast white paper theme for light mode.
- **Avoid:** Hacker green matrix terminal loops, heavy colorful glassmorphism, visual noise, and repetitive looping animations.
- **Background:** Quiet, cursor-responsive coordinate grid with fading SVG nodes representing networking cables and router endpoints.

---

## 🌓 3. Theme System Requirements
- **Appearance Modes:** Dark (default), Light, and System (detects OS preferences).
- **Execution:** Zero-flash initial load using client-side body tags injected by `next-themes`.
- **Transitions:** Global color property transitions set between `200ms` and `300ms`.
- **State persistence:** Client-side local storage preference sync.

---

## ⚡ 4. Technical Performance & Optimization
- **Lighthouse Targets:** 95+ Score across Desktop and Mobile pipelines.
- **A11y (Accessibility):** WCAG AA standards compliance (semantic HTML tags, focus outlines, ARIA labels, clean contrast boundaries).
- **SEO Elements:** Fully defined static page meta tags, OpenGraph cards, Twitter handles, robots policy, and Google Persons JSON-LD structured data.
- **Scroll Engine:** Lenis library smooth scrolling to override native choppy behaviors.

---

## 📋 5. Content Configuration & Safety Rules
- **Anti-Fabrication Policy:** Never invent skills, credentials, or projects.
- **Implementation:** Content must load from a centralized schema in `src/data/portfolioData.ts` with explicit `TODO` markers. If a field is empty, the UI displays dynamic clean schematics or unverified mock templates instead of fake content.
