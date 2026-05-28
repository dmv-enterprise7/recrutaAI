import type { ReactNode } from 'react'
import { WA_LINK } from '@/lib/constants'

interface Course {
  code: string
  title: string
  sub: string
  desc: string
  duration: string
  icon: ReactNode
}

const COURSES: Course[] = [
  {
    code: '01',
    title: 'Excel',
    sub: 'do básico ao dashboard',
    desc: 'Fórmulas, tabela dinâmica, PROCV/X, lógica condicional. A base que toda planilha de obra usa todo dia.',
    duration: '12h · módulos curtos',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 4v16" />
      </svg>
    ),
  },
  {
    code: '02',
    title: 'Power BI',
    sub: 'dashboard que comitê olha',
    desc: 'DAX, modelagem, design de painel. Como sair do gráfico-de-pizza-amador pro relatório que o gerente compartilha de verdade.',
    duration: '16h · cases reais',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
      </svg>
    ),
  },
  {
    code: '03',
    title: 'MS Project',
    sub: 'cronograma sem caos',
    desc: 'Estrutura analítica, dependências, caminho crítico, baseline. Pra cronograma que sobrevive à primeira semana de obra.',
    duration: '14h · projeto guiado',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18M7 13h6M7 16h4" />
      </svg>
    ),
  },
  {
    code: '04',
    title: 'Primavera P6',
    sub: 'o padrão offshore',
    desc: 'Calendários, recursos, EAP, curva-S, controle de avanço. A ferramenta que operadora exige no contrato.',
    duration: '22h · ambiente real',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
      </svg>
    ),
  },
]

export function Courses() {
  return (
    <section className="section section--paper" id="cursos">
      <div className="container">
        <div className="sec-head reveal">
          <div className="sec-head__eyebrow">05 · Ecossistema DMV · Cursos Planejamento&amp;Etc</div>
          <h2 className="sec-head__title">
            Currículo bom precisa de <em>ferramenta na mão.</em>
          </h2>
          <p className="sec-head__sub">
            Recruta AI nasceu da Planejamento&amp;Etc, escola da DMV pra carreira técnica industrial.
            Se a IA reescreve seu CV, os cursos te dão o que escrever dentro dele.
          </p>
        </div>

        <div className="courses-grid">
          {COURSES.map((c, i) => (
            <article className="course" key={c.code} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="course__head">
                <div className="course__ic">{c.icon}</div>
                <div className="course__code">{c.code} / 04</div>
              </div>
              <div className="course__title">{c.title}</div>
              <div className="course__sub">{c.sub}</div>
              <div className="course__desc">{c.desc}</div>
              <div className="course__meta">
                <span>{c.duration}</span>
              </div>
              <div className="course__foot">
                <div className="course__price">R$<span>99,90</span></div>
                <a
                  href={WA_LINK(`Curso ${c.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  Quero esse
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bundle */}
        <div className="bundle reveal">
          <div className="bundle__bg" aria-hidden="true" />
          <div className="bundle__content">
            <div className="bundle__left">
              <div className="t-label" style={{ color: 'var(--gold-300)' }}>
                Pacote completo · 04 ferramentas + lives
              </div>
              <h3 className="bundle__title">
                Planejamento Executivo{' '}
                <span className="serif-italic-em" style={{ color: 'var(--gold-300)' }}>completo.</span>
              </h3>
              <p className="bundle__lead">
                Os quatro cursos juntos, mais{' '}
                <b style={{ color: 'var(--linen)' }}>lives semanais</b>{' '}
                simulando situações reais do dia a dia. Você não decora botão, você resolve um
                problema de verdade na frente do instrutor.
              </p>
              <ul className="bundle__list">
                <li>Excel, Power BI, MS Project e Primavera P6 sem precisar comprar separado</li>
                <li>1 live por semana com case real: cronograma derrapando, dashboard pra reunião amanhã, EAP que furou</li>
                <li>Acesso vitalício ao material e ao histórico das lives</li>
                <li>Grupo fechado com a turma e os instrutores</li>
              </ul>
            </div>
            <div className="bundle__right">
              <div className="bundle__price-old">de R$ 600,00</div>
              <div className="bundle__price">
                R$ <span>299</span><small>,90</small>
              </div>
              <div className="bundle__priceSub">por todo o pacote, à vista</div>
              <a
                href={WA_LINK('Planejamento Executivo COMPLETO')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-lg"
                style={{ marginTop: 18, width: '100%', justifyContent: 'center' }}
              >
                Quero o pacote completo →
              </a>
              <div className="bundle__seal">50% off · oferta de lançamento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
