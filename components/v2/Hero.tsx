'use client'
/* Recruta AI v2 — Hero (comunidade em órbita, "sistema solar") · port de src-v2/hero.jsx */
import { useEffect, useState } from 'react'
import { WA_LINK } from '@/lib/constants'
import { ArrowIcon, WaIcon, type CSSVars } from './parts'

/* pool de perfis fictícios — grande variedade pra sensação de comunidade real */
const ORBIT_POOL: Array<{ n: string; r: string }> = [
  { n: 'Marcos', r: 'Soldador' },
  { n: 'Renata', r: 'Planejadora' },
  { n: 'Jonas', r: 'Caldeireiro' },
  { n: 'Ana', r: 'Instrumentista' },
  { n: 'Carlos', r: 'Coord. plataforma' },
  { n: 'Vânia', r: 'Téc. segurança' },
  { n: 'Diego', r: 'Eng. de PCP' },
  { n: 'Patrícia', r: 'Insp. qualidade' },
  { n: 'Rafael', r: 'Eletricista' },
  { n: 'Sandra', r: 'Analista custos' },
  { n: 'Luiz', r: 'Tubista' },
  { n: 'Fernanda', r: 'Operadora' },
  { n: 'Anderson', r: 'Andaimeiro' },
  { n: 'Juliana', r: 'Sup. de obras' },
  { n: 'Paulo', r: 'Mecânico' },
  { n: 'Cristiane', r: 'Encanadora' },
  { n: 'Edson', r: 'Pintor industrial' },
  { n: 'Márcia', r: 'Almoxarife' },
  { n: 'Wagner', r: 'Montador' },
  { n: 'Tatiane', r: 'Téc. elétrica' },
]

/* slots: anel (0=interno,1=médio,2=externo) + ângulo inicial */
const ORBIT_SLOTS = [
  { ring: 0, a: 30 },
  { ring: 0, a: 210 },
  { ring: 1, a: 100 },
  { ring: 1, a: 235 },
  { ring: 1, a: 340 },
  { ring: 2, a: 20 },
  { ring: 2, a: 150 },
  { ring: 2, a: 275 },
]
const ORBIT_RINGS = [
  { t: '70s', dir: 'normal' },
  { t: '110s', dir: 'reverse' },
  { t: '150s', dir: 'normal' },
]

function CommunityOrbit() {
  const [people, setPeople] = useState<number[]>(() => ORBIT_SLOTS.map((_, i) => i))
  useEffect(() => {
    const id = setInterval(() => {
      setPeople((prev) => {
        const slot = Math.floor(Math.random() * prev.length)
        const used = new Set(prev)
        const free = ORBIT_POOL.map((_, i) => i).filter((i) => !used.has(i))
        if (!free.length) return prev
        const next = prev.slice()
        next[slot] = free[Math.floor(Math.random() * free.length)]
        return next
      })
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="orbit-wrap">
      <div className="orbit" aria-hidden="true">
        {ORBIT_RINGS.map((ring, ri) => (
          <div
            key={ri}
            className={`orbit__ring orbit__ring--${ri}`}
            style={{ '--t': ring.t, '--dir': ring.dir } as CSSVars}
          >
            {ORBIT_SLOTS.map((s, si) => {
              if (s.ring !== ri) return null
              const p = ORBIT_POOL[people[si]]
              return (
                <div key={si} className="orbit__sat" style={{ '--a': s.a + 'deg' } as CSSVars}>
                  <div className={`orbit__chip ${ring.dir === 'reverse' ? 'orbit__chip--rev' : ''}`}>
                    <div className="orbit__face" key={p.n}>
                      <span className="orbit__av">{p.n[0]}</span>
                      <span className="orbit__name">{s.ring === 0 ? p.n : `${p.n} · ${p.r}`}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ))}
        <div className="orbit__center">
          <div className="comm__num">+3 mil</div>
          <div className="comm__label">
            profissionais
            <br />
            no nosso ecossistema
          </div>
          <div className="comm__grow">
            <span className="comm__grow-dot"></span> e crescendo
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroV2() {
  return (
    <section className="hero-v2" id="top">
      <div className="hero-v2__inner">
        <div className="hero-v2__text reveal">
          <h1 className="reveal-blur">
            Seu currículo não é fraco.
            <br />
            Ele é <em>invisível</em>.
          </h1>
          <p className="hero-v2__sub reveal-blur" style={{ '--rb-d': '140ms' } as CSSVars}>
            A Recruta AI mostra o que o algoritmo escondeu, reescreve sua história na língua que o mercado de óleo
            &amp; gás contrata e te coloca na frente das vagas certas. Todo dia.
          </p>
          <div className="hero-v2__ctas">
            <a href={WA_LINK('Ver meu score grátis')} target="_blank" rel="noopener" className="btn btn-emerald btn-lg">
              <span>Ver meu score grátis</span>
              <ArrowIcon />
            </a>
            <a href={WA_LINK('Falar com a gente')} target="_blank" rel="noopener" className="btn btn-textlink btn-lg">
              <WaIcon />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
          <div className="hero-v2__trust">
            <span>Sem cartão</span>
            <span className="dot">·</span>
            <span>
              <b>3 vagas</b> por dia no seu e-mail
            </span>
            <span className="dot">·</span>
            <span>
              score explicado em <b>6 eixos</b>
            </span>
          </div>
        </div>

        <div className="hero-v2__visual reveal">
          <CommunityOrbit />
        </div>
      </div>
    </section>
  )
}
