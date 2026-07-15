import { motion } from 'framer-motion'

// Bouncing chevron + label, used to hint "keep scrolling" at the bottom of
// a section. `motionProps` lets callers override the entrance animation
// (Hero gates it on `booted`; other sections just use whileInView).
export default function ScrollCue({ href, label = 'Scroll', className = '', ...motionProps }) {
  return (
    <motion.a
      href={href}
      aria-label="Scroll to explore"
      className={`flex flex-col items-center gap-2 ${className}`}
      style={{ color: 'var(--color-text-secondary)' }}
      {...motionProps}
    >
      <span className="text-[0.65rem] tracking-[0.25em] uppercase font-medium">{label}</span>
      <motion.svg
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </motion.svg>
    </motion.a>
  )
}
