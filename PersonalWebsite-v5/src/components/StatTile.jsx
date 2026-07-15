export default function StatTile({ value, label, large = false }) {
  return (
    <div
      className="paper-card rounded-xl p-4 text-center"
      style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
    >
      <p className={`${large ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} font-bold`} style={{ color: 'var(--color-primary)' }}>
        {value}
      </p>
      <p className="mt-1 text-xs md:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
        {label}
      </p>
    </div>
  )
}
