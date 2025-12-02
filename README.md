# Portfolio (React + TypeScript + Vite + Tailwind)

A fully accessible, modern portfolio built with React, TypeScript, Vite and Tailwind CSS. It replaces the old CRA app located in `old/` and keeps your content while improving structure, performance and UX.

## Tech stack
- React 18 + TypeScript
- Vite 6
- Tailwind CSS 3
- React Router 7
- Framer Motion
- React Hook Form + Zod
- Lucide Icons

## Accessibility (WCAG 2.2)
- Semantic HTML with proper landmarks (`header`, `nav`, `main`, `footer`)
- Keyboard navigable, visible focus states
- Skip to main content link
- Color contrast >= 4.5:1 for text
- Link purpose is clear
- Form inputs have labels, error messages, and ARIA associations
- Reduced motion support via `prefers-reduced-motion`

## Project structure
```
src/
  components/
    common/     # reusable primitives (Button, Card, Badge, Container, Section)
    layout/     # Header, Footer, Layout
    sections/   # Hero, TechnologySlider, ProjectCard, CertificateCard
  pages/        # Home, Projects, Certificates, About, Contact
  data/         # portfolio.ts, projects.ts, certificates.ts, technologies.ts
  types/        # TypeScript interfaces
  utils/        # helpers (date formatting, classes)
  styles/       # Tailwind index.css
```

## Local development
1. Install dependencies
   ```pwsh
   npm install
   ```
2. Run dev server
   ```pwsh
   npm run dev
   ```
3. Build for production
   ```pwsh
   npm run build
   ```

## Content updates
- Edit `src/data/portfolio.ts` for personal info, interests and social links.
- Edit `src/data/projects.ts` to add/update projects.
- Edit `src/data/certificates.ts` to add/update certificates.
- Edit `src/data/technologies.ts` to add/update the tech slider.

## Routing
- Hash routing is used to support GitHub Pages (`/#/route`). Adjust in `src/App.tsx` if deploying elsewhere.

## Assets
Place images under `public/assets` using these paths:
- Technologies: `public/assets/technologies/*.png`
- Certificates: `public/assets/certificates/*.png`
- Interests: `public/assets/interests/*.jpg`

See `ASSETS_NEEDED.md` for a fill list.

## Deployment

### GitHub Pages (Automated with GitHub Actions)
1. Go to your GitHub repository Settings > Pages
2. Under "Build and deployment", set Source to "GitHub Actions"
3. Push to the `main` branch - the workflow in `.github/workflows/deploy.yml` will automatically build and deploy
4. Your site will be live at `https://<username>.github.io/Portfolio/`

**Note:** The `base: '/Portfolio/'` in `vite.config.ts` is configured for a repo named "Portfolio". If your repo has a different name, update it accordingly.

### Manual Deployment
Alternatively, you can deploy manually:
```pwsh
npm run build
# Then upload the dist/ folder to your hosting provider
```

## 404 Handling
- A custom 404 page is included at `/404` route
- All unmatched routes show the NotFound component with navigation options

## License
MIT
