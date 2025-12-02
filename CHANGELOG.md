# Changelog

## Latest Updates

### Clean URLs & Image Path Fixes 🔗
- **Removed hash routing** - URLs are now clean (e.g., `/Portfolio/about` instead of `/#/about`)
- Switched from `HashRouter` to `BrowserRouter`
- Added GitHub Pages SPA redirect technique for client-side routing
- **Fixed 404 image errors** - Changed all image paths from `/assets/` to `assets/` (relative)
- All assets now load correctly on GitHub Pages

### Priority-Based Certificate Sorting 🎯
- Added `priority` field to certificates (higher number = shown first)
- Smart multi-level sorting:
  1. **Priority** (highest first)
  2. **Category** (Diploma > DevOps > specializations > Database > Fundamentals)
  3. **Date** (newest first)
- Set priority on your most important certificates (e.g., Full Stack Diplomas = 100)
- Customize category priority in `src/data/certificates.ts`

### TypeScript Fixes ✅
- Fixed `Section` component ref type error by using `ElementType`
- Removed unused `Button` import from `ProjectCard`
- Fixed `NodeJS.Timeout` error by using `ReturnType<typeof setTimeout>`

### Auto-Discovery Features 🎉

#### Technologies
- **Fully automatic!** Just add images to `public/assets/technologies/`
- Filename becomes the display name (customizable via nameMap)
- Supports: png, jpg, jpeg, svg
- Automatically sorted alphabetically

**Example:**
```bash
# Add a new technology
cp typescript.png public/assets/technologies/
git push
# That's it! It appears on your site automatically
```

#### Certificates
- **Semi-automatic:** Images auto-discovered + metadata required
- Add image to `public/assets/certificates/`
- Add metadata to `src/data/certificates.ts`
- Automatically sorted by date (newest first)

**Example:**
```typescript
// In src/data/certificates.ts, add to certificateMetadata:
'aws-certified': {
  name: 'AWS Certified Developer',
  issuer: 'Amazon Web Services',
  category: 'Cloud',
  date: new Date(2024, 11, 1), // December 1, 2024
  url: 'https://aws.amazon.com/verification',
}
```

### Benefits
- **No more hardcoding paths** in data files
- **Add new assets instantly** - just drop files and push
- **Less code to maintain** - images and metadata sync automatically
- **Type-safe** - TypeScript ensures correctness
- **Console warnings** for missing metadata

### Migration Notes
If you have existing technology or certificate images:
1. Place them in the correct folders (`public/assets/technologies/` or `public/assets/certificates/`)
2. For technologies: optionally add custom names to `nameMap`
3. For certificates: metadata is already in place
4. Everything works automatically!
