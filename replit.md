# Portfolio MERN

## Overview

A full-stack portfolio application built with the MERN stack (MongoDB, Express, React, Node.js). The project uses TypeScript throughout, with a modern React frontend featuring Tailwind CSS for styling and a Node.js/Express backend connected to MongoDB for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Styling**: Tailwind CSS 4 with CSS custom properties for theming, supports dark mode via class-based toggling
- **UI Components**: Radix UI primitives (Dialog, Tabs, Toast) with class-variance-authority for component variants
- **Animations**: Framer Motion for animations
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript (compiled with tsx for development, esbuild for production)
- **Database**: MongoDB via Mongoose ODM
- **API Routes**:
  - `GET /api/projects`: Fetch all projects
  - `GET /api/projects/:id`: Fetch single project
  - `POST /api/projects`: Create new project
  - `POST /api/contact`: Submit contact form
- **Authentication**: JWT (jsonwebtoken) with bcryptjs for password hashing
- **Session Management**: express-session with cookie-parser
- **API Design**: RESTful endpoints under `/api` prefix

### Development Setup
- Frontend dev server runs on port 5000, proxies `/api` requests to backend on port 3000
- Backend serves API endpoints and connects to MongoDB
- Production build bundles frontend to `dist/public` and backend to `dist/backend.js`

### Path Aliases
- `@/*` maps to `./client/src/*` for frontend imports
- `@db/*` maps to `./server/*` for database/server imports

## External Dependencies

### Database
- **MongoDB**: Primary data store, connection string configured via `MONGODB_URI` environment variable, defaults to `mongodb://localhost:27017/portfolio`

### Environment Variables Required
- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (defaults to 3000)

### Third-Party Libraries
- **Mongoose**: MongoDB object modeling with schema validation
- **JWT**: Token-based authentication for API security
- **bcryptjs**: Password hashing for user authentication
- **CORS**: Cross-origin resource sharing middleware