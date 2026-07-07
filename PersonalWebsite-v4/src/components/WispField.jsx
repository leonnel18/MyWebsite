import { useEffect, useRef } from 'react'
import Wisp from './Wisp'

const COLORS = ['#B75C3E', '#6E8F78', '#C89B6D']

// Deterministic scatter — irrational-step sequences spread the field evenly
// with no visible repetition, without a random seed changing every reload.
// Drift paths live as CSS @keyframes (wisp-drift-0..3) in index.css.
const WISPS = Array.from({ length: 24 }, (_, i) => ({
  left: `${((i * 47.3 + 3) % 96) + 1.5}%`,
  top: `${((i * 31.7 + 9) % 90) + 4}%`,
  color: COLORS[i % COLORS.length],
  size: 5 + ((i * 7) % 8),
  duration: 20 + ((i * 5) % 19),
  delay: (i * 3.7) % 22,
  flicker: 2 + ((i * 1.3) % 2.4),
  pathIndex: i % 4,
}))

// Haze lens that trails the cursor and softly distorts the grid behind it.
// GPU-composited backdrop blur; the follow is a direct transform write
// smoothed by a CSS transition — no JS animation loop.
function DistortionLens() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onMove = (e) => {
      const el = ref.current
      if (el) el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const SIZE = 170
  return (
    <div
      ref={ref}
      className="absolute left-0 top-0 rounded-full"
      style={{
        width: SIZE,
        height: SIZE,
        marginLeft: -SIZE / 2,
        marginTop: -SIZE / 2,
        transform: 'translate(-400px, -400px)',
        transition: 'transform 0.18s ease-out',
        willChange: 'transform',
        backdropFilter: 'blur(2px) saturate(1.25)',
        WebkitBackdropFilter: 'blur(2px) saturate(1.25)',
        maskImage: 'radial-gradient(circle, black 45%, transparent 72%)',
        WebkitMaskImage: 'radial-gradient(circle, black 45%, transparent 72%)',
      }}
    />
  )
}

// Fixed full-viewport layer at negative z-index: wisps float behind ALL page
// content, so they only show where the blueprint grid shows through
// (transparent sections) and are covered by any solid section band.
export default function WispField() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      <DistortionLens />
      {WISPS.map((wisp, i) => (
        <Wisp key={i} {...wisp} />
      ))}
    </div>
  )
}
