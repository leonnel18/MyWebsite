import { useEffect, useRef } from 'react'

// Small glowing orb drifting over the blueprint-grid backdrop.
// All ambient motion (drift + flicker) is pure CSS animation — it runs on the
// compositor thread with zero per-frame JS. The only JS is the mousemove
// repulsion, which writes a transform (smoothed by a CSS transition) and
// skips the write entirely while the wisp is at rest.
export default function Wisp({
  left,
  top,
  color = '#B75C3E',
  size = 10,
  duration = 26,
  delay = 0,
  flicker = 3,
  pathIndex = 0,
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const RADIUS = 150
    const MAX_PUSH = 48
    const fx = parseFloat(left) / 100
    const fy = parseFloat(top) / 100
    const onMove = (e) => {
      const el = ref.current
      if (!el) return
      const dx = fx * window.innerWidth - e.clientX
      const dy = fy * window.innerHeight - e.clientY
      const dist = Math.hypot(dx, dy)
      if (dist < RADIUS && dist > 0) {
        const force = ((RADIUS - dist) / RADIUS) * MAX_PUSH
        el.style.transform = `translate(${(dx / dist) * force}px, ${(dy / dist) * force}px)`
      } else if (el.style.transform !== '') {
        el.style.transform = ''
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [left, top])

  return (
    <span
      ref={ref}
      className="absolute block"
      style={{ left, top, transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)' }}
    >
      <span
        className="block"
        style={{ animation: `wisp-drift-${pathIndex} ${duration}s ease-in-out ${-delay}s infinite` }}
      >
        <span
          className="block rounded-full"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            boxShadow: `0 0 ${size * 1.5}px ${size * 0.6}px ${color}55, 0 0 ${size * 4}px ${size * 1.5}px ${color}22`,
            animation: `wisp-flicker ${flicker}s ease-in-out ${-delay}s infinite`,
          }}
        />
      </span>
    </span>
  )
}
