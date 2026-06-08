'use client'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'recruta-cookies-ok'

export function CookieBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      setOpen(localStorage.getItem(STORAGE_KEY) !== '1')
    } catch {
      setOpen(true)
    }
  }, [])

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // ignore private mode / blocked storage
    }
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <span>
        A gente usa cookies pra lembrar de você entre sessões e medir o que funciona. Nada mais que isso.{' '}
        <a href="#">Saiba mais.</a>
      </span>
      <div className="cookie-banner__btns">
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={dismiss}
          style={{ color: 'var(--linen)', borderColor: 'rgba(244,241,234,0.25)', background: 'transparent' }}
        >
          Recusar
        </button>
        <button type="button" className="btn btn-gold btn-sm" onClick={dismiss}>
          Tudo bem
        </button>
      </div>
    </div>
  )
}
