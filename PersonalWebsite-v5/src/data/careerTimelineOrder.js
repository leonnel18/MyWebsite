import { content } from './content'

const { experience } = content

// Derived, not stored — same pattern as CareerTimelineTeaser's local
// TEASER_ORDER (SAD §4.2), but covering every Corporate + Other Hustle
// entry in true reverse-chronological order (most recent start year
// first). Lives in its own data module (not a component file) so both
// FullCareerTimeline and ExperiencePage can import it without tripping
// eslint's react-refresh/only-export-components rule.
export const ALL_ENTRIES_ORDER = [
  'aktivasia',
  'thepacklabs',
  'cup-n-grind',
  'axa',
  'cosme-de-net',
  'globe',
  'balud-spo',
  'leopc',
  'balud-fe',
  'jnj',
]

const allEntries = [...experience.tracks.corporate.entries, ...experience.tracks.otherHustle.entries]

export const orderedEntries = ALL_ENTRIES_ORDER.map((id) => allEntries.find((e) => e.id === id)).filter(Boolean)
