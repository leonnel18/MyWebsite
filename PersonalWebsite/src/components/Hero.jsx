import { motion } from 'framer-motion'
import { content } from '../data/content'
import heroIllustration from '../assets/hero-illustration.png'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span
              className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: '#E8DDD0', color: '#C06B4F' }}
            >
              {content.profile.title}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6"
            style={{ color: '#1A1A1A' }}
          >
            {content.hero.headline}
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg leading-relaxed mb-8 max-w-lg"
            style={{ color: '#4A4A4A' }}
          >
            {content.hero.subheadline}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href={content.hero.ctaHref}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold text-white shadow-md"
              style={{ backgroundColor: '#C06B4F' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#9A5840')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C06B4F')}
            >
              {content.hero.cta} →
            </motion.a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold border-2 transition-all duration-200"
              style={{ borderColor: '#E8DDD0', color: '#1A1A1A' }}
            >
              See How It Works
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-4 mt-8"
          >
            <div className="flex -space-x-2">
              {['AXA', 'J&J', 'Globe'].map((b) => (
                <div
                  key={b}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: '#E8DDD0', color: '#4A4A4A' }}
                >
                  {b[0]}
                </div>
              ))}
            </div>
            <p className="text-sm" style={{ color: '#4A4A4A' }}>
              Trusted by <strong style={{ color: '#1A1A1A' }}>8+ organizations</strong> across PH & Asia
            </p>
          </motion.div>
        </div>

        {/* Illustration Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <div
            className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: '#EDE5D5' }}
          >
            <img
              src={heroIllustration}
              alt="Technical Project Manager and ADLC Architect illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
