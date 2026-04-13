# Mir Diagnostics — Website

A modern, production-ready website for **Mir Diagnostics** medical laboratory, built with:

| Package               | Version                            |
| --------------------- | ---------------------------------- |
| **Astro**             | 6.1                                |
| **React**             | 19                                 |
| **Tailwind CSS**      | 4.2                                |
| **@tailwindcss/vite** | 4.x (replaces `@astrojs/tailwind`) |
| **@astrojs/react**    | 4.x                                |
| **Embla Carousel**    | 8.x                                |
| **Lucide React**      | 0.487+                             |
| **shadcn/ui**         | Button, Card, Badge (custom)       |
| **Package manager**   | **pnpm**                           |

> ⚠️ **Tailwind v4 note:** There is no `tailwind.config.js`. All theme config lives in `src/styles/globals.css` using `@theme {}`. The Vite plugin `@tailwindcss/vite` is used instead of `@astrojs/tailwind`.

---

## Pages

| Route       | Description                                                          |
| ----------- | -------------------------------------------------------------------- |
| `/`         | Home — Hero carousel, services overview, stats, doctors preview, CTA |
| `/about`    | About — Mission, lab services list, accreditations                   |
| `/services` | Services — USG scan types, health packages, WhatsApp booking         |
| `/doctors`  | Doctors — Full team profiles with specialties & availability         |
| `/contact`  | Contact — Appointment booking form, contact info, map                |

---

## Getting Started

### Prerequisites

Install pnpm if you don't have it:

```bash
npm install -g pnpm
# or
corepack enable && corepack prepare pnpm@latest --activate
```

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start development server

```bash
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for production

```bash
pnpm build
```

### 4. Preview production build

```bash
pnpm preview
```

---

## Project Structure

```
mir-diagnostics/
├── public/
│   ├── favicon.svg
│   ├── pkg-profile11-600.jpg       ← Body Profile 1.1 package image
│   ├── pkg-profile12-999.jpg       ← Body Profile 1.2 package image
│   ├── pkg-profile12-1499.jpg      ← Body Profile 1.3 package image
│   ├── body-profile-3.jpg          ← Body Profile 3 package image
│   ├── home-collection-pampore.jpg ← Home collection banner
│   ├── dr-javid-magray.jpg         ← Dr. Javid Magray photo
│   ├── lab-reception.jpg           ← Lab reception photo
│   └── usg-facilities.jpg          ← USG facilities flyer
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── badge.tsx
│   │   ├── Navbar.tsx
│   │   ├── HeroCarousel.tsx
│   │   ├── FloatingActions.tsx     ← Floating WhatsApp + Call buttons
│   │   └── Footer.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── doctors.astro
│   │   └── contact.astro
│   └── styles/
│       └── globals.css        ← Tailwind v4 config lives here
├── astro.config.mjs
├── tsconfig.json
├── .npmrc
├── pnpm-workspace.yaml
└── package.json
```

---

## Design Tokens (Tailwind v4 `@theme`)

All tokens are CSS custom properties — use them anywhere:

| Token               | Value            | Tailwind class                             |
| ------------------- | ---------------- | ------------------------------------------ |
| `--color-lab-green` | `#0D6B3A`        | `bg-(--color-lab-green)`                   |
| `--color-lab-teal`  | `#16A34A`        | `bg-(--color-lab-teal)`                    |
| `--color-lab-light` | `#ECFDF5`        | `bg-(--color-lab-light)`                   |
| `--color-lab-gold`  | `#F59E0B`        | `bg-(--color-lab-gold)`                    |
| `--font-heading`    | Playfair Display | `style="font-family: var(--font-heading)"` |
| `--font-body`       | DM Sans          | (default body font)                        |
| `--font-mono`       | DM Mono          | `style="font-family: var(--font-mono)"`    |

---

## Customization

- **Lab name / info** → `Navbar.tsx`, `Footer.tsx`, and page files
- **Doctor profiles** → `src/pages/doctors.astro`
- **Hero slides** → `slides` array in `src/components/HeroCarousel.tsx`
- **Health packages** → `packages` array in `src/pages/index.astro` and `src/pages/services.astro`
- **WhatsApp number** → search `917006087182` and replace with your number across all files
- **Phone numbers** → `FloatingActions.tsx`, `Footer.tsx`, `contact.astro`, `Navbar.tsx`
- **Brand colors** → `@theme {}` block in `src/styles/globals.css`
- **Address** → `Footer.tsx` and `contact.astro` (currently: Khrew Bus Stop, Namblabal, Pampore)

---

## Deployment

```bash
pnpm build
# Deploy ./dist/ to Vercel, Netlify, Cloudflare Pages, or any static host
```
