import { Fragment, createRef, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { content } from '../data/content'

const { features } = content

// Each card sticks a bit lower than the one before, so as you scroll the
// cards pile up. Every buried card keeps its title strip peeking out above
// the card that covered it — and that strip IS the shortcut: click it to
// bring its card back up.
const BASE_TOP = 96
const PEEK = 44

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
        className="paper-card rounded-[1.25rem] px-7 md:px-10 pt-5 pb-8 md:pb-10 mb-8"
        style={{ minHeight: '24rem', scale, transformOrigin: 'top center' }}
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
            <span className="text-sm font-semibold tabular-nums shrink-0" style={{ color: '#B75C3E' }}>
              (0{i + 1})
            </span>
            <span
              className="flex-1 truncate text-sm md:text-base font-semibold tracking-tight transition-colors duration-200 group-hover:text-[#B75C3E]"
              style={{ color: '#241C17' }}
            >
              {card.title}
            </span>
            <span className="text-xs font-medium tabular-nums shrink-0" style={{ color: '#6B5D51' }}>
              0{i + 1} / 0{count}
            </span>
          </button>
        </h3>

        <p className="mt-6 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: '#6B5D51' }}>
          {card.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {card.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium border"
              style={{ borderColor: '#D8C7AF', color: '#6B5D51', backgroundColor: '#FFFDF8' }}
            >
              {tag}
            </span>
          ))}
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
            style={{ color: '#241C17' }}
          >
            {features.heading}
          </h2>
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
      </div>
    </section>
  )
}
