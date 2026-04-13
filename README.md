  # Mir Diagnostics — Website

A modern, production-ready website for **Mir Diagnostics** medical laboratory, built with:

| Package | Version |
|---|---|
| **Astro** | 6.1 |
| **React** | 19 |
| **Tailwind CSS** | 4.2 |
| **@tailwindcss/vite** | 4.x (replaces `@astrojs/tailwind`) |
| **@astrojs/react** | 4.x |
| **Embla Carousel** | 8.x |
| **Lucide React** | 0.487+ |
| **shadcn/ui** | Button, Card, Badge (custom) |
| **Package manager** | **pnpm** |

> ⚠️ **Tailwind v4 note:** There is no `tailwind.config.js`. All theme config lives in `src/styles/globals.css` using `@theme {}`. The Vite plugin `@tailwindcss/vite` is used instead of `@astrojs/tailwind`.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero carousel, services overview, stats, doctors preview, CTA |
| `/about` | About — Mission, lab services list, accreditations |
| `/usg` | USG — Ultrasound scan types, equipment, preparation info |
| `/doctors` | Doctors — Full team profiles with specialties & availability |
| `/contact` | Contact — Appointment booking form, contact info, map |

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
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── badge.tsx
│   │   ├── Navbar.tsx
│   │   ├── HeroCarousel.tsx
│   │   └── Footer.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── usg.astro
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

| Token | Value | Tailwind class |
|---|---|---|
| `--color-lab-blue` | `#0A3D6B` | `bg-(--color-lab-blue)` |
| `--color-lab-teal` | `#0E9F9F` | `bg-(--color-lab-teal)` |
| `--color-lab-light` | `#E8F4FD` | `bg-(--color-lab-light)` |
| `--color-lab-gold` | `#D4A017` | `bg-(--color-lab-gold)` |
| `--font-heading` | Playfair Display | `style="font-family: var(--font-heading)"` |
| `--font-body` | DM Sans | (default body font) |
| `--font-mono` | DM Mono | `style="font-family: var(--font-mono)"` |

---

## Customization

- **Lab name / info** → `Navbar.tsx`, `Footer.tsx`, and page files
- **Doctor profiles** → `doctors` array in `src/pages/doctors.astro`
- **Hero slides** → `slides` array in `src/components/HeroCarousel.tsx`
- **Brand colors** → `@theme {}` block in `src/styles/globals.css`
- **Contact details** → `Footer.tsx` and `contact.astro`

---

## Deployment

```bash
pnpm build
# Deploy ./dist/ to Vercel, Netlify, Cloudflare Pages, or any static host
```

