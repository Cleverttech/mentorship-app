## 🏗️ Architecture

The **Mentorship App** follows a decoupled architecture, separating frontend and backend concerns to ensure scalability, maintainability, and clear collaboration boundaries.

### 📦 Tech Stack

- **Frontend:** React 19, TypeScript, MUI, React Hook Form, Zod
- **Backend:** PHP (Laravel or Symfony)
- **API Communication:** REST (JSON)
- **Database:** MySQL / PostgreSQL or Mongo ?

### ⚙️ Tooling

- Code quality is managed using **Biome** for linting and formatting

---

### 🖥️ Frontend Architecture (React 19)

The frontend is a **Single Page Application (SPA)** built with React 19, structured for modular development.

**Structure:**

```
/frontend
  /src
    /components      → Reusable UI elements (MUI-based)
    /pages           → Route-based views (e.g., /login, /dashboard)
    /hooks           → Custom React hooks (e.g., useAuth, useMentors)
    /api             → API services (e.g., axios clients for backend)
    /contexts        → Global state/context providers
    /types           → Shared TypeScript types/interfaces
    /utils           → Helper functions and constants
```

**Key Practices:**

- Component-driven design using Material UI
- Type-safe forms with `react-hook-form` and `zod`
- API layer for all HTTP communication
- Separation of concerns via hooks and contexts
- Unit and integration tests using Vitest + Testing Library

---

### 🧩 Backend Architecture (PHP - Laravel/Symfony)

The backend exposes a secure REST API, implementing business logic, data handling, and authentication.

**Structure:**

```
/backend
  /app
    /Http/Controllers   → Handle API requests and return responses
    /Services           → Business logic (e.g., session matching)
    /Models             → ORM entities (Laravel Eloquent or Symfony Doctrine)
    /Repositories       → Data access abstraction (optional)
  /routes/api.php       → API route definitions
```

**Features:**

- RESTful endpoint design (`/api/v1/mentors`, `/api/v1/sessions`)
- Input validation and error handling
- Token-based authentication (Laravel Sanctum or Passport)
- PHPUnit tests for backend logic

---

### 🔐 Authentication Strategy

- Token-based auth (via HTTP Authorization headers)
- Frontend stores token securely (e.g., HttpOnly cookie or memory)
- All protected endpoints require `Bearer <token>` authentication

---

### 💳 Payment Integration

The mentorship app will be **subscription-based**, using **Stripe** to manage payment flows securely and reliably.

#### Stripe Integration Features

- Subscription plans (monthly/yearly)
- Secure checkout using Stripe Checkout or Stripe Elements
- Webhook handling for subscription events (success, failure, cancellations)
- Role updates or access control based on subscription status
- Optional: Customer portal for billing management

**Frontend**:

- Stripe Checkout redirection or embedded Elements
- Billing status in user profile page

**Backend**:

- Stripe SDK integration in PHP (Laravel/Symfony SDK or via Stripe API)
- Webhooks to sync Stripe subscription status to user model
- Store `stripe_customer_id`, `subscription_id`, and status in DB

---

### 🚀 Deployment

| Layer    | Platform Suggestions                                      |
| -------- | --------------------------------------------------------- |
| Frontend | Vercel, Netlify, or S3 + CloudFront                       |
| Backend  | DigitalOcean, Render, Railway, or shared PHP host         |
| CI/CD    | GitHub Actions for testing and deployment                 |
| Config   | `.env.*` files for managing environment-specific settings |

---

### 📘 API Contract

- API contract documented in `/docs/api-spec.md`
- Endpoints designed with versioning: `/api/v1/...`
- Request/response schemas defined and validated
- Testing supported via Postman or Swagger/OpenAPI (optional)
