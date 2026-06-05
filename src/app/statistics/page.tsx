import StatCard from '@/components/dashboard/StatCard'
import SportBreakdown from '@/components/dashboard/SportBreakdown'

export default function StatisticsPage() {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
        <StatCard label="Total Picks" value="47" />
        <StatCard label="Win Rate" value="62.4%" change="+2.1%" positive />
        <StatCard label="Best Sport" value="NFL 66%" />
        <StatCard label="Avg Confidence" value="71%" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
        <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, padding: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', marginBottom: 14 }}>Confidence Calibration</div>
          <div style={{ fontSize: 11, color: '#4b6377', marginBottom: 12 }}>How well our AI confidence scores match actual outcomes</div>
          {[['55–64%', 58, 52], ['65–74%', 69, 63], ['75–84%', 78, 74], ['85%+', 90, 88]].map(([tier, predicted, actual]) => (
            <div key={tier as string} style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 11, color: '#94a3b8' }}>{tier} confidence</span>
                <span style={{ fontSize: 11, color: '#4b6377' }}>Predicted {predicted}% · Actual {actual}%</span>
              </div>
              <div style={{ position: 'relative', height: 8, background: '#1e2d3d', borderRadius: 4 }}>
                <div style={{ position: 'absolute', height: '100%', width: `${predicted}%`, background: 'rgba(34,197,94,0.3)', borderRadius: 4 }} />
                <div style={{ position: 'absolute', height: '100%', width: `${actual}%`, background: '#22c55e', borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>
        <SportBreakdown />
      </div>
    </div>
  )
}
