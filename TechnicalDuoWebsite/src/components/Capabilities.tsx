'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import content from '@/data/content.json';

const { capabilities } = content.content;

const iconMap: Record<string, string> = {
  ecommerce: '/assets/icons/cap-ecommerce.jpeg',
  dataflow:  '/assets/icons/cap-dataflow.jpeg',
  scripts:   '/assets/icons/cap-scripts.jpeg',
  tpm:       '/assets/icons/cap-tpm.jpeg',
};

/* Alternating glow colors: purple, teal, purple, teal */
const glowColors = ['#6B5CE7', '#00C2B8', '#6B5CE7', '#00C2B8'];
const glowShadows = glowColors.map(c => `0 4px 24px ${c}40, 0 0 0 1px ${c}30`);
const hoverGlowShadows = glowColors.map(c => `0 8px 40px ${c}60, 0 0 0 2px ${c}50, 6px 6px 0 #111`);

export default function Capabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header — ~100% larger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-[clamp(2.4rem,5vw,4rem)] uppercase leading-tight">
            <span className="text-ink">Four Core Capabilities.</span>
            <br />
            <span className="text-ink">One Consistent Outcome: </span>
            <span style={{ background: 'linear-gradient(135deg, #F97316, #6B5CE7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Clarity.
            </span>
          </h2>
        </motion.div>

        {/* Full-width cards — 1 col on mobile, 2 on md, 4 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: hoverGlowShadows[i] }}
              className="bg-white p-8 flex flex-col items-center text-center relative overflow-hidden group cursor-default"
              style={{
                border: '2px solid #111',
                borderRadius: 6,
                boxShadow: glowShadows[i],
                transition: 'box-shadow 0.3s, transform 0.3s',
              }}
            >
              {/* Hover accent line — matches glow color */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: glowColors[i] }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />

              {/* Icon — larger, no bg */}
              <img
                src={iconMap[cap.icon]}
                alt={cap.title}
                width={80} height={80}
                className="mb-6 object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />

              {/* Title — ~200% larger */}
              <h3 className="font-display font-black text-xl uppercase tracking-wide text-ink mb-3 group-hover:text-purple transition-colors duration-200">
                {cap.title}
              </h3>

              {/* Description — ~200% larger */}
              <p className="font-display text-base text-ink/65 leading-relaxed">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
