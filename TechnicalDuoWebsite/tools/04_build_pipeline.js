/**
 * 04_build_pipeline.js
 * Phase 4 — Step 4: Capabilities Matrix & Animated Pipeline Stepper
 * Writes: Capabilities.tsx, PipelineStepper.tsx, updates page.tsx
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

// ── Capabilities.tsx ──────────────────────────────────────────────────────────
write(path.join(COMP, 'Capabilities.tsx'), `'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import content from '@/data/content.json';

const { capabilities } = content.content;

// Icon paths for each capability
const icons: Record<string, React.ReactNode> = {
  store: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  flow: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 3v3m0 12v3M3 12h3m12 0h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5.64 5.64l2.12 2.12m8.49 8.49l2.12 2.12M5.64 18.36l2.12-2.12m8.49-8.49l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  strategy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const cardVariants = {
  hidden:   { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Capabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-terracotta" />
            <span className="font-code text-xs text-terracotta tracking-widest uppercase">
              What we do
            </span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-800 text-ink leading-tight">
            Core Capabilities
          </h2>
          <p className="mt-3 text-ink opacity-55 max-w-xl font-light leading-relaxed">
            Four focused disciplines. Infinite permutations. We work at the intersection of
            architecture, automation, and delivery.
          </p>
        </motion.div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-cream-dark/60 border border-ink/[0.07] rounded-2xl p-8 overflow-hidden cursor-default"
            >
              {/* Hover accent line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-terracotta rounded-full"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.25 }}
                style={{ originY: 0 }}
              />

              {/* Background number watermark */}
              <div className="absolute top-4 right-6 font-mono-display text-6xl font-bold text-ink opacity-[0.04] select-none">
                0{i + 1}
              </div>

              {/* Icon */}
              <div className="mb-5 text-terracotta opacity-80 group-hover:opacity-100 transition-opacity duration-200">
                {icons[cap.icon] ?? icons.code}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-700 text-ink mb-3 group-hover:text-terracotta transition-colors duration-200">
                {cap.title}
              </h3>

              {/* Description */}
              <p className="text-ink opacity-55 text-sm leading-relaxed font-light">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// ── PipelineStepper.tsx ───────────────────────────────────────────────────────
write(path.join(COMP, 'PipelineStepper.tsx'), `'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import content from '@/data/content.json';

const { pipeline } = content.content;

export default function PipelineStepper() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Scroll-linked line draw for the vertical spine
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.4'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, var(--color-cream) 0%, var(--color-cream-dark) 100%)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-20 max-w-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-sage" />
            <span className="font-code text-xs text-sage tracking-widest uppercase">
              How we work
            </span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-800 text-ink leading-tight">
            The ADLC Pipeline
          </h2>
          <p className="mt-3 text-ink opacity-55 font-light leading-relaxed">
            Seven deterministic steps. Zero surprises. Every project moves through
            this proven sequence.
          </p>
        </motion.div>

        {/* Pipeline layout */}
        <div className="relative">

          {/* Scroll-driven vertical spine line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-ink/[0.06] hidden md:block" aria-hidden="true" />
          <motion.div
            className="absolute left-[27px] top-0 w-px bg-terracotta hidden md:block"
            style={{ height: lineHeight }}
            aria-hidden="true"
          />

          {/* Steps */}
          <div className="space-y-8">
            {pipeline.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-8 items-start group"
              >
                {/* Node */}
                <div className="relative flex-shrink-0 mt-1 hidden md:block">
                  <motion.div
                    className="w-[56px] h-[56px] rounded-full border-2 border-ink/10 bg-cream flex items-center justify-center relative z-10"
                    whileHover={{
                      borderColor: 'var(--color-terracotta)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="font-mono-display text-sm font-normal text-ink opacity-40 group-hover:text-terracotta group-hover:opacity-100 transition-all duration-200">
                      {step.step}
                    </span>
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex-1 bg-cream border border-ink/[0.06] rounded-xl p-6 group-hover:border-terracotta/20 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {/* Mobile step number */}
                      <span className="font-code text-xs text-terracotta tracking-widest mb-1 block md:hidden">
                        {step.step}
                      </span>
                      <h3 className="font-display text-lg font-600 text-ink mb-2 group-hover:text-terracotta transition-colors duration-200">
                        {step.label}
                      </h3>
                      <p className="text-ink opacity-55 text-sm leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      className="flex-shrink-0 text-ink opacity-20 group-hover:opacity-60 group-hover:text-terracotta transition-all duration-200 mt-1"
                      whileHover={{ x: 3 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* End node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: pipeline.length * 0.1 + 0.3, duration: 0.4 }}
          className="hidden md:flex items-center gap-4 mt-8 ml-0"
        >
          <div className="w-[56px] h-[56px] rounded-full bg-terracotta flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10l5 5 7-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-display text-base font-semibold text-ink opacity-60">
            Delivered to production
          </span>
        </motion.div>
      </div>
    </section>
  );
}
`);

// ── page.tsx (updated) ────────────────────────────────────────────────────────
write(path.join(APP, 'page.tsx'), `import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
import PipelineStepper from '@/components/PipelineStepper';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Capabilities />
      <PipelineStepper />
    </main>
  );
}
`);

// ── .tmp log ──────────────────────────────────────────────────────────────────
fs.writeFileSync(path.join(TMP, 'step4_pipeline.json'), JSON.stringify({
  step: 4,
  status: 'written',
  timestamp: new Date().toISOString(),
  files: ['src/components/Capabilities.tsx', 'src/components/PipelineStepper.tsx', 'src/app/page.tsx']
}, null, 2));

console.log('\n✅ Step 4 complete — Capabilities matrix and PipelineStepper written.');
