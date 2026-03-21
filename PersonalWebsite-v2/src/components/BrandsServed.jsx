import { motion } from 'framer-motion'
import { content } from '../data/content'

const { brandsServed } = content

export default function BrandsServed() {
  return (
    <section
      id="brands-served"
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
          className="mb-12"
        >
          <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: '#4ADE80' }}>
            {brandsServed.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#F5F5F5' }}>
            {brandsServed.heading}
          </h2>
        </motion.div>

        {/* Horizontal scrolling brand list */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: '#1A1A1A' }}>
          {brandsServed.brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center justify-center px-6 py-8 text-sm font-medium text-center cursor-default transition-all duration-200"
              style={{ backgroundColor: '#0D0D0D', color: '#555555' }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#111111'
                e.currentTarget.style.color = '#F5F5F5'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#0D0D0D'
                e.currentTarget.style.color = '#555555'
              }}
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
