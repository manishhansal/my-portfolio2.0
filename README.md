# My Portfolio 2.0

A personal portfolio web app built with [Next.js](https://nextjs.org), [React](https://react.dev), [Tailwind CSS](https://tailwindcss.com), and [TypeScript](https://www.typescriptlang.org/).

## Features

- GitHub-inspired UI with custom navbar and sidebar
- Light/Dark theme toggle (persists user preference)
- Responsive design
- Framer Motion for smooth animations
- Modular component structure

## Project Structure

```
context/            # Theme context provider and hook
pages/              # Next.js pages and components
  components/       # Reusable UI components (Navbar, Sidebar, etc.)
public/             # Static assets (profile picture, etc.)
styles/             # Global CSS (Tailwind)
utils/              # Constants and utility functions
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Run ESLint

## Tech Stack

- Next.js
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- ESLint & Prettier

## Customization

- Update your profile picture in [`public/pcboi2.png`](public/pcboi2.png)
- Edit constants in [`utils/constants.ts`](utils/constants.ts)
- Modify theme logic in [`context/ThemeContext.tsx`](context/ThemeContext.tsx)

## License

This project is private and for personal use.

---

Inspired
