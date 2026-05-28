'use client'
import { useState } from 'react'
import { Logo } from '@/components/brand/Logo'
import { WA_LINK } from '@/lib/constants'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <a href="#top" aria-label="Recruta AI · início" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Logo width={140} />
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#demo">Antes e depois</a>
          <a href="#how">Como funciona</a>
          <a href="#planos">Planos</a>
          <a href="#cursos">Cursos</a>
          <a href="#recrutador">Recrutadores</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="nav-right">
          <a href={WA_LINK('Grupo VIP')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Falar no WhatsApp
          </a>
          <button
            className="nav-mobile-toggle"
            onClick={() => setOpen(o => !o)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16" strokeLinecap="round" />
                  <path d="M4 12h16" strokeLinecap="round" />
                  <path d="M4 17h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        <a href="#demo" onClick={() => setOpen(false)}>Antes e depois</a>
        <a href="#how" onClick={() => setOpen(false)}>Como funciona</a>
        <a href="#planos" onClick={() => setOpen(false)}>Planos</a>
        <a href="#cursos" onClick={() => setOpen(false)}>Cursos Pln&amp;Etc</a>
        <a href="#recrutador" onClick={() => setOpen(false)}>Recrutadores</a>
        <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <a href={WA_LINK('Grupo VIP')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
