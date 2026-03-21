import { motion } from 'framer-motion'
import { content } from '../data/content'

const { features } = content

export default function Features() {
  return (
    <section
      id="features"
      className="py-24"
      style={{ borderTop: '1px solid #1A1A1A', backgroundColor: '#0D0D0D' }}
    >
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
            {features.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#F5F5F5' }}>
            {features.heading}
          </h2>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#1A1A1A]">
          {features.cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-8 border-b border-r border-[#1A1A1A] last:border-b-0 transition-all duration-300 cursor-default"
              style={{
                borderColor: '#1A1A1A',
                borderRight: i % 2 === 1 ? 'none' : undefined,
                borderBottom: i >= 2 ? 'none' : undefined,
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#111111')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {/* Tag */}
              <span
                className="inline-block text-xs font-mono px-2 py-0.5 rounded-sm mb-5"
                style={{ backgroundColor: 'rgba(74,222,128,0.1)', color: '#4ADE80' }}
              >
                {card.tag}
              </span>
              <h3 className="text-base font-semibold mb-3" style={{ color: '#F5F5F5' }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                {card.description}
              </p>
              {/* Arrow on hover */}
              <div className="mt-6 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#4ADE80' }}>
                → dig in
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
