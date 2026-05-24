# Fleetix — React + Vercel

Fleetix logistics landing page converted from plain HTML to a React (Vite) project,
ready to deploy on Vercel with Analytics built-in.

## Stack

- **React 18** + **Vite 5** — fast dev server & optimised builds
- **@vercel/analytics** — page-view tracking + custom event tracking
- **vercel.json** — zero-config SPA routing on Vercel

## Project structure

```
fleetix/
├── index.html              # Vite entry HTML
├── vercel.json             # Vercel deploy config (SPA rewrites)
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx            # ReactDOM render + <Analytics />
    ├── App.jsx             # Top-level layout
    ├── index.css           # All global styles & CSS variables
    ├── hooks/
    │   └── useReveal.js    # IntersectionObserver scroll-reveal hook
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Ticker.jsx
        ├── StatsBar.jsx
        ├── Services.jsx
        ├── About.jsx
        ├── Process.jsx
        ├── Testimonials.jsx
        ├── CTA.jsx
        └── Footer.jsx
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel              # follow prompts; auto-detects Vite
```

### Option B — GitHub import
1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Vite** (auto-detected).
4. Click **Deploy**. Done.

## Vercel Analytics

Analytics is wired up in two places:

### 1. Automatic page-view tracking (`src/main.jsx`)
```jsx
import { Analytics } from '@vercel/analytics/react'
// ...
<Analytics />   // place once inside the React tree
```
Vercel automatically records every page navigation.

### 2. Custom event tracking (`track()`)
Components use `track()` from `@vercel/analytics` to record meaningful interactions:

| Event | Properties | Where |
|---|---|---|
| `nav_click` | `{ section }` | Navbar links |
| `cta_click` | `{ location, label }` | Hero, Navbar, CTA buttons |
| `service_click` | `{ service }` | Services cards |

**Example:**
```jsx
import { track } from '@vercel/analytics'

<button onClick={() => track('cta_click', { location: 'hero', label: 'Start Shipping' })}>
  Start Shipping
</button>
```

View events in your Vercel project → **Analytics** tab → **Events**.

> **Note:** Analytics data only appears on the deployed Vercel project.
> It does not track events during local development.
