# Assets Needed

Place images under `public/assets`.

## Technologies (public/assets/technologies) - AUTO-DISCOVERED ✨

**Any image you add here will automatically appear in the technology slider!**

Recommended images (44x44 transparent PNG):

**To add a new technology:**
1. Add the logo image to `public/assets/technologies/`
2. Filename becomes the display name (e.g., `typescript.png` → "Typescript")
3. Optionally, customize the name in `src/data/technologies.ts` nameMap
4. Supported formats: png, jpg, jpeg, svg

---

## Certificates (public/assets/certificates) - AUTO-DISCOVERED ✨

**Images are auto-discovered, but you need to add metadata!**

Recommended size: landscape orientation ~1000x600 for good clarity.

**To add a new certificate:**
1. Add certificate image to `public/assets/certificates/` (e.g., `new-cert.png`)
2. Add metadata to `src/data/certificates.ts`:
   ```typescript
   'new-cert': {
     name: 'Certificate Name',
     issuer: 'Issuing Organization',
     category: 'Category', // Diploma, DevOps, C#, Python, JavaScript, Database, Fundamentals
     date: new Date(2024, 0, 15), // Month is 0-indexed
     url: 'https://verify-url.com',
     priority: 80, // Optional: Higher = shown first (default: 0)
   }
   ```
3. The certificate will appear automatically!

**Smart Sorting:**
Certificates are sorted by:
1. **Priority** (100 = highest, 0 = default) - Set this for your most important certs
2. **Category** (Diploma > DevOps > C#/Python/JavaScript > Database > Fundamentals)
3. **Date** (newest first within same priority/category)

---

## Interests (public/assets/interests)

Recommended size: 1200x800 JPEG.

To update interests, edit `src/data/portfolio.ts`.
