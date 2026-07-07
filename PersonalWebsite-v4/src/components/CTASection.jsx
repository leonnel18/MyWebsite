import { motion } from 'framer-motion'
import { content } from '../data/content'

const { bottomCta } = content

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center"
          style={{ backgroundColor: '#241C17' }}
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-12 -right-12 w-64 h-64 rounded-full opacity-20"
            style={{ backgroundColor: '#B75C3E' }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full opacity-15"
            style={{ backgroundColor: '#6E8F78' }}
          />

          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.06] mb-5 text-white" style={{ fontWeight: 700 }}>
              {bottomCta.heading}
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: '#E4D8C6' }}>
              {bottomCta.subheading}
            </p>

            <motion.a
              href={bottomCta.ctaHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-white"
              style={{ backgroundColor: '#B75C3E', boxShadow: '0 14px 30px -12px rgba(183,92,62,0.8)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#94472E')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#B75C3E')}
            >
              {bottomCta.cta} →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
