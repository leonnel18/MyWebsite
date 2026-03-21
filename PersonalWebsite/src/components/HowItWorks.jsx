import { motion } from 'framer-motion'
import { content } from '../data/content'

const { howItWorks } = content

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24"
      style={{ backgroundColor: 'rgba(255,255,255,0.65)' }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
            style={{ backgroundColor: '#E8DDD0', color: '#C06B4F' }}
          >
            {howItWorks.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: '#1A1A1A' }}>
            {howItWorks.heading}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#4A4A4A' }}>
            {howItWorks.subheading}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px border-t-2 border-dashed"
            style={{ borderColor: '#E8DDD0' }}
          />

          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Number circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-6 z-10 border-4"
                style={{
                  backgroundColor: '#FFFBF2',
                  borderColor: '#C06B4F',
                  color: '#C06B4F',
                }}
              >
                {step.number}
              </div>

              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A1A1A' }}>
                {step.title}
              </h3>
              <p className="leading-relaxed text-sm md:text-base" style={{ color: '#4A4A4A' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
