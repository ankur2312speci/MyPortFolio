# Design System Guide

This document defines the custom design system rules and token system for Ankur Singh's portfolio.

---

## 🎨 1. Color Palette Tokens

The site utilizes CSS custom properties to control colors dynamically.

### 🌗 Dark Mode (Default Theme)
- **Background:** `#030712` (Slate-carbon black)
- **Card Fill:** `#0b0f19` (Obsidian navy)
- **Primary Color:** `#6366f1` (Electric Indigo)
- **Accent Color:** `#06b6d4` (Teal Cyan)
- **Thin Border:** `rgba(255, 255, 255, 0.08)`
- **Secondary Text:** `#9ca3af` (Cool Gray)

### ☀️ Light Mode (Clean Paper)
- **Background:** `#f8fafc` (Off-white paper)
- **Card Fill:** `#ffffff` (Pure white)
- **Primary Color:** `#4f46e5` (Deep Indigo)
- **Accent Color:** `#0891b2` (Dark Teal)
- **Thin Border:** `#e2e8f0` (Light Slate)
- **Secondary Text:** `#64748b` (Slate Gray)

---

## ✍️ 2. Typography Standard
- **Sans-Serif Font:** `Outfit` (loaded via Next.js Google Fonts wrapper). Designed for elegant headings and microcopy.
- **Monospace Font:** `Fira Code` (loaded via Next.js Google Fonts wrapper). Designed for security indicators, terminal consoles, and tags.

---

## 🧱 3. Visual Components & Styling
- **Glassmorphic Glass Surface:**
  - `backdrop-filter: blur(12px)`
  - `border: 1px solid var(--border)`
  - `background: rgba(11, 15, 25, 0.65)` (Dark mode default)
- **Hover Glow Effects:**
  - Hover elements use custom borders containing gradients mapping between primary and accent colors with `opacity: 0.15` moving to `0.5` on interaction.
- **Rounded Corners:**
  - Standard card corner radius: `1.25rem` (`rounded-3xl` or custom `--radius` variables).

---

## 🎬 4. Animation Guidelines
- **Scroll Engine:** Lenis library configures a `1.2s` scroll window using cubic Bezier ease calculations (`Math.min(1, 1.001 - Math.pow(2, -10 * t))`).
- **Micro-interactions:** Interactive components (Navbar items, CTA links, case studies) use spring transitions to feel lightweight and responsive:
  ```typescript
  { type: "spring", stiffness: 380, damping: 30 }
  ```
