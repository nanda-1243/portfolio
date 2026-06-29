# Amara Maruthi — Portfolio

A premium, Apple-inspired portfolio for **Amara Maruthi Venkatasatyakishore**, Machine Learning Engineer.
Built with **React + Vite + Tailwind CSS + Framer Motion**, with a glassmorphism dark theme, tilt/spotlight
project cards, and dedicated "Read More" pages for each project.

## Projects featured

Exactly the three projects from the resume — content matched to the resume, nothing invented:

1. **Maritime Geospatial Intelligence System** (WESEE, Delhi)
2. **Health Monitoring & Tracking System** (OCF)
3. **AI Document Analysis using LLMs** (RAG-based Intelligent Document QA System)

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animations, tilt, spotlight)
- React Router (HashRouter — GitHub Pages friendly)
- lucide-react icons

## Develop locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the build
```

## Editing content

All content lives in two files — no need to touch components:

- `src/data/profile.ts` — name, summary, skills, experience, education, certifications, social links.
- `src/data/projects.ts` — the three projects (titles, features, technologies, Read-More sections).

### Adding real project links

In `src/data/projects.ts`, each project has:

```ts
links: { github: 'https://github.com/...', demo: null }
```

- Set `github` to the repo URL.
- Set `demo` to a live URL to reveal the **Live Demo** button (leave `null` to hide it).

### Adding real screenshots

Drop images into `public/` and reference them in the `gallery` array / `ProjectBanner` as needed.
The current banners are stylized, generated SVG visuals (not stock or fake screenshots).

## Deploy to GitHub Pages

1. Push to the `main` branch (or merge your feature branch into `main`).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.
4. Site URL: `https://nanda-1243.github.io/portfolio/`

> If your GitHub username/repo differs, update `base` in `vite.config.ts` and `homepage`
> in `package.json` to match `/<repo-name>/`.
