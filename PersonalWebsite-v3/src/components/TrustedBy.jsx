import { motion } from 'framer-motion'
import { content } from '../data/content'

const { trustedBy } = content

export default function TrustedBy() {
  return (
    <section
      id="trusted-by"
      className="py-16 md:py-20"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6B6B6B' }}>
            {trustedBy.heading}
          </p>
        </motion.div>

        {/* Brand row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-8"
        >
          {trustedBy.brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="px-5 py-2.5 rounded-full border font-medium text-sm transition-all duration-200 hover:shadow-sm cursor-default"
              style={{
                borderColor: '#E8E0D8',
                color: '#6B6B6B',
                backgroundColor: '#FAF7F2',
              }}
            >
              {brand}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
