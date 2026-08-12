'use client'
/* Recruta AI · /recrutadores — header próprio, mesmo padrão visual da home. */
import { useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/brand/Logo'
import { LOGIN_URL } from '@/lib/constants'

const LINKS: Array<[string, string]> = [
  ['#pilha', 'O limite'],
  ['#virada', 'A virada'],
  ['#recebe', 'O que recebe'],
  ['#perguntas', 'Perguntas'],
]

export function RecruiterHeader() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <header className="rl-hdr">
        <div className="rl-wrap rl-hdr__in">
          <a href="#topo" aria-label="Recruta AI, ir para o topo" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Logo width={140} />
          </a>
          <nav className="rl-nav" aria-label="Seções desta página">
            {LINKS.map(([href, label]) => (
              <a key={href} className="rl-navlink" href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="rl-hdr__acts">
            <Link className="rl-lnk-cand" href="/">
              Sou candidato
            </Link>
            <a className="rl-lnk-entrar" href={LOGIN_URL} target="_blank" rel="noopener">
              Entrar
            </a>
            <a className="rl-btn rl-btn--pri rl-btn--sm" href="#acesso">
              Pedir acesso
            </a>
          </div>
          <button
            className="rl-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="rl-mnav"
            type="button"
          >
            <span />
          </button>
        </div>
      </header>

      <div className={`rl-mnav ${open ? 'rl-open' : ''}`} id="rl-mnav">
        <ul>
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={close}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/" onClick={close}>
              Sou candidato
            </Link>
          </li>
        </ul>
        <div className="rl-acts">
          <a className="rl-lnk-entrar" href={LOGIN_URL} target="_blank" rel="noopener" onClick={close}>
            Entrar
          </a>
          <a className="rl-btn rl-btn--pri" href="#acesso" onClick={close}>
            Pedir acesso
          </a>
        </div>
      </div>
    </>
  )
}
