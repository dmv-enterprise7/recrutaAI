import { Badge } from './Badge'

interface MatchCardCandidate {
  name?: string
  role?: string
  location?: string
  experience?: number
  skills?: string[]
  score?: number
  reason?: string
  badges?: { label: string; tone: 'emerald' | 'gold' | 'ink' | 'warn' }[]
  appliedMinutes?: number
}

export function MatchCard({ candidate = {} }: { candidate?: MatchCardCandidate }) {
  const {
    name = 'Marina Silva',
    role = 'Analista PCP Sênior',
    location = 'Macaé/RJ',
    experience = 8,
    skills = ['Primavera P6', 'Power BI'],
    score = 94,
    reason = 'Experiência sênior em Primavera P6, residência em Macaé/RJ, certificação Power BI ativa.',
    badges = [
      { label: 'Requisitos OK', tone: 'emerald' as const },
      { label: 'Plano Max', tone: 'gold' as const },
    ],
    appliedMinutes = 12,
  } = candidate

  return (
    <div className="match-card">
      <div className="match-card__head">
        <div>
          <div className="match-card__title">{name} · {role}</div>
          <div className="match-card__sub">{location} · {experience} anos · {skills.join(', ')}</div>
        </div>
        <div className="match-card__score">
          {score}<sup>/100</sup>
        </div>
      </div>
      <div className="match-card__meta">
        <span>● Aplicada há {appliedMinutes} min</span>
        <span>● WhatsApp validado</span>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {badges.map((b, i) => (
          <Badge key={i} tone={b.tone}>{b.label}</Badge>
        ))}
      </div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.5, marginTop: 4 }}>
        <b style={{ color: 'var(--ink)' }}>Match porque:</b> {reason}
      </div>
    </div>
  )
}
