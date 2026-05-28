import type { ReactNode } from 'react'

interface Feature {
  icon: ReactNode
  title: string
  desc: string
}

const FEATURES: Feature[] = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
    title: 'Score explicável',
    desc: 'Toda nota vem com o motivo. Nada de "a IA achou". Você vê o que pesou e o que faltou.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
      </svg>
    ),
    title: 'Triagem em minutos',
    desc: '247 currículos processados em 3 minutos. Você revisa os 12 melhores, não a pilha inteira.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a8 8 0 11-3.7-6.7L21 4l-1.3 3.7A7.96 7.96 0 0121 12z" />
      </svg>
    ),
    title: 'WhatsApp integrado',
    desc: 'Contato direto, sem expor número do candidato. Histórico fica registrado no painel.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" />
      </svg>
    ),
    title: 'LGPD-ready',
    desc: 'Criptografia em trânsito e em repouso. Exclusão de dados em 1 clique, sem suporte.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V11l5 3V11l5 3V11l5 3v7H3z" /><path d="M9 17h2M14 17h2" />
      </svg>
    ),
    title: 'Multi-setor, foco técnico industrial',
    desc: 'Funciona pra qualquer área. Aprendeu a fundo com planejamento, soldagem, E&I, QHSE, montagem.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M14.5 9.5l-2 5-5 2 2-5 5-2z" />
      </svg>
    ),
    title: 'A decisão é sempre humana',
    desc: 'A IA pré-classifica e explica. Quem contrata é o recrutador. A gente não esconde isso.',
  },
]

export function Features() {
  return (
    <section className="section section--paper" id="features">
      <div className="container">
        <div className="sec-head reveal">
          <div className="sec-head__eyebrow">03 · O que a plataforma faz</div>
          <h2 className="sec-head__title">
            Seis coisas que a gente faz <em>de verdade.</em>
          </h2>
          <p className="sec-head__sub">
            Nada de &ldquo;powered by AI&rdquo; ou &ldquo;leveraging big data&rdquo;.
            Cada item aqui é um recurso que já está rodando.
          </p>
        </div>
        <div className="features-grid reveal">
          {FEATURES.map((f, i) => (
            <div className="feat" key={i}>
              <div className="feat__ic">{f.icon}</div>
              <div className="feat__title">{f.title}</div>
              <div className="feat__desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
