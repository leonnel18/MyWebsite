import { motion } from 'framer-motion'
import { content } from '../data/content'
import StatTile from '../components/StatTile'
import RosterBuilding from '../components/RosterBuilding'
import TokenDashboard from '../components/TokenDashboard'

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
      {system.workstreams && (
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
          {system.workstreams.map((w) => (
            <li key={w.label} className="text-xs leading-snug">
              <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>
                {w.label}
              </span>
              <span style={{ color: 'var(--color-text-secondary)' }}> — {w.detail}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

function PipelineStep({ step, isLast, compact = false }) {
  return (
    <div className="flex items-center">
      <div
        className="paper-card rounded-xl text-center shrink-0"
        style={{
          minWidth: compact ? '92px' : '108px',
          padding: compact ? '0.5rem 0.75rem' : '0.75rem 1rem',
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        {step.gate === 'hard' && (
          <span
            className="block mx-auto mb-1.5 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: 'var(--color-primary)' }}
            title="Hard gate — needs explicit sign-off"
          />
        )}
        <p className={compact ? 'text-xs font-bold' : 'text-sm font-bold'} style={{ color: 'var(--color-ink)' }}>
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

function RosterTable({ roster }) {
  const hasModels = roster.some((r) => r.model)
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full text-sm" style={{ minWidth: '420px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
            <th
              className="text-left font-semibold uppercase text-[11px] tracking-wide py-2 pr-3"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Role
            </th>
            <th
              className="text-left font-semibold uppercase text-[11px] tracking-wide py-2 pr-3"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Personality
            </th>
            {hasModels && (
              <th
                className="text-left font-semibold uppercase text-[11px] tracking-wide py-2"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Model
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {roster.map((r) => (
            <tr key={r.role} style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td className="py-2 pr-3 font-medium whitespace-nowrap" style={{ color: 'var(--color-text)' }}>
                {r.role}
              </td>
              <td className="py-2 pr-3 whitespace-nowrap" style={{ color: 'var(--color-text-secondary)' }}>
                {r.personality}
              </td>
              {hasModels && (
                <td className="py-2 font-mono text-xs whitespace-nowrap" style={{ color: 'var(--color-primary)' }}>
                  {r.model || '—'}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CycleList({ steps }) {
  return (
    <ol className="mt-4 space-y-1.5">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-2.5 text-sm">
          <span className="font-mono text-xs shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <span style={{ color: 'var(--color-text-secondary)' }}>{step}</span>
        </li>
      ))}
    </ol>
  )
}

function CrewCard({ crew, index }) {
  const accent = SYSTEM_COLOR[crew.system]
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.06 }}
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

      <RosterTable roster={crew.roster} />

      {crew.cycle && (
        <div className="mt-5 pt-5" style={{ borderTop: '1px solid var(--color-border)' }}>
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>
            The cycle
          </p>
          <CycleList steps={crew.cycle} />
        </div>
      )}

      {crew.pipeline && (
        <div className="mt-5 pt-5" style={{ borderTop: '1px solid var(--color-border)' }}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>
            Pipeline
          </p>
          <div className="flex flex-wrap items-center gap-y-2 overflow-x-auto pb-1">
            {crew.pipeline.map((step, i) => (
              <PipelineStep key={step.id} step={step} isLast={i === crew.pipeline.length - 1} compact />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function AgenticWorkflowsPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-16 md:pt-24">
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
        <p className="text-sm text-center" style={{ color: 'var(--color-text-secondary)' }}>
          Every role above, in one building — orchestrators on the executive floor, discovery crews either side of the
          atrium, build crews on the ground, the record-keepers in the basement.
        </p>
      </div>

      {/* Real usage data behind the roster above — full-bleed section, own padding */}
      <TokenDashboard />

      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {/* The two systems */}
      <div id="systems" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 md:mb-20">
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
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {agenticWorkflows.pipeline.gateChecks.map((g) => (
            <div key={g.phase} className="flex gap-2.5 text-sm">
              <span
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: 'var(--color-primary)' }}
              />
              <p style={{ color: 'var(--color-text-secondary)' }}>
                <strong style={{ color: 'var(--color-ink)' }}>{g.phase}</strong> — {g.checks}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Crews */}
      <div className="mb-14 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-ink)' }}>
          The crews
        </h2>
        <div className="grid grid-cols-1 gap-6">
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
    </>
  )
}
