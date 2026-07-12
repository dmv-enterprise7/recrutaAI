'use client'
/* Recruta AI v2 — Navbar (port de src-v2/navbar.jsx) */
import { useState } from 'react'
import { Logo } from '@/components/brand/Logo'
import { CADASTRO_URL, LOGIN_URL } from '@/lib/constants'

const LINKS: Array<[string, string]> = [
  ['#filtro', 'O filtro invisível'],
  ['#jornada', 'A jornada'],
  ['#wellington', 'Quem te guia'],
  ['#planos', 'Planos'],
]

export function NavbarV2() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <a href="#top" aria-label="Recruta AI · início" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Logo width={140} />
        </a>
        <nav className="nav-links" aria-label="Navegação principal">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <a href="#recrutador" className="nav-rec">
            Sou recrutador
          </a>
          <a href={LOGIN_URL} className="nav-login">
            Entrar
          </a>
          <a href={CADASTRO_URL} className="btn btn-primary">
            Criar conta grátis
          </a>
          <button
            className="nav-mobile-toggle"
            onClick={() => setOpen((o) => !o)}
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
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#recrutador" onClick={() => setOpen(false)}>
          Sou recrutador
        </a>
        <a href={LOGIN_URL} onClick={() => setOpen(false)}>
          Entrar
        </a>
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <a href={CADASTRO_URL} className="btn btn-primary" onClick={() => setOpen(false)}>
            Criar conta grátis
          </a>
        </div>
      </div>
    </header>
  )
}
