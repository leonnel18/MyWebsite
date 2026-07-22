import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { content } from '../data/content'
import ScrollCue from './ScrollCue'

const { about } = content

const MotionLink = motion.create(Link)

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px -15% 0px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

// Renders copy segments, bolding the highlighted ones in ink
function Segments({ parts }) {
  return parts.map((part, i) =>
    part.bold ? (
      <strong key={i} className="font-semibold" style={{ color: 'var(--color-ink)' }}>
        {part.text}
      </strong>
    ) : (
      <span key={i}>{part.text}</span>
    )
  )
}

export default function About() {
  return (
    <section id="about" className="mt-24 md:mt-32 py-28 md:py-40" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        {/* Eyebrow — role pairing */}
        <motion.p
          {...rise(0)}
          className="font-mono text-[0.7rem] md:text-sm font-medium tracking-[0.3em] uppercase"
          style={{ color: 'var(--color-primary)' }}
        >
          {about.eyebrow}
        </motion.p>

        {/* Giant name */}
        <motion.h2
          {...rise(0.15)}
          className="mt-6 uppercase select-none"
          style={{
            color: 'var(--color-ink)',
            fontWeight: 720,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            fontSize: 'clamp(3rem, 10vw, 6.5rem)',
          }}
        >
          {about.name}
        </motion.h2>

        {/* Description */}
        <motion.p
          {...rise(0.24)}
          className="mt-8 text-lg md:text-xl leading-relaxed max-w-2xl"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          <Segments parts={about.statementDetail} />
        </motion.p>

        {/* CTAs */}
        <motion.div {...rise(0.36)} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <MotionLink
            to={about.ctaPrimary.href}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold text-white"
            style={{ backgroundColor: 'var(--color-primary)', boxShadow: '0 10px 24px -10px rgba(183,92,62,0.7)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
          >
            {about.ctaPrimary.label}
          </MotionLink>
          <MotionLink
            to={about.ctaSecondary.href}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold"
            style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-ink)', border: '1px solid var(--color-border-strong)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-border-strong)')}
          >
            {about.ctaSecondary.label}
          </MotionLink>
        </motion.div>

        <div className="flex justify-center mt-16 md:mt-20">
          <ScrollCue
            href="#features"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </div>
    </section>
  )
}
