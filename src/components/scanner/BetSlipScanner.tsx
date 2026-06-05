'use client'
import { useState } from 'react'

export default function BetSlipScanner() {
  const [dragging, setDragging] = useState(false)

  return (
    <div style={{ background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ padding: '12px 14px', borderBottom: '0.5px solid #1e2d3d', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 22, height: 22, background: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600, color: '#0a0f1a' }}>1</div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#e2e8f0' }}>Upload Bet Slip</div>
          <div style={{ fontSize: 10, color: '#4b6377' }}>Upload your bet slip image</div>
        </div>
      </div>

      <div style={{ padding: 12 }}>
        <div
          onDragOver={e => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={e => { e.preventDefault(); setDragging(false) }}
          style={{
            border: `1px dashed ${dragging ? '#22c55e' : '#1e3a2a'}`,
            borderRadius: 8, padding: '22px 12px', textAlign: 'center',
            background: dragging ? 'rgba(34,197,94,0.06)' : 'rgba(34,197,94,0.02)',
            cursor: 'pointer', transition: 'all 0.2s', marginBottom: 12
          }}
        >
          <div style={{ width: 44, height: 44, background: 'rgba(34,197,94,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: 20 }}>☁️</div>
          <div style={{ fontSize: 12, fontWeight: 500, color: '#c8d8e8', marginBottom: 3 }}>Drag & drop your bet slip here</div>
          <div style={{ fontSize: 10.5, color: '#4b6377', marginBottom: 2 }}>or click to upload</div>
          <div style={{ fontSize: 10, color: '#2d4a5e' }}>JPG, PNG, PDF up to 5MB</div>
        </div>

        {/* Example slip */}
        <div style={{ fontSize: 10, color: '#4b6377', textAlign: 'center', marginBottom: 5 }}>Example</div>
        <div style={{ background: '#fff', borderRadius: 7, padding: '8px 10px', marginBottom: 5 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontWeight: 700, color: '#1a1a2e', marginBottom: 6, borderBottom: '0.5px solid #eee', paddingBottom: 4 }}>
            <span>BETSLIP</span><span style={{ color: '#999', fontWeight: 400 }}>4 Selections</span>
          </div>
          {[
            ['Man City vs Tottenham', 'Over 2.5 Goals', '1.65'],
            ['PSG vs Lyon', 'Over 1.5 Goals', '1.40'],
            ['Barcelona vs Real Madrid', 'Both Teams to Score', '1.70'],
            ['Arsenal vs Chelsea', 'Over 2.5 Goals', '1.85'],
          ].map(([teams, pick, odds]) => (
            <div key={teams} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 8.5, color: '#333', padding: '3px 0', borderBottom: '0.5px solid #f5f5f5' }}>
              <div><div style={{ fontWeight: 500 }}>{teams}</div><div style={{ color: '#888' }}>{pick}</div></div>
              <div style={{ fontWeight: 600, color: '#1a1a2e' }}>{odds}</div>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontWeight: 700, color: '#1a1a2e', marginTop: 5, paddingTop: 4, borderTop: '1px solid #ddd' }}>
            <span>Total Odds</span><span>6.99</span>
          </div>
        </div>
        <div style={{ fontSize: 9.5, color: '#2d4a5e', textAlign: 'center', marginBottom: 10 }}>This is just an example</div>

        <button style={{ width: '100%', padding: 10, background: '#22c55e', color: '#0a0f1a', fontSize: 12, fontWeight: 600, border: 'none', borderRadius: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          📋 Scan Bet Slip
        </button>
      </div>
    </div>
  )
}
