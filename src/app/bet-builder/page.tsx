import Link from 'next/link'

const builders = [
  { href: '/bet-builder/safe', icon: '🛡️', name: 'AI Safe Builder', sub: 'Low Risk · High Confidence', oddsRange: '3.00 – 5.00', selections: '2–4', confidence: '85% – 95%', color: '#22c55e', desc: 'Best for conservative bettors. High probability selections with strong historical performance.' },
  { href: '/bet-builder/daily', icon: '⚡', name: 'AI Daily Safe', sub: 'Low/Medium Risk · Balanced', oddsRange: '~6.00', selections: '4–6', confidence: '80%+', color: '#22c55e', desc: 'Our flagship daily build. Balanced risk-reward ratio optimized for consistent returns.' },
  { href: '/bet-builder/medium', icon: '🔥', name: 'AI Medium Builder', sub: 'Medium Risk · Good Value', oddsRange: '10.00 – 12.00', selections: '5–8', confidence: '70% – 80%', color: '#f59e0b', desc: 'For bettors seeking higher returns. Carefully selected value picks with solid backing.' },
  { href: '/bet-builder/high', icon: '🚀', name: 'AI High Reward', sub: 'High Risk · High Reward', oddsRange: '20.00+', selections: '8–12', confidence: '60% – 70%', color: '#ef4444', desc: 'High-risk, high-reward accumulators. Use small stakes only. For experienced bettors.' },
]

export default function BetBuilderPage() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 15, fontWeight: 600, color: '#e2e8f0', marginBottom: 4 }}>AI Daily Bet Builder</h2>
        <p style={{ fontSize: 12, color: '#4b6377' }}>Choose your risk level and let our AI build the best daily bet accumulator for you.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
        {builders.map(b => (
          <Link key={b.href} href={b.href} style={{ textDecoration: 'none' }}>
            <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, padding: 20, cursor: 'pointer', transition: 'border-color 0.2s' }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{b.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#e2e8f0', marginBottom: 3 }}>{b.name}</div>
              <div style={{ fontSize: 10.5, color: '#4b6377', marginBottom: 12 }}>{b.sub}</div>
              <p style={{ fontSize: 12, color: '#6b8299', lineHeight: 1.5, marginBottom: 14 }}>{b.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 14 }}>
                {[['Target Odds', b.oddsRange], ['Selections', b.selections], ['Confidence', b.confidence]].map(([label, val]) => (
                  <div key={label} style={{ background: '#0a0f1a', borderRadius: 6, padding: '8px 10px' }}>
                    <div style={{ fontSize: 9, color: '#4b6377', marginBottom: 2 }}>{label}</div>
                    <div style={{ fontSize: 11, fontWeight: 500, color: '#c8d8e8' }}>{val}</div>
                  </div>
                ))}
              </div>
              <button style={{ width: '100%', padding: '9px', background: `${b.color}22`, color: b.color, border: `0.5px solid ${b.color}44`, borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                Generate Bet →
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
