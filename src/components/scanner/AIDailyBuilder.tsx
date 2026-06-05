import React from 'react'

const builders: Array<{
  icon: string
  name: string
  sub: string
  oddsRange: string
  selections: string
  confidence: string
  btnLabel: string
  btnStyle: React.CSSProperties
}> = [
  { icon: '🛡️', name: 'AI Safe Builder', sub: 'Low Risk · High Confidence', oddsRange: '3.00 – 5.00', selections: '2–4', confidence: '85% – 95%', btnLabel: 'Generate Safe Bet', btnStyle: { background: 'rgba(34,197,94,0.12)', color: '#22c55e', border: '0.5px solid rgba(34,197,94,0.25)' } },
  { icon: '⚡', name: 'AI Daily Safe', sub: 'Low/Medium Risk · Balanced', oddsRange: '~6.00', selections: '4–6', confidence: '80%+', btnLabel: 'Generate 6.00 Odds Bet', btnStyle: { background: 'rgba(34,197,94,0.18)', color: '#22c55e', border: '0.5px solid rgba(34,197,94,0.15)' } },
  { icon: '🔥', name: 'AI Medium Builder', sub: 'Medium Risk · Good Value', oddsRange: '10.00 – 12.00', selections: '5–8', confidence: '70% – 80%', btnLabel: 'Generate 10-12 Odds Bet', btnStyle: { background: 'rgba(245,158,11,0.18)', color: '#f59e0b', border: '0.5px solid rgba(245,158,11,0.15)' } },
  { icon: '🚀', name: 'AI High Reward', sub: 'High Risk · High Reward', oddsRange: '20.00+', selections: '8–12', confidence: '60% – 70%', btnLabel: 'Generate 20+ Odds Bet', btnStyle: { background: 'rgba(239,68,68,0.18)', color: '#ef4444', border: '0.5px solid rgba(239,68,68,0.15)' } },
]

export default function AIDailyBuilder() {
  return (
    <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ padding: '12px 14px', borderBottom: '0.5px solid #1e2d3d', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>AI Daily Bet Builder</div>
        <span style={{ fontSize: 9, background: 'rgba(34,197,94,0.2)', color: '#22c55e', padding: '2px 6px', borderRadius: 4, fontWeight: 500 }}>New</span>
        <span style={{ fontSize: 10.5, color: '#4b6377', marginLeft: 4 }}>Choose your risk level and let AI build the best daily bet for you.</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, padding: 12 }}>
        {builders.map(b => (
          <div key={b.name} style={{ background: '#0a0f1a', border: '0.5px solid #1e2d3d', borderRadius: 8, padding: 12 }}>
            <div style={{ fontSize: 22, marginBottom: 6 }}>{b.icon}</div>
            <div style={{ fontSize: 11.5, fontWeight: 600, color: '#c8d8e8', marginBottom: 2 }}>{b.name}</div>
            <div style={{ fontSize: 9.5, color: '#4b6377', marginBottom: 8 }}>{b.sub}</div>
            <div style={{ fontSize: 10, color: '#6b8299', marginBottom: 2 }}>Odds: <span style={{ color: '#c8d8e8', fontWeight: 500 }}>{b.oddsRange}</span></div>
            <div style={{ fontSize: 10, color: '#6b8299', marginBottom: 2 }}>Selections: <span style={{ color: '#c8d8e8', fontWeight: 500 }}>{b.selections}</span></div>
            <div style={{ fontSize: 10, color: '#6b8299', marginBottom: 10 }}>Confidence: <span style={{ color: '#22c55e', fontWeight: 500 }}>{b.confidence}</span></div>
            <button style={{ width: '100%', padding: '6px 4px', fontSize: 9.5, fontWeight: 500, borderRadius: 5, cursor: 'pointer', ...b.btnStyle }}>
              {b.btnLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
