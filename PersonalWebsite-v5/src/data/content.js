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
    ctaHref: '#cta',
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
    // Centered statement block: eyebrow / giant name / highlighted intro / CTAs
    eyebrow: 'Solutions Architect || Technical Project Manager',
    name: 'Gino Valera',
    intro: [
      { text: '12 years evolving from lab technician to multi-department automation lead. Built ' },
      { text: '100+ VBA templates', bold: true },
      { text: ', ' },
      { text: '20K lines of code', bold: true },
      { text: ', and a ' },
      { text: 'JARVIS Dashboard', bold: true },
      { text: ' that reduced daily operations from 20 minutes to 3.' },
    ],
    ctaPrimary: { label: 'View Experience', href: '#brands-served' },
    ctaSecondary: { label: 'Download Resume ↓', href: '/Gideon-Valera-Resume.docx', download: true },
    statement: 'Architecting the connection between business and technology.',
    statementDetail: [
      { text: '10 years evolving from Product Owner to Technology Enablement Lead. Deployed ' },
      { text: '30+ web platforms', bold: true },
      { text: ', architected ' },
      { text: 'complex mobile app migrations', bold: true },
      { text: ', and spearheaded a ' },
      { text: '$2M initiative', bold: true },
      { text: ' that drove the business to peak efficiency.' },
    ],
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
    heading: 'Built for Complexity. Designed for Clarity.',
    cards: [
      {
        title: 'Solutions Architecture',
        description:
          'Designing scalable, robust technical blueprints that translate strategic business visions into high-performing realities. Ensuring systems scale without becoming a technical liability.',
        tags: ['System Design', 'API Integration', 'Scalable Architecture', 'Cloud Infrastructure'],
      },
      {
        title: 'Technical & Business Program Management',
        description:
          'The bridge between stakeholder goals and engineering execution. Spearheading multi-million dollar initiatives and aligning cross-functional teams to unlock maximum operational efficiency.',
        tags: ['Agile / Scrum', 'Roadmapping', 'Stakeholder Alignment', 'Strategic Consulting'],
      },
      {
        title: 'Web Development',
        description:
          'Building expansive, dynamic web platforms and digital ecosystems. Delivering clean, modern solutions—from concept to deployment—that prioritize both user experience and backend performance.',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Frontend Architecture'],
      },
      {
        title: 'Python & Data Management',
        description:
          'End-to-end data pipeline design and complex data modeling. Transforming raw data into actionable business intelligence to eliminate bottlenecks and optimize workflows.',
        tags: ['Python', 'Pandas', 'SQL / BigQuery', 'ETL Pipelines', 'Data Visualization'],
      },
      {
        title: 'AI & LLM Operations',
        description:
          'Deploying AI-assisted automation and intelligent workflows that compound efficiency over time. Building robust systems that enable teams to ship faster and work smarter.',
        tags: ['Agentic Workflows', 'Local LLMs', 'Prompt Engineering', 'OpenAI / DeepSeek'],
      },
      {
        title: 'DevOps & Tools',
        description:
          'Streamlining deployment lifecycles and operational reliability. Ensuring seamless version control, containerization, and automated task management for continuous integration.',
        tags: ['Git / GitHub', 'Docker', 'CI / CD', 'Vercel', 'Task Scheduler'],
      },
      {
        title: 'Documentation & Quality',
        description:
          'Establishing rigorous quality standards and crystal-clear operational protocols. Ensuring complex systems are not just built, but thoroughly understood, documented, and fully compliant.',
        tags: ['SOP Creation', 'QA Testing', '21CFR Compliance', 'Version Release Protocol'],
      },
      {
        title: 'VBA Automation',
        description:
          'Deep expertise in localized process automation. Engineering complex, data-heavy dashboards and templates that drastically reduce manual operational time and eliminate human error.',
        tags: ['VBA / Macros', 'Excel Automation', 'Power Query', 'Process Automation'],
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
        label: 'Web & Frontend Development',
        description: 'Building dynamic digital platforms and user interfaces.',
        items: [
          { name: 'Next.js', color: '#000000' },
          { name: 'React', color: '#61DAFB' },
          { name: 'TypeScript', color: '#3178C6' },
          { name: 'JavaScript', color: '#F7DF1E' },
          { name: 'Tailwind CSS', color: '#06B6D4' },
          { name: 'Framer Motion', color: '#0055FF' },
        ],
      },
      {
        label: 'CMS & eCommerce Systems',
        description: 'Managing digital storefronts, content, and multi-channel marketplaces.',
        items: [
          { name: 'Shopify', color: '#96BF48' },
          { name: 'WordPress', color: '#21759B' },
          { name: 'Magento', color: '#EE672F' },
          { name: 'BigSeller', color: '#FF6A00' },
          { name: 'Shopee', color: '#EE4D2D' },
          { name: 'Lazada', color: '#0F156D' },
          { name: 'Drupal', color: '#0678BE' },
          { name: 'AEM', color: '#FF0000' },
          { name: 'Facebook Business Suite', color: '#1877F2' },
        ],
      },
      {
        label: 'Data Engineering & Analytics',
        description: 'Managing data pipelines, reporting, and business intelligence.',
        items: [
          { name: 'Python', color: '#3776AB' },
          { name: 'Pandas', color: '#150458' },
          { name: 'SQL / MySQL', color: '#4479A1' },
          { name: 'BigQuery', color: '#4285F4' },
          { name: 'Power BI', color: '#F2C811' },
          { name: 'Microsoft 365', color: '#D83B01' },
        ],
      },
      {
        label: 'AI & LLM Operations',
        description: 'Implementing artificial intelligence and autonomous workflows.',
        items: [
          { name: 'OpenClaw', color: '#14B8A6' },
          { name: 'Claude', color: '#D97757' },
          { name: 'DeepSeek', color: '#4D6BFE' },
          { name: 'Ollama (Local)', color: '#241C17' },
          { name: 'Agentic Workflows', color: '#7B9E87' },
          { name: 'Prompt Engineering', color: '#B75C3E' },
        ],
      },
      {
        label: 'Cloud, DevOps & Infrastructure',
        description: 'Deployment, version control, and scalable system architecture.',
        items: [
          { name: 'Docker', color: '#2496ED' },
          { name: 'Vercel', color: '#000000' },
          { name: 'Git / GitHub', color: '#F05032' },
          { name: 'CI / CD Pipelines', color: '#2088FF' },
          { name: 'API Integration', color: '#6E8F78' },
          { name: 'Cloud Architecture', color: '#4285F4' },
        ],
      },
      {
        label: 'Scripting & Process Automation',
        description: 'Localized tools and scripts that eliminate manual operational work.',
        items: [
          { name: 'VBA / Macros', color: '#217346' },
          { name: 'PowerShell', color: '#5391FE' },
          { name: 'Power Query', color: '#107C41' },
          { name: 'Playwright / Puppeteer', color: '#45BA4B' },
          { name: 'Task Scheduler', color: '#0078D4' },
          { name: 'VBS / BAT Scripts', color: '#4D4D4D' },
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

  contact: {
    sectionLabel: 'Get in Touch',
    heading: 'Contact',
    subheading:
      "Open to VBA automation, business analysis, and web development opportunities. Let's talk.",
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    reasonLabel: 'Reason',
    reasonPlaceholder: 'Select a reason...',
    reasons: [
      'VBA Automation & Process Improvement',
      'Web Development (Next.js / React)',
      'Excel Templates & Training',
      'Business Analysis & Consulting',
      'General Inquiry',
      'Other',
    ],
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about your project or question...',
    submit: 'Send Message →',
    directPrefix: 'Or email directly:',
    email: 'gideon.valera@gmail.com',
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
