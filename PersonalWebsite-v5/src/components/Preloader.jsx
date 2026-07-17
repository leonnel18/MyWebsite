import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { content } from '../data/content'
import { useTheme } from '../context/ThemeContext'

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)
  const reducedMotion = useReducedMotion()
  const { theme } = useTheme()
  const gridLine = theme === 'dark' ? 'rgba(245,239,230,0.045)' : 'rgba(58,42,30,0.055)'

  const onCompleteRef = useRef(onComplete)
  useEffect(() => {
    onCompleteRef.current = onComplete
  })

  // Count 0 → 100, brief hold, then the sheet lifts and hands off to the hero.
  // Overflow is restored from this effect's own cleanup rather than a
  // `[visible]`-keyed effect: onComplete() flips the module-level
  // `preloaderPlayed` flag synchronously, which makes App.jsx stop rendering
  // <Preloader> in the same commit as setVisible(false) — unmounting this
  // component before a separate visible-effect would ever get to run.
  // Cleanup, by contrast, always runs on unmount.
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    let current = 0
    let liftTimer
    const tick = setInterval(() => {
      current += Math.floor(Math.random() * 7) + 3
      if (current >= 100) {
        current = 100
        clearInterval(tick)
        setCount(100)
        liftTimer = setTimeout(() => {
          onCompleteRef.current?.()
          setVisible(false)
        }, 450)
      } else {
        setCount(current)
      }
    }, 90)
    return () => {
      clearInterval(tick)
      clearTimeout(liftTimer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden"
          style={{
            backgroundColor: 'var(--color-bg)',
            backgroundImage: `linear-gradient(${gridLine} 1px, transparent 1px), linear-gradient(90deg, ${gridLine} 1px, transparent 1px)`,
            backgroundSize: '44px 44px',
          }}
          initial={{ y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Wordmark — identical markup + position to the navbar's, so when the
              sheet lifts it hands off in place to the real navbar wordmark */}
          <div className="w-full px-4 md:px-6 py-4">
            <span className="font-brand text-2xl tracking-tight" style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
              <span style={{ color: 'var(--color-primary)' }}>⬡</span> {content.profile.nameShort}
            </span>
          </div>

          {/* Small status line, center-left like a caption */}
          <div className="absolute left-4 md:left-8 bottom-8 md:bottom-12">
            <p
              className="text-[0.7rem] font-medium tracking-[0.25em] uppercase"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {content.profile.title}
            </p>
          </div>

          {/* Big counter, bottom-right — Archivo, ink */}
          <div className="absolute bottom-2 right-5 md:bottom-4 md:right-12 flex items-start leading-none select-none">
            <span
              className="tabular-nums"
              style={{
                color: 'var(--color-ink)',
                fontWeight: 640,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(5rem, 20vw, 13rem)',
                lineHeight: 1,
              }}
            >
              {count}
            </span>
            <span
              className="mt-3 md:mt-6"
              style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: 'clamp(1.25rem, 4vw, 2.5rem)' }}
            >
              %
            </span>
          </div>

          {/* Thin progress line along the bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: 'var(--color-border)' }}>
            <div
              className="h-full"
              style={{ width: `${count}%`, backgroundColor: 'var(--color-primary)', transition: 'width 0.12s linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
