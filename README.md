# Microfundiciones Pérez — Landing Page

A single-page marketing site for Microfundiciones Pérez, a Bogotá-based manufacturer of metal (ZAMAK) pins and keychains for technical and professional careers, built to showcase its catalog and route every inquiry straight to WhatsApp.

## Live Demo

[TODO: add live link]

## Screenshots

> Place screenshots in `/screenshots` and reference them here, e.g.:

- `/screenshots/hero.png` — Hero section
- `/screenshots/catalog.png` — Filterable product catalog
- `/screenshots/contact.png` — Contact section with map

[TODO: add actual screenshots]

## The Problem It Solves

The business sells a large catalog (90+ pin and keychain references across categories like nursing, dentistry, physiotherapy, veterinary, law, and engineering) but has no e-commerce backend. This site gives it a presentable online catalog that customers can browse and filter, with every product and category pre-wired to open a WhatsApp chat with a ready-made quote message — turning browsing into a direct sales conversation without needing a cart or checkout flow. *(Inferred from the code: there is no payment or order backend, only `wa.me` deep links.)*

## Features

- Responsive landing page with sticky navbar and mobile hamburger menu
- Hero section with a WhatsApp "Cotizar ahora" (quote now) call-to-action
- Category grid (12 professional/technical categories, e.g. Enfermería, Odontología, Veterinaria, Abogado) — each tile opens WhatsApp with a category-specific pre-filled message
- Filterable product catalog (`src/data/catalogo.json`) with 90+ items, filterable by type (`Pin` / `Llavero`) and by category; each product card deep-links to WhatsApp with an item-specific quote message
- "Why choose us" benefits section (in-house ZAMAK manufacturing, catalog size, wholesale/retail, 24h availability)
- Contact section with WhatsApp number, physical address, business hours, and an embedded Google Maps iframe
- Floating WhatsApp button present on every scroll position

## Tech Stack

- **React 19** + **TypeScript 5.7**
- **Vite 8** (via `@vitejs/plugin-react`) as the build tool and dev server
- **Tailwind CSS v4** (via `@tailwindcss/vite`), configured directly in `src/index.css`
- **oxfmt** for code formatting
- **pnpm** as the package manager, **Node 22** (pinned in `.mise.toml`)
- Scaffolded and developed with **Figma Make** (see the `.figma/` tooling)

## Project Structure

```
.
├── index.html                 # Vite HTML shell, mounts #root
├── src/
│   ├── main.tsx                # React entrypoint
│   ├── App.tsx                 # All page sections (NavBar, Hero, Categories, Catalogo, Benefits, Contact, Footer)
│   ├── index.css               # Tailwind v4 import + theme tokens + global styles
│   └── data/
│       └── catalogo.json       # Product catalog data (90+ pins/keychains)
├── public/
│   ├── catalogo/                # Product images referenced by catalogo.json
│   ├── logo-icon.png, favicon.png
├── vite.config.ts              # Vite + React + Tailwind + Figma Make dev plugins
├── tsconfig.json
├── package.json
└── .mise.toml                  # Toolchain pins (Node 22, pnpm 10.34.3)
```

## Getting Started

### Prerequisites

- Node.js 22 (see `.mise.toml`)
- pnpm (10.34.3, or any recent pnpm)

### Installation

```bash
pnpm install
```

### Environment Variables

No `.env` file is required to run the app. `vite.config.ts` reads the following **optional** environment variables (all have working defaults):

- `FIGMA_PUBLIC_URL` — overrides the Vite `base` path for deployed builds
- `FIGMA_DEV_SERVER_HOST` — overrides the dev/preview server host (defaults to `0.0.0.0`)
- `PORT` — overrides the dev/preview server port (defaults to `8443`)

### Run Commands

```bash
pnpm dev       # start the Vite dev server
pnpm build     # production build
pnpm preview   # preview the production build locally
pnpm format    # format code with oxfmt
```

## Tests

No automated test suite is present in this repository.

## Author

**Juan Miguel Cuao Ríos**

Portfolio: [TODO: add portfolio link]

LinkedIn: [https://www.linkedin.com/in/juan-miguel-cuao-rios-b888081a9](https://www.linkedin.com/in/juan-miguel-cuao-rios-b888081a9)
