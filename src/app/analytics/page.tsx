import StatCard from '@/components/dashboard/StatCard'
import PerformanceChart from '@/components/dashboard/PerformanceChart'

const sportStats = [
  { sport: 'NFL', wins: 18, losses: 9, pushes: 1, winRate: 66, roi: 24.1 },
  { sport: 'NBA', wins: 11, losses: 9, pushes: 0, winRate: 55, roi: 9.8 },
  { sport: 'MLB', wins: 5, losses: 4, pushes: 0, winRate: 56, roi: 11.2 },
]

export default function AnalyticsPage() {
  return (
    <div>
      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {['Last 30 Days', 'Last 90 Days', 'All Time'].map((t, i) => (
          <button key={t} style={{ padding: '5px 12px', background: i === 0 ? 'rgba(34,197,94,0.1)' : 'transparent', border: `0.5px solid ${i === 0 ? 'rgba(34,197,94,0.3)' : '#1e2d3d'}`, borderRadius: 5, fontSize: 11, color: i === 0 ? '#22c55e' : '#6b8299', cursor: 'pointer' }}>{t}</button>
        ))}
        <div style={{ marginLeft: 'auto' }}>
          <button style={{ padding: '5px 12px', background: 'transparent', border: '0.5px solid #1e2d3d', borderRadius: 5, fontSize: 11, color: '#6b8299', cursor: 'pointer' }}>Export CSV</button>
        </div>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, marginBottom: 20 }}>
        <StatCard label="Win Rate" value="62.4%" change="+2.1%" positive />
        <StatCard label="ROI" value="+18.3%" change="+0.8%" positive />
        <StatCard label="Streak" value="W5 🔥" />
        <StatCard label="Total Picks" value="47" />
        <StatCard label="P&L" value="+$1,830" positive />
      </div>

      {/* Chart */}
      <div style={{ marginBottom: 20 }}>
        <PerformanceChart />
      </div>

      {/* Sport breakdown table */}
      <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, overflow: 'hidden', marginBottom: 20 }}>
        <div style={{ padding: '12px 16px', borderBottom: '0.5px solid #1e2d3d' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>Performance by Sport</div>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '0.5px solid #1e2d3d' }}>
              {['Sport', 'Wins', 'Losses', 'Pushes', 'Win Rate', 'ROI'].map(h => (
                <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 10, color: '#4b6377', fontWeight: 400, textTransform: 'uppercase', letterSpacing: 0.5 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sportStats.map(s => (
              <tr key={s.sport} style={{ borderBottom: '0.5px solid #0f1a28' }}>
                <td style={{ padding: '12px 16px', fontSize: 12, fontWeight: 500, color: '#e2e8f0' }}>{s.sport}</td>
                <td style={{ padding: '12px 16px', fontSize: 12, color: '#22c55e', fontWeight: 500 }}>{s.wins}</td>
                <td style={{ padding: '12px 16px', fontSize: 12, color: '#ef4444', fontWeight: 500 }}>{s.losses}</td>
                <td style={{ padding: '12px 16px', fontSize: 12, color: '#94a3b8' }}>{s.pushes}</td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 5, background: '#1e2d3d', borderRadius: 3, overflow: 'hidden', maxWidth: 80 }}>
                      <div style={{ height: '100%', width: `${s.winRate}%`, background: '#22c55e', borderRadius: 3 }} />
                    </div>
                    <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 500 }}>{s.winRate}%</span>
                  </div>
                </td>
                <td style={{ padding: '12px 16px', fontSize: 12, color: '#22c55e', fontWeight: 500 }}>+{s.roi}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
