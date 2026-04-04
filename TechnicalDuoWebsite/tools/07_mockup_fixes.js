/**
 * 07_mockup_fixes.js
 * Patch visual deviations from Stitch AI mockup
 * Run: node tools/07_mockup_fixes.js
 */
const fs   = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC  = path.join(ROOT, 'src');
const APP  = path.join(SRC, 'app');
const COMP = path.join(SRC, 'components');

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  \u2714 ${path.relative(ROOT, filePath)}`);
}

console.log('\n\uD83D\uDD27 07_mockup_fixes \u2014 patching visual deviations\n');

/* ──────────────────────────────────────────────
   1. globals.css  (grid 28→30px)
   ────────────────────────────────────────────── */
write(path.join(APP, 'globals.css'), `@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --purple: #6B5CE7;
  --teal:   #00C2B8;
  --orange: #F97316;
  --dark:   #0F0F1A;
  --ink:    #111111;
}

html { scroll-behavior: smooth; }

body {
  background-color: #ffffff;
  background-image:
    linear-gradient(#6B5CE712 1px, transparent 1px),
    linear-gradient(90deg, #6B5CE712 1px, transparent 1px);
  background-size: 30px 30px;
  color: var(--ink);
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.brutalist-card {
  border: 2px solid #111111;
  border-radius: 4px;
  box-shadow: 4px 4px 0 #111111;
}
.brutalist-card:hover {
  box-shadow: 6px 6px 0 #111111;
}
.brutalist-btn {
  border: 2px solid #111111;
  border-radius: 4px;
  box-shadow: 3px 3px 0 #111111;
  transition: box-shadow 0.15s;
}
.brutalist-btn:hover {
  box-shadow: 5px 5px 0 #111111;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #fff; }
::-webkit-scrollbar-thumb { background: var(--purple); border-radius: 3px; }
`);

/* ──────────────────────────────────────────────
   2. content.json  (14 brands, +Anthropic)
   ────────────────────────────────────────────── */
write(path.join(SRC, 'data', 'content.json'), JSON.stringify({
  content: {
    hero: {
      title: "A TECHNICAL DUO FOR COMPLEX SYSTEMS",
      subtitle: "Blending deep technical expertise with strategic business insight to unblock organisational potential and drive clarity.",
      cta: "Start a Conversation",
      cta_href: "mailto:gideon.valera@gmail.com"
    },
    capabilities: [
      { id: "ecomm",   title: "eCommerce Ecosystems", desc: "End-to-end Magento, Drupal, and WordPress builds \u2014 from system architecture to checkout optimisation and third-party integrations.", icon: "ecommerce" },
      { id: "data",    title: "Full-Stack Data Flow",  desc: "Optimised RESTful API design, JSON/XML payload engineering, and data-retrieval pipelines that eliminate bottlenecks at every layer.", icon: "dataflow" },
      { id: "scripts", title: "Custom Scripts & ADLC",  desc: "VBA automation, Python utilities, and AI-driven development life-cycle tooling that cuts delivery cycles.", icon: "scripts" },
      { id: "tpm",     title: "TPM & Consultancy",      desc: "Stakeholder management, digital roadmap scoping, and strategic technology consulting.", icon: "tpm" }
    ],
    pipeline: [
      { step: "01", label: "Discovery & Strategy",           desc: "Identify pain points & business goals. Define roadmap & approach." },
      { step: "02", label: "Roadmap & Refinement",           desc: "Detailed project scope & technical requirements." },
      { step: "03", label: "Architecture & Scalability",     desc: "Design scalable, robust system structure." },
      { step: "04", label: "Technical Build & Development",  desc: "Implement best practices & high-speed coding." },
      { step: "05", label: "Deployment & Integration",       desc: "Smooth launch, seamless system integration." },
      { step: "06", label: "Optimisation & Performance",     desc: "Monitor, analyse & enhance system efficiency." },
      { step: "07", label: "Handover & Sustainability",      desc: "Train team & ensure long-term success." }
    ],
    trusted_by: [
      { id: "axa",       name: "AXA Philippines",    accent: "#E31837" },
      { id: "globe",     name: "Globe Group",        accent: "#0072CE" },
      { id: "tpl",       name: "The Pack Labs",      accent: "#111111" },
      { id: "jj",        name: "Johnson & Johnson",  accent: "#CC0000" },
      { id: "leopc",     name: "LeoPC",              accent: "#6B5CE7" },
      { id: "cupngrnd",  name: "Cup n' Grind",       accent: "#F97316" },
      { id: "cosme",     name: "Cosme de net",       accent: "#111111" },
      { id: "aktiv",     name: "AktivAsia",          accent: "#00C2B8" },
      { id: "bdo",       name: "BDO",                accent: "#E31837" },
      { id: "metrobank", name: "Metrobank",          accent: "#003DA5" },
      { id: "pldt",      name: "PLDT",               accent: "#E31837" },
      { id: "smart",     name: "Smart",              accent: "#00C853" },
      { id: "unilab",    name: "UNILAB",             accent: "#003B73" },
      { id: "ayalaland", name: "AyalaLand",          accent: "#006937" }
    ],
    tech_stack: [
      { category: "CMS & Commerce", items: [
        { name: "Magento",     slug: null },
        { name: "Drupal",      slug: "drupal" },
        { name: "WordPress",   slug: "wordpress" },
        { name: "Shopify",     slug: "shopify" },
        { name: "WooCommerce", slug: "woocommerce" }
      ]},
      { category: "Cloud & Data", items: [
        { name: "Google Cloud", slug: "googlecloud" },
        { name: "BigQuery",     slug: "googlebigquery" },
        { name: "Vercel",       slug: "vercel" },
        { name: "Cloudflare",   slug: "cloudflare" },
        { name: "AWS",          slug: null }
      ]},
      { category: "AI & Automation", items: [
        { name: "Gemini",    slug: "googlegemini" },
        { name: "Anthropic", slug: "anthropic" },
        { name: "n8n",       slug: "n8n" },
        { name: "Zapier",    slug: "zapier" }
      ]},
      { category: "Languages & Frameworks", items: [
        { name: "Python",     slug: "python" },
        { name: "JavaScript", slug: "javascript" },
        { name: "React",      slug: "react" },
        { name: "Next.js",    slug: "nextdotjs" },
        { name: "TypeScript", slug: "typescript" },
        { name: "PHP",        slug: "php" }
      ]}
    ],
    footer: {
      cta_headline_1: "READY TO TRANSFORM YOUR SYSTEMS?",
      cta_headline_2: "LET'S TALK.",
      cta: "Start a Conversation",
      cta_href: "mailto:gideon.valera@gmail.com",
      gino:  { linkedin: "#", github: "#" },
      steph: { email: "mailto:gideon.valera@gmail.com", github: "#" },
      copyright: "\u00a9 2026 Gino & Steph Limited Professional Hub. All rights reserved.",
      tagline: "Built with S.L.A.S.T. ADLC Powered"
    }
  }
}, null, 2));

/* ──────────────────────────────────────────────
   3. Navbar.tsx  (black bg, white text, gradient CTA)
   ────────────────────────────────────────────── */
write(path.join(COMP, 'Navbar.tsx'), `'use client';
import { motion } from 'framer-motion';

const links = [
  { label: 'How It Works',       href: '#work' },
  { label: 'Services',           href: '#services' },
  { label: 'Tech Stack',         href: '#stack' },
  { label: "Where We\\'ve Worked", href: '#worked' },
  { label: 'About',              href: '#about' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-display font-black text-lg tracking-tight text-white uppercase"
        >
          Gino &amp; Steph
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden md:flex items-center gap-6"
        >
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="font-display text-xs font-semibold text-white/60 hover:text-white transition-colors duration-200 uppercase tracking-wide">
              {l.label}
            </a>
          ))}
          <motion.a
            href="mailto:gideon.valera@gmail.com"
            whileHover={{ boxShadow: '0 0 20px rgba(107,92,231,0.5)' }}
            className="font-display text-xs font-bold text-white px-5 py-2.5 uppercase tracking-wider"
            style={{ background: 'linear-gradient(135deg, #F97316, #6B5CE7)', border: '2px solid rgba(255,255,255,0.3)', borderRadius: 4 }}
          >
            Connect With Us
          </motion.a>
        </motion.div>
      </nav>
    </header>
  );
}
`);

/* ──────────────────────────────────────────────
   4. Hero.tsx  ("Scroll Down", 14+ brands stat)
   ────────────────────────────────────────────── */
write(path.join(COMP, 'Hero.tsx'), `'use client';
import { motion } from 'framer-motion';
import content from '@/data/content.json';

const { hero } = content.content;
const words = hero.title.split(' ');

const geoShapes = [
  { style: { top: '-12px', right: '-12px', width: 32, height: 32, background: '#6B5CE7', border: '2px solid #111', boxShadow: '3px 3px 0 #111', transform: 'rotate(15deg)' }, delay: 0 },
  { style: { top: '30px',  left: '-16px',  width: 24, height: 24, background: '#00C2B8', border: '2px solid #111', borderRadius: '50%', boxShadow: '2px 2px 0 #111' }, delay: 0.3 },
  { style: { bottom: '20px', right: '-8px', width: 28, height: 28, background: '#F97316', border: '2px solid #111', boxShadow: '2px 2px 0 #111', transform: 'rotate(45deg)' }, delay: 0.6 },
  { style: { bottom: '-10px', left: '10px', width: 22, height: 22, background: 'transparent', border: '2px solid #6B5CE7', transform: 'rotate(30deg)' }, delay: 0.9 },
  { style: { top: '50%', right: '-20px', width: 16, height: 16, background: '#00C2B8', border: '2px solid #111', borderRadius: '50%' }, delay: 1.2 },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left \u2014 text */}
          <div>
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-purple animate-pulse" />
              <span className="font-mono text-xs text-purple tracking-widest uppercase">
                Available for projects
              </span>
            </motion.div>

            {/* Headline stagger */}
            <h1 className="font-display font-black text-[clamp(2.4rem,5.5vw,4.2rem)] uppercase leading-[1.05] tracking-tight text-ink mb-4">
              {words.map((word, i) => (
                <motion.span key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-[0.18em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="h-[3px] w-16 bg-purple mb-6"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="font-display text-base text-ink/60 max-w-md leading-relaxed mb-10"
            >
              {hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <motion.a href={hero.cta_href}
                whileHover={{ boxShadow: '6px 6px 0 #111' }}
                whileTap={{ scale: 0.97 }}
                className="brutalist-btn font-display font-bold text-sm bg-ink text-white px-7 py-3 uppercase tracking-wider"
              >
                Start a Conversation
              </motion.a>
              <motion.a href="#work"
                whileHover={{ x: 4 }}
                className="font-display text-sm font-semibold text-ink/60 hover:text-ink flex items-center gap-2 transition-colors"
              >
                See Our Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.25 }}
              className="flex flex-wrap gap-8 pt-8 border-t-2 border-ink/10"
            >
              {[{ v: '14+', l: 'Brands Served' }, { v: '7-Step', l: 'Pipeline' }, { v: '4', l: 'Disciplines' }].map(s => (
                <div key={s.l}>
                  <div className="font-display font-black text-2xl text-purple">{s.v}</div>
                  <div className="font-mono text-xs text-ink/40 tracking-widest uppercase mt-0.5">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right \u2014 illustration + floating shapes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            {/* Floating geo shapes */}
            {geoShapes.map((shape, i) => (
              <motion.div
                key={i}
                style={{ position: 'absolute', zIndex: 10, ...shape.style }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1, opacity: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  scale:   { duration: 0.3, delay: 1.0 + shape.delay, type: 'spring', stiffness: 200 },
                  opacity: { duration: 0.3, delay: 1.0 + shape.delay },
                  y:       { duration: 3 + i * 0.4, delay: 1.2 + shape.delay, repeat: Infinity, ease: 'easeInOut' },
                }}
              />
            ))}

            {/* Illustration */}
            <div className="relative">
              <img
                src="/assets/hero-illustration.jpeg"
                alt="Gino and Steph \u2014 Technical Duo"
                className="w-full"
                style={{ border: '2px solid #111', borderRadius: 4, boxShadow: '8px 8px 0 #111' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-ink/30 tracking-[0.25em] uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-ink/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
`);

/* ──────────────────────────────────────────────
   5. PipelineStepper.tsx  (white bg, large circles, bordered header)
   ────────────────────────────────────────────── */
write(path.join(COMP, 'PipelineStepper.tsx'), `'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import content from '@/data/content.json';

const { pipeline } = content.content;

const stepIcons: Record<string, string> = {
  '01': '/assets/icons/step-01-discovery.jpeg',
  '02': '/assets/icons/step-02-roadmap.jpeg',
  '03': '/assets/icons/step-03-architecture.jpeg',
  '04': '/assets/icons/step-04-build.jpeg',
  '05': '/assets/icons/step-05-deployment.jpeg',
  '06': '/assets/icons/step-06-optimisation.jpeg',
  '07': '/assets/icons/step-07-handover.jpeg',
};

export default function PipelineStepper() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="work" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading in brutalist box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="brutalist-card bg-white px-8 py-4 mb-16"
          style={{ width: 'fit-content', margin: '0 auto 4rem' }}
        >
          <h2 className="font-display font-black text-2xl uppercase tracking-wider text-ink text-center">
            Our Professional Pipeline
          </h2>
        </motion.div>

        {/* Horizontal scroll wrapper */}
        <div className="overflow-x-auto pb-4">
          <div className="relative" style={{ minWidth: 800 }}>
            {/* SVG connecting line */}
            <svg
              className="absolute"
              style={{ top: 35, left: 35, right: 35, width: 'calc(100% - 70px)', height: 2, overflow: 'visible' }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#6B5CE7" />
                  <stop offset="100%" stopColor="#00C2B8" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 0 1 L 800 1"
                stroke="url(#lineGrad)"
                strokeWidth={2}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.3, ease: 'easeInOut' }}
              />
            </svg>

            {/* Steps */}
            <div className="flex justify-between items-start relative z-10">
              {pipeline.map((step, i) => {
                const isTeal = step.step === '04';
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center group"
                    style={{ width: 110 }}
                  >
                    {/* Circle */}
                    <div
                      className="relative flex items-center justify-center cursor-default"
                      style={{
                        width: 70, height: 70, borderRadius: '50%',
                        background: isTeal ? '#00C2B8' : '#6B5CE7',
                        border: '3px solid #111',
                        boxShadow: '0 0 0 3px ' + (isTeal ? '#00C2B830' : '#6B5CE730'),
                      }}
                    >
                      {/* Number (default) */}
                      <span
                        className="absolute font-mono font-bold text-lg text-white transition-opacity duration-200 group-hover:opacity-0"
                      >
                        {step.step}
                      </span>
                      {/* Icon (on hover) */}
                      <img
                        src={stepIcons[step.step]}
                        alt=""
                        width={40} height={40}
                        className="absolute object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ borderRadius: '50%' }}
                      />
                    </div>

                    {/* Label */}
                    <div
                      className="font-display font-bold text-center mt-3 uppercase text-ink transition-colors duration-200 group-hover:text-purple"
                      style={{ fontSize: 10, letterSpacing: '0.06em', lineHeight: 1.3, maxWidth: 100 }}
                    >
                      {step.label}
                    </div>

                    {/* Description */}
                    <div
                      className="font-display text-center mt-1.5"
                      style={{ fontSize: 9, color: '#666', lineHeight: 1.4, maxWidth: 100 }}
                    >
                      {step.desc}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`);

/* ──────────────────────────────────────────────
   6. TechStack.tsx  (pill-shaped tabs)
   ────────────────────────────────────────────── */
write(path.join(COMP, 'TechStack.tsx'), `'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import content from '@/data/content.json';

const { tech_stack } = content.content;
const SIMPLE_ICONS = 'https://cdn.simpleicons.org';

interface ToolItem { name: string; slug: string | null; }
interface Category { category: string; items: ToolItem[]; }

// Package icon fallback SVG
function PackageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16.5 9.4L7.55 4.24"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/>
    </svg>
  );
}

export default function TechStack() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState<string>('All');

  const categories = ['All', ...(tech_stack as Category[]).map(c => c.category)];

  const filtered: ToolItem[] = active === 'All'
    ? (tech_stack as Category[]).flatMap(c => c.items)
    : ((tech_stack as Category[]).find(c => c.category === active)?.items ?? []);

  return (
    <section id="stack" ref={ref} className="py-24 px-6" style={{ background: '#F8F8FC' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-display font-black text-[clamp(1.8rem,3vw,2.8rem)] uppercase text-ink">
            The Tools That Get Things Done.
          </h2>
          <p className="font-display text-base text-ink/55 mt-2">
            A curated stack built for eCommerce, cloud data, and AI-native workflows.
          </p>
        </motion.div>

        {/* Filter tabs — pill shaped */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05 }}
              onClick={() => setActive(cat)}
              className={\`font-mono text-xs font-medium px-6 py-2 uppercase tracking-wider transition-all duration-200 rounded-full border-2 \${
                active === cat
                  ? 'border-ink bg-ink text-white'
                  : 'border-ink text-ink bg-transparent hover:bg-ink/5'
              }\`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Badge grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            {filtered.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.2 }}
                whileHover={{ y: -2, boxShadow: '3px 3px 0 #6B5CE7' }}
                className="brutalist-card bg-white flex items-center gap-2 px-4 py-2.5"
              >
                {tool.slug
                  ? <img src={\`\${SIMPLE_ICONS}/\${tool.slug}/111111\`} alt={tool.name} width={20} height={20} className="object-contain" />
                  : <PackageIcon />
                }
                <span className="font-mono text-xs font-medium text-ink">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
`);

/* ──────────────────────────────────────────────
   7. LogoCloud.tsx  (6-col grid, bolder names)
   ────────────────────────────────────────────── */
write(path.join(COMP, 'LogoCloud.tsx'), `'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import content from '@/data/content.json';

const { trusted_by } = content.content;

// Building SVG icon (Lucide Building2)
function BuildingIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18"/><path d="M2 22h20"/><path d="M10 7h4"/><path d="M10 11h4"/><path d="M10 15h4"/>
    </svg>
  );
}

export default function LogoCloud() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="worked" ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display font-black text-[clamp(1.8rem,3vw,2.8rem)] uppercase text-ink text-center mb-12"
        >
          Where We&apos;ve Worked
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trusted_by.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center gap-2 px-4 py-5 cursor-default"
              style={{ border: '1px solid #e5e7eb', borderRadius: 4, transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#6B5CE7'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb'; }}
            >
              <BuildingIcon color={brand.accent} />
              <span className="font-display font-black text-xs text-ink text-center leading-snug"
                style={{ fontSize: 12 }}>
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

console.log('\n\u2705 All mockup fixes applied. Run: npm run lint && npm run build\n');
