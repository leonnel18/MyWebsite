import { motion } from 'framer-motion'
import { content } from '../data/content'

const { about } = content

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
      <strong key={i} className="font-semibold" style={{ color: '#241C17' }}>
        {part.text}
      </strong>
    ) : (
      <span key={i}>{part.text}</span>
    )
  )
}

export default function About() {
  return (
    <section id="about" className="mt-24 md:mt-32 py-28 md:py-40" style={{ backgroundColor: '#F4EBDC' }}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        {/* Eyebrow — role pairing */}
        <motion.p
          {...rise(0)}
          className="font-mono text-[0.7rem] md:text-sm font-medium tracking-[0.3em] uppercase"
          style={{ color: '#B75C3E' }}
        >
          {about.eyebrow}
        </motion.p>

        {/* Giant name */}
        <motion.h2
          {...rise(0.12)}
          className="mt-6 uppercase select-none"
          style={{
            color: '#241C17',
            fontWeight: 720,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            fontSize: 'clamp(3rem, 10vw, 6.5rem)',
          }}
        >
          {about.name}
        </motion.h2>

        {/* Intro with bold highlights */}
        <motion.p
          {...rise(0.24)}
          className="mt-8 text-lg md:text-xl leading-relaxed max-w-2xl"
          style={{ color: '#6B5D51' }}
        >
          <Segments parts={about.intro} />
        </motion.p>

        {/* CTAs */}
        <motion.div {...rise(0.36)} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <motion.a
            href={about.ctaPrimary.href}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold text-white"
            style={{ backgroundColor: '#B75C3E', boxShadow: '0 10px 24px -10px rgba(183,92,62,0.7)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#94472E')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B75C3E')}
          >
            {about.ctaPrimary.label}
          </motion.a>
          <motion.a
            href={about.ctaSecondary.href}
            download={about.ctaSecondary.download}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold"
            style={{ backgroundColor: '#FFFDF8', color: '#241C17', border: '1px solid #D8C7AF' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B75C3E')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#D8C7AF')}
          >
            {about.ctaSecondary.label}
          </motion.a>
        </motion.div>

        {/* Statement + detail, below the CTAs */}
        <motion.p
          {...rise(0)}
          className="mt-16 md:mt-24 text-xl md:text-2xl font-semibold tracking-tight max-w-2xl"
          style={{ color: '#241C17' }}
        >
          {about.statement}
        </motion.p>
        <motion.p
          {...rise(0.12)}
          className="mt-5 text-lg md:text-xl leading-relaxed max-w-2xl"
          style={{ color: '#6B5D51' }}
        >
          <Segments parts={about.statementDetail} />
        </motion.p>
      </div>
    </section>
  )
}
