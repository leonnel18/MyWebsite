import { motion } from 'framer-motion'
import { content } from '../data/content'

const { features } = content

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
            style={{ backgroundColor: '#E8DDD0', color: '#C06B4F' }}
          >
            {features.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: '#1A1A1A' }}>
            {features.heading}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A4A4A' }}>
            {features.subheading}
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-2xl border cursor-default transition-shadow duration-300 hover:shadow-xl"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E8DDD0',
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ backgroundColor: '#FFFBF2' }}
              >
                {card.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A1A1A' }}>
                {card.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#4A4A4A' }}>
                {card.description}
              </p>

              {/* Accent bar on hover */}
              <div
                className="mt-6 h-1 w-8 rounded-full transition-all duration-300 group-hover:w-16"
                style={{ backgroundColor: '#C06B4F' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
