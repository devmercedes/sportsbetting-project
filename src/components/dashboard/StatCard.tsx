interface StatCardProps {
  label: string
  value: string
  change?: string
  positive?: boolean
}

export default function StatCard({ label, value, change, positive }: StatCardProps) {
  return (
    <div style={{
      background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10,
      padding: '14px 16px'
    }}>
      <div style={{ fontSize: 10.5, color: '#4b6377', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 600, color: '#e2e8f0', marginBottom: 4 }}>{value}</div>
      {change && (
        <div style={{ fontSize: 11, color: positive ? '#22c55e' : '#ef4444' }}>
          {positive ? '↑' : '↓'} {change} vs last month
        </div>
      )}
    </div>
  )
}
