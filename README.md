# Simple Movies Website

This is Ziad's fork of [shaker03/Simple-Movies-Website](https://github.com/shaker03/Simple-Movies-Website).

A simple React movie app built with Vite.

## Overview

This project demonstrates:

- React function components
- `useState` and `useEffect`
- React Router navigation
- Context API for shared app state
- Basic CRUD flow on the client side
- Component-based styling with CSS Modules

## Pages and Routing

- `/` Home page
- `/about` About placeholder page
- `/contact` Contact placeholder page
- `/movies/:id` Movie details page

## Main Features

- Fetches movies from TVMaze API (`https://api.tvmaze.com/shows?page=1`)
- Displays movies in cards
- Remove movie from list
- Add a new movie from form
- View movie details
- Update movie data from details page

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Notes

- API fetch is real.
- Add/Update/Remove operations are local (in-memory state), so changes reset on page refresh.

---

Built by [Ziad Ahmed](https://github.com/Ziad-NasrEldin) at [MaVoid](https://mavoid.com).

[Website](https://mavoid.com) · [LinkedIn](https://linkedin.com/in/ziad-ahmed-634202332) · [GitHub](https://github.com/Ziad-NasrEldin)
