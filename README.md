# PODJETNO

**Navdihujoče zgodbe podjetnikov.**

Editorial project hub website for PODJETNO - a project by Moji mediji d.o.o. that discovers and shares inspiring stories of entrepreneurs across Slovenia.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static export (no database required)
- **Content**: JSON files (`/data/stories.json`, `/data/sponsors.json`)

## Features

- **Home page** with hero, about section, stories grid, sponsors, and stats
- **Stories archive** with filtering by region, industry, portal, and year
- **Full-text search** by title and company name
- **Quick-view modal** for story details
- **Partnership page** with contact information
- **SEO optimized** with metadata, OpenGraph, sitemap, and robots.txt
- **Responsive design** for all screen sizes
- **Accessibility** focused with semantic HTML and ARIA labels

## Project Structure

```
podjetno/
├── data/
│   ├── stories.json      # Stories data
│   └── sponsors.json     # Sponsors data
├── public/
│   ├── sponsors/         # Sponsor logos
│   └── images/           # Story images (optional)
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with header/footer
│   │   ├── page.tsx      # Home page
│   │   ├── zgodbe/       # Stories archive page
│   │   ├── partnerstvo/  # Partnership page
│   │   ├── sitemap.ts    # Dynamic sitemap
│   │   └── robots.ts     # Robots.txt
│   ├── components/       # React components
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript types
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd podjetno

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
# Build static export
npm run build

# Preview production build
npx serve out
```

The static files will be generated in the `out/` directory.

## Content Management

### Adding Stories

Edit `data/stories.json` to add new stories:

```json
{
  "id": "unique-story-id",
  "title": "Story Title",
  "dek": "Short description of the story",
  "url": "https://original-article-url.com/...",
  "portal": "mariborinfo",
  "date": "2025-01-15",
  "companyName": "Company Name",
  "region": "Maribor",
  "industryTags": ["technology", "startup"],
  "contentType": "article",
  "hasVideo": false,
  "featured": true,
  "companyFacts": {
    "oneLiner": "Short company description",
    "employees": "50+",
    "founded": "2020"
  },
  "image": "/images/story-image.jpg"
}
```

### Portal codes

- `mariborinfo` - Maribor Info
- `ptujinfo` - Ptuj Info
- `celjeinfo` - Celje Info
- `ljubljanainfo` - Ljubljana Info
- `koperinfo` - Koper Info
- `kranjinfo` - Kranj Info
- `novomestoinfo` - Novo mesto Info

### Adding Sponsors

Edit `data/sponsors.json`:

```json
{
  "id": "sponsor-id",
  "name": "Sponsor Name",
  "logo": "/sponsors/sponsor-logo.svg",
  "url": "https://sponsor-website.com",
  "tier": "gold"
}
```

Tier options: `gold`, `silver`, `bronze`

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect Next.js settings
5. Click Deploy

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Custom Domain Setup

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add `podjetno.mojimediji.si`
4. Configure DNS:
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or use Vercel nameservers

### Environment Variables

No environment variables are required for the static export.

## UTM Parameters

All story links automatically include UTM parameters for tracking:

- `utm_source=podjetno`
- `utm_medium=website`
- `utm_campaign=zgodbe`

## License

Copyright (c) 2025 Moji mediji d.o.o. All rights reserved.
