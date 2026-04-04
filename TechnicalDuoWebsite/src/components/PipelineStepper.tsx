'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import content from '@/data/content.json';

const { pipeline } = content.content;

const stepIcons: Record<string, string> = {
  '01': '/assets/icons/step-01-discovery.jpeg',
  '02': '/assets/icons/step-02-roadmap.jpeg',
  '03': '/assets/icons/step-03-architecture.jpeg',
  '04': '/assets/icons/step-04-build.jpeg',
  '05': '/assets/icons/step-05-deployment.jpeg',
  '06': '/assets/icons/step-06-optimisation.jpeg',
  '07': '/assets/icons/step-07-handover.jpeg',
};

export default function PipelineStepper() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="work" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading in brutalist box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="brutalist-card bg-white px-8 py-4 mb-16"
          style={{ width: 'fit-content', margin: '0 auto 4rem' }}
        >
          <h2 className="font-display font-black text-2xl uppercase tracking-wider text-ink text-center">
            Our Professional Pipeline
          </h2>
        </motion.div>

        {/* Horizontal scroll wrapper */}
        <div className="overflow-x-auto pb-4">
          <div className="relative" style={{ minWidth: 800 }}>
            {/* SVG connecting line */}
            <svg
              className="absolute"
              style={{ top: 35, left: 35, right: 35, width: 'calc(100% - 70px)', height: 2, overflow: 'visible' }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#6B5CE7" />
                  <stop offset="100%" stopColor="#00C2B8" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 0 1 L 800 1"
                stroke="url(#lineGrad)"
                strokeWidth={2}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.3, ease: 'easeInOut' }}
              />
            </svg>

            {/* Steps */}
            <div className="flex justify-between items-start relative z-10">
              {pipeline.map((step, i) => {
                const isTeal = step.step === '04';
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center group"
                    style={{ width: 110 }}
                  >
                    {/* Circle */}
                    <div
                      className="relative flex items-center justify-center cursor-default"
                      style={{
                        width: 70, height: 70, borderRadius: '50%',
                        background: isTeal ? '#00C2B8' : '#6B5CE7',
                        border: '3px solid #111',
                        boxShadow: '0 0 0 3px ' + (isTeal ? '#00C2B830' : '#6B5CE730'),
                      }}
                    >
                      {/* Number (default) */}
                      <span
                        className="absolute font-mono font-bold text-lg text-white transition-opacity duration-200 group-hover:opacity-0"
                      >
                        {step.step}
                      </span>
                      {/* Icon (on hover) */}
                      <img
                        src={stepIcons[step.step]}
                        alt=""
                        width={40} height={40}
                        className="absolute object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ borderRadius: '50%' }}
                      />
                    </div>

                    {/* Label */}
                    <div
                      className="font-display font-bold text-center mt-3 uppercase text-ink transition-colors duration-200 group-hover:text-purple"
                      style={{ fontSize: 10, letterSpacing: '0.06em', lineHeight: 1.3, maxWidth: 100 }}
                    >
                      {step.label}
                    </div>

                    {/* Description */}
                    <div
                      className="font-display text-center mt-1.5"
                      style={{ fontSize: 9, color: '#666', lineHeight: 1.4, maxWidth: 100 }}
                    >
                      {step.desc}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
