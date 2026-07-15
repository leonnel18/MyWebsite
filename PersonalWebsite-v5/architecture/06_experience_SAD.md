# 06 Solutions Architecture Document: `/experience` Page + Homepage "Career Timeline" Teaser

> **Author:** Solutions Architect
> **Date:** 2026-07-14
> **Status:** Proposal — pending Gate G3 (Gino's explicit sign-off on routing choice + file layout) before any code is written.
> **Inputs:** `architecture/04_experience_page_brd.md` (approved, G1 cleared), `architecture/05_experience_wireframes.md` (approved), `design/wireframes/career-timeline-teaser.html`, `design/wireframes/experience-page.html`, current `src/` tree.
> **Scope type:** Lightweight architecture pass. Stack (React 19 + Vite + Tailwind v4 + Framer Motion) is fixed and unchanged. This document covers routing, data modeling, and component boundaries for one feature addition — not a from-scratch system design.

---

## 0. How to read this document

Every BRD FR and every wireframe resolution (§8 of the wireframe doc) is treated as final and is **not** re-litigated here. Where the BRD/wireframe left a genuine gap (404 behavior, code-splitting, a couple of unconfirmed data values), this document makes an explicit call and flags it in §11 rather than leaving it ambiguous. No field in the data model, no route, and no component prop below is "TBD."

There is no backend/API surface in this project — it's a static content site (no fetch, no server). The persona's usual "API contract" section is replaced below by §4 (data model) and §5 (component prop contracts), which serve the same "nothing left for forge-dev to invent" purpose.

---

## 1. Stack Decision

**Decision: `react-router-dom` (latest v6.x), `BrowserRouter`, two routes, no code-splitting.** This is confirmed by the BRD (§2, resolved decision #1) — the only architecture-owned parts are *how* it's wired in, and the code-splitting question the wireframe explicitly left open (§8 flag #6).

**Alternatives considered for the routing question itself (BRD already settled "a real route," these were about *which* router):**
- **Hash-based routing (`HashRouter`) or a hand-rolled `pathname`-switch in `App.jsx` (no library).** Rejected: `HashRouter` produces ugly `/#/experience` URLs that collide with the existing anchor-link convention (`#about`, `#tech-stack`) already used site-wide — every existing anchor would become ambiguous with route paths. A hand-rolled switch would need to reinvent `<Link>`, active-route detection, and history handling that `react-router-dom` already provides for ~simple use; not worth it for a site that will have more routes later (BRD's own "not from-scratch" framing still implies this is the first of what could grow past 2 routes).
- **`react-router-dom` with `createBrowserRouter` / data router API (loaders, actions).** Rejected: that API exists for routes with data-fetching/mutation needs. This site has zero data fetching (all content is static, imported from `content.js`) — the loader/action machinery would be pure overhead with nothing to load. Plain `<BrowserRouter>` + `<Routes>`/`<Route>` is the minimal correct tool.
- **TanStack Router.** Rejected: new dependency family, steeper API surface, offers type-safe routing and search-param state management the site doesn't need (no query-string state anywhere in this feature). `react-router-dom` is also what the BRD already named as confirmed (§2.1), so this isn't actually an open choice — included here only to show the alternative was considered, not to relitigate it.

**Code-splitting decision (wireframe §8 flag #6): do NOT code-split `/experience`.** `ExperiencePage` is imported statically in `App.jsx`, no `React.lazy`/`Suspense`. Reasoning: this site has (and per BRD framing will likely keep) fewer than 10 routes total; `ExperiencePage`'s components are plain markup + Framer Motion `whileInView` animations, no charts, no heavy libraries, all images already exist on disk. The entire feature's JS weight is dominated by `react-router-dom` itself (~5–7kb gzip), not by route-specific code. Splitting would require building and maintaining the route-transition skeleton the wireframe sketched in §4.4 for a payload savings small enough not to matter against the NFR-3 budget (total JS < 120kb gzip) — added complexity with no real benefit at this scale. If the site later adds routes with genuinely heavy per-route dependencies (e.g. a chart library, a CMS SDK), revisit per-route splitting then, not now.

---

## 2. Routing Architecture

### 2.1 `BrowserRouter` placement: `main.jsx`

`main.jsx` is already the project's composition root (stacks `ThemeProvider` → `MotionConfig` → `App`). `BrowserRouter` joins that stack as the outermost provider, so router context (`useLocation`, `useNavigate`, `<Link>`) is available to every component in the tree, including `ThemeProvider`/`MotionConfig` should they ever need it — not just to `App.jsx`. `App.jsx` itself stays a pure consumer (`<Routes>`/`<Route>`, no provider setup), keeping the "providers live in `main.jsx`, composition lives in `App.jsx`" separation the project already has.

```jsx
// src/main.jsx
import { BrowserRouter } from 'react-router-dom'
// ...existing font/style imports unchanged...

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MotionConfig reducedMotion="user">
          <App />
        </MotionConfig>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
```

### 2.2 `App.jsx` restructure — persistent chrome + route switcher

Per BRD §8 resolution #4: `Preloader`, `WispField`, `Navbar`, `Footer` stay mounted at the `App.jsx` root regardless of route — no route-conditional logic for any of them. Only the `<main>` contents become route-dependent.

```jsx
// src/App.jsx
import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Preloader from './components/Preloader'
import WispField from './components/WispField'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExperiencePage from './pages/ExperiencePage'

function App() {
  const [booted, setBooted] = useState(false)
  const location = useLocation()

  // Lenis setup — UNCHANGED from current App.jsx, still lives here (global,
  // route-independent chrome behavior).
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.07, anchors: true })
    window.__lenis = lenis
    let rafId
    const raf = (time) => { lenis.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); delete window.__lenis }
  }, [])

  // NEW — scroll-to-top on route change, unless the destination carries a
  // hash (cross-route anchor nav, e.g. "/#about"), in which case Home.jsx's
  // own hash-scroll effect (§7.4) owns the final scroll position instead.
  useEffect(() => {
    if (location.hash) return
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'transparent' }}>
      <Preloader onComplete={() => setBooted(true)} />
      <WispField />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home booted={booted} />} />
          <Route path="/experience" element={<ExperiencePage />} />
          {/* 404 handling — resolved here, not left ambiguous: unknown paths
              redirect to home. No dedicated 404 page; not worth building for
              a 2-route portfolio site. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
```

**404 decision, stated explicitly (resolves wireframe §8 flag #2):** unmatched routes redirect to `/` via `<Navigate to="/" replace />`. `replace` (not push) so the invalid URL doesn't sit in browser history. No dedicated 404 page — not justified at this scale (2 routes, portfolio site, no deep-linkable content below page level).

### 2.3 `src/pages/Home.jsx`

Homepage section list, unchanged except `BrandsServed` removed and `CareerTimelineTeaser` inserted in its exact former slot (FR-3). Takes `booted` as a prop (state now lives in `App.jsx`, one level up from where `Hero` used to receive it directly).

```jsx
// src/pages/Home.jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import TechStack from '../components/TechStack'
import CareerTimelineTeaser from '../components/CareerTimelineTeaser'
import CTASection from '../components/CTASection'

export default function Home({ booted }) {
  const location = useLocation()

  // Cross-route anchor landing (FR-2): when Navbar/Footer nav from
  // /experience resolves to "/#about" etc., React Router does NOT
  // auto-scroll to the hash target on route change. Handle it here.
  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const target = document.getElementById(id)
    if (!target) return
    // Wait one frame so the section has laid out post-mount before scrolling.
    requestAnimationFrame(() => {
      if (window.__lenis) window.__lenis.scrollTo(target)
      else target.scrollIntoView({ behavior: 'smooth' })
      // Reduced-motion users: index.css's global
      // `@media (prefers-reduced-motion: reduce) { scroll-behavior: auto !important }`
      // rule already downgrades the native scrollIntoView call to instant —
      // no extra JS gating needed here.
    })
  }, [location.hash])

  return (
    <>
      <Hero booted={booted} />
      <About />
      <HowItWorks />
      <Features />
      <TechStack />
      <CareerTimelineTeaser />
      <CTASection />
    </>
  )
}
```

### 2.4 `src/pages/ExperiencePage.jsx`

```jsx
// src/pages/ExperiencePage.jsx
import { content } from '../data/content'
import ExperienceHeader from '../components/ExperienceHeader'
import CareerTrack from '../components/CareerTrack'
import EducationSection from '../components/EducationSection'

const { experience } = content

export default function ExperiencePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <ExperienceHeader />
      <CareerTrack trackKey="corporate" track={experience.tracks.corporate} />
      <CareerTrack trackKey="otherHustle" track={experience.tracks.otherHustle} />
      <EducationSection />
    </div>
  )
}
```

No props needed beyond what each child reads from `content.js` directly — matches the project's existing convention (`About.jsx`, `TechStack.jsx` etc. destructure their own content slice internally rather than being prop-driven from a parent).

---

## 3. Component Boundaries

### 3.1 Shared (teaser + `/experience`)

| Component | File | Used by |
|---|---|---|
| `LogoOrMonogram` | `src/components/LogoOrMonogram.jsx` | `TeaserCard`, `SpotlightBlock`, `TimelineEntry` |

Only one truly shared component. Everything else is page-specific because the teaser and the full page render structurally different things from the same data (cards vs. spotlight blocks vs. timeline rows) — forcing a shared "entry card" component across both would mean prop-flagging away half its own markup, which is worse than two small purpose-built components.

### 3.2 Teaser-specific (`src/components/`)

| Component | Renders |
|---|---|
| `CareerTimelineTeaser.jsx` | Section wrapper (`id="career-timeline"`), header, 7-card grid, CTA. Replaces `BrandsServed.jsx` in `App.jsx`'s (now `Home.jsx`'s) import list. |
| `TeaserCard.jsx` | One card: `LogoOrMonogram` + company + title + dateRange. |

### 3.3 `/experience`-specific (`src/components/`)

| Component | Renders |
|---|---|
| `ExperienceHeader.jsx` | Page eyebrow + h1 (FR-7). Reads `content.experience.eyebrow`/`.heading` directly. Uses the existing `.eyebrow` CSS class (same visual convention as `TechStack`/`CareerTimelineTeaser`'s header block — dash + label — not `About.jsx`'s centered mono variant). |
| `CareerTrack.jsx` | Reusable wrapper, instantiated twice (Corporate, Other Hustle). Track heading + `YearFilterTabs` + N × `SpotlightBlock` + `FullTimelineList`. Owns `activeFilter` state for its own track (FR-9 independence). |
| `YearFilterTabs.jsx` | Tab strip, derives its own options from the entries it's given (§6.1). |
| `SpotlightBlock.jsx` | Heading, paragraph, 4 × `StatTile`, Key Contributions list. One instance per entry with `current: true` and a populated `spotlight` object. |
| `StatTile.jsx` | Single stat tile (value + label). |
| `FullTimelineList.jsx` | Renders `TimelineEntry` per entry (order = data order, already reverse-chronological), owns the scroll-to-match-on-filter behavior (§6.2). |
| `TimelineEntry.jsx` | One rail row: `LogoOrMonogram` (small), date badge, title+company, one-line summary. Accepts a `highlighted` boolean. |
| `EducationSection.jsx` | "Education" heading + grid of `EducationCard`. |
| `EducationCard.jsx` | School, dates, detail. |

### 3.4 Not new — modified in place

`Navbar.jsx`, `Footer.jsx`, `About.jsx`, `TechStack.jsx` (see §7).

---

## 4. Data Model

### 4.1 Where it lives — `src/data/content.js`, not a separate file

**Decision: append `content.experience` and `content.careerTimeline` blocks to the existing `src/data/content.js`.** Not a new `src/data/experience.js` file.

Reasoning: BRD NFR-6 is explicit and not ambiguous — *"All new copy ... lives in `src/data/content.js` ... per `claude.md` rule 2."* That's a resolved constraint, not an open architecture choice; a separate file would violate it outright. `content.js` is already the single-source-of-truth pattern for every other section (`techStack`, `features`, `footer`, etc., each a large block in the same file) — this is consistent with existing project structure, not a new precedent. `content.js` grows from ~287 lines to roughly ~420; not a size that justifies a split given the explicit rule against one.

### 4.2 Single source of truth for career entries — no duplicated teaser data

The wireframe's illustrative content spec (§5) showed `content.careerTimeline.entries` as its own curated array, separate from `content.experience.tracks.*.entries`. **This SAD deliberately does not implement it that way.** Both arrays would need to describe the same 5 Corporate + 2 (of 5) Other Hustle people — title, company, dates — and FR-15 requires that data to match exactly everywhere it's displayed. Maintaining it in two places is a drift risk for zero benefit (the wireframe itself called this "illustrative shape only," not a mandate).

Instead: `content.careerTimeline` holds only section-level copy (label, heading, CTA). `CareerTimelineTeaser.jsx` derives its 7 cards at render time directly from `content.experience`:

```js
const teaserEntries = [
  ...content.experience.tracks.corporate.entries,
  ...content.experience.tracks.otherHustle.entries.slice(0, 2),
]
```

This is exactly "all 5 Corporate + top 2 Other Hustle" per BRD §8 resolution #5, and it's structurally impossible for the teaser and the full page to disagree on a title/company/date string, because there's only one copy of that string.

### 4.3 Full schema

**Timeline entry shape** (used identically for both tracks):

```js
/**
 * @typedef {Object} TimelineEntryData
 * @property {string} id            - slug, stable key for React lists + refs
 * @property {string} dateRange     - display string verbatim from BRD §4, e.g. "2023–Present"
 * @property {string} title         - role title, verbatim from BRD §4
 * @property {string} company       - company name, verbatim from BRD §4
 * @property {string|null} logo     - "/logos/xxx.png" or null (monogram-only entries)
 * @property {string} initial       - monogram fallback text — REQUIRED even when `logo`
 *                                     is set, because LogoOrMonogram falls back to it if
 *                                     the <img> 404s at runtime (§6.3)
 * @property {string} color         - monogram/fallback background hex — REQUIRED for the
 *                                     same reason as `initial`
 * @property {boolean} current      - true for AXA, ThePackLabs, AktivAsia only
 * @property {string} summary       - one-line Full Timeline summary
 * @property {Object} [spotlight]   - present ONLY when current === true
 * @property {string} spotlight.paragraph
 * @property {{value: string, label: string}[]} spotlight.stats   - exactly 4
 * @property {string[]} spotlight.contributions                    - bullet text,
 *            WITHOUT the "▸" glyph — the glyph is rendered by SpotlightBlock's JSX,
 *            not stored in content.js (it's a structural marker, not copy)
 */
```

**Education entry shape:**

```js
/**
 * @typedef {Object} EducationEntryData
 * @property {string} id
 * @property {string} dateRange
 * @property {string} school
 * @property {string} detail
 */
```

**Full `content.js` additions** (replaces the deleted `brandsServed` block; inserted in the same position in the file):

```js
// ─── Career Timeline (homepage teaser) ─────────────────────────
careerTimeline: {
  sectionLabel: 'Career Timeline',
  heading: 'A decade of shipping, not just a resume line.',
  cta: { label: 'See the Full Career Story →', href: '/experience' },
  // NOTE: no `entries` array here — teaser cards are derived from
  // `content.experience.tracks.*` at render time. See SAD §4.2.
},

// ─── Experience (/experience page) ─────────────────────────────
experience: {
  eyebrow: 'Career Journey',
  heading: 'Ten years, two tracks, one build philosophy.',
  tracks: {
    corporate: {
      label: 'Corporate Career',
      entries: [
        {
          id: 'axa',
          dateRange: '2023–Present',
          title: 'Technology Enablement Senior Manager',
          company: 'AXA Philippines',
          logo: '/logos/axa.png',
          initial: 'AXA',
          color: '#00008F',
          current: true,
          summary: "Leading digital enablement, platform delivery, and stakeholder strategy across AXA's roadmap.",
          spotlight: {
            paragraph: 'Leads digital roadmap scoping and stakeholder consulting across a $2M initiative, shipping 30+ web platforms and complex mobile-app migrations over a 10+ year career.',
            stats: [
              { value: '30+', label: 'Platforms Deployed' },
              { value: '$2M', label: 'Initiative Led' },
              { value: '10+ Yrs', label: 'Experience' },
              { value: '2023–', label: 'Present' },
            ],
            contributions: [
              'Digital Strategy & Roadmap Scoping',
              'Customer Journey & System Consulting',
              'Stakeholder & Vendor Management',
              'Development Oversight',
              'Feature Prioritization',
              'Operational Reporting',
            ],
          },
        },
        {
          id: 'globe',
          dateRange: '2022–2023',
          title: 'API Technical Designer',
          company: 'Globe Group Inc. (under Yondu)',
          logo: '/logos/globe.png',
          initial: 'GL',
          color: '#0056A2',
          current: false,
          summary: "Designed API contracts for Globe Group's platform integrations.",
        },
        {
          id: 'balud-spo',
          dateRange: '2020–2022',
          title: 'Senior Product Owner',
          company: 'Balud Digital Solutions Corporation',
          logo: '/logos/balud.png',
          initial: 'BDS',
          color: '#0F766E',
          current: false,
          summary: 'Owned product roadmap and delivery, promoted from the row below.',
        },
        {
          id: 'balud-fe',
          dateRange: '2018–2020',
          title: 'Frontend & Data Developer',
          company: 'Balud Digital Solutions Corporation',
          logo: '/logos/balud.png',
          initial: 'BDS',
          color: '#0F766E',
          current: false,
          summary: 'Built frontend interfaces and data workflows.',
        },
        {
          id: 'jnj',
          dateRange: '2017',
          title: 'Demand Planner Intern (VBA Automation)',
          company: 'Johnson & Johnson Pte. Ltd.',
          logo: '/logos/jnj.png',
          initial: 'J&J',
          color: '#CC0000',
          current: false,
          summary: 'Automated demand-planning workflows during an internship.',
        },
      ],
    },
    otherHustle: {
      label: 'Other Hustle',
      entries: [
        {
          id: 'thepacklabs',
          dateRange: '2026–Present',
          title: 'API Integrator Manager',
          company: 'ThePackLabs',
          logo: null,
          initial: 'TPL',
          color: '#3D3D3D',
          current: true,
          summary: 'Built and maintains the automated Zoey→BigQuery→Looker Studio ETL pipeline.',
          spotlight: {
            paragraph: 'Built and maintains an automated Zoey→BigQuery→Looker Studio ETL pipeline, OAuth2-secured, deployed on Cloud Run.',
            stats: [
              { value: '1-Hr', label: 'Refresh Cycle' },
              { value: '3-Stage', label: 'ETL Pipeline' },
              { value: 'Cloud Run', label: 'Deployed' },
              { value: '2026–', label: 'Present' },
            ],
            contributions: [
              'Built/maintains ETL pipeline (Python)',
              'OAuth2 auth layer',
              'BigQuery schema/view design',
              'Cloud Run deployment',
              'Multi-tier sanity-check monitoring + alerting',
            ],
          },
        },
        {
          id: 'aktivasia',
          dateRange: '2026–Present',
          title: 'Digital Projects Manager',
          company: 'AktivAsia Ltd.',
          logo: '/logos/aktivasia.jpg',
          initial: 'AA',
          color: '#7B9E87',
          current: true,
          summary: 'Leads Zoho CRM migration and remote-team data adoption for a 4-country regional NGO.',
          spotlight: {
            paragraph: 'Leads Zoho CRM migration and configuration for a 4-country regional NGO, training a remote multicultural team.',
            stats: [
              { value: '4', label: 'SE-Asia Countries' },
              { value: 'Zoho CRM', label: 'Migration Led' },
              { value: 'Remote', label: 'Team Trained' },
              { value: '2026–', label: 'Present' },
            ],
            contributions: [
              'Leads Zoho CRM migration & configuration',
              'Refines forms/workflows/reporting dashboards',
              'Trains remote multicultural team',
              'Owns Workspace/Slack admin + onboarding/offboarding',
              'Drafts helpdesk policy',
            ],
          },
        },
        {
          id: 'cup-n-grind',
          dateRange: '2025–Present',
          title: 'Business Owner',
          company: "Cup N' Grind",
          logo: '/logos/cup-n-grind.jpg',
          initial: 'CG',
          color: '#6B4226',
          current: false,
          summary: 'Runs a coffee shop in San Jose, Occidental Mindoro, building youth community around sustainability.',
        },
        {
          id: 'cosme-de-net',
          dateRange: '2023–2026',
          title: 'Inventory Control Analyst',
          company: 'Cosme De Net',
          logo: '/logos/cosme-de-net.jpg',
          initial: 'CDN',
          color: '#C1694F',
          current: false,
          summary: 'Managed inventory control for a Japan/Hong Kong cosmetics distributor carrying 30,000+ SKUs.',
        },
        {
          id: 'leopc',
          dateRange: '2020',
          title: 'Website Developer',
          company: 'Leo PC',
          logo: '/logos/leopc.jpg',
          initial: 'LP',
          color: '#2D2D2D',
          current: false,
          summary: 'Built the website for Leo PC, a local computer shop in San Jose, Occidental Mindoro.',
        },
      ],
    },
  },
  education: [
    {
      id: 'dlsu',
      dateRange: '2014–2018',
      school: 'De La Salle University – Manila',
      detail: 'BS Industrial Management Engineering, Minor in IT',
    },
    {
      id: 'pcic',
      dateRange: '2010–2014',
      school: 'Philippine Central Islands College',
      detail: 'Valedictorian, PCIC Star Scholar, Best in Math/Science/English/Filipino',
    },
  ],
},
```

Notes on fidelity to the BRD: `Cosme De Net` (capital D/N, per BRD §4) and `Cup N' Grind` (capital N) are used verbatim, correcting the old (deleted) `content.brandsServed`'s "Cosme de net" / "Cup n' Grind" casing — FR-15 requires §4's text exactly, which overrides even the site's own prior casing. `AktivAsia Ltd.` (with "Ltd.") likewise replaces the old data's "AktivAsia" per the same rule.

Two data values are carried forward as **flagged-for-confirm**, not treated as final — see §11.1 and §11.2.

---

## 5. Component Prop Contracts

```
LogoOrMonogram    { logo: string|null, initial: string, color: string, name: string, size?: 'sm'|'md'|'lg' }
TeaserCard        { entry: TimelineEntryData }
CareerTimelineTeaser   (no props — reads content.careerTimeline + content.experience)
ExperienceHeader  (no props — reads content.experience)
CareerTrack       { trackKey: 'corporate'|'otherHustle', track: { label: string, entries: TimelineEntryData[] } }
YearFilterTabs    { entries: TimelineEntryData[], activeFilter: string, onSelect: (dateRange: string) => void }
SpotlightBlock    { entry: TimelineEntryData }   // caller guarantees entry.spotlight is populated
StatTile          { value: string, label: string }
FullTimelineList  { entries: TimelineEntryData[], activeFilter: string }
TimelineEntry     { entry: TimelineEntryData, highlighted: boolean }
EducationSection  (no props — reads content.experience.education)
EducationCard     { entry: EducationEntryData }
```

`size` on `LogoOrMonogram`: `'lg'` (14×14, teaser cards) / `'md'` (spotlight headers) / `'sm'` (inline next to timeline date badges) — exact pixel values are a forge-dev/forge-brand styling call within Tailwind's scale, not architecturally load-bearing; the three-tier distinction itself is the requirement (matches the three usage contexts named in the wireframe's Component Inventory, §9).

---

## 6. Business / Aggregation Logic

### 6.1 Year-filter tab derivation (FR-9)

Per track, tabs are derived — never hand-authored — from that track's own entries, preserving the wireframe's explicit "scroll+highlight, never hide" resolution (§4.3 of the wireframe; required to keep FR-11's "exactly 5 entries" invariant true regardless of filter state):

```js
function deriveTabs(entries) {
  const seen = new Set()
  const ranges = entries
    .map((e) => e.dateRange)
    .filter((r) => (seen.has(r) ? false : seen.add(r)))
  return ['All', ...ranges]
}
```

Order is preserved as-encountered (entries are already reverse-chronological in `content.js`), so no separate sort key is needed. Note the Other Hustle case: `2026–Present` appears on both `thepacklabs` and `aktivasia` — `deriveTabs` naturally collapses it to one tab, and selecting it must match/highlight both entries (handled by simple equality in `FullTimelineList`, not id-specific logic).

### 6.2 Filter selection → scroll + highlight (FR-9, FR-11)

`CareerTrack` owns `const [activeFilter, setActiveFilter] = useState('All')`, passed to both `YearFilterTabs` (for `aria-selected`) and `FullTimelineList` (for highlight + scroll).

`FullTimelineList`, on `activeFilter` change:
1. Compute `highlighted = activeFilter === 'All' || entry.dateRange === activeFilter` per entry — **all** matching entries get `highlighted`, rows never unmount.
2. Scroll to the *first* matching entry: `refs[firstMatch.id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })`.
3. No manual reduced-motion branching needed here — `index.css`'s existing global rule (`@media (prefers-reduced-motion: reduce) { *,*::before,*::after { scroll-behavior: auto !important } }`) already downgrades this to an instant jump for those users. This is the same mechanism relied on in §2.3's hash-scroll effect.

### 6.3 Logo-or-monogram resolution + runtime fallback (FR-17)

`LogoOrMonogram` extends `BrandsServed.jsx`'s existing inline pattern (logo ? `<img>` : monogram `<div>`) with one addition the old component didn't have: an `onError` runtime fallback, required by the wireframe's error-state spec (§3.3 / §4.4 — "a logo `<img>` fails to load → `onError` swaps the slot to the monogram treatment").

```jsx
function LogoOrMonogram({ logo, initial, color, name, size = 'md' }) {
  const [failed, setFailed] = useState(false)
  const showLogo = logo && !failed
  return showLogo ? (
    <img src={logo} alt={`${name} logo`} loading="lazy" onError={() => setFailed(true)} className={SIZE_CLASSES[size]} />
  ) : (
    <div className={SIZE_CLASSES[size]} style={{ backgroundColor: color }}>{initial}</div>
  )
}
```

This is why **every** entry in `content.experience` — not just the monogram-only ones — carries `initial` + `color` (§4.3): they're the required fallback pair for entries that normally render a real logo but must degrade gracefully if the image 404s.

### 6.4 Teaser card set (FR-4, BRD §8 resolution #5)

Covered in §4.2 — computed, not stored: `[...corporate.entries, ...otherHustle.entries.slice(0, 2)]`.

### 6.5 Spotlight count per track (FR-10, BRD §8 resolution #2)

`CareerTrack` does not hardcode "1 spotlight for Corporate, 2 for Other Hustle." It derives it generically:

```js
const spotlightEntries = track.entries.filter((e) => e.current && e.spotlight)
```

Corporate naturally yields `[axa]` (1); Other Hustle naturally yields `[thepacklabs, aktivasia]` (2) — purely a function of the data, not a per-track special case in the component. If a future role becomes "current" and gets spotlight content, it starts rendering automatically without a component change.

### 6.6 Route 404 (FR-1 scope boundary)

Covered in §2.2: `<Route path="*" element={<Navigate to="/" replace />} />`.

---

## 7. Navbar Changes (FR-2)

`Navbar.jsx` needs three concrete changes, all scoped to that one file.

### 7.1 `content.nav.links` gains a route-type entry

```js
nav: {
  links: [
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Services', href: '#features' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Experience', href: '/experience' },   // NEW — starts with "/", not "#"
  ],
  cta: 'Connect with me',
  ctaHref: '#cta',
},
```

The `/` vs `#` prefix is the discriminator `Navbar.jsx` uses to decide anchor-link vs. route-link rendering — no separate `type` field needed, kept minimal.

### 7.2 Link rendering logic

```jsx
import { Link, useLocation } from 'react-router-dom'

const location = useLocation()
const isHome = location.pathname === '/'

content.nav.links.map((link) => {
  const isRouteLink = link.href.startsWith('/')

  if (isRouteLink) {
    const isActive = location.pathname === link.href
    return <Link to={link.href} aria-current={isActive ? 'page' : undefined} ...>{link.label}</Link>
  }

  // Anchor link. On "/", keep the plain <a> so Lenis's `anchors: true`
  // click-interception keeps doing the in-page smooth scroll unchanged.
  // Off "/", a plain <a href="#about"> would trigger a full page reload
  // (browser default) — must use <Link> to stay SPA and land on "/",
  // then let Home.jsx's hash-scroll effect (§2.3) finish the job.
  const isActive = isHome && link.href === `#${activeId}`
  return isHome ? (
    <a href={link.href} aria-current={isActive ? 'page' : undefined} ...>{link.label}</a>
  ) : (
    <Link to={`/${link.href}`} aria-current={undefined} ...>{link.label}</Link>
  )
})
```

Off `/`, none of the four anchor links show `aria-current` — there's no "active section" concept once you've left the homepage; only "Experience" can be active, and it correctly is.

### 7.3 Scroll-spy `IntersectionObserver` must be pathname-gated

Current `Navbar.jsx` sets this up once on mount (`useEffect(..., [])`). Because `Navbar` now persists across route changes (it's outside `<Routes>`), that effect **must** be re-scoped to `isHome` and re-run on pathname change — otherwise it either observes nothing useful on `/experience` (harmless but wasted) or, worse, fails to re-attach when navigating back to `/` since it already ran once and never re-runs.

```jsx
useEffect(() => {
  if (!isHome) { setActiveId(''); return }
  const sections = content.nav.links
    .filter((l) => l.href.startsWith('#'))
    .map((l) => document.getElementById(l.href.replace('#', '')))
    .filter(Boolean)
  if (!sections.length) return
  const observer = new IntersectionObserver(/* unchanged */)
  sections.forEach((s) => observer.observe(s))
  return () => observer.disconnect()
}, [isHome])
```

(The `.filter((l) => l.href.startsWith('#'))` also excludes the new "Experience" route-link from the scroll-spy's `getElementById` lookup, which would otherwise look for a nonexistent `#/experience` element.)

**Pre-existing gap, confirmed out of scope (per wireframe §2.2):** the mobile nav-link visibility gap (`hidden md:flex`, no hamburger) predates this feature and is not addressed here.

---

## 8. Footer & Reference Repointing (FR-19)

Three targets, all resolved by the wireframe (§2.3) — this section is the implementation spec, not a re-decision.

| Reference | File | Change |
|---|---|---|
| `content.about.ctaPrimary.href` | `src/data/content.js` | `'#brands-served'` → `'/experience'` (label "View Experience" unchanged) |
| `content.footer.navColumns[0]` "Brands Served" entry | `src/data/content.js` | `{ label: 'Brands Served', href: '#brands-served' }` → `{ label: 'Experience', href: '/experience' }` |
| `TechStack.jsx`'s `ScrollCue` | `src/components/TechStack.jsx` | inline `href="#brands-served"` → `href="#career-timeline"` (this is a same-page continuation cue, stays a plain in-page anchor, not content-driven — no `content.js` change needed here beyond what's already inline in the component) |

**Two follow-on code changes these data changes force** (not just data edits):

1. **`About.jsx`'s `ctaPrimary`** currently renders `<motion.a href={about.ctaPrimary.href}>`. Now that the href is an internal route (`/experience`) rather than an anchor, it must render as a React Router `Link` — a plain `<a href="/experience">` would force a full page reload. Framer Motion v12 (confirmed in `package.json`) supports wrapping arbitrary components via `motion.create()`: `const MotionLink = motion.create(Link)`, then `<MotionLink to={about.ctaPrimary.href} ...>` in place of `<motion.a href=...>`. `ctaSecondary` (résumé download) is untouched — it's a real file download, not a route.

2. **`CareerTimelineTeaser`'s CTA** ("See the Full Career Story →") reads `content.careerTimeline.cta.href` (`/experience`) and must be built the same way — `MotionLink` wrapping `Link`, not `motion.a`.

3. **`Footer.jsx`'s nav-column link map** currently renders every link as a plain `<a href={link.href}>` uniformly. It needs the same route-vs-anchor branch `Navbar.jsx` uses (§7.2: `link.href.startsWith('/')` → `<Link>`, else → `<a>`) so the new "Experience" entry doesn't force a reload.

**Footer's other three nav links — RESOLVED at G3: fix all four.** `Footer.jsx`'s "How It Works" / "Services" / "Tech Stack" links get the identical `isHome`-aware route/anchor resolution as the "Experience" link and as `Navbar.jsx` (§7.2), not just the FR-19-mandated one. Confirmed by Gino 2026-07-14 — in scope for this build, not deferred.

---

## 9. NFR Design

| NFR | Concrete implementation |
|---|---|
| **NFR-1 Theme parity** | Every new component consumes `var(--color-*)` tokens exclusively (`--color-surface`, `--color-border`, `--color-ink`, `--color-text-secondary`, `--color-primary`, matching `TechStack.jsx`/`About.jsx`'s existing usage). `SpotlightBlock`/timeline rows reuse the existing `.paper-card` class for elevation. **Exception, by design, not oversight:** the per-entry monogram/brand colors in `content.experience` (`#00008F` for AXA, `#3D3D3D` for TPL, etc.) are hardcoded hex — this is *data*, not chrome, identical precedent to the deleted `content.brandsServed` block, and isn't what BRD resolved-decision #4 is targeting (that decision is about component *styling*, not per-brand identity color data). |
| **NFR-2 Mobile-first, 375px** | `YearFilterTabs`: `overflow-x-auto`, `whitespace-nowrap`, `scroll-snap-type: x proximity` (matches the wireframe's `.tabstrip` CSS exactly) — never clipped, all tabs reachable by horizontal scroll. Stat tiles: `grid-cols-2` base → `md:grid-cols-4`. Teaser cards: `grid-cols-2` base → `sm:grid-cols-4`. Other Hustle's two `SpotlightBlock`s: stacked full-width base → `md:grid-cols-2`. |
| **NFR-3 Performance budget** | No code-splitting (§1) — one static import path. One new dependency (`react-router-dom`). No new image assets (all logos already exist). No chart library (wireframe §6 confirms none needed). Build should be checked against the existing 120kb JS / 15kb CSS gzip budget after `react-router-dom` lands, same as any dependency addition — no special new tooling required for that check. |
| **NFR-4 Reduced motion** | All `whileInView`/`initial` Framer Motion usage in new components follows the exact pattern already in `TechStack.jsx`/`About.jsx` — no bespoke handling, `MotionConfig reducedMotion="user"` covers it globally. The two new pieces of *imperative* (non-Framer-Motion) scrolling — hash-scroll-on-mount (§2.3) and filter-tab scroll-to-match (§6.2) — are both automatically downgraded to instant scrolling for reduced-motion users by `index.css`'s existing global `scroll-behavior: auto !important` rule; no additional JS-side `matchMedia` gating needed for either. |
| **NFR-5 Accessibility** | `YearFilterTabs` renders real `<button>` elements (not `<div>`s) inside a `role="tablist"` container, each `role="tab"` with `aria-selected` — real buttons are keyboard-focusable/activatable for free. Active state uses `aria-current`/`aria-selected` consistent with `Navbar.jsx`'s existing pattern (§7.2). |
| **NFR-6 DRY content** | Covered fully by §4 — all copy in `content.js`, zero literal strings in new JSX except the "▸" bullet-prefix glyph and "→" in CTA labels, which are rendered structurally by the component (glyph is markup, not content) — same treatment the project already gives similar decorative characters. |

---

## 10. FR Traceability Matrix

| FR | Requirement | Implemented by |
|---|---|---|
| FR-1 | `/experience` route | `main.jsx` (`BrowserRouter`), `App.jsx` (`<Route path="/experience">`), `src/pages/ExperiencePage.jsx` — §2.1, §2.2, §2.4 |
| FR-2 | Persistent, route-aware navbar | `Navbar.jsx` §7 (link resolution, `aria-current`, pathname-gated scroll-spy); `Home.jsx` hash-scroll effect §2.3 |
| FR-3 | Teaser replaces Brands Served in place | `Home.jsx` §2.3 (import list); `CareerTimelineTeaser.jsx` §3.2, `id="career-timeline"` |
| FR-4 | Condensed teaser content | `CareerTimelineTeaser.jsx` + derived entry list §4.2/§6.4 (7 cards, no tabs/spotlight/timeline) |
| FR-5 | CTA to `/experience` | `CareerTimelineTeaser.jsx`'s `MotionLink` CTA, `content.careerTimeline.cta` §8 |
| FR-6 | Updated heading/eyebrow copy | `content.careerTimeline.sectionLabel`/`.heading` §4.3 |
| FR-7 | Page header | `ExperienceHeader.jsx` §3.3, `content.experience.eyebrow`/`.heading` |
| FR-8 | Two labeled, stacked tracks | `ExperiencePage.jsx` §2.4 (two `CareerTrack` instances), `content.experience.tracks.{corporate,otherHustle}.label` |
| FR-9 | Independent year-filter per track | `CareerTrack.jsx` (own `activeFilter` state per instance), `YearFilterTabs.jsx`, derivation §6.1 |
| FR-10 | Spotlighted block(s) per track | `SpotlightBlock.jsx`, generic derivation §6.5 (`entries.filter(e => e.current && e.spotlight)`) |
| FR-11 | Full Timeline list per track | `FullTimelineList.jsx` / `TimelineEntry.jsx`, scroll+highlight logic §6.2 |
| FR-12 | Education rendered | `EducationSection.jsx` / `EducationCard.jsx`, `content.experience.education` §4.3 |
| FR-13 | Corporate data fidelity, 2 distinct Balud rows | `content.experience.tracks.corporate.entries` §4.3 — `balud-spo` and `balud-fe` as separate entries |
| FR-14 | Other Hustle data fidelity | `content.experience.tracks.otherHustle.entries` §4.3 |
| FR-15 | Authoritative data overrides résumé everywhere | All title/company/date strings in `content.js` sourced verbatim from BRD §4 (see §4.3 fidelity notes: "Cosme De Net", "Cup N' Grind", "AktivAsia Ltd." casing corrected) |
| FR-16 | Cosme De Net placeholder, same treatment as siblings | `content.experience.tracks.otherHustle.entries[3]` (`cosme-de-net`) — same `TimelineEntryData` shape as every sibling, rendered by the same `TimelineEntry.jsx`, no conditional "incomplete" styling exists in the component |
| FR-17 | Reuse logos, monogram fallback | `LogoOrMonogram.jsx` §6.3, every entry's `logo`/`initial`/`color` fields §4.3 |
| FR-18 | Delete `BrandsServed.jsx`/`content.brandsServed` | Deletion — `src/components/BrandsServed.jsx` removed, `brandsServed` block removed from `content.js`, import removed from `Home.jsx` (formerly `App.jsx`) |
| FR-19 | Repoint all `#brands-served` references | §8 — `About.jsx` ctaPrimary, `Footer.jsx` nav link, `TechStack.jsx` ScrollCue, all three resolved |
| FR-20 | `TrustedBy.jsx` stays untouched | No file in this SAD's build order touches `TrustedBy.jsx` or `content.trustedBy` — confirmed by omission |

All 20 FRs trace to a concrete file/component/data key. None unmapped.

---

## 11. Flags for G3 Sign-Off — RESOLVED 2026-07-14

All four flags below were reviewed with Gino directly; resolutions are final.

1. **Other Hustle spotlight stat-tile values — RESOLVED: ship as drafted.** ThePackLabs' and AktivAsia's 8 stat-tile values (§4.3) are approved as-is, sourced from BRD §4/§8.6 facts, no further wording pass needed before build.
2. **Balud Digital Solutions' logo and color — RESOLVED: real logo supplied.** Gino provided the actual Balud Digital Solutions Corporation logo (teal "bd" mark); copied into `public/logos/balud.png`. Both `balud-spo` and `balud-fe` entries in §4.3 now set `logo: '/logos/balud.png'` (no longer monogram-only) with `color: '#0F766E'` (teal, sampled from the logo) as the `LogoOrMonogram` runtime-fallback pair (§6.3) — `initial: 'BDS'` stays as the fallback text if the image ever 404s.
3. **Footer route-awareness scope — RESOLVED: fix all four.** See §8 — confirmed in scope, not deferred.
4. **Cosme De Net's tag facts** (VBA Automation, VBS, BAT Files, Excel, Data Analysis, per BRD §4) are **not** modeled as a `tags` field on that entry in this schema — no component in this design renders a tags row (per wireframe flag #4, deliberately, to keep FR-16's "indistinguishable from siblings" criterion trivially true). If a future iteration wants uniform tag chips across all 10 entries, add `tags: string[]` to the shared `TimelineEntryData` type then — not now, avoiding an unused field.
5. **Code-splitting `/experience`: recommended against**, per §1's stated reasoning. Revisit only if a future route adds genuinely heavy per-route dependencies.

---

## 12. Build Order

Bottom-up: data → leaf components → composed components → pages → route wiring → cross-cutting nav changes → cleanup. Each step is independently testable before the next depends on it.

1. `npm install react-router-dom`
2. `src/data/content.js` — add `careerTimeline` + `experience` blocks (§4.3); update `nav.links` (§7.1); update `about.ctaPrimary.href` and `footer.navColumns[0]` (§8); delete `brandsServed` block (FR-18 — data half).
3. `src/components/LogoOrMonogram.jsx` — new, extracted + `onError`-enhanced (§6.3).
4. Leaf `/experience` components: `StatTile.jsx`, `TimelineEntry.jsx`, `EducationCard.jsx`.
5. Composed `/experience` components: `YearFilterTabs.jsx`, `SpotlightBlock.jsx`, `FullTimelineList.jsx`, `EducationSection.jsx`, `CareerTrack.jsx`, `ExperienceHeader.jsx`.
6. Teaser components: `TeaserCard.jsx`, `CareerTimelineTeaser.jsx`.
7. `src/pages/ExperiencePage.jsx` (§2.4).
8. `src/pages/Home.jsx` — assemble existing sections minus `BrandsServed` + new teaser; implement hash-scroll effect (§2.3).
9. `src/main.jsx` — wrap with `BrowserRouter` (§2.1).
10. `src/App.jsx` — restructure into `<Routes>` + scroll-to-top effect; remove direct section imports (now in `Home.jsx`) and the `BrandsServed` import (§2.2).
11. `src/components/Navbar.jsx` — route-aware link resolution, `aria-current`, pathname-gated `IntersectionObserver` (§7).
12. `src/components/Footer.jsx` — Experience link fix (mandatory); optionally the other three anchors, pending §11.3 (§8).
13. `src/components/TechStack.jsx` — `ScrollCue` href → `#career-timeline` (§8).
14. `src/components/About.jsx` — `ctaPrimary` swapped from `motion.a` to `motion.create(Link)` (§8).
15. Delete `src/components/BrandsServed.jsx` (FR-18 — file half).
16. Verify: `grep -r "brands-served\|BrandsServed" src/` returns zero matches (FR-19 acceptance criterion).

---

*Definition of done for this document: stack decision justified with alternatives considered (§1), schema complete with no ambiguous field (§4), component/prop contracts complete (§5), aggregation/business logic specified precisely (§6), every relevant NFR addressed concretely (§9), every FR traced to a file/component/data key (§10), genuine tradeoffs flagged with a stated recommendation rather than left open (§11), build order proposed bottom-up (§12). Proposal only — not final until Gino clears Gate G3.*
