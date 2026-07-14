import { motion } from 'framer-motion'
import { content } from '../data/content'

const lineReveal = (booted, delay) => ({
  initial: { y: '110%' },
  animate: booted ? { y: '0%' } : { y: '110%' },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
})

const fadeIn = (booted, delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: booted ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
  transition: { duration: 0.6, delay },
})

export default function Hero({ booted }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 md:pt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
        {/* Giant typographic poster */}
        <h1 className="select-none" aria-label={content.hero.posterLines.join(' ')}>
          {content.hero.posterLines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                {...lineReveal(booted, 0.08 + i * 0.13)}
                className="block uppercase"
                style={{
                  color: '#241C17',
                  fontWeight: 720,
                  letterSpacing: '-0.03em',
                  lineHeight: 0.92,
                  fontSize: 'clamp(2.75rem, 12vw, 9.5rem)',
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Bottom meta row */}
        <motion.div
          {...fadeIn(booted, 0.7)}
          className="flex items-center gap-4 mt-6 md:mt-8"
        >
          <span className="w-10 h-px" style={{ backgroundColor: '#B75C3E' }} />
          <span
            className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase"
            style={{ color: '#B75C3E' }}
          >
            {content.hero.metaSince}
          </span>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        {...fadeIn(booted, 1.0)}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#6B5D51' }}
        aria-label="Scroll to explore"
      >
        <span className="text-[0.65rem] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <motion.svg
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.a>
    </section>
  )
}
