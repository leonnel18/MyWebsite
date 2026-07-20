const ICON_MAP = {
  observation: '💡',
  takeaway: '🎯',
}

const ACCENT_MAP = {
  observation: '#4D6BFE',
  takeaway: '#2A9A7D',
}

export default function InsightCard({ insight }) {
  const icon = ICON_MAP[insight.type] || '💡'
  const accent = ACCENT_MAP[insight.type] || ACCENT_MAP.observation

  return (
    <div
      className="paper-card rounded-2xl p-5"
      style={{
        borderLeft: `4px solid ${accent}`,
      }}
    >
      <div className="flex items-start gap-3">
        <span className="text-xl leading-none" aria-hidden="true">{icon}</span>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {insight.text}
        </p>
      </div>
    </div>
  )
}