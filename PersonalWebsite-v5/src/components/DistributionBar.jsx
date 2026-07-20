import { motion } from 'framer-motion'

export default function DistributionBar({ models, totalTokens, label }) {
  return (
    <div className="mt-10">
      {/* Stacked bar */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full h-6 rounded-full overflow-hidden flex"
        style={{ backgroundColor: 'var(--color-border)' }}
      >
        {models.map((model) => {
          const width = totalTokens > 0 ? (model.tokensThisMonth / totalTokens) * 100 : 0
          return (
            <div
              key={model.id}
              style={{
                width: `${width}%`,
                backgroundColor: model.color,
              }}
            />
          )
        })}
      </motion.div>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-2 flex-wrap">
        {models.map((model) => (
          <div key={model.id} className="flex items-center gap-1.5">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: model.color }}
            />
            <span className="text-xs md:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {model.name} · {model.tokensDisplay}
            </span>
          </div>
        ))}
      </div>

      {/* Total label */}
      <p className="mt-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
        {label}
      </p>
    </div>
  )
}