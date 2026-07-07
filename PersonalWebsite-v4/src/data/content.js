// 📦 SINGLE SOURCE OF TRUTH — All page copy lives here.
// Rule: NEVER hardcode strings in JSX. Import from this file.

export const content = {
  profile: {
    name: 'Gideon Noel S. Valera',
    nameShort: 'GinoValera.com',
    title: 'Technical and AI Strategy Meets Business-Driven Execution',
    email: 'gideon.valera@gmail.com',
    location: 'Caloocan City, Metro Manila',
  },

  nav: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Services', href: '#features' },
      { label: 'Tech Stack', href: '#tech-stack' },
      { label: 'Brands Served', href: '#brands-served' },
    ],
    cta: 'Connect with me',
  },

  hero: {
    // Typographic poster hero (majd-style)
    posterLines: ['TECHNICAL', 'PROJECT', 'MANAGER'],
    metaSince: 'Architecting since 2017',
    headline: 'Architecting Solutions & Bridging the Path to AI-Driven Excellence',
    subheadline:
      'With 10+ years in technology and an architect\'s mindset, I transform complex data flows into seamless executions. I bridge the gap between business intent and technical reality—from API contracts to AI-native deployment pipelines.',
    cta: 'Connect with me',
    ctaHref: 'mailto:gideon.valera@gmail.com',
  },

  about: {
    // Quiet "welcome" interlude (yeqq.com.tr-style): greeting + name + portrait + one-liner
    greeting: "[hey, i'm]",
    name: '[gideon noel valera]',
    nameHref: 'https://linkedin.com/in/gideonvalera',
    cursor: '● who is this?',
    description:
      "i'm a technical project manager & solutions architect — the bridge between business and engineering.",
    subline:
      'i turn business intent into shipped systems: api contracts, data flows, and ai-driven delivery.',
    imageAlt: 'Portrait of Gideon Valera, Technical Project Manager',
  },

  howItWorks: {
    sectionLabel: 'The Process',
    heading: 'From vague idea to running system',
    subheading: 'Three phases. No hand-waving. Full documentation at every gate.',
    steps: [
      {
        number: '01',
        title: 'Strategy & Scoping',
        description:
          'Digital roadmap scoping and stakeholder alignment. I translate business goals into a bounded project brief — before a single line of code is written.',
      },
      {
        number: '02',
        title: 'Scripts & Architecture',
        description:
          'RESTful API integrations, JSON/XML payload design, and automation scripts. The messy middle, made clean and auditable.',
      },
      {
        number: '03',
        title: 'ADLC & Deployment',
        description:
          'AI Development Life Cycle in full effect — agentic build, automated QA gates, and zero-touch deployment. Ship confidently.',
      },
    ],
  },

  features: {
    sectionLabel: 'What I Do',
    heading: 'Built for complexity. Designed for clarity.',
    subheading:
      'Four core capabilities. One consistent outcome: systems that actually work and teams that actually understand them.',
    cards: [
      {
        icon: '🛒',
        title: 'eCommerce Ecosystems',
        description:
          'Magento, Drupal, WordPress — architected, integrated, and optimized. You get a system that scales without becoming a liability.',
        tags: ['Magento', 'Drupal', 'WordPress'],
      },
      {
        icon: '⚡',
        title: 'Full-Stack Data Flow',
        description:
          'End-to-end data pipeline design, from endpoint optimization to BigQuery. No more N+1 queries. No more mystery slowdowns.',
        tags: ['SQL', 'BigQuery', 'ETL'],
      },
      {
        icon: '🤖',
        title: 'Custom Scripts & ADLC',
        description:
          'AI-assisted automation that compounds over time. You get efficiency, scalable architecture, and a team that ships faster each sprint.',
        tags: ['AI Agents', 'Automation', 'Python'],
      },
      {
        icon: '📋',
        title: 'TPM & Consultancy',
        description:
          'Technical Project Management, Business Analysis, and strategic consulting — bridging the gap between what the business wants and what engineering can build.',
        tags: ['Agile', 'Roadmaps', 'Stakeholders'],
      },
    ],
  },

  // ─── NEW: Tech Stack ───────────────────────────────────────────
  techStack: {
    sectionLabel: 'Tech Stack',
    heading: 'The tools that get things done.',
    subheading: 'A curated stack built for eCommerce, cloud data, and AI-native workflows.',
    categories: [
      {
        label: 'CMS & eCommerce',
        items: [
          { name: 'WordPress', color: '#21759B' },
          { name: 'Drupal', color: '#0678BE' },
          { name: 'Magento', color: '#EE672F' },
          { name: 'AEM', color: '#FF0000' },
        ],
      },
      {
        label: 'Cloud & Data',
        items: [
          { name: 'Google Cloud', color: '#4285F4' },
          { name: 'BigQuery', color: '#4285F4' },
          { name: 'Looker Studio', color: '#4285F4' },
          { name: 'Google Workspace', color: '#34A853' },
          { name: 'Microsoft 365', color: '#0078D4' },
        ],
      },
      {
        label: 'AI & Automation',
        items: [
          { name: 'Gemini', color: '#8E75D4' },
          { name: 'Antigravity', color: '#C1694F' },
          { name: 'Zoho', color: '#E42527' },
        ],
      },
      {
        label: 'Languages & Frameworks',
        items: [
          { name: 'Python', color: '#3776AB' },
          { name: 'JavaScript', color: '#F7DF1E' },
          { name: 'React', color: '#61DAFB' },
          { name: 'Next.js', color: '#000000' },
          { name: 'Ruby', color: '#CC342D' },
          { name: 'SQL', color: '#336791' },
          { name: 'VBA', color: '#217346' },
          { name: 'REST APIs', color: '#7B9E87' },
        ],
      },
    ],
  },

  // ─── RENAMED: Brands Served ────────────────────────────────────
  brandsServed: {
    sectionLabel: 'Brands Served',
    heading: 'Organizations I\'ve worked with',
    brands: [
      { name: 'AXA Philippines', initial: 'AXA', color: '#00008F', logo: '/logos/axa.png' },
      { name: 'Globe Group', initial: 'GL', color: '#0056A2', logo: '/logos/globe.png' },
      { name: 'Cosme de net', initial: 'CDN', color: '#C1694F', logo: '/logos/cosme-de-net.jpg' },
      { name: 'AktivAsia', initial: 'AA', color: '#7B9E87', logo: '/logos/aktivasia.jpg' },
      { name: 'LeoPC', initial: 'LP', color: '#2D2D2D', logo: '/logos/leopc.jpg' },
      { name: "Cup n' Grind", initial: 'CG', color: '#6B4226', logo: '/logos/cup-n-grind.jpg' },
      { name: 'The Pack Labs', initial: 'TPL', color: '#3D3D3D' },
      { name: 'Johnson & Johnson', initial: 'J&J', color: '#CC0000', logo: '/logos/jnj.png' },
    ],
  },

  bottomCta: {
    heading: 'Ready to build something brilliantly efficient?',
    subheading:
      "Let's scope it, architect it, and ship it — with full documentation and zero ambiguity.",
    cta: 'Connect with me',
    ctaHref: 'mailto:gideon.valera@gmail.com',
  },

  footer: {
    tagline: 'Architecting Solutions. Shipping Results.',
    navColumns: [
      {
        title: 'Navigation',
        links: [
          { label: 'How It Works', href: '#how-it-works' },
          { label: 'Services', href: '#features' },
          { label: 'Tech Stack', href: '#tech-stack' },
          { label: 'Brands Served', href: '#brands-served' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'Email Me', href: 'mailto:gideon.valera@gmail.com' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/gideonvalera' },
          { label: 'GitHub', href: 'https://github.com/gideonvalera' },
        ],
      },
    ],
    contact: {
      email: 'gideon.valera@gmail.com',
      location: 'Caloocan City, Metro Manila',
    },
    socials: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/gideonvalera', icon: 'linkedin' },
      { label: 'GitHub', href: 'https://github.com/gideonvalera', icon: 'github' },
    ],
    copyright: `© ${new Date().getFullYear()} Gideon Noel S. Valera · GinoValera.com · All rights reserved.`,
  },
};
