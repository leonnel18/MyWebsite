import { useMemo, useState } from 'react'
import { content } from '../data/content'
import ProjectCard from '../components/ProjectCard'

const { projectsPage } = content
const { categories, projects } = projectsPage

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const counts = useMemo(() => {
    const c = { all: projects.length }
    Object.keys(categories).forEach((key) => {
      c[key] = projects.filter((p) => p.category === key).length
    })
    return c
  }, [])

  const visible = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-3xl mb-8 md:mb-10">
        <span className="eyebrow">{projectsPage.eyebrow}</span>
        <h1
          className="font-display mt-5 text-4xl md:text-6xl leading-[1.05]"
          style={{ color: 'var(--color-ink)', fontWeight: 700 }}
        >
          {projectsPage.heading}
        </h1>
        <p className="mt-5 text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {projectsPage.subheading}
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2.5 mb-10 md:mb-14">
        <button
          type="button"
          onClick={() => setActiveFilter('all')}
          className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer"
          style={
            activeFilter === 'all'
              ? { backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)', color: '#fff' }
              : { backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }
          }
        >
          All <span className="text-xs opacity-75 font-mono">{counts.all}</span>
        </button>
        {Object.entries(categories).map(([key, cat]) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveFilter(key)}
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer"
            style={
              activeFilter === key
                ? { backgroundColor: cat.color, borderColor: cat.color, color: '#fff' }
                : { backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }
            }
          >
            {cat.label} <span className="text-xs opacity-75 font-mono">{counts[key]}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} color={categories[project.category].color} />
        ))}
      </div>
    </div>
  )
}
