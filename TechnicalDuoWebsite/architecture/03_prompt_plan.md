# Execution Master Handover: Phase 4 Build

This document contains atomic, deterministic instructions for the Execution AI (Engine). Follow sequentially.

## Step 1: Framework Stabilization & Strict SSG
- **Action:** Initialize Next.js, configure `next.config.ts` for strict SSG export (`output: 'export'`), disable image optimization API (since we are on Cloudflare Pages static export), and setup Tailwind/Framer.
- **Tool Script:** Create and run `/tools/01_init_framework.js` or bash equivalent.
- **Schema Dependency:** N/A
- **Verification Command:** `npm run build && Get-Item -Path "out"` (Ensures static export completes successfully).

## Step 2: Data Hydration Layer
- **Action:** Create `src/data/content.json` matching the defined JSON Data Schema exactly. Create a strongly-typed TypeScript interface for it.
- **Tool Script:** Create and run `/tools/02_hydrate_data.js` to stamp out the data files.
- **Schema Dependency:** `claude.md` -> `JSON Data Schema`
- **Verification Command:** `node -e "const data = require('./src/data/content.json'); if(!data.content.hero.title) throw new Error('Schema mismatch'); console.log('Data Validation Passed');"`

## Step 3: Core UI Routing & Hero Setup
- **Action:** Build the global layout, sticky `Navbar`, and interactive `Hero` component. Implement Framer Motion `pathLength` drawing for the Hero SVG elements.
- **Tool Script:** Create and run `/tools/03_build_hero.js`
- **Schema Dependency:** `claude.md` -> `content.hero`
- **Verification Command:** `npm run lint`

## Step 4: Capabilities & Animated Pipeline
- **Action:** Scaffold the `Capabilities` matrix components and the progressive `PipelineStepper`. Ensure the step progression supports smooth scroll-triggered drawing.
- **Tool Script:** Create and run `/tools/04_build_pipeline.js`
- **Schema Dependency:** `claude.md` -> `content.capabilities`, `content.pipeline`
- **Verification Command:** `npm run lint`

## Step 5: Social Proof, Tech Stack & Footer
- **Action:** Implement the "Where we've worked" logo cloud, the `TechStack` grid, and the conversion CTA Footer.
- **Tool Script:** Create and run `/tools/05_build_footer.js`
- **Schema Dependency:** `claude.md` -> Future extensions (Tools schema)
- **Verification Command:** `npm run lint`
