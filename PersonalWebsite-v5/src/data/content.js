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
      { label: 'Projects', href: '/projects' },
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
    ctaSecondary: { label: 'View Projects', href: '/projects' },
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
          { name: 'Magento', color: '#EE672F', level: 'Proficient' },
          { name: 'BigSeller', color: '#FF6A00', level: 'Beginner' },
          { name: 'Shopee', color: '#EE4D2D', level: 'Intermediate' },
          { name: 'Lazada', color: '#0F156D', level: 'Intermediate' },
          { name: 'Drupal', color: '#0678BE', level: 'Advanced' },
          { name: 'AEM', color: '#FF0000', level: 'Proficient' },
          { name: 'Facebook Business Suite', color: '#1877F2', level: 'Proficient' },
        ],
      },
      {
        label: '📊 Data Engineering & Analytics',
        description: 'Managing data pipelines, reporting, and business intelligence.',
        items: [
          { name: 'Python', color: '#3776AB', level: 'Intermediate' },
          { name: 'Pandas', color: '#150458', level: 'Intermediate' },
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
          { name: 'OpenClaw', color: '#14B8A6', level: 'Proficient' },
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
          { name: 'Docker', color: '#2496ED', level: 'Intermediate' },
          { name: 'Vercel', color: '#000000', level: 'Advanced' },
          { name: 'Git / GitHub', color: '#F05032', level: 'Advanced' },
          { name: 'CI / CD Pipelines', color: '#2088FF', level: 'Proficient' },
          { name: 'API Integration', color: '#6E8F78', level: 'Expert' },
          { name: 'Cloud Architecture', color: '#4285F4', level: 'Proficient' },
        ],
      },
      {
        label: '⚙️ Scripting & Process Automation',
        description: 'Localized tools and scripts that eliminate manual operational work.',
        items: [
          { name: 'VBA / Macros', color: '#217346', level: 'Expert' },
          { name: 'PowerShell', color: '#5391FE', level: 'Proficient' },
          { name: 'Power Query', color: '#107C41', level: 'Proficient' },
          { name: 'Playwright / Puppeteer', color: '#45BA4B', level: 'Proficient' },
          { name: 'Task Scheduler', color: '#0078D4', level: 'Advanced' },
          { name: 'VBS / BAT Scripts', color: '#4D4D4D', level: 'Expert' },
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
  },

  // ─── Projects page (/projects) ──────────────────────────────────
  projectsPage: {
    eyebrow: 'Selected Work',
    heading: 'Projects',
    subheading:
      'Automation, AI systems, web builds, and data pipelines — designed, architected, and shipped end to end.',
    categories: {
      automation: { label: 'Automation', color: '#A65B72' },
      ai: { label: 'AI Systems', color: '#B75C3E' },
      web: { label: 'Web Dev', color: '#6E8F78' },
      data: { label: 'Data & Analytics', color: '#5B7FA6' },
    },
    projects: [
      {
        id: 'ecommerce-data-warehouse',
        category: 'data',
        icon: '🔄',
        title: 'E-Commerce Data Warehouse Pipeline',
        tags: ['Python', 'Google BigQuery', 'SQL', 'OAuth2', 'Cloud Scheduler'],
        description:
          'Automated ETL pipeline replicating live commerce data into BigQuery on a 1-hour refresh cycle, powering real-time BI dashboards with zero manual exports.',
        caseStudy: {
          problem:
            'Order, invoice, shipment, and billing data lived inside a commerce platform with no warehouse behind it — every report meant a manual export.',
          solution:
            'Built a Python ETL engine with auto-refreshing OAuth2 auth, scheduled pulls across four data domains, and dedup-safe BigQuery writes — governed by 11 codified pipeline invariants and a 3-tier automated sanity-check system (table dedup, view NULL-drift, Cloud Run job health) emailing a daily report.',
          result:
            'A self-running warehouse now feeds live BI dashboards on an hourly cycle. One real incident is on record: a BigQuery timestamp-casting quirk was silently breaking dedup until it was traced and permanently guarded against — the kind of bug that’s now caught by rule, not memory.',
          stack: ['Python', 'Google BigQuery', 'SQL', 'OAuth2', 'Cloud Scheduler', 'Cloud Run', 'Looker Studio'],
        },
      },
      {
        id: 'crm-portal-reporting',
        category: 'data',
        icon: '🌏',
        title: 'CRM-to-Portal Reporting System',
        tags: ['Python', 'JavaScript', 'Zoho CRM API', 'Cloudflare Pages'],
        description:
          'Read-only pipeline extracting CRM data across 5 regional entities and republishing it as branded static reporting portals — no manual report-building involved.',
        caseStudy: {
          problem:
            'A multi-country training organization needed each region to see live enrollment and session data, without anyone getting CRM write access.',
          solution:
            'Built a strictly read-only extraction layer — zero write endpoints, enforced at the code level, not just policy — mapping 6 CRM modules into human-readable entities and regenerating a single JSON source of truth on every run.',
          result:
            '5 regions get live, branded reporting portals from one pipeline run, with zero CRM write risk by design.',
          stack: ['Python', 'JavaScript', 'Zoho CRM API', 'Cloudflare Pages', 'JSON'],
        },
      },
      {
        id: 'pondo-expense-tracker',
        category: 'web',
        icon: '💰',
        title: 'Pondo — Household Expense Tracker',
        tags: ['React', 'Express', 'Supabase', 'Vercel'],
        description:
          'A real multi-tenant product, not a personal spreadsheet — every household signs up for its own private account and shapes its own categories, budgets, and accounts, without touching a line of code.',
        link: 'https://pondo.ginovalera.com',
        caseStudy: {
          problem:
            'An expense tracker only earns daily use if it fits how a specific household actually spends. Fixed categories and one-size dashboards get abandoned within a week.',
          solution:
            'Built Pondo behind real auth/sign-up so each household gets its own isolated account — they define their own categories (name, color, emoji), budgets per category, multiple accounts, and tags, while the core tracking engine underneath stays identical. Migrated the backend from a local SQLite/Express prototype to Supabase Postgres on Vercel to make it usable by more than just me.',
          result:
            'A formal QA gate caught a P0 pagination regression — a silent offset=0 bug that would’ve served 1,000 rows instead of the requested page — before it reached production. Now live on Vercel at a custom domain, ready for any household to sign up and make it their own.',
          stack: ['React', 'Vite', 'Express', 'Supabase', 'PostgreSQL', 'Vercel'],
          roadmap: 'Next up: letting each household personalize which dashboard widgets and nav items they see — not built yet, currently a fixed layout for everyone.',
        },
      },
      {
        id: 'zoho-invoice-automation',
        category: 'automation',
        icon: '🧾',
        title: 'Zoho Invoice Automation',
        tags: ['Python', 'Zoho Books API', 'PDF Parsing'],
        description:
          'Script that reads delivery-receipt PDFs and automatically creates the matching invoice in Zoho Books, turning a recurring copy-paste task into one command.',
        caseStudy: {
          problem: 'Invoicing after every delivery meant manually re-typing line items from a PDF into Zoho Books, every time.',
          solution:
            'Built a Python script that parses delivery-receipt PDFs, maps line items to Zoho Books’ invoice schema, and creates the invoice via the API directly.',
          result: 'What used to be manual data entry per delivery is now a single script run.',
          stack: ['Python', 'Zoho Books API', 'PDF Parsing'],
        },
      },
      {
        id: 'agentic-workflows',
        category: 'ai',
        icon: '🧠',
        title: 'Agentic Workflows System',
        tags: ['Claude Agent SDK', 'Multi-Agent Orchestration'],
        description:
          'The multi-crew AI system I actually run to discover, gate, and build my own projects — two chiefs of staff, six specialist crews, twenty-two roles.',
        link: '/projects/agentic-workflows',
        caseStudy: {
          problem:
            'Running solo dev projects end-to-end — discovery, design, build, QA, deploy — meant constantly switching hats and losing context between phases.',
          solution:
            'Designed a two-tier system: two AI chiefs of staff orchestrating six specialist crews (build, discovery, data-integrity, docs/analysis) across 22 named roles, with defined handoff gates between phases.',
          result:
            'Every project on this page — including this site — now moves through a real discovery→design→build→QA→deploy pipeline with hard gates, not ad hoc prompting.',
          stack: ['Claude Agent SDK', 'Multi-Agent Orchestration', 'Markdown Role Specs'],
        },
      },
      {
        id: 'technical-duo-website',
        category: 'web',
        icon: '🤝',
        title: 'TechnicalDuoWebsite',
        tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        description:
          'Joint portfolio landing page for a two-person technical consultancy, built from an AI-generated mockup into a production-ready static export.',
        caseStudy: {
          problem: 'A hand-off mockup for a two-person consultancy needed to become a real, deployable site.',
          solution:
            'Rebuilt it in Next.js with a static export target — a circuit-path SVG hero animation, a scroll-driven 7-step pipeline stepper, a filterable tech-stack grid, and content fully schema-driven outside the components.',
          result:
            'Built and verified — lint and build both clean, 47.1kB static export ready for Cloudflare Pages. Not yet deployed live.',
          stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Static Export'],
        },
      },
      {
        id: 'this-website',
        category: 'web',
        icon: '🌐',
        title: 'This Website (v5)',
        tags: ['React', 'Vite', 'Framer Motion', 'Lenis'],
        description:
          'The site you’re on right now — a warm-paper editorial portfolio with a scroll-choreographed card stack and full dark/light theming.',
        caseStudy: {
          problem: 'Four prior versions of this portfolio existed before this one, each rebuilt as the brand and content matured.',
          solution:
            'Built v5 as a proper multi-page React app — 5 routed pages (Home, Experience, Skills, this Projects page, and the Agentic Workflows case study), with a 6-section home page, a shared theme context, and Lenis-powered smooth scroll throughout.',
          result: 'A living site that documents its own build process — including the very page you’re reading it on.',
          stack: ['React', 'Vite', 'React Router', 'Framer Motion', 'Lenis'],
        },
      },
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
            tags: ['$2M AEM Migration Project', 'PHP 12M Product Onboarding Budget', 'Modular-First Product Revamp', '105% Year-2 KPI Rating'],
            spotlight: {
              paragraph:
                "AXA Philippines is one of the largest and fastest-growing insurance companies in the country. Established in 1999, it is a joint venture between the global Paris-based AXA Group, Metropolitan Bank and Trust Company (Metrobank), and GT Capital Holdings. As a Technology Enablement Senior Manager, I bridged the gap between the Transformation & Technology Team and the Products & Marketing Team, ensuring cross-functional synergy across all managed projects.",
              stats: [
                { value: '$2M', label: 'AEM Migration Project' },
                { value: 'PHP 12M', label: 'Product Onboarding Budget' },
                { value: '105%', label: 'Year-2 KPI Rating' },
                { value: 'Modular-First', label: 'Product Revamp' },
              ],
              contributions: [
                'Digital Strategy & Roadmap Scoping: Collaborated directly with retail distribution and technology teams to define digital business requirements and construct development roadmaps for distributor and eCommerce platforms.',
                'Customer Journey & System Consulting: Served as the primary consultant for core system features, aligning with Marketing and Product teams to map customer journeys and ensure strict adherence to AXA Group brand guidelines.',
                'Stakeholder & Vendor Management: Acted as the central point of contact for all digital-related builds, seamlessly coordinating between internal workstreams and external partners.',
                'Development Oversight: Directed digital developments across various distributor platforms, including the conceptualization and launch of new lead generation and acquisition tools.',
                'Feature Prioritization & Integration: Partnered with Digital Product Owners and Business Analysts to scope key products, prioritize features, and oversee system integrations from a strategic business perspective.',
                'Operational Reporting & Risk Mitigation: Delivered comprehensive weekly technical status reports, proactively identifying project delays and red flags to facilitate data-driven business decisions and keep timelines on track.',
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
            tags: ['API Architecture & Design', 'eCommerce Ecosystem Migration', 'Payment Gateway Integration', 'Cross-Functional Leadership', 'Headless CMS Management'],
            spotlight: {
              paragraph:
                "Globe Telecom, Inc. (PSE: GLO) is one of the Philippines' leading telecommunications and digital platform companies, providing a comprehensive suite of mobile, broadband, enterprise, and digital services. Backed by Ayala Corporation and Singtel, it serves over 86 million subscribers nationwide. As an API Technical Designer, I managed four development squads and oversaw the end-to-end architecture and integration of critical digital features.",
              stats: [
                { value: '4 Squads', label: 'Dev Teams Managed' },
                { value: 'Magento', label: 'eCommerce Migration' },
                { value: 'ECPay+', label: 'Payment Integrations' },
                { value: 'Headless CMS', label: 'Drupal Architecture' },
              ],
              contributions: [
                'Cross-Functional Squad Leadership: Managed four development squads and aligned stakeholders across departments—including Product Owners, Project Managers, and UI/UX designers—to ensure seamless web and app feature implementation under tight SLAs.',
                'API Architecture & Technical Mapping: Authored Procedures and Policy Manuals (PPM) and comprehensive technical mappings, creating robust end-to-end solution architectures to guide development teams from the planning stage through deployment.',
                'End-to-End API Lifecycle Management: Engineered and validated JSON/XML request and response parameters using Postman, overseeing the API journey from staging to production, and supporting frontend developers through code merging, deployment, and app store publishing.',
                'eCommerce Migration & Headless CMS: Directed the technical transition to a Magento-based ecosystem and leveraged Drupal to construct a headless CMS architecture, generating reliable API endpoints and content components consumed by the mobile application.',
                'Third-Party Payment Integration: Designed the API lodging and technical mapping for ECPay and other payment orchestrators, enabling secure transaction processing and real-time payment synchronization via REST APIs.',
                'Full-Stack Data Optimization: Bridged the gap between frontend web components and backend datalakes, utilizing SQL to streamline data flow and optimize endpoint performance for both mobile and web platforms.',
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
            tags: ['End-to-End SDLC', 'Agile Sprint Management', 'KPI & Operations Tracking', 'Client Proposal Development'],
            spotlight: {
              paragraph:
                'Balud Digital Solutions Corporation is a Philippine-based software company specializing in tailored digital solutions for educational institutions, including Learning Management Systems (LMS), File Management Systems, custom website design, and bespoke operational software. After two years as a Frontend Data Developer, I was promoted to Product Owner, stepping into a leadership role to oversee product lifecycles and team operations.',
              stats: [
                { value: '10+', label: 'School Client Websites' },
                { value: 'Daily', label: 'KPI & Quota Tracking' },
                { value: 'Pre-to-Post', label: 'MVE Sprint Phases' },
                { value: 'End-to-End', label: 'SDLC Ownership' },
              ],
              contributions: [
                'End-to-End Product Ownership: Directed the full Software Development Life Cycle (SDLC) for over 10 school client websites, overseeing every phase from initial setup through to ongoing maintenance.',
                'Cross-Functional Coordination: Synchronized the efforts of multiple departments, ensuring that product creation, content development, UI/UX design, and feature deployments were perfectly aligned.',
                'Business Strategy & Client Relations: Authored comprehensive business proposals, strategic plans, and company background materials, while managing project costs, budgets, and payment terms with clients.',
                'Operations & Performance Management: Led the Operations Team during product creation by establishing daily KPIs and squad quotas based on time studies, and engineered monitoring systems to track weekly workforce efficiency.',
                'Agile Backlog & Sprint Management: Prioritized feature backlogs and structured sprint cycles, defining distinct feature sets from Pre-MVE to Post-MVE phases and establishing clear product milestones.',
                'Requirements Gathering & Compliance: Managed all business requirements and acceptance criteria, ensuring every deployed feature aligned with stakeholder strategy and strictly complied with the regulations of involved government agencies and financial institutions.',
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
            tags: ['Client Onboarding', 'Zoho CRM Integration', 'Educational System Compliance', 'VBA Data Migration', 'Technical Architecture'],
            spotlight: {
              paragraph:
                'Balud Digital Solutions Corporation is a Philippine-based software company specializing in tailored digital solutions for educational institutions, including Learning Management Systems (LMS), File Management Systems, custom website design, and bespoke operational software. As a Frontend Data Developer, I integrated front-end user experiences with robust backend data systems to support our school clients.',
              stats: [
                { value: '10+', label: 'School Clients Onboarded' },
                { value: 'VBA', label: 'Student Record Migration' },
                { value: 'WordPress ↔ Zoho', label: 'CRM Integration' },
                { value: 'Regulatory', label: 'Compliance Standards' },
              ],
              contributions: [
                'Client Onboarding & Database Management: Supported the full Software Development Life Cycle (SDLC) for the onboarding of over 10 school clients, successfully managing database configurations, technical integrations, and complex student record migrations utilizing VBA.',
                'WordPress & Zoho CRM Integration: Architected the automated synchronization between WordPress frontend interfaces and the Zoho Business ecosystem, employing SQL and API integrations to ensure seamless data mapping for lead generation.',
                'Data-Driven Platform Development: Managed feature deployment and data architecture for specialized educational platforms, ensuring all system capabilities strictly complied with the regulatory standards of third-party financial and government institutions.',
                "System Design & Technical Strategy: Developed and executed comprehensive technical strategies and business plans, successfully aligning the company's CRM infrastructure with both organizational goals and the specific operational requirements of our clients.",
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
              "Managing AktivAsia's entire Zoho CRM ecosystem while leading an AI-first website migration, automated training lifecycles, and real-time country dashboards for a global climate-justice non-profit.",
            tags: ['AI-First Website and Donation Page Revamp', 'Zoho CRM Data Management', 'Automated Training Journeys', 'Social Media Management'],
            spotlight: {
              paragraph:
                "AktivAsia is a leading non-profit training organization supporting activists and grassroots movements on the frontlines of climate justice and the energy transition. As the lead for digital initiatives, I manage the organization's entire Zoho CRM ecosystem, ensuring the seamless integration and accuracy of all training data, participant records, and operational forms.",
              stats: [
                { value: '8 Years', label: 'Training Data Managed' },
                { value: 'AI-First', label: 'CMS Migration' },
                { value: 'End-to-End', label: 'Training Automation' },
                { value: 'Real-Time', label: 'Country Dashboards' },
              ],
              contributions: [
                'Spearheaded Website Migration: Transitioned the organizational website from a standard Wix CMS to an AI-first Fly Directus CMS, automating the workflow from training page creation to live content publishing (aktivasia.org).',
                'Optimized Historical Data: Managed and structured 8 years of comprehensive training and participant records within the Zoho ecosystem to ensure data integrity and accessibility.',
                "Directed Social Media Operations: Overseen the organization's social media presence, managing digital strategy and conducting quality assurance on assets produced by third-party partner, ActionLabs.",
                'Automated End-to-End Training Lifecycles: Architected an automated workflow for the complete training journey, streamlining processes from initial planning and creation through to 6-month and 12-month post-training evaluations.',
                "Launched Digital Fundraising Platform: Configured and deployed a Raisely donation page tailored for the team, successfully facilitating campaigns that raised significant funding for the organization's grassroots work.",
                'Developed Real-Time Country Dashboards: Engineered custom HTML/CSS portal pages and integrated the Zoho Public API, empowering individual country teams with live, real-time data visualization and localized operational insights.',
              ],
            },
          },
          {
            id: 'thepacklabs',
            dateRange: '2026–Present',
            bucket: '2023-Present',
            title: 'API Integrator Specialist',
            company: 'The Pack Labs',
            logo: '/logos/thepacklabs.jpg',
            initial: 'TPL',
            color: '#3D3D3D',
            current: true,
            summary:
              "Engineered The Pack Labs' Zoey-to-BigQuery ETL pipeline from the ground up — a 17-table warehouse and automated sanity-check system that cut manual data work by ~60%.",
            tags: ['Zoey API → BigQuery ETL Pipeline', 'BigQuery Schema & Table Architecture (17 Tables / 4 Views)', 'Automated Data Sanity Monitoring', 'Cloud Run / Cloud Scheduler Orchestration'],
            spotlight: {
              paragraph:
                'The Pack Labs is a California-based creative studio and lifestyle powerhouse that specializes in the research, development, and distribution of hemp-derived cannabinoids and wellness products. They are the driving creative and operational force behind popular brands like Delta Munchies and Imperial Extraction. As their part-time API Integrator Specialist, I engineered the organization\'s Zoey-to-BigQuery data pipeline from the ground up — cutting manual data-handling workload by ~60% through full ETL automation.',
              stats: [
                { value: '~60%', label: 'Manual Workload Cut' },
                { value: '17 Tables', label: 'BigQuery Warehouse' },
                { value: '~6,900 Lines', label: 'Python & SQL' },
                { value: '900x+', label: 'Bugs Caught Pre-Prod' },
              ],
              contributions: [
                "Delivered ~60% Manual Workload Reduction: Replaced manual data pulls, spreadsheet reconciliation, and report assembly with a fully automated, incremental ETL sync running on an hourly refresh cycle — eliminating the bulk of the team's recurring manual data work.",
                'Architected the Full BigQuery Data Warehouse: Designed and built 17 production BigQuery tables (orders, invoices, bills, shipments, customers, addresses, items) and 4 Looker Studio-facing reporting views, establishing the dedup, delta-load, and JSON-blob parsing strategies that still govern the schema today.',
                'Engineered the End-to-End ETL Pipeline: Designed and wrote ~6,900 lines of Python and SQL powering a 9-stage, dependency-ordered pipeline syncing Zoey order, invoice, billing, and shipment data into BigQuery.',
                'Built Automated Data Integrity Monitoring: Designed and deployed a daily sanity-check system (Cloud Run Job + Cloud Scheduler) checking row-duplication ratios, view NULL-rate drift, and job health against learned baselines — catching multiple production data bugs (900x+ row-count bloats) before they reached stakeholders.',
                'Owned End-to-End Integrations: Connected and maintained OAuth2-authenticated integrations across Zoey, Google BigQuery, Cloud Run, Cloud Scheduler, and Gmail API for automated reporting.',
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
              "Founded and operate Cup N' Grind, a San Jose, Occidental Mindoro coffee shop building a youth-led community around sustainability and local culture.",
            tags: ['Business Ownership', 'Community Building', 'Youth-Led Programs', 'Environmental Sustainability'],
            spotlight: {
              paragraph:
                "Cup N' Grind is a local coffee shop I founded in San Jose, Occidental Mindoro, with the mission of enriching the local culture and fostering a strong, community-based network in the province through the shared experience of coffee.",
              stats: [
                { value: 'Founder', label: 'Business Owner' },
                { value: 'San Jose', label: 'Occidental Mindoro' },
                { value: 'Youth-Led', label: 'Community Program' },
                { value: 'Sustainability', label: 'Core Focus' },
              ],
              contributions: [
                'End-to-End Business Operations: Founded and currently manage the coffee shop, overseeing everything from the initial conceptualization to daily business execution and management.',
                'Menu & Product Development: Formulated an innovative, sustainability-conscious flavor menu that introduces unique profiles to the local market.',
                'Community & Youth Engagement: Established and actively lead a youth-centric community program focused on environmental sustainability and cultural enrichment within the province.',
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

  // ─── Token Dashboard (homepage section) ───────────────────────
  tokenDashboard: {
    sectionLabel: 'Token Usage',
    heading: 'AI Model Dashboard',
    subheading: 'Real usage data across the AI models powering my workflows.',
    kpis: {
      totalTokensMonth: '2.1M',
      modelsActive: '7',
      avgCostPerQuery: '~$0.002',
      topModel: 'Ollama Cloud',
      costPerModel: '~$4.80',
      costPerAgent: '~$1.15',
    },
    models: [
      {
        id: 'openclaw',
        name: 'OpenClaw',
        color: '#14B8A6',
        tokensThisMonth: 320000,
        tokensDisplay: '320K',
        costDisplay: '~$0.96',
        status: 'active',
      },
      {
        id: 'claude',
        name: 'Claude',
        color: '#D97757',
        tokensThisMonth: 450000,
        tokensDisplay: '450K',
        costDisplay: '~$1.35',
        status: 'active',
      },
      {
        id: 'deepseek',
        name: 'DeepSeek',
        color: '#4D6BFE',
        tokensThisMonth: 280000,
        tokensDisplay: '280K',
        costDisplay: '~$0.42',
        status: 'active',
      },
      {
        id: 'ollama-cloud',
        name: 'Ollama Cloud',
        color: '#F5E6D3',
        tokensThisMonth: 335000,
        tokensDisplay: '335K',
        costDisplay: '~$1.01',
        status: 'active',
        agents: [
          { name: 'analyst',   model: 'deepseek-v4-pro', tokens: 50000,  cost: '~$0.15' },
          { name: 'ux',        model: 'glm-5.2',          tokens: 30000,  cost: '~$0.09' },
          { name: 'brand',     model: 'kimi-k2.7',        tokens: 20000,  cost: '~$0.06' },
          { name: 'architect', model: 'deepseek-v4-pro',  tokens: 40000,  cost: '~$0.12' },
          { name: 'dev',       model: 'qwen3-coder',      tokens: 120000, cost: '~$0.36' },
          { name: 'qa',        model: 'gemini-3-flash',   tokens: 25000,  cost: '~$0.08' },
          { name: 'devops',    model: 'deepseek-v4-pro',  tokens: 35000,  cost: '~$0.11' },
          { name: 'pm',        model: 'glm-5.2',          tokens: 15000,  cost: '~$0.05' },
        ],
      },
    ],
    distributionLabel: '{total} total tokens this month',
    insights: [
      { type: 'observation', text: 'Ollama Cloud runs 8 TWC agents across 5 different underlying models — deepseek-v4-pro, glm-5.2, kimi-k2.7, qwen3-coder, and gemini-3-flash.' },
      { type: 'observation', text: 'The dev agent (qwen3-coder) consumes the most tokens on Ollama Cloud at 120K/month — roughly 36% of the platform\'s total.' },
      { type: 'observation', text: 'Claude handles the highest single-model volume at 450K tokens, suggesting it\'s the primary model for complex reasoning tasks.' },
      { type: 'takeaway', text: 'DeepSeek delivers the best cost-per-token ratio. Consider routing simpler queries to DeepSeek to reduce overall spend without sacrificing quality.' },
      { type: 'takeaway', text: 'The qa agent on gemini-3-flash is cost-effective. If reliability holds, gemini-3-flash could handle more agent roles to further optimize costs.' },
      { type: 'takeaway', text: 'OpenClaw orchestration at 320K tokens reflects multi-agent coordination overhead. This is expected for agentic workflows and is not an optimization target.' },
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

  // ─── Agentic Workflows (/projects/agentic-workflows page) ──────
  agenticWorkflows: {
    eyebrow: 'Case Study — How I Ship',
    heading: 'Agentic Workflows',
    subheading:
      "Two AI chiefs of staff, six specialist crews, twenty-two roles — the system I actually run to discover, gate, and build my own projects. Not a diagram of an idea: this is the live setup behind this site's own /experience and /skills pages.",
    stats: [
      { value: '22', label: 'Roles' },
      { value: '6', label: 'Crews' },
      { value: '2', label: 'Systems' },
      { value: '10', label: 'Approval Gates' },
    ],
    systems: [
      {
        id: 'friday',
        name: 'Friday',
        tagline: 'Chief of staff, OpenClaw',
        blurb:
          'Runs six real workstreams and orchestrates two teams of her own underneath — every role tuned to a specific model rather than one generalist doing everything.',
        workstreams: [
          { label: 'Technology Enablement', detail: 'Insurance program launches, PM/SDLC work' },
          { label: 'Digital Projects', detail: "An NGO's CRM, forms, and workflow automation" },
          { label: 'Data Integration', detail: 'A data pipeline into a shared warehouse' },
          { label: 'Freelance Research', detail: 'PhD-rigor research work, development focus' },
          { label: 'Personal Projects', detail: 'Where the build and discovery teams live' },
          { label: 'Personal Assistant', detail: 'Admin, travel, reminders' },
        ],
      },
      {
        id: 'darkling',
        name: 'Darkling',
        tagline: 'Engineering counterpart, Claude Code',
        blurb:
          'Lives where Friday’s own team can’t reach — no local file access there — so this is the one that actually writes and debugs code. Every role mixes Claude Sonnet and Haiku by how judgment-heavy the work is, since this side has no cross-role budget constraint to design around.',
      },
    ],
    pipeline: {
      label: 'The build pipeline',
      note:
        'Every project — including this website — moves through the same sequence: requirements first, design and architecture next, then build, test, and go-live. Four hard-gate checkpoints need explicit sign-off before the pipeline advances past them; the rest post a summary and proceed unless overridden.',
      steps: [
        { id: 'analyst', label: 'Analyst', detail: 'Requirements', gate: 'hard' },
        { id: 'ux', label: 'UX', detail: 'Wireframes' },
        { id: 'brand', label: 'Brand', detail: 'Design system' },
        { id: 'architect', label: 'Architect', detail: 'Technical design', gate: 'hard' },
        { id: 'dev', label: 'Dev', detail: 'Build' },
        { id: 'qa', label: 'QA', detail: 'Pass / fail', gate: 'hard' },
        { id: 'devops', label: 'DevOps', detail: 'Go-live', gate: 'hard' },
      ],
      gateChecks: [
        { phase: 'Requirements', checks: 'Scope complete, boundaries explicit, nothing ambiguous left unflagged.' },
        { phase: 'Architecture', checks: 'Stack decision with tradeoffs, full schema/API contract — the hard-decisions gate.' },
        { phase: 'Test / UAT', checks: 'Pass/fail verdict, no open blocking defects — QA owns this call.' },
        { phase: 'Go-live', checks: 'Backup, restore, and rollback all tested, secrets externalized — the literal launch decision.' },
      ],
    },
    crews: [
      {
        id: 'twc',
        system: 'friday',
        name: 'Workshop Crew',
        blurb: 'Friday’s eight-specialist build team — the original shape everything else on this page was ported from.',
        roster: [
          { role: 'Business Analyst', personality: 'INTP · Logician', model: 'deepseek-v4-pro' },
          { role: 'UX Designer', personality: 'ENFP · Campaigner', model: 'glm-5.2' },
          { role: 'Brand Designer', personality: 'ISFP · Adventurer', model: 'glm-5.2 + image-gen' },
          { role: 'Solutions Architect', personality: 'INTJ · Architect', model: 'deepseek-v4-pro' },
          { role: 'Full-Stack Developer', personality: 'ISTP · Virtuoso', model: 'deepseek-v4-pro' },
          { role: 'QA Engineer', personality: 'ISTJ · Inspector', model: 'kimi-k2.7-code' },
          { role: 'DevOps Engineer', personality: 'ESTJ · Executive', model: 'deepseek-v4-pro' },
          { role: 'Technical PM', personality: 'ISFJ · Defender', model: 'reassignment pending' },
        ],
        pipeline: [
          { id: 'twc-analyst', label: 'Analyst', detail: 'Requirements', gate: 'hard' },
          { id: 'twc-ux', label: 'UX', detail: 'Wireframes' },
          { id: 'twc-brand', label: 'Brand', detail: 'Design system' },
          { id: 'twc-architect', label: 'Architect', detail: 'Technical design', gate: 'hard' },
          { id: 'twc-dev', label: 'Dev', detail: 'Build' },
          { id: 'twc-qa', label: 'QA', detail: 'Pass / fail', gate: 'hard' },
          { id: 'twc-devops', label: 'DevOps', detail: 'Go-live', gate: 'hard' },
        ],
      },
      {
        id: 'studio',
        system: 'friday',
        name: 'Studio',
        blurb: 'Six-agent discovery team that continuously scans shipped work for improvement ideas and feeds sprints to the Workshop Crew.',
        roster: [
          { role: 'Product Owner', personality: 'ENFJ · Protagonist', model: 'deepseek-v4-pro' },
          { role: 'Functional Researcher', personality: 'ENTP · Debater', model: 'glm-5.2' },
          { role: 'Design Researcher', personality: 'INFP · Mediator', model: 'glm-5.2' },
          { role: 'Feasibility Analyst', personality: 'INTP · Logician', model: 'reassignment pending' },
          { role: 'Market Analyst', personality: 'ESTP · Entrepreneur', model: 'glm-5.2' },
          { role: 'Data Analyst', personality: 'ISTJ · Inspector', model: 'deepseek-v4-flash' },
        ],
        pipeline: [
          { id: 'studio-scan', label: 'Scan', detail: '4 researchers, parallel' },
          { id: 'studio-consolidate', label: 'Consolidate', detail: 'PO dedupes + tags' },
          { id: 'studio-review', label: 'Idea Review', detail: 'Sign-off required', gate: 'hard' },
          { id: 'studio-feasibility', label: 'Feasibility', detail: 'Sized vs. codebase' },
          { id: 'studio-sprint', label: 'Sprint', detail: 'Backlog packaging' },
          { id: 'studio-approval', label: 'Approval', detail: 'Sign-off required', gate: 'hard' },
          { id: 'studio-handoff', label: 'Handoff', detail: 'To Workshop Crew' },
        ],
        note:
          'Runs on a standing cron job that continuously scans whichever projects Friday or Darkling has assigned it. Anything it surfaces gets sent to Gino via Telegram for review — nothing reaches the official backlog of user stories the Workshop Crew builds from until he approves it.',
      },
      {
        id: 'forge',
        system: 'darkling',
        name: 'The Forge',
        blurb: 'Darkling’s build pipeline — same shape as the Workshop Crew, translated to a different toolchain. Built this site’s /experience and /skills pages.',
        roster: [
          { role: 'Analyst', personality: 'INTP · Logician', model: 'Claude Sonnet' },
          { role: 'UX', personality: 'ENFP · Campaigner', model: 'Claude Sonnet' },
          { role: 'Brand', personality: 'ISFP · Adventurer', model: 'Claude Sonnet' },
          { role: 'Architect', personality: 'INTJ · Architect', model: 'Claude Sonnet' },
          { role: 'Dev', personality: 'ISTP · Virtuoso', model: 'Claude Sonnet' },
          { role: 'QA', personality: 'ISTJ · Inspector', model: 'Claude Haiku' },
          { role: 'DevOps', personality: 'ESTJ · Executive', model: 'Claude Haiku' },
          { role: 'PM', personality: 'ISFJ · Defender', model: 'Claude Haiku' },
        ],
        pipeline: [
          { id: 'forge-analyst', label: 'Analyst', detail: 'Requirements', gate: 'hard' },
          { id: 'forge-ux', label: 'UX', detail: 'Wireframes' },
          { id: 'forge-brand', label: 'Brand', detail: 'Design system' },
          { id: 'forge-architect', label: 'Architect', detail: 'Technical design', gate: 'hard' },
          { id: 'forge-dev', label: 'Dev', detail: 'Build' },
          { id: 'forge-qa', label: 'QA', detail: 'Pass / fail', gate: 'hard' },
          { id: 'forge-devops', label: 'DevOps', detail: 'Go-live', gate: 'hard' },
        ],
      },
      {
        id: 'recon',
        system: 'darkling',
        name: 'Recon',
        blurb: 'Darkling’s discovery team, on-demand rather than scheduled — a cycle only starts when there’s something worth scanning for.',
        roster: [
          { role: 'PO', personality: 'ENFJ · Protagonist', model: 'Claude Sonnet' },
          { role: 'Functional', personality: 'ENTP · Debater', model: 'Claude Sonnet' },
          { role: 'Design', personality: 'INFP · Mediator', model: 'Claude Sonnet' },
          { role: 'Feasibility', personality: 'INTP · Logician', model: 'Claude Sonnet' },
          { role: 'Market', personality: 'ESTP · Entrepreneur', model: 'Claude Haiku' },
          { role: 'Data', personality: 'ISTJ · Inspector', model: 'Claude Haiku' },
        ],
        pipeline: [
          { id: 'recon-scan', label: 'Scan', detail: '4 researchers, parallel' },
          { id: 'recon-consolidate', label: 'Consolidate', detail: 'PO dedupes + tags' },
          { id: 'recon-review', label: 'Idea Review', detail: 'Sign-off required', gate: 'hard' },
          { id: 'recon-feasibility', label: 'Feasibility', detail: 'Sized vs. codebase' },
          { id: 'recon-sprint', label: 'Sprint', detail: 'Backlog packaging' },
          { id: 'recon-approval', label: 'Approval', detail: 'Sign-off required', gate: 'hard' },
          { id: 'recon-handoff', label: 'Handoff', detail: 'To The Forge' },
        ],
      },
      {
        id: 'nightwatch',
        system: 'darkling',
        name: 'Nightwatch',
        blurb: 'The one crew that isn’t a general-purpose port — built for a single production data pipeline that refreshes roughly every hour.',
        roster: [
          { role: 'Investigator', personality: 'ISTJ · Logistician', model: 'Claude Sonnet' },
          { role: 'Architect', personality: 'INTJ · Architect', model: 'Claude Sonnet' },
          { role: 'Integrator', personality: 'ISTP · Virtuoso', model: 'Claude Sonnet' },
          { role: 'Sentinel', personality: 'ESTJ · Executive', model: 'Claude Haiku' },
          { role: 'Operator', personality: 'ESTP · Entrepreneur', model: 'Claude Haiku' },
        ],
        pipeline: [
          { id: 'investigator', label: 'Investigator', detail: 'Root cause' },
          { id: 'nw-architect', label: 'Architect', detail: 'If contract changes' },
          { id: 'integrator', label: 'Integrator', detail: 'Implement + verify' },
          { id: 'sentinel', label: 'Sentinel', detail: 'Verify against real data' },
          { id: 'operator', label: 'Operator', detail: 'Deploy' },
        ],
      },
      {
        id: 'general',
        system: 'darkling',
        name: 'General Crew',
        blurb: 'Two roles with no project tie, available anywhere: turning a fuzzy idea into real requirements, and keeping every project’s record straight.',
        roster: [
          { role: 'Analyst', personality: 'INTP · Logician', model: 'Claude Sonnet' },
          { role: 'Chronicler', personality: 'ISFJ · Defender', model: 'Claude Haiku' },
        ],
        note:
          'Chronicler also runs on a standing cron job, logging every change across the project folders automatically — a daily coding journal Gino gets without having to write it himself.',
      },
    ],
    modelNote: {
      heading: 'On model assignments',
      body:
        'Every role runs a model matched to its job, not one model doing everything. On Friday’s side that means reasoning-heavy roles get slower, more deliberate models while prose and design roles get faster generalist ones; on Darkling’s side it means every crew mixes Claude Sonnet for the judgment-heavy roles with Claude Haiku for the more mechanical ones. Cloud providers retire model versions without much warning, which forces reassignments from time to time; every reassignment gets re-verified against a real run before it’s trusted, because a model’s own report of "done" has proven unreliable on its own.',
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Gideon Noel S. Valera · Metro Manila, Philippines`,
  },
};
