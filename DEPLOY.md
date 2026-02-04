# HDGR Architecture - Deployment Guide

## Files Ready

✅ Complete Next.js 15 project structure
✅ 5 projects hardcoded (from portfolio PDF)
✅ Navigation + routing setup
✅ Brand colors (warmWhite #FDFAF6, anthracite #2B2D2F)
✅ Typography (JetBrains Mono + Inter)
✅ Responsive layout foundation

## Deploy to Vercel (5 minutes)

### Option 1: GitHub + Vercel (Recommended)

1. **Create GitHub repo:**
   ```bash
   # On GitHub.com: New repository → "hdgr-architecture"
   ```

2. **Push code:**
   ```bash
   # Extract hdgr-architecture.tar.gz
   cd hdgr-architecture
   git remote add origin https://github.com/YOUR_USERNAME/hdgr-architecture.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Vercel:**
   - Go to vercel.com
   - "New Project"
   - Import from GitHub
   - Select "hdgr-architecture"
   - Deploy (auto-detects Next.js)

4. **Live in 2 minutes:**
   - URL: `hdgr-architecture.vercel.app`
   - Auto deploys on git push

### Option 2: Vercel CLI

```bash
npm i -g vercel
cd hdgr-architecture
vercel
# Follow prompts, deploys instantly
```

## Post-Deploy Steps

### 1. Add Real Images (Priority)
Images currently show placeholders. Add to `/public/images/`:
- nepal-school-hero.jpg
- nepal-school-1.jpg, nepal-school-2.jpg, nepal-school-3.jpg
- casa-brodna-hero.jpg
- casa-brodna-1.jpg, casa-brodna-2.jpg
- reuse-abbey-hero.jpg
- reuse-abbey-1.jpg, reuse-abbey-2.jpg, reuse-abbey-3.jpg
- fasanenplatz-hero.jpg
- fasanenplatz-1.jpg, fasanenplatz-2.jpg
- reuse-temple-hero.jpg
- reuse-temple-1.jpg, reuse-temple-2.jpg

Extract from PDF or use original high-res files.
Recommended: 1920x1080 for hero, 1600x1200 for gallery.

### 2. Update Image Components
Replace placeholder divs with Next.js Image:
```tsx
import Image from "next/image";

<Image
  src="/images/nepal-school-hero.jpg"
  alt="Nepal School"
  fill
  className="object-cover"
/>
```

### 3. Add Animations (Optional)
Framer Motion already installed:
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### 4. Real Estate "FOR SALE" Feature
Will add after initial launch per tua richiesta.

### 5. Contact Form
Placeholder ready. Options:
- Vercel Forms (free)
- EmailJS
- Custom API route

## Project Structure

```
hdgr-architecture/
├── app/
│   ├── layout.tsx              # Root layout + fonts
│   ├── page.tsx                # Homepage
│   ├── projects/
│   │   ├── page.tsx            # Projects grid
│   │   └── [slug]/page.tsx     # Project details
│   └── contact/page.tsx        # Contact page
├── components/
│   ├── Navigation.tsx          # Header nav
│   └── ProjectCard.tsx         # Project card component
├── lib/
│   └── projects.ts             # Project data
└── public/
    └── images/                 # Add images here
```

## Development

```bash
npm install
npm run dev
# http://localhost:3000
```

## Current Features

✅ Homepage with hero + featured projects
✅ Projects grid (all 5 projects)
✅ Project detail pages (dynamic routes)
✅ Contact page with info
✅ Responsive navigation
✅ Clean typography system
✅ Brand color palette

## Week 1 Checklist

- [ ] Deploy to Vercel
- [ ] Add real images from PDF
- [ ] Test all routes
- [ ] Mobile responsive check
- [ ] Share preview URL

## Next Month Additions

- Sanity CMS migration
- Real estate filtering
- Contact form functionality  
- Smooth page transitions
- About/Team section (quando pronto)
- SEO optimization

## Support

Questions → hendigeryj@gmail.com
Vercel docs → vercel.com/docs
Next.js docs → nextjs.org/docs
