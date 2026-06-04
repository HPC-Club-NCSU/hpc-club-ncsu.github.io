# HPC Club Website Technical Architecture

This document defines the technical stack, folder structure, and development patterns for the High-Performance Computing (HPC) Club website.

## 1. Tech Stack
- **Framework**: [React](https://react.dev/) (Functional Components with Hooks)
- **Build Tool**: [Vite](https://vitejs.dev/) (For fast development and optimized builds)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first styling adhering to `design.md` constraints)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Recommended for type safety and better developer experience)

## 2. Component Philosophy: Extreme Modularity
To minimize points of failure and improve maintainability:
- **Modularize Everything**: If a piece of UI is reused or exceeds 100 lines, extract it into a separate component.
- **Pure Components**: Keep UI components "dumb" (focus on rendering props) and handle logic in specialized hooks or parent containers.
- **Atomic Design**: Structure components into `atoms` (buttons, inputs), `molecules` (search bar, nav items), and `organisms` (header, footer, cards).

## 3. Directory Structure
```text
src/
├── api/              # Pseudo-API layer (Data fetching abstractions)
├── components/       # Reusable UI components
│   ├── ui/           # Atomic components (Tailwind-based)
│   ├── layout/       # Header, Footer, Sidebar
│   └── modules/      # Page-specific complex components
├── hooks/            # Custom React hooks
├── pages/            # Page-level components (Home, About, Events)
├── data/             # Hardcoded JSON data / Placeholders
├── styles/           # Global CSS and Tailwind config
└── App.tsx           # Main entry point
```

## 4. API Layer (Data Abstraction)
Even as a frontend-only site, we will implement an API abstraction layer to allow for a seamless transition to a real backend later.

- **Pattern**: Create service functions in `src/api/` (e.g., `eventsService.ts`).
- **Data Flow**: `Component` -> `Hook` -> `API Service` -> `Mock Data`.
- **Implementation**:
  ```typescript
  // Example API Service (src/api/events.ts)
  export const fetchEvents = async () => {
    // Current: Return hardcoded data from src/data/
    // Future: Replace with axios/fetch call to backend
    return mockEvents;
  };
  ```

## 5. Data & Placeholders
- **Hardcoding**: All site content (events, officers, cluster specs) should be stored in `src/data/` as JSON or TypeScript constants.
- **Placeholders**: Use "Lorum Ipsum" or descriptive placeholders (e.g., "Cluster hardware specs coming soon...") where real data is missing. Never leave a UI section empty or broken.

## 6. Technical Constraints (Ref: design.md)
- **Tailwind Config**: Extend the Tailwind theme to include NCSU colors (`#CC0000`, `#000000`) and the tech-mono font families.
- **No Heavy Libraries**: Avoid large animation libraries. Rely on Tailwind transitions and basic CSS.
- **Responsive**: All components must use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) as a default.
