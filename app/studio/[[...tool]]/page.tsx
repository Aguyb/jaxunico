'use client'
import { useEffect } from 'react'

const PROJECT_ID = '24ezss24'
const STUDIO_URL = `https://${PROJECT_ID}.sanity.studio`

export default function StudioPage() {
  useEffect(() => {
    window.location.href = STUDIO_URL
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
      <div style={{ fontSize: '40px' }}>🎛️</div>
      <div style={{ fontSize: '20px', fontWeight: 700 }}>Abriendo Jax Unico Studio...</div>
      <div style={{ fontSize: '14px', color: '#888' }}>
        Si no abre automáticamente,{' '}
        <a href={STUDIO_URL} style={{ color: '#C6002B', fontWeight: 700 }}>
          haz clic aquí
        </a>
      </div>
    </div>
  )
}
