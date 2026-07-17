// Visual weight increases with the level, so a scan of a category communicates
// rating without reading the label: filled > tinted-solid > outline.
const LEVEL_STYLE = {
  Expert: {
    backgroundColor: 'var(--color-primary)',
    borderColor: 'var(--color-primary)',
    color: '#FFFDF8',
  },
  Advanced: {
    backgroundColor: 'var(--color-sage)',
    borderColor: 'var(--color-sage)',
    color: '#FFFDF8',
  },
  Proficient: {
    backgroundColor: 'transparent',
    borderColor: 'var(--color-border-strong)',
    color: 'var(--color-text-secondary)',
  },
}

export default function SkillLevelBadge({ level, className = '' }) {
  const style = LEVEL_STYLE[level] ?? LEVEL_STYLE.Proficient
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[0.65rem] font-semibold tracking-wide uppercase border ${className}`}
      style={style}
    >
      {level}
    </span>
  )
}
