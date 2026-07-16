import { useState } from 'react'

// Size tiers: 'xl' (homepage career teaser), 'lg' (teaser cards), 'md'
// (spotlight headers), 'sm' (inline next to timeline date badges). Exact px
// values are a styling call within Tailwind's scale (SAD §5) — the
// tier distinction is the requirement.
const SIZE_CLASSES = {
  xl: 'w-16 h-16 rounded-2xl text-base',
  lg: 'w-14 h-14 rounded-2xl text-sm',
  md: 'w-11 h-11 rounded-xl text-xs',
  sm: 'w-8 h-8 rounded-lg text-[0.6rem]',
}

export default function LogoOrMonogram({ logo, initial, color, name, size = 'md' }) {
  const [failed, setFailed] = useState(false)
  const showLogo = logo && !failed
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md

  return showLogo ? (
    <img
      src={logo}
      alt={`${name} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${sizeClass} object-contain bg-white p-1 flex-shrink-0`}
      style={{ border: '1px solid var(--color-border)' }}
    />
  ) : (
    <div
      className={`${sizeClass} flex items-center justify-center text-white font-bold flex-shrink-0`}
      style={{ backgroundColor: color, boxShadow: `0 8px 18px -10px ${color}` }}
    >
      {initial}
    </div>
  )
}
