'use client'
import { usePathname } from 'next/navigation'

const pageTitles: Record<string, { title: string; sub: string }> = {
  '/dashboard': { title: 'Dashboard', sub: 'Your performance overview' },
  '/picks': { title: 'Daily Picks', sub: "Today's AI-generated picks with confidence scoring" },
  '/scanner': { title: 'Bet Slip Scanner', sub: 'Upload your bet slip and let our AI analyze the risks and find better options.' },
  '/analytics': { title: 'Analytics', sub: 'Track your performance over time' },
  '/settings': { title: 'Settings', sub: 'Manage your account and preferences' },
  '/my-bets': { title: 'My Bets', sub: 'Track all your logged bets' },
  '/roi-tracker': { title: 'ROI Tracker', sub: 'Monitor your return on investment' },
  '/statistics': { title: 'Statistics', sub: 'Detailed performance statistics' },
}

export default function Topbar() {
  const pathname = usePathname()
  const page = pageTitles[pathname] ?? { title: 'AI Bet', sub: '' }

  return (
    <div style={{
      height: 56, background: '#0d1424', borderBottom: '0.5px solid #1e2d3d',
      display: 'flex', alignItems: 'center', padding: '0 20px', gap: 12, flexShrink: 0
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: '#e2e8f0' }}>{page.title}</div>
        {page.sub && <div style={{ fontSize: 10.5, color: '#4b6377', marginTop: 1 }}>{page.sub}</div>}
      </div>

      <button style={{
        display: 'flex', alignItems: 'center', gap: 5, padding: '5px 10px',
        background: 'rgba(255,255,255,0.04)', border: '0.5px solid #1e2d3d',
        borderRadius: 6, fontSize: 11, color: '#6b8299', cursor: 'pointer'
      }}>
        ❓ How it works?
      </button>

      {/* Notification bell */}
      <div style={{
        width: 32, height: 32, background: 'rgba(255,255,255,0.04)',
        border: '0.5px solid #1e2d3d', borderRadius: 6,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', cursor: 'pointer', fontSize: 15
      }}>
        🔔
        <div style={{
          position: 'absolute', top: 6, right: 6, width: 7, height: 7,
          background: '#ef4444', borderRadius: '50%', border: '1px solid #0d1424'
        }} />
      </div>

      {/* User */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
        <div style={{
          width: 32, height: 32, background: '#22c55e', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 600, color: '#0a0f1a'
        }}>A</div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 500, color: '#e2e8f0' }}>Alex</div>
          <div style={{ fontSize: 9, color: '#f59e0b', background: 'rgba(245,158,11,0.15)', padding: '1px 5px', borderRadius: 3, fontWeight: 500 }}>VIP Pro</div>
        </div>
        <span style={{ fontSize: 12, color: '#6b8299' }}>▾</span>
      </div>
    </div>
  )
}
