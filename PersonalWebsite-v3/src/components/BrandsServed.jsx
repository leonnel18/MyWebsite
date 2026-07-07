import { motion } from 'framer-motion'
import { content } from '../data/content'

const { brandsServed } = content

export default function BrandsServed() {
  return (
    <section id="brands-served" className="py-20 md:py-24" style={{ backgroundColor: '#F4EBDC' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <span className="eyebrow">{brandsServed.sectionLabel}</span>
          <h2
            className="font-display mt-5 text-4xl md:text-5xl leading-[1.05]"
            style={{ color: '#241C17', fontWeight: 700 }}
          >
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
              whileHover={{
                scale: 1.04,
                y: -4,
                borderColor: brand.color,
                boxShadow: `0 0 0 1px ${brand.color}, 0 0 18px -2px ${brand.color}80`,
                transition: { duration: 0.25 },
              }}
              className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border text-center cursor-default"
              style={{ backgroundColor: '#FFFDF8', borderColor: '#E4D8C6' }}
            >
              {brand.logo ? (
                /* Brand logo */
                <div className="w-full h-14 flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    loading="lazy"
                    className="max-h-full max-w-[85%] object-contain"
                  />
                </div>
              ) : (
                /* Monogram fallback (no logo provided) */
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: brand.color, boxShadow: `0 8px 18px -10px ${brand.color}` }}
                >
                  {brand.initial}
                </div>
              )}
              <p className="text-sm font-medium leading-snug" style={{ color: '#2A211B' }}>
                {brand.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
