'use client'
/* Recruta AI v2 — Seção 06 · PLANOS (cards horizontais → app /planos com checkout) */
import { CADASTRO_URL, planosUrl } from '@/lib/constants'
import { SecHead } from './parts'

interface Plan {
  name: string
  price: string | null
  tag: string
  items: string[]
  cta: string
  href: string
  feature?: boolean
  badge?: string
}

const PLANS_V2: Plan[] = [
  {
    name: 'Grátis',
    price: null,
    tag: 'o primeiro passo',
    items: ['Descubra em 2 min o quanto do seu CV está invisível', 'Vagas do dia + candidatura grátis', 'Preview do que você está perdendo'],
    cta: 'Criar conta grátis',
    href: CADASTRO_URL,
  },
  {
    name: 'Basic',
    price: '19,90',
    tag: 'entender e arrumar',
    items: ['Análise completa: os 6 eixos e o que arrumar', '3 vagas do seu interesse por dia no e-mail', 'Contato direto quando o recrutador te aprova'],
    cta: 'Assinar Basic',
    href: planosUrl('basico'),
  },
  {
    name: 'Axcel+',
    price: '49,90',
    tag: 'a mentoria',
    feature: true,
    badge: 'Recomendado',
    items: ['Tudo do Basic', 'A IA reescreve sua história na língua do mercado', 'Seu perfil no banco de talentos', 'LinkedIn otimizado', 'Chat com o Axcel na hora'],
    cta: 'Assinar Axcel+',
    href: planosUrl('axcel'),
  },
  {
    name: 'Max',
    price: '79,90',
    tag: 'chegar na frente',
    items: ['Tudo do Axcel+', 'Currículo sob medida pra cada vaga', 'Treino de entrevista por voz', 'Prioridade no ranking das vagas'],
    cta: 'Assinar Max',
    href: planosUrl('max'),
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
        <div className="pcards reveal">
          {PLANS_V2.map((p) => (
            <div key={p.name} className={`pcard ${p.feature ? 'pcard--feature' : ''}`}>
              {p.badge && <span className="pcard__badge">{p.badge}</span>}
              <div className="pcard__name">{p.name}</div>
              <div className="pcard__tag">{p.tag}</div>
              <div className="pcard__price">
                {p.price ? (
                  <>
                    <span className="pcard__cur">R$</span>
                    {p.price}
                    <small>/mês</small>
                  </>
                ) : (
                  <>
                    <span className="pcard__cur">R$</span>0<small>sempre</small>
                  </>
                )}
              </div>
              <ul className="pcard__list">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <a
                href={p.href}
                className={`pcard__cta btn ${p.feature ? 'btn-gold' : 'btn-emerald'}`}
              >
                {p.cta} →
              </a>
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
