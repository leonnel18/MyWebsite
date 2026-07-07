import { motion } from 'framer-motion'
import { content } from '../data/content'

const { features } = content

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <span className="eyebrow">{features.sectionLabel}</span>
          <h2
            className="mt-5 mb-4 text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]"
            style={{ color: '#241C17' }}
          >
            {features.heading}
          </h2>
          <p className="text-lg" style={{ color: '#6B5D51' }}>
            {features.subheading}
          </p>
        </motion.div>

        {/* Service rows */}
        <div>
          {features.cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="group grid grid-cols-1 md:grid-cols-[auto_1.1fr_1fr] gap-4 md:gap-10 items-start py-8 md:py-10 border-t"
              style={{ borderColor: '#E4D8C6' }}
            >
              {/* Index */}
              <span
                className="text-sm font-semibold tabular-nums pt-1"
                style={{ color: '#B75C3E' }}
              >
                (0{i + 1})
              </span>

              {/* Title + tags */}
              <div>
                <h3
                  className="text-2xl md:text-3xl font-bold tracking-tight mb-4 transition-colors duration-200"
                  style={{ color: '#241C17' }}
                >
                  {card.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {card.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium border"
                      style={{ borderColor: '#D8C7AF', color: '#6B5D51', backgroundColor: '#FFFDF8' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="leading-relaxed md:pt-1" style={{ color: '#6B5D51' }}>
                {card.description}
              </p>
            </motion.div>
          ))}
          <div className="border-t" style={{ borderColor: '#E4D8C6' }} />
        </div>
      </div>
    </section>
  )
}
