const selections = [
  { teams: 'Man City vs Tottenham', pick: 'Over 2.5 Goals', odds: 1.65, risk: 'Medium' },
  { teams: 'PSG vs Lyon', pick: 'Over 1.5 Goals', odds: 1.40, risk: 'Low' },
  { teams: 'Barcelona vs Real Madrid', pick: 'Both Teams to Score – Yes', odds: 1.70, risk: 'High' },
  { teams: 'Arsenal vs Chelsea', pick: 'Over 2.5 Goals', odds: 1.85, risk: 'Medium' },
]

const riskColor = (r: string) => r === 'Low' ? '#22c55e' : r === 'Medium' ? '#f59e0b' : '#ef4444'

export default function BetSlipResult() {
  return (
    <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, overflow: 'hidden' }}>
      {/* Steps */}
      <div style={{ padding: '10px 14px', borderBottom: '0.5px solid #1e2d3d', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 20, height: 20, background: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 600, color: '#0a0f1a' }}>1</div>
        <div><div style={{ fontSize: 10, fontWeight: 500, color: '#c8d8e8' }}>Upload Bet Slip</div><div style={{ fontSize: 9, color: '#4b6377' }}>Done</div></div>
        <span style={{ color: '#2d4a5e', fontSize: 12 }}>›</span>
        <div style={{ width: 20, height: 20, background: '#1e3d5c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 600, color: '#64b5f6', border: '1px solid #378add' }}>2</div>
        <div><div style={{ fontSize: 10, fontWeight: 500, color: '#c8d8e8' }}>Analysis Result</div><div style={{ fontSize: 9, color: '#4b6377' }}>AI analysis</div></div>
      </div>

      <div style={{ padding: '12px 14px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 12, fontWeight: 500, color: '#c8d8e8' }}>Scan Result</span>
          <span style={{ fontSize: 9, background: 'rgba(34,197,94,0.15)', color: '#22c55e', padding: '2px 7px', borderRadius: 4 }}>Completed</span>
          <span style={{ marginLeft: 'auto', fontSize: 10, color: '#4b6377' }}>May 13, 2024 – 14:30</span>
        </div>

        {/* Risk gauge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, background: '#0a0f1a', borderRadius: 8, padding: '10px 12px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: '#4b6377', marginBottom: 2 }}>Overall Risk</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#f59e0b', marginBottom: 3 }}>Medium Risk</div>
            <div style={{ fontSize: 9.5, color: '#4b6377', lineHeight: 1.4 }}>Your bet slip has medium risk.<br />There are better, safer alternatives.</div>
          </div>
          <svg width="62" height="44" viewBox="0 0 62 44">
            <path d="M6 38 A25 25 0 0 1 56 38" fill="none" stroke="#1e2d3d" strokeWidth="6" strokeLinecap="round"/>
            <path d="M6 38 A25 25 0 0 1 42 14" fill="none" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round"/>
            <text x="31" y="38" textAnchor="middle" fontSize="14" fontWeight="700" fill="#e2e8f0">6</text>
            <text x="42" y="38" fontSize="9" fill="#6b8299">/10</text>
          </svg>
        </div>

        {/* Selections */}
        <div style={{ fontSize: 11, fontWeight: 500, color: '#c8d8e8', marginBottom: 7 }}>Your Selections (4)</div>
        <div style={{ borderTop: '0.5px solid #1e2d3d' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 44px 52px', fontSize: 9, color: '#4b6377', padding: '4px 0', borderBottom: '0.5px solid #0f1a28' }}>
            <span>Match / Pick</span><span style={{ textAlign: 'right' }}>Odds</span><span style={{ textAlign: 'right' }}>Risk</span>
          </div>
          {selections.map(s => (
            <div key={s.teams} style={{ display: 'grid', gridTemplateColumns: '1fr 44px 52px', padding: '7px 0', borderBottom: '0.5px solid #0f1a28', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 500, color: '#c8d8e8' }}>{s.teams}</div>
                <div style={{ fontSize: 9.5, color: '#4b6377' }}>{s.pick}</div>
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#c8d8e8', textAlign: 'right' }}>{s.odds}</div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 3, fontWeight: 500, background: `${riskColor(s.risk)}22`, color: riskColor(s.risk) }}>{s.risk}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 10 }}>
          {[['Total Odds', '6.99', '#e2e8f0'], ['Risk Level', 'Medium', '#f59e0b'], ['Potential Improvement', '+24.6%', '#22c55e']].map(([label, val, color]) => (
            <div key={label} style={{ textAlign: 'center', background: '#0a0f1a', borderRadius: 6, padding: '8px 4px' }}>
              <div style={{ fontSize: 9, color: '#4b6377', marginBottom: 3 }}>{label}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color }}>{val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
