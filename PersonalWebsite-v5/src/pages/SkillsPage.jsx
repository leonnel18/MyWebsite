import { motion } from 'framer-motion'
import { content } from '../data/content'
import StatTile from '../components/StatTile'
import TechIcon from '../components/TechIcon'
import SkillLevelBadge from '../components/SkillLevelBadge'
import SkillMeter from '../components/SkillMeter'

const { skillsPage, techStack } = content

const allItems = techStack.categories.flatMap((cat) => cat.items)
const expertCount = allItems.filter((item) => item.level === 'Expert').length

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-3xl mb-10 md:mb-14">
        <span className="eyebrow">{skillsPage.eyebrow}</span>
        <h1
          className="font-display mt-5 text-4xl md:text-6xl leading-[1.05]"
          style={{ color: 'var(--color-ink)', fontWeight: 700 }}
        >
          {skillsPage.heading}
        </h1>
        <p className="mt-5 text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {skillsPage.subheading}
        </p>
      </div>

      {/* Stat row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
        <StatTile value={skillsPage.yearsValue} label={skillsPage.statLabels.years} large />
        <StatTile value={String(allItems.length)} label={skillsPage.statLabels.tools} large />
        <StatTile value={String(techStack.categories.length)} label={skillsPage.statLabels.domains} large />
        <StatTile value={String(expertCount)} label={skillsPage.statLabels.expert} large />
      </div>

      {/* Legend */}
      <div className="paper-card rounded-2xl p-5 md:p-6 mb-14 md:mb-20">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 flex-wrap">
          {skillsPage.legend.map((entry) => (
            <div key={entry.level} className="flex items-start gap-3">
              <SkillLevelBadge level={entry.level} className="mt-0.5 shrink-0" />
              <p className="text-sm leading-snug" style={{ color: 'var(--color-text-secondary)' }}>
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techStack.categories.map((cat, catIdx) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.5, delay: (catIdx % 2) * 0.08 }}
            className="paper-card rounded-2xl p-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight" style={{ color: 'var(--color-ink)' }}>
              {cat.label}
            </h2>
            {cat.description && (
              <p className="mt-2 mb-5 text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                {cat.description}
              </p>
            )}
            <ul className="flex flex-col divide-y" style={{ borderColor: 'var(--color-border)' }}>
              {cat.items.map((item, itemIdx) => (
                <li key={item.name} className="py-3.5 first:pt-0 last:pb-0" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="flex items-center gap-3 mb-2.5">
                    <TechIcon name={item.name} color={item.color} className="w-8 h-8 rounded-lg" />
                    <span className="text-sm md:text-base font-medium truncate" style={{ color: 'var(--color-text)' }}>
                      {item.name}
                    </span>
                  </div>
                  <SkillMeter level={item.level} delay={itemIdx * 0.04} />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
