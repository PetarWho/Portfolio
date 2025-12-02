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

### Personal Info, Projects, Interests
- Edit `src/data/portfolio.ts` for personal info, interests and social links.
- Edit `src/data/projects.ts` to add/update projects.

### Technologies (Auto-Discovery)
Technologies are automatically discovered from `public/assets/technologies/`:
1. Add your technology logo (png, jpg, jpeg, or svg) to `public/assets/technologies/`
2. The filename (without extension) will be used as the display name
3. Optionally, add a mapping in `src/data/technologies.ts` `nameMap` for custom display names
4. Push to GitHub - it will appear automatically!

**Example:** Add `typescript.png` → displays as "Typescript" (or map it to "TypeScript" in nameMap)

### Certificates (Auto-Discovery with Metadata)
Certificates require both an image AND metadata:
1. Add certificate image to `public/assets/certificates/` (e.g., `new-cert.png`)
2. Add metadata to `src/data/certificates.ts` in the `certificateMetadata` object:
   ```typescript
   'new-cert': {
     name: 'Certificate Name',
     issuer: 'Issuing Organization',
     category: 'Category',
     date: new Date(2024, 0, 15), // January 15, 2024
     url: 'https://verify-url.com',
     priority: 80, // Optional: Higher = shows first (default: 0)
   }
   ```
3. Push to GitHub - the certificate will appear automatically!

**Sorting Order:**
1. **Priority** (higher first) - Use this for your most important certificates
2. **Category** (Diploma > DevOps > C#/Python/JavaScript > Database > Fundamentals)
3. **Date** (newest first)

## Routing
- **BrowserRouter** with clean URLs (no hash `#`)
- Uses GitHub Pages SPA redirect technique via `404.html` and `index.html` scripts
- `basename` is set to `/Portfolio/` for GitHub Pages deployment
- Direct URL access works correctly (e.g., `https://username.github.io/Portfolio/about`)

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
