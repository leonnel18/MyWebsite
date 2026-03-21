import { motion } from 'framer-motion'
import { content } from '../data/content'

const { techStack } = content

const TechIcon = ({ name, color }) => (
  <div
    className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
    style={{ backgroundColor: color + '18', color }}
  >
    {name.slice(0, 2).toUpperCase()}
  </div>
)

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-16 md:py-24"
      style={{ backgroundColor: 'rgba(255,255,255,0.65)' }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header */}
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
            {techStack.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: '#1A1A1A' }}>
            {techStack.heading}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#4A4A4A' }}>
            {techStack.subheading}
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.categories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="rounded-2xl border p-6"
              style={{ borderColor: '#E8DDD0', backgroundColor: '#FFFBF2' }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C06B4F' }}>
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.08 + itemIdx * 0.05 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border cursor-default transition-shadow duration-200 hover:shadow-md"
                    style={{ backgroundColor: '#FFFFFF', borderColor: '#E8DDD0' }}
                  >
                    <TechIcon name={item.name} color={item.color} />
                    <span className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
