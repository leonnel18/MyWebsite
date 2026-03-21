import { motion } from 'framer-motion'
import { content } from '../data/content'

const { techStack } = content

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-24"
      style={{ borderTop: '1px solid #1A1A1A' }}
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
            {techStack.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#F5F5F5' }}>
            {techStack.heading}
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="space-y-8">
          {techStack.categories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="flex flex-col md:flex-row md:items-start gap-4"
              style={{ borderTop: catIdx === 0 ? 'none' : '1px solid #1A1A1A', paddingTop: catIdx === 0 ? '0' : '2rem' }}
            >
              {/* Category label */}
              <div className="md:w-44 flex-shrink-0">
                <p className="text-xs font-mono uppercase tracking-widest pt-1" style={{ color: '#555555' }}>
                  {cat.label}
                </p>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, itemIdx) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.05 + itemIdx * 0.04 }}
                    whileHover={{ borderColor: '#4ADE80', color: '#4ADE80' }}
                    className="px-3 py-1.5 text-sm border rounded-sm cursor-default transition-all duration-200"
                    style={{ borderColor: '#2A2A2A', color: '#888888' }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
