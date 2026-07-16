import { useState } from 'react'
import { content } from '../data/content'
import ExperienceHeader from '../components/ExperienceHeader'
import ExperienceDatePicker from '../components/ExperienceDatePicker'
import SpotlightBlock from '../components/SpotlightBlock'
import FullCareerTimeline from '../components/FullCareerTimeline'
import EducationSection from '../components/EducationSection'
import { orderedEntries } from '../data/careerTimelineOrder'

const { experience } = content

// Revamped /experience page (4 parts):
// 1. ExperienceHeader        — "Full Journey" / "Career Experience"
// 2. ExperienceDatePicker    — tabs over experience.tabs, controls `active`
// 3. Boxed grid              — one SpotlightBlock per entry in the active
//    bucket, drawn from the same reverse-chronological order as the full
//    timeline (`orderedEntries`, exported by FullCareerTimeline) so a
//    entry's position is consistent between sections 3 and 4.
// 4. FullCareerTimeline      — every entry, homepage-teaser visual style
export default function ExperiencePage() {
  const [active, setActive] = useState(experience.tabs[0])
  const activeEntries = orderedEntries.filter((entry) => entry.bucket === active)

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <ExperienceHeader />

      <ExperienceDatePicker tabs={experience.tabs} active={active} onChange={setActive} />

      <section className="mb-20 md:mb-28">
        <div key={active} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {activeEntries.map((entry) => (
            <SpotlightBlock key={entry.id} entry={entry} variant="secondary" />
          ))}
        </div>
      </section>

      <FullCareerTimeline />

      <EducationSection />
    </div>
  )
}
