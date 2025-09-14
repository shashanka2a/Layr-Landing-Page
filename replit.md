# Overview

Layr.plus is a Next.js-based web application successfully converted from React + Vite, showcasing a modern platform with layered services or solutions. The project is built with Next.js 15 and React 19, featuring a comprehensive UI component library based on Radix UI primitives and styled with Tailwind CSS v4. The application includes sophisticated animations using Motion (formerly Framer Motion) and implements a complete design system with shadcn/ui components.

**Conversion Status**: ✅ COMPLETED - React + Vite successfully converted to Next.js with App Router
**Production Build**: ✅ WORKING - All TypeScript errors resolved, deployment ready
**Development Server**: ✅ RUNNING - Fast compilation times (~200-500ms)
**Last Updated**: September 14, 2025 - Production build issues resolved

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application follows a modern React architecture pattern using Next.js App Router. The main page (`app/page.tsx`) implements a client-side component with motion animations, suggesting an interactive landing page experience. The layout system uses the new Next.js app directory structure with a root layout that incorporates Google Fonts (Geist) for typography.

## Component Design System
The project implements a comprehensive component library located in `components/ui/`, featuring over 30 reusable UI components built on top of Radix UI primitives. This includes form controls, navigation elements, data display components, and interactive widgets. The design system uses class-variance-authority (CVA) for consistent styling variants and Tailwind CSS for utility-first styling.

## Styling Architecture
The styling approach combines Tailwind CSS with a custom design token system defined in `globals.css`. The application supports both light and dark themes with CSS custom properties, implementing a sophisticated color system with OKLCH color space for better color consistency. The styling includes custom variants and a comprehensive set of design tokens for spacing, colors, and typography.

## Animation System
Motion (v12) is integrated for sophisticated animations and interactions. The main page demonstrates usage of motion components with stagger animations and interactive elements, suggesting a focus on user experience and visual appeal.

## Development Configuration
The application is specifically configured for the Replit environment with custom Next.js settings including allowed development origins for `*.replit.dev` domains and React strict mode disabled for better compatibility. TypeScript is configured with modern ES2017 target and path mapping for clean imports using the `@/` alias.

# External Dependencies

## UI and Design
- **Radix UI**: Complete set of unstyled, accessible UI primitives including dialogs, dropdowns, forms, and navigation components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library providing consistent iconography
- **class-variance-authority**: Type-safe component variants
- **clsx**: Utility for constructing className strings conditionally

## Animation and Interaction
- **Motion**: Modern animation library for React (successor to Framer Motion)
- **Embla Carousel**: Carousel/slider component for content presentation
- **next-themes**: Theme switching functionality for dark/light modes

## Form Handling
- **React Hook Form**: Form state management and validation
- **React Day Picker**: Date picker component for form inputs
- **input-otp**: OTP (One-Time Password) input component

## Development Tools
- **TypeScript**: Static type checking
- **ESLint**: Code linting and quality assurance
- **Next.js**: React framework for production applications

## Third-party Services
The application is configured for deployment on Vercel platform with optimizations for the Replit development environment. No database connections or external API integrations are currently visible in the codebase, suggesting this may be a frontend-only application or the backend integration is planned for future implementation.