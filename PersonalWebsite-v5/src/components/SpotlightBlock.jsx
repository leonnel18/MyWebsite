import { motion } from 'framer-motion'
import LogoOrMonogram from './LogoOrMonogram'
import StatTile from './StatTile'

// Same tag-pill palette as CareerTimelineRow's TAG_COLORS, kept local here
// since the two components don't otherwise share state.
const TAG_COLORS = ['#B75C3E', '#6E8F78', '#C9932E', '#5B7FA6', '#A65B72']

// Renders for every Corporate entry that carries a `spotlight` (Requirement
// 2 — Hero is the current role, Previous Roles reuse this same component,
// just visually secondary). `variant="hero"` gets prominent sizing;
// `variant="secondary"` renders subdued. Stats grid only renders when
// `spotlight.stats` exists — LeoPC's entry has none, so no empty/broken
// grid is rendered for it. Tag pills only render when `entry.tags` exists
// (LeoPC's entry has none).
export default function SpotlightBlock({ entry, variant = 'hero' }) {
  const { spotlight } = entry
  const isHero = variant === 'hero'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`paper-card rounded-2xl ${isHero ? 'p-6 md:p-8' : 'p-5 md:p-6'}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <LogoOrMonogram
          logo={entry.logo}
          initial={entry.initial}
          color={entry.color}
          name={entry.company}
          size={isHero ? 'md' : 'sm'}
        />
        <div>
          <h3
            className={`${isHero ? 'text-lg md:text-xl' : 'text-base md:text-lg'} font-bold leading-snug`}
            style={{ color: 'var(--color-ink)' }}
          >
            {entry.title}
          </h3>
          <p className="text-sm italic font-medium" style={{ color: 'var(--color-text-secondary)' }}>
            {entry.company} · {entry.dateRange}
          </p>
        </div>
      </div>

      {entry.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {entry.tags.map((tag, tagIdx) => {
            const color = TAG_COLORS[tagIdx % TAG_COLORS.length]
            return (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full border"
                style={{ borderColor: color + '55', color, backgroundColor: color + '14' }}
              >
                {tag}
              </span>
            )
          })}
        </div>
      )}

      <p
        className={`${isHero ? 'text-sm md:text-base' : 'text-sm'} leading-relaxed mb-5`}
        style={{ color: 'var(--color-text)' }}
      >
        {spotlight.paragraph}
      </p>

      {spotlight.stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {spotlight.stats.map((stat) => (
            <StatTile key={stat.label} value={stat.value} label={stat.label} large={isHero} />
          ))}
        </div>
      )}

      <div>
        <h4 className="text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: 'var(--color-primary)' }}>
          Key Contributions
        </h4>
        <ul className="space-y-1.5">
          {spotlight.contributions.map((bullet) => (
            <li key={bullet} className="text-sm leading-relaxed flex gap-2" style={{ color: 'var(--color-text)' }}>
              <span style={{ color: 'var(--color-primary)' }}>▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
