# HDGR Architecture Portfolio

Architecture portfolio website for Julian Hendigery.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
npm run build
```

Push to GitHub and connect to Vercel.

## Project Structure

```
/app
  /page.tsx              # Homepage
  /projects/page.tsx     # Projects grid
  /projects/[slug]/      # Project detail pages
  /contact/page.tsx      # Contact page
/components              # Reusable components
/lib/projects.ts         # Project data
```

## TODO

- [ ] Add real images from portfolio PDF
- [ ] Implement image optimization
- [ ] Add Framer Motion animations
- [ ] Create contact form functionality
- [ ] Add real estate "FOR SALE" filter
- [ ] Mobile responsive polish
- [ ] About/Team section

## Colors

- Warm White: `#FDFAF6`
- Anthracite: `#2B2D2F`

## Typography

- Headings: JetBrains Mono
- Body: Inter
