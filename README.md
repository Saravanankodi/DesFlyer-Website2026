# DesFlyer Website

React 19 + Vite + Tailwind CSS + Framer Motion + React Three Fiber + Recharts.

## Setup

This was built in a sandbox with no internet access, so dependencies have **not** been
installed or run here. On your machine (with internet):

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Site structure

```
/                          Home (loading screen on first load, hero, tech strip,
                            services, "How We Work" curved timeline, portfolio,
                            testimonials, CTA — About content removed per v2.0)
/about                     About (vision/mission/team — now the only place it lives)
/services                  Services — premium 3D flip cards (16 services)
/portfolio                 Portfolio (4 real projects w/ real logos + 3 coming-soon slots)
/products                  NEW — Products showcase with category filtering
/contact                   Contact (form + FAQ)
/opportunities/internship  Internship info (live from admin) + application form + FAQ
/opportunities/jobs        Job listings (live from admin) + application form + FAQ
/admin                     Admin dashboard (mock login: admin@desflyer.in / desflyer2026)
  /admin                     → Dashboard (10 stat cards + overview charts)
  /admin/analytics            → Full analytics (line/bar/pie charts)
  /admin/messages             → Contact messages (search/filter/status/delete/export)
  /admin/internships/details    → Internship openings CRUD (add/edit/delete, modal form)
  /admin/internships/applications → Internship applicants (search/filter/status/export/view)
  /admin/jobs/details            → Job openings CRUD (add/edit/delete, modal form)
  /admin/jobs/applications        → Job applicants (search/filter/status/export/view)
  /admin/team                 → Team management (read-only demo)
  /admin/settings              → Settings (local-only demo)
/careers, /internship      Legacy URLs — redirect to /opportunities/*
```

## What's new in v2.0

- **Premium loading screen** (`src/components/LoadingScreen.jsx`) — Innovate → Create →
  Empower sequence, 3s, glowing logo mark, progress bar, blur transition into Home.
  Skips automatically if the browser has `prefers-reduced-motion` set. Doesn't show on
  `/admin`.
- **Home page decluttered** — the About content section was removed from Home (About
  now lives only on `/about`, per spec).
- **Services page redesigned as 3D flip cards** (`src/components/ServiceFlipCard.jsx`)
  — front shows number/title/icon, back shows full description + benefits + Learn More,
  true `rotateY` 3D flip on hover (tap on mobile), glow + lift on hover.
- **"How We Work" redesigned as a curved flowing timeline** — replaced the straight
  zig-zag with an animated SVG serpentine path that draws itself on scroll, plus richer
  card hover effects (lift, scale, mouse-reactive glow, animated icon, border glow).
- **New Products page** (`/products`) — category-filterable showcase grid, real project
  logos re-presented as products (same verified facts, different framing — not new
  fabricated data) plus 3 clearly-marked "coming soon" slots.
- **Real Admin ↔ Public sync for Internship/Job openings** — this is the important one:
  `src/store/openingsStore.js` uses React 19's `useSyncExternalStore` as a genuine shared
  in-memory store. Add/edit/delete an opening in Admin → Internship/Job Details, and the
  public Internship/Jobs pages update **instantly, for real**, no page reload, no mock.
  It resets when the browser tab fully reloads (no database yet) — see limitations below.
- **Admin: Internship Details & Job Details** — full CRUD with card grid, "+ Add" button,
  modal create/edit form (`src/components/admin/OpeningFormModal.jsx`), delete with
  confirmation. Field configs in `src/data/openingFormFields.js`.
- **Admin: Applications pages upgraded** — new columns (phone, college/position,
  applied-to), expanded status workflows (Pending → Reviewed → Shortlisted → Interview
  [Scheduled] → Selected → Rejected), and a "View Applicant" detail modal.
- **Admin Dashboard stats expanded to 10 cards**, 8 of which are now **real counts**
  computed live from the openings/applications data (only Website Visitors stays
  labeled "Demo" — there's no real analytics tracking).

## Content data

All real content lives in `src/data/`:
- `siteConfig.js`, `services.js` (now with `icon` + `benefits` per service),
  `projects.js`, `products.js`, `testimonials.js`, `nav.js`, `techStack.js`,
  `process.js`, `faqs.js`
- `internshipForm.js` / `jobForm.js` — public application form field configs
- `openingFormFields.js` — Admin CRUD modal field configs
- `openingsSeed.js` — initial seed data for the live openings store
- `opportunitiesContent.js` — benefits + FAQs for the opportunity pages
- `adminMock.js` — in-memory admin data (contact messages, applications, team,
  analytics). **Resets on page reload** — no database yet.

Entries with `isPlaceholder: true` need your review before launch. Known issues
carried over from the live site (by your instruction, to fix later):
- 3 portfolio projects share duplicated "Retail Corp" copy that doesn't match the project
- "Custom Software Development" service duplicates "Mobile App Development" copy
- 12 of 16 services have draft descriptions
- Team section has no individual member cards (kept generic, per your instruction)
- Social links (LinkedIn, Instagram, Facebook, X) point to `#` — no URLs were ever visible
- Products page reuses real portfolio projects re-cast as products (legitimate, not
  fabricated) since no separate "products" content was ever captured from the live site

## Not yet built (needs real backend infrastructure)

Same as before — these need server/database/infra this sandbox can't provide:
- **Persistent database** — the openings store now syncs Admin↔Public in real time
  within a session (genuinely working), but still resets on full page reload. A real
  backend would persist it.
- **JWT authentication / role-based access control** — admin login is still a mocked
  check in `api.js`.
- **Live visitor analytics** — only "Website Visitors" is still sample data.
- **Resume file storage** — upload validates client-side; nothing is actually stored;
  "download resume" in Admin is disabled/mocked.
- **Google Sheets API export** — CSV/Excel export works for real right now via `xlsx`.
- **REST API layer** — `src/lib/api.js` + `src/store/openingsStore.js` are structured so
  a real backend drops in cleanly: swap the store's in-memory mutations for API calls
  that refetch/update from a server.
