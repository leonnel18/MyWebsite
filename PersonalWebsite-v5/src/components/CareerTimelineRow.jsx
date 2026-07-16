import LogoOrMonogram from './LogoOrMonogram'

// Warm-but-varied accent palette for tag pills — same set used by the
// 'What I Bring' cards (Features.jsx's TAG_COLORS) for a consistent look.
const TAG_COLORS = ['#B75C3E', '#6E8F78', '#C9932E', '#5B7FA6', '#A65B72']

// Vertical timeline row: year in a fixed-width left column, connector rail
// + dot (same visual language as TimelineEntry's rail), then a paper-card
// box (same treatment as TimelineEntry's cards, for clear separation
// between roles) holding the header (logo + title/company), paragraph
// summary, and colorful tag pills. Content = the entry's dense spotlight
// paragraph (Corporate) or its one-sentence summary (Other Hustle, which
// has no spotlight anymore).
export default function CareerTimelineRow({ entry, index = 0 }) {
  const paragraph = entry.spotlight ? entry.spotlight.paragraph : entry.summary

  return (
    <div className="relative flex gap-4 sm:gap-6 md:gap-8 pb-12 md:pb-16 last:pb-0">
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

      {/* Connector rail + boxed content */}
      <div
        className="relative flex-1 pl-6 md:pl-8"
        style={{ borderLeft: '2px solid var(--color-border)' }}
      >
        <span
          className="absolute -left-[7px] top-1 w-3 h-3 rounded-full"
          style={{ backgroundColor: 'var(--color-primary)', boxShadow: '0 0 0 4px var(--color-bg-alt)' }}
        />

        <div className="paper-card rounded-xl p-5 md:p-6">
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
              <p className="text-sm italic font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                {entry.company}
              </p>
            </div>
          </div>

          <p className="text-sm md:text-base leading-relaxed mb-3.5" style={{ color: 'var(--color-text)' }}>
            {paragraph}
          </p>

          {entry.tags && (
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag, tagIdx) => {
                const color = TAG_COLORS[(index + tagIdx) % TAG_COLORS.length]
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
        </div>
      </div>
    </div>
  )
}
