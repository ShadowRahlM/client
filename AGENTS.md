# AGENTS.md

## Project
- **Git root** `client/`; Astro site in `dental-website/`
- **Stack**: Astro 4 + Tailwind v3 (PostCSS build) + Firebase (Hosting, Firestore, Cloud Functions)
- **Entry**: `dental-website/src/pages/` — file-based routing (Astro)

## Pages (20)
Home, About, Services (index + 9 individual treatment pages), Contact, Book Online, FAQ, Testimonials, New Patient, Blog (index), 404

## Commands
| Command | Action |
|---------|--------|
| `npm run dev` | Dev server (hot reload) |
| `npm run build` | Static build → `dist/` |
| `npm run preview` | Preview built site |
| `npx firebase login` | Auth for deploy |
| `npx firebase init` | First-time setup |
| `npm run deploy` | Deploy hosting to Firebase |
| `npm run deploy:all` | Deploy hosting + functions |

## Key conventions
- **SEO**: Every page has unique `title`/`description` via `Layout.astro` props; JSON-LD `Dentist` schema in Layout; FAQ schema on `/faq`
- **Dark mode**: `class` strategy via Tailwind; persisted to `localStorage`; respects `prefers-color-scheme` (inline script in Layout to prevent flash)
- **Phone**: `0756-350-444` (call), `0789-579-795` (WhatsApp) — hardcoded; update all locations if changed
- **Email**: `info@snowdental.com` in schema; `dr.emmanuel@example.com` placeholder in old `main.js` (no longer used)
- **Images**: Placeholder `Clinic photo coming soon` divs — swap with real photos

## Firebase
- Firestore collections: `messages`, `bookings`, `testimonials`, `content`, `notifications`
- Contact form writes → `messages/`; Booking form writes → `bookings/`
- Cloud Functions: `handleContactForm`, `handleBooking` (logs + creates notification doc)
- **Set `.env` before use** — copy `.env.example` and add Firebase project keys

## Removed from old site (kept as `dental-website-old/`)
- Old static HTML pages (4 pages, Tailwind CDN, inline `<script id="clock">`, `main.js`)
- Old `tailwind.config.js` (v2), old `package.json`
- References: WhatsApp `0789579795`, phone `0756350444`, email `dr.emmanuel@example.com`

## Todo
- Replace placeholder images with real clinic/team photos
- Add Google Maps embed
- Add Google Reviews widget
- Write real blog posts in `src/pages/blog/*.astro`
- Enable `@astrojs/sitemap` after deployment (remove trailing slash config)
