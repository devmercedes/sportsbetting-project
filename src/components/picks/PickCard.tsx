'use client'
import { Pick } from '@/types'
import ConfidenceBar from './ConfidenceBar'

interface PickCardProps {
  pick: Partial<Pick> & {
    homeTeam: string
    awayTeam: string
    sport: Pick['sport']
    pickValue: string
    odds: number
    confidence: number
    tierRequired: Pick['tier_required']
    pickType: Pick['pick_type']
    locked?: boolean
    result?: Pick['result']
    eventStartAt?: string
  }
  compact?: boolean
  userPlan?: 'free' | 'pro' | 'vip'
}

const sportEmoji: Record<string, string> = {
  NFL: '🏈', NBA: '🏀', MLB: '⚾', NHL: '🏒', Soccer: '⚽', NCAAF: '🏈', NCAAB: '🏀', MMA: '🥊'
}

const riskColor = (confidence: number) => {
  if (confidence >= 70) return '#22c55e'
  if (confidence >= 60) return '#f59e0b'
  return '#ef4444'
}

const riskLabel = (confidence: number) => {
  if (confidence >= 70) return 'Low'
  if (confidence >= 60) return 'Medium'
  return 'High'
}

function formatOdds(odds: number) {
  return odds > 0 ? `+${odds}` : `${odds}`
}

export default function PickCard({ pick, compact, userPlan = 'pro' }: PickCardProps) {
  const isLocked = pick.tierRequired === 'vip' && userPlan !== 'vip' ||
    pick.tierRequired === 'pro' && userPlan === 'free'

  if (compact) {
    return (
      <div style={{
        background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 8,
        padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12
      }}>
        <span style={{ fontSize: 18 }}>{sportEmoji[pick.sport]}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: '#e2e8f0' }}>{pick.pickValue}</div>
          <div style={{ fontSize: 10.5, color: '#4b6377' }}>{pick.homeTeam} vs {pick.awayTeam} · {formatOdds(pick.odds)}</div>
        </div>
        <ConfidenceBar value={pick.confidence} compact />
        <button style={{
          padding: '5px 10px', background: 'rgba(34,197,94,0.1)', border: '0.5px solid rgba(34,197,94,0.3)',
          borderRadius: 5, fontSize: 10.5, color: '#22c55e', cursor: 'pointer', whiteSpace: 'nowrap'
        }}>
          Log Outcome
        </button>
      </div>
    )
  }

  return (
    <div style={{
      background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 10,
      overflow: 'hidden', position: 'relative'
    }}>
      {pick.locked && (
        <div style={{
          position: 'absolute', top: 10, right: 10, fontSize: 10, color: '#4b6377',
          background: '#0a0f1a', padding: '2px 7px', borderRadius: 4, border: '0.5px solid #1e2d3d'
        }}>🔒 LOCKED</div>
      )}

      <div style={{ padding: '12px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 20 }}>{sportEmoji[pick.sport]}</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#e2e8f0' }}>
              {pick.homeTeam} vs {pick.awayTeam}
            </div>
            <div style={{ fontSize: 10.5, color: '#4b6377' }}>
              {pick.sport} · {pick.pickType?.toUpperCase()}
            </div>
          </div>
        </div>

        {isLocked ? (
          <div style={{
            background: 'rgba(255,255,255,0.03)', border: '0.5px dashed #1e2d3d', borderRadius: 7,
            padding: '14px', textAlign: 'center'
          }}>
            <div style={{ fontSize: 18, marginBottom: 5 }}>🔒</div>
            <div style={{ fontSize: 12, color: '#6b8299', marginBottom: 8 }}>
              {pick.tierRequired === 'vip' ? 'VIP' : 'Pro'} plan required to view this pick
            </div>
            <button style={{
              padding: '6px 16px', background: '#22c55e', color: '#0a0f1a',
              border: 'none', borderRadius: 5, fontSize: 11, fontWeight: 600, cursor: 'pointer'
            }}>
              Upgrade to {pick.tierRequired === 'vip' ? 'VIP' : 'Pro'}
            </button>
          </div>
        ) : (
          <>
            <div style={{
              background: '#0a0f1a', borderRadius: 7, padding: '10px 12px', marginBottom: 10
            }}>
              <div style={{ fontSize: 10, color: '#4b6377', marginBottom: 3 }}>PICK</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#e2e8f0', marginBottom: 2 }}>
                {pick.pickValue}
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Odds: {formatOdds(pick.odds)}</div>
            </div>

            <div style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 11, color: '#4b6377' }}>Confidence</span>
                <span style={{
                  fontSize: 10, padding: '2px 7px', borderRadius: 4, fontWeight: 500,
                  background: `${riskColor(pick.confidence)}22`,
                  color: riskColor(pick.confidence)
                }}>{riskLabel(pick.confidence)} Risk</span>
              </div>
              <ConfidenceBar value={pick.confidence} />
            </div>

            <div style={{ display: 'flex', gap: 6 }}>
              <button style={{
                flex: 1, padding: '8px', background: '#22c55e', color: '#0a0f1a',
                border: 'none', borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: 'pointer'
              }}>Log This Pick →</button>
              <button style={{
                padding: '8px 12px', background: 'rgba(255,255,255,0.04)',
                border: '0.5px solid #1e2d3d', borderRadius: 6, fontSize: 11, color: '#6b8299', cursor: 'pointer'
              }}>Details</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
