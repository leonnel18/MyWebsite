import { motion } from 'framer-motion'
import { content } from '../data/content'
import ScrollCue from './ScrollCue'

const { hero } = content

// Amber accent — same fixed swatch used for the Features tag palette and
// Tech Stack items; kept as a literal hex (not a theme token) since it's a
// decorative accent, not semantic ink/surface/text.
const AMBER = '#C9932E'

/* Floating geo shapes radiating outward from the center illustration.
   Fills cycle through the site's accent palette (terracotta / sage / amber);
   borders + shadows use --color-ink so they flip automatically between
   light and dark themes. */
const geoShapes = [
  /* ── Inner ring ── */
  { style: { top: '38%', left: '18%', width: 18, height: 18, background: 'var(--color-primary)', border: '2px solid var(--color-ink)', boxShadow: '2px 2px 0 var(--color-ink)', transform: 'rotate(20deg)' }, delay: 0.1 },
  { style: { top: '35%', right: '18%', width: 16, height: 16, background: 'var(--color-sage)', border: '2px solid var(--color-ink)', borderRadius: '50%', boxShadow: '2px 2px 0 var(--color-ink)' }, delay: 0.15 },
  { style: { top: '42%', left: '20%', width: 14, height: 14, background: 'var(--color-sage)', border: '2px solid var(--color-ink)', borderRadius: '50%' }, delay: 0.2 },
  { style: { top: '45%', right: '20%', width: 16, height: 16, background: 'var(--color-primary)', border: '2px solid var(--color-ink)', boxShadow: '2px 2px 0 var(--color-ink)', transform: 'rotate(45deg)' }, delay: 0.25 },
  { style: { bottom: '28%', left: '22%', width: 14, height: 14, background: AMBER, border: '2px solid var(--color-ink)', transform: 'rotate(30deg)' }, delay: 0.3 },
  { style: { bottom: '30%', right: '22%', width: 12, height: 12, background: 'var(--color-primary)', border: '2px solid var(--color-ink)', borderRadius: '50%' }, delay: 0.35 },

  /* ── Mid ring ── */
  { style: { top: '28%', left: '10%', width: 24, height: 24, background: 'var(--color-primary)', border: '2px solid var(--color-ink)', boxShadow: '2px 2px 0 var(--color-ink)', transform: 'rotate(15deg)' }, delay: 0.0 },
  { style: { top: '25%', right: '10%', width: 22, height: 22, background: 'var(--color-sage)', border: '2px solid var(--color-ink)', boxShadow: '2px 2px 0 var(--color-ink)', transform: 'rotate(30deg)' }, delay: 0.1 },
  { style: { top: '50%', left: '8%', width: 20, height: 20, background: 'transparent', border: '2px solid var(--color-primary)', transform: 'rotate(45deg)' }, delay: 0.4 },
  { style: { top: '52%', right: '8%', width: 26, height: 26, background: 'var(--color-sage)', border: '2px solid var(--color-ink)', boxShadow: '3px 3px 0 var(--color-ink)', transform: 'rotate(-15deg)' }, delay: 0.2 },
  { style: { top: '55%', left: '12%', width: 18, height: 18, background: AMBER, border: '2px solid var(--color-ink)', borderRadius: '50%', boxShadow: '2px 2px 0 var(--color-ink)' }, delay: 0.5 },
  { style: { top: '58%', right: '12%', width: 16, height: 16, background: 'var(--color-primary)', border: '2px solid var(--color-ink)', boxShadow: '2px 2px 0 var(--color-ink)', transform: 'rotate(60deg)' }, delay: 0.55 },
  { style: { bottom: '22%', left: '14%', width: 20, height: 20, background: 'var(--color-sage)', border: '2px solid var(--color-ink)', transform: 'rotate(25deg)', boxShadow: '2px 2px 0 var(--color-ink)' }, delay: 0.6 },
  { style: { bottom: '20%', right: '14%', width: 22, height: 22, background: AMBER, border: '2px solid var(--color-ink)', boxShadow: '2px 2px 0 var(--color-ink)', transform: 'rotate(45deg)' }, delay: 0.65 },

  /* ── Outer ring ── */
  { style: { top: '8%', left: '3%', width: 36, height: 36, background: 'var(--color-primary)', border: '2px solid var(--color-ink)', boxShadow: '3px 3px 0 var(--color-ink)', transform: 'rotate(15deg)' }, delay: 0.0 },
  { style: { top: '12%', left: '8%', width: 20, height: 20, background: 'var(--color-primary)', border: '2px solid var(--color-ink)', boxShadow: '2px 2px 0 var(--color-ink)' }, delay: 0.3 },
  { style: { top: '6%', right: '4%', width: 30, height: 30, background: 'var(--color-sage)', border: '2px solid var(--color-ink)', boxShadow: '3px 3px 0 var(--color-ink)', transform: 'rotate(30deg)' }, delay: 0.15 },
  { style: { top: '14%', right: '2%', width: 18, height: 18, background: 'var(--color-sage)', border: '2px solid var(--color-ink)', borderRadius: '50%', boxShadow: '2px 2px 0 var(--color-ink)' }, delay: 0.5 },
  { style: { top: '20%', left: '1%', width: 14, height: 14, background: AMBER, border: '2px solid var(--color-ink)', borderRadius: '50%', boxShadow: '2px 2px 0 var(--color-ink)' }, delay: 0.7 },
  { style: { top: '18%', right: '6%', width: 16, height: 16, background: 'transparent', border: '2px solid var(--color-sage)', transform: 'rotate(45deg)' }, delay: 0.8 },
  { style: { top: '60%', left: '1%', width: 28, height: 28, background: 'var(--color-primary)', border: '2px solid var(--color-ink)', borderRadius: '50%', boxShadow: '3px 3px 0 var(--color-ink)' }, delay: 0.7 },
  { style: { top: '62%', right: '2%', width: 32, height: 32, background: 'var(--color-sage)', border: '2px solid var(--color-ink)', boxShadow: '3px 3px 0 var(--color-ink)', transform: 'rotate(-20deg)' }, delay: 0.4 },
  { style: { top: '70%', left: '4%', width: 16, height: 16, background: AMBER, border: '2px solid var(--color-ink)', transform: 'rotate(45deg)', boxShadow: '2px 2px 0 var(--color-ink)' }, delay: 0.9 },
  { style: { top: '72%', right: '5%', width: 20, height: 20, background: 'var(--color-primary)', border: '2px solid var(--color-ink)', borderRadius: '50%' }, delay: 0.85 },
  { style: { bottom: '12%', left: '2%', width: 24, height: 24, background: AMBER, border: '2px solid var(--color-ink)', boxShadow: '2px 2px 0 var(--color-ink)', transform: 'rotate(45deg)' }, delay: 0.6 },
  { style: { bottom: '10%', right: '3%', width: 34, height: 34, background: 'var(--color-primary)', border: '2px solid var(--color-ink)', boxShadow: '3px 3px 0 var(--color-ink)', transform: 'rotate(20deg)' }, delay: 0.8 },
  { style: { bottom: '6%', left: '10%', width: 14, height: 14, background: 'var(--color-sage)', border: '2px solid var(--color-ink)', borderRadius: '50%' }, delay: 1.0 },
  { style: { bottom: '8%', right: '10%', width: 18, height: 18, background: 'transparent', border: '2px solid var(--color-primary)', transform: 'rotate(30deg)' }, delay: 1.1 },

  /* ── Far corners ── */
  { style: { top: '3%', left: '12%', width: 22, height: 22, background: 'transparent', border: '2px solid var(--color-primary)', transform: 'rotate(20deg)' }, delay: 0.9 },
  { style: { top: '4%', right: '12%', width: 20, height: 20, background: AMBER, border: '2px solid var(--color-ink)', boxShadow: '2px 2px 0 var(--color-ink)', transform: 'rotate(60deg)' }, delay: 0.45 },
  { style: { bottom: '3%', left: '6%', width: 20, height: 20, background: 'var(--color-primary)', border: '2px solid var(--color-ink)', transform: 'rotate(35deg)', boxShadow: '2px 2px 0 var(--color-ink)' }, delay: 1.2 },
  { style: { bottom: '4%', right: '8%', width: 16, height: 16, background: 'var(--color-sage)', border: '2px solid var(--color-ink)', borderRadius: '50%', boxShadow: '2px 2px 0 var(--color-ink)' }, delay: 1.15 },
  { style: { top: '30%', left: '0%', width: 12, height: 12, background: AMBER, border: '2px solid var(--color-ink)', borderRadius: '50%' }, delay: 0.75 },
  { style: { top: '32%', right: '0%', width: 14, height: 14, background: 'var(--color-primary)', border: '2px solid var(--color-ink)', transform: 'rotate(45deg)', boxShadow: '2px 2px 0 var(--color-ink)' }, delay: 0.6 },
  { style: { bottom: '18%', left: '0%', width: 18, height: 18, background: 'var(--color-sage)', border: '2px solid var(--color-ink)', transform: 'rotate(-10deg)', boxShadow: '2px 2px 0 var(--color-ink)' }, delay: 0.95 },
  { style: { bottom: '16%', right: '0%', width: 22, height: 22, background: AMBER, border: '2px solid var(--color-ink)', borderRadius: '50%', boxShadow: '2px 2px 0 var(--color-ink)' }, delay: 0.5 },
]

const fadeIn = (booted, delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: booted ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
  transition: { duration: 0.6, delay },
})

export default function Hero({ booted }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-20 pb-16"
    >
      {/* Floating geo shapes — radiating from center image outward */}
      {geoShapes.map((shape, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', zIndex: 1, ...shape.style }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            booted
              ? { scale: 1, opacity: 1, y: [0, -12, 0] }
              : { scale: 0, opacity: 0 }
          }
          transition={{
            scale: { duration: 0.3, delay: 0.6 + shape.delay, type: 'spring', stiffness: 200 },
            opacity: { duration: 0.3, delay: 0.6 + shape.delay },
            y: { duration: 3 + (i % 7) * 0.3, delay: 0.8 + shape.delay, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      ))}

      {/* Content — single centered column */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Headline — forced 2 rows */}
        <h1
          className="font-display font-black text-[clamp(2.4rem,6vw,4.5rem)] uppercase leading-[1.05] tracking-tight mb-6"
          style={{ color: 'var(--color-ink)' }}
        >
          {hero.headlineLines.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 24 }}
              animate={booted ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          {...fadeIn(booted, 0.45)}
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {hero.subheadline}
        </motion.p>

        {/* Hero illustration — multiply-blends onto the light paper bg;
            in dark mode it sits on a surface card instead, since multiply
            would muddy it against a dark background. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={booted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="relative mx-auto mix-blend-multiply dark:mix-blend-normal dark:bg-[var(--color-surface)] dark:rounded-[2rem] dark:p-6 dark:border dark:border-[var(--color-border)]"
        >
          <img src={hero.image} alt={hero.imageAlt} className="w-full max-w-3xl mx-auto" />
        </motion.div>
      </div>

      <ScrollCue href="#about" className="absolute bottom-7 left-1/2 -translate-x-1/2" {...fadeIn(booted, 1.4)} />
    </section>
  )
}
