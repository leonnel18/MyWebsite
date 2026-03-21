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
          className="relative rounded-3xl overflow-hidden px-8 py-16 md:px-16 text-center"
          style={{ backgroundColor: '#1A1A1A' }}
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-12 -right-12 w-64 h-64 rounded-full opacity-10"
            style={{ backgroundColor: '#C06B4F' }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full opacity-10"
            style={{ backgroundColor: '#7B9E87' }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              {bottomCta.heading}
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: '#E8DDD0' }}>
              {bottomCta.subheading}
            </p>

            <motion.a
              href={bottomCta.ctaHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-white shadow-lg"
              style={{ backgroundColor: '#C06B4F' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#9A5840')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C06B4F')}
            >
              {bottomCta.cta} →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
