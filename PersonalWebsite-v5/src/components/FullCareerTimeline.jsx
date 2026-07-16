import { motion } from 'framer-motion'
import { content } from '../data/content'
import { orderedEntries } from '../data/careerTimelineOrder'
import CareerTimelineRow from './CareerTimelineRow'

const { experience } = content

// Section 4 of the revamped /experience page — the same visual language as
// the homepage's CareerTimelineTeaser (CareerTimelineRow rows on a
// connector rail), but showing the complete career history with no "See
// full story" CTA, since we're already on the full page.
export default function FullCareerTimeline() {
  return (
    <section className="mb-20 md:mb-28">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-ink)' }}>
        {experience.fullTimelineHeading}
      </h2>
      <div>
        {orderedEntries.map((entry, i) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <CareerTimelineRow entry={entry} index={i} isLast={i === orderedEntries.length - 1} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
