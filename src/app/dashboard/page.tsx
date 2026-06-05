import StatCard from '@/components/dashboard/StatCard'
import PickCard from '@/components/picks/PickCard'
import PerformanceChart from '@/components/dashboard/PerformanceChart'
import SportBreakdown from '@/components/dashboard/SportBreakdown'

const todayPicks = [
  { id: '1', sport: 'NFL' as const, homeTeam: 'Kansas City Chiefs', awayTeam: 'Las Vegas Raiders', pickValue: 'Chiefs -3.5', odds: -110, confidence: 78, tierRequired: 'free' as const, pickType: 'spread' as const, locked: false, result: 'pending' as const, eventStartAt: '2024-10-13T20:25:00Z' },
  { id: '2', sport: 'NBA' as const, homeTeam: 'Los Angeles Lakers', awayTeam: 'Golden State Warriors', pickValue: 'Lakers ML', odds: 105, confidence: 65, tierRequired: 'pro' as const, pickType: 'moneyline' as const, locked: false, result: 'pending' as const, eventStartAt: '2024-10-13T22:30:00Z' },
  { id: '3', sport: 'NFL' as const, homeTeam: 'Dallas Cowboys', awayTeam: 'New York Giants', pickValue: 'Over 47.5', odds: -115, confidence: 58, tierRequired: 'pro' as const, pickType: 'total' as const, locked: false, result: 'pending' as const, eventStartAt: '2024-10-13T17:00:00Z' },
]

export default function DashboardPage() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 20, fontWeight: 500, color: '#e2e8f0', marginBottom: 4 }}>Good morning, Alex.</h1>
        <p style={{ fontSize: 13, color: '#4b6377' }}>Tuesday, October 15 · 3 picks available today</p>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
        <StatCard label="Win Rate" value="62.4%" change="+2.1%" positive />
        <StatCard label="ROI" value="+18.3%" change="+0.8%" positive />
        <StatCard label="Current Streak" value="W5 🔥" />
        <StatCard label="Picks This Month" value="47" />
      </div>

      {/* Today's picks */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <h2 style={{ fontSize: 14, fontWeight: 500, color: '#e2e8f0' }}>Today's Picks</h2>
          <a href="/picks" style={{ fontSize: 12, color: '#22c55e', textDecoration: 'none' }}>View All →</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {todayPicks.map(pick => (
            <PickCard key={pick.id} pick={pick} compact />
          ))}
        </div>
      </div>

      {/* Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
        <PerformanceChart />
        <SportBreakdown />
      </div>
    </div>
  )
}
