# Cleverttech-Mentorship

# Mentorship Platform – Architecture Design

## 🧩 Tech Stack

- Frontend & Backend: **Next.js** with **TypeScript**
- UI: **React** components (possibly using Tailwind CSS)
- API: REST (or gradually evolve to tRPC/GraphQL)
- State Management: Zustand + TanStack Query + Context API (Hybrid setup)
- Auth: NextAuth.js or custom JWT-based system
- Database: PostgreSQL or MongoDB (via Prisma ORM)
- Deployment: Vercel or Docker + Railway/Fly.io

## 🎯 App Goal

A web app where:

- Mentors can create profiles and list skills
- Mentees can browse mentors and book sessions
- Messaging and scheduling are possible

## 🧠 Architecture Principles

- Domain-Driven Design (lightweight intro)
- Folder-based modular structure
- Client-server separation with SSR/ISR/CSR strategies
- Clear separation of concerns (components vs. pages vs. services)

## 🗂 Folder Structure (Planned)

📁 /app (Next.js App Router)
┣ 📁 api
┣ 📁 auth
┣ 📁 dashboard
┣ 📁 mentees
┣ 📁 mentors
┣ 📁 components
┣ 📁 lib
┣ 📁 types
┗ 📁 services

## 🧪 Testing Plan

- Unit tests: Jest + React Testing Library
- E2E tests: Playwright (optional phase)
