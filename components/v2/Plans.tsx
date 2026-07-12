'use client'
/* Recruta AI v2 — Seção 07 · PLANOS (guia de preços editorial, não tiers SaaS) · port de src-v2/plans.jsx */
import { WA_LINK } from '@/lib/constants'
import { SecHead } from './parts'

interface Plan {
  name: string
  price: string | null
  tag: string
  items: string[]
  cta: string
  feature?: boolean
  badge?: string
}

const PLANS_V2: Plan[] = [
  {
    name: 'Grátis',
    price: null,
    tag: 'o primeiro passo',
    items: [
      'Descubra em 2 minutos o quanto do seu currículo está invisível',
      'Vagas do dia + candidatura grátis',
      'Preview do que você está perdendo',
    ],
    cta: 'Ver meu score grátis',
  },
  {
    name: 'Basic',
    price: '19,90',
    tag: 'entender e arrumar',
    items: [
      'Análise completa: os 6 eixos e o que arrumar',
      '8 vagas do seu interesse por dia no e-mail',
      'Contato direto quando o recrutador te aprova',
    ],
    cta: 'Assinar Basic',
  },
  {
    name: 'Axcel+',
    price: '49,90',
    tag: 'a mentoria',
    feature: true,
    badge: 'Recomendado',
    items: [
      'Tudo do Basic',
      'A IA reescreve sua história na língua do mercado',
      'Seu perfil no banco de talentos',
      'LinkedIn otimizado',
      'Chat com o Axcel pra tirar dúvida na hora',
    ],
    cta: 'Assinar Axcel+',
  },
  {
    name: 'Max',
    price: '79,90',
    tag: 'chegar na frente',
    items: [
      'Tudo do Axcel+',
      'Currículo sob medida pra cada vaga',
      'Treino de entrevista por voz antes da real',
      'Prioridade no ranking das vagas',
      'Chegue na entrevista já aprovado',
    ],
    cta: 'Assinar Max',
  },
]

export function PlansV2() {
  return (
    <section className="section" id="planos">
      <div className="container">
        <SecHead
          eyebrow="06 · Planos"
          title={
            <>
              Comece de graça. <em>Suba quando quiser.</em>
            </>
          }
          sub="Cada plano é um degrau da mesma jornada. Ver seu score é grátis e não pede cartão. Daí você só sobe se fizer sentido pra você."
        />
        <div className="menu reveal">
          {PLANS_V2.map((p) => (
            <div key={p.name} className={`menu__row ${p.feature ? 'menu__row--feature' : ''}`}>
              <div className="menu__main">
                <div className="menu__name">
                  {p.name}
                  {p.badge && <span className="menu__badge">{p.badge}</span>}
                </div>
                <div className="menu__tag">{p.tag}</div>
                <p className="menu__items">{p.items.join('  ·  ')}</p>
              </div>
              <div className="menu__side">
                <div className="menu__price">
                  {p.price ? (
                    <>
                      R$ {p.price}
                      <small>/mês</small>
                    </>
                  ) : (
                    <>
                      R$ 0<small>sempre</small>
                    </>
                  )}
                </div>
                {p.feature ? (
                  <a href={WA_LINK(p.name)} target="_blank" rel="noopener" className="btn btn-gold">
                    {p.cta} →
                  </a>
                ) : (
                  <a href={WA_LINK(p.name)} target="_blank" rel="noopener" className="menu__cta">
                    {p.cta} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="plan-hook">
          Candidatar-se é grátis em todos os planos. Você paga pela inteligência, não pelo acesso à vaga.
        </div>
      </div>
    </section>
  )
}
