import { motion } from 'framer-motion'

// Ordinal proficiency scale, not a literal self-rating — width is the primary
// signal, color is a redundant (accessible) second cue on the same ramp per
// level. Numbers stay round on purpose: this reads as "roughly how deep" per
// dataviz guidance, not a precise measurement no self-assessment can back up.
const LEVEL_METER = {
  Expert: { percent: 90, color: 'var(--color-primary)' },
  Advanced: { percent: 80, color: 'var(--color-sage)' },
  Proficient: { percent: 70, color: 'var(--color-text-secondary)' },
  Intermediate: { percent: 55, color: 'var(--color-border-strong)' },
  Beginner: { percent: 40, color: 'var(--color-border)' },
}

export default function SkillMeter({ level, delay = 0 }) {
  const meter = LEVEL_METER[level] ?? LEVEL_METER.Proficient

  return (
    <div className="w-full">
      <div className="mb-1.5">
        <span className="text-xs font-semibold" style={{ color: meter.color }}>
          {level}
        </span>
      </div>
      <div
        className="h-1.5 rounded-full w-full overflow-hidden"
        style={{ backgroundColor: `color-mix(in srgb, ${meter.color} 18%, transparent)` }}
        role="img"
        aria-label={`${level}, ${meter.percent} percent`}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: meter.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${meter.percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
