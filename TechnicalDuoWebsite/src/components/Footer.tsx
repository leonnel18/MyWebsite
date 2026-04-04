'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import content from '@/data/content.json';

const { footer } = content.content;
const words1 = footer.cta_headline_1.split(' ');
const words2 = footer.cta_headline_2.split(' ');

export default function Footer() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <footer ref={ref} style={{ background: '#0F0F1A' }} className="relative overflow-hidden">
      {/* Top accent line */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #6B5CE7 50%, transparent)' }} />

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-8">
        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {/* Headline word stagger */}
          <h2 className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] uppercase leading-tight text-white mb-2">
            {words1.map((w, i) => (
              <motion.span key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                className="inline-block mr-[0.2em]"
              >{w}</motion.span>
            ))}
          </h2>
          <h2 className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] uppercase leading-tight mb-10" style={{ color: '#00C2B8' }}>
            {words2.map((w, i) => (
              <motion.span key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                className="inline-block mr-[0.2em]"
              >{w}</motion.span>
            ))}
          </h2>

          {/* CTA Button */}
          <motion.a
            href={footer.cta_href}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.4 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 font-display font-bold text-sm text-white uppercase tracking-wider px-10 py-4"
            style={{ background: 'linear-gradient(135deg, #F97316, #6B5CE7)', border: '2px solid #fff', borderRadius: 4 }}
          >
            {footer.cta}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '0 0 24px' }} />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <div className="font-display font-black text-base text-white uppercase tracking-wide mb-1">
              Gino &amp; Steph
            </div>
            <p className="font-mono text-[10px] text-white/25">{footer.copyright}</p>
            <p className="font-mono text-[9px] text-white/15 mt-0.5">{footer.tagline}</p>
          </div>

          <div className="flex gap-10">
            {/* GINO */}
            <div>
              <div className="font-mono text-[10px] text-white uppercase tracking-widest mb-2">Gino</div>
              <a href={footer.gino.linkedin} className="block font-display text-xs text-white/40 hover:text-white transition-colors mb-1">LinkedIn</a>
              <a href={footer.gino.github}   className="block font-display text-xs text-white/40 hover:text-white transition-colors">GitHub</a>
            </div>
            {/* STEPH */}
            <div>
              <div className="font-mono text-[10px] text-white uppercase tracking-widest mb-2">Steph</div>
              <a href={footer.steph.email}  className="block font-display text-xs text-white/40 hover:text-white transition-colors mb-1">Email</a>
              <a href={footer.steph.github} className="block font-display text-xs text-white/40 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
