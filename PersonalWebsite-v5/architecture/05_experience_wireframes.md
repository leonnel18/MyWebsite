# 05 UX Wireframes: `/experience` Page + Homepage "Career Timeline" Teaser

> **Author:** UX / Wireframe Designer
> **Date:** 2026-07-14
> **Status:** Ready for forge-brand → forge-architect → forge-dev handoff
> **Source:** `architecture/04_experience_page_brd.md` (approved, G1 cleared 2026-07-14) — every FR/NFR cited below refers to that document. §8's six resolutions are treated as final and are **not** re-litigated here.

---

## 0. How to read this document

- Everything below is **structural and grayscale**. No hex from `brand_guidelines.md` or `index.css` appears in the ASCII wireframes or the HTML mockups — that's deliberate, not an oversight. `forge-dev` (or whoever builds this) applies `var(--color-*)` tokens per NFR-1; this document only fixes layout, hierarchy, and interaction.
- Two HTML mockups accompany this doc, both plain Tailwind-CDN files, open directly in a browser, no build step:
  - `design/wireframes/career-timeline-teaser.html` — homepage section (FR-3–FR-6)
  - `design/wireframes/experience-page.html` — the `/experience` route (FR-7–FR-14, FR-16, education)
- Draft copy shown in ASCII/HTML (paragraphs, stat-tile labels, bullets, one-line summaries) is **sourced only from BRD §4 facts and §8.6's cited résumé/source-doc bullets** — never invented. It is offered so forge-dev has concrete strings to drop into `content.js`, not as final polished marketing copy; treat it as a strong first draft, not a locked deliverable outside this doc's own scope.
- Section 8 flags a small number of gaps/interpretations I had to resolve to make the wireframe unambiguous, where the BRD leaves a choice open or has an internal inconsistency. None of them are blocking; all are flagged rather than silently forced.

---

## 1. Hero User Flow

Two personas, one shared entry path, one shared destination.

```
                                   ┌─────────────────────────┐
                                   │   Homepage  ( / )        │
                                   │                          │
   Recruiter/collaborator lands ─▶│  ... Tech Stack section  │
   here (organic, LinkedIn, etc.) │        ▼                 │
                                   │  ★ Career Timeline teaser│  ← FR-3/4/5/6
                                   │    5 Corporate cards      │
                                   │    + 2 Other Hustle cards │
                                   │    "See the Full Career   │
                                   │     Story →" CTA          │
                                   │        ▼                 │
                                   │   ... CTA/Contact section │
                                   └───────────┬──────────────┘
                                               │ click CTA (FR-5)
                                               │ OR Navbar "Experience" (FR-2)
                                               │ OR direct URL /experience (FR-1)
                                               ▼
                                   ┌─────────────────────────┐
                                   │  /experience  (route)    │
                                   │                          │
                                   │  Page header (FR-7)      │
                                   │        ▼                 │
                                   │  CORPORATE CAREER (FR-8) │
                                   │   Year tabs (FR-9)        │
                                   │   1 Spotlight: AXA (FR-10)│
                                   │   Full Timeline ×5 (FR-11)│
                                   │        ▼                 │
                                   │  OTHER HUSTLE (FR-8)     │
                                   │   Year tabs (FR-9)        │
                                   │   2 Spotlights: TPL+AA    │
                                   │   Full Timeline ×5 (FR-11)│
                                   │        ▼                 │
                                   │  EDUCATION (FR-12)       │
                                   │   DLSU · PCIC              │
                                   └───────────┬──────────────┘
                                               │ Navbar "About" etc. clicked
                                               ▼
                                   back to `/` at matching anchor (FR-2)
```

Recruiter JTBD ("confirm relevance in under 30s") is served entirely by the teaser — logos, titles, dates, one CTA, no reading required. Collaborator JTBD ("show me depth, is the side work credible") is served by `/experience` — the spotlight blocks are where "credible, not filler" gets proven (real numbers, real bullets, same visual weight as the AXA corporate spotlight).

---

## 2. Navigation & Routing Behavior (FR-1, FR-2, FR-19)

### 2.1 New route

| Route | Renders | Chrome |
|---|---|---|
| `/` | existing homepage (unchanged, minus `BrandsServed`, plus the teaser) | Preloader, WispField, Navbar, Footer |
| `/experience` | new Experience page | same — Preloader, WispField, Navbar, Footer all persist per BRD §8 resolution #4 |

### 2.2 Navbar link resolution (FR-2)

`content.nav.links` gains one entry, appended after "Tech Stack":

```
About | How It Works | Services | Tech Stack | Experience
```

"Experience" is a route link (`/experience`), not an anchor — it gets `aria-current="page"` only while `location.pathname === '/experience'`, same on/off pattern as the existing scroll-spy `activeId` logic, just driven by route instead of `IntersectionObserver`.

The four existing anchor links become **route-aware**:

| Current page | Click "About" (`#about`) | Behavior |
|---|---|---|
| `/` | resolves to `#about` | in-page Lenis smooth-scroll (unchanged) |
| `/experience` | resolves to `/#about` | route to `/`, then scroll to `#about` on mount |

This is a small resolution-function change in `Navbar.jsx` (compute `href` as `isHome ? link.href : `/${link.href}`` ), not a visual change — flagged here so forge-dev doesn't have to re-derive it from FR-2's acceptance text.

**Pre-existing gap, out of scope, flagged only:** `Navbar.jsx` currently hides all nav links and the CTA below `md:` (`hidden md:flex` — no hamburger menu exists). On mobile, links (including the new "Experience" item) are not reachable at all today. This predates this BRD and FR-2 doesn't ask for a mobile menu, so it is **not** addressed here — flagging so it isn't mistaken for a regression introduced by this feature.

### 2.3 Repointed references (FR-19)

FR-19 explicitly leaves the target ("new Career Timeline section id **or** `/experience`") as a choice for downstream to resolve. Resolved here, per each link's own purpose:

| Reference | Old target | New target | Why |
|---|---|---|---|
| `content.about.ctaPrimary` ("View Experience" button, homepage) | `#brands-served` | **`/experience`** | Its own label says "View Experience" — routing to the full page matches the label's literal promise better than scrolling to a condensed teaser. |
| `content.footer.navColumns[0]` "Brands Served" link | `#brands-served` | **`/experience`**, relabeled **"Experience"** | Footer persists on `/experience` too (§8 resolution #4) — an in-page anchor (`#career-timeline`) would silently no-op when clicked from `/experience`. A route target works from anywhere. |
| `TechStack.jsx`'s `ScrollCue` (bottom-of-section "keep scrolling" cue) | `#brands-served` | **`#career-timeline`** | This is a same-page continuation cue, not a navigation action — it should keep the visitor scrolling down the homepage, not jump them to a different route. |

---

## 3. Screen 1 — Homepage "Career Timeline" Teaser

**Covers:** FR-3, FR-4, FR-5, FR-6, FR-15, FR-17 (partial), FR-19 (partial)
**Replaces:** `BrandsServed.jsx` in `App.jsx`'s section order (Tech Stack → **Career Timeline** → CTA), section `id="career-timeline"`.
**Content:** all 5 Corporate Career entries + top 2 Other Hustle entries (ThePackLabs, AktivAsia) — 7 cards total, per §8 resolution #5. Logo-or-monogram + title + company + date range only. No filters, no spotlight, no bullets (those are `/experience`-only, per FR-4's acceptance criterion).

### 3.1 ASCII wireframe — desktop (≥1024px)

```
┌──────────────────────────────────────────────────────────────────────────┐
│ section#career-timeline   bg: var(--color-bg-alt)  py-20/24              │
│ (same slot BrandsServed occupies today, between #tech-stack and #cta)    │
│                                                                            │
│   ─ CAREER TIMELINE                                   ← .eyebrow         │
│   A decade of shipping, not just a resume line.       ← h2 .font-display │
│   (max-w-3xl, left-aligned — matches BrandsServed's header block shape)  │
│                                                                            │
│   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                            │
│   │ [axa]  │ │[globe] │ │  BDS   │ │  BDS   │  Row 1 — grid-cols-4       │
│   │ AXA    │ │ Globe  │ │ (mono) │ │ (mono) │                            │
│   │ Philip.│ │ Group  │ │ Balud  │ │ Balud  │                            │
│   │ Tech   │ │ API    │ │ Digital│ │ Digital│                            │
│   │ Enable.│ │ Tech   │ │ Senior │ │ FE &   │                            │
│   │ Sr Mgr │ │Designer│ │ Product│ │ Data   │                            │
│   │        │ │        │ │ Owner  │ │ Dev    │                            │
│   │2023–Now│ │2022–23 │ │2020–22 │ │2018–20 │                            │
│   └────────┘ └────────┘ └────────┘ └────────┘                            │
│   ┌────────┐ ┌────────┐ ┌────────┐                                       │
│   │ [jnj]  │ │  TPL   │ │[aktiv] │  Row 2 — 3 cards, grid continues,     │
│   │ J&J    │ │ (mono) │ │ Aktiv  │  same grid-cols-4 (4th cell empty)    │
│   │ Demand │ │ThePack │ │ Asia   │                                       │
│   │ Planner│ │ Labs   │ │ Digital│                                       │
│   │ Intern │ │ API    │ │Projects│                                       │
│   │ (VBA)  │ │Integ.  │ │ Manager│                                       │
│   │ 2017   │ │2026–Now│ │2026–Now│                                       │
│   └────────┘ └────────┘ └────────┘                                       │
│                                                                            │
│                     [ See the Full Career Story → ]                      │
│                        ← CTA, rounded-full, var(--color-primary),        │
│                          hover state, routes to /experience (FR-5)       │
└──────────────────────────────────────────────────────────────────────────┘
```

### 3.2 ASCII wireframe — mobile (375px, NFR-2)

```
┌───────────────────────┐
│ px-4                   │
│  ─ CAREER TIMELINE      │
│  A decade of shipping,  │
│  not just a resume      │
│  line.                  │
│                        │
│ ┌──────────┐┌─────────┐│  grid-cols-2 (base) → sm:grid-cols-4
│ │ [axa]    ││ [globe] ││
│ │ AXA      ││ Globe   ││
│ └──────────┘└─────────┘│
│ ┌──────────┐┌─────────┐│
│ │  BDS     ││  BDS    ││
│ └──────────┘└─────────┘│
│ ┌──────────┐┌─────────┐│
│ │ [jnj]    ││  TPL    ││
│ └──────────┘└─────────┘│
│ ┌──────────┐            │
│ │ [aktiv]  │            │
│ └──────────┘            │
│                        │
│ [ See Full Story → ]   │  ← full-width CTA at this width
└───────────────────────┘
```

### 3.3 States

| State | Description |
|---|---|
| **Default** | as above — 7 cards render on mount, static content (`content.js`), no fetch. |
| **Loading** | brief, image-only: each card's logo uses `loading="lazy"` (existing `BrandsServed` pattern, carried forward). While a logo image is in flight, its slot shows a flat gray placeholder block (`bg-gray-200`/`dark:` equivalent) at the same dimensions as the resolved `<img>`, so the card never reflows on load. See HTML mock's "Loading" panel. |
| **Error** | a logo `<img>` fails to load (404/network) → `onError` swaps the slot to the monogram treatment (reuses the same colored-square + initials pattern already used for BDS/TPL) rather than showing a broken-image icon. Every card therefore always resolves to *either* a real logo *or* a monogram — never a broken state a visitor can see. |
| **Empty** | Not applicable. The 7-entry list is a fixed curated array in `content.js` (§8 resolution #5); there's no user input, filter, or async source that could zero it out. Noted, not forced. |
| **Mobile** | see §3.2 — 2-col grid, full-width CTA. |

### 3.4 FR coverage (this screen)

FR-3, FR-4, FR-5, FR-6, FR-15, FR-17, FR-19 (About CTA + Footer link + ScrollCue, listed as modified *existing* components, not new screens).

---

## 4. Screen 2 — `/experience` Page

**Covers:** FR-1, FR-2, FR-7, FR-8, FR-9, FR-10, FR-11, FR-12, FR-13, FR-14, FR-15, FR-16, FR-17.

### 4.1 Full-page ASCII wireframe — desktop

```
┌──────────────────────────────────────────────────────────────────────────┐
│ Navbar (persistent, fixed) — About · How It Works · Services · Tech      │
│ Stack · Experience*  [theme toggle]  [Connect with me]                   │
│ *aria-current="page" — active only while on /experience                  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   ─ CAREER JOURNEY                                    ← .eyebrow (FR-7)  │
│   Ten years, two tracks, one build philosophy.        ← h1 (FR-7)        │
│   (exactly one eyebrow + one top-level heading, above both tracks)       │
│                                                                            │
│  ══════════════════════ CORPORATE CAREER ═══════════════════════════     │
│   Corporate Career                              ← track h2 (FR-8)       │
│   [All][2023–Present][2022–2023][2020–2022][2018–2020][2017]  ← tabs FR-9│
│                                                                            │
│   ┌──────────────────────────────────────────────────────────────┐       │
│   │ SPOTLIGHT — AXA Philippines                        (FR-10)    │       │
│   │ Technology Enablement Senior Manager · 2023–Present            │       │
│   │ Leads digital roadmap scoping and stakeholder consulting       │       │
│   │ across a $2M initiative, shipping 30+ web platforms and        │       │
│   │ complex mobile-app migrations over a 10+ year career.          │       │
│   │ ┌────────┐┌────────┐┌────────┐┌────────┐                      │       │
│   │ │30+     ││ $2M    ││10+ Yrs ││2023–   │  4 stat tiles         │       │
│   │ │Platform││Initiat.││Experie.││Present │  (§8 resolution #1)   │       │
│   │ │Deployed││ Led    ││ nce    ││        │                      │       │
│   │ └────────┘└────────┘└────────┘└────────┘                      │       │
│   │ Key Contributions                                              │       │
│   │ ▸ Digital Strategy & Roadmap Scoping                           │       │
│   │ ▸ Customer Journey & System Consulting                         │       │
│   │ ▸ Stakeholder & Vendor Management                              │       │
│   │ ▸ Development Oversight                                        │       │
│   │ ▸ Feature Prioritization                                       │       │
│   │ ▸ Operational Reporting                                        │       │
│   └──────────────────────────────────────────────────────────────┘       │
│                                                                            │
│   Full Timeline                                            (FR-11/13)   │
│   ┃ [2023–Present] AXA Philippines                                       │
│   ┃                 Technology Enablement Senior Manager                 │
│   ┃                 Leading digital enablement, platform delivery,       │
│   ┃                 and stakeholder strategy across AXA's roadmap.       │
│   ┃ [2022–2023]    Globe Group Inc. (under Yondu)                        │
│   ┃                 API Technical Designer                               │
│   ┃                 Designed API contracts for Globe Group's platform    │
│   ┃                 integrations.                                        │
│   ┃ [2020–2022]    Balud Digital Solutions Corporation                   │
│   ┃                 Senior Product Owner                                 │
│   ┃                 Owned product roadmap and delivery, promoted from    │
│   ┃                 the row below.                                       │
│   ┃ [2018–2020]    Balud Digital Solutions Corporation                   │
│   ┃                 Frontend & Data Developer                            │
│   ┃                 Built frontend interfaces and data workflows.        │
│   ┃ [2017]         Johnson & Johnson Pte. Ltd.                           │
│   ┃                 Demand Planner Intern (VBA Automation)                │
│   ┃                 Automated demand-planning workflows during an        │
│   ┃                 internship.                                          │
│   (┃ = single connecting vertical line running through all 5 date        │
│    badges, left-aligned rail — matches reference site's list pattern)    │
│                                                                            │
│  ══════════════════════ OTHER HUSTLE ═══════════════════════════════     │
│   Other Hustle                                  ← track h2 (FR-8)       │
│   [All][2026–Present][2025–Present][2023–2026][2020]      ← tabs (FR-9) │
│                                                                            │
│   ┌───────────────────────────┐  ┌───────────────────────────┐          │
│   │ SPOTLIGHT — ThePackLabs   │  │ SPOTLIGHT — AktivAsia Ltd. │  2 blocks│
│   │ API Integrator Manager     │  │ Digital Projects Manager   │  (§8 #2)│
│   │ 2026–Present                │  │ 2026–Present                 │        │
│   │ Built and maintains an      │  │ Leads Zoho CRM migration    │        │
│   │ automated Zoey→BigQuery→    │  │ and configuration for a     │        │
│   │ Looker Studio ETL pipeline, │  │ 4-country regional NGO,      │        │
│   │ OAuth2-secured, deployed    │  │ training a remote            │        │
│   │ on Cloud Run.                │  │ multicultural team.          │        │
│   │ ┌────┐┌────┐┌────┐┌────┐    │  │ ┌────┐┌────┐┌────┐┌────┐    │        │
│   │ │1-Hr││3-  ││Cloud││2026│    │  │ │4 SE││Zoho││Remot││2026│    │        │
│   │ │Refr││Stage││ Run│–Now│    │  │ │Asia││ CRM││ e   ││–Now│    │        │
│   │ │esh ││ ETL │Deplo│    │    │  │ │Coun││Migr.││Team │    │    │        │
│   │ │Cycle││Pipe.││yed │    │    │  │ │tries││Led  ││Trained│  │    │        │
│   │ └────┘└────┘└────┘└────┘    │  │ └────┘└────┘└────┘└────┘    │        │
│   │ Key Contributions            │  │ Key Contributions            │        │
│   │ ▸ Built/maintains ETL        │  │ ▸ Leads Zoho CRM migration   │        │
│   │   pipeline (Python)          │  │   & configuration            │        │
│   │ ▸ OAuth2 auth layer          │  │ ▸ Refines forms/workflows/   │        │
│   │ ▸ BigQuery schema/view       │  │   reporting dashboards       │        │
│   │   design                     │  │ ▸ Trains remote multi-       │        │
│   │ ▸ Cloud Run deployment       │  │   cultural team               │        │
│   │ ▸ Multi-tier sanity-check    │  │ ▸ Owns Workspace/Slack admin │        │
│   │   monitoring + alerting      │  │   + onboarding/offboarding    │        │
│   │                               │  │ ▸ Drafts helpdesk policy      │        │
│   └───────────────────────────┘  └───────────────────────────┘          │
│   (side-by-side md:grid-cols-2 desktop; stacked, full-width mobile)      │
│                                                                            │
│   Full Timeline                                            (FR-11/14)   │
│   ┃ [2026–Present] ThePackLabs — API Integrator Manager                  │
│   ┃                 Built and maintains the automated Zoey→BigQuery→     │
│   ┃                 Looker Studio ETL pipeline.                          │
│   ┃ [2026–Present] AktivAsia Ltd. — Digital Projects Manager             │
│   ┃                 Leads Zoho CRM migration and remote-team data        │
│   ┃                 adoption for a 4-country regional NGO.               │
│   ┃ [2025–Present] Cup N' Grind — Business Owner                        │
│   ┃                 Runs a coffee shop in San Jose, Occidental           │
│   ┃                 Mindoro, building youth community around             │
│   ┃                 sustainability.                                      │
│   ┃ [2023–2026]    Cosme De Net — Inventory Control Analyst        (FR-16)│
│   ┃                 Managed inventory control for a Japan/Hong Kong      │
│   ┃                 cosmetics distributor carrying 30,000+ SKUs.         │
│   ┃                 [same card/typography/spacing as every sibling row — │
│   ┃                  no "TODO"/incomplete styling, per FR-16]            │
│   ┃ [2020]         Leo PC — Website Developer                           │
│   ┃                 Built the website for Leo PC, a local computer       │
│   ┃                 shop in San Jose, Occidental Mindoro.                │
│                                                                            │
│  ══════════════════════ EDUCATION ═══════════════════════════════════    │
│   Education                              ← standalone h2 (FR-12, §8 #3) │
│   ┌────────────────────────────┐ ┌────────────────────────────┐         │
│   │ 2014–2018                   │ │ 2010–2014                   │         │
│   │ De La Salle University      │ │ Philippine Central Islands   │         │
│   │ – Manila                    │ │ College                     │         │
│   │ BS Industrial Management    │ │ Valedictorian, PCIC Star     │         │
│   │ Engineering, Minor in IT    │ │ Scholar, Best in Math/        │         │
│   │                             │ │ Science/English/Filipino      │         │
│   └────────────────────────────┘ └────────────────────────────┘         │
│                                                                            │
├──────────────────────────────────────────────────────────────────────────┤
│ Footer (persistent) — Navigation · Connect · contact · socials · ©       │
└──────────────────────────────────────────────────────────────────────────┘
```

### 4.2 ASCII wireframe — mobile (375px, NFR-2)

```
┌───────────────────────┐
│ Navbar (wordmark +     │  nav links hidden <md — pre-existing site
│ theme toggle only)     │  behavior, not introduced by this feature
├───────────────────────┤
│ ─ CAREER JOURNEY        │
│ Ten years, two tracks,  │
│ one build philosophy.   │
│                         │
│ Corporate Career         │
│ ┌──┬───┬───┬───┬───┬──┐ │ ← overflow-x-auto, snap-x, whitespace-nowrap
│ │All│23–│22–│20–│18–│17│ │   NEVER clipped/unreachable (NFR-2) — all 6
│ └──┴───┴───┴───┴───┴──┘ │   tabs reachable by horizontal swipe/scroll
│  ↔ scrollable strip      │
│                         │
│ ┌─────────────────────┐ │
│ │ SPOTLIGHT — AXA      │ │
│ │ [paragraph]           │ │
│ │ ┌───────┐┌───────┐   │ │  stat tiles: grid-cols-2 (base) →
│ │ │30+    ││$2M    │   │ │  md:grid-cols-4
│ │ └───────┘└───────┘   │ │
│ │ ┌───────┐┌───────┐   │ │
│ │ │10+ Yrs││2023–  │   │ │
│ │ └───────┘└───────┘   │ │
│ │ Key Contributions     │ │
│ │ ▸ ...                 │ │
│ └─────────────────────┘ │
│                         │
│ Full Timeline            │
│ ┃[2023–Present]          │  date badge stacks above title at this
│ ┃ AXA Philippines         │  width (was inline on desktop)
│ ┃ Tech Enablement Sr Mgr  │
│ ┃ summary...              │
│ ┃[2022–2023]              │
│ ┃ ...                     │
│                         │
│ (Other Hustle track: same tab-strip + timeline pattern; its 2           │
│  spotlight blocks stack full-width, sequential, not side-by-side)       │
│                         │
│ Education                │
│ ┌─────────────────────┐ │  cards stack single column
│ │ 2014–2018 · DLSU      │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ 2010–2014 · PCIC      │ │
│ └─────────────────────┘ │
└───────────────────────┘
```

### 4.3 Interaction spec — year-filter tabs (FR-9, NFR-5)

Resolving a wording ambiguity in FR-9/FR-11 explicitly: tabs **scroll-to + highlight**, they do **not** remove/hide non-matching entries. This is required to keep FR-11's acceptance criterion true at all times ("Corporate Career's Full Timeline shows exactly 5 entries" / "Other Hustle's shows exactly 5 entries") — if a tab hid non-matching rows, the count would drop below 5 whenever a specific-year tab (not "All") were active, breaking that invariant. So:

- Tab options per track = `"All"` + one tab per **unique** date-range string among that track's own 5 entries, in reverse-chronological order (derived from that track's own data, per FR-9's acceptance — not shared between tracks).
  - Corporate Career tabs: `All · 2023–Present · 2022–2023 · 2020–2022 · 2018–2020 · 2017`
  - Other Hustle tabs: `All · 2026–Present · 2025–Present · 2023–2026 · 2020` (note: `2026–Present` matches **two** entries — ThePackLabs and AktivAsia — selecting it scrolls to/highlights both)
- Selecting a tab: smooth-scrolls the Full Timeline list to the first matching entry, and applies a highlight treatment (e.g. `border-color`/elevated `paper-card` state) to all matching rows; non-matching rows stay rendered, just visually de-emphasized (not hidden, not removed from the DOM).
- Keyboard: tabs are a row of focusable buttons (`role="tablist"`/`role="tab"` or plain buttons — implementation choice for forge-dev), arrow-key or tab-key navigable, with `aria-current="true"`/`aria-selected="true"` on the active one, matching `Navbar.jsx`'s existing `aria-current` convention (NFR-5).

### 4.4 States

| State | Description |
|---|---|
| **Default** | full page as §4.1. |
| **Loading** | route-transition skeleton: if `/experience` ships as a code-split chunk (an architecture decision, not mine to mandate — flagged in §8), the brief gap between click and paint shows a skeleton matching the page's shape — shimmer bars for eyebrow/heading, tab-strip, spotlight card, and 5 timeline rows. See HTML mock's "Loading" panel. If the route is not code-split, this state is effectively instant and this skeleton is unnecessary — forge-architect's call. |
| **Error** | (a) logo image failures on spotlight headers / timeline badges fall back to monogram, same mechanism as the teaser (§3.3). (b) **Unmatched route (404):** BRD's FR-1 only defines `/` and `/experience`; it does not define catch-all/404 behavior. Not designed here — explicitly flagged in §8, not silently invented. |
| **Empty** | Not applicable to the timeline lists — see §4.3 (filters never remove rows, so zero-results is unreachable). Not applicable to the spotlights or Education either — all content is static and fixed in `content.js`. |
| **Mobile** | see §4.2 — horizontal-scroll tabs, 2-col stat tiles, stacked Other Hustle spotlights, stacked timeline badges, stacked Education cards. |

### 4.5 FR coverage (this screen)

FR-1, FR-2, FR-7, FR-8, FR-9, FR-10, FR-11, FR-12, FR-13, FR-14, FR-15, FR-16, FR-17.

---

## 5. Content Specification (draft, for `content.js`)

Illustrative shape only — forge-architect owns the final data model; this is here so the copy above has a documented home and nothing is left ambiguous about *where* each string lives (NFR-6: zero hardcoded strings in JSX).

```
content.careerTimeline = {
  sectionLabel: 'Career Timeline',
  heading: 'A decade of shipping, not just a resume line.',
  entries: [ /* 7 curated cards — logo/initial/color/title/company/dates */ ],
  cta: { label: 'See the Full Career Story →', href: '/experience' },
}

content.experience = {
  eyebrow: 'Career Journey',
  heading: 'Ten years, two tracks, one build philosophy.',
  tracks: {
    corporate: {
      label: 'Corporate Career',
      entries: [ /* 5 rows, §4 verbatim title/company/dates + 1-line summary */ ],
      spotlight: [ /* AXA — heading, paragraph, 4 stat tiles, bullets[] */ ],
    },
    otherHustle: {
      label: 'Other Hustle',
      entries: [ /* 5 rows, §4 verbatim */ ],
      spotlight: [ /* ThePackLabs, AktivAsia — same shape ×2 */ ],
    },
  },
  education: [ /* DLSU, PCIC — school, dates, detail */ ],
}
```

All AXA stat-tile values are §8 resolution #1's pre-approved numbers, verbatim. ThePackLabs/AktivAsia stat-tile values and all three spotlights' descriptive paragraphs are my own condensation of BRD §4/§8.6 facts into tile-sized and paragraph-sized copy — real facts, no invented numbers or claims, but not previously reviewed word-for-word by Gino the way AXA's four figures were. Flagged in §8 for a quick confirm pass before this ships, same review AXA's numbers already got.

---

## 6. Chart / Visualization Rationale

No bar, line, pie, or other chart component is used anywhere in this feature. Two deliberate choices:

1. **Stat tiles, not a chart, for the spotlight numbers.** All seven numbers across the three spotlights (AXA's 4 + the derived ones for ThePackLabs/AktivAsia) are discrete, order-of-magnitude achievement figures ("30+", "$2M", "10+ Yrs", "4 SE-Asia Countries", "1-Hr Refresh Cycle"), not a continuous or comparative dataset. A chart would imply a precision and a comparison ("how does this number relate to that one") that doesn't exist here and that the "under-30-seconds" recruiter JTBD doesn't need — a glanceable 4-tile grid is faster to parse than any chart type would be for 4 unrelated facts.
2. **The vertical timeline list itself is the visualization.** Chronological, discrete career events are exactly what a connected vertical list (date badge + rail) is for — it's the reference site's own pattern and it maps directly onto FR-11's spec. No secondary chart (e.g. a duration/Gantt-style bar per role) was considered necessary or requested by any FR; adding one would be scope creep beyond FR-11's literal "date badge, heading, one-line summary" spec.

---

## 7. FR Coverage Table

| FR | Requirement (short) | Screen / Element | Notes |
|---|---|---|---|
| FR-1 | `/experience` route | App-level router config (not a visual screen) | react-router-dom, new dependency |
| FR-2 | Persistent, route-aware navbar | `Navbar.jsx` (existing, modified) — both screens' chrome | §2.2 |
| FR-3 | Teaser replaces Brands Served in place | Screen 1 — `#career-timeline` | §3 |
| FR-4 | Condensed teaser content | Screen 1 — 7-card grid, no tabs/spotlight/timeline | §3.1 |
| FR-5 | CTA to `/experience` | Screen 1 — CTA button | §3.1 |
| FR-6 | Updated heading/eyebrow copy | Screen 1 — eyebrow + h2 | §3.1 |
| FR-7 | Page header | Screen 2 — eyebrow + h1 | §4.1 |
| FR-8 | Two labeled, stacked tracks | Screen 2 — Corporate Career h2, Other Hustle h2 | §4.1 |
| FR-9 | Independent year-filter per track | Screen 2 — `YearFilterTabs` ×2 instances | §4.3 |
| FR-10 | Spotlighted block(s) per track | Screen 2 — `SpotlightBlock` ×3 (AXA, ThePackLabs, AktivAsia) | §4.1, §8 resolution #2 |
| FR-11 | Full Timeline list per track | Screen 2 — `TimelineList`/`TimelineEntry` ×2 (5 + 5 rows) | §4.1, §4.3 |
| FR-12 | Education rendered | Screen 2 — standalone Education section | §4.1, §8 resolution #3 |
| FR-13 | Corporate data fidelity, incl. 2 distinct Balud rows | Screen 2 — Corporate `TimelineList` data binding | §4.1 |
| FR-14 | Other Hustle data fidelity | Screen 2 — Other Hustle `TimelineList` data binding | §4.1 |
| FR-15 | Authoritative data overrides résumé everywhere | Both screens — all title/company/date strings | §5 |
| FR-16 | Cosme De Net placeholder, same treatment as siblings | Screen 2 — Cosme De Net `TimelineEntry` | §4.1, no tags row rendered — see §8 |
| FR-17 | Reuse logos, monogram fallback | Both screens — `LogoOrMonogram` (new shared component, extracted from `BrandsServed.jsx`'s inline pattern) | §9 |
| FR-18 | Delete `BrandsServed.jsx`/`content.brandsServed` | N/A — deletion, not a screen | Confirmed safe; nothing else imports either |
| FR-19 | Repoint all `#brands-served` references | 3 existing components, modified: `About.jsx` CTA, `Footer.jsx` nav link, `TechStack.jsx` `ScrollCue` | §2.3 |
| FR-20 | `TrustedBy.jsx` untouched | N/A — confirmation only, no screen | Not touched by this wireframe or any file listed in §10 |

All 20 FRs map to a concrete screen/element. **None flagged as unmappable** — the only gaps are interpretive choices (§8), not missing coverage.

---

## 8. Flags for forge-architect / forge-dev (surfaced, not forced)

1. **§8 resolution #1 references "#3 below" for Other Hustle stat tiles, but item #3 in the BRD is Education placement, not stat tiles.** This looks like a drafting cross-reference error in the BRD (probably meant to point at item #2, which establishes *that* Other Hustle gets 2 spotlights, but that item still doesn't specify the 4 stat-tile values themselves). Net effect: unlike AXA's 4 numbers, ThePackLabs' and AktivAsia's stat-tile values were never explicitly pre-approved. I derived defensible tile values directly from §4's verbatim source facts (§5 above) rather than inventing new claims or leaving the tiles blank — but recommend a quick Gino confirm pass on those 8 values before build, mirroring the review AXA's numbers already had.
2. **Unmatched-route (404) handling is undefined.** FR-1 only specifies `/` and `/experience`; nothing in the BRD covers what renders at an unknown path once `react-router-dom` is introduced (previously, with no router, this wasn't a question). Not designed here — deliberately not invented — flagged so forge-architect makes an explicit call (redirect to `/`, dedicated 404, etc.) rather than it falling out by accident.
3. **Year-filter tab interaction is resolved as scroll+highlight, not remove/hide** (§4.3) — this was necessary to keep FR-11's "exactly 5 entries" acceptance criterion true regardless of filter state. If forge-dev's read of FR-9 differs, confirm before building a hide/filter behavior that would contradict FR-11.
4. **Cosme De Net's available tag data (VBA Automation, VBS, BAT Files, Excel, Data Analysis) is not surfaced as a visible tags row** in the Full Timeline entry — deliberately, to keep FR-16's "cannot be visually distinguished as less finished" criterion trivially true (no sibling row has a tags row either, so nothing to omit-and-notice). The facts exist in `content.js` if a future iteration wants to add tag chips uniformly across all 10 entries — out of scope now, not proposed as a build item.
5. **Mobile nav-link visibility gap is pre-existing** (§2.2) — not a regression from this feature, not fixed by it, flagged only so it isn't misattributed later.
6. **Route code-splitting for `/experience`** (whether it ships as a separate lazy-loaded chunk, relevant to the "Loading" state design in §4.4 and to NFR-3's JS budget) is a stack decision left to forge-architect, not decided here.

---

## 9. Component Inventory (structural, for forge-architect)

New components implied by this wireframe (naming is a suggestion, not a mandate):

- `CareerTimelineTeaser` — homepage section, replaces `BrandsServed`
- `TeaserCard` — logo-or-monogram + title + company + date range
- `ExperiencePage` — route component, mounts at `/experience`
- `ExperienceHeader` — eyebrow + h1 (FR-7)
- `CareerTrack` — reusable wrapper (heading + `YearFilterTabs` + 1..N `SpotlightBlock` + `TimelineList`); used twice — Corporate passes 1 spotlight, Other Hustle passes 2
- `YearFilterTabs` — tab derivation logic per §4.3
- `SpotlightBlock` — heading, paragraph, 4× `StatTile`, bulleted contributions
- `StatTile`
- `TimelineList` / `TimelineEntry` — date badge, role+company, one-line summary, connecting rail
- `EducationSection` / `EducationCard`
- `LogoOrMonogram` — **extract from `BrandsServed.jsx`'s existing inline JSX before deleting it** (FR-18). It's reused in 3 new places (`TeaserCard`, `SpotlightBlock` header, `TimelineEntry` badge) — worth pulling into its own small component rather than copy-pasted 3×, per the project's own DRY convention (NFR-6 spirit, extended to markup not just copy).

---

*Definition of done for this document: every FR mapped to a screen/element (§7), hero flow walkable end-to-end (§1), both screens have ASCII (§3.1–3.2, §4.1–4.2) + HTML mockup + explicit empty/error/loading/mobile states (§3.3, §4.4), chart choice justified (§6), strictly grayscale in both the ASCII and HTML artifacts, gaps/interpretive calls flagged not forced (§8).*
