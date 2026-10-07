# Makrand Ghodke — Personal Engineering Portfolio

A personal portfolio built for an M.Sc. ICE student at TU Darmstadt applying for Machine Learning, AI, and Data Science Werkstudent and HiWi positions.

Live deployment target: **Vercel**  
Primary palette: Dark theme (`#0B0D12` obsidian, `#22D3EE` electric cyan, `#8B5CF6` violet)

---

## Tech Stack
- **Framework:** Next.js 15 (Turbopack App Router) + TypeScript
- **Styling:** Tailwind CSS v4 + Design Tokens in CSS Variables
- **Icons & Fonts:** `lucide-react`, Geist Sans & Geist Mono via `next/font`
- **Theming:** `next-themes` (Dark mode default with system preference toggle)
- **Analytics:** `@vercel/analytics` (Cookieless)
- **SEO & Social:** Dynamic `next/og` Open Graph card, JSON-LD `Person` schema, dynamic `sitemap.xml`, and `robots.txt`

---

## Maintenance Guide (How-To in 5 Lines)

### How to add a new project
1. Open `content/projects.ts` and append a new object to the `projects` array with `slug`, `title`, `tagline`, and `stack`.
2. Add problem and approach/architecture summaries in `overview`.
3. If featuring on the home page, set `featured: true`.
4. Create a deep-dive case study page under `src/app/projects/[slug]/page.tsx` importing your data.
5. Add project links (`github`, `live`) and optional `demoVideo` / `demoPoster`.

### How to add a changelog entry
1. Open `content/changelog.ts`.
2. Append a new object to `changelogEntries`: `{ id, date: "YYYY-MM-DD", project, projectSlug, title, summary, tags }`.
3. The `/changelog` page and home page "Now Building" section will automatically render it in chronological order.
4. Add relevant tags for filtering (e.g. `["CLIP", "FAISS", "FastAPI"]`).
5. Run `npm run build` to verify types.

### How to add a demo video
1. Drop your video file into `public/videos/your-demo.mp4` (or grab an unlisted YouTube video URL).
2. Save a poster frame screenshot into `public/images/projects/your-poster.jpg`.
3. Open `content/projects.ts` and locate the target project.
4. Set `demoVideo: "/videos/your-demo.mp4"` (or the YouTube URL) and `demoPoster: "/images/projects/your-poster.jpg"`.
5. The `<DemoVideo />` component will automatically switch from the standby placeholder to interactive playback.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server (runs on port 3000)
npm run dev

# Run strict TypeScript validation
npx tsc --noEmit

# Create optimized production build
npm run build

# Start production server locally
npm run start
```

---

## Deploying to Vercel

1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/MakrandGhodke/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import your repository.
3. Framework Preset: **Next.js** (auto-detected).
4. Click **Deploy**. Vercel will build and assign a `.vercel.app` URL.
5. In Vercel Project Settings → **Domains**, add your custom domain and configure DNS.
