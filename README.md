# MARK J. REMEDIO — Portfolio

Retro sci-fi portfolio site. Built with Vite + React + TypeScript, Tailwind CSS,
Framer Motion, and React Three Fiber (animated starfield background).

## Quick start

```bash
npm install
npm run dev          # local dev server
npm run build        # production build → dist/
npm run preview      # preview the production build
```

## Adding your resume

Drop your PDF into `public/resume.pdf`. The download buttons in the Hero,
Nav, and Contact sections all link to `./resume.pdf`.

## Editing content

All copy lives in [src/data/content.ts](src/data/content.ts) — profile, about,
skills, experience, freelance, education. URL fields are empty by default;
fill them in to render external links (`↗`) where applicable.

## Deploying to GitHub Pages

1. Create a new GitHub repo and push this project to `main`.
2. In the repo settings → **Pages** → set **Source** to **GitHub Actions**.
3. The workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
   runs on every push to `main`. It builds with
   `VITE_BASE_PATH=/<repo-name>/` so asset paths resolve correctly under the
   project subpath (e.g. `https://<user>.github.io/<repo-name>/`).

If you're using a **custom domain** or deploying to `<user>.github.io`
(no subpath), edit the workflow's `VITE_BASE_PATH` to `/`.

For local builds the default base is `/portfolio/` (see
[vite.config.ts](vite.config.ts)). Override locally with:

```bash
VITE_BASE_PATH=/ npm run build
```

## Customization notes

- Theme colors and animations live in [tailwind.config.js](tailwind.config.js).
- CRT scanlines, glow text, and the panel border style are in
  [src/index.css](src/index.css) under `@layer components`.
- Star density and rotation speed are in
  [src/components/Starfield.tsx](src/components/Starfield.tsx).
