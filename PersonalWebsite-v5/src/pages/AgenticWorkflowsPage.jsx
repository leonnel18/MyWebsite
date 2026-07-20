import { motion } from 'framer-motion'
import { content } from '../data/content'
import StatTile from '../components/StatTile'
import RosterBuilding from '../components/RosterBuilding'

const { agenticWorkflows } = content

const SYSTEM_COLOR = {
  friday: 'var(--color-sage)',
  darkling: 'var(--color-primary)',
}

function SystemCard({ system, index }) {
  const accent = SYSTEM_COLOR[system.id]
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="paper-card rounded-2xl p-6"
      style={{ borderLeft: `3px solid ${accent}` }}
    >
      <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: accent }}>
        {system.tagline}
      </p>
      <h3 className="font-display mt-1 text-2xl font-bold" style={{ color: 'var(--color-ink)' }}>
        {system.name}
      </h3>
      <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {system.blurb}
      </p>
    </motion.div>
  )
}

function PipelineStep({ step, isLast }) {
  return (
    <div className="flex items-center">
      <div
        className="paper-card rounded-xl px-4 py-3 text-center shrink-0"
        style={{ minWidth: '108px', backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
      >
        {step.gate === 'hard' && (
          <span
            className="block mx-auto mb-1.5 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: 'var(--color-primary)' }}
            title="Hard gate — needs explicit sign-off"
          />
        )}
        <p className="text-sm font-bold" style={{ color: 'var(--color-ink)' }}>
          {step.label}
        </p>
        <p className="mt-0.5 text-[11px]" style={{ color: 'var(--color-text-secondary)' }}>
          {step.detail}
        </p>
      </div>
      {!isLast && (
        <span className="mx-2 md:mx-3 text-lg shrink-0" style={{ color: 'var(--color-border-strong)' }} aria-hidden="true">
          &rarr;
        </span>
      )}
    </div>
  )
}

function CrewCard({ crew, index }) {
  const accent = SYSTEM_COLOR[crew.system]
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="paper-card rounded-2xl p-6"
    >
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: accent }} />
        <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--color-ink)' }}>
          {crew.name}
        </h3>
      </div>
      <p className="mt-2 text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
        {crew.blurb}
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {crew.roster.map((role) => (
          <li
            key={role}
            className="text-xs font-medium rounded-full px-2.5 py-1"
            style={{ backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-text)', border: '1px solid var(--color-border)' }}
          >
            {role}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function AgenticWorkflowsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-3xl mb-10 md:mb-14">
        <span className="eyebrow">{agenticWorkflows.eyebrow}</span>
        <h1
          className="font-display mt-5 text-4xl md:text-6xl leading-[1.05]"
          style={{ color: 'var(--color-ink)', fontWeight: 700 }}
        >
          {agenticWorkflows.heading}
        </h1>
        <p className="mt-5 text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {agenticWorkflows.subheading}
        </p>
      </div>

      {/* Stat row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
        {agenticWorkflows.stats.map((stat) => (
          <StatTile key={stat.label} value={stat.value} label={stat.label} large />
        ))}
      </div>

      {/* The roster, visualized */}
      <div className="mb-4">
        <RosterBuilding />
      </div>
      <p className="mb-14 md:mb-20 text-sm text-center" style={{ color: 'var(--color-text-secondary)' }}>
        Every role above, in one building — orchestrators on the executive floor, discovery crews either side of the
        atrium, build crews on the ground, the record-keepers in the basement.
      </p>

      {/* The two systems */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 md:mb-20">
        {agenticWorkflows.systems.map((system, i) => (
          <SystemCard key={system.id} system={system} index={i} />
        ))}
      </div>

      {/* Pipeline */}
      <div className="mb-14 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2" style={{ color: 'var(--color-ink)' }}>
          {agenticWorkflows.pipeline.label}
        </h2>
        <p className="mb-6 text-sm md:text-base max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
          {agenticWorkflows.pipeline.note}
        </p>
        <div className="flex flex-wrap items-center gap-y-3 overflow-x-auto pb-2">
          {agenticWorkflows.pipeline.steps.map((step, i) => (
            <PipelineStep key={step.id} step={step} isLast={i === agenticWorkflows.pipeline.steps.length - 1} />
          ))}
        </div>
      </div>

      {/* Crews */}
      <div className="mb-14 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-ink)' }}>
          The crews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agenticWorkflows.crews.map((crew, i) => (
            <CrewCard key={crew.id} crew={crew} index={i} />
          ))}
        </div>
      </div>

      {/* Model note */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 0.5 }}
        className="paper-card rounded-2xl p-6 md:p-8"
      >
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3" style={{ color: 'var(--color-ink)' }}>
          {agenticWorkflows.modelNote.heading}
        </h2>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {agenticWorkflows.modelNote.body}
        </p>
      </motion.div>
    </div>
  )
}
