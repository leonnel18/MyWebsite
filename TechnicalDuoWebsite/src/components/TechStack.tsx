'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import content from '@/data/content.json';

const { tech_stack } = content.content;
const SIMPLE_ICONS = 'https://cdn.simpleicons.org';

interface ToolItem { name: string; slug: string | null; }
interface Category { category: string; items: ToolItem[]; }

// Package icon fallback SVG
function PackageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16.5 9.4L7.55 4.24"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/>
    </svg>
  );
}

export default function TechStack() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState<string>('All');

  const categories = ['All', ...(tech_stack as Category[]).map(c => c.category)];

  const filtered: ToolItem[] = active === 'All'
    ? (tech_stack as Category[]).flatMap(c => c.items)
    : ((tech_stack as Category[]).find(c => c.category === active)?.items ?? []);

  return (
    <section id="stack" ref={ref} className="py-24 px-6" style={{ background: '#F8F8FC' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-display font-black text-[clamp(1.8rem,3vw,2.8rem)] uppercase text-ink">
            The Tools That Get Things Done.
          </h2>
          <p className="font-display text-base text-ink/55 mt-2">
            A curated stack built for eCommerce, cloud data, and AI-native workflows.
          </p>
        </motion.div>

        {/* Filter tabs — pill shaped */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05 }}
              onClick={() => setActive(cat)}
              className={`font-mono text-xs font-medium px-6 py-2 uppercase tracking-wider transition-all duration-200 rounded-full border-2 ${
                active === cat
                  ? 'border-ink bg-ink text-white'
                  : 'border-ink text-ink bg-transparent hover:bg-ink/5'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Badge grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            {filtered.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.2 }}
                whileHover={{ y: -2, boxShadow: '3px 3px 0 #6B5CE7' }}
                className="brutalist-card bg-white flex items-center gap-2 px-4 py-2.5"
              >
                {tool.slug
                  ? <img src={`${SIMPLE_ICONS}/${tool.slug}/111111`} alt={tool.name} width={20} height={20} className="object-contain" />
                  : <PackageIcon />
                }
                <span className="font-mono text-xs font-medium text-ink">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
