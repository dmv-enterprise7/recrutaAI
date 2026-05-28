'use client'
import { useState } from 'react'

export function CookieBanner() {
  const [open, setOpen] = useState(() => {
    try {
      return localStorage.getItem('recruta-cookies-ok') !== '1'
    } catch {
      return true
    }
  })

  if (!open) return null

  const accept = () => {
    try { localStorage.setItem('recruta-cookies-ok', '1') } catch {}
    setOpen(false)
  }

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <span>
        A gente usa cookies pra lembrar de você entre sessões e medir o que funciona. Nada mais que isso.{' '}
        <a href="#">Saiba mais.</a>
      </span>
      <div className="cookie-banner__btns">
        <button
          className="btn btn-secondary btn-sm"
          onClick={accept}
          style={{ color: 'var(--linen)', borderColor: 'rgba(244,241,234,0.25)', background: 'transparent' }}
        >
          Recusar
        </button>
        <button className="btn btn-gold btn-sm" onClick={accept}>
          Tudo bem
        </button>
      </div>
    </div>
  )
}
