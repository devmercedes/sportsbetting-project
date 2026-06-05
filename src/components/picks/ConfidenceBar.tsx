interface ConfidenceBarProps {
  value: number
  compact?: boolean
}

export default function ConfidenceBar({ value, compact }: ConfidenceBarProps) {
  const color = value >= 70 ? '#22c55e' : value >= 60 ? '#f59e0b' : '#ef4444'

  if (compact) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ width: 60, height: 5, background: '#1e2d3d', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${value}%`, background: color, borderRadius: 3 }} />
        </div>
        <span style={{ fontSize: 11, fontWeight: 600, color }}>{value}%</span>
      </div>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} style={{
              width: 18, height: 8, borderRadius: 2,
              background: i < Math.round(value / 10) ? color : '#1e2d3d'
            }} />
          ))}
        </div>
        <span style={{ fontSize: 14, fontWeight: 700, color, marginLeft: 8 }}>{value}%</span>
      </div>
    </div>
  )
}
