/**
 * 03_build_hero.js
 * Phase 4 — Step 3: Core UI — Layout, Navbar, Hero
 * Writes: globals.css (updated fonts), layout.tsx, Navbar.tsx, Hero.tsx, page.tsx
 */

const fs   = require('fs');
const path = require('path');

const ROOT  = path.resolve(__dirname, '..');
const SRC   = path.join(ROOT, 'src');
const APP   = path.join(SRC, 'app');
const COMP  = path.join(SRC, 'components');
const TMP   = path.join(ROOT, '.tmp');

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✔ wrote ${path.relative(ROOT, filePath)}`);
}

// ── globals.css ───────────────────────────────────────────────────────────────
write(path.join(APP, 'globals.css'), `@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Syne+Mono&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --color-cream:       #FAF7F2;
  --color-cream-dark:  #F0EAE0;
  --color-terracotta:  #C1694F;
  --color-terracotta-dk: #A8583F;
  --color-sage:        #7B9E87;
  --color-sage-dk:     #5E8A72;
  --color-ink:         #1C1917;
  --color-ink-muted:   #57534E;
}

html { scroll-behavior: smooth; }

body {
  background-color: var(--color-cream);
  color: var(--color-ink);
  font-family: 'DM Sans', ui-sans-serif, system-ui;
  -webkit-font-smoothing: antialiased;
}

.font-display { font-family: 'Syne', sans-serif; }
.font-mono-display { font-family: 'Syne Mono', monospace; }
.font-code { font-family: 'JetBrains Mono', monospace; }

/* Noise texture overlay for depth */
.noise-overlay {
  position: relative;
}
.noise-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

/* Scrollbar styling */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--color-cream); }
::-webkit-scrollbar-thumb { background: var(--color-terracotta); border-radius: 3px; }
`);

// ── layout.tsx ────────────────────────────────────────────────────────────────
write(path.join(APP, 'layout.tsx'), `import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Technical Duo — Complex Systems, Delivered',
  description: 'Blending deep technical expertise with strategic business insight. eCommerce, API Architecture, TPM & ADLC specialists.',
  openGraph: {
    title: 'Technical Duo — Complex Systems, Delivered',
    description: 'Blending deep technical expertise with strategic business insight.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-cream antialiased">{children}</body>
    </html>
  );
}
`);

// ── Navbar.tsx ────────────────────────────────────────────────────────────────
write(path.join(COMP, 'Navbar.tsx'), `'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import content from '@/data/content.json';

export default function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity  = useTransform(scrollY, [0, 80], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.12]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: \`rgba(250, 247, 242, \${bgOpacity.get()})\` }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-terracotta"
        style={{ opacity: borderOpacity }}
      />
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-2"
        >
          <span className="font-mono-display text-lg font-normal tracking-tight text-ink">
            <span className="text-terracotta">td</span>
            <span className="text-ink-500 mx-1 font-code text-sm opacity-40">/</span>
            <span className="text-ink opacity-70 text-base">duo</span>
          </span>
        </motion.div>

        {/* Nav items */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="flex items-center gap-8"
        >
          {['Work', 'Services', 'Stack'].map((item) => (
            <a
              key={item}
              href={\`#\${item.toLowerCase()}\`}
              className="font-display text-sm font-medium text-ink opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              {item}
            </a>
          ))}
          <motion.a
            href={content.content.footer.cta_href}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="font-display text-sm font-semibold bg-terracotta text-cream px-5 py-2.5 rounded-full hover:bg-terracotta-dark transition-colors duration-200"
          >
            {content.content.footer.cta}
          </motion.a>
        </motion.div>
      </nav>
    </motion.header>
  );
}
`);

// ── Hero.tsx ──────────────────────────────────────────────────────────────────
write(path.join(COMP, 'Hero.tsx'), `'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import content from '@/data/content.json';

const { hero } = content.content;

// SVG circuit diagram paths for pathLength animation
const circuitPaths = [
  // Main horizontal spine
  "M 40 180 L 140 180 L 140 120 L 260 120 L 260 180 L 360 180",
  // Branch up-left
  "M 140 180 L 140 240 L 200 240 L 200 300",
  // Branch up-right
  "M 260 120 L 260 60 L 340 60 L 340 30",
  // Node connections
  "M 200 180 L 200 120",
  "M 300 180 L 300 240 L 360 240",
  // Small detail lines
  "M 160 120 L 160 90 L 220 90",
  "M 320 60 L 320 100 L 380 100 L 380 140",
];

const nodePositions = [
  { cx: 140, cy: 180, r: 5 },
  { cx: 260, cy: 180, r: 5 },
  { cx: 260, cy: 120, r: 5 },
  { cx: 200, cy: 240, r: 4 },
  { cx: 340, cy: 60,  r: 4 },
  { cx: 200, cy: 120, r: 3 },
  { cx: 300, cy: 240, r: 3 },
];

function CircuitDiagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="relative w-full h-full">
      <svg
        viewBox="0 0 420 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Background grid dots */}
        <defs>
          <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="#C1694F" opacity="0.15" />
          </pattern>
        </defs>
        <rect width="420" height="320" fill="url(#grid)" />

        {/* Animated circuit paths */}
        {circuitPaths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke={i % 2 === 0 ? '#C1694F' : '#7B9E87'}
            strokeWidth={i < 3 ? 2 : 1.5}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: i < 3 ? 0.8 : 0.5 } : {}}
            transition={{
              pathLength: { duration: 1.2 + i * 0.2, ease: 'easeInOut', delay: i * 0.15 },
              opacity:    { duration: 0.3, delay: i * 0.15 },
            }}
          />
        ))}

        {/* Animated nodes */}
        {nodePositions.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={i % 2 === 0 ? '#C1694F' : '#7B9E87'}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.3, type: 'spring', stiffness: 200 }}
          />
        ))}

        {/* Pulsing active node */}
        <motion.circle
          cx={260}
          cy={120}
          r={12}
          fill="none"
          stroke="#C1694F"
          strokeWidth={1.5}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? {
            scale:   [1, 1.8, 1],
            opacity: [0.6, 0, 0.6],
          } : {}}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
      </svg>
    </div>
  );
}

// Stagger container for text reveals
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const lineVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  // Split headline into words for stagger
  const words = hero.title.split(' ');

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cream noise-overlay flex items-center overflow-hidden pt-20"
    >
      {/* Decorative background blobs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #C1694F 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #7B9E87 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Text column ── */}
          <div>
            {/* Label chip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="font-code text-xs text-terracotta tracking-widest uppercase">
                Available for projects
              </span>
            </motion.div>

            {/* Headline — word-by-word stagger */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-[clamp(2.8rem,6vw,5rem)] font-800 leading-[1.0] tracking-tight text-ink mb-6"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={lineVariants}
                  className="inline-block mr-[0.2em]"
                  style={{
                    color: word === 'TECHNICAL' || word === 'COMPLEX'
                      ? 'var(--color-terracotta)'
                      : 'inherit',
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-16 bg-terracotta mb-6"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-[1.1rem] leading-relaxed text-ink opacity-65 max-w-md mb-10 font-light"
            >
              {hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href={hero.cta_href}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="font-display font-semibold text-sm bg-ink text-cream px-7 py-3.5 rounded-full hover:bg-terracotta transition-colors duration-300"
              >
                {hero.cta}
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ x: 4 }}
                className="font-display text-sm font-medium text-ink opacity-60 hover:opacity-100 flex items-center gap-2 transition-all duration-200"
              >
                See our work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </motion.div>

            {/* Stat chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-ink/[0.08]"
            >
              {[
                { value: '8+', label: 'Brands served' },
                { value: '7-step', label: 'Proven pipeline' },
                { value: '4', label: 'Core disciplines' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-terracotta">{stat.value}</div>
                  <div className="font-code text-xs text-ink opacity-50 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Circuit diagram column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative bg-cream-dark/50 rounded-2xl border border-ink/[0.06] p-8 aspect-[4/3] overflow-hidden">
              {/* Corner tag */}
              <div className="absolute top-4 left-4 font-code text-xs text-ink opacity-25">
                ADLC_FLOW.svg
              </div>
              <div className="absolute top-4 right-4 flex gap-1.5">
                {['bg-terracotta', 'bg-sage', 'bg-ink/20'].map((c, i) => (
                  <div key={i} className={\`w-2.5 h-2.5 rounded-full \${c} opacity-60\`} />
                ))}
              </div>
              <CircuitDiagram />
            </div>

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-terracotta text-cream rounded-xl px-4 py-3 shadow-lg"
            >
              <div className="font-code text-xs opacity-80 mb-0.5">STATUS</div>
              <div className="font-display text-sm font-semibold">System Operational</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-code text-xs text-ink opacity-30 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-ink/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
`);

// ── page.tsx ──────────────────────────────────────────────────────────────────
write(path.join(APP, 'page.tsx'), `import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
`);

// ── .tmp log ──────────────────────────────────────────────────────────────────
fs.writeFileSync(path.join(TMP, 'step3_hero.json'), JSON.stringify({
  step: 3,
  status: 'written',
  timestamp: new Date().toISOString(),
  files: ['src/app/globals.css', 'src/app/layout.tsx', 'src/components/Navbar.tsx', 'src/components/Hero.tsx', 'src/app/page.tsx']
}, null, 2));

console.log('\n✅ Step 3 complete — layout, Navbar, and Hero components written.');
