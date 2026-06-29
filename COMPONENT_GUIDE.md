# React Component Guide

A developer guide detailing custom component properties, states, and event handles.

---

## 🧭 1. Shell & System Layouts

### 🌐 `Background.tsx`
- **Location:** `src/components/Background.tsx`
- **Objective:** Tracks user viewport cursor coordinates (`clientX`, `clientY`) relative to container bounds to output standard responsive custom light glows. Uses raw inline-SVG vector points for network lines, keeping CPU and memory overhead low.

### 💊 `Navbar.tsx`
- **Location:** `src/components/Navbar.tsx`
- **Objective:** Floating pill navigation header. Incorporates a theme-switching handler to loop through `dark` ➡️ `light` ➡️ `system` states. Uses Framer Motion's `layoutId="activePill"` to animate transitions between links.

---

## 🖥️ 2. Section Components

### 📟 `Hero.tsx`
- **Location:** `src/components/Hero.tsx`
- **Objective:** Display personal taglines and CTA triggers. Integrates a simulated terminal emulator that prints network audit logs. Add log lines by modifying the `logs` array:
  ```typescript
  const logs = [ ... ];
  ```

### 🧠 `Skills.tsx`
- **Location:** `src/components/Skills.tsx`
- **Objective:** Renders active capability categories. Replaces traditional sliding percentage bars with discrete segmented blocks (representing qualitative ratings from 1 to 5) to display relative expertise fairly.

### 📂 `Projects.tsx`
- **Location:** `src/components/Projects.tsx`
- **Objective:** Implements technology filter tabs and expandable case study overlay cards. Clicking on a card sets the state variables (`activeCaseStudyId`) which slides up a detailed detail modal.

### 🎓 `Certifications.tsx`
- **Location:** `src/components/Certifications.tsx`
- **Objective:** Displays academic/professional credentials. If no `previewUrl` (screenshot) is supplied, it displays a dynamic vector award badge. Clicking "Preview" opens an image overlay.

### 📝 `Resume.tsx`
- **Location:** `src/components/Resume.tsx`
- **Objective:** Integrates a styled print layout. Triggering `Print CV` invokes the browser's native print window (`window.print()`). Uses custom page print directives.

### 📨 `Contact.tsx`
- **Location:** `src/components/Contact.tsx`
- **Objective:** Validates inputs (`name`, `email`, `subject`, `message`) on submission. Uses regex validation for emails. If inputs are valid, it sets `isSubmitting` to trigger loading spinners, followed by success banners.
