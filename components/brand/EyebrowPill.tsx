import type { ReactNode } from 'react'

export function EyebrowPill({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow-pill">
      <span className="eyebrow-pill__dot" />
      <span>{children}</span>
    </div>
  )
}
