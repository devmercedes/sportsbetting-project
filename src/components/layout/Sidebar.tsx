'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/dashboard', icon: '⊞', label: 'Dashboard' },
  { href: '/picks', icon: '🎯', label: 'Daily Picks', badge: 'Hot', badgeType: 'hot' },
  { href: '/bet-builder', icon: '🤖', label: 'AI Bet Builder', badge: 'New', badgeType: 'new',
    children: [
      { href: '/bet-builder/safe', label: 'Safe (3–5)' },
      { href: '/bet-builder/daily', label: 'Daily Safe (6)' },
      { href: '/bet-builder/medium', label: 'Medium (10–12)' },
      { href: '/bet-builder/high', label: 'High Reward (20+)' },
    ]
  },
  { href: '/scanner', icon: '📋', label: 'Bet Slip Scanner', badge: 'New', badgeType: 'new' },
  { href: '/my-bets', icon: '📄', label: 'My Bets' },
  { href: '/roi-tracker', icon: '📈', label: 'ROI Tracker' },
  { href: '/statistics', icon: '📊', label: 'Statistics' },
  { href: '/telegram', icon: '✈️', label: 'Telegram Alerts' },
  { href: '/settings', icon: '⚙️', label: 'Settings' },
  { href: '/support', icon: '❓', label: 'Help & Support' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const isScanner = pathname === '/scanner'

  return (
    <div style={{
      width: 210, flexShrink: 0, background: '#0d1424',
      borderRight: '0.5px solid #1e2d3d', display: 'flex', flexDirection: 'column',
      height: '100vh', overflow: 'hidden'
    }}>
      {/* Logo */}
      <div style={{ padding: '16px 16px 12px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '0.5px solid #1e2d3d' }}>
        <div style={{ width: 30, height: 30, background: '#22c55e', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#0a0f1a', flexShrink: 0 }}>AI</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#e2e8f0', letterSpacing: -0.3 }}>AI BET</div>
          <div style={{ fontSize: 9, color: '#4b6377', letterSpacing: 0.5, textTransform: 'uppercase' }}>Smarter bets. Better results.</div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
        {navItems.map(item => {
          const active = pathname === item.href || pathname.startsWith(item.href + '/')
          const showChildren = item.children && active
          return (
            <div key={item.href}>
              <Link href={item.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 9, padding: '8px 14px',
                  fontSize: 12.5, color: active ? '#22c55e' : '#6b8299',
                  background: active ? 'rgba(34,197,94,0.08)' : 'transparent',
                  position: 'relative', cursor: 'pointer', transition: 'color 0.15s',
                  borderLeft: active ? '2px solid #22c55e' : '2px solid transparent',
                }}>
                  <span>{item.icon}</span>
                  <span style={{ flex: 1 }}>{item.label}</span>
                  {item.badge && (
                    <span style={{
                      fontSize: 9, padding: '2px 6px', borderRadius: 4, fontWeight: 500,
                      background: item.badgeType === 'hot' ? '#ef4444' : 'rgba(34,197,94,0.2)',
                      color: item.badgeType === 'hot' ? '#fff' : '#22c55e',
                    }}>{item.badge}</span>
                  )}
                </div>
              </Link>
              {showChildren && item.children?.map(child => (
                <Link key={child.href} href={child.href} style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', padding: '6px 14px 6px 38px',
                    fontSize: 11.5, color: pathname === child.href ? '#22c55e' : '#4b6377',
                  }}>{child.label}</div>
                </Link>
              ))}
            </div>
          )
        })}
      </nav>

      {/* Upgrade CTA */}
      <div style={{ padding: 12, borderTop: '0.5px solid #1e2d3d' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0f2010, #0d1e1a)',
          border: '0.5px solid rgba(34,197,94,0.25)', borderRadius: 8, padding: 12, textAlign: 'center'
        }}>
          <div style={{ fontSize: 20, marginBottom: 5 }}>👑</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#22c55e', marginBottom: 3 }}>Upgrade to VIP</div>
          <div style={{ fontSize: 9.5, color: '#4b6377', marginBottom: 8, lineHeight: 1.4 }}>Unlock advanced features and maximize your profits.</div>
          <button style={{ width: '100%', padding: '7px', background: '#22c55e', color: '#0a0f1a', fontSize: 10.5, fontWeight: 600, border: 'none', borderRadius: 5, cursor: 'pointer' }}>
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  )
}
