'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import content from '@/data/content.json';

const { pipeline } = content.content;

interface InlineShape {
  top: number;
  leftPct: string;
  width: number;
  height: number;
  background: string;
  border: string;
  borderRadius?: string;
  boxShadow?: string;
  transform?: string;
  delay: number;
  dur: number;
}

/* ── Icon map ── */
const stepIcons: Record<string, string> = {
  '01': '/assets/icons/step-01-discovery.png',
  '02': '/assets/icons/step-02-roadmap.png',
  '03': '/assets/icons/step-03-architecture.png',
  '04': '/assets/icons/step-04-build.png',
  '05': '/assets/icons/step-05-deployment.png',
  '06': '/assets/icons/step-06-optimization.png',
  '07': '/assets/icons/step-07-handover.png',
};

/* ── Color alternation: even index = purple, odd = teal ── */
const discColor = (i: number) => i % 2 === 0 ? '#6B5CE7' : '#00C2B8';
const discDark  = (i: number) => i % 2 === 0 ? '#2a1f7a' : '#005f5a';
const tailColor = (i: number) => i % 2 === 0 ? '#5849c2' : '#009b92';

/* ── Edge geo shapes (same style as Hero) ── */
const edgeShapes = [
  { style: { top: '8%',  left: '1%',  width: 28, height: 28, background: '#6B5CE7', border: '2px solid #111', boxShadow: '3px 3px 0 #111', transform: 'rotate(15deg)' }, delay: 0.0 },
  { style: { top: '6%',  right: '1%', width: 22, height: 22, background: '#00C2B8', border: '2px solid #111', boxShadow: '3px 3px 0 #111', transform: 'rotate(30deg)' }, delay: 0.3 },
  { style: { top: '30%', left: '0%',  width: 14, height: 14, background: '#F97316', border: '2px solid #111', borderRadius: '50%' }, delay: 0.6 },
  { style: { top: '35%', right: '0%', width: 18, height: 18, background: 'transparent', border: '2px solid #00C2B8', transform: 'rotate(45deg)' }, delay: 0.8 },
  { style: { bottom: '15%', left: '1%',  width: 20, height: 20, background: '#F97316', border: '2px solid #111', boxShadow: '2px 2px 0 #111', transform: 'rotate(45deg)' }, delay: 0.5 },
  { style: { bottom: '12%', right: '1%', width: 26, height: 26, background: '#6B5CE7', border: '2px solid #111', boxShadow: '3px 3px 0 #111', transform: 'rotate(20deg)' }, delay: 0.9 },
  { style: { top: '55%', left: '0%',  width: 12, height: 12, background: '#6B5CE7', border: '2px solid #111', borderRadius: '50%' }, delay: 0.4 },
  { style: { top: '60%', right: '0%', width: 16, height: 16, background: '#00C2B8', border: '2px solid #111', transform: 'rotate(-15deg)' }, delay: 0.7 },
  { style: { top: '10%', left: '8%',  width: 14, height: 14, background: '#00C2B8', border: '2px solid #111', transform: 'rotate(20deg)' }, delay: 0.2 },
  { style: { top: '12%', right: '6%', width: 12, height: 12, background: 'transparent', border: '2px solid #6B5CE7', transform: 'rotate(45deg)' }, delay: 1.0 },
  { style: { bottom: '20%', left: '3%',  width: 12, height: 12, background: '#6B5CE7', border: '2px solid #111', transform: 'rotate(35deg)' }, delay: 1.2 },
  { style: { bottom: '22%', right: '2%', width: 16, height: 16, background: '#00C2B8', border: '2px solid #111', borderRadius: '50%' }, delay: 0.3 },
];

/* ── Inline geo shapes between steps (6 gaps × 3 shapes = 18) ── */
const inlineShapes: InlineShape[] = [
  // gap 01–02
  { top: 14, leftPct: '12%', width: 10, height: 10, background: '#6B5CE7', border: '1.5px solid #111', transform: 'rotate(20deg)', delay: 0.2, dur: 2.9 },
  { top: 46, leftPct: '14%', width:  8, height:  8, background: '#00C2B8', border: '1.5px solid #111', borderRadius: '50%',          delay: 0.6, dur: 3.3 },
  { top: 62, leftPct: '11%', width:  7, height:  7, background: 'transparent', border: '1.5px solid #F97316', transform: 'rotate(45deg)', delay: 1.0, dur: 3.7 },
  // gap 02–03
  { top: 18, leftPct: '26%', width:  9, height:  9, background: 'transparent', border: '1.5px solid #6B5CE7', transform: 'rotate(45deg)', delay: 0.3, dur: 3.7 },
  { top: 44, leftPct: '28%', width:  8, height:  8, background: '#F97316', border: '1.5px solid #111', borderRadius: '50%',              delay: 0.8, dur: 2.8 },
  { top: 60, leftPct: '25%', width:  6, height:  6, background: '#00C2B8', border: '1.5px solid #111', transform: 'rotate(15deg)',        delay: 0.4, dur: 3.2 },
  // gap 03–04
  { top: 12, leftPct: '40%', width: 11, height: 11, background: '#00C2B8', border: '1.5px solid #111', transform: 'rotate(30deg)',        delay: 0.5, dur: 3.1 },
  { top: 48, leftPct: '42%', width:  8, height:  8, background: '#6B5CE7', border: '1.5px solid #111', boxShadow: '1px 1px 0 #111',      delay: 0.1, dur: 3.5 },
  { top: 64, leftPct: '39%', width:  7, height:  7, background: 'transparent', border: '1.5px solid #6B5CE7', transform: 'rotate(45deg)', delay: 0.9, dur: 2.7 },
  // gap 04–05
  { top: 16, leftPct: '54%', width:  9, height:  9, background: '#F97316', border: '1.5px solid #111', transform: 'rotate(45deg)',        delay: 0.7, dur: 2.7 },
  { top: 42, leftPct: '56%', width: 10, height: 10, background: 'transparent', border: '1.5px solid #00C2B8', transform: 'rotate(20deg)', delay: 0.4, dur: 3.4 },
  { top: 60, leftPct: '53%', width:  7, height:  7, background: '#6B5CE7', border: '1.5px solid #111', borderRadius: '50%',              delay: 1.1, dur: 3.0 },
  // gap 05–06
  { top: 20, leftPct: '68%', width:  8, height:  8, background: '#6B5CE7', border: '1.5px solid #111', borderRadius: '50%',              delay: 0.9, dur: 3.2 },
  { top: 46, leftPct: '70%', width:  9, height:  9, background: '#00C2B8', border: '1.5px solid #111', transform: 'rotate(35deg)',        delay: 0.2, dur: 2.9 },
  { top: 62, leftPct: '67%', width:  6, height:  6, background: '#F97316', border: '1.5px solid #111', transform: 'rotate(60deg)',        delay: 0.5, dur: 3.6 },
  // gap 06–07
  { top: 14, leftPct: '82%', width: 10, height: 10, background: '#F97316', border: '1.5px solid #111', boxShadow: '1px 1px 0 #111', transform: 'rotate(60deg)', delay: 0.6, dur: 3.6 },
  { top: 44, leftPct: '84%', width:  8, height:  8, background: 'transparent', border: '1.5px solid #6B5CE7', transform: 'rotate(45deg)', delay: 1.0, dur: 3.0 },
  { top: 60, leftPct: '81%', width:  7, height:  7, background: '#00C2B8', border: '1.5px solid #111', borderRadius: '50%',              delay: 0.3, dur: 2.8 },
];

export default function PipelineStepper() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="work" ref={ref} className="relative py-24 px-6 overflow-hidden">

      {/* ── Edge floating geo shapes ── */}
      {edgeShapes.map((shape, i) => (
        <motion.div
          key={`edge-${i}`}
          style={{ position: 'absolute', zIndex: 1, ...shape.style }}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? {
            scale: 1, opacity: 1,
            y: [0, -12, 0],
          } : {}}
          transition={{
            scale:   { duration: 0.3, delay: 0.8 + shape.delay, type: 'spring', stiffness: 200 },
            opacity: { duration: 0.3, delay: 0.8 + shape.delay },
            y:       { duration: 3 + (i % 7) * 0.3, delay: 1.0 + shape.delay, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      ))}

      {/* ── Neo-brutalist enclosing rectangle ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-[1100px] mx-auto bg-white"
        style={{
          border: '3px solid #111',
          boxShadow: '8px 8px 0 #111',
          borderRadius: 4,
          padding: '32px 36px 40px',
        }}
      >
        {/* ── Section title inside the box ── */}
        <h2
          className="font-display font-black text-center uppercase tracking-widest text-ink mb-10"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
        >
          Our Professional Pipeline
        </h2>

        {/* ── Pipeline row ── */}
        <div className="relative">

          {/* Connector line */}
          <motion.div
            className="absolute hidden md:block"
            style={{
              top: 35,
              left: 35,
              right: 35,
              height: 3,
              background: 'linear-gradient(90deg, #6B5CE7, #00C2B8, #6B5CE7, #00C2B8, #6B5CE7, #00C2B8, #6B5CE7)',
              transformOrigin: 'left',
              zIndex: 0,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.3, ease: 'easeInOut' }}
          />

          {/* Inline geo shapes between steps */}
          {inlineShapes.map((shape, i) => (
            <motion.div
              key={`inline-${i}`}
              style={{
                position: 'absolute',
                top: shape.top,
                left: shape.leftPct,
                width: shape.width,
                height: shape.height,
                background: shape.background,
                border: shape.border,
                borderRadius: shape.borderRadius,
                boxShadow: shape.boxShadow,
                transform: shape.transform,
                zIndex: 2,
                pointerEvents: 'none',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? {
                scale: 1, opacity: 1,
                y: [0, -10, 0],
              } : {}}
              transition={{
                scale:   { duration: 0.2, delay: 0.5 + shape.delay, type: 'spring', stiffness: 250 },
                opacity: { duration: 0.2, delay: 0.5 + shape.delay },
                y:       { duration: shape.dur, delay: 0.8 + shape.delay, repeat: Infinity, ease: 'easeInOut' },
              }}
            />
          ))}

          {/* Steps */}
          <div className="relative z-10 grid grid-cols-4 md:grid-cols-7 gap-y-8 gap-x-0">
            {pipeline.map((step, i) => {
              const color = discColor(i);
              const dark  = discDark(i);
              const tail  = tailColor(i);

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col items-center ${
                    i === 4 ? 'col-start-1 md:col-auto' :
                    i === 5 ? 'col-start-2 md:col-auto' :
                    i === 6 ? 'col-start-3 md:col-auto' : ''
                  }`}
                  style={{ maxWidth: 137 }}
                >
                  {/* Number disc */}
                  <div
                    style={{
                      width: 70, height: 70,
                      borderRadius: '50%',
                      border: '3px solid #111',
                      background: `radial-gradient(circle at 38% 38%, ${color}cc, ${dark}ee)`,
                      boxShadow: `0 0 20px ${color}80, 0 4px 0 ${dark}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 900, fontSize: 26,
                      color: '#fff',
                      position: 'relative', zIndex: 2, flexShrink: 0,
                    }}
                  >
                    {step.step}
                  </div>

                  {/* Teardrop tail — outer (black) */}
                  <div style={{
                    width: 0, height: 0,
                    borderLeft: '9px solid transparent',
                    borderRight: '9px solid transparent',
                    borderTop: '14px solid #111',
                    marginTop: -1, flexShrink: 0,
                  }} />
                  {/* Teardrop tail — inner (colored) */}
                  <div style={{
                    width: 0, height: 0,
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: `12px solid ${tail}`,
                    marginTop: -13, marginLeft: 1, flexShrink: 0,
                  }} />

                  {/* Stem */}
                  <div style={{
                    width: 3, height: 16,
                    background: color,
                    flexShrink: 0,
                  }} />

                  {/* Icon — raw PNG, no wrapper */}
                  <Image
                    src={stepIcons[step.step]}
                    alt={step.label}
                    width={60}
                    height={60}
                    style={{ objectFit: 'contain', flexShrink: 0 }}
                  />

                  {/* Title — 25% larger than v5: 9px × 1.25 ≈ 11px */}
                  <div
                    className="font-mono text-center text-ink uppercase"
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: '0.07em',
                      lineHeight: 1.4,
                      marginTop: 8,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {step.label}
                  </div>

                  {/* Description — 25% larger: 8px × 1.25 = 10px */}
                  <div
                    className="font-display text-center"
                    style={{
                      fontSize: 10,
                      color: '#666',
                      lineHeight: 1.5,
                      marginTop: 4,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {step.desc}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
