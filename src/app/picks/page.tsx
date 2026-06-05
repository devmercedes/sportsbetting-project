import PickCard from '@/components/picks/PickCard'

const picks = [
  { id: '1', sport: 'NFL' as const, homeTeam: 'Kansas City Chiefs', awayTeam: 'Las Vegas Raiders', pickValue: 'Chiefs -3.5', odds: -110, confidence: 78, tierRequired: 'free' as const, pickType: 'spread' as const, locked: false, result: 'pending' as const, eventStartAt: '2024-10-13T20:25:00Z' },
  { id: '2', sport: 'NBA' as const, homeTeam: 'LA Lakers', awayTeam: 'Golden State Warriors', pickValue: 'Lakers ML', odds: 105, confidence: 65, tierRequired: 'pro' as const, pickType: 'moneyline' as const, locked: false, result: 'pending' as const, eventStartAt: '2024-10-13T22:30:00Z' },
  { id: '3', sport: 'NFL' as const, homeTeam: 'Dallas Cowboys', awayTeam: 'New York Giants', pickValue: 'Over 47.5', odds: -115, confidence: 72, tierRequired: 'pro' as const, pickType: 'total' as const, locked: true, result: 'pending' as const, eventStartAt: '2024-10-13T17:00:00Z' },
  { id: '4', sport: 'Soccer' as const, homeTeam: 'Barcelona', awayTeam: 'Real Madrid', pickValue: 'Both Teams to Score', odds: -108, confidence: 61, tierRequired: 'pro' as const, pickType: 'prop' as const, locked: false, result: 'pending' as const, eventStartAt: '2024-10-13T19:00:00Z' },
  { id: '5', sport: 'NBA' as const, homeTeam: 'Boston Celtics', awayTeam: 'Miami Heat', pickValue: 'Celtics -5.5', odds: -110, confidence: 69, tierRequired: 'vip' as const, pickType: 'spread' as const, locked: false, result: 'pending' as const, eventStartAt: '2024-10-13T23:00:00Z' },
  { id: '6', sport: 'MLB' as const, homeTeam: 'LA Dodgers', awayTeam: 'NY Yankees', pickValue: 'Under 8.5', odds: -112, confidence: 74, tierRequired: 'vip' as const, pickType: 'total' as const, locked: false, result: 'pending' as const, eventStartAt: '2024-10-13T18:00:00Z' },
]

export default function PicksPage() {
  const nflPicks = picks.filter(p => p.sport === 'NFL')
  const nbaPicks = picks.filter(p => p.sport === 'NBA')
  const otherPicks = picks.filter(p => !['NFL','NBA'].includes(p.sport))

  return (
    <div>
      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {['All Sports', 'NFL', 'NBA', 'MLB', 'Soccer', 'NHL'].map(s => (
          <button key={s} style={{
            padding: '5px 12px', background: s === 'All Sports' ? '#22c55e' : 'rgba(255,255,255,0.04)',
            border: `0.5px solid ${s === 'All Sports' ? '#22c55e' : '#1e2d3d'}`,
            borderRadius: 5, fontSize: 11, color: s === 'All Sports' ? '#0a0f1a' : '#6b8299',
            fontWeight: s === 'All Sports' ? 600 : 400, cursor: 'pointer'
          }}>{s}</button>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <select style={{ padding: '5px 10px', background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 5, fontSize: 11, color: '#6b8299', cursor: 'pointer' }}>
            <option>55%+ Confidence</option>
            <option>65%+ Confidence</option>
            <option>75%+ Confidence</option>
          </select>
          <button style={{ padding: '5px 12px', background: 'rgba(255,255,255,0.04)', border: '0.5px solid #1e2d3d', borderRadius: 5, fontSize: 11, color: '#6b8299', cursor: 'pointer' }}>Export CSV</button>
        </div>
      </div>

      {/* Date tabs */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
        {['Today', 'Tomorrow', 'This Week'].map((t, i) => (
          <button key={t} style={{
            padding: '6px 14px', background: i === 0 ? 'rgba(34,197,94,0.1)' : 'transparent',
            border: `0.5px solid ${i === 0 ? 'rgba(34,197,94,0.3)' : '#1e2d3d'}`,
            borderRadius: 5, fontSize: 11.5, color: i === 0 ? '#22c55e' : '#6b8299', cursor: 'pointer'
          }}>{t}</button>
        ))}
      </div>

      {/* NFL section */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: '#4b6377', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
          🏈 NFL ({nflPicks.length} picks)
          <div style={{ flex: 1, height: '0.5px', background: '#1e2d3d' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
          {nflPicks.map(p => <PickCard key={p.id} pick={p} />)}
        </div>
      </div>

      {/* NBA section */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: '#4b6377', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
          🏀 NBA ({nbaPicks.length} picks)
          <div style={{ flex: 1, height: '0.5px', background: '#1e2d3d' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
          {nbaPicks.map(p => <PickCard key={p.id} pick={p} />)}
        </div>
      </div>

      {/* Other */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 500, color: '#4b6377', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
          ⚽ Other Sports ({otherPicks.length} picks)
          <div style={{ flex: 1, height: '0.5px', background: '#1e2d3d' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
          {otherPicks.map(p => <PickCard key={p.id} pick={p} />)}
        </div>
      </div>
    </div>
  )
}
