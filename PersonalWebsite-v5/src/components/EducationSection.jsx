import { content } from '../data/content'
import EducationCard from './EducationCard'

const { experience } = content

export default function EducationSection() {
  return (
    <section className="mt-20 md:mt-28">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-ink)' }}>
        Education
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {experience.education.map((entry) => (
          <EducationCard key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  )
}
