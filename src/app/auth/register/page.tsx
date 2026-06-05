'use client'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0f1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 400, background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 12, padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, justifyContent: 'center' }}>
          <div style={{ width: 36, height: 36, background: '#22c55e', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#0a0f1a' }}>AI</div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#e2e8f0' }}>AI BET</div>
            <div style={{ fontSize: 9, color: '#4b6377', textTransform: 'uppercase', letterSpacing: 0.5 }}>Smarter bets. Better results.</div>
          </div>
        </div>

        <h1 style={{ fontSize: 18, fontWeight: 600, color: '#e2e8f0', marginBottom: 6, textAlign: 'center' }}>Create your account</h1>
        <p style={{ fontSize: 12, color: '#4b6377', textAlign: 'center', marginBottom: 24 }}>Start with a free plan. No credit card required.</p>

        {[['Full Name', 'text', 'Alex Johnson'], ['Email', 'email', 'alex@email.com'], ['Password', 'password', '••••••••']].map(([label, type, placeholder]) => (
          <div key={label as string} style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 11, color: '#6b8299', display: 'block', marginBottom: 5 }}>{label}</label>
            <input type={type as string} placeholder={placeholder as string} style={{ width: '100%', padding: '10px 12px', background: '#0a0f1a', border: '0.5px solid #1e2d3d', borderRadius: 6, fontSize: 13, color: '#e2e8f0', outline: 'none' }} />
          </div>
        ))}

        <div style={{ marginBottom: 16, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <input type="checkbox" id="age" style={{ marginTop: 2, accentColor: '#22c55e' }} />
          <label htmlFor="age" style={{ fontSize: 11, color: '#6b8299', lineHeight: 1.5 }}>
            I confirm I am 18+ years old and agree to the{' '}
            <a href="#" style={{ color: '#22c55e', textDecoration: 'none' }}>Terms of Service</a>
            {' '}and{' '}
            <a href="#" style={{ color: '#22c55e', textDecoration: 'none' }}>Privacy Policy</a>
          </label>
        </div>

        <button style={{ width: '100%', padding: '11px', background: '#22c55e', color: '#0a0f1a', fontSize: 13, fontWeight: 600, border: 'none', borderRadius: 6, cursor: 'pointer', marginBottom: 16 }}>
          Create Free Account
        </button>

        <p style={{ fontSize: 11.5, color: '#4b6377', textAlign: 'center' }}>
          Already have an account?{' '}
          <Link href="/auth/login" style={{ color: '#22c55e', textDecoration: 'none' }}>Sign in</Link>
        </p>
      </div>
    </div>
  )
}
