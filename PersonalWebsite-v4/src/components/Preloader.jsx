import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { content } from '../data/content'

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)
  const reducedMotion = useReducedMotion()

  const onCompleteRef = useRef(onComplete)
  useEffect(() => {
    onCompleteRef.current = onComplete
  })

  // Count 0 → 100, brief hold, then the sheet lifts and hands off to the hero
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    let current = 0
    const tick = setInterval(() => {
      current += Math.floor(Math.random() * 7) + 3
      if (current >= 100) {
        current = 100
        clearInterval(tick)
        setCount(100)
        setTimeout(() => {
          onCompleteRef.current?.()
          setVisible(false)
        }, 450)
      } else {
        setCount(current)
      }
    }, 90)
    return () => clearInterval(tick)
  }, [])

  // Restore scrolling once the sheet has lifted
  useEffect(() => {
    if (!visible) document.body.style.overflow = ''
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden"
          style={{
            backgroundColor: '#FBF6EC',
            backgroundImage:
              'linear-gradient(rgba(58,42,30,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(58,42,30,0.055) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
          initial={{ y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Wordmark — same position as the navbar's, so the reveal feels continuous */}
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
            <span className="font-brand text-xl tracking-tight" style={{ color: '#241C17', fontWeight: 600 }}>
              <span style={{ color: '#B75C3E' }}>⬡</span> {content.profile.nameShort}
            </span>
          </div>

          {/* Small status line, center-left like a caption */}
          <div className="absolute left-4 md:left-8 bottom-8 md:bottom-12">
            <p
              className="text-[0.7rem] font-medium tracking-[0.25em] uppercase"
              style={{ color: '#6B5D51' }}
            >
              {content.hero.metaSince}
            </p>
          </div>

          {/* Big counter, bottom-right — Archivo, ink */}
          <div className="absolute bottom-2 right-5 md:bottom-4 md:right-12 flex items-start leading-none select-none">
            <span
              className="tabular-nums"
              style={{
                color: '#241C17',
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
              style={{ color: '#B75C3E', fontWeight: 600, fontSize: 'clamp(1.25rem, 4vw, 2.5rem)' }}
            >
              %
            </span>
          </div>

          {/* Thin progress line along the bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: '#E4D8C6' }}>
            <div
              className="h-full"
              style={{ width: `${count}%`, backgroundColor: '#B75C3E', transition: 'width 0.12s linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
