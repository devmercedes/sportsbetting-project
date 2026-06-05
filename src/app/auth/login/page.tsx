'use client'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0f1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 380, background: '#0d1424', border: '0.5px solid #1e2d3d', borderRadius: 12, padding: 32 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, justifyContent: 'center' }}>
          <div style={{ width: 36, height: 36, background: '#22c55e', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#0a0f1a' }}>AI</div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#e2e8f0' }}>AI BET</div>
            <div style={{ fontSize: 9, color: '#4b6377', textTransform: 'uppercase', letterSpacing: 0.5 }}>Smarter bets. Better results.</div>
          </div>
        </div>

        <h1 style={{ fontSize: 18, fontWeight: 600, color: '#e2e8f0', marginBottom: 6, textAlign: 'center' }}>Welcome back</h1>
        <p style={{ fontSize: 12, color: '#4b6377', textAlign: 'center', marginBottom: 24 }}>Sign in to your account</p>

        <div style={{ marginBottom: 14 }}>
          <label style={{ fontSize: 11, color: '#6b8299', display: 'block', marginBottom: 5 }}>Email</label>
          <input type="email" placeholder="alex@email.com" style={{ width: '100%', padding: '10px 12px', background: '#0a0f1a', border: '0.5px solid #1e2d3d', borderRadius: 6, fontSize: 13, color: '#e2e8f0', outline: 'none' }} />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontSize: 11, color: '#6b8299', display: 'block', marginBottom: 5 }}>Password</label>
          <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px 12px', background: '#0a0f1a', border: '0.5px solid #1e2d3d', borderRadius: 6, fontSize: 13, color: '#e2e8f0', outline: 'none' }} />
        </div>

        <button style={{ width: '100%', padding: '11px', background: '#22c55e', color: '#0a0f1a', fontSize: 13, fontWeight: 600, border: 'none', borderRadius: 6, cursor: 'pointer', marginBottom: 16 }}>
          Sign In
        </button>

        <p style={{ fontSize: 11.5, color: '#4b6377', textAlign: 'center' }}>
          Don't have an account?{' '}
          <Link href="/auth/register" style={{ color: '#22c55e', textDecoration: 'none' }}>Sign up free</Link>
        </p>

        <div style={{ marginTop: 24, padding: '12px', background: 'rgba(239,68,68,0.05)', border: '0.5px solid rgba(239,68,68,0.2)', borderRadius: 7, fontSize: 9.5, color: '#ef4444', textAlign: 'center', lineHeight: 1.5 }}>
          ⚠️ For entertainment purposes only. Please bet responsibly. 18+
        </div>
      </div>
    </div>
  )
}
