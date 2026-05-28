import { WA_LINK } from '@/lib/constants'

interface Plan {
  name: string
  price: string
  tag: string
  feature: boolean
  badge: string | null
  items: string[]
}

const PLANS: Plan[] = [
  {
    name: 'Grupo VIP',
    price: '19,90',
    tag: 'começar leve',
    feature: false,
    badge: null,
    items: [
      'Grupo de WhatsApp com vagas filtradas',
      'Triagem básica do seu currículo',
      '1 reescrita guiada por mês',
      'Avisos no WhatsApp quando houver match',
    ],
  },
  {
    name: 'Max',
    price: '79,90',
    tag: 'pacote completo',
    feature: true,
    badge: 'Recomendado',
    items: [
      'Tudo do Axcel',
      'Currículo reescrito por IA, ilimitado',
      'Entrevista de simulação com IA',
      'Feedback ponto a ponto sobre as respostas',
      'Prioridade na fila de matches',
      'Revisão humana antes de enviar',
    ],
  },
  {
    name: 'Axcel',
    price: '49,90',
    tag: 'intermediário',
    feature: false,
    badge: null,
    items: [
      'Tudo do Grupo VIP',
      'Análise ATS completa do currículo',
      'Score por vaga com motivo explicado',
      'Adaptação por vaga em 1 clique',
    ],
  },
]

export function Plans() {
  return (
    <section className="section" id="planos">
      <div className="container">
        <div className="sec-head reveal">
          <div className="sec-head__eyebrow">04 · Planos pra candidato</div>
          <h2 className="sec-head__title">
            Preço justo. <em>Sem fidelidade.</em>
          </h2>
          <p className="sec-head__sub">
            Três níveis de IA aplicados ao seu currículo. Todos cancelam quando quiserem.
          </p>
        </div>

        <div className="plans-grid">
          {PLANS.map((p, i) => (
            <div
              key={p.name}
              className={`plan ${p.feature ? 'plan--feature' : ''} reveal`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p.badge && <div className="plan__badge">{p.badge}</div>}
              <div className="plan__name">{p.name}</div>
              <div className="plan__price">
                R$<span>{p.price}</span><small>/mês</small>
              </div>
              <div className="plan__tag">{p.tag}</div>
              <ul className="plan__list">
                {p.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
              <a
                href={WA_LINK(p.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-lg plan__cta ${p.feature ? 'btn-gold' : 'btn-primary'}`}
              >
                Assinar {p.name} via WhatsApp →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
