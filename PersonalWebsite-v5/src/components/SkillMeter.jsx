import { motion } from 'framer-motion'

// Ordinal proficiency scale, not a literal self-rating — width is the primary
// signal, color is a redundant (accessible) second cue on the same ramp per
// level. Numbers stay round on purpose: this reads as "roughly how deep" per
// dataviz guidance, not a precise measurement no self-assessment can back up.
// `color` is the fill/track hue (an "ink" token — dark in light mode, light in
// dark mode — for the top 3 tiers; a "background" token — tracks the page
// background's own lightness — for the bottom 2). `text` is chosen per tier so
// the badge always contrasts with its own solid fill in BOTH themes: ink-token
// fills pair with var(--color-surface) (flips white<->near-black opposite the
// ink token), background-token fills pair with var(--color-ink) (flips the
// same direction the border tokens already do). Picking one fixed text color
// for all 5 tiers would fail contrast in one theme or the other.
const LEVEL_METER = {
  Expert: { percent: 90, color: 'var(--color-primary)', text: 'var(--color-surface)' },
  Advanced: { percent: 80, color: 'var(--color-sage)', text: 'var(--color-surface)' },
  Proficient: { percent: 70, color: 'var(--color-text-secondary)', text: 'var(--color-surface)' },
  Intermediate: { percent: 55, color: 'var(--color-border-strong)', text: 'var(--color-ink)' },
  Beginner: { percent: 40, color: 'var(--color-border)', text: 'var(--color-ink)' },
}

export default function SkillMeter({ level, delay = 0 }) {
  const meter = LEVEL_METER[level] ?? LEVEL_METER.Proficient

  return (
    <div
      className="relative w-full h-6 rounded-full overflow-hidden"
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
      {/* End cap, not a floating chip: spans the track's full height and sits
          flush against its right edge (no gap, no radius mismatch) so it
          reads as a built-in segment of the bar rather than a sticker
          placed on top of it. */}
      <span
        className="absolute inset-y-0 right-0 flex items-center px-2.5 rounded-r-full text-[10px] font-bold uppercase tracking-wide whitespace-nowrap"
        style={{ backgroundColor: meter.color, color: meter.text }}
      >
        {level}
      </span>
    </div>
  )
}
