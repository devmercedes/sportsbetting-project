import BetSlipScanner from '@/components/scanner/BetSlipScanner'
import BetSlipResult from '@/components/scanner/BetSlipResult'
import BetAlternatives from '@/components/scanner/BetAlternatives'
import AIDailyBuilder from '@/components/scanner/AIDailyBuilder'
import RecentHistory from '@/components/scanner/RecentHistory'

export default function ScannerPage() {
  return (
    <div>
      {/* Top 3-col row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', gap: 14, marginBottom: 14 }}>
        <BetSlipScanner />
        <BetSlipResult />
        <BetAlternatives />
      </div>
      {/* Bottom row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
        <AIDailyBuilder />
        <RecentHistory />
      </div>
    </div>
  )
}
