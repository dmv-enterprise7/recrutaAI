'use client'
/* Recruta AI v2 — Seção 06 · PLANOS (cards horizontais → app /planos com checkout) */
import { CADASTRO_URL, planosUrl } from '@/lib/constants'
import { SecHead } from './parts'

interface Plan {
  name: string
  price: string | null
  /** Sufixo do preço: '/mês' por padrão. O trimestral cobra uma vez por 3 meses. */
  unit?: string
  /** Linha fina sob o preço — usada pra traduzir o trimestral em preço mensal. */
  note?: string
  tag: string
  items: string[]
  cta: string
  href: string
  feature?: boolean
  badge?: string
}

/**
 * Ago/2026 — os 4 degraus (Grátis / Basic 19,90 / Axcel+ 49,90 / Max 79,90) viraram
 * DOIS: grátis e o plano completo. O que era o Max, com tudo dentro, passou a custar
 * menos que o antigo Axcel+ do meio. Os dois cards pagos são o MESMO plano em ciclos
 * diferentes — por isso a lista de itens não se repete no trimestral: ele diz "tudo
 * do plano completo" e gasta o espaço com a economia, que é a razão de existir dele.
 */
const ITENS_PLANO_COMPLETO = [
  'Análise completa: os 6 eixos e o que arrumar',
  'A IA reescreve sua história na língua do mercado',
  'Currículo sob medida pra cada vaga',
  'Treino de entrevista por voz',
  'LinkedIn otimizado e chat com o Axcel na hora',
  'Seu perfil no banco de talentos, com prioridade no ranking',
]

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
    name: 'Completo',
    price: '44,90',
    tag: 'tudo, todo mês',
    feature: true,
    badge: 'Recomendado',
    items: ITENS_PLANO_COMPLETO,
    cta: 'Assinar por mês',
    href: planosUrl('max', 'mensal'),
  },
  {
    name: 'Completo · 3 meses',
    price: '99',
    unit: '/3 meses',
    note: 'R$ 33 por mês — economia de R$ 35,70',
    tag: 'o mesmo plano, mais barato',
    items: [
      'Tudo do plano completo',
      'Pagamento único, sem renovação automática',
      'Tempo de sobra pra trilha inteira de reposicionamento',
    ],
    cta: 'Assinar 3 meses',
    href: planosUrl('max', 'trimestral'),
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
              Comece de graça. <em>Depois é um plano só.</em>
            </>
          }
          sub="Acabaram os degraus: quem assina leva tudo. Ver seu score continua grátis e não pede cartão. Se fizer sentido, você escolhe pagar por mês ou a cada 3 meses — mais barato."
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
                    <small>{p.unit ?? '/mês'}</small>
                  </>
                ) : (
                  <>
                    <span className="pcard__cur">R$</span>0<small>sempre</small>
                  </>
                )}
              </div>
              {p.note && <div className="pcard__note">{p.note}</div>}
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
