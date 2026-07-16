import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { content } from '../data/content'
import CareerTimelineRow from './CareerTimelineRow'

const { careerTimeline, experience } = content

const MotionLink = motion.create(Link)

// Derived, not stored — single source of truth for career entries (SAD §4.2).
// "All 5 Corporate + top 2 Other Hustle" per BRD §8 resolution #5, in the
// display order Gino requested for the homepage teaser (the /experience
// page keeps each track in its own chronological order — see ExperiencePage.jsx).
const TEASER_ORDER = ['aktivasia', 'thepacklabs', 'axa', 'globe', 'balud-spo', 'balud-fe', 'jnj']
const allEntries = [...experience.tracks.corporate.entries, ...experience.tracks.otherHustle.entries]
const teaserEntries = TEASER_ORDER.map((id) => allEntries.find((e) => e.id === id)).filter(Boolean)

export default function CareerTimelineTeaser() {
  return (
    <section id="career-timeline" className="py-20 md:py-24" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <span className="eyebrow">{careerTimeline.sectionLabel}</span>
          <h2
            className="font-display mt-5 text-4xl md:text-5xl leading-[1.05]"
            style={{ color: 'var(--color-ink)', fontWeight: 700 }}
          >
            {careerTimeline.heading}
          </h2>
        </motion.div>

        <div>
          {teaserEntries.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <CareerTimelineRow entry={entry} index={i} isLast={i === teaserEntries.length - 1} />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-6 md:mt-10">
          <MotionLink
            to={careerTimeline.cta.href}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold text-white"
            style={{ backgroundColor: 'var(--color-primary)', boxShadow: '0 10px 24px -10px rgba(183,92,62,0.7)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
          >
            {careerTimeline.cta.label}
          </MotionLink>
        </div>
      </div>
    </section>
  )
}
