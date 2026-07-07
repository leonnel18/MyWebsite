# 📜 Claude's Constitution (claude.md)

## JTBD (Job to be Done)
Build a premium, high-converting personal portfolio website for Gideon Noel S. Valera that demonstrates expertise in Technical Project Management, API Architecture, and the AI Development Life Cycle (ADLC).

## Schema Rules

### Input Schema: Website Blueprint
```json
{
  "profile": {
    "name": "Gideon Noel S. Valera",
    "title": "Technical Project Manager",
    "specialization": "ADLC, API Architecture, System Design",
    "location": "Caloocan City, Metro Manila",
    "email": "gideon.valera@gmail.com"
  },
  "sections": [
    {
      "id": "hero",
      "headline": "Architecting Solutions & Mastering the ADLC",
      "subheadline": "Results-driven Technical Project Manager bridging complex business requirements and technical execution.",
      "cta": "Connect with me",
      "image": "src/assets/hero-illustration.webp"
    },
    {
      "id": "how-it-works",
      "steps": [
        { "step": 1, "title": "Strategy & Scoping",  "desc": "Digital roadmap scoping and stakeholder management." },
        { "step": 2, "title": "Scripts & Architecture", "desc": "RESTful API integrations, JSON/XML payloads, and VBA automation." },
        { "step": 3, "title": "ADLC & Deployment",   "desc": "AI-driven build, test, and zero-touch deployment." }
      ]
    },
    {
      "id": "features",
      "cards": [
        { "title": "eCommerce Ecosystems", "desc": "Magento, Drupal, WordPress system design." },
        { "title": "Full-Stack Data Flow", "desc": "Optimized data retrieval and endpoint architecture." },
        { "title": "Custom Scripts & ADLC", "desc": "Efficiency and scalable architecture through AI automation." },
        { "title": "TPM & Consultancy",   "desc": "Technology Project Management, BA, and strategic consulting." }
      ]
    },
    {
      "id": "trusted-by",
      "brands": ["AXA Philippines", "Globe Group", "Cosme de net", "AktivAsia", "LeoPC", "Cup n' Grind", "The Pack Labs", "Johnson & Johnson"]
    },
    {
      "id": "bottom-cta",
      "headline": "Ready to build something brilliantly efficient?",
      "cta": "Connect with me"
    },
    {
      "id": "footer",
      "contact": { "email": "gideon.valera@gmail.com", "location": "Caloocan City, Metro Manila" },
      "copyright": "© 2026 Gideon Noel S. Valera. All rights reserved."
    }
  ]
}
```

### Output Schema: Build Artifact
```json
{
  "output": "dist/",
  "files": ["index.html", "assets/*.js", "assets/*.css"],
  "deployment": "Static CDN (Vercel/Netlify/Cloudflare Pages)",
  "bundle_budget_gzip": { "js": "< 120kb", "css": "< 15kb" }
}
```

## Rules to Follow
1. **B.L.A.S.T. Protocol:** Blueprint → Link → Architect → Scaffold → Test.
2. **DRY:** All copy lives in `src/data/content.js`. Zero hardcoded strings in JSX.
3. **Mobile-First:** Write base styles for mobile, add `sm:` / `md:` / `lg:` breakpoints up.
4. **No Forks:** All tech decisions are finalized in `02_tech_design.md` ADRs. Follow them.
5. **Deterministic Verification:** Every step has a terminal command that proves it works.
6. **Visual Identity:** Warm/Inviting — cream `#FAF7F2`, terracotta `#C1694F`, sage `#7B9E87`.
7. **Copywriting:** Professional-quirky tone. No lorem ipsum. No generic tech-bro language.
8. **Interactions:** Framer Motion `whileInView` for scroll fade-ins, `whileHover` for cards/buttons.
9. **Performance:** Lighthouse ≥ 95, LCP < 2.5s, CLS < 0.1.
