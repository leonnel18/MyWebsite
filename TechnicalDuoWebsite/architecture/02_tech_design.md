# Architecture Decision Records (ADR): 02 Tech Design

## RED TEAM AUDIT FINDINGS

- **Critique:** The initial draft proposed a standard Next.js App Router deployment without explicitly constraining runtime execution. This introduces risk of server-side compute overhead, potentially violating sub-100ms global latency targets and the strict $0.0001/transaction FinOps constraint.
- **Negative Constraint Applied:** NO HYBRID OR SSR INFRASTRUCTURE. We pick one optimal path: 100% Static Site Generation (SSG).

## Optimized Architecture

1.  **Hosting & Network Edge (ZTA & Latency):** 
    - Cloudflare Pages configured for strict Static HTML/CSS/JS hosting. 
    - Sub-100ms TTFB guaranteed via Cloudflare global edge CDN caching.
    - Zero Trust Architecture (ZTA) Principle applied: All assets are statically generated at build time. No database connections exist from the runtime edge, eliminating attack vectors on backend data.
2.  **Core Framework (FinOps Optimized):** 
    - Next.js 14+ (App Router), strictly configured in `next.config.ts` with `output: 'export'`.
    - React Server Components used *only* for deterministic build-time compilation.
3.  **Data Source (Source of Truth):** 
    - Strict local JSON schema hydration (`content.json`).
4.  **Styling & Interactivity:** 
    - Tailwind CSS (Zero runtime overhead).
    - Framer Motion (Optimized utilizing hardware-accelerated transforms for the "techy" pipeline drawing).
