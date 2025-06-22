
```markdown
🎓 Mentorship App – Frontend

This is the **frontend** codebase for the Mentorship Web App, a platform that connects mentors with mentees through a credit-based booking system. The frontend is built with React 19, TypeScript, and Material UI (MUI), and handles all user-facing features.

🚀 Tech Stack

- React 19
- TypeScript
- Material UI (MUI)
- React Router
- React Hook Form + Zod (for form handling & validation)
- Axios (for API calls)
- Vite / React Scripts (depending on setup)


📁 Folder Structure (WIP)

```

src/

├── components/       # Reusable UI components

├── pages/            # Route-based pages (e.g., Login, Dashboard)

├── features/         # Feature-based slices (e.g., Auth, Booking)

├── hooks/            # Custom React hooks

├── utils/            # Utility functions

├── services/         # API services

├── types/            # TypeScript type declarations

├── assets/           # Static assets (e.g., logo, icons)

└── App.tsx

````

## 🧠 Key Features

- 🔐 Authentication (login/register with role-based access)
- 👩‍🏫 Mentor Dashboard (manage profile, bookings, articles)
- 👩‍🎓 Mentee Dashboard (purchase credits, book mentors)
- 📆 Booking System (calendar-based scheduling)
- 💬 Chat System (one-on-one messaging)
- 📝 Article Publishing (mentor-created content)
- 🌐 Community Feed (coming soon)


## 🛠️ Getting Started

1. Clone the repo
   ```bash
   git clone https://github.com/Cleverttech/mentorship-frontend.git
   cd mentorship-frontend
````

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the dev server

   ```bash
   npm run dev
   ```

## 📦 Deployment

The app is prepared for deployment via:

* Vercel
* Netlify
* AWS S3/CloudFront (optional)

## 📄 License

MIT – feel free to use and adapt with attribution.


## 🌍 Backend

👉 [Mentorship App Backend Repo](https://github.com/charitydarko/mentorship-backend) (PHP/Laravel or similar)
