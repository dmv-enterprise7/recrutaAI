import { EyebrowPill } from '@/components/brand/EyebrowPill'
import { MatchCard } from '@/components/brand/MatchCard'
import { WA_LINK } from '@/lib/constants'

const WA_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.5 13.5l-1.5-.75a.6.6 0 00-.7.1l-.8.9c-.2.2-.5.3-.8.1-1.2-.6-2.3-1.7-2.9-2.9-.2-.3-.1-.6.1-.8l.9-.8a.6.6 0 00.1-.7l-.75-1.5a.6.6 0 00-.8-.3l-1.4.6a1 1 0 00-.6 1c.2 2.7 2.4 4.9 5.1 5.1.5.04.9-.24 1-.6l.6-1.4a.6.6 0 00-.3-.8z" />
    <path d="M12 3a9 9 0 00-7.7 13.7L3 21l4.5-1.3A9 9 0 1012 3zm0 16.5a7.4 7.4 0 01-3.9-1.1l-.3-.2-2.7.8.8-2.7-.2-.3A7.5 7.5 0 1112 19.5z" />
  </svg>
)

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-text">
          <EyebrowPill>ATS inteligente · +500 validações de mercado</EyebrowPill>
          <h1 className="t-display-sm">
            Seu currículo deixou de ser <em>invisível</em>.
          </h1>
          <p className="t-lead hero-sub">
            Recruta AI reescreve seu currículo por vaga e entrega ele pronto pro recrutador,
            com score explicado e sem caixa-preta.
          </p>
          <div className="hero-ctas">
            <a
              href={WA_LINK('Axcel')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <span>Sou candidato</span>
              {WA_ICON}
            </a>
            <a href="#recrutador" className="btn btn-secondary btn-lg">
              Sou recrutador →
            </a>
          </div>
          <div className="hero-trust">
            <div>
              <div className="hero-trust__num"><em>+500</em></div>
              <div className="t-label" style={{ marginTop: 2 }}>pessoas validaram</div>
            </div>
            <div style={{ width: 1, alignSelf: 'stretch', background: 'var(--line)' }} />
            <div>
              <div className="hero-trust__num">3 min</div>
              <div className="t-label" style={{ marginTop: 2 }}>currículo reescrito</div>
            </div>
            <div style={{ width: 1, alignSelf: 'stretch', background: 'var(--line)' }} />
            <div>
              <div className="hero-trust__num">100%</div>
              <div className="t-label" style={{ marginTop: 2 }}>score explicado</div>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="false">
          <div className="float-card float-card--a">
            <MatchCard candidate={{
              name: 'Marina Silva',
              role: 'Analista PCP Sênior',
              location: 'Macaé/RJ',
              experience: 8,
              skills: ['Primavera P6', 'Power BI'],
              score: 94,
              reason: 'Experiência sênior em Primavera P6, residência em Macaé/RJ, certificação Power BI ativa.',
              badges: [
                { label: 'Requisitos OK', tone: 'emerald' },
                { label: 'Plano Max', tone: 'gold' },
              ],
              appliedMinutes: 12,
            }} />
          </div>
          <div className="float-card float-card--b">
            <div className="stat-card">
              <div className="t-label" style={{ color: 'var(--mute)' }}>Triagem · vaga PCP Sênior</div>
              <div className="stat-card__num">247 → <em>12</em></div>
              <div style={{ fontSize: 13, color: 'var(--mute)', marginTop: 2 }}>
                currículos · em 3 minutos
              </div>
            </div>
          </div>
          <div className="float-card float-card--c">
            <div className="note-card">
              &ldquo;Apliquei pra 4 vagas em uma manhã. Pela primeira vez chamaram de verdade.&rdquo;
              <span className="note-card__src">Marcos · soldador · Polo BC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
