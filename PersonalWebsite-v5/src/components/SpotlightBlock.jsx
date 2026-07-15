import { motion } from 'framer-motion'
import LogoOrMonogram from './LogoOrMonogram'
import StatTile from './StatTile'

// Renders for every Corporate entry that carries a `spotlight` (Requirement
// 2 — Hero is the current role, Previous Roles reuse this same component,
// just visually secondary). `variant="hero"` gets prominent sizing;
// `variant="secondary"` renders subdued. Stats grid only renders when
// `spotlight.stats` exists — Balud's Frontend & Data Developer entry has
// none, so no empty/broken grid is rendered for it.
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
      <div className="flex items-center gap-3 mb-4">
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
            {entry.company}
          </h3>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {entry.title} · {entry.dateRange}
          </p>
        </div>
      </div>

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
