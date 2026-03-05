# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio homepage for MEUSE24 (developer from Austria). Built with Astro and Tailwind CSS v4, featuring a component-based architecture with multi-language support (German/English).

## Development

**Install dependencies:**
```bash
npm install
```

**Development server:**
```bash
npm run dev
# Visit http://localhost:4321
```

**Build for production:**
```bash
npm run build
# Output in ./dist/
```

**Preview production build:**
```bash
npm run preview
```

## Architecture

**Tech Stack:**
- **Astro**: Static site generator with component-based architecture
- **Tailwind CSS v4**: Utility-first CSS framework (via @tailwindcss/vite)
- **TypeScript**: Type-safe JavaScript with strict mode enabled

**Project Structure:**
```
src/
├── components/      # Reusable Astro components
│   ├── Header.astro       # Navigation drawer with hamburger menu
│   ├── Hero.astro         # Homepage hero section
│   ├── ProjectCard.astro  # Reusable project card component
│   └── Footer.astro       # Footer with language switcher
├── layouts/
│   └── BaseLayout.astro   # Base HTML layout with meta tags
├── pages/
│   └── index.astro        # Main page with all project sections
├── scripts/
│   └── i18n.ts           # Multi-language translation system
└── styles/
    └── global.css        # Global styles and Tailwind imports
```

**Key Features:**
- **Component-based**: Modular Astro components for maintainability
- **Multi-language (DE/EN)**: Client-side i18n with localStorage persistence
- **Hash-based routing**: Section navigation via URL fragments (#home, #geoshare, etc.)
- **Lazy loading**: Intersection Observer for project sections
- **Responsive**: Mobile-first design with Tailwind utilities
- **Accessible**: ARIA labels, focus management, skip links, keyboard navigation
- **Dark/Light mode**: Automatic via `prefers-color-scheme`

**Multi-language System (src/scripts/i18n.ts):**
- Translations stored in TypeScript const object
- Safe localStorage wrapper with error handling
- HTML sanitization (whitelist: strong, span, br, em, b, i tags)
- Auto-detects browser language on first visit
- Elements with `[data-key]` attribute are translated dynamically
- Language buttons in Footer component

**CSS Architecture:**
- Tailwind CSS v4 for utility classes in HTML
- Custom CSS for complex animations and unique styling
- CSS variables defined in `@theme` directive (global.css)
- Scoped component styles use regular CSS (not @apply)
- Responsive breakpoints: mobile-first with media queries

## Frontend Design Guidelines

This project uses production-grade frontend design. Apply the following principles:

### Design Thinking
Before coding, commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick a clear direction: brutally minimal, maximalist, retro-futuristic, organic/natural, luxury/refined, playful, editorial, brutalist, art deco, soft/pastel, industrial, etc.
- **Differentiation**: What makes this UNFORGETTABLE?

### Aesthetics Guidelines
- **Typography**: Choose beautiful, unique fonts. Avoid Inter, Roboto, Arial, system fonts. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic with CSS variables. Dominant colors with sharp accents.
- **Motion**: CSS animations for HTML, Motion library for React. Staggered page-load reveals, meaningful hover states.
- **Spatial Composition**: Unexpected layouts, asymmetry, overlap, generous negative space OR controlled density.
- **Backgrounds**: Gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows.

NEVER use: purple gradients on white, generic layouts, Space Grotesk/Inter/Roboto, cookie-cutter components.

Vary between light/dark themes, different fonts, different aesthetics per component. Execute each vision with full commitment.

## Important Notes

- **Background images**: `title.webp` and `title.jpg` referenced but not in repository
- **Sub-apps**: Links reference subdirectories (`apps/`, `schulungsmodell/`, etc.) that may not exist locally
- **Tailwind v4 limitations**:
  - Do NOT use `@apply` directives in component `<style>` blocks
  - Use Tailwind classes directly in HTML/JSX
  - Use regular CSS for scoped component styles
  - Use `theme()` function carefully (may not work with all color values)
- **TypeScript**: Strict mode enabled, use proper types

## Code Style

**Astro Components:**
- Use TypeScript in frontmatter
- Define Props interface for component props
- Use semantic HTML5 elements
- Keep components focused and single-purpose
- Use `<script>` blocks for client-side interactivity
- Mark client scripts with `client:*` directives when needed

**Styling:**
- Prefer Tailwind utility classes in HTML over custom CSS
- Use `class` attribute (not `className`) in Astro files
- For complex styles, use component-scoped `<style>` blocks with regular CSS
- Maintain CSS variable naming conventions from global.css
- Follow mobile-first responsive approach

**JavaScript/TypeScript:**
- Use TypeScript for type safety
- Maintain accessibility features (ARIA, focus management)
- Use safe localStorage wrapper from i18n.ts
- Sanitize any user-generated or translation content
- Follow existing patterns for event listeners and DOM manipulation

**File Organization:**
- Components in `src/components/`
- Layouts in `src/layouts/`
- Pages in `src/pages/`
- Scripts/utilities in `src/scripts/`
- Global styles in `src/styles/`
- Static assets in `public/`
