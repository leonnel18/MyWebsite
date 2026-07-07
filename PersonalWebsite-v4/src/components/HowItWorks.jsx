import { motion } from 'framer-motion'
import { content } from '../data/content'

const { howItWorks } = content

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28" style={{ backgroundColor: '#F4EBDC' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header — left aligned editorial */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="eyebrow">{howItWorks.sectionLabel}</span>
          <h2
            className="font-display mt-5 mb-4 text-4xl md:text-5xl leading-[1.05]"
            style={{ color: '#241C17', fontWeight: 700 }}
          >
            {howItWorks.heading}
          </h2>
          <p className="text-lg" style={{ color: '#6B5D51' }}>
            {howItWorks.subheading}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              {/* Big serif number */}
              <div className="flex items-baseline gap-3 mb-5">
                <span
                  className="font-display leading-none text-6xl md:text-7xl"
                  style={{ color: '#B75C3E', fontWeight: 500 }}
                >
                  {step.number}
                </span>
                <span className="flex-1 h-px" style={{ backgroundColor: '#D8C7AF' }} />
              </div>

              <h3
                className="font-display text-xl md:text-2xl mb-3"
                style={{ color: '#241C17', fontWeight: 700 }}
              >
                {step.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#6B5D51' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
