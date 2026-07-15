import { content } from '../data/content'

const { experience } = content

export default function ExperienceHeader() {
  return (
    <div className="max-w-3xl mb-14 md:mb-20">
      <span className="eyebrow">{experience.eyebrow}</span>
      <h1
        className="font-display mt-5 text-4xl md:text-6xl leading-[1.05]"
        style={{ color: 'var(--color-ink)', fontWeight: 700 }}
      >
        {experience.heading}
      </h1>
    </div>
  )
}
