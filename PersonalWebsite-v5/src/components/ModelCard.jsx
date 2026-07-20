import { useState } from 'react'
import { motion } from 'framer-motion'
import AgentBreakdown from './AgentBreakdown'

export default function ModelCard({ model, totalTokens, isOllamaCloud }) {
  const [expanded, setExpanded] = useState(false)

  const share = totalTokens > 0 ? (model.tokensThisMonth / totalTokens) * 100 : 0
  const statusColor = model.status === 'active' ? 'var(--color-sage)' : 'var(--color-text-secondary)'
  const statusLabel = model.status === 'active' ? 'Active' : 'Idle'

  // Ollama Cloud: light warm background with dark text overrides
  const ollamaStyle = isOllamaCloud
    ? {
        backgroundColor: '#F5E6D3',
        borderColor: 'var(--color-border)',
        color: '#241C17',
      }
    : {}

  const headingColor = isOllamaCloud ? '#241C17' : 'var(--color-ink)'
  const secondaryColor = isOllamaCloud ? '#6B5D51' : 'var(--color-text-secondary)'
  const trackBg = isOllamaCloud ? 'rgba(36, 28, 23, 0.12)' : 'var(--color-border)'

  const showAgentToggle = isOllamaCloud && model.agents?.length > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="paper-card rounded-2xl overflow-hidden"
      style={ollamaStyle}
    >
      {/* Color bar */}
      <div className="h-1 w-full" style={{ backgroundColor: model.color }} />

      <div className="p-5">
        {/* Model name */}
        <h3 className="text-lg font-bold tracking-tight" style={{ color: headingColor }}>
          {model.name}
        </h3>

        {/* Tokens + cost */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-2xl font-bold" style={{ color: isOllamaCloud ? '#241C17' : 'var(--color-primary)' }}>
            {model.tokensDisplay}
          </span>
          <span className="text-sm" style={{ color: secondaryColor }}>tokens</span>
        </div>
        <p className="text-sm mt-0.5" style={{ color: secondaryColor }}>
          {model.costDisplay}
        </p>

        {/* Usage bar */}
        <div className="mt-4">
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: trackBg }}>
            <div
              className="h-full rounded-full"
              style={{
                width: `${share}%`,
                backgroundColor: model.color,
              }}
            />
          </div>
        </div>

        {/* Status dot */}
        <div className="mt-3 flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: statusColor }}
          />
          <span className="text-xs" style={{ color: secondaryColor }}>{statusLabel}</span>
        </div>

        {/* Agent toggle (Ollama Cloud only) */}
        {showAgentToggle && (
          <>
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-controls="ollama-agents"
              className="mt-4 text-xs font-medium transition-opacity hover:opacity-70"
              style={{ color: secondaryColor }}
            >
              {expanded ? '▲ Hide agents' : `▼ Show ${model.agents.length} agents`}
            </button>
            <AgentBreakdown agents={model.agents} expanded={expanded} id="ollama-agents" />
          </>
        )}
      </div>
    </motion.div>
  )
}