'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const logos = [
  { file: '7-Eleven-Logo.png',                alt: '7-Eleven' },
  { file: 'AXA.png',                          alt: 'AXA' },
  { file: 'AktivAsia Logo.webp',              alt: 'AktivAsia' },
  { file: 'BDO Logo.png',                     alt: 'BDO' },
  { file: 'Cosme De Net.png',                 alt: 'Cosme De Net' },
  { file: 'Cup N Grind Logo.jpg',             alt: 'Cup N Grind' },
  { file: 'Globe.png',                        alt: 'Globe' },
  { file: 'Johnson_and_Johnson_Logo.svg.png', alt: 'Johnson & Johnson' },
  { file: 'Leo PC.jpg',                       alt: 'Leo PC' },
  { file: 'Maya Logo.png',                    alt: 'Maya' },
  { file: 'Metrobank Logo.png',               alt: 'Metrobank' },
  { file: 'ThePackLbas.jpg',                  alt: 'The Pack Labs' },
  { file: 'Unilab Logo.png',                  alt: 'Unilab' },
];

const row1 = logos.slice(0, 5);   // 7-Eleven … Cosme De Net
const row2 = logos.slice(5, 10);  // Cup N Grind … Maya
const row3 = logos.slice(10);     // Metrobank … Unilab (3 cards)

function LogoCard({ logo, index, inView }: { logo: typeof logos[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex items-center justify-center bg-white cursor-default transition-[border-color,box-shadow] duration-200"
      style={{
        border: '2px solid #111',
        borderRadius: 8,
        boxShadow: '4px 4px 0 #111',
        padding: '16px 12px',
        minHeight: 72,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = '#6B5CE7';
        el.style.boxShadow = '6px 6px 0 #111';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = '#111';
        el.style.boxShadow = '4px 4px 0 #111';
      }}
    >
      <img
        src={`/assets/logos/${logo.file}`}
        alt={logo.alt}
        style={{ maxHeight: 44, maxWidth: '100%', objectFit: 'contain' }}
      />
    </motion.div>
  );
}

export default function LogoCloud() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="worked" ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display font-black uppercase text-ink text-center mb-10"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.06em' }}
        >
          Where We&apos;ve Worked
        </motion.h2>

        {/* Row 1 — 5 cards */}
        <div className="flex justify-center gap-3 mb-3">
          {row1.map((logo, i) => (
            <div key={logo.file} className="flex-1">
              <LogoCard logo={logo} index={i} inView={inView} />
            </div>
          ))}
        </div>

        {/* Row 2 — 5 cards */}
        <div className="flex justify-center gap-3 mb-3">
          {row2.map((logo, i) => (
            <div key={logo.file} className="flex-1">
              <LogoCard logo={logo} index={5 + i} inView={inView} />
            </div>
          ))}
        </div>

        {/* Row 3 — 3 cards, center-aligned, same width as rows above */}
        <div className="flex justify-center gap-3">
          {row3.map((logo, i) => (
            <div key={logo.file} style={{ flex: '0 0 calc((100% - 4 * 0.75rem) / 5)' }}>
              <LogoCard logo={logo} index={10 + i} inView={inView} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
