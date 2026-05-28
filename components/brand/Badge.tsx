import type { ReactNode } from 'react'

interface BadgeProps {
  tone?: 'emerald' | 'gold' | 'ink' | 'warn'
  dot?: boolean
  children: ReactNode
  className?: string
}

export function Badge({ tone = 'emerald', dot = false, children, className = '' }: BadgeProps) {
  const toneClass = tone === 'emerald' ? '' : `badge--${tone}`
  return (
    <span className={`badge ${toneClass} ${className}`.trim()}>
      {dot && <span className="b-dot" />}
      {children}
    </span>
  )
}
