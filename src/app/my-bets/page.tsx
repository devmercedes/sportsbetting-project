const bets = [
  { sport: '🏈', match: 'Chiefs vs Raiders', pick: 'Chiefs -3.5', odds: '-110', stake: '$50', outcome: 'win', pnl: '+$45.45', date: 'Oct 13' },
  { sport: '🏀', match: 'Lakers vs Warriors', pick: 'Lakers ML', odds: '+105', stake: '$30', outcome: 'loss', pnl: '-$30.00', date: 'Oct 13' },
  { sport: '⚽', match: 'Barcelona vs Real Madrid', pick: 'BTTS – Yes', odds: '-108', stake: '$25', outcome: 'win', pnl: '+$23.15', date: 'Oct 12' },
  { sport: '🏈', match: 'Cowboys vs Giants', pick: 'Over 47.5', odds: '-115', stake: '$40', outcome: 'push', pnl: '$0.00', date: 'Oct 12' },
  { sport: '🏀', match: 'Celtics vs Heat', pick: 'Celtics -5.5', odds: '-110', stake: '$60', outcome: 'win', pnl: '+$54.55', date: 'Oct 11' },
]

const outcomeColor = (o: string) => o === 'win' ? '#22c55e' : o === 'loss' ? '#ef4444' : '#f59e0b'
const outcomeBg = (o: string) => o === 'win' ? 'rgba(34,197,94,0.12)' : o === 'loss' ? 'rgba(239,68,68,0.12)' : 'rgba(245,158,11,0.12)'

export default function MyBetsPage() {
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {['All', 'Wins', 'Losses', 'Pushes', 'Pending'].map((f, i) => (
          <button key={f} style={{ padding: '5px 12px', background: i === 0 ? 'rgba(34,197,94,0.1)' : 'transparent', border: `0.5px solid ${i === 0 ? 'rgba(34,197,94,0.3)' : '#1e2d3d'}`, borderRadius: 5, fontSize: 11, color: i === 0 ? '#22c55e' : '#6b8299', cursor: 'pointer' }}>{f}</button>
        ))}
        <div style={{ marginLeft: 'auto' }}>
          <button style={{ padding: '5px 12px', background: 'transparent', border: '0.5px solid #1e2d3d', borderRadius: 5, fontSize: 11, color: '#6b8299', cursor: 'pointer' }}>Export CSV</button>
        </div>
      </div>

      <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '0.5px solid #1e2d3d' }}>
              {['Sport', 'Match', 'Pick', 'Odds', 'Stake', 'Outcome', 'P&L', 'Date'].map(h => (
                <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontSize: 10, color: '#4b6377', fontWeight: 400, textTransform: 'uppercase', letterSpacing: 0.5 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bets.map((b, i) => (
              <tr key={i} style={{ borderBottom: '0.5px solid #0f1a28' }}>
                <td style={{ padding: '12px 14px', fontSize: 16 }}>{b.sport}</td>
                <td style={{ padding: '12px 14px', fontSize: 12, color: '#c8d8e8', fontWeight: 500 }}>{b.match}</td>
                <td style={{ padding: '12px 14px', fontSize: 12, color: '#94a3b8' }}>{b.pick}</td>
                <td style={{ padding: '12px 14px', fontSize: 12, color: '#94a3b8' }}>{b.odds}</td>
                <td style={{ padding: '12px 14px', fontSize: 12, color: '#94a3b8' }}>{b.stake}</td>
                <td style={{ padding: '12px 14px' }}>
                  <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 4, fontWeight: 500, background: outcomeBg(b.outcome), color: outcomeColor(b.outcome), textTransform: 'capitalize' }}>{b.outcome}</span>
                </td>
                <td style={{ padding: '12px 14px', fontSize: 12, fontWeight: 600, color: outcomeColor(b.outcome) }}>{b.pnl}</td>
                <td style={{ padding: '12px 14px', fontSize: 11, color: '#4b6377' }}>{b.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
