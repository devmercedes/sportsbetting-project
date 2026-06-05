const history = [
  { odds: '6.12', type: 'Daily Safe', typeColor: '#22c55e', selections: 4, result: 'Won', resultColor: '#22c55e', pnl: '+6.12' },
  { odds: '11.45', type: 'Medium', typeColor: '#f59e0b', selections: 6, result: 'Lost', resultColor: '#ef4444', pnl: '-1.00' },
  { odds: '21.30', type: 'High Reward', typeColor: '#ef4444', selections: 9, result: 'Won', resultColor: '#22c55e', pnl: '+21.30' },
]

export default function RecentHistory() {
  return (
    <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ padding: '12px 14px', borderBottom: '0.5px solid #1e2d3d', display: 'flex', alignItems: 'center' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', flex: 1 }}>Recent Generated Bets</div>
        <span style={{ fontSize: 11, color: '#22c55e', cursor: 'pointer' }}>View All</span>
      </div>
      <div style={{ padding: '4px 12px' }}>
        {history.map((h, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 0', borderBottom: '0.5px solid #0f1a28' }}>
            <div style={{ width: 30, height: 30, background: '#0a0f1a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '0.5px solid #1e2d3d', fontSize: 14 }}>
              {h.result === 'Won' ? '🏆' : '⚽'}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11.5, fontWeight: 500, color: '#c8d8e8' }}>
                Odds {h.odds} <span style={{ fontSize: 9, color: h.typeColor }}>({h.type})</span>
              </div>
              <div style={{ fontSize: 10, color: '#4b6377' }}>{h.selections} selections</div>
            </div>
            <span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 3, fontWeight: 500, background: `${h.resultColor}22`, color: h.resultColor }}>{h.result}</span>
            <span style={{ fontSize: 11.5, fontWeight: 600, color: h.resultColor, minWidth: 44, textAlign: 'right' }}>{h.pnl}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, padding: '10px', borderTop: '0.5px solid #1e2d3d', fontSize: 11, color: '#4b6377', cursor: 'pointer' }}>
        View All History →
      </div>
    </div>
  )
}
