export default function TelegramPage() {
  return (
    <div style={{ maxWidth: 560 }}>
      <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 12, padding: 28, textAlign: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 48, marginBottom: 14 }}>✈️</div>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: '#e2e8f0', marginBottom: 8 }}>Telegram Alerts</h2>
        <p style={{ fontSize: 13, color: '#6b8299', lineHeight: 1.6, marginBottom: 20 }}>
          Get instant notifications when new AI picks drop, direct to your Telegram. Available for VIP subscribers.
        </p>
        <div style={{ background: 'rgba(245,158,11,0.08)', border: '0.5px solid rgba(245,158,11,0.2)', borderRadius: 8, padding: '12px 16px', marginBottom: 20, fontSize: 12, color: '#f59e0b' }}>
          👑 VIP plan required. Upgrade to unlock Telegram alerts.
        </div>
        <button style={{ padding: '10px 28px', background: '#22c55e', color: '#0a0f1a', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer', marginBottom: 10 }}>
          Upgrade to VIP →
        </button>
        <div style={{ fontSize: 11, color: '#4b6377' }}>Already VIP? Connect your Telegram below.</div>
      </div>

      <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, padding: 20 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', marginBottom: 14 }}>What You'll Get</div>
        {['Instant pick alerts as soon as they\'re generated', 'Confidence score and risk level in every message', 'Early access — 30 minutes before the app', 'Daily performance recaps', 'Weekly summary with W/L record'].map((f, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '0.5px solid #0f1a28', fontSize: 12, color: '#94a3b8' }}>
            <span style={{ color: '#22c55e' }}>✓</span>{f}
          </div>
        ))}
      </div>
    </div>
  )
}
