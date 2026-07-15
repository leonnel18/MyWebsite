import { useEffect, useRef } from 'react'
import TimelineEntry from './TimelineEntry'

// Owns the scroll-to-match-on-filter behavior (SAD §6.2). Rows never
// unmount on filter change — all matching entries get `highlighted`,
// non-matching rows stay rendered, just visually de-emphasized.
export default function FullTimelineList({ entries, activeFilter, heading = 'Full Timeline' }) {
  const refs = useRef({})

  useEffect(() => {
    if (activeFilter === 'All') return
    const firstMatch = entries.find((e) => e.dateRange === activeFilter)
    if (!firstMatch) return
    const node = refs.current[firstMatch.id]
    if (!node) return
    // index.css's global reduced-motion rule already downgrades this to an
    // instant jump for those users — no extra JS gating needed (SAD §6.2).
    node.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [activeFilter, entries])

  return (
    <div className="mt-10">
      <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-ink)' }}>
        {heading}
      </h3>
      <div>
        {entries.map((entry) => {
          const highlighted = activeFilter === 'All' || entry.dateRange === activeFilter
          return (
            <div key={entry.id} ref={(node) => { refs.current[entry.id] = node }}>
              <TimelineEntry entry={entry} highlighted={highlighted} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
