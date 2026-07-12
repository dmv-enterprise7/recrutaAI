'use client'
/* Recruta AI v2 — Seção 03 · A JORNADA (linha conectiva animada + números com parallax) · port de src-v2/journey.jsx */
import { useEffect, useRef } from 'react'
import { SecHead, useInView } from './parts'

interface Step {
  num: string
  title: string
  desc: string
  tag: string | null
  mentor?: boolean
}

const JOURNEY_STEPS: Step[] = [
  {
    num: '01',
    title: 'A gente descobre onde você trava.',
    desc: 'Um diagnóstico gratuito mostra, ponto a ponto, o que está te barrando na frente do filtro. É o raio-x da sua carreira, não uma nota jogada na sua cara.',
    tag: null,
  },
  {
    num: '02',
    title: 'Você treina e se posiciona com o Axcel.',
    desc: 'O Axcel é o método do Wellington virado mentor de IA: te ajuda a falar a língua de quem contrata, arruma seu LinkedIn e te treina em entrevista simulada por voz.',
    tag: 'Mentoria 24h · o método do Wellington',
    mentor: true,
  },
  {
    num: '03',
    title: 'Você aparece na frente de quem contrata.',
    desc: 'Reposicionado e falando a língua do mercado, seu perfil sobe nos processos seletivos. Você deixa de competir no escuro e passa a disputar lá em cima, de igual pra igual.',
    tag: null,
  },
]

function JourneyStep({ s }: { s: Step }) {
  const [ref, seen] = useInView({ threshold: 0.45 })
  const numRef = useRef<HTMLDivElement | null>(null)

  // parallax leve no número gigante
  useEffect(() => {
    const el = numRef.current
    if (!el) return
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    let raf: number | null = null
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        const r = el.getBoundingClientRect()
        const mid = window.innerHeight / 2
        const off = (r.top + r.height / 2 - mid) / mid // -1..1
        el.style.transform = `translateY(${(-off * 26).toFixed(1)}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={ref} className={`jrn__step ${s.mentor ? 'jrn__step--mentor' : ''} ${seen ? 'is-seen' : ''}`}>
      <div className="jrn__marker" aria-hidden="true">
        <span className="jrn__node"></span>
      </div>
      <div className="jrn__num-wrap">
        <div className="jrn__num" ref={numRef} aria-hidden="true">
          {s.num}
        </div>
      </div>
      <div className="jrn__body">
        <h3 className="jrn__title">{s.title}</h3>
        <p className="jrn__desc">{s.desc}</p>
        {s.tag && <div className="jrn__tag">{s.tag}</div>}
      </div>
    </div>
  )
}

export function JourneyV2() {
  const [lineRef, lineSeen] = useInView({ threshold: 0.15, rootMargin: '0px 0px -25% 0px' })
  return (
    <section className="section" id="jornada">
      <div className="container">
        <SecHead
          eyebrow="03 · A jornada"
          title={
            <>
              Não é uma ferramenta. É um <em>caminho</em> com você.
            </>
          }
          sub="Três movimentos, do travamento à recolocação. Você não faz sozinho e não fica no escuro em nenhum deles."
        />
        <div ref={lineRef} className={`jrn ${lineSeen ? 'jrn--draw' : ''}`}>
          <div className="jrn__spine" aria-hidden="true">
            <span className="jrn__spine-fill"></span>
          </div>
          {JOURNEY_STEPS.map((s) => (
            <JourneyStep s={s} key={s.num} />
          ))}
        </div>
      </div>
    </section>
  )
}
