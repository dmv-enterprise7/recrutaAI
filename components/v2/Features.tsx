'use client'
/* Recruta AI v2 — Seção 04 · O QUE VOCÊ RECEBE (bento com mini-telas do produto) · port de src-v2/value.jsx */
import { useEffect, useRef, useState } from 'react'
import { WA_LINK } from '@/lib/constants'
import { Placeholder, SecHead, useInView, type CSSVars } from './parts'

interface CatItem {
  id: string
  title: string
  desc: string
  big?: boolean
  glow?: boolean
  full?: boolean
  dark?: boolean
  anim?: 'demo' | 'cvrewrite' | 'vagas' | 'recruiter'
  shot: string
}

const CAT_ITEMS: CatItem[] = [
  {
    id: 'feat-score',
    title: 'Saiba por que te barram',
    desc: 'Do upload ao resultado: score, os 6 eixos que te derrubam, a reescrita e a sua aprovação. Tudo à vista.',
    big: true,
    glow: true,
    anim: 'demo',
    shot: 'PRINT · tela do score com os 6 eixos',
  },
  {
    id: 'feat-cv',
    title: 'Reescrito na língua do mercado',
    desc: 'A IA traduz sua história pro jeito que o óleo & gás contrata. Nada inventado, você aprova.',
    anim: 'cvrewrite',
    shot: 'PRINT · antes/depois do currículo',
  },
  {
    id: 'feat-entrevista',
    title: 'Treine a entrevista antes',
    desc: 'Você se prepara pra entrevista de uma vaga antes mesmo de te chamarem pra ela.',
    dark: true,
    shot: 'Entrevista por voz (Axcel)',
  },
  {
    id: 'feat-vagas',
    title: 'Vagas do seu setor, garimpadas',
    desc: 'A gente caça vaga específica de óleo & gás, de várias fontes, e põe no seu radar. Você para de procurar no escuro.',
    anim: 'vagas',
    shot: 'PRINT · radar de vagas do setor',
  },
  {
    id: 'feat-frente',
    title: 'Reposicionado, você aparece na frente',
    desc: 'Com um perfil forte e alinhado, o jogo vira: o recrutador te encontra e te convida pro processo, mesmo sem você ter se inscrito.',
    full: true,
    anim: 'recruiter',
    shot: 'PRINT · perfil no banco de talentos',
  },
]

/* Animação coded do "Reescrita Axcel" (recria o produto, suave + loop) */
const REWRITE_BULLETS = [
  'Assumi o planejamento e controle dos projetos offshore da unidade.',
  'Elaborei e mantive cronogramas e Curva S com atualização contínua.',
  'Consolidei o avanço físico e financeiro pra apoiar decisões de prazo.',
  'Reportei à diretoria e ao cliente com rastreabilidade dos dados.',
]

function CvRewriteAnim() {
  const [ref, seen] = useInView({ threshold: 0.3 })
  const [on, setOn] = useState(false)
  useEffect(() => {
    if (!seen) return
    let alive = true
    let timer: ReturnType<typeof setTimeout>
    const run = (state: boolean) => {
      if (!alive) return
      setOn(state)
      timer = setTimeout(() => run(!state), state ? 5000 : 720)
    }
    run(true)
    return () => {
      alive = false
      clearTimeout(timer)
    }
  }, [seen])
  return (
    <div className={`cvr ${on ? 'is-on' : ''}`} ref={ref} aria-hidden="true">
      <div className="cvr__bar">
        <span className="cvr__dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="cvr__tab">Reescrita Axcel</span>
      </div>
      <div className="cvr__head">
        <span className="cvr__role">Coordenador de Planejamento</span>
        <span className="cvr__ok">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          verificado
        </span>
      </div>
      <ul className="cvr__list">
        {REWRITE_BULLETS.map((b, i) => (
          <li key={i} style={{ '--i': i } as CSSVars}>
            <span className="cvr__mk"></span>
            {b}
          </li>
        ))}
      </ul>
      <div className="cvr__foot">
        <span className="cvr__scan"></span>
        <span className="cvr__foot-l">otimizado pra ATS</span>
        <span className="cvr__score">94</span>
      </div>
    </div>
  )
}

/* ===== Análise real do CV, recriada fiel + auto-scroll (preview do produto) ===== */
const AN_ATS: Array<[string, number]> = [
  ['Workday', 66],
  ['Greenhouse', 59],
  ['Lever', 55],
  ['Gupy', 53],
]
const AN_EIXOS: Array<[string, string, number, string]> = [
  ['Certificações', '0/2', 6, 'bad'],
  ['Hard skills', '22/28', 79, ''],
  ['Experiência', '22/25', 88, ''],
  ['Idiomas', '5/10', 50, 'warn'],
  ['Soft skills', '2/5', 40, 'warn'],
]
const AN_ACOES: Array<[string, string]> = [
  ['Regularizar e evidenciar o CREA (UF, nº, status) e posicionar no topo do currículo, abaixo do nome.', '+16 pts'],
  [
    'Reescrever as experiências com métricas de PCM: baseline, caminho crítico, SPI/CPI, % avanço, R$ de contratos, nº de frentes.',
    '+12 pts',
  ],
  ['Otimizar o CV para ATS: sem foto/ícones/barras, seções padronizadas e palavras-chave (PCM, EAP/WBS, físico-financeiro).', '+9 pts'],
]
const AN_PROB: Array<[string, string, string]> = [
  ['Certificações', 'alta', 'Não há menção a CREA (número/UF/ativo) apesar de formação em Engenharia; pode eliminar em triagem.'],
  ['Certificações', 'média', 'Certificações de segurança e acesso a obra/offshore (NR-10, NR-35, CBSP/HUET) não aparecem.'],
  ['Idiomas', 'baixa', 'Inglês descrito como intermediário, mas sem evidências (datasheets, reuniões, nível CEFR).'],
  ['ATS-readability', 'média', 'Elementos pouco ATS-friendly (foto, ícones, barras de nível) que atrapalham o parsing.'],
]
const AN_SUG = [
  'Adicionar seção “Registro Profissional” com CREA (UF, nº, status) e, se aplicável, experiência com ART.',
  'Listar cursos com nome, carga horária, instituição e ano (Primavera P6, Excel Avançado, NR-10, NR-35).',
  'Detalhar hard skills de PCM: EAP/WBS, caminho crítico, baseline, replanejamento, medição, SPI/CPI.',
  'Quantificar escopo e impacto: tamanho do projeto (R$), nº de frentes, melhoria de indicadores, report.',
  'Ajustar formatação para ATS: remover foto/ícones, trocar barras por texto, títulos claros.',
]
const AN_FORTES = [
  'Experiência contínua e progressiva em planejamento (Auxiliar → Analista Pleno → Coordenador) por ~15+ anos.',
  'Domínio declarado de ferramentas-chave: Primavera P6, MS Project, Excel, Curva S.',
  'Vivência em acompanhamento físico-financeiro, relatórios gerenciais e interface com cliente/diretoria.',
]

function AnalysisScroll() {
  const [ref, seen] = useInView({ threshold: 0.22 })
  const vpRef = useRef<HTMLDivElement | null>(null)
  const pgRef = useRef<HTMLDivElement | null>(null)
  const pausedRef = useRef(false)
  const [hover, setHover] = useState(false)
  useEffect(() => {
    if (!seen) return
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    let alive = true
    const ease = (x: number) => -(Math.cos(Math.PI * x) - 1) / 2 // easeInOutSine (calmo)
    const HOLD_TOP = 2600
    const SCROLL = 24000
    const HOLD_BOT = 3600
    const TOTAL = HOLD_TOP + SCROLL + HOLD_BOT
    let elapsed = 0
    let last = typeof performance !== 'undefined' ? performance.now() : Date.now()
    const id = setInterval(() => {
      if (!alive) return
      const vp = vpRef.current
      const pg = pgRef.current
      if (!vp || !pg) return
      const now = typeof performance !== 'undefined' ? performance.now() : Date.now()
      const dt = now - last
      last = now
      if (!pausedRef.current) elapsed = (elapsed + dt) % TOTAL
      const max = Math.max(0, pg.scrollHeight - vp.clientHeight)
      const e = elapsed
      let y: number
      if (e < HOLD_TOP) y = 0
      else if (e < HOLD_TOP + SCROLL) y = max * ease((e - HOLD_TOP) / SCROLL)
      else y = max
      pg.style.transform = `translateY(${-y}px)`
    }, 33)
    return () => {
      alive = false
      clearInterval(id)
    }
  }, [seen])

  return (
    <div
      className="an"
      ref={ref}
      aria-hidden="true"
      onMouseEnter={() => {
        pausedRef.current = true
        setHover(true)
      }}
      onMouseLeave={() => {
        pausedRef.current = false
        setHover(false)
      }}
    >
      <div className={`an__hint ${hover ? 'is-paused' : ''}`}>{hover ? '❚❚ pausado' : 'passe o mouse para pausar'}</div>
      <div className="an__bar">
        <span className="cvr__dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="an__url">
          recrutaai.ia.br<b>/analise</b>
        </span>
        <span className="an__live">
          <span className="an__livedot"></span>ao vivo
        </span>
      </div>
      <div className="an__vp" ref={vpRef}>
        <div className="an__page" ref={pgRef}>
          <div className="an__crumb">CURRÍCULO · ANÁLISE</div>
          <div className="an__title">Análise do currículo</div>

          <div className="an-hero">
            <div className="an-score">
              <span className="an-score__n">62</span>
              <span className="an-score__d">/100</span>
              <span className="an-score__tag">melhorar</span>
            </div>
            <p className="an-diag">
              Perfil muito aderente a Planejamento/PCM em obras e projetos (cronograma, Curva S, avanço
              físico-financeiro, P6/MS Project) com ~15+ anos. Perde pontos por não evidenciar CREA/registro, nem
              certificações/NRs do ambiente offshore.
            </p>
          </div>

          <div className="an-sec">COMPORTAMENTO ESTIMADO POR ATS</div>
          <div className="an-ats">
            {AN_ATS.map(([n, v]) => (
              <div className="an-ats__row" key={n}>
                <span className="an-ats__l">{n}</span>
                <span className="an-ats__track">
                  <span className="an-ats__fill" style={{ width: v + '%' }}></span>
                </span>
                <span className="an-ats__v">{v}%</span>
              </div>
            ))}
          </div>

          <div className="an-sec">HARD GATES · REQUISITOS ELIMINATÓRIOS</div>
          <div className="an-gate">
            <div className="an-gate__h">
              <span className="an-gate__flag">Reprovado (1)</span>
            </div>
            <div className="an-gate__t">CREA ativo / evidência de registro profissional quando exigido pela vaga</div>
            <div className="an-gate__a">
              <b>Ação:</b> incluir no cabeçalho “CREA UF nº XXXXXX (ativo)”. Se não tiver, regularizar e mencionar
              experiência com ART.
            </div>
          </div>

          <div className="an-sec">RESUMO POR EIXO</div>
          <div className="an-eixos">
            {AN_EIXOS.map(([n, val, w, mod]) => (
              <div className="an-eixo" key={n}>
                <span className="an-eixo__l">{n}</span>
                <span className="an-eixo__track">
                  <span className={`an-eixo__fill an-eixo__fill--${mod || 'ok'}`} style={{ width: w + '%' }}></span>
                </span>
                <span className="an-eixo__v">{val}</span>
              </div>
            ))}
          </div>

          <div className="an-sec">AÇÕES PRIORIZADAS PARA SUBIR SEU SCORE</div>
          <div className="an-acoes">
            {AN_ACOES.map(([t, pts], i) => (
              <div className="an-acao" key={i}>
                <span className="an-acao__n">{i + 1}</span>
                <span className="an-acao__t">{t}</span>
                <span className="an-acao__pts">{pts}</span>
              </div>
            ))}
          </div>

          <div className="an-sec an-sec--warn">PROBLEMAS ({AN_PROB.length})</div>
          <div className="an-list">
            {AN_PROB.map(([tag, sev, t], i) => (
              <div className="an-item" key={i}>
                <span className="an-item__top">
                  <span className="an-chip">{tag}</span>
                  <span className={`an-sev an-sev--${sev}`}>{sev}</span>
                </span>
                <span className="an-item__t">{t}</span>
              </div>
            ))}
          </div>

          <div className="an-sec an-sec--sug">SUGESTÕES ({AN_SUG.length})</div>
          <div className="an-list">
            {AN_SUG.map((t, i) => (
              <div className="an-item an-item--sug" key={i}>
                <span className="an-item__mk">+</span>
                <span className="an-item__t">{t}</span>
              </div>
            ))}
          </div>

          <div className="an-sec an-sec--ok">PONTOS FORTES ({AN_FORTES.length})</div>
          <div className="an-list">
            {AN_FORTES.map((t, i) => (
              <div className="an-item an-item--ok" key={i}>
                <span className="an-item__star">★</span>
                <span className="an-item__t">{t}</span>
              </div>
            ))}
          </div>

          <div className="an-foot">
            Como funciona nossa análise →<span>Voltar para meu currículo</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* anel de progresso (match / currículo) */
function Ring({ v, tone }: { v: number; tone: string }) {
  const R = 15
  const C = 2 * Math.PI * R
  const off = C * (1 - v / 100)
  return (
    <span className={`ring ring--${tone}`}>
      <svg viewBox="0 0 36 36" width="42" height="42">
        <circle cx="18" cy="18" r={R} className="ring__bg"></circle>
        <circle
          cx="18"
          cy="18"
          r={R}
          className="ring__fg"
          style={{ strokeDasharray: C, strokeDashoffset: off }}
          transform="rotate(-90 18 18)"
        ></circle>
      </svg>
      <b>{v}</b>
    </span>
  )
}

/* Feat 6 · tela do recrutador "Compatíveis (match-IA)" — nomes fictícios (LGPD) */
const RMATCH: Array<[string, string, number, number, string[]]> = [
  ['Sérgio Nunes', 'Técnico em Planejamento de Manutenção', 98, 71, ['MS Project', 'Planejamento de manutenção', 'SAP PM']],
  ['Adriano Peixoto', 'Delineador de Pintura Offshore', 97, 63, ['MS Project', 'Programação de serviços']],
  ['Marcelo Farias', 'Coordenador de Planejamento', 96, 62, ['Primavera P6', 'Curva S', 'Físico-financeiro']],
  ['Beatriz Rangel', 'Analista de Planejamento / PMO', 95, 81, ['MS Project', 'EAP', 'Cronograma integrado']],
  ['Otávio Belmonte', 'Supervisor de Comissionamento', 93, 68, ['Comissionamento', 'Sistemas', 'Precomm']],
]

function RecruiterMatch() {
  const [ref, seen] = useInView({ threshold: 0.25 })
  const [active, setActive] = useState(0)
  useEffect(() => {
    if (!seen) return
    let i = 0
    let alive = true
    const id = setInterval(() => {
      if (!alive) return
      i = (i + 1) % 3
      setActive(i)
    }, 2200)
    return () => {
      alive = false
      clearInterval(id)
    }
  }, [seen])
  return (
    <div className={`an an--static ${seen ? 'is-seen' : ''}`} ref={ref} aria-hidden="true">
      <div className="an__bar">
        <span className="cvr__dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="an__url">
          recrutaai.ia.br<b>/recrutador</b>
        </span>
        <span className="an__live">
          <span className="an__livedot"></span>match-IA
        </span>
      </div>
      <div className="an__vp">
        <div className="an__page an__page--static">
          <div className="an__crumb">VAGA · PLANEJADOR PCM SÊNIOR</div>
          <div className="an__title" style={{ fontSize: '17px', margin: '3px 0 4px' }}>
            Compatíveis (match-IA)
          </div>
          <p className="rm-sub">
            Perfis alinhados que ainda não se candidataram. O recrutador convida quem deixou a vaga passar.
          </p>
          <div className="rm-list">
            {RMATCH.slice(0, 3).map((c, i) => (
              <div className={`rm-card ${active === i ? 'is-active' : ''}`} key={i} style={{ '--i': i } as CSSVars}>
                {active === i && <span className="rm-live">● o recrutador está vendo agora</span>}
                <div className="rm-head">
                  <span className="rm-rank">{String(i + 1).padStart(2, '0')}</span>
                  <div className="rm-id">
                    <span className="rm-name">{c[0]}</span>
                    <span className="rm-role">{c[1]}</span>
                  </div>
                  <div className="rm-rings">
                    <span className="rm-ringwrap">
                      <Ring v={c[2]} tone="match" />
                      <em>match</em>
                    </span>
                    <span className="rm-ringwrap">
                      <Ring v={c[3]} tone="cv" />
                      <em>currículo</em>
                    </span>
                  </div>
                </div>
                <div className="rm-chips">
                  {c[4].map((k, j) => (
                    <span className="rm-chip" key={j}>
                      {k}
                    </span>
                  ))}
                </div>
                <div className="rm-actions">
                  <span className="rm-btn rm-btn--go">Convidar</span>
                  <span className="rm-btn">Ver resumo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* Feat 4 · tela do usuário "Vagas Abertas" (Grupo VIP) */
const VAGA_DETALHE = {
  role: 'Técnico de Planejamento III — Manutenção Offshore',
  emp: 'UTC Engenharia',
  chips: ['Planejamento', 'Niterói', 'Presencial', '5+ anos'],
  nota: 80,
  bullets: [
    'Falta experiência comprovada no cargo técnico.',
    'Sem menção ao MS Project, requisito essencial.',
    'O currículo não destaca a formação completa solicitada.',
  ],
}

function VagasAbertas() {
  const v = VAGA_DETALHE
  return (
    <div className="an an--static" aria-hidden="true">
      <div className="an__bar">
        <span className="cvr__dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="an__url">
          recrutaai.ia.br<b>/vagas</b>
        </span>
        <span className="an__live">
          <span className="an__livedot"></span>grupo VIP
        </span>
      </div>
      <div className="an__vp">
        <div className="an__page an__page--static">
          <div className="an__crumb">GRUPO VIP · RECOMENDADA PRA VOCÊ</div>
          <div className="vg-card vg-card--solo">
            <div className="vg-role">{v.role}</div>
            <div className="vg-emp">{v.emp}</div>
            <div className="vg-chips">
              {v.chips.map((c, j) => (
                <span className="vg-chip" key={j}>
                  {c}
                </span>
              ))}
            </div>
            <div className="vg-actions">
              <span className="vg-btn vg-btn--go">Candidatar-se</span>
              <span className="vg-btn">Ver minha nota</span>
            </div>
            <div className="vg-note">
              <span className="vg-note__n">
                {v.nota}
                <small>/100</small>
              </span>
              <ul>
                {v.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeaturesV2() {
  useEffect(() => {
    const grid = document.querySelector<HTMLElement>('.fbento')
    if (!grid) return
    const layout = () => {
      const cs = getComputedStyle(grid)
      const rowH = parseFloat(cs.gridAutoRows) || 8
      const gap = parseFloat(cs.rowGap) || 14
      const tiles = grid.querySelectorAll<HTMLElement>('.fbento__tile')
      tiles.forEach((t) => {
        t.style.gridRowEnd = 'span 1'
      })
      // medir conteúdo (scrollHeight) já com span reset, depois aplicar
      requestAnimationFrame(() => {
        tiles.forEach((t) => {
          const span = Math.max(1, Math.ceil((t.scrollHeight + gap) / (rowH + gap)))
          t.style.gridRowEnd = 'span ' + span
        })
      })
    }
    layout()
    const ts = [setTimeout(layout, 250), setTimeout(layout, 900), setTimeout(layout, 1800)]
    window.addEventListener('resize', layout)
    return () => {
      ts.forEach(clearTimeout)
      window.removeEventListener('resize', layout)
    }
  }, [])
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
        <div className="fbento reveal">
          {CAT_ITEMS.map((f, i) => (
            <div
              key={i}
              className={`fbento__tile ${f.big ? 'fbento__tile--big' : ''} ${f.full ? 'fbento__tile--full' : ''} ${
                f.dark ? 'fbento__tile--dark' : ''
              }`}
            >
              {f.glow && <div className="fbento__glow" aria-hidden="true"></div>}
              <div className="fbento__cap">
                <span className="fbento__idx">{String(i + 1).padStart(2, '0')}</span>
                <div className="fbento__title">{f.title}</div>
                <div className="fbento__desc">{f.desc}</div>
              </div>
              <div className="fbento__shot">
                {f.anim === 'demo' ? (
                  <AnalysisScroll />
                ) : f.anim === 'recruiter' ? (
                  <RecruiterMatch />
                ) : f.anim === 'vagas' ? (
                  <VagasAbertas />
                ) : f.anim === 'cvrewrite' ? (
                  <CvRewriteAnim />
                ) : (
                  <Placeholder label={f.shot} dark={f.dark} />
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="fab-foot reveal">
          Tudo começa pelo seu score.{' '}
          <a href={WA_LINK('Ver meu score')} target="_blank" rel="noopener">
            Veja o seu de graça →
          </a>
        </p>
      </div>
    </section>
  )
}
