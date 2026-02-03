# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

## Architecture

This is a Next.js 14 architecture portfolio site using the App Router, TypeScript, Tailwind CSS, and Framer Motion for animations.

### Data Flow

Project data is hardcoded in `lib/projects.ts` as a typed array. The `Project` interface defines the schema for all portfolio entries. Pages import and filter this data directly - no API routes or CMS.

### Route Structure

- `/` - Homepage with hero section + 3 featured projects
- `/projects` - Full project grid (all projects from lib/projects.ts)
- `/projects/[slug]` - Dynamic project detail pages using slug from project data
- `/contact` - Contact information page

### Styling System

**Tailwind config** (`tailwind.config.ts`):
- Brand colors: `warmWhite` (#FDFAF6), `anthracite` (#0D0D0D)
- Fonts via CSS variables: `font-mono` (Roboto Mono), `font-sans` (Inter)
- Custom `blink` animation for typewriter cursor

**Font loading** happens in `app/layout.tsx` using `next/font/google` with CSS variable injection.

### Client Components

Pages using Framer Motion animations must have `"use client"` directive:
- `app/page.tsx` - Hero animations, scroll-triggered project cards
- `app/projects/page.tsx` - Animated project grid
- `components/ProjectCard.tsx` - Hover effects with motion
- `components/Typewriter.tsx` - Typewriter effect with `useTypewriter` hook

### Image Handling

Images go in `public/images/`. Project images referenced in `lib/projects.ts` follow the pattern:
- Hero: `{slug}-hero.jpg`
- Gallery: `{slug}-1.jpg`, `{slug}-2.jpg`, etc.

Currently using placeholder divs where images are missing.
