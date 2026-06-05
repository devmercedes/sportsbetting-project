'use client'
// Recharts-based win rate chart
// In production: import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const mockData = [
  { date: 'Sep 15', winRate: 55 }, { date: 'Sep 20', winRate: 58 },
  { date: 'Sep 25', winRate: 61 }, { date: 'Oct 1', winRate: 59 },
  { date: 'Oct 5', winRate: 63 }, { date: 'Oct 10', winRate: 62 },
  { date: 'Oct 15', winRate: 65 },
]

export default function PerformanceChart() {
  const max = 80, min = 40
  const w = 480, h = 120, pad = 20

  const pts = mockData.map((d, i) => {
    const x = pad + (i / (mockData.length - 1)) * (w - pad * 2)
    const y = h - pad - ((d.winRate - min) / (max - min)) * (h - pad * 2)
    return `${x},${y}`
  })

  const polyline = pts.join(' ')
  const area = `${pad},${h - pad} ` + polyline + ` ${w - pad},${h - pad}`

  return (
    <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, padding: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 500, color: '#e2e8f0', marginBottom: 12 }}>Win Rate (30 days)</div>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: 120 }}>
        <defs>
          <linearGradient id="gr" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={area} fill="url(#gr)" />
        <polyline points={polyline} fill="none" stroke="#22c55e" strokeWidth="2" strokeLinejoin="round" />
        {mockData.map((d, i) => {
          const x = pad + (i / (mockData.length - 1)) * (w - pad * 2)
          const y = h - pad - ((d.winRate - min) / (max - min)) * (h - pad * 2)
          return <circle key={i} cx={x} cy={y} r="3" fill="#22c55e" />
        })}
        {mockData.map((d, i) => {
          const x = pad + (i / (mockData.length - 1)) * (w - pad * 2)
          return <text key={i} x={x} y={h} textAnchor="middle" fontSize="9" fill="#4b6377">{d.date}</text>
        })}
      </svg>
    </div>
  )
}
