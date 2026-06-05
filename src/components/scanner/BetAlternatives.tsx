const alternatives = [
  { teams: 'Man City vs Tottenham', pick: 'Man City – Draw No Bet', odds: 1.35, tag: 'Safer', tagColor: '#22c55e' },
  { teams: 'PSG vs Lyon', pick: 'PSG – Over 2.5 Goals', odds: 1.28, tag: 'Safer', tagColor: '#22c55e' },
  { teams: 'Barcelona vs Real Madrid', pick: 'Both Teams to Score – Yes', odds: 1.55, tag: 'Better Value', tagColor: '#60a5fa' },
  { teams: 'Arsenal vs Chelsea', pick: 'Under 3.5 Goals', odds: 1.32, tag: 'Safer', tagColor: '#22c55e' },
]

export default function BetAlternatives() {
  return (
    <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ padding: '12px 14px', borderBottom: '0.5px solid #1e2d3d', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', flex: 1 }}>Better Alternatives</div>
        <span style={{ fontSize: 16 }}>📈</span>
      </div>

      <div style={{ padding: '6px 12px' }}>
        {alternatives.map(alt => (
          <div key={alt.teams} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0', borderBottom: '0.5px solid #0f1a28' }}>
            <div style={{ width: 20, height: 20, background: 'rgba(34,197,94,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 10 }}>✓</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10.5, fontWeight: 500, color: '#c8d8e8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{alt.teams}</div>
              <div style={{ fontSize: 9.5, color: '#4b6377' }}>{alt.pick}</div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>{alt.odds}</div>
              <div style={{ fontSize: 8, padding: '1px 5px', borderRadius: 3, fontWeight: 500, background: `${alt.tagColor}22`, color: alt.tagColor, display: 'inline-block' }}>{alt.tag}</div>
            </div>
          </div>
        ))}
      </div>

      {/* New odds card */}
      <div style={{ margin: '8px 12px', background: '#0a0f1a', border: '0.5px solid #1e2d3d', borderRadius: 8, padding: '10px 12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <div>
          <div style={{ fontSize: 9.5, color: '#4b6377', marginBottom: 3 }}>New Total Odds</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#e2e8f0' }}>4.58</div>
        </div>
        <div>
          <div style={{ fontSize: 9.5, color: '#4b6377', marginBottom: 3 }}>Improvement</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#22c55e' }}>+24.6%</div>
        </div>
      </div>

      {/* AI Tip */}
      <div style={{ margin: '0 12px 10px', background: 'rgba(245,158,11,0.05)', border: '0.5px solid rgba(245,158,11,0.2)', borderRadius: 7, padding: '9px 10px', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
        <div style={{ width: 26, height: 26, background: 'rgba(245,158,11,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 13 }}>💡</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#f59e0b', marginBottom: 2 }}>AI Tip</div>
          <div style={{ fontSize: 9.5, color: '#6b8299', lineHeight: 1.4 }}>Lowering the risk on your selections increases long-term profitability.</div>
        </div>
      </div>

      <div style={{ padding: '0 12px 12px' }}>
        <button style={{ width: '100%', padding: 9, background: '#22c55e', color: '#0a0f1a', fontSize: 11.5, fontWeight: 600, border: 'none', borderRadius: 6, cursor: 'pointer', marginBottom: 8 }}>
          🔄 Create New Bet Slip
        </button>
        <div style={{ textAlign: 'center', fontSize: 11, color: '#6b8299', cursor: 'pointer' }}>🔖 Save Analysis</div>
      </div>
    </div>
  )
}
