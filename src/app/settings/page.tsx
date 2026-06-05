'use client'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, overflow: 'hidden', marginBottom: 16 }}>
      <div style={{ padding: '12px 16px', borderBottom: '0.5px solid #1e2d3d', fontSize: 12, fontWeight: 600, color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: 0.5 }}>{title}</div>
      <div style={{ padding: '14px 16px' }}>{children}</div>
    </div>
  )
}

function Row({ label, value, action }: { label: string; value?: string; action?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '0.5px solid #0f1a28' }}>
      <div>
        <div style={{ fontSize: 12, color: '#94a3b8' }}>{label}</div>
        {value && <div style={{ fontSize: 13, color: '#e2e8f0', marginTop: 2 }}>{value}</div>}
      </div>
      {action && <button style={{ padding: '5px 12px', background: 'transparent', border: '0.5px solid #1e2d3d', borderRadius: 5, fontSize: 11, color: '#22c55e', cursor: 'pointer' }}>{action}</button>}
    </div>
  )
}

function Toggle({ label, enabled }: { label: string; enabled: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '0.5px solid #0f1a28' }}>
      <span style={{ fontSize: 12, color: '#94a3b8' }}>{label}</span>
      <div style={{ width: 36, height: 20, background: enabled ? '#22c55e' : '#1e2d3d', borderRadius: 10, position: 'relative', cursor: 'pointer', transition: 'background 0.2s' }}>
        <div style={{ width: 16, height: 16, background: '#fff', borderRadius: '50%', position: 'absolute', top: 2, left: enabled ? 18 : 2, transition: 'left 0.2s' }} />
      </div>
    </div>
  )
}

export default function SettingsPage() {
  return (
    <div style={{ maxWidth: 680 }}>
      <Section title="Account">
        <Row label="Full Name" value="Alex Johnson" action="Edit" />
        <Row label="Email" value="alex@email.com" action="Edit" />
        <Row label="Password" value="••••••••••••" action="Change" />
      </Section>

      <Section title="Subscription">
        <div style={{ background: 'rgba(34,197,94,0.05)', border: '0.5px solid rgba(34,197,94,0.2)', borderRadius: 8, padding: '12px 14px', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <div>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#22c55e' }}>PRO</span>
              <span style={{ fontSize: 12, color: '#4b6377', marginLeft: 8 }}>$29 / month</span>
            </div>
            <span style={{ fontSize: 10, background: 'rgba(34,197,94,0.15)', color: '#22c55e', padding: '3px 8px', borderRadius: 4 }}>Active</span>
          </div>
          <div style={{ fontSize: 11, color: '#4b6377' }}>Renews November 15, 2024</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ flex: 1, padding: '8px', background: '#22c55e', color: '#0a0f1a', border: 'none', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Upgrade to VIP</button>
          <button style={{ padding: '8px 14px', background: 'transparent', border: '0.5px solid #1e2d3d', borderRadius: 6, fontSize: 12, color: '#6b8299', cursor: 'pointer' }}>Manage Billing →</button>
          <button style={{ padding: '8px 14px', background: 'transparent', border: '0.5px solid rgba(239,68,68,0.3)', borderRadius: 6, fontSize: 12, color: '#ef4444', cursor: 'pointer' }}>Cancel Plan</button>
        </div>
      </Section>

      <Section title="Sport Preferences">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
          {['NFL', 'NBA', 'MLB', 'NHL', 'Soccer', 'NCAAF', 'NCAAB', 'MMA'].map(s => (
            <span key={s} style={{ padding: '4px 12px', background: ['NFL','NBA'].includes(s) ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.04)', border: `0.5px solid ${['NFL','NBA'].includes(s) ? 'rgba(34,197,94,0.3)' : '#1e2d3d'}`, borderRadius: 5, fontSize: 11, color: ['NFL','NBA'].includes(s) ? '#22c55e' : '#6b8299', cursor: 'pointer' }}>{s}</span>
          ))}
        </div>
        <div style={{ fontSize: 11, color: '#4b6377' }}>Min Confidence: <span style={{ color: '#22c55e' }}>55%+</span></div>
      </Section>

      <Section title="Notifications">
        <Toggle label="Email – New picks available" enabled={true} />
        <Toggle label="Email – Weekly performance digest" enabled={true} />
        <Toggle label="Telegram notifications (VIP only)" enabled={false} />
      </Section>

      <Section title="Data & Privacy">
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ padding: '8px 14px', background: 'transparent', border: '0.5px solid #1e2d3d', borderRadius: 6, fontSize: 12, color: '#94a3b8', cursor: 'pointer' }}>Download My Data</button>
          <button style={{ padding: '8px 14px', background: 'transparent', border: '0.5px solid rgba(239,68,68,0.3)', borderRadius: 6, fontSize: 12, color: '#ef4444', cursor: 'pointer' }}>Delete Account</button>
        </div>
      </Section>
    </div>
  )
}
