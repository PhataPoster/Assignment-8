# BookLoop

BookLoop is a simple library-style web app where users can browse books, filter by category, view book details, and manage an account (sign up / log in / profile).

**Live URL**: https://book-loop-gilt.vercel.app/

## Purpose

- Provide a clean browsing experience for discovering books.
- Support authentication so users can access a personal profile.

## Key Features

- Home page with featured books + “See More” navigation to the full catalog
- All Books page with category-based filtering via URL query params
- Book details page with a “Borrow” action and toast feedback
- Authentication with email/password and Google sign-in
- Profile page with user info + edit profile (name + avatar image)
- Responsive UI components (Navbar, cards, sections) with toast notifications

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- HeroUI
- Better Auth + MongoDB adapter

## NPM Packages Used

**Runtime dependencies**

- next, react, react-dom
- @heroui/react, @heroui/styles
- better-auth, @better-auth/mongo-adapter, @better-auth/infra
- mongodb
- react-toastify
- react-icons, @iconify/react, @gravity-ui/icons
- react-fast-marquee
- react-loader-spinner

**Dev dependencies**

- tailwindcss, @tailwindcss/postcss
- eslint, eslint-config-next

## Getting Started (Local)

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment Variables

Create a `.env.local` file in the project root and set:

```bash
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
```

## Notes

- Book and category data are read from JSON files in `public/`.
- If you face auth issues in local development, ensure the auth client base URL matches your environment.
