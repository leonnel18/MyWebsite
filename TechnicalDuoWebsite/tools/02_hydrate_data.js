/**
 * 02_hydrate_data.js
 * Phase 4 — Step 2: Data Hydration Layer
 * Writes src/data/content.json and src/types/content.ts deterministically.
 */

const fs   = require('fs');
const path = require('path');

const ROOT  = path.resolve(__dirname, '..');
const SRC   = path.join(ROOT, 'src');
const DATA  = path.join(SRC, 'data');
const TYPES = path.join(SRC, 'types');
const TMP   = path.join(ROOT, '.tmp');

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✔ wrote ${path.relative(ROOT, filePath)}`);
}

// ── content.json ──────────────────────────────────────────────────────────────
const content = {
  content: {
    hero: {
      title: "A TECHNICAL DUO FOR COMPLEX SYSTEMS",
      subtitle: "Blending deep technical expertise with strategic business insight. We architect, automate, and deliver end-to-end solutions at the intersection of code and commerce.",
      cta: "Let's Talk",
      cta_href: "mailto:gideon.valera@gmail.com"
    },
    capabilities: [
      {
        id: "ecomm",
        title: "eCommerce Ecosystems",
        desc: "End-to-end Magento, Drupal, and WordPress builds — from system architecture to checkout optimisation and third-party integrations.",
        icon: "store"
      },
      {
        id: "data",
        title: "Full-Stack Data Flow",
        desc: "Optimised RESTful API design, JSON/XML payload engineering, and data-retrieval pipelines that eliminate bottlenecks at every layer.",
        icon: "flow"
      },
      {
        id: "scripts",
        title: "Custom Scripts & ADLC",
        desc: "VBA automation, Python utilities, and AI-driven development life-cycle tooling that cuts delivery cycles and eliminates repetitive manual work.",
        icon: "code"
      },
      {
        id: "tpm",
        title: "TPM & Consultancy",
        desc: "Stakeholder management, digital roadmap scoping, and strategic technology consulting — bridging business requirements and technical execution.",
        icon: "strategy"
      }
    ],
    pipeline: [
      {
        step: "01",
        label: "Discovery & Strategy",
        desc: "Deep-dive stakeholder sessions to map requirements, constraints, and success metrics."
      },
      {
        step: "02",
        label: "Architecture Design",
        desc: "System design, API contracts, data models, and ADR documentation."
      },
      {
        step: "03",
        label: "Environment Setup",
        desc: "Infrastructure provisioning, CI/CD pipeline, and zero-touch deployment scaffolding."
      },
      {
        step: "04",
        label: "Core Build",
        desc: "Component-by-component development driven by deterministic scripts and atomic tasks."
      },
      {
        step: "05",
        label: "Integrations & Automation",
        desc: "API wiring, third-party service integrations, and ADLC automation scripts."
      },
      {
        step: "06",
        label: "QA & Performance Audit",
        desc: "Automated test suites, Lighthouse performance audits, and security hardening."
      },
      {
        step: "07",
        label: "Deployment & Handover",
        desc: "Zero-touch static deploy to Cloudflare Pages, documentation, and knowledge transfer."
      }
    ],
    trusted_by: [
      { id: "axa",     name: "AXA Philippines" },
      { id: "globe",   name: "Globe Group" },
      { id: "cosme",   name: "Cosme de net" },
      { id: "aktiv",   name: "AktivAsia" },
      { id: "leopc",   name: "LeoPC" },
      { id: "cupngrnd",name: "Cup n' Grind" },
      { id: "packlabs",name: "The Pack Labs" },
      { id: "jj",      name: "Johnson & Johnson" }
    ],
    tech_stack: [
      { category: "Frontend",    items: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"] },
      { category: "Backend",     items: ["Node.js", "Python", "PHP", "REST APIs", "JSON/XML"] },
      { category: "eCommerce",   items: ["Magento", "WooCommerce", "Drupal", "WordPress", "Shopify"] },
      { category: "Automation",  items: ["VBA", "Power Automate", "Python Scripts", "ADLC Pipelines"] },
      { category: "Cloud & DevOps", items: ["Cloudflare Pages", "Vercel", "GitHub Actions", "CI/CD"] },
      { category: "PM & Design", items: ["Jira", "Notion", "Figma", "Miro", "Confluence"] }
    ],
    footer: {
      cta_headline: "Ready to build something brilliantly efficient?",
      cta: "Let's Talk",
      cta_href: "mailto:gideon.valera@gmail.com",
      contact: {
        email: "gideon.valera@gmail.com",
        location: "Caloocan City, Metro Manila"
      },
      links: [
        { label: "LinkedIn", href: "#" },
        { label: "GitHub",   href: "#" }
      ],
      copyright: "© 2026 Technical Duo. All rights reserved."
    }
  }
};

write(path.join(DATA, 'content.json'), JSON.stringify(content, null, 2));

// ── TypeScript interfaces ─────────────────────────────────────────────────────
const tsInterfaces = `// Auto-generated by tools/02_hydrate_data.js — DO NOT EDIT MANUALLY

export interface HeroContent {
  title: string;
  subtitle: string;
  cta: string;
  cta_href: string;
}

export interface Capability {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface PipelineStep {
  step: string;
  label: string;
  desc: string;
}

export interface TrustedBrand {
  id: string;
  name: string;
}

export interface TechStackCategory {
  category: string;
  items: string[];
}

export interface FooterContent {
  cta_headline: string;
  cta: string;
  cta_href: string;
  contact: {
    email: string;
    location: string;
  };
  links: Array<{ label: string; href: string }>;
  copyright: string;
}

export interface SiteContent {
  hero: HeroContent;
  capabilities: Capability[];
  pipeline: PipelineStep[];
  trusted_by: TrustedBrand[];
  tech_stack: TechStackCategory[];
  footer: FooterContent;
}

export interface ContentRoot {
  content: SiteContent;
}
`;

write(path.join(TYPES, 'content.ts'), tsInterfaces);

// ── .tmp snapshot ─────────────────────────────────────────────────────────────
write(path.join(TMP, 'schema_snapshot.json'), JSON.stringify({
  step: 2,
  timestamp: new Date().toISOString(),
  heroTitle: content.content.hero.title,
  capabilitiesCount: content.content.capabilities.length,
  pipelineSteps: content.content.pipeline.length,
  trustedByCount: content.content.trusted_by.length,
  techCategories: content.content.tech_stack.length,
}, null, 2));

console.log('\n✅ Step 2 complete — data layer hydrated.');
