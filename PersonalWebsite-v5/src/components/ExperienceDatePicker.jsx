// Section 2 of the revamped /experience page — a row of pill tabs, one per
// date bucket (content.experience.tabs). Purely presentational; the parent
// (ExperiencePage) owns which bucket is selected and re-filters section 3
// on change, per the requirement that picking a date swaps the boxes below.
export default function ExperienceDatePicker({ tabs, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 mb-10 md:mb-12" role="tablist" aria-label="Career experience by date range">
      {tabs.map((tab) => {
        const isActive = tab === active
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab)}
            className="px-5 py-2.5 rounded-full text-sm md:text-base font-semibold border transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
            style={{
              backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-surface)',
              borderColor: isActive ? 'var(--color-primary)' : 'var(--color-border)',
              color: isActive ? '#fff' : 'var(--color-text-secondary)',
            }}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
