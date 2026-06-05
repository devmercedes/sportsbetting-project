import StatCard from '@/components/dashboard/StatCard'

export default function ROITrackerPage() {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
        <StatCard label="Total Invested" value="$1,250" />
        <StatCard label="Total Return" value="$1,480" />
        <StatCard label="Net Profit" value="+$230" positive />
        <StatCard label="ROI %" value="+18.4%" positive change="+2.1%" />
      </div>

      <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, padding: 20, marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', marginBottom: 16 }}>Bankroll Growth</div>
        <div style={{ height: 160, display: 'flex', alignItems: 'flex-end', gap: 4 }}>
          {[800, 820, 790, 850, 880, 910, 870, 930, 960, 1000, 980, 1050, 1080, 1120, 1100, 1180, 1200, 1250].map((v, i) => (
            <div key={i} style={{ flex: 1, background: i === 17 ? '#22c55e' : 'rgba(34,197,94,0.2)', borderRadius: '3px 3px 0 0', height: `${(v / 1250) * 100}%`, transition: 'height 0.3s' }} />
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, padding: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', marginBottom: 12 }}>Best Performing Bets</div>
          {[['Chiefs -3.5', '+$45.45', 'NFL'], ['Celtics -5.5', '+$54.55', 'NBA'], ['BTTS – Barcelona', '+$23.15', 'Soccer']].map(([pick, pnl, sport]) => (
            <div key={pick} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '0.5px solid #0f1a28', fontSize: 12 }}>
              <span style={{ color: '#c8d8e8' }}>{pick} <span style={{ color: '#4b6377', fontSize: 10 }}>({sport})</span></span>
              <span style={{ color: '#22c55e', fontWeight: 600 }}>{pnl}</span>
            </div>
          ))}
        </div>
        <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, padding: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', marginBottom: 12 }}>Bankroll Management Tips</div>
          {['Never bet more than 5% of bankroll on a single pick', 'Stick to 1–3 units for picks with 55–65% confidence', 'Use Kelly Criterion for optimal bet sizing', 'Keep records of every bet for long-term analysis'].map((tip, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, padding: '8px 0', borderBottom: '0.5px solid #0f1a28', fontSize: 11.5, color: '#94a3b8' }}>
              <span style={{ color: '#22c55e', fontSize: 14, flexShrink: 0 }}>✓</span>
              {tip}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
