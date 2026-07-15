export default function EducationCard({ entry }) {
  return (
    <div className="paper-card rounded-2xl p-6">
      <span
        className="inline-block text-xs font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full mb-3"
        style={{ backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-primary)' }}
      >
        {entry.dateRange}
      </span>
      <h3 className="text-lg md:text-xl font-bold leading-snug" style={{ color: 'var(--color-ink)' }}>
        {entry.school}
      </h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {entry.detail}
      </p>
    </div>
  )
}
