import { Fragment, createRef, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { content } from '../data/content'
import ScrollCue from './ScrollCue'

const { features } = content

// Each card sticks a bit lower than the one before, so as you scroll the
// cards pile up. Every buried card keeps its title strip peeking out above
// the card that covered it — and that strip IS the shortcut: click it to
// bring its card back up.
const BASE_TOP = 108
const PEEK = 64

// Warm-but-varied accent palette for tag pills. Cycled per-tag with an
// offset so adjacent cards don't repeat the same color pattern.
const TAG_COLORS = ['#B75C3E', '#6E8F78', '#C9932E', '#5B7FA6', '#A65B72']

// A card is full-size when it appears; as the NEXT card scrolls up to cover
// it, it shrinks continuously with the scroll until fully buried.
function StackCard({ card, i, count, nextMarker, hasNext, jumpTo }) {
  const { scrollYProgress } = useScroll({
    target: nextMarker,
    offset: ['start end', `start ${BASE_TOP + (i + 1) * PEEK}px`],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, hasNext ? 0.92 : 1])

  return (
    <motion.div
      className="sticky"
      style={{ top: BASE_TOP + i * PEEK }}
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.article
        className="paper-card rounded-[1.25rem] px-7 md:px-10 pt-6 pb-8 md:pb-10 mb-8"
        style={{ scale, transformOrigin: 'top center' }}
      >
        {/* Title strip — the part that stays visible when buried, and
            doubles as the click-to-return shortcut */}
        <h3 className="m-0">
          <button
            type="button"
            onClick={() => jumpTo(i)}
            className="w-full flex items-baseline gap-3 text-left cursor-pointer group"
            aria-label={`Show ${card.title}`}
          >
            <span className="text-base md:text-lg font-semibold tabular-nums shrink-0" style={{ color: 'var(--color-primary)' }}>
              (0{i + 1})
            </span>
            <span
              className="flex-1 truncate text-2xl md:text-3xl font-bold tracking-tight leading-tight transition-colors duration-200 group-hover:text-[var(--color-primary)]"
              style={{ color: 'var(--color-ink)' }}
            >
              {card.title}
            </span>
            <span className="text-xs font-medium tabular-nums shrink-0" style={{ color: 'var(--color-text-secondary)' }}>
              0{i + 1} / 0{count}
            </span>
          </button>
        </h3>

        <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'var(--color-text-secondary)' }}>
          {card.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {card.tags?.map((tag, tagIdx) => {
            const color = TAG_COLORS[(i + tagIdx) % TAG_COLORS.length]
            return (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{ borderColor: color + '55', color, backgroundColor: color + '14' }}
              >
                {tag}
              </span>
            )
          })}
        </div>
      </motion.article>
    </motion.div>
  )
}

export default function Features() {
  // Zero-height flow markers — a stuck card's own rect reports its pinned
  // position, so the marker beside it provides the real scroll target (for
  // both shortcut jumps and each card's shrink progress).
  const markerRefs = useRef(features.cards.map(() => createRef())).current

  const jumpTo = (i) => {
    const el = markerRefs[i].current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - (BASE_TOP + i * PEEK)
    if (window.__lenis) window.__lenis.scrollTo(top)
    else window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <span className="eyebrow">{features.sectionLabel}</span>
          <h2
            className="mt-5 text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]"
            style={{ color: 'var(--color-ink)' }}
          >
            {features.heading}
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            {features.subheading}
          </p>
        </div>

        {/* Card stack */}
        <div className="max-w-3xl mx-auto">
          {features.cards.map((card, i) => (
            <Fragment key={card.title}>
              <div ref={markerRefs[i]} aria-hidden="true" />
              <StackCard
                card={card}
                i={i}
                count={features.cards.length}
                nextMarker={i < features.cards.length - 1 ? markerRefs[i + 1] : markerRefs[i]}
                hasNext={i < features.cards.length - 1}
                jumpTo={jumpTo}
              />
            </Fragment>
          ))}
        </div>

        <div className="flex justify-center mt-14 md:mt-20">
          <ScrollCue
            href="#tech-stack"
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
