import { WA_LINK } from '@/lib/constants'

const BASIC_FEATURES = [
  'Grupo VIP de vagas no WhatsApp',
  'Vagas diárias automáticas',
  'Upload de currículo visível para recrutadores',
  'Candidatura manual em vagas abertas',
  'Currículo reescrito pela IA',
] as const

const AXCEL_FEATURES = [
  'Chat IA tutor do curso (Excel, MS Project, Primavera P6, Power BI)',
  'Aba Turbine seu LinkedIn',
  'Análise de currículo com score ATS',
  'Match passivo com vagas compatíveis',
] as const

const MAX_FEATURES = [
  'Currículo otimizado para cada vaga específica',
  'Destaque ⚡ — aparece primeiro no painel do recrutador',
  'Badges de certificação Hotmart',
  'Entrevista simulada com IA por voz',
] as const

type PlanVariant = 'basic' | 'popular' | 'premium'

interface PlanSection {
  items: readonly string[]
  inherited?: boolean
}

interface Plan {
  name: string
  price: string
  variant: PlanVariant
  badge: string | null
  sections: PlanSection[]
}

const PLANS: Plan[] = [
  {
    name: 'Basic',
    price: '19,90',
    variant: 'basic',
    badge: null,
    sections: [{ items: BASIC_FEATURES }],
  },
  {
    name: 'Axcel',
    price: '49,90',
    variant: 'popular',
    badge: 'Mais popular',
    sections: [
      { items: BASIC_FEATURES, inherited: true },
      { items: AXCEL_FEATURES },
    ],
  },
  {
    name: 'Max',
    price: '79,90',
    variant: 'premium',
    badge: 'Premium',
    sections: [
      { items: BASIC_FEATURES, inherited: true },
      { items: AXCEL_FEATURES, inherited: true },
      { items: MAX_FEATURES },
    ],
  },
]

function planVariantClass(variant: PlanVariant) {
  if (variant === 'popular') return 'plan--popular'
  if (variant === 'premium') return 'plan--premium'
  return ''
}

function planCtaClass(variant: PlanVariant) {
  if (variant === 'popular') return 'btn-gold'
  if (variant === 'premium') return 'btn-emerald'
  return 'btn-primary'
}

export function Plans() {
  return (
    <section className="section section--paper" id="planos">
      <div className="container">
        <div className="sec-head reveal">
          <div className="sec-head__eyebrow">04 · Planos pra candidato</div>
          <h2 className="sec-head__title">
            Escolha o seu <em>plano.</em>
          </h2>
          <p className="sec-head__sub">
            Cada tier inclui tudo do anterior. Sem fidelidade — cancela quando quiser.
          </p>
        </div>

        <div className="plans-grid">
          {PLANS.map((p, i) => (
            <div
              key={p.name}
              className={`plan ${planVariantClass(p.variant)} reveal`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p.badge && <div className="plan__badge">{p.badge}</div>}
              <div className="plan__name">{p.name}</div>
              <div className="plan__price">
                R$<span>{p.price}</span><small>/mês</small>
              </div>
              <div className="plan__features">
                {p.sections.map((section, si) => (
                  <div key={si} className="plan__feature-group">
                    {si > 0 && <div className="plan__list-divider" role="presentation" />}
                    <ul className="plan__list">
                      {section.items.map((item, j) => (
                        <li
                          key={j}
                          className={section.inherited ? 'is-inherited' : undefined}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <a
                href={WA_LINK(p.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-lg plan__cta ${planCtaClass(p.variant)}`}
              >
                Assinar {p.name} →
              </a>
            </div>
          ))}
        </div>

        <p className="plans-footnote reveal">
          Pagamento via link · credenciais enviadas por WhatsApp após confirmação.
        </p>
      </div>
    </section>
  )
}
