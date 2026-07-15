import LogoOrMonogram from './LogoOrMonogram'

export default function TimelineEntry({ entry, highlighted }) {
  return (
    <div
      className="relative pl-8 md:pl-10 pb-8 last:pb-0"
      style={{ borderLeft: '2px solid var(--color-border)' }}
    >
      {/* Rail dot */}
      <span
        className="absolute -left-[7px] top-1 w-3 h-3 rounded-full"
        style={{
          backgroundColor: highlighted ? 'var(--color-primary)' : 'var(--color-border-strong)',
          boxShadow: highlighted ? '0 0 0 4px var(--color-bg-alt)' : 'none',
        }}
      />

      <div
        className="paper-card rounded-xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-start gap-3 md:gap-4 transition-all duration-300"
        style={{
          borderColor: highlighted ? 'var(--color-primary)' : 'var(--color-border)',
          boxShadow: highlighted
            ? '0 0 0 1px var(--color-primary), 0 12px 28px -18px rgba(36,28,23,0.28)'
            : undefined,
        }}
      >
        <LogoOrMonogram
          logo={entry.logo}
          initial={entry.initial}
          color={entry.color}
          name={entry.company}
          size="sm"
        />

        <div className="flex-1">
          <span
            className="inline-block text-xs font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full mb-1.5"
            style={{ backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-primary)' }}
          >
            {entry.dateRange}
          </span>
          <h4 className="text-base md:text-lg font-bold leading-snug" style={{ color: 'var(--color-ink)' }}>
            {entry.title}
          </h4>
          <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
            {entry.company}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
            {entry.summary}
          </p>
        </div>
      </div>
    </div>
  )
}
