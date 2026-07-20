import { AnimatePresence, motion } from 'framer-motion'

export default function AgentBreakdown({ agents, expanded, id }) {
  return (
    <AnimatePresence initial={false}>
      {expanded && (
        <motion.div
          id={id}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          {/* Header row */}
          <div
            className="grid grid-cols-[1fr_1.2fr_0.8fr_0.8fr] gap-2 text-xs font-semibold uppercase tracking-wide pt-3 pb-1.5"
            style={{ color: '#6B5D51' }}
          >
            <span>Agent</span>
            <span>Model</span>
            <span className="text-right">Tokens</span>
            <span className="text-right">Cost</span>
          </div>
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="grid grid-cols-[1fr_1.2fr_0.8fr_0.8fr] gap-2 text-sm py-1.5"
              style={{ borderTop: '1px solid rgba(36, 28, 23, 0.12)' }}
            >
              <span className="font-medium" style={{ color: '#241C17' }}>{agent.name}</span>
              <span style={{ color: '#6B5D51' }}>{agent.model}</span>
              <span className="text-right" style={{ color: '#241C17' }}>
                {(agent.tokens / 1000).toFixed(0)}K
              </span>
              <span className="text-right" style={{ color: '#6B5D51' }}>{agent.cost}</span>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}