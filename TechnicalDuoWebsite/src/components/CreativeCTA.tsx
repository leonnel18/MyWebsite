'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CreativeCTA() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="px-6 py-16"
      style={{
        background: '#f0f0f8',
        backgroundImage:
          'linear-gradient(#c0c0d840 1px, transparent 1px), linear-gradient(90deg, #c0c0d840 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col items-center justify-center text-center px-12 py-16"
          style={{
            background: 'linear-gradient(135deg, #3B2C9E 0%, #1a1040 100%)',
            borderRadius: 16,
            boxShadow:
              '0 0 0 1.5px #6B5CE760 inset, 0 0 40px #6B5CE770 inset, 0 24px 64px #00000070',
          }}
        >
          {/* Headline — single row */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.15 }}
            className="font-display font-black uppercase text-white mb-9"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              letterSpacing: '0.06em',
              whiteSpace: 'nowrap',
              lineHeight: 1.1,
            }}
          >
            EXPLORE OUR CREATIVE SIDE
          </motion.h2>

          {/* Neo-brutalist pill button */}
          <motion.a
            href="#"
            whileHover={{
              y: -2,
              boxShadow: '6px 6px 0 #111, 0 0 0 2.5px #a84d00, 0 0 24px #c4580080',
            }}
            whileTap={{ scale: 0.97 }}
            className="font-display font-bold text-sm text-black uppercase tracking-wider px-10 py-3.5 whitespace-nowrap"
            style={{
              background: '#F97316',
              borderRadius: 999,
              border: '2px solid #111',
              boxShadow: '4px 4px 0 #111, 0 0 0 2.5px #a84d00, 0 0 16px #c4580060',
            }}
          >
            SEE OUR CREATIVE PROJECTS
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
