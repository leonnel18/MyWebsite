# Design Spec: TechnicalDuoWebsite Mockup Revamp

**Date:** 2026-04-03  
**Status:** Approved  
**Scope:** Full visual revamp via `/tools/06_revamp_all.js` to match Stitch AI mockup exactly.

---

## Context

The Phase 4 build used the CLAUDE.md brand guidelines (cream/terracotta/sage, Syne font). The actual mockup produced in Stitch AI uses a completely different visual language: white/purple/teal, Plus Jakarta Sans, neo-brutalist 2px borders with offset shadows, and an engineering-paper grid background. This spec drives a single deterministic script that overwrites all components to match the mockup.

---

## 1. Design System

### Color Tokens (tailwind.config.ts)
| Token | Hex | Usage |
|-------|-----|-------|
| `white` | `#FFFFFF` | Base background |
| `off-white` | `#F8F8FC` | Alternate section bg |
| `purple` | `#6B5CE7` | Primary, capability icons, badges |
| `teal` | `#00C2B8` | Accent, pipeline icons, step 04 circle, footer headline |
| `orange` | `#F97316` | CTA buttons |
| `dark` | `#0F0F1A` | Pipeline bg, footer bg |
| `ink` | `#111111` | All borders, body text |

### Typography
- **Display / Headings:** `Plus Jakarta Sans` 900 weight, uppercase, tight tracking (`letter-spacing: -0.01em`)
- **Body:** `Plus Jakarta Sans` 400 weight
- **Step numbers / mono labels:** `JetBrains Mono`
- Google Fonts URL: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap`

### Neo-Brutalist Signature
- All cards/buttons: `border: 2px solid #111111`
- Offset shadow: `box-shadow: 4px 4px 0 #111111`  
- Hover shadow: `box-shadow: 6px 6px 0 #111111`
- Border radius: `border-radius: 4px` (never `rounded-xl` or `rounded-full`)

### Engineering-Paper Grid Background
Applied globally to `<body>` and hero section:
```css
background-color: #ffffff;
background-image:
  linear-gradient(#6B5CE712 1px, transparent 1px),
  linear-gradient(90deg, #6B5CE712 1px, transparent 1px);
background-size: 28px 28px;
```
Grid color is purple at 7% opacity — subtle blueprint look that runs across the entire page.

---

## 2. Page Sections (in order)

### ① Navbar
- `position: fixed`, white bg (`opacity: 0` → `1` on scroll via Framer Motion `useScroll`)
- Wordmark: **GINO & STEPH** — Plus Jakarta Sans 900, 18px, ink
- Nav links: HOW IT WORKS · SERVICES · TECH STACK · WHERE WE'VE WORKED · ABOUT — 13px, 600 weight, ink/60 opacity
- CTA: **CONNECT WITH US** — purple bg, white text, 2px ink border, 4px offset shadow, `whileHover` shadow grows to 6px
- Layout: `max-w-6xl mx-auto px-6 py-4 flex justify-between items-center`

### ② Hero
- Full-width section, engineering-paper grid bg
- **Two-column layout** (`grid grid-cols-2 gap-16 items-center`):
  - **Left column:**
    - "● Available for projects" pill — purple dot + `JetBrains Mono` 11px, purple, `tracking-widest uppercase`
    - Headline: "A TECHNICAL DUO FOR COMPLEX SYSTEMS" — Plus Jakarta Sans 900, `clamp(2.8rem, 5.5vw, 4.5rem)`, uppercase, ink, `line-height: 1.05`, Framer Motion word-stagger `whileInView`
    - Subtitle: 16px, 400 weight, ink/60, `max-w-md`
    - CTA row: **START A CONVERSATION** (dark/ink bg, white text, 2px border, 4px shadow) + **SEE OUR WORK →** (ghost, ink border)
    - `↓ SCROLL DOWN` — `JetBrains Mono` 10px, ink/30, centered, `margin-top: 48px`, animated bounce
  - **Right column:**
    - `src/assets/hero-illustration.jpeg` — `width: 100%`, `border: 2px solid #111`, `border-radius: 4px`, `box-shadow: 8px 8px 0 #111`
    - Floating geo shapes **positioned absolutely around the image** (CSS only, no JS):
      - Purple cube (32×32px, `border: 2px solid #111`, `box-shadow: 3px 3px 0 #111`, `background: #6B5CE7`, `transform: rotate(15deg)`) — top-right
      - Teal circle (24×24px, `border-radius: 50%`, `background: #00C2B8`, `border: 2px solid #111`) — top-left  
      - Orange triangle (CSS `border` trick, 20px) — bottom-right
      - Purple outline cube (28×28px, `border: 2px solid #6B5CE7`, `background: transparent`, `transform: rotate(45deg)`) — bottom-left
      - Framer Motion `animate={{ y: [0, -8, 0] }}` `repeat: Infinity` `duration: 3s` on each shape, staggered `delay`

### ③ Capabilities (4 cards)
- Section bg: white
- Section header (centered):
  - "FOUR CORE CAPABILITIES." — Plus Jakarta Sans 900, `clamp(1.8rem, 3.5vw, 3rem)`, uppercase, ink
  - "ONE CONSISTENT OUTCOME: CLARITY." — same size, purple
  - `margin-bottom: 48px`
- **4-column grid** (`grid grid-cols-2 md:grid-cols-4 gap-5`):

| Card | Icon file | Icon description |
|------|-----------|-----------------|
| eCommerce Ecosystems | `cap-ecommerce.jpeg` | Shopping bag + gear, purple strokes |
| Full-Stack Data Flow | `cap-dataflow.jpeg` | Stacked bars with right arrows |
| Custom Scripts & ADLC | `cap-scripts.jpeg` | Code window `<>` + lightning bolt |
| TPM & Consultancy | `cap-tpm.jpeg` | Clipboard + checkmark + bar chart |

- Each card layout:
  - `border: 2px solid #111`, `border-radius: 4px`, `box-shadow: 4px 4px 0 #111`, `background: #fff`, `padding: 24px`
  - Icon: `<img>` at **48×48px**, centered horizontally, `margin-bottom: 16px`
  - Title: Plus Jakarta Sans 700, 14px, uppercase, ink, `letter-spacing: .04em`, centered
  - Description: 13px, 400, ink/60, centered, `line-height: 1.6`
  - `whileHover`: `y: -4`, shadow → `6px 6px 0 #111`
  - `whileInView` stagger `0.1s` per card

### ④ Pipeline (OUR PROFESSIONAL PIPELINE)
- Section bg: `#0F0F1A` (full-width dark)
- Section label: "OUR PROFESSIONAL PIPELINE" — Plus Jakarta Sans 900, 24px, uppercase, white, centered, `margin-bottom: 48px`
- **Horizontal layout** — `overflow-x: auto` on mobile, `display: flex`, `justify-content: space-between`, `align-items: flex-start`
- **Connecting line**: SVG `<line>` spanning full width at circle center-height, Framer Motion `pathLength` 0→1 on `useInView`, color: `linear-gradient(90deg, #6B5CE7, #00C2B8)`
- Each step (7 total):
  - Circle: 48×48px, `border-radius: 50%`, `border: 2px solid #fff`, centered above label
    - Steps 01–03, 05–07: `background: #6B5CE7`
    - Step 04: `background: #00C2B8` (teal — the "active build" step)
  - Step number: `JetBrains Mono` 12px, white, centered in circle — **shown by default**
  - Icon image: `<img>` 28×28px, centered in circle — **shown on hover** (CSS `opacity` swap with step number)
  - Label: Plus Jakarta Sans 700, 10px, uppercase, white, `letter-spacing: .06em`, centered, `margin-top: 10px`, `max-width: 80px`
  - Description: 10px, 400, `#888`, centered, `margin-top: 4px`, `max-width: 80px`, `line-height: 1.4`
  - `whileInView` stagger `0.1s` left→right

| Step | Circle | Icon file | Label |
|------|--------|-----------|-------|
| 01 | purple | `step-01-discovery.jpeg` | Discovery & Strategy |
| 02 | purple | `step-02-roadmap.jpeg` | Roadmap & Refinement |
| 03 | purple | `step-03-architecture.jpeg` | Architecture & Scalability |
| 04 | **teal** | `step-04-build.jpeg` | Technical Build & Development |
| 05 | purple | `step-05-deployment.jpeg` | Deployment & Integration |
| 06 | purple | `step-06-optimisation.jpeg` | Optimisation & Performance |
| 07 | purple | `step-07-handover.jpeg` | Handover & Sustainability |

### ⑤ Creative CTA
- Full-width banner, `background: linear-gradient(135deg, #3B2C9E 0%, #1a1040 100%)`
- `padding: 48px 24px`, `display: flex`, `justify-content: space-between`, `align-items: center`
- Headline: "EXPLORE OUR CREATIVE SIDE" — Plus Jakarta Sans 900, `clamp(1.6rem, 3vw, 2.4rem)`, uppercase, white
- Button: **SEE OUR CREATIVE PROJECTS** — `background: #F97316`, white text, `border: 2px solid #fff`, 4px radius, `padding: 12px 24px`, `whileHover` scale 1.03
- `href="#"` placeholder

### ⑥ Logo Cloud (WHERE WE'VE WORKED)
- Section bg: white
- Heading: "WHERE WE'VE WORKED" — Plus Jakarta Sans 900, `clamp(1.8rem, 3vw, 2.8rem)`, uppercase, ink, **centered**, `margin-bottom: 40px`

**Brand logo strategy — all 8 have no public SVG on Simple Icons CDN:**  
Each brand gets a **default building SVG icon** (Lucide `Building2`, 24×24px, ink stroke) + styled wordmark text below it.

| Brand | Display name | Wordmark accent |
|-------|-------------|-----------------|
| AXA Philippines | AXA | red `#E31837` |
| Globe Group | Globe | blue `#0072CE` |
| The Pack Labs | TPL | ink |
| Johnson & Johnson | J&J | red `#CC0000` |
| LeoPC | LeoPC | purple `#6B5CE7` |
| Cup n' Grind | Cup n' Grind | orange `#F97316` |
| Cosme de net | Cosme de net | ink |
| AktivAsia | AktivAsia | teal `#00C2B8` |

- Card layout: `border: 1px solid #e5e7eb`, `border-radius: 4px`, `padding: 20px 16px`, flex column, center-aligned
  - Building SVG: 24×24px, ink, centered
  - Brand name: Plus Jakarta Sans 700, 12px, ink/70, centered, `margin-top: 8px`
  - `whileHover`: border → `2px solid #6B5CE7`, name color → purple
- **4-column grid** (`grid grid-cols-2 sm:grid-cols-4 gap-4`)
- `whileInView` stagger fade-up `0.07s` per card

### ⑦ Tech Stack (THE TOOLS THAT GET THINGS DONE.)
- Section bg: `#F8F8FC` (off-white)
- Heading: "THE TOOLS THAT GET THINGS DONE." — Plus Jakarta Sans 900, `clamp(1.8rem, 3vw, 2.8rem)`, uppercase, ink
- Subtitle: "A curated stack built for eCommerce, cloud data, and AI-native workflows." — 16px, 400, ink/60, `margin-bottom: 32px`
- **Filter tabs** (`display: flex`, `gap: 8px`, `margin-bottom: 32px`, `flex-wrap: wrap`):
  - Active tab: `background: #111`, white text, `border: 2px solid #111`, 4px radius
  - Inactive: `background: transparent`, ink/50 text, `border: 1.5px solid #e5e7eb`, hover → purple border
  - Tabs: CMS & COMMERCE · CLOUD & DATA · AI & AUTOMATION · LANGUAGES & FRAMEWORKS

- **Badge grid** (`display: flex`, `flex-wrap: wrap`, `gap: 10px`):
  - Each chip: `border: 2px solid #111`, `border-radius: 4px`, `box-shadow: 2px 2px 0 #111`, `padding: 8px 14px`, white bg
  - Chip layout: `display: flex`, `align-items: center`, `gap: 8px`
  - Logo: Simple Icons CDN `<img>` at **20×20px** (confirmed available slugs below)
  - Name: `JetBrains Mono` 12px, ink, 500 weight

**Confirmed Simple Icons slugs (200 OK):**

| Category | Tool | Slug |
|----------|------|------|
| CMS & Commerce | Drupal | `drupal` |
| CMS & Commerce | WordPress | `wordpress` |
| CMS & Commerce | Shopify | `shopify` |
| CMS & Commerce | WooCommerce | `woocommerce` |
| CMS & Commerce | Magento | ❌ not on CDN — use default `Package` Lucide icon |
| Cloud & Data | Google Cloud | `googlecloud` |
| Cloud & Data | BigQuery | `googlebigquery` |
| Cloud & Data | Vercel | `vercel` |
| Cloud & Data | Cloudflare | `cloudflare` |
| Cloud & Data | AWS | ❌ not on CDN — use default `Server` Lucide icon |
| AI & Automation | Google Gemini | `googlegemini` |
| AI & Automation | n8n | `n8n` |
| AI & Automation | Zapier | `zapier` |
| Languages | Python | `python` |
| Languages | JavaScript | `javascript` |
| Languages | React | `react` |
| Languages | Next.js | `nextdotjs` |
| Languages | TypeScript | `typescript` |
| Languages | PHP | `php` |

Simple Icons CDN base URL: `https://cdn.simpleicons.org/{slug}/111111`

### ⑧ Footer
- Full-width, `background: #0F0F1A`
- Top accent line: `height: 1px`, `background: linear-gradient(90deg, transparent, #6B5CE7 50%, transparent)`
- **CTA block** (centered, `padding: 64px 24px 48px`):
  - Line 1: "READY TO TRANSFORM YOUR SYSTEMS?" — Plus Jakarta Sans 900, `clamp(2rem, 4vw, 3.5rem)`, uppercase, white
  - Line 2: "LET'S TALK." — same size, `color: #00C2B8` (teal)
  - Button: **START A CONVERSATION** — `background: linear-gradient(135deg, #F97316, #6B5CE7)`, white text, `border: 2px solid #fff`, `border-radius: 4px`, `padding: 14px 32px`, Plus Jakarta Sans 700, `letter-spacing: .05em`, `whileHover` scale 1.03, `margin-top: 32px`
- **Divider**: `height: 1px`, `background: rgba(255,255,255,0.08)`, `margin: 0 24px`
- **Bottom bar** (`padding: 24px`, `display: flex`, `justify-content: space-between`, `align-items: flex-start`, `flex-wrap: wrap`, `gap: 16px`):
  - Left: wordmark "GINO & STEPH" (Plus Jakarta Sans 900, white) + copyright below (10px, ink/40)
  - Right: two contact columns side by side (`gap: 32px`):
    - **GINO** column: label (JetBrains Mono 10px, white, uppercase) + LinkedIn link + GitHub link (both 11px, ink/50, hover white)
    - **STEPH** column: label + Email link + GitHub link
  - Tagline: "Built with S.L.A.S.T. ADLC Powered" — 9px, ink/25, below copyright

---

## 3. Generated Assets (Nano Banana)

All in `src/assets/icons/` — 512×512px JPEG, white bg.

### Capability Icons (purple `#6B5CE7` strokes)
| File | Used in | Description |
|------|---------|-------------|
| `cap-ecommerce.jpeg` | Capabilities card 1 | Shopping bag with gear inside |
| `cap-dataflow.jpeg` | Capabilities card 2 | Stacked bars with right-pointing arrows |
| `cap-scripts.jpeg` | Capabilities card 3 | Code window `<>` with lightning bolt |
| `cap-tpm.jpeg` | Capabilities card 4 | Clipboard with checkmark and bar chart |

Rendered at **48×48px** in cards, centered, `object-fit: contain`.

### Pipeline Icons (teal `#00C2B8` strokes)
| File | Step | Description |
|------|------|-------------|
| `step-01-discovery.jpeg` | 01 | Magnifying glass over document |
| `step-02-roadmap.jpeg` | 02 | Winding road with milestone flags |
| `step-03-architecture.jpeg` | 03 | 3-box hierarchy/org chart |
| `step-04-build.jpeg` | 04 | Code window + hammer & wrench |
| `step-05-deployment.jpeg` | 05 | Rocket launching above cloud |
| `step-06-optimisation.jpeg` | 06 | Speedometer at high performance |
| `step-07-handover.jpeg` | 07 | Handshake with sustainability leaves |

Rendered at **28×28px** inside the 48px circle — shown on hover, step number shown by default.

### Hero Illustration
| File | Used in | Description |
|------|---------|-------------|
| `hero-illustration.jpeg` | Hero right column | Male dev (glasses, tablet) + female dev (laptop), surrounded by purple/teal/orange geometric tech elements. 2K resolution, 16:9. |

Rendered at `width: 100%`, max-width constrained by grid column, `border: 2px solid #111`, `box-shadow: 8px 8px 0 #111`.

---

## 4. Implementation Approach

Single script: `/tools/06_revamp_all.js`

Execution order:
1. Update `tailwind.config.ts` — new color tokens, Plus Jakarta Sans + JetBrains Mono
2. Update `src/app/globals.css` — Google Fonts, grid bg, neo-brutalist utilities
3. Update `src/data/content.json` — pipeline labels, GINO/STEPH footer, tech stack with correct slugs
4. Overwrite `src/components/Navbar.tsx`
5. Overwrite `src/components/Hero.tsx` — illustration + floating geo shapes
6. Overwrite `src/components/Capabilities.tsx` — Nano Banana icons at 48px
7. Overwrite `src/components/PipelineStepper.tsx` — horizontal, dark bg, icon hover swap
8. Write `src/components/CreativeCTA.tsx` (new)
9. Overwrite `src/components/LogoCloud.tsx` — Building2 SVG + wordmark badges
10. Overwrite `src/components/TechStack.tsx` — Simple Icons CDN + filter tabs
11. Overwrite `src/components/Footer.tsx` — teal headline, gradient CTA, GINO/STEPH columns
12. Update `src/app/page.tsx` — full section order including CreativeCTA

---

## 5. Verification

```bash
node tools/06_revamp_all.js
npm run lint       # zero warnings
npm run build      # out/ generated, 100% SSG
serve out/         # visual check at localhost
```
