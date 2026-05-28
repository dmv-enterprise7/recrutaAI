'use client'
import { useState, useRef, useEffect } from 'react'

interface AudienceToggleProps {
  value: 'candidato' | 'recrutador'
  onChange: (v: 'candidato' | 'recrutador') => void
  dark?: boolean
}

export function AudienceToggle({ value, onChange, dark = false }: AudienceToggleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pill, setPill] = useState({ left: 4, width: 0 })

  useEffect(() => {
    if (!ref.current) return
    const active = ref.current.querySelector<HTMLElement>('.is-active')
    if (!active) return
    const rect = active.getBoundingClientRect()
    const parentRect = ref.current.getBoundingClientRect()
    setPill({ left: rect.left - parentRect.left, width: rect.width })
  }, [value])

  const style = dark
    ? { background: 'rgba(244,241,234,0.08)', border: '1px solid rgba(244,241,234,0.12)' }
    : {}

  return (
    <div ref={ref} className="aud-toggle" style={style} role="tablist" aria-label="Selecionar público">
      <span
        className="aud-toggle__pill"
        style={{
          left: pill.left,
          width: pill.width,
          background: dark ? 'var(--gold-300)' : 'var(--ink)',
        }}
      />
      <button
        role="tab"
        aria-selected={value === 'candidato'}
        className={`aud-toggle__btn ${value === 'candidato' ? 'is-active' : ''}`}
        onClick={() => onChange('candidato')}
        style={dark && value === 'candidato' ? { color: 'var(--emerald-900)' } : {}}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: value === 'candidato' ? 'currentColor' : 'var(--emerald-500)' }} />
        Sou candidato
      </button>
      <button
        role="tab"
        aria-selected={value === 'recrutador'}
        className={`aud-toggle__btn ${value === 'recrutador' ? 'is-active' : ''}`}
        onClick={() => onChange('recrutador')}
        style={dark && value === 'recrutador' ? { color: 'var(--emerald-900)' } : {}}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: value === 'recrutador' ? 'currentColor' : 'var(--gold-500)' }} />
        Sou recrutador
      </button>
    </div>
  )
}
