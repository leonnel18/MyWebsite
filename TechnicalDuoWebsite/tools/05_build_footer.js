/**
 * 05_build_footer.js
 * Phase 4 — Step 5: Social Proof, Tech Stack & Footer
 * Writes: LogoCloud.tsx, TechStack.tsx, Footer.tsx, updates page.tsx, progress.md, prompt_ledger.md
 */

const fs   = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC  = path.join(ROOT, 'src');
const APP  = path.join(SRC, 'app');
const COMP = path.join(SRC, 'components');
const TMP  = path.join(ROOT, '.tmp');

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✔ wrote ${path.relative(ROOT, filePath)}`);
}

// ── LogoCloud.tsx ─────────────────────────────────────────────────────────────
write(path.join(COMP, 'LogoCloud.tsx'), `'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import content from '@/data/content.json';

const { trusted_by } = content.content;

export default function LogoCloud() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="py-20 px-6 bg-cream-dark/40 border-y border-ink/[0.06]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-code text-xs text-ink opacity-35 tracking-[0.25em] uppercase">
            Trusted by teams at
          </span>
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trusted_by.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              className="group flex items-center justify-center px-6 py-5 rounded-xl border border-ink/[0.06] bg-cream hover:border-terracotta/30 hover:bg-cream transition-all duration-200 cursor-default"
            >
              <span className="font-display text-sm font-medium text-ink opacity-40 group-hover:opacity-80 group-hover:text-terracotta text-center transition-all duration-200">
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

// ── TechStack.tsx ─────────────────────────────────────────────────────────────
write(path.join(COMP, 'TechStack.tsx'), `'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import content from '@/data/content.json';

const { tech_stack } = content.content;

const categoryColors: Record<string, string> = {
  Frontend:        'text-terracotta border-terracotta/30 bg-terracotta/5',
  Backend:         'text-sage border-sage/30 bg-sage/5',
  eCommerce:       'text-terracotta border-terracotta/30 bg-terracotta/5',
  Automation:      'text-sage border-sage/30 bg-sage/5',
  'Cloud & DevOps':'text-terracotta border-terracotta/30 bg-terracotta/5',
  'PM & Design':   'text-sage border-sage/30 bg-sage/5',
};

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = tech_stack.map((c) => c.category);

  return (
    <section id="stack" ref={ref} className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-terracotta" />
            <span className="font-code text-xs text-terracotta tracking-widest uppercase">
              Our toolkit
            </span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-800 text-ink leading-tight">
            Tech Stack
          </h2>
          <p className="mt-3 text-ink opacity-55 max-w-lg font-light leading-relaxed">
            Battle-tested tools across the full delivery spectrum.
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={\`font-code text-xs px-4 py-2 rounded-full border transition-all duration-200 \${
              activeCategory === null
                ? 'bg-ink text-cream border-ink'
                : 'text-ink/50 border-ink/10 hover:border-ink/30'
            }\`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={\`font-code text-xs px-4 py-2 rounded-full border transition-all duration-200 \${
                activeCategory === cat
                  ? 'bg-terracotta text-cream border-terracotta'
                  : 'text-ink/50 border-ink/10 hover:border-terracotta/40'
              }\`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Tech grid by category */}
        <div className="space-y-8">
          {tech_stack
            .filter((cat) => activeCategory === null || cat.category === activeCategory)
            .map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + ci * 0.08, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-code text-xs text-ink opacity-35 tracking-widest uppercase">
                    {cat.category}
                  </span>
                  <div className="flex-1 h-px bg-ink/[0.06]" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2 + ci * 0.08 + ii * 0.04, duration: 0.3 }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                      className={\`inline-flex items-center font-code text-xs px-3.5 py-2 rounded-lg border \${
                        categoryColors[cat.category] ?? 'text-ink/60 border-ink/10 bg-transparent'
                      }\`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
`);

// ── Footer.tsx ────────────────────────────────────────────────────────────────
write(path.join(COMP, 'Footer.tsx'), `'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import content from '@/data/content.json';

const { footer } = content.content;

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <footer ref={ref} className="relative overflow-hidden bg-ink text-cream">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #C1694F 50%, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #C1694F, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="font-code text-xs text-cream/30 tracking-widest uppercase mb-6">
            Ready when you are
          </p>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-800 leading-tight mb-8 max-w-2xl mx-auto">
            {footer.cta_headline.split(' ').map((word, i) => (
              <span
                key={i}
                className={
                  word === 'brilliantly' || word === 'efficient?' ? 'text-terracotta' : ''
                }
              >
                {word}{' '}
              </span>
            ))}
          </h2>

          <motion.a
            href={footer.cta_href}
            whileHover={{ scale: 1.04, backgroundColor: '#A8583F' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-terracotta text-cream font-display font-semibold text-base px-10 py-4 rounded-full transition-colors duration-200"
          >
            {footer.cta}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-cream/[0.08] mb-12" />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          {/* Left: wordmark + contact */}
          <div>
            <div className="font-mono-display text-lg text-cream mb-2">
              <span className="text-terracotta">td</span>
              <span className="text-cream/30 mx-1 font-code text-sm">/</span>
              <span className="text-cream/60 text-base">duo</span>
            </div>
            <a
              href={\`mailto:\${footer.contact.email}\`}
              className="font-code text-xs text-cream/40 hover:text-terracotta transition-colors duration-200 block"
            >
              {footer.contact.email}
            </a>
            <span className="font-code text-xs text-cream/25 block mt-1">
              {footer.contact.location}
            </span>
          </div>

          {/* Right: links + copyright */}
          <div className="flex flex-col items-start sm:items-end gap-3">
            <div className="flex gap-5">
              {footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-display text-xs text-cream/40 hover:text-cream transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="font-code text-xs text-cream/20">
              {footer.copyright}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
`);

// ── page.tsx (final) ──────────────────────────────────────────────────────────
write(path.join(APP, 'page.tsx'), `import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
import PipelineStepper from '@/components/PipelineStepper';
import LogoCloud from '@/components/LogoCloud';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Capabilities />
      <PipelineStepper />
      <LogoCloud />
      <TechStack />
      <Footer />
    </main>
  );
}
`);

// ── .tmp log ──────────────────────────────────────────────────────────────────
fs.writeFileSync(path.join(TMP, 'step5_footer.json'), JSON.stringify({
  step: 5,
  status: 'written',
  timestamp: new Date().toISOString(),
  files: [
    'src/components/LogoCloud.tsx',
    'src/components/TechStack.tsx',
    'src/components/Footer.tsx',
    'src/app/page.tsx'
  ]
}, null, 2));

console.log('\n✅ Step 5 complete — LogoCloud, TechStack, Footer written. Final page assembled.');
