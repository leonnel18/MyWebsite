import { content } from '../data/content'
import ExperienceHeader from '../components/ExperienceHeader'
import SpotlightBlock from '../components/SpotlightBlock'
import FullTimelineList from '../components/FullTimelineList'
import EducationSection from '../components/EducationSection'

const { experience } = content

// Requirement 2 flow: Hero (current role) → Previous Roles (rest of
// Corporate, same SpotlightBlock, secondary variant) → Other Hustles &
// Ventures (condensed FullTimelineList, reused as-is) → Education.
const heroEntry = experience.tracks.corporate.entries.find((e) => e.current)
const previousRoles = experience.tracks.corporate.entries.filter((e) => !e.current)
const otherHustleEntries = experience.tracks.otherHustle.entries

export default function ExperiencePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <ExperienceHeader />

      {heroEntry && (
        <section className="mb-16 md:mb-20">
          <SpotlightBlock entry={heroEntry} variant="hero" />
        </section>
      )}

      {previousRoles.length > 0 && (
        <section className="mb-20 md:mb-28">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-ink)' }}>
            {experience.previousRolesHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {previousRoles.map((entry) => (
              <SpotlightBlock key={entry.id} entry={entry} variant="secondary" />
            ))}
          </div>
        </section>
      )}

      <section className="mb-20 md:mb-28">
        <FullTimelineList
          entries={otherHustleEntries}
          activeFilter="All"
          heading={experience.otherHustlesHeading}
        />
      </section>

      <EducationSection />
    </div>
  )
}
