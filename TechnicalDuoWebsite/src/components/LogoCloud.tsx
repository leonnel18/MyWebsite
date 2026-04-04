'use client';
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
