const sports = [
  { sport: 'NFL', wins: 18, losses: 9, winRate: 66 },
  { sport: 'NBA', wins: 11, losses: 9, winRate: 55 },
  { sport: 'MLB', wins: 5, losses: 4, winRate: 56 },
]

export default function SportBreakdown() {
  return (
    <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, padding: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 500, color: '#e2e8f0', marginBottom: 12 }}>By Sport This Month</div>
      {sports.map(s => (
        <div key={s.sport} style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <span style={{ fontSize: 12, color: '#c8d8e8', fontWeight: 500 }}>{s.sport}</span>
            <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 500 }}>{s.winRate}%</span>
          </div>
          <div style={{ height: 5, background: '#1e2d3d', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${s.winRate}%`, background: '#22c55e', borderRadius: 3 }} />
          </div>
          <div style={{ fontSize: 10, color: '#4b6377', marginTop: 3 }}>{s.wins}W – {s.losses}L</div>
        </div>
      ))}
    </div>
  )
}
