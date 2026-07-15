# 04 Business Requirements: `/experience` Page + Homepage "Career Timeline" Section

> **Author:** Business Analyst (BA)
> **Date:** 2026-07-14
> **Status:** Ready for design/build handoff
> **Scope type:** Feature addition to an existing, already-branded single-page site (Gideon "Gino" Valera's portfolio). Not a from-scratch product — this document is deliberately scoped tight.
> **Ships as:** One build, no phasing.

---

## 1. Context

The homepage currently has a "Trusted By" style section (`id="brands-served"`, component `BrandsServed.jsx`, data `content.brandsServed`) that renders Gino's past employers as a flat logo grid with no dates, titles, or narrative — it answers "who has he worked with" but not "what has his career actually looked like." This BRD covers replacing that section with a condensed "Career Timeline" teaser, and building out the full story behind it on a new dedicated route, `/experience`.

**Structural reference (pattern only, not content):** `jerrison-portfolio.vercel.app/experience`, already scouted by Gino/DARKLING. Its interaction pattern — persistent navbar, page header with eyebrow, horizontal year-range filter tabs, a spotlighted "current role" block (stat tiles + bulleted contributions), and a connected vertical "Full Timeline" list — is the structural target. None of that site's actual copy, numbers, or claims are to be used; only the layout/interaction shape.

**Comparable pattern basis:** the "resume-as-webpage" combination of a spotlighted current role + chronological timeline + year filtering is a common convention in engineering/PM portfolio sites and tools like read.cv — it's a reasonable, low-risk pattern to build against. No further comparable-product research was performed for this BRD since the structural reference and all key product decisions were already resolved with Gino before this document was requested (see §2).

---

## 2. Resolved Decisions (settled — do not re-litigate downstream)

1. **Routing:** `/experience` is a real route via `react-router-dom` (not an in-page anchor/toggle). `react-router-dom` is **not currently a dependency** of this project (confirmed via `package.json`) — adding it is in scope for whoever builds FR-1.
2. **Track structure:** One `/experience` page holds two labeled tracks — **"Corporate Career"** and **"Other Hustle"** — each independently implementing the reference site's timeline pattern (own filter, own spotlight, own full-timeline list), stacked on the same page.
3. **Homepage teaser is condensed**, not the two-track layout: logos/titles/dates for the most notable/recent roles only, ending in a CTA to `/experience`.
4. **Design tokens:** `src/index.css` (`:root` + `.dark` custom properties, e.g. `--color-primary`, `--color-ink`, `--color-bg-alt`) is the current source of truth for the visual system. Where `brand_guidelines.md` disagrees (it still documents an older cream/terracotta/sage v1 palette with hardcoded hex like `#FAF7F2`/`#C1694F`), `index.css` wins — `brand_guidelines.md` predates the current palette and has not been kept in sync. New components must consume `var(--color-*)` tokens, matching the pattern already used in `Navbar.jsx`, `About.jsx`, and `TechStack.jsx`, not the hardcoded hex still present in the older `TrustedBy.jsx`/`BrandsServed.jsx`.
5. **`BrandsServed.jsx` and `content.brandsServed` are fully superseded and safe to delete.** Nothing else imports either. See FR-18/FR-19 for what has to be cleaned up alongside the deletion (there are live references to `#brands-served` in three other places — see §7).
6. **`src/components/TrustedBy.jsx`** (and its `content.trustedBy` data) is a separate, already-unused component. Leave it alone — explicitly out of scope for this work (FR-20).

---

## 3. Personas / Job to Be Done

This is a single-owner portfolio site; the "persona" work here is about the *site visitor*, not Gino.

- **Recruiter / hiring manager screening a candidate.** JTBD: "In under 30 seconds, confirm this person has relevant, credible, recent experience — without digging through a PDF." The homepage teaser serves this: a glance at logos + dates + a CTA, not a full read.
- **Prospective client or collaborator vetting for a specific engagement.** JTBD: "Show me the depth and range — not just where he's worked, but what he actually did, and whether his 'side' work (Other Hustle) is credible or just filler." The `/experience` page's spotlighted current-role blocks and full timelines serve this.

Both personas fail if the page reads as a static resume dump (wall of text) or as under-construction/incomplete (raises credibility doubt) — which is why FR-16's placeholder-copy handling matters: an admittedly-thin entry must look structurally finished, not broken.

---

## 4. Authoritative Career Data (verbatim — overrides résumé PDFs on every conflict)

Do not "correct" this back to résumé wording. Do not invent bullets, numbers, or claims beyond what is stated here — forge-ux/forge-dev flesh out *prose* from these *facts*, they do not add new facts.

### Corporate Career (reverse-chronological)

| Dates | Title | Company | Logo file (`public/logos/`) |
|---|---|---|---|
| 2023–Present | Technology Enablement Senior Manager | AXA Philippines | `axa.png` |
| 2022–2023 | API Technical Designer | Globe Group Inc. (under Yondu) | `globe.png` |
| 2020–2022 | Senior Product Owner | Balud Digital Solutions Corporation | none — monogram "BDS" |
| 2018–2020 | Frontend & Data Developer | Balud Digital Solutions Corporation | none — monogram "BDS" (internal promotion, same company as the row above) |
| 2017 | Demand Planner Intern (VBA Automation) | Johnson & Johnson Pte. Ltd. | `jnj.png` |

### Education

| Dates | School | Detail |
|---|---|---|
| 2014–2018 | De La Salle University – Manila | BS Industrial Management Engineering, Minor in IT |
| 2010–2014 | Philippine Central Islands College | Valedictorian, PCIC Star Scholar, Best in Math/Science/English/Filipino |

### Other Hustle (reverse-chronological)

| Dates | Title | Company | Logo | Source material for copy |
|---|---|---|---|---|
| 2026–Present | API Integrator Manager | ThePackLabs | none — monogram "TPL", color `#3D3D3D` | Automated Zoey→BigQuery→Looker Studio ETL pipeline (Python), OAuth2 auth, BQ schema/views, Cloud Run deploys, sanity-check monitoring, 1-hr refresh cycle. (Full detail: `C:\Users\Friday\Desktop\Projects\80 ThePackLabs\claude.md`.) |
| 2026–Present | Digital Projects Manager | AktivAsia Ltd. | `aktivasia.jpg` | Regional climate/social-movement NGO across 4 SE-Asia countries. Leads Zoho CRM migration/admin, refines forms/workflows/dashboards, trains a remote multicultural team on data adoption, owns Google Workspace/Slack admin + onboarding/offboarding, drafts helpdesk policy, owns impact-data reporting pipeline. |
| 2025–Present | Business Owner | Cup N' Grind | `cup-n-grind.jpg` | Local coffee shop in San Jose, Occidental Mindoro; innovative/experimental flavors; builds youth community around environmental sustainability. |
| 2023–2026 | Inventory Control Analyst | Cosme De Net | `cosme-de-net.jpg` | **Explicit placeholder copy** — Gino will supply more detail later. Japan/Hong Kong cosmetics distributor, 30,000+ SKUs. Tag with VBA Automation, VBS, BAT Files, Excel, Data Analysis. |
| 2020 | Website Developer | Leo PC | `leopc.jpg` | Built the website for Leo PC, a local computer shop in San Jose, Occidental Mindoro. |

**Asset note:** every logo file referenced above already exists in `public/logos/` (`axa.png`, `globe.png`, `jnj.png`, `aktivasia.jpg`, `cup-n-grind.jpg`, `cosme-de-net.jpg`, `leopc.jpg` — confirmed present). No new logo assets need to be sourced. Both Balud Digital Solutions rows and ThePackLabs use a monogram fallback, same visual pattern `BrandsServed.jsx` already implements (colored square + initials) — the "TPL" / `#3D3D3D` monogram spec already exists verbatim in the (soon-to-be-deleted) `content.brandsServed` block and can be carried forward.

---

## 5. Functional Requirements

### A. Routing & Global Navigation

**FR-1 — `/experience` route** · *P0*
A dedicated route at `/experience` renders the Experience page using `react-router-dom`.
*Acceptance:* navigating to `/experience` (via in-app link or direct URL/deep-link/refresh) renders the Experience page; navigating away and back to `/` renders the homepage unchanged.

**FR-2 — Persistent, route-aware navbar** · *P0*
The navbar remains visible and functional on both `/` and `/experience`. Its existing anchor links (About, How It Works, Services, Tech Stack) route back to the homepage's matching section when clicked from `/experience` (e.g. resolve to `/#about`), rather than breaking or doing nothing. A new "Experience" nav item is added, linking to `/experience`, and reflects an active/current state (consistent with the navbar's existing `aria-current="page"` pattern) only while the user is on that route.
*Acceptance:* from `/experience`, clicking "About" lands on `/` scrolled to the About section; the "Experience" nav item shows active state on `/experience` and inactive state everywhere else.

### B. Homepage "Career Timeline" Teaser

**FR-3 — Section replaces Brands Served in place** · *P0*
A new homepage section (`id="career-timeline"` or equivalent) occupies `BrandsServed`'s current position in the section order (between Tech Stack and the bottom CTA in `App.jsx`).
*Acceptance:* `App.jsx` no longer imports/renders `BrandsServed`; the new section renders in the same slot.

**FR-4 — Condensed, curated content (not the full two-track layout)** · *P0*
The teaser shows a curated subset of roles — logo-or-monogram, title, company, date range — not all 10 corporate + other-hustle entries, and not the two-track filter/spotlight/timeline structure that lives on `/experience`.
*Acceptance:* the section renders fewer entries than the full 10-role dataset; it contains no year-filter tabs, no spotlight block, and no "Full Timeline" list (those are `/experience`-only per FR-9/10/11). Exact curated entry list is defined in **Open Question 5**.

**FR-5 — CTA to `/experience`** · *P0*
The teaser ends in a call-to-action that routes to `/experience`.
*Acceptance:* a visible, clickable CTA element is present at the end of the section and navigates to `/experience`; it follows the site's existing CTA visual convention (rounded-full, `var(--color-primary)`, hover state) rather than introducing a new button style.

**FR-6 — Updated heading/eyebrow copy** · *P1*
The section's heading/eyebrow no longer reads "Organizations I've worked with" / "Brands Served" — it communicates a career/timeline framing consistent with the section's new purpose.
*Acceptance:* neither string appears in the rendered section; copy follows the project's existing copywriting voice (no lorem ipsum, professional-quirky tone per `claude.md`).

### C. `/experience` Page Structure (applies to both tracks)

**FR-7 — Page header** · *P0*
The page renders one eyebrow string and one heading above both tracks (structurally equivalent to the reference's "Career Journey" eyebrow + "Experience" heading, with this site's own copy voice — not the reference site's literal wording).
*Acceptance:* exactly one eyebrow element and one top-level heading render above the first track.

**FR-8 — Two clearly labeled, stacked tracks** · *P0*
The page presents "Corporate Career" and "Other Hustle" as two distinct, clearly labeled sections stacked vertically, each with its own heading.
*Acceptance:* both track labels render as visible headings; a user can identify which track any given entry belongs to without relying on color alone (i.e. via heading/section grouping, not just a color cue).

**FR-9 — Independent year-range filter per track** · *P0*
Each track has its own horizontal year-range filter control (tabs), which filters/scrolls to matching entries within that track only.
*Acceptance:* selecting a filter tab in Corporate Career does not change Other Hustle's filter state or vice versa; each track's filter options are derived from that track's own date ranges (not a shared/global list).

**FR-10 — Spotlighted current-role block per track** · *P0*
Each track has one spotlighted block for its current/most-recent role, containing: a role+company heading, a descriptive paragraph, a row of 4 numeric stat tiles, and a "Key Contributions" bullet list (bullets prefixed "▸", matching the reference's convention).
*Acceptance:* each track's spotlight renders all four sub-elements; paragraph and bullets are non-empty and traceable to source data (§4) or Gino-supplied follow-up content (see Open Questions 1, 2, 6) — never invented. Which Other Hustle role is spotlighted is resolved via Open Question 2.

**FR-11 — Full Timeline vertical list per track** · *P0*
Below each track's spotlight, a "Full Timeline" vertical list renders one entry per row of that track's authoritative data (§4), each with a date badge, role+company as a secondary heading, and a one-line summary, connected by a vertical line — matching the reference's list pattern.
*Acceptance:* Corporate Career's Full Timeline shows exactly 5 entries; Other Hustle's shows exactly 5 entries; entry order is reverse-chronological per §4; selecting a year-filter tab (FR-9) scrolls to/highlights the matching entry.

**FR-12 — Education is rendered on the page** · *P1*
Both Education rows (§4) are rendered somewhere on `/experience`. Exact placement (own section vs. folded into Corporate Career) is unresolved — see Open Question 3.
*Acceptance:* both Education rows' school, dates, and detail text render on `/experience`.

### D. Data Fidelity

**FR-13 — Corporate Career track matches the authoritative table exactly** · *P0*
The Corporate Career track contains exactly the 5 rows from §4's Corporate Career table, reverse-chronological, with the Balud Digital Solutions promotion (2018–2020 Frontend & Data Developer → 2020–2022 Senior Product Owner) rendered as **two distinct timeline entries** under the same company — not merged into one row.
*Acceptance:* 5 distinct Corporate Career entries render; the two BDS entries have different titles/date ranges and are visually distinguishable as sequential (not deduplicated).

**FR-14 — Other Hustle track matches the authoritative table exactly** · *P0*
The Other Hustle track contains exactly the 5 rows from §4's Other Hustle table, reverse-chronological.
*Acceptance:* 5 distinct Other Hustle entries render, matching §4 title/company/date text exactly.

**FR-15 — Authoritative data overrides résumé PDFs everywhere in this feature** · *P0*
Anywhere this feature (teaser + `/experience` page) displays title, company, or date text, it uses only the data given in §4 — never résumé-PDF wording, even where they conflict.
*Acceptance:* spot-check of all 10 corporate + other-hustle rows plus 2 education rows against §4 shows zero deviations in title/company/date text.

**FR-16 — Cosme De Net entry uses explicit placeholder copy, same structural treatment as siblings** · *P1*
The Cosme De Net entry's descriptive copy is built only from the facts given in §4 (Japan/Hong Kong cosmetics distributor, 30,000+ SKUs, VBA Automation/VBS/BAT Files/Excel/Data Analysis tags) — no invented bullets, metrics, or claims — and renders with the same component/visual treatment as every other timeline entry (no "TODO," "coming soon," or visibly incomplete styling).
*Acceptance:* Cosme De Net's rendered entry uses only the given facts; a user cannot visually distinguish it as "less finished" than any other Other Hustle entry.

### E. Assets

**FR-17 — Reuse existing logo assets; monogram fallback where none exist** · *P0*
The page/teaser reuse the logo files already present in `public/logos/` (`axa.png`, `globe.png`, `jnj.png`, `aktivasia.jpg`, `cup-n-grind.jpg`, `cosme-de-net.jpg`, `leopc.jpg`) for their respective entries, and render a monogram fallback (colored square + initials, matching `BrandsServed.jsx`'s existing pattern) for both Balud Digital Solutions rows ("BDS") and ThePackLabs ("TPL", `#3D3D3D`).
*Acceptance:* no new image assets are required to ship this feature; every entry in §4 renders either its listed logo file or the specified monogram.

### F. Cleanup / Migration

**FR-18 — Delete `BrandsServed.jsx` and `content.brandsServed`** · *P0*
`src/components/BrandsServed.jsx` and the `brandsServed` block in `src/data/content.js` are removed.
*Acceptance:* neither the file nor the data key exists post-implementation; `App.jsx` no longer imports `BrandsServed`.

**FR-19 — Repoint every live reference to the deleted section** · *P0*
All existing references to `#brands-served` / "Brands Served" are updated to point at the new Career Timeline section id or `/experience`, so nothing dead-links. Known reference points as of this BRD: `content.js` → `footer.navColumns` "Brands Served" link, `content.js` → `about.ctaPrimary.href`, and `TechStack.jsx`'s `ScrollCue` target.
*Acceptance:* a search for `brands-served` / `BrandsServed` across `src/` returns zero matches after implementation; each formerly-broken link now resolves to the new section or route.

**FR-20 — `TrustedBy.jsx` stays untouched, out of scope** · *P1*
`src/components/TrustedBy.jsx` and `content.trustedBy` are not modified, deleted, or wired into `App.jsx` as part of this work.
*Acceptance:* `git diff`/file comparison shows no changes to `TrustedBy.jsx` or the `trustedBy` data block.

---

## 6. Non-Functional Requirements

- **NFR-1 — Theme parity.** Both light (`:root`) and dark (`.dark`) themes, as defined in `src/index.css`, are fully supported on `/experience` and the homepage teaser. New components consume `var(--color-*)` tokens exclusively — no hardcoded hex — matching the pattern in `Navbar.jsx`/`About.jsx`/`TechStack.jsx`. Toggling theme produces no unstyled or mismatched elements in either mode.
- **NFR-2 — Mobile-first responsive.** Follows the project's existing mobile-first convention (base styles, then `sm:`/`md:`/`lg:`). Year-filter tabs remain usable at 375px width (wrap or horizontal-scroll, never overflow-clipped or unreachable); all interactive elements (filters, nav, CTAs) stay reachable and tappable at that width.
- **NFR-3 — Performance budget (reference only, do not reinvent).** This feature must stay within the project-wide budget already defined in `claude.md`: Lighthouse Performance ≥ 95, LCP < 2.5s, CLS < 0.1, total JS < 120kb gzip, total CSS < 15kb gzip. The `react-router-dom` addition and new route's components count toward this budget.
- **NFR-4 — Reduced motion.** New components respect the existing global mechanism (`MotionConfig reducedMotion="user"` in `main.jsx`) — no bespoke reduced-motion handling needed, just don't work around it.
- **NFR-5 — Accessibility.** Year-filter tabs and timeline entries are keyboard-navigable; the active filter tab and active nav item use `aria-current`, consistent with `Navbar.jsx`'s existing pattern.
- **NFR-6 — DRY content (project rule).** All new copy (track labels, filter labels, stat-tile labels, all 12 timeline/education entries' prose) lives in `src/data/content.js` — zero hardcoded strings in JSX, per `claude.md` rule 2.

---

## 7. MVP Boundary

This entire BRD ships as **one build** (no phasing). The line below is about what's explicitly *not* part of that build, to prevent scope creep once forge-ux/forge-dev start working.

**In scope (v1):**
- `/experience` route, both tracks (Corporate Career, Other Hustle) with filters, spotlights, and full timelines
- Homepage Career Timeline teaser, replacing Brands Served
- Education display somewhere on `/experience`
- Deletion of `BrandsServed.jsx`/`content.brandsServed` and cleanup of all references to it

**Explicitly deferred / out of scope — flag as scope creep if proposed mid-build:**
- No CMS or admin UI for editing career data — `content.js` remains hand-edited, same as today
- No per-role case-study/blog deep-dive pages (the reference site's "Dashboard"/"Projects" nav items are not being replicated here)
- No resume-PDF regeneration or sync from this new data — the existing static resume download (`about.ctaSecondary`) is untouched
- No i18n/multi-language support
- No new analytics/tracking instrumentation beyond whatever already exists project-wide
- No standalone "Skills" page (present in the reference site, not requested here)

---

## 8. Open Questions — RESOLVED (G1 cleared 2026-07-14)

All six blocking questions below are now settled. FR-10 and FR-4/FR-5 are unblocked; the acceptance criteria in §5 apply as written using these resolutions.

1. **Stat tiles content — RESOLVED.** AXA's 4 stat tiles reuse the numbers already approved on the homepage (`content.about.statementDetail`): **"30+ Platforms Deployed," "$2M Initiative Led," "10+ Years Experience," "2023–Present."** No new metrics needed for Corporate. (Superseded by #3 below for Other Hustle.)
2. **Which Other Hustle role is "current" — RESOLVED: both.** Corporate Career keeps one spotlight (AXA). Other Hustle gets **two** compact spotlight blocks — ThePackLabs (API Integrator Manager) and AktivAsia (Digital Projects Manager) — a deliberate, confirmed deviation from the reference site's one-spotlight-per-track pattern, since both roles are genuinely 2026–Present with substantive material. FR-10 is amended: Other Hustle renders 2 spotlight blocks, not 1.
3. **Education placement — RESOLVED: standalone section.** Education renders as its own labeled section below both tracks (Corporate Career, Other Hustle, then Education), not folded into Corporate Career — it isn't a job and merging it into the timeline would misrepresent it as one.
4. **Preloader/WispField on `/experience` — RESOLVED: consistent chrome.** `Preloader` and `WispField` stay mounted at the `App.jsx` root regardless of route (they already wrap everything, not per-section) — a direct `/experience` load gets the same boot/ambient chrome as `/`, for visual consistency. No route-conditional logic needed.
5. **Homepage teaser curation — RESOLVED: broader teaser.** The teaser shows **all 5 Corporate Career entries + the top 2 Other Hustle entries** (ThePackLabs, AktivAsia — the two current ones), condensed to logo/title/company/date-range cards only (no spotlight, no bullets — that's `/experience`-only per FR-4). This is wider than a minimal teaser but still structurally condensed vs. the full two-track page.
6. **"Key Contributions" bullet content — RESOLVED: sourced, not invented.** Real bullet-level material already exists and must be used instead of drafting from role titles alone:
   - **AXA spotlight:** draw directly from Gino's resume PDFs (already on file) — Digital Strategy & Roadmap Scoping, Customer Journey & System Consulting, Stakeholder & Vendor Management, Development Oversight, Feature Prioritization, Operational Reporting. These are his own resume bullets, not invented.
   - **ThePackLabs spotlight:** draw from `80 ThePackLabs\claude.md` — e.g. built/maintains the automated Zoey→BigQuery→Looker Studio ETL pipeline, OAuth2 auth layer, BigQuery schema/view design, Cloud Run deployment, multi-tier sanity-check monitoring (table dedup, view NULL-drift, job health) with automated alerting.
   - **AktivAsia spotlight:** draw from the AktivAsia Action Accountability Blueprint doc Gino supplied — leads Zoho CRM migration/configuration for a 4-country regional NGO, refines forms/workflows/reporting dashboards, develops training for a remote multicultural team, owns Google Workspace/Slack admin and onboarding/offboarding, drafts helpdesk policy.
   - No bullets are needed for non-spotlighted entries (Globe Group, Balud ×2, J&J, Cup N' Grind, Cosme De Net, Leo PC) — those only need the one-line Full Timeline summary already covered by FR-11's source data in §4.

---

*Definition of done for this document: personas stated, every FR has an ID/priority/acceptance criterion, relevant NFRs covered by reference to the existing project budget, MVP boundary explicit, authoritative data reproduced verbatim, resolved decisions separated from open questions, sources (reference site, ThePackLabs claude.md, existing codebase) cited. Self-contained — readable without the requesting conversation's context.*
