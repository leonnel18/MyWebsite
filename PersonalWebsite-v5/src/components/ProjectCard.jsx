import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiArrowUpRight } from 'react-icons/fi'

// Expand-in-place case study — mirrors the approved layout draft (filter
// pills + accordion cards). Height animates via AnimatePresence rather than
// a hard show/hide so the surrounding grid doesn't jump.
export default function ProjectCard({ project, color }) {
  const [expanded, setExpanded] = useState(false)
  const { caseStudy } = project

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5 }}
      className="paper-card rounded-2xl p-6 flex flex-col"
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={{ backgroundColor: color + '1c', color }}
        >
          <span aria-hidden="true">{project.icon}</span>
        </div>
        {project.link && (
          <Link
            to={project.link}
            aria-label={`Open full case study: ${project.title}`}
            className="mt-1 opacity-60 hover:opacity-100 transition-opacity duration-200"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <FiArrowUpRight size={18} />
          </Link>
        )}
      </div>

      <h3 className="mt-3.5 text-lg font-bold tracking-tight leading-snug" style={{ color: 'var(--color-ink)' }}>
        {project.title}
      </h3>

      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full border"
            style={{ borderColor: color + '40', color, backgroundColor: color + '14' }}
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-3 text-sm leading-relaxed flex-grow" style={{ color: 'var(--color-text-secondary)' }}>
        {project.description}
      </p>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="mt-4 pt-3.5 flex items-center justify-between w-full text-left text-sm font-semibold cursor-pointer transition-colors duration-200"
        style={{ borderTop: '1px solid var(--color-border)', color: expanded ? 'var(--color-primary)' : 'var(--color-text-secondary)' }}
      >
        <span>{expanded ? 'Less' : 'Case Study'}</span>
        <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <FiChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 flex flex-col gap-3.5">
              <div>
                <p className="eyebrow" style={{ color: 'var(--color-sage)' }}>Problem</p>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>{caseStudy.problem}</p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: 'var(--color-sage)' }}>Solution</p>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>{caseStudy.solution}</p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: 'var(--color-sage)' }}>Result</p>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>{caseStudy.result}</p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: 'var(--color-sage)' }}>Tech Stack</p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {caseStudy.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg"
                      style={{ backgroundColor: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              {caseStudy.roadmap && (
                <div className="rounded-xl px-3.5 py-3" style={{ border: '1px dashed var(--color-border-strong)' }}>
                  <p className="eyebrow" style={{ color: 'var(--color-primary)' }}>Roadmap</p>
                  <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{caseStudy.roadmap}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
