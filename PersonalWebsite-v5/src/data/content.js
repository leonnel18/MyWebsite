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
      { label: 'Skills', href: '/skills' },
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
      { text: '10 years of progressive experience advancing from Frontend Developer to Technology Enablement Lead. Delivered ' },
      { text: 'robust solutions across mobile and web platforms', bold: true },
      { text: ', architected ' },
      { text: 'complex migrations', bold: true },
      { text: ', and spearheaded a ' },
      { text: '$2M eCommerce transformation program', bold: true },
      { text: ' that maximized operational efficiency.' },
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
    cta: { label: 'See Full Skill Ratings →', href: '/skills' },
    categories: [
      {
        label: '🖥️ Web & Frontend Development',
        description: 'Building dynamic digital platforms and user interfaces.',
        items: [
          { name: 'Next.js', color: '#000000', level: 'Advanced' },
          { name: 'React', color: '#61DAFB', level: 'Advanced' },
          { name: 'TypeScript', color: '#3178C6', level: 'Advanced' },
          { name: 'JavaScript', color: '#F7DF1E', level: 'Advanced' },
          { name: 'Tailwind CSS', color: '#06B6D4', level: 'Advanced' },
          { name: 'Framer Motion', color: '#0055FF', level: 'Proficient' },
        ],
      },
      {
        label: '🛒 CMS & eCommerce Systems',
        description: 'Managing digital storefronts, content, and multi-channel marketplaces.',
        items: [
          { name: 'Shopify', color: '#96BF48', level: 'Proficient' },
          { name: 'WordPress', color: '#21759B', level: 'Advanced' },
          { name: 'Magento', color: '#EE672F', level: 'Advanced' },
          { name: 'BigSeller', color: '#FF6A00', level: 'Proficient' },
          { name: 'Shopee', color: '#EE4D2D', level: 'Proficient' },
          { name: 'Lazada', color: '#0F156D', level: 'Proficient' },
          { name: 'Drupal', color: '#0678BE', level: 'Advanced' },
          { name: 'AEM', color: '#FF0000', level: 'Proficient' },
          { name: 'Facebook Business Suite', color: '#1877F2', level: 'Proficient' },
        ],
      },
      {
        label: '📊 Data Engineering & Analytics',
        description: 'Managing data pipelines, reporting, and business intelligence.',
        items: [
          { name: 'Python', color: '#3776AB', level: 'Advanced' },
          { name: 'Pandas', color: '#150458', level: 'Advanced' },
          { name: 'SQL / MySQL', color: '#4479A1', level: 'Advanced' },
          { name: 'BigQuery', color: '#4285F4', level: 'Advanced' },
          { name: 'Power BI', color: '#F2C811', level: 'Proficient' },
          { name: 'Microsoft 365', color: '#D83B01', level: 'Expert' },
        ],
      },
      {
        label: '🤖 AI & LLM Operations',
        description: 'Implementing artificial intelligence and autonomous workflows.',
        items: [
          { name: 'OpenClaw', color: '#14B8A6', level: 'Advanced' },
          { name: 'Claude', color: '#D97757', level: 'Advanced' },
          { name: 'DeepSeek', color: '#4D6BFE', level: 'Proficient' },
          { name: 'Ollama (Local)', color: '#241C17', level: 'Proficient' },
          { name: 'Agentic Workflows', color: '#7B9E87', level: 'Advanced' },
          { name: 'Prompt Engineering', color: '#B75C3E', level: 'Advanced' },
        ],
      },
      {
        label: '☁️ Cloud, DevOps & Infrastructure',
        description: 'Deployment, version control, and scalable system architecture.',
        items: [
          { name: 'Docker', color: '#2496ED', level: 'Proficient' },
          { name: 'Vercel', color: '#000000', level: 'Advanced' },
          { name: 'Git / GitHub', color: '#F05032', level: 'Advanced' },
          { name: 'CI / CD Pipelines', color: '#2088FF', level: 'Proficient' },
          { name: 'API Integration', color: '#6E8F78', level: 'Expert' },
          { name: 'Cloud Architecture', color: '#4285F4', level: 'Advanced' },
        ],
      },
      {
        label: '⚙️ Scripting & Process Automation',
        description: 'Localized tools and scripts that eliminate manual operational work.',
        items: [
          { name: 'VBA / Macros', color: '#217346', level: 'Expert' },
          { name: 'PowerShell', color: '#5391FE', level: 'Advanced' },
          { name: 'Power Query', color: '#107C41', level: 'Advanced' },
          { name: 'Playwright / Puppeteer', color: '#45BA4B', level: 'Proficient' },
          { name: 'Task Scheduler', color: '#0078D4', level: 'Advanced' },
          { name: 'VBS / BAT Scripts', color: '#4D4D4D', level: 'Advanced' },
        ],
      },
    ],
  },

  // ─── Skills page (/skills) — full proficiency breakdown ────────
  skillsPage: {
    eyebrow: 'Skill Ratings',
    heading: 'Technical Capabilities, Rated',
    subheading:
      'Every tool below is scored against real delivery history — not a self-assessment guess. Ratings are inferred from career tenure and depth of use documented in my Experience page, and get revised as that history grows.',
    statLabels: {
      years: 'Years of Progressive Experience',
      tools: 'Tools & Technologies',
      domains: 'Specialty Domains',
      expert: 'Expert-Level Skills',
    },
    yearsValue: '10+',
    legend: [
      { level: 'Expert', description: '~90% — 10+ years deep, or the literal job title on my resume.' },
      { level: 'Advanced', description: '~80% — core to daily delivery work, used across multiple roles.' },
      { level: 'Proficient', description: '~70% — comfortable and productive, used as-needed.' },
    ],
  },

  // ─── Career Timeline (homepage teaser) ─────────────────────────
  careerTimeline: {
    sectionLabel: 'What I do',
    heading: 'Career Experience',
    cta: { label: 'See the Full Career Story →', href: '/experience' },
    // NOTE: no `entries` array here — teaser cards are derived from
    // `content.experience.tracks.*` at render time. See SAD §4.2.
  },

  // ─── Experience (/experience page) ─────────────────────────────
  experience: {
    eyebrow: 'Full Journey',
    heading: 'Career Experience',
    // Date-picker tabs (Requirement: restructured /experience page §2).
    // Each entry below carries a `bucket` field naming the tab it belongs
    // to — assigned by which tab's range contains the entry's *start*
    // year, so every entry lives in exactly one tab (no overlap/duplicate
    // membership across tabs). `bucket: null` opts an entry out of the
    // tabbed box grid entirely (Cosme De Net) — it still appears in the
    // Full Timeline section below, which ignores `bucket`.
    tabs: ['2023-Present', '2022-2023', '2018-2022', '2017'],
    fullTimelineHeading: 'Full Timeline',
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
            bucket: '2023-Present',
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
            bucket: '2022-2023',
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
            bucket: '2018-2022',
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
            bucket: '2018-2022',
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
            bucket: '2017',
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
            bucket: '2023-Present',
            title: 'Digital Projects Manager',
            company: 'AktivAsia Ltd.',
            logo: '/logos/aktivasia.jpg',
            initial: 'AA',
            color: '#7B9E87',
            current: true,
            summary:
              'Leading the organization-wide digital transformation by migrating impact measurement data into Zoho CRM and driving tech adoption across a remote team.',
            tags: ['Zoho CRM', 'Change Management', 'Remote Team Training'],
            spotlight: {
              paragraph:
                'Leading the organization-wide digital transformation by migrating impact measurement data into Zoho CRM and driving tech adoption across a fully remote team.',
              stats: [
                { value: 'Org-Wide', label: 'Digital Transformation' },
                { value: 'Zoho CRM', label: 'Data Migration' },
                { value: 'Remote-First', label: 'Team Structure' },
                { value: 'Change Mgmt', label: 'Tech Adoption' },
              ],
              contributions: [
                'Migrating organization-wide impact measurement data into Zoho CRM for centralized reporting.',
                'Leading change management and training programs to drive tech adoption across a remote team.',
                'Serving as the primary point of contact for digital tooling decisions across the org.',
              ],
            },
          },
          {
            id: 'thepacklabs',
            dateRange: '2026–Present',
            bucket: '2023-Present',
            title: 'API Integrator Specialist',
            company: 'ThePackLabs',
            logo: '/logos/thepacklabs.jpg',
            initial: 'TPL',
            color: '#3D3D3D',
            current: true,
            summary: 'Leading API integration projects and technical architecture alignments.',
            tags: ['API Integration', 'BigQuery', 'Python'],
            spotlight: {
              paragraph:
                'Leading API integration projects and technical architecture alignments, connecting order and fulfillment systems into a shared BigQuery data warehouse.',
              stats: [
                { value: 'API-First', label: 'Integration Design' },
                { value: 'BigQuery', label: 'Data Warehouse' },
                { value: 'Python', label: 'Automation' },
                { value: 'Cross-Team', label: 'Architecture Alignment' },
              ],
              contributions: [
                'Leading API integration projects connecting order and fulfillment systems.',
                'Aligning technical architecture decisions across integration partners.',
                'Building Python-based data pipelines feeding BigQuery.',
              ],
            },
          },
          {
            id: 'cup-n-grind',
            dateRange: '2025–Present',
            bucket: '2023-Present',
            title: 'Owner',
            company: "Cup N' Grind",
            logo: '/logos/cup-n-grind.jpg',
            initial: 'CG',
            color: '#6B4226',
            current: false,
            summary:
              "Founded and operate a local coffee shop introducing innovative flavors and building a youth community centered around environmental sustainability.",
            tags: ['Business Ownership', 'Community Building', 'Sustainability'],
            spotlight: {
              paragraph:
                "Founded and operate a local coffee shop introducing innovative flavors and building a youth community centered around environmental sustainability.",
              stats: [
                { value: 'Founder', label: 'Business Owner' },
                { value: 'Local', label: 'Coffee Shop' },
                { value: 'Youth-Led', label: 'Community Program' },
                { value: 'Sustainability', label: 'Core Focus' },
              ],
              contributions: [
                'Founded and operate a local coffee shop from concept to daily operations.',
                'Developed an innovative, sustainability-conscious flavor menu.',
                'Built a youth community program centered on environmental sustainability.',
              ],
            },
          },
          {
            id: 'cosme-de-net',
            dateRange: '2023–2026',
            // Not in the 2023-Present box grid — Gino wants only 4 spotlighted
            // entries there (aktivasia, thepacklabs, axa, cup-n-grind).
            bucket: null,
            title: 'Inventory Control Analyst',
            company: 'Cosme De Net',
            logo: '/logos/cosme-de-net.jpg',
            initial: 'CDN',
            color: '#C1694F',
            current: false,
            summary:
              'Managed inventory operations for a cosmetics distributor handling 30,000+ SKUs using custom VBA, VBS, and Batch automation.',
            spotlight: {
              paragraph:
                'Managed inventory operations for a cosmetics distributor handling 30,000+ SKUs, using custom VBA, VBS, and Batch automation to streamline stock control.',
              stats: [
                { value: '30,000+', label: 'SKUs Managed' },
                { value: 'VBA / VBS', label: 'Automation Stack' },
                { value: 'Batch', label: 'Scripted Workflows' },
                { value: 'Streamlined', label: 'Stock Control' },
              ],
              contributions: [
                'Managed inventory operations for a cosmetics distributor handling 30,000+ SKUs.',
                'Built custom VBA, VBS, and Batch automation to streamline stock control.',
                'Reduced manual inventory reconciliation effort through scripted tooling.',
              ],
            },
          },
          {
            id: 'leopc',
            dateRange: '2020',
            bucket: '2018-2022',
            title: 'Website Developer',
            company: 'Leo PC',
            logo: '/logos/leopc.jpg',
            initial: 'LP',
            color: '#2D2D2D',
            current: false,
            summary:
              'Designed and developed the official website for a local computer shop, establishing their digital footprint and SEO presence.',
            spotlight: {
              paragraph:
                'Designed and developed the official website for a local computer shop, establishing their digital footprint and SEO presence.',
              // No `stats` — SpotlightBlock must not render an empty grid.
              contributions: [
                'Designed and developed the official website for a local computer shop.',
                "Established the business's first digital footprint and SEO presence.",
              ],
            },
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
    copyright: `© ${new Date().getFullYear()} Gideon Noel S. Valera · Metro Manila, Philippines`,
  },
};
