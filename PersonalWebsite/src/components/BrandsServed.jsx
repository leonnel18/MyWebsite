import { motion } from 'framer-motion'
import { content } from '../data/content'

const { brandsServed } = content

export default function BrandsServed() {
  return (
    <section
      id="brands-served"
      className="py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
            style={{ backgroundColor: '#E8DDD0', color: '#C06B4F' }}
          >
            {brandsServed.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#1A1A1A' }}>
            {brandsServed.heading}
          </h2>
        </motion.div>

        {/* Brand card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {brandsServed.brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border text-center cursor-default transition-shadow duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#E8DDD0' }}
            >
              {/* Brand monogram */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-sm font-bold shadow-sm"
                style={{ backgroundColor: brand.color }}
              >
                {brand.initial}
              </div>
              <p className="text-sm font-medium leading-snug" style={{ color: '#1A1A1A' }}>
                {brand.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
