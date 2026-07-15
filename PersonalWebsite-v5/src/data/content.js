// 📦 SINGLE SOURCE OF TRUTH — All page copy lives here.
// Rule: NEVER hardcode strings in JSX. Import from this file.

export const content = {
  profile: {
    name: 'Gideon Noel S. Valera',
    nameShort: 'GinoValera.com',
    title: 'Technical and AI Strategy Meets Business-Driven Execution',
    email: 'gideon.valera@gmail.com',
    location: 'Quezon City, Metro Manila',
  },

  nav: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#features' },
      { label: 'Tech Stack', href: '#tech-stack' },
      { label: 'Experience', href: '/experience' },
    ],
    cta: 'Connect with me',
    ctaHref: '#cta',
  },

  hero: {
    headlineLines: ['Architecting clarity from complexity'],
    subheadline:
      'Blending deep technical expertise with strategic business insight to unblock organisational potential and drive clarity.',
    image: '/hero-illustration.png',
    imageAlt: 'Illustration of Gino coding on a laptop, surrounded by floating geometric tech icons',
  },

  about: {
    // Centered statement block: eyebrow / giant name / highlighted intro / CTAs
    eyebrow: 'Solutions Architect || Technical Project Manager',
    name: 'Gino Valera',
    ctaPrimary: { label: 'View Experience', href: '/experience' },
    ctaSecondary: { label: 'Download Resume ↓', href: '/Gideon-Valera-Resume.docx', download: true },
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

  features: {
    sectionLabel: 'What I Bring',
    heading: 'Core Capabilities',
    subheading: 'Bridging the gap between ambitious business strategy and robust technical execution.',
    cards: [
      {
        title: 'Solutions Architecture',
        description:
          'Designing scalable, robust technical blueprints that translate strategic business visions into high-performing realities. Ensuring systems scale without becoming a technical liability.',
        tags: ['System Design', 'API Integration', 'Scalable Architecture', 'Cloud Infrastructure'],
      },
      {
        title: 'TechBiz Program Management',
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
    sectionLabel: 'What I Use',
    heading: 'Technical Capabilities',
    subheading: 'A curated stack built for eCommerce, cloud data, and AI-native workflows.',
    categories: [
      {
        label: '🖥️ Web & Frontend Development',
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
        label: '🛒 CMS & eCommerce Systems',
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
        label: '📊 Data Engineering & Analytics',
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
        label: '🤖 AI & LLM Operations',
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
        label: '☁️ Cloud, DevOps & Infrastructure',
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
        label: '⚙️ Scripting & Process Automation',
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
    previousRolesHeading: 'Previous Roles',
    otherHustlesHeading: 'Other Hustles & Ventures',
    tracks: {
      corporate: {
        label: 'Corporate Career',
        // All 5 entries carry a `spotlight` now (Requirement 2 — the Hero
        // is just the `current: true` entry, "Previous Roles" is the rest,
        // rendered the same way via SpotlightBlock, just visually secondary).
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
            tags: ['Digital Strategy', 'Roadmap Scoping', 'Stakeholder Management', 'SDLC Ownership'],
            spotlight: {
              paragraph:
                "Led digital strategy and scoping for retail distribution platforms, creating development roadmaps aligned with corporate marketing objectives. Directed full-cycle digital developments, including new lead generation and acquisition tools, serving as the single point of contact for internal and external workstreams.",
              stats: [
                { value: 'End-to-End', label: 'SDLC Ownership' },
                { value: '1st Level', label: 'System Consultant' },
                { value: 'Weekly', label: 'Status Reporting' },
                { value: '100%', label: 'Brand Alignment' },
              ],
              contributions: [
                "Scoped and recommended development roadmaps to support Marketing's fiscal year objectives.",
                'Mapped customer journeys for key system features alongside Segment, Product, and Distribution teams.',
                'Overseen technical integration and feature prioritization with Digital Product Owners.',
                'Provided weekly technical status updates, identifying project delays to enable data-driven business decisions.',
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
            tags: ['RESTful API', 'Magento', 'JSON/XML', 'Postman'],
            spotlight: {
              paragraph:
                'Architected the technical migration of the Globe eCommerce platform to Magento, ensuring zero-loss data flow and feature parity. Engineered RESTful API payloads (JSON/XML) for third-party payment orchestrators like ECPay.',
              stats: [
                { value: '3 Squads', label: 'Dev Teams Managed' },
                { value: 'Zero-Loss', label: 'Data Migration' },
                { value: 'REST API', label: 'Architecture' },
                { value: '100%', label: 'Feature Parity' },
              ],
              contributions: [
                'Managed the API lifecycle from staging to production, validating JSON/XML parameters via Postman.',
                'Architected headless CMS API endpoints utilizing Drupal and Magento for mobile app consumption.',
                'Created Procedures and Policy Manuals (PPM) for viable solution architectures.',
                'Managed three squads of Dev teams for seamless API lodging and deployment.',
              ],
            },
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
            tags: ['Product Ownership', 'SDLC', 'Compliance', 'KPI Management'],
            spotlight: {
              paragraph:
                'Directed the end-to-end SDLC for educational platforms, successfully onboarding over 10 school clients while ensuring feature deployments stayed compliant with government and financial third-party regulations.',
              stats: [
                { value: '10+', label: 'School Clients' },
                { value: '100%', label: '3rd-Party Compliance' },
                { value: 'Daily', label: 'KPI Tracking' },
                { value: 'Pre-to-Post', label: 'MVE Phases' },
              ],
              contributions: [
                'Directed end-to-end SDLC for over 10 school client platforms, from setup to maintenance.',
                'Ensured UI/UX design, content creation, and feature deployments complied with government and financial 3rd-party regulations.',
                'Set daily KPIs and quotas for sub-squads based on time studies and research.',
                'Managed feature backlogs across Pre-to-Post MVE (Minimum Viable Experience) phases.',
              ],
            },
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
            tags: ['VBA', 'SQL', 'WordPress', 'Zoho'],
            spotlight: {
              paragraph:
                'Migrated student records and managed database setups via VBA automation, and architected data synchronization between WordPress frontends and Zoho Business using SQL and API integration.',
              // No `stats` — SpotlightBlock must not render an empty grid.
              contributions: [
                'Migrated student records and managed database setups via VBA.',
                'Architected data synchronization between WordPress and Zoho Business using SQL and APIs.',
              ],
            },
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
            tags: ['VBA', 'Excel Automation', 'SOP Documentation'],
            spotlight: {
              paragraph:
                'Engineered VBA-based Excel automation for the Demand Planning Team, drastically reducing the total working time required to generate complex statistical forecast summaries.',
              stats: [
                { value: 'Automated', label: 'Forecast Summaries' },
                { value: 'VBA', label: 'Excel Scripting' },
                { value: 'Multiple', label: 'SOPs Optimized' },
                { value: 'Reduced', label: 'Team Workload' },
              ],
              contributions: [
                'Restructured and documented Standard Operating Procedures (SOPs) for the supply chain department.',
                'Automated forecast summaries via Microsoft Excel VBA to decrease workload.',
              ],
            },
          },
        ],
      },
      otherHustle: {
        label: 'Other Hustle',
        // Condensed timeline only (Requirement 2, §3) — no `spotlight`.
        // Order matches Gino's brief: AktivAsia, ThePackLabs, Cup N' Grind,
        // Cosme De Net, Leo PC.
        entries: [
          {
            id: 'aktivasia',
            dateRange: '2026–Present',
            title: 'Digital Projects Manager',
            company: 'AktivAsia Ltd.',
            logo: '/logos/aktivasia.jpg',
            initial: 'AA',
            color: '#7B9E87',
            current: true,
            summary:
              'Leading the organization-wide digital transformation by migrating impact measurement data into Zoho CRM and driving tech adoption across a remote team.',
            tags: ['Zoho CRM', 'Change Management', 'Remote Team Training'],
          },
          {
            id: 'thepacklabs',
            dateRange: '2026–Present',
            title: 'API Integrator Manager',
            company: 'ThePackLabs',
            logo: null,
            initial: 'TPL',
            color: '#3D3D3D',
            current: true,
            summary: 'Leading API integration projects and technical architecture alignments.',
            tags: ['API Integration', 'BigQuery', 'Python'],
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
            summary:
              "Founded and operate a local coffee shop introducing innovative flavors and building a youth community centered around environmental sustainability.",
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
            summary:
              'Managed inventory operations for a cosmetics distributor handling 30,000+ SKUs using custom VBA, VBS, and Batch automation.',
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
            summary:
              'Designed and developed the official website for a local computer shop, establishing their digital footprint and SEO presence.',
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
          { label: 'Services', href: '#features' },
          { label: 'Tech Stack', href: '#tech-stack' },
          { label: 'Experience', href: '/experience' },
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
