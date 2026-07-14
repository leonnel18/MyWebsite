// Shared wisp layout for the ambient background field.
export const WISP_COLORS = ['#B75C3E', '#6E8F78', '#C89B6D']

// Deterministic scatter — irrational-step sequences spread the field evenly
// with no visible repetition, without a random seed changing every reload.
// Drift paths live as CSS @keyframes (wisp-drift-0..3) in index.css.
export const WISP_CONFIG = Array.from({ length: 24 }, (_, i) => ({
  left: `${((i * 47.3 + 3) % 96) + 1.5}%`,
  top: `${((i * 31.7 + 9) % 90) + 4}%`,
  color: WISP_COLORS[i % WISP_COLORS.length],
  size: 5 + ((i * 7) % 8),
  duration: 20 + ((i * 5) % 19),
  delay: (i * 3.7) % 22,
  flicker: 2 + ((i * 1.3) % 2.4),
  pathIndex: i % 4,
}))
