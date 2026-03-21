import { motion } from 'framer-motion'
import { content } from '../data/content'

const { howItWorks } = content

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24" style={{ borderTop: '1px solid #1A1A1A' }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: '#4ADE80' }}>
            {howItWorks.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#F5F5F5' }}>
            {howItWorks.heading}
          </h2>
          <p className="mt-3 text-base" style={{ color: '#888888' }}>
            {howItWorks.subheading}
          </p>
        </motion.div>

        {/* Steps — horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-7 border-l first:border-l-0 md:border-l"
              style={{ borderColor: '#1A1A1A' }}
            >
              <div className="text-5xl font-bold mb-5 leading-none" style={{ color: '#1D1D1D' }}>
                {step.number}
              </div>
              <h3 className="text-base font-semibold mb-3" style={{ color: '#F5F5F5' }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
