import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { content } from '../data/content'
import ScrollCue from './ScrollCue'
import TechIcon from './TechIcon'

const { techStack } = content

const MotionLink = motion.create(Link)

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header — left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="eyebrow">{techStack.sectionLabel}</span>
          <h2
            className="font-display mt-5 mb-4 text-4xl md:text-5xl leading-[1.05]"
            style={{ color: 'var(--color-ink)', fontWeight: 700 }}
          >
            {techStack.heading}
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
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
              className="paper-card rounded-2xl p-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight" style={{ color: 'var(--color-ink)' }}>
                {cat.label}
              </h3>
              {cat.description && (
                <p className="mt-2 mb-5 text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                  {cat.description}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.08 + itemIdx * 0.05 }}
                    whileHover={{
                      scale: 1.06,
                      y: -2,
                      borderColor: item.color,
                      boxShadow: `0 0 0 1px ${item.color}, 0 0 18px -2px ${item.color}80`,
                      transition: { duration: 0.25 },
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border cursor-default"
                    style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                  >
                    <TechIcon name={item.name} color={item.color} />
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10 md:mt-14">
          <MotionLink
            to={techStack.cta.href}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold text-white"
            style={{ backgroundColor: 'var(--color-primary)', boxShadow: '0 10px 24px -10px rgba(183,92,62,0.7)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
          >
            {techStack.cta.label}
          </MotionLink>
        </div>

        <div className="flex justify-center mt-10 md:mt-14">
          <ScrollCue
            href="#career-timeline"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </div>
    </section>
  )
}
