import { motion } from 'framer-motion'
import { content } from '../data/content'

const { bottomCta } = content

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-24"
      style={{ borderTop: '1px solid #1A1A1A' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ color: '#F5F5F5' }}>
              {bottomCta.heading}
            </h2>
            <p className="text-base max-w-lg" style={{ color: '#888888' }}>
              {bottomCta.subheading}
            </p>
          </div>

          <motion.a
            href={bottomCta.ctaHref}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-sm transition-all"
            style={{ backgroundColor: '#4ADE80', color: '#0A0A0A' }}
          >
            {bottomCta.cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
