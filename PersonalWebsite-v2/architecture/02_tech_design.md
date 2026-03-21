# 02 Technical Design: Refined Architecture

> **Audited by:** Principal AI Systems Architect
> **Date:** 2026-03-21
> **Status:** ✅ APPROVED FOR EXECUTION

---

## ADR-001: Framework — React + Vite

| Attribute | Decision |
|-----------|----------|
| **Choice** | React 19 via Vite 6 |
| **Rejected** | Astro (SSG overkill for single page), Next.js (server routing unnecessary), Vanilla HTML (no component reuse) |
| **Rationale** | Single-page, component-based, fast HMR, zero server cost. Vite's build output is a static bundle deployable to any CDN (Vercel, Netlify, Cloudflare Pages). |
| **Trade-off** | Slightly larger JS bundle than Astro, acceptable for a portfolio with <10 components. |

## ADR-002: Styling — Tailwind CSS v4

| Attribute | Decision |
|-----------|----------|
| **Choice** | Tailwind CSS v4 with custom theme extension |
| **Rejected** | CSS Modules (no design-system tokens), Styled Components (runtime cost), vanilla CSS (no utility-first speed) |
| **Rationale** | User explicitly requested Tailwind. v4 has CSS-first config, smaller output, and native `@theme` support. |

## ADR-003: Animation — Framer Motion

| Attribute | Decision |
|-----------|----------|
| **Choice** | Framer Motion v12 |
| **Rejected** | Vanilla CSS transitions (no scroll-triggered animations without IntersectionObserver boilerplate), GSAP (heavier, overkill) |
| **Rationale** | `whileInView` prop provides declarative scroll-triggered fade-ins. `whileHover` handles card/button hover states. Single library covers all animation requirements. ~16kb gzipped. |

## ADR-004: Content Layer — Co-located Constants

| Attribute | Decision |
|-----------|----------|
| **Choice** | `src/data/content.js` exporting structured objects |
| **Rejected** | External `content.json` (loses type hints, requires fetch/import gymnastics), inline strings (DRY violation) |
| **Rationale** | Single source of truth for all copy. Components import what they need. CTA text, contact info, and brand names are defined once. |

## ADR-005: Infrastructure — Pure Static (Edge)

| Attribute | Decision |
|-----------|----------|
| **Choice** | Pure static build → Edge CDN deployment |
| **Rejected** | Serverless functions (no API needed for V1), hybrid SSR (unnecessary complexity) |
| **Rationale** | `vite build` outputs static HTML/CSS/JS. Deploy to Vercel/Netlify/Cloudflare Pages for global edge delivery. Sub-50ms TTFB. Zero server cost. |

---

## Performance Budget

| Metric | Target | Enforcement |
|--------|--------|-------------|
| Lighthouse Performance | ≥ 95 | `npx lighthouse` CI gate |
| LCP (Largest Contentful Paint) | < 2.5s | Image optimization (WebP, lazy-load below fold) |
| CLS (Cumulative Layout Shift) | < 0.1 | Fixed image dimensions, font-display: swap |
| Total JS Bundle (gzipped) | < 120kb | `npx vite-bundle-visualizer` |
| Total CSS (gzipped) | < 15kb | Tailwind purge |

---

## 3-Layer Architecture

### Layer 1: SOP (State, Content & Data)

```
src/data/content.js
├── profile         → { name, title, email, location }
├── hero            → { headline, subheadline, cta }
├── howItWorks      → [ { step, title, description } ]
├── features        → [ { title, description, icon } ]
├── trustedBy       → [ { name } ]
├── bottomCta       → { headline, cta }
└── footer          → { links[], socials[], copyright }
```

**Rule:** No hardcoded strings in JSX. Every visible string must be imported from `content.js`.

### Layer 2: Navigation (User Flow)

```
┌─────────────────────────────────────────┐
│  Navbar (sticky, blur, scroll-aware)    │
├─────────────────────────────────────────┤
│  Hero (above fold, CTA #1)             │
├─────────────────────────────────────────┤
│  How It Works (3-step visual flow)      │
├─────────────────────────────────────────┤
│  Features (2x2 grid → 1x4 mobile)      │
├─────────────────────────────────────────┤
│  Trusted By (logo wall)                │
├─────────────────────────────────────────┤
│  Bottom CTA (full-width, CTA #2)       │
├─────────────────────────────────────────┤
│  Footer (contact, links, socials)       │
└─────────────────────────────────────────┘
```

- **Scroll:** Smooth anchor links from Navbar to section IDs.
- **Responsive:** Mobile-first. Breakpoints at `sm:640px`, `md:768px`, `lg:1024px`.
- **CTA Consistency:** Both CTA #1 (Hero) and CTA #2 (Bottom) render the same `<CTAButton />` component with identical text from `content.js`.

### Layer 3: Tool (Component Architecture)

| Component | File | Props Source | Key Behavior |
|-----------|------|-------------|--------------|
| `App` | `src/App.jsx` | — | Root layout, section ordering |
| `Navbar` | `src/components/Navbar.jsx` | `content.footer.links` | Sticky, backdrop-blur, scroll-aware shadow |
| `Hero` | `src/components/Hero.jsx` | `content.hero` | Split layout: text left, illustration right. CTA button. |
| `HowItWorks` | `src/components/HowItWorks.jsx` | `content.howItWorks` | Numbered steps with visual connectors |
| `Features` | `src/components/Features.jsx` | `content.features` | 2x2 grid (desktop), stacked (mobile). Hover lift. |
| `TrustedBy` | `src/components/TrustedBy.jsx` | `content.trustedBy` | Horizontal flex/marquee row |
| `CTASection` | `src/components/CTASection.jsx` | `content.bottomCta` | Full-width gradient background |
| `Footer` | `src/components/Footer.jsx` | `content.footer` | Multi-column, social icons, copyright |

### Color Palette: "Warm & Inviting"

```
Background (cream):     #FAF7F2
Surface (warm white):    #FFFFFF
Primary (terracotta):    #C1694F
Primary hover:           #A8563E
Accent (sage green):     #7B9E87
Text primary (charcoal): #2D2D2D
Text secondary (warm gray): #6B6B6B
Border (soft tan):       #E8E0D8
```

### Typography

- **Font:** `Inter` (Google Fonts) — clean, modern, excellent readability.
- **Heading scale:** `text-4xl` (Hero) → `text-3xl` (Section) → `text-xl` (Card).
- **Body:** `text-base` / `text-lg` with `leading-relaxed`.
