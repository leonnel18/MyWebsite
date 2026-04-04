'use client';
import { motion } from 'framer-motion';
import content from '@/data/content.json';

const { hero } = content.content;

/* ~40 floating shapes — radiating outward from center image */
const geoShapes = [
  /* ── Inner ring (close to image edges) ── */
  { style: { top: '38%', left: '18%', width: 18, height: 18, background: '#6B5CE7', border: '2px solid #111', boxShadow: '2px 2px 0 #111', transform: 'rotate(20deg)' }, delay: 0.1 },
  { style: { top: '35%', right: '18%', width: 16, height: 16, background: '#00C2B8', border: '2px solid #111', borderRadius: '50%', boxShadow: '2px 2px 0 #111' }, delay: 0.15 },
  { style: { top: '42%', left: '20%', width: 14, height: 14, background: '#00C2B8', border: '2px solid #111', borderRadius: '50%' }, delay: 0.2 },
  { style: { top: '45%', right: '20%', width: 16, height: 16, background: '#6B5CE7', border: '2px solid #111', boxShadow: '2px 2px 0 #111', transform: 'rotate(45deg)' }, delay: 0.25 },
  { style: { bottom: '28%', left: '22%', width: 14, height: 14, background: '#F97316', border: '2px solid #111', transform: 'rotate(30deg)' }, delay: 0.3 },
  { style: { bottom: '30%', right: '22%', width: 12, height: 12, background: '#6B5CE7', border: '2px solid #111', borderRadius: '50%' }, delay: 0.35 },

  /* ── Mid ring ── */
  { style: { top: '28%', left: '10%', width: 24, height: 24, background: '#6B5CE7', border: '2px solid #111', boxShadow: '2px 2px 0 #111', transform: 'rotate(15deg)' }, delay: 0.0 },
  { style: { top: '25%', right: '10%', width: 22, height: 22, background: '#00C2B8', border: '2px solid #111', boxShadow: '2px 2px 0 #111', transform: 'rotate(30deg)' }, delay: 0.1 },
  { style: { top: '50%', left: '8%',  width: 20, height: 20, background: 'transparent', border: '2px solid #6B5CE7', transform: 'rotate(45deg)' }, delay: 0.4 },
  { style: { top: '52%', right: '8%', width: 26, height: 26, background: '#00C2B8', border: '2px solid #111', boxShadow: '3px 3px 0 #111', transform: 'rotate(-15deg)' }, delay: 0.2 },
  { style: { top: '55%', left: '12%', width: 18, height: 18, background: '#F97316', border: '2px solid #111', borderRadius: '50%', boxShadow: '2px 2px 0 #111' }, delay: 0.5 },
  { style: { top: '58%', right: '12%', width: 16, height: 16, background: '#6B5CE7', border: '2px solid #111', boxShadow: '2px 2px 0 #111', transform: 'rotate(60deg)' }, delay: 0.55 },
  { style: { bottom: '22%', left: '14%', width: 20, height: 20, background: '#00C2B8', border: '2px solid #111', transform: 'rotate(25deg)', boxShadow: '2px 2px 0 #111' }, delay: 0.6 },
  { style: { bottom: '20%', right: '14%', width: 22, height: 22, background: '#F97316', border: '2px solid #111', boxShadow: '2px 2px 0 #111', transform: 'rotate(45deg)' }, delay: 0.65 },

  /* ── Outer ring (near edges) ── */
  { style: { top: '8%',  left: '3%',  width: 36, height: 36, background: '#6B5CE7', border: '2px solid #111', boxShadow: '3px 3px 0 #111', transform: 'rotate(15deg)' }, delay: 0.0 },
  { style: { top: '12%', left: '8%',  width: 20, height: 20, background: '#6B5CE7', border: '2px solid #111', boxShadow: '2px 2px 0 #111' }, delay: 0.3 },
  { style: { top: '6%',  right: '4%', width: 30, height: 30, background: '#00C2B8', border: '2px solid #111', boxShadow: '3px 3px 0 #111', transform: 'rotate(30deg)' }, delay: 0.15 },
  { style: { top: '14%', right: '2%', width: 18, height: 18, background: '#00C2B8', border: '2px solid #111', borderRadius: '50%', boxShadow: '2px 2px 0 #111' }, delay: 0.5 },
  { style: { top: '20%', left: '1%',  width: 14, height: 14, background: '#F97316', border: '2px solid #111', borderRadius: '50%', boxShadow: '2px 2px 0 #111' }, delay: 0.7 },
  { style: { top: '18%', right: '6%', width: 16, height: 16, background: 'transparent', border: '2px solid #00C2B8', transform: 'rotate(45deg)' }, delay: 0.8 },
  { style: { top: '60%', left: '1%',  width: 28, height: 28, background: '#6B5CE7', border: '2px solid #111', borderRadius: '50%', boxShadow: '3px 3px 0 #111' }, delay: 0.7 },
  { style: { top: '62%', right: '2%', width: 32, height: 32, background: '#00C2B8', border: '2px solid #111', boxShadow: '3px 3px 0 #111', transform: 'rotate(-20deg)' }, delay: 0.4 },
  { style: { top: '70%', left: '4%',  width: 16, height: 16, background: '#F97316', border: '2px solid #111', transform: 'rotate(45deg)', boxShadow: '2px 2px 0 #111' }, delay: 0.9 },
  { style: { top: '72%', right: '5%', width: 20, height: 20, background: '#6B5CE7', border: '2px solid #111', borderRadius: '50%' }, delay: 0.85 },
  { style: { bottom: '12%', left: '2%',  width: 24, height: 24, background: '#F97316', border: '2px solid #111', boxShadow: '2px 2px 0 #111', transform: 'rotate(45deg)' }, delay: 0.6 },
  { style: { bottom: '10%', right: '3%', width: 34, height: 34, background: '#6B5CE7', border: '2px solid #111', boxShadow: '3px 3px 0 #111', transform: 'rotate(20deg)' }, delay: 0.8 },
  { style: { bottom: '6%',  left: '10%', width: 14, height: 14, background: '#00C2B8', border: '2px solid #111', borderRadius: '50%' }, delay: 1.0 },
  { style: { bottom: '8%',  right: '10%', width: 18, height: 18, background: 'transparent', border: '2px solid #F97316', transform: 'rotate(30deg)' }, delay: 1.1 },

  /* ── Far corners (biggest, most distant) ── */
  { style: { top: '3%',  left: '12%', width: 22, height: 22, background: 'transparent', border: '2px solid #6B5CE7', transform: 'rotate(20deg)' }, delay: 0.9 },
  { style: { top: '4%',  right: '12%', width: 20, height: 20, background: '#F97316', border: '2px solid #111', boxShadow: '2px 2px 0 #111', transform: 'rotate(60deg)' }, delay: 0.45 },
  { style: { bottom: '3%', left: '6%', width: 20, height: 20, background: '#6B5CE7', border: '2px solid #111', transform: 'rotate(35deg)', boxShadow: '2px 2px 0 #111' }, delay: 1.2 },
  { style: { bottom: '4%', right: '8%', width: 16, height: 16, background: '#00C2B8', border: '2px solid #111', borderRadius: '50%', boxShadow: '2px 2px 0 #111' }, delay: 1.15 },
  { style: { top: '30%', left: '0%',  width: 12, height: 12, background: '#F97316', border: '2px solid #111', borderRadius: '50%' }, delay: 0.75 },
  { style: { top: '32%', right: '0%', width: 14, height: 14, background: '#6B5CE7', border: '2px solid #111', transform: 'rotate(45deg)', boxShadow: '2px 2px 0 #111' }, delay: 0.6 },
  { style: { bottom: '18%', left: '0%', width: 18, height: 18, background: '#00C2B8', border: '2px solid #111', transform: 'rotate(-10deg)', boxShadow: '2px 2px 0 #111' }, delay: 0.95 },
  { style: { bottom: '16%', right: '0%', width: 22, height: 22, background: '#F97316', border: '2px solid #111', borderRadius: '50%', boxShadow: '2px 2px 0 #111' }, delay: 0.5 },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Floating geo shapes — radiating from center image outward */}
      {geoShapes.map((shape, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', zIndex: 1, ...shape.style }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1, opacity: 1,
            y: [0, -12, 0],
          }}
          transition={{
            scale:   { duration: 0.3, delay: 1.0 + shape.delay, type: 'spring', stiffness: 200 },
            opacity: { duration: 0.3, delay: 1.0 + shape.delay },
            y:       { duration: 3 + (i % 7) * 0.3, delay: 1.2 + shape.delay, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      ))}

      {/* Content — single centered column */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Headline — forced 2 rows */}
        <h1 className="font-display font-black text-[clamp(2.4rem,6vw,4.5rem)] uppercase leading-[1.05] tracking-tight text-ink mb-6">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            A Technical Duo
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            For Complex Systems
          </motion.span>
        </h1>

        {/* Subtitle — larger, darker */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-display text-xl text-ink/80 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {hero.subtitle}
        </motion.p>

        {/* Hero illustration — full width, no card, transparent feel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="relative mx-auto"
          style={{ mixBlendMode: 'multiply' }}
        >
          <img
            src="/assets/hero-illustration.jpeg"
            alt="Gino and Steph — Technical Duo"
            className="w-full max-w-3xl mx-auto"
            style={{ mixBlendMode: 'multiply' }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="text-ink/30"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        <span className="font-mono text-[10px] text-ink/30 tracking-[0.25em] uppercase">Scroll Down</span>
      </motion.div>
    </section>
  );
}
