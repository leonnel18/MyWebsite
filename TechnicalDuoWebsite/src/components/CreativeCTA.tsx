'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CreativeCTA() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref}
      className="px-6 py-16"
      style={{ background: 'linear-gradient(135deg, #3B2C9E 0%, #1a1040 100%)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="font-display font-black text-[clamp(1.6rem,3vw,2.4rem)] uppercase text-white leading-tight"
        >
          Explore Our Creative Side
        </motion.h2>
        <motion.a
          href="#"
          whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(249,115,22,0.4)' }}
          whileTap={{ scale: 0.97 }}
          className="font-display font-bold text-sm text-white uppercase tracking-wider px-8 py-4 whitespace-nowrap flex-shrink-0"
          style={{ background: '#F97316', border: '2px solid #fff', borderRadius: 4 }}
        >
          See Our Creative Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
