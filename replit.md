# Overview

This is a full-stack web application for Covenant Care Christian Prayer Partner Foundation - a faith-based organization that connects communities through prayer and serves them through various outreach programs. The application features a modern React frontend with a Node.js/Express backend, designed to facilitate community engagement, prayer requests, volunteer coordination, and contact management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript in Vite development environment
- **UI Library**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS styling
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state and caching
- **Forms**: React Hook Form with Zod validation schemas
- **Animations**: Framer Motion for smooth page transitions and scroll-based animations
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting light/dark modes

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas shared between frontend and backend
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **Development**: Vite middleware integration for hot module replacement in development

## Database Design
- **Tables**: contacts, prayer_requests, volunteers
- **Schema**: PostgreSQL-compatible schema using Drizzle ORM with UUID primary keys
- **Migrations**: Drizzle Kit for schema migrations and database management
- **Current Storage**: In-memory storage with interface ready for PostgreSQL integration

## Key Features
- **Multi-form Contact System**: Separate forms for general contact, prayer requests, and volunteer registration
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Performance**: Lazy loading, image optimization, and efficient re-rendering patterns

## Shared Schema Architecture
- **Unified Types**: Single source of truth for data types between frontend and backend
- **Validation**: Zod schemas for runtime validation and TypeScript type generation
- **Path Aliases**: Organized imports with @/ for client, @shared/ for shared code

# External Dependencies

## Core Technologies
- **Database**: PostgreSQL (via Neon serverless) - configured but not actively used (in-memory storage currently active)
- **UI Components**: Radix UI primitives for accessible component foundation
- **Validation**: Zod for schema validation and type safety
- **Styling**: Tailwind CSS with custom design system

## Development Tools
- **Build System**: Vite for frontend bundling and development server
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Backend bundling for production builds
- **Replit Integration**: Replit-specific plugins for development environment

## Third-party Services Ready for Integration
- **WhatsApp Button**: Component ready for WhatsApp integration
- **YouTube Embeds**: Video section with YouTube iframe embedding
- **Social Media**: Footer components prepared for Facebook, Twitter, Instagram, and YouTube links
- **Email Services**: Contact forms ready for email service integration (SendGrid, Mailgun, etc.)

## Production Considerations
- **Session Management**: connect-pg-simple for PostgreSQL session storage (configured)
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection
- **Deployment**: Production build creates static frontend and bundled backend server