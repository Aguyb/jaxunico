'use client'
import { useEffect } from 'react'

export default function StudioPage() {
  useEffect(() => {
    // Redirect to Sanity's hosted studio
    // Replace YOUR_PROJECT_ID with your actual Sanity project ID
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
    window.location.href = `https://${projectId}.sanity.studio`
  }, [])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#1A1A1A',
      color: '#fff',
      fontFamily: 'Inter, sans-serif',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <div style={{ fontSize: '32px' }}>🎛️</div>
      <div style={{ fontSize: '18px', fontWeight: 700 }}>Redirecting to Jax Unico Studio...</div>
      <div style={{ fontSize: '14px', color: '#888' }}>
        If not redirected,{' '}
        <a
          href={`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'}.sanity.studio`}
          style={{ color: '#C6002B' }}
        >
          click here
        </a>
      </div>
    </div>
  )
}
