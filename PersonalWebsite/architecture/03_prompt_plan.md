# 03 Master Prompt Plan: Execution Handover

> **Target:** Execution AI (Claude Code / Antigravity)
> **Protocol:** B.L.A.S.T. + ADLC
> **Rule:** Each step MUST pass its verification before proceeding. No skipping.

---

## Step 1: Environment Bootstrap

| Field | Value |
|-------|-------|
| **Objective** | Initialize React/Vite/Tailwind project and configure the "Warm & Inviting" design system. |
| **Source of Truth** | `claude.md` → Schema Rules, `02_tech_design.md` → ADR-001, ADR-002, Color Palette |
| **Files Created** | `package.json`, `vite.config.js`, `tailwind.config.js`, `src/index.css`, `src/main.jsx`, `src/App.jsx`, `.gitignore`, `README.md` |

**Actions:**
1. Run `npx -y create-vite@latest ./ --template react` in project root.
2. Install Tailwind: `npm install -D tailwindcss @tailwindcss/vite`.
3. Install Framer Motion: `npm install framer-motion`.
4. Install Inter font: Add `<link>` to `index.html` or `npm install @fontsource/inter`.
5. Configure `tailwind.config.js` with custom colors from `02_tech_design.md` palette.
6. Set `index.css` base layer: `bg-[#FAF7F2]`, `font-family: 'Inter'`, `text-[#2D2D2D]`.

**Verification:**
```powershell
# 1. Dev server must start without errors
npm run dev
# 2. Confirm dependencies installed
npx -y jq -r ".dependencies | keys[]" package.json
# Expected: react, react-dom, framer-motion
# 3. Confirm Tailwind config has custom colors
Select-String -Path "tailwind.config.js" -Pattern "C1694F"
# Expected: match found
```

---

## Step 2: Content Data Layer

| Field | Value |
|-------|-------|
| **Objective** | Create the single source of truth for ALL page copy. Zero hardcoded strings in JSX. |
| **Source of Truth** | `claude.md` → Website Blueprint schema, `01_problem_brief.md` → Section specs |
| **Files Created** | `src/data/content.js` |

**Actions:**
1. Create `src/data/content.js` exporting a structured object matching the Layer 1 SOP schema from `02_tech_design.md`.
2. Populate with real copy (professional-quirky tone) based on `01_problem_brief.md`:
   - `profile`: Name, title, email, location.
   - `hero.headline`: "Architecting Solutions & Mastering the ADLC" (≤8 words).
   - `hero.subheadline`: Results-driven TPM bridging business requirements and technical execution.
   - `hero.cta`: "Connect with me".
   - `howItWorks`: 3 steps with titles + 2-line descriptions.
   - `features`: 4 cards with benefit-oriented copy (not feature lists).
   - `trustedBy`: 8 brand names array.
   - `bottomCta.headline`: "Ready to build something brilliantly efficient?"
   - `footer`: Navigation links, social URLs, copyright with current year.

**Verification:**
```powershell
# 1. File must exist
Test-Path "src/data/content.js"
# Expected: True
# 2. Must export all required keys
Select-String -Path "src/data/content.js" -Pattern "export"
# 3. CTA text must appear exactly once (DRY)
(Select-String -Path "src/data/content.js" -Pattern "Connect with me").Count
# Expected: 1
# 4. All 8 brands must be present
Select-String -Path "src/data/content.js" -Pattern "AXA Philippines|Globe Group|Johnson"
# Expected: 3+ matches
```

---

## Step 3: Component Scaffolding & Layout

| Field | Value |
|-------|-------|
| **Objective** | Build all 8 components with correct structure, props wiring, and responsive layout. No animations yet. |
| **Source of Truth** | `02_tech_design.md` → Layer 3 Component Table |
| **Files Created** | `src/components/Navbar.jsx`, `Hero.jsx`, `HowItWorks.jsx`, `Features.jsx`, `TrustedBy.jsx`, `CTASection.jsx`, `Footer.jsx` |

**Actions:**
1. Create `src/components/` directory.
2. Build each component importing its data from `content.js`.
3. Wire all components into `App.jsx` in the correct section order (per Layer 2 flow).
4. Apply Tailwind classes for:
   - Responsive grid: `grid-cols-1 md:grid-cols-2` on Features.
   - Sticky navbar: `sticky top-0 backdrop-blur`.
   - Section spacing: `py-16 md:py-24`.
   - Rounded elements: `rounded-2xl` on cards, `rounded-full` on buttons.
5. Place the hero illustration image in `src/assets/` and reference in `Hero.jsx`.
6. Each section must have an `id` attribute for anchor navigation.

**Verification:**
```powershell
# 1. All component files must exist
$components = @("Navbar","Hero","HowItWorks","Features","TrustedBy","CTASection","Footer")
$components | ForEach-Object { Test-Path "src/components/$_.jsx" }
# Expected: all True
# 2. No hardcoded strings in components (all imported from content.js)
Select-String -Path "src/components/*.jsx" -Pattern "import.*content" | Measure-Object
# Expected: Count >= 7
# 3. App.jsx must import all components
(Select-String -Path "src/App.jsx" -Pattern "import").Count
# Expected: >= 7
# 4. Dev server renders without errors
npm run dev
```

---

## Step 4: Animations & Interactions

| Field | Value |
|-------|-------|
| **Objective** | Add scroll-triggered fade-ins, hover effects, and smooth transitions. |
| **Source of Truth** | `claude.md` → Interactions rule, `02_tech_design.md` → ADR-003 |
| **Files Modified** | All `src/components/*.jsx` |

**Actions:**
1. Import `motion` from `framer-motion` in each section component.
2. Wrap section content in `<motion.div>` with `whileInView` for fade-in:
   ```jsx
   initial={{ opacity: 0, y: 30 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.6 }}
   viewport={{ once: true }}
   ```
3. Add `whileHover={{ scale: 1.03 }}` on Feature cards and CTA buttons.
4. Add `transition={{ type: "spring", stiffness: 300 }}` for hover bounce.
5. Navbar: Add scroll-aware shadow via `useEffect` + `window.scrollY`.

**Verification:**
```powershell
# 1. Framer Motion imported in components
Select-String -Path "src/components/*.jsx" -Pattern "framer-motion" | Measure-Object
# Expected: Count >= 5
# 2. whileInView used for scroll animations
Select-String -Path "src/components/*.jsx" -Pattern "whileInView" | Measure-Object
# Expected: Count >= 4
# 3. Build must succeed (no import errors)
npm run build
# Expected: exit code 0
```

---

## Step 5: Responsive Polish & Production Build

| Field | Value |
|-------|-------|
| **Objective** | Final responsive QA, image optimization, meta tags, and production build. |
| **Source of Truth** | `02_tech_design.md` → Performance Budget |
| **Files Modified** | `index.html` (meta tags), `src/components/*.jsx` (responsive fixes) |

**Actions:**
1. Add SEO meta tags to `index.html`:
   - `<title>Gideon Noel S. Valera | Technical Project Manager & ADLC Architect</title>`
   - `<meta name="description" content="...">`
   - Open Graph tags.
2. Convert hero illustration to WebP format, add `loading="lazy"` to below-fold images.
3. Test at 375px (mobile), 768px (tablet), 1440px (desktop).
4. Verify CTA button appears in both Hero and Bottom CTA sections.
5. Run production build.

**Verification:**
```powershell
# 1. Production build succeeds
npm run build
# Expected: exit code 0, output in dist/
# 2. dist/ folder exists and contains index.html
Test-Path "dist/index.html"
# Expected: True
# 3. Bundle size check (gzipped JS < 120kb)
(Get-ChildItem "dist/assets/*.js" | Measure-Object -Property Length -Sum).Sum / 1KB
# Expected: < 300 (uncompressed; gzipped will be < 120)
# 4. Meta title present
Select-String -Path "dist/index.html" -Pattern "Gideon Noel"
# Expected: match found
# 5. CTA text appears exactly twice in built output (Hero + Bottom)
(Select-String -Path "dist/assets/*.js" -Pattern "Connect with me").Count
# Expected: >= 1 (bundled, may be deduplicated)
```

---

## Execution Rules for the AI

1. **STOP on red.** If any verification fails, fix it before proceeding.
2. **No lorem ipsum.** Every string must be real, professional-quirky copy.
3. **No forks.** Every decision has been made in the ADRs. Follow them.
4. **DRY or die.** If you write the same string twice, extract it to `content.js`.
5. **Mobile-first.** Write `sm:` and `md:` breakpoints, not the other way around.
