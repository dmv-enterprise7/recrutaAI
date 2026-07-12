'use client'
/* Recruta AI v2 — Seção 04 · O QUE VOCÊ RECEBE
   Showcase interativo: lista compacta dos 5 recursos + card ativo grande
   (explicação a fundo + demo limpa). Clicar troca o ativo — encolhe um,
   aumenta outro. Demos no estilo calmo do painel de score. */
import { useState, type ReactNode } from 'react'
import { Mic, PenLine, Radar, ScanLine, TrendingUp, type LucideIcon } from 'lucide-react'
import { WA_LINK } from '@/lib/constants'
import { ArrowIcon, SecHead } from './parts'

/* ============================ DEMOS (limpas, estáticas) ============================ */

const EIXOS: Array<{ nome: string; val: string; pct: number; tone: 'ok' | 'warn' | 'bad' }> = [
  { nome: 'Certificações', val: '0/2', pct: 8, tone: 'bad' },
  { nome: 'Experiência', val: '22/25', pct: 88, tone: 'ok' },
  { nome: 'Hard skills', val: '22/28', pct: 79, tone: 'ok' },
  { nome: 'Idiomas', val: '5/10', pct: 50, tone: 'warn' },
]

function ScoreDemo() {
  return (
    <div className="demo score-panel" aria-hidden="true">
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

const REWRITE_BULLETS = [
  'Assumi o planejamento e controle dos projetos offshore da unidade.',
  'Mantive cronogramas e Curva S com atualização contínua.',
  'Consolidei o avanço físico-financeiro pra apoiar decisões de prazo.',
]

function RewriteDemo() {
  return (
    <div className="demo demo-rw" aria-hidden="true">
      <div className="demo-rw__head">
        <span className="demo-rw__role">Coordenador de Planejamento</span>
        <span className="demo-rw__ok">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          verificado
        </span>
      </div>
      <ul className="demo-rw__list">
        {REWRITE_BULLETS.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="demo-rw__foot">
        <span>otimizado pra ATS</span>
        <span className="demo-rw__score">94</span>
      </div>
    </div>
  )
}

function InterviewDemo() {
  return (
    <div className="demo demo-iv" aria-hidden="true">
      <div className="demo-iv__orb">
        <span className="demo-iv__ring demo-iv__ring--1" />
        <span className="demo-iv__ring demo-iv__ring--2" />
        <span className="demo-iv__core">Axcel</span>
      </div>
      <div className="demo-iv__q">“Como você lida com replanejamento sob pressão de prazo?”</div>
      <div className="demo-iv__bar">
        <span className="demo-iv__wave">
          {Array.from({ length: 22 }).map((_, i) => (
            <i key={i} style={{ height: `${20 + ((i * 53) % 70)}%` }} />
          ))}
        </span>
        <span className="demo-iv__time">00:14</span>
      </div>
    </div>
  )
}

const VAGAS = [
  { role: 'Técnico de Planejamento III', local: 'Niterói/RJ', match: 92 },
  { role: 'Analista PCP Sênior', local: 'Macaé/RJ', match: 88 },
  { role: 'Coordenador de Planejamento', local: 'Vitória/ES', match: 81 },
]

function VagasDemo() {
  return (
    <div className="demo demo-vg" aria-hidden="true">
      <div className="demo-vg__crumb">No seu e-mail · filtradas pro seu perfil</div>
      {VAGAS.map((v) => (
        <div className="demo-vg__row" key={v.role}>
          <div className="demo-vg__id">
            <span className="demo-vg__role">{v.role}</span>
            <span className="demo-vg__local">{v.local}</span>
          </div>
          <span className="demo-vg__match">{v.match}%</span>
        </div>
      ))}
    </div>
  )
}

function FrenteDemo() {
  return (
    <div className="demo demo-fr" aria-hidden="true">
      <div className="demo-fr__crumb">Banco de talentos · o recrutador te achou</div>
      <div className="demo-fr__card">
        <div className="demo-fr__id">
          <span className="demo-fr__name">Você · Planejador Sênior</span>
          <span className="demo-fr__sub">Primavera P6 · Curva S · Macaé/RJ</span>
        </div>
        <div className="demo-fr__ring">
          96<span>match</span>
        </div>
      </div>
      <div className="demo-fr__invite">
        <span className="demo-fr__dot" /> “Vi seu perfil e quero te chamar pro processo.” — recrutador · UTC
      </div>
    </div>
  )
}

/* ============================ FEATURES ============================ */

interface Feature {
  icon: LucideIcon
  title: string
  teaser: string
  desc: ReactNode
  demo: ReactNode
}

const FEATURES: Feature[] = [
  {
    icon: ScanLine,
    title: 'Saiba por que te barram',
    teaser: 'Seu score nos 6 eixos, explicado',
    desc: (
      <>
        Você sobe seu currículo e em 2 minutos recebe uma nota de 0 a 100 nos <b>6 eixos que a triagem realmente olha</b>.
        Cada eixo vem com o que te derruba e a <b>ação exata pra subir</b> — com quantos pontos você ganha. Sem
        caixa-preta.
      </>
    ),
    demo: <ScoreDemo />,
  },
  {
    icon: PenLine,
    title: 'Reescrito na língua do mercado',
    teaser: 'A IA fala como quem contrata',
    desc: (
      <>
        A IA pega a sua história real e reescreve na linguagem que o <b>óleo &amp; gás contrata</b>: os verbos certos, as
        métricas de PCM, as palavras-chave que o ATS procura. <b>Nada é inventado</b> — cada linha vem da sua experiência
        e você aprova antes de sair.
      </>
    ),
    demo: <RewriteDemo />,
  },
  {
    icon: Mic,
    title: 'Treine a entrevista antes',
    teaser: 'Ensaie por voz com o Axcel',
    desc: (
      <>
        Antes mesmo de te chamarem, você <b>ensaia a entrevista por voz</b> com o Axcel. Ele puxa perguntas reais da
        vaga, ouve sua resposta e te devolve o que soou bem e o que ajustar — no seu tempo, quantas vezes precisar.
      </>
    ),
    demo: <InterviewDemo />,
  },
  {
    icon: Radar,
    title: 'Vagas do seu setor, garimpadas',
    teaser: 'Óleo & gás, no seu radar',
    desc: (
      <>
        A gente garimpa vagas específicas de óleo &amp; gás em várias fontes e cruza com o <b>seu perfil e a sua
        região</b>. As que combinam chegam pra você — e as parecidas também. Você para de rodar site atrás de site no
        escuro.
      </>
    ),
    demo: <VagasDemo />,
  },
  {
    icon: TrendingUp,
    title: 'Reposicionado, você aparece na frente',
    teaser: 'O recrutador vem até você',
    desc: (
      <>
        Quando seu perfil está forte e alinhado, o jogo inverte: em vez de você caçar vaga, o <b>recrutador te encontra</b>{' '}
        no banco de talentos e te convida pro processo — mesmo sem você ter se inscrito.
      </>
    ),
    demo: <FrenteDemo />,
  },
]

export function FeaturesV2() {
  const [active, setActive] = useState(0)
  const f = FEATURES[active]

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
          sub="Clique em cada etapa pra ver como funciona. Não é uma lista de vagas — é o preparo que faz você disputar de igual pra igual."
        />

        <div className="showcase reveal">
          <div className="showcase__list" role="tablist" aria-label="Recursos da Recruta AI">
            {FEATURES.map((item, i) => {
              const Icon = item.icon
              const on = i === active
              return (
                <button
                  key={item.title}
                  role="tab"
                  aria-selected={on}
                  className={`sc-item ${on ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className="sc-item__ic">
                    <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="sc-item__txt">
                    <span className="sc-item__title">{item.title}</span>
                    <span className="sc-item__teaser">{item.teaser}</span>
                  </span>
                  <span className="sc-item__chevron" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </button>
              )
            })}
          </div>

          <div className="showcase__panel" role="tabpanel">
            <div className="sc-panel" key={active}>
              <div className="sc-panel__demo">{f.demo}</div>
              <div className="sc-panel__body">
                <h3 className="sc-panel__title">{f.title}</h3>
                <p className="sc-panel__desc">{f.desc}</p>
                <a href={WA_LINK('Ver meu score')} target="_blank" rel="noopener" className="btn btn-emerald btn-lg">
                  <span>Ver meu score grátis</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
