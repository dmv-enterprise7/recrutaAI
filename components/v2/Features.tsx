'use client'
/* Recruta AI v2 — Seção 04 · O QUE VOCÊ RECEBE
   Layout "1 demo forte + ícones": tela do score limpa e estática como herói,
   + 4 cards de ícone simples pro resto. (Substitui o bento de mini-telas.) */
import { Mic, PenLine, Radar, TrendingUp, type LucideIcon } from 'lucide-react'
import { WA_LINK } from '@/lib/constants'
import { ArrowIcon, SecHead } from './parts'

/* ---- Herói: painel do score, limpo e PARADO (sem auto-scroll) ---- */
const EIXOS: Array<{ nome: string; val: string; pct: number; tone: 'ok' | 'warn' | 'bad' }> = [
  { nome: 'Certificações', val: '0/2', pct: 8, tone: 'bad' },
  { nome: 'Experiência', val: '22/25', pct: 88, tone: 'ok' },
  { nome: 'Hard skills', val: '22/28', pct: 79, tone: 'ok' },
  { nome: 'Idiomas', val: '5/10', pct: 50, tone: 'warn' },
]

function ScoreHero() {
  return (
    <div className="score-panel" aria-hidden="true">
      <div className="score-panel__top">
        <div className="score-panel__label">Seu raio-x · Planejamento / PCM</div>
        <div className="score-panel__num">
          62<span>/100</span>
          <em className="score-panel__tag">melhorar</em>
        </div>
      </div>
      <p className="score-panel__diag">
        Perfil forte em planejamento (cronograma, Curva S, P6), mas perde pontos por não evidenciar CREA e as
        certificações do ambiente offshore.
      </p>
      <div className="score-panel__eixos">
        {EIXOS.map((e) => (
          <div className="score-eixo" key={e.nome}>
            <span className="score-eixo__l">{e.nome}</span>
            <span className="score-eixo__track">
              <span className={`score-eixo__fill score-eixo__fill--${e.tone}`} style={{ width: `${e.pct}%` }} />
            </span>
            <span className="score-eixo__v">{e.val}</span>
          </div>
        ))}
      </div>
      <div className="score-panel__action">
        <span className="score-panel__action-t">Próxima ação: evidenciar CREA no topo do currículo</span>
        <span className="score-panel__action-pts">+16 pts</span>
      </div>
    </div>
  )
}

/* ---- 4 cards de ícone simples ---- */
interface Card {
  icon: LucideIcon
  title: string
  desc: string
}

const CARDS: Card[] = [
  {
    icon: PenLine,
    title: 'Reescrito na língua do mercado',
    desc: 'A IA traduz sua história pro jeito que o óleo & gás contrata. Nada inventado — você aprova cada linha.',
  },
  {
    icon: Mic,
    title: 'Treine a entrevista antes',
    desc: 'Você ensaia por voz com o Axcel e chega preparado, mesmo antes de te chamarem pra vaga.',
  },
  {
    icon: Radar,
    title: 'Vagas do seu setor, garimpadas',
    desc: 'A gente caça vaga específica de óleo & gás em várias fontes e põe no seu radar. Você para de procurar no escuro.',
  },
  {
    icon: TrendingUp,
    title: 'Reposicionado, você aparece na frente',
    desc: 'Com o perfil forte, o jogo vira: o recrutador te encontra e te convida pro processo, mesmo sem você se inscrever.',
  },
]

export function FeaturesV2() {
  return (
    <section className="section section--paper" id="recebe">
      <div className="container">
        <SecHead
          eyebrow="04 · O que você recebe"
          title={
            <>
              A gente te coloca <em>na frente</em> do mercado.
            </>
          }
          sub="Não é uma lista de vagas. É o preparo que faz você disputar de igual pra igual, dentro ou fora do nosso radar."
        />

        <div className="recebe reveal">
          <div className="recebe-hero">
            <div className="recebe-hero__text">
              <span className="recebe-hero__idx">Tudo começa aqui</span>
              <h3 className="recebe-hero__title">Saiba por que te barram</h3>
              <p className="recebe-hero__desc">
                Em 2 minutos, seu score nos 6 eixos que a triagem olha — com o que derruba e o que fazer pra subir.
                Sem caixa-preta.
              </p>
              <a href={WA_LINK('Ver meu score')} target="_blank" rel="noopener" className="btn btn-emerald btn-lg">
                <span>Ver meu score grátis</span>
                <ArrowIcon />
              </a>
            </div>
            <div className="recebe-hero__visual">
              <ScoreHero />
            </div>
          </div>

          <div className="recebe-cards">
            {CARDS.map((c) => {
              const Icon = c.icon
              return (
                <div className="rcard" key={c.title}>
                  <div className="rcard__ic">
                    <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <div className="rcard__title">{c.title}</div>
                  <p className="rcard__desc">{c.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
