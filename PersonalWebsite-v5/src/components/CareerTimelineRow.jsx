import LogoOrMonogram from './LogoOrMonogram'

// Vertical timeline row: year in a fixed-width left column, connector rail
// + dot (same visual language as TimelineEntry's rail), then header
// (logo + title/company), paragraph summary, and dark-grey tag pills.
// Content = the entry's dense spotlight paragraph (Corporate) or its
// one-sentence summary (Other Hustle, which has no spotlight anymore).
export default function CareerTimelineRow({ entry }) {
  const paragraph = entry.spotlight ? entry.spotlight.paragraph : entry.summary

  return (
    <div className="relative flex gap-4 sm:gap-6 md:gap-8 pb-10 last:pb-0">
      {/* Year column — fixed width at every breakpoint so the row never
          needs to stack on narrow screens (375px), just stays narrow. */}
      <div className="w-16 sm:w-24 md:w-28 flex-shrink-0 pt-1 text-right">
        <span
          className="text-xs sm:text-sm md:text-base font-bold leading-tight"
          style={{ color: 'var(--color-primary)' }}
        >
          {entry.dateRange}
        </span>
      </div>

      {/* Connector rail + content */}
      <div
        className="relative flex-1 pl-6 md:pl-8"
        style={{ borderLeft: '2px solid var(--color-border)' }}
      >
        <span
          className="absolute -left-[7px] top-1 w-3 h-3 rounded-full"
          style={{ backgroundColor: 'var(--color-primary)', boxShadow: '0 0 0 4px var(--color-bg-alt)' }}
        />

        <div className="flex items-center gap-3 mb-2.5">
          <LogoOrMonogram
            logo={entry.logo}
            initial={entry.initial}
            color={entry.color}
            name={entry.company}
            size="sm"
          />
          <div>
            <h3 className="text-base md:text-lg font-bold leading-snug" style={{ color: 'var(--color-ink)' }}>
              {entry.title}
            </h3>
            <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
              {entry.company}
            </p>
          </div>
        </div>

        <p className="text-sm md:text-base leading-relaxed mb-3.5" style={{ color: 'var(--color-text)' }}>
          {paragraph}
        </p>

        {entry.tags && (
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: 'var(--color-text-secondary)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
