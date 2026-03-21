import { motion } from 'framer-motion'
import { content } from '../data/content'

const { hero } = content

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <div className="max-w-5xl mx-auto px-6 py-28">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: '#4ADE80' }} />
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#4ADE80' }}>
            {hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-7"
          style={{ color: '#F5F5F5', maxWidth: '780px' }}
        >
          {hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-base md:text-lg leading-relaxed mb-10"
          style={{ color: '#888888', maxWidth: '620px' }}
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 mb-16"
        >
          <motion.a
            href={hero.ctaHref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-sm transition-all"
            style={{ backgroundColor: '#4ADE80', color: '#0A0A0A' }}
          >
            {hero.cta}
          </motion.a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-sm border transition-all"
            style={{ borderColor: '#222222', color: '#888888' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#555555'
              e.currentTarget.style.color = '#F5F5F5'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#222222'
              e.currentTarget.style.color = '#888888'
            }}
          >
            See the process →
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-6 pt-8"
          style={{ borderTop: '1px solid #1A1A1A' }}
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-3xl font-bold" style={{ color: '#4ADE80' }}>
                {stat.value}
              </span>
              <span className="text-xs tracking-widest uppercase" style={{ color: '#555555' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
