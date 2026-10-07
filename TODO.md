# Pending Assets & Next Steps Tracker (TODO)

This document tracks all external media, credentials, and settings to be supplied by Makrand Ghodke.

---

## 1. Completed Assets & Integrated Data
- [x] **Curriculum Vitae (PDF):** `public/cv.pdf` integrated and linked from Navbar, Hero, and Footer.
- [x] **Profile Photo:** `public/makrand.jpg` integrated with ambient backlight and TU Darmstadt status badge in the Hero section.
- [x] **Design Tokens & System:** Electric Cyan (`#22D3EE`), dark slate obsidian (`#0B0D12`), Geist fonts, and responsive grid layouts.
- [x] **DigiGuide Backend Updates:** Docker containerization on Render, 38 pytest suite with regression testing, and CI workflow documented in Changelog and Case Study.

---

## 2. Pending Assets (To supply when ready)

### A. Demo Videos & Posters
- [ ] **DigiGuide Demo Video:**
  - Place video at `public/videos/digiguide-demo.mp4` or provide an unlisted YouTube URL.
  - Set `demoVideo` in `content/projects.ts` under `digiguide`.
- [ ] **DigiGuide Demo Poster:**
  - Place poster screenshot at `public/images/projects/digiguide-poster.jpg`.
  - Set `demoPoster` in `content/projects.ts`.
- [ ] **SpendWise Demo Video:**
  - Place video at `public/videos/spendwise-demo.mp4` or provide an unlisted YouTube URL.
  - Set `demoVideo` in `content/projects.ts` under `spendwise`.
- [ ] **SpendWise Demo Poster:**
  - Place poster screenshot at `public/images/projects/spendwise-poster.jpg`.
  - Set `demoPoster` in `content/projects.ts`.

### B. Custom Domain & Deployment
- [ ] **Connect Custom Domain on Vercel:**
  - Example: `makrandghodke.com` or `makrand.dev`.
  - In Vercel Project Settings → Domains: Add domain and configure DNS (CNAME record to `cname.vercel-dns.com` or A record to `76.76.21.21`).
  - Update `baseUrl` in `src/app/sitemap.ts` and `src/app/layout.tsx` metadata.

---

## 3. Maintenance Rule Reminders
- Never hardcode hex values in components; use tokens defined in `src/app/globals.css`.
- Keep copy story-led and metrics specific. Avoid banned buzzwords (*passionate, synergy, cutting-edge*).
- Never claim German proficiency higher than **A2–B1**.
