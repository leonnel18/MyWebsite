import { motion } from 'framer-motion'
import { content } from '../data/content'
import StatTile from './StatTile'
import ModelCard from './ModelCard'
import DistributionBar from './DistributionBar'
import InsightCard from './InsightCard'
import ScrollCue from './ScrollCue'

const { tokenDashboard } = content

export default function TokenDashboard() {
  if (!tokenDashboard) return null

  const { kpis, models, insights } = tokenDashboard

  // Derived values
  const totalTokens = models.reduce((sum, m) => sum + m.tokensThisMonth, 0)
  const formattedTotal =
    totalTokens >= 1_000_000
      ? (totalTokens / 1_000_000).toFixed(1) + 'M'
      : (totalTokens / 1000).toFixed(0) + 'K'
  const distributionLabel = tokenDashboard.distributionLabel.replace('{total}', formattedTotal)

  // KPI tiles
  const kpiItems = [
    { value: kpis.totalTokensMonth, label: 'Tokens This Month' },
    { value: kpis.modelsActive, label: 'Models Active' },
    { value: kpis.avgCostPerQuery, label: 'Avg Cost / Query' },
    { value: kpis.topModel, label: 'Top Model' },
    { value: kpis.costPerModel, label: 'Cost / Model' },
    { value: kpis.costPerAgent, label: 'Cost / Agent' },
  ]

  return (
    <section id="token-dashboard" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="eyebrow">{tokenDashboard.sectionLabel}</span>
          <h2
            className="font-display mt-5 mb-4 text-4xl md:text-5xl leading-[1.05]"
            style={{ color: 'var(--color-ink)', fontWeight: 700 }}
          >
            {tokenDashboard.heading}
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            {tokenDashboard.subheading}
          </p>
        </motion.div>

        {/* KPI grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {kpiItems.map((item) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <StatTile value={item.value} label={item.label} />
            </motion.div>
          ))}
        </motion.div>

        {/* Model cards or empty state */}
        {models.length === 0 ? (
          <p
            className="text-center italic py-12"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            No model usage data available yet. Check back soon.
          </p>
        ) : (
          <>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {models.map((model) => (
                <motion.div
                  key={model.id}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
                  }}
                >
                  <ModelCard
                    model={model}
                    totalTokens={totalTokens}
                    isOllamaCloud={model.id === 'ollama-cloud'}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Distribution bar */}
            <DistributionBar
              models={models}
              totalTokens={totalTokens}
              label={distributionLabel}
            />
          </>
        )}

        {/* Insights section — only if insights exist and models exist */}
        {insights.length > 0 && models.length > 0 && (
          <div className="mt-14">
            <h3
              className="font-display text-2xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Insights
            </h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {insights.map((insight, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <InsightCard insight={insight} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Scroll cue */}
        <div className="flex justify-center mt-10 md:mt-14">
          <ScrollCue
            href="#career-timeline"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </div>
    </section>
  )
}