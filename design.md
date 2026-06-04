# HPC Club Website Design Philosophy

This document outlines the visual and architectural standards for the High-Performance Computing (HPC) Club website at NCSU. All frontend development must adhere to these principles to maintain a professional, tech-forward, and cohesive brand identity.

## 1. Core Aesthetic: Professional Tech-Minimalism
We reject "AI-generated" aesthetics in favor of a clean, high-precision interface that reflects the power and efficiency of high-performance computing.

*   **Tone**: Professional, academic, and industrial.
*   **Philosophy**: Form follows function. Every element must serve a purpose. Avoid "eye candy" like gradients or emojis.
*   **Inspiration**: High-end hardware documentation, terminal interfaces (modernized), and technical engineering blueprints.

## 2. Branding & Color Palette (NCSU Theme)
We strictly utilize the North Carolina State University brand colors.

| Usage | Color | HEX | Role |
| :--- | :--- | :--- | :--- |
| **Primary** | Wolfpack Red | `#CC0000` | CTA buttons, active states, key accents, branding. |
| **Secondary** | Wolfpack Black | `#000000` | Headers, primary text, dark backgrounds. |
| **Background** | White / Light Gray | `#FFFFFF` / `#F2F2F2` | Main page body, card backgrounds. |
| **Neutral** | Steel Gray | `#666666` | Secondary text, borders, icons. |

**Rules:**
- **No Gradients**: Use solid colors only to maintain a "flat" but deep professional look.
- **High Contrast**: Ensure all text meets AAA accessibility standards against the NCSU Red and Black.

## 3. Typography: Tech-Precision
We require a stylish, "tech" style font that feels modern and mirrors the world of HPC.

*   **Primary Font**: **JetBrains Mono** or **IBM Plex Mono** (for headings and code-related snippets).
*   **Body Font**: **Inter** or **Roboto Flex** (for high legibility at all sizes).
- **Styling**: Bold, uppercase headings for a "command center" feel. Precise letter-spacing for a sophisticated look.

## 4. Layout & Mobile-First Strategy
The site must be fully responsive and optimized for mobile devices.

- **Grid System**: Use a rigid, mathematical grid (like a 12-column system) to convey structure.
- **Negative Space**: Be generous with padding and margins. Do not crowd information.
- **Mobile Navigation**: Use a clean, functional burger menu or a simple horizontal scroll for tabs on mobile. Ensure all touch targets are at least 44x44px.

## 5. Animation & Interaction
Animations should be a **UI enhancement**, not a distraction.

- **Interaction Level**: Use subtle transitions (0.2s - 0.3s) for hover states, button clicks, and modal appearances.
- **Scroll Policy**: **No scroll-jacking or heavy scroll animations.** Scrolling must remain natural and predictable.
- **Micro-interactions**: Use small, crisp animations (e.g., a line sliding under a link, a subtle scale-up on a card) to guide the user's eye.

## 6. Implementation Checklist
- [ ] Uses NCSU Red (#CC0000) for all primary actions.
- [ ] No emojis or gradients used anywhere in the UI.
- [ ] Typography is tech-focused (Mono fonts for headings).
- [ ] Layout is fully responsive and fluid.
- [ ] Animations are restricted to interactive feedback only.
- [ ] Clean, solid-color backgrounds only.
- [ ] "Created By Deerflow" signature included subtly in the footer (https://deerflow.tech).
