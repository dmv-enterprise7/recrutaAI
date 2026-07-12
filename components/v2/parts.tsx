'use client'
/* Recruta AI v2 — helpers compartilhados (port de src-v2/parts.jsx) */
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from 'react'

export type CSSVars = CSSProperties & Record<`--${string}`, string | number>

/* ícone WhatsApp reutilizável */
export function WaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 13.5l-1.5-.75a.6.6 0 00-.7.1l-.8.9c-.2.2-.5.3-.8.1-1.2-.6-2.3-1.7-2.9-2.9-.2-.3-.1-.6.1-.8l.9-.8a.6.6 0 00.1-.7l-.75-1.5a.6.6 0 00-.8-.3l-1.4.6a1 1 0 00-.6 1c.2 2.7 2.4 4.9 5.1 5.1.5.04.9-.24 1-.6l.6-1.4a.6.6 0 00-.3-.8z" />
      <path d="M12 3a9 9 0 00-7.7 13.7L3 21l4.5-1.3A9 9 0 1012 3zm0 16.5a7.4 7.4 0 01-3.9-1.1l-.3-.2-2.7.8.8-2.7-.2-.3A7.5 7.5 0 1112 19.5z" />
    </svg>
  )
}

export function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

/* Placeholder editorial — foto/print real entra depois */
export function Placeholder({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div className={`ph ${dark ? 'ph--dark' : ''}`} aria-hidden="true">
      <div className="ph__glyph">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="9" r="3.4" />
          <path d="M5.5 20a6.5 6.5 0 0113 0" />
        </svg>
      </div>
      <div className="ph__label">{label}</div>
    </div>
  )
}

/* cabeçalho de seção padrão (mono numerado + serifa) */
export function SecHead({
  eyebrow,
  title,
  sub,
  style,
}: {
  eyebrow: ReactNode
  title: ReactNode
  sub?: ReactNode
  style?: CSSProperties
}) {
  return (
    <div className="sec-head reveal" style={style}>
      <div className="sec-head__eyebrow reveal-blur">{eyebrow}</div>
      <h2 className="sec-head__title reveal-blur" style={{ '--rb-d': '80ms' } as CSSVars}>
        {title}
      </h2>
      {sub && (
        <p className="sec-head__sub reveal-blur" style={{ '--rb-d': '160ms' } as CSSVars}>
          {sub}
        </p>
      )}
    </div>
  )
}

/* ============================================================
   MOTOR DE ANIMAÇÃO (assinatura do design v2)
   - useInView: dispara estado ao entrar na viewport
   - RevealBlurInit: blur→foco global para .reveal-blur
   - CountUp: número anima de 0 ao valor quando visível
   ============================================================ */
export function useInView(opts?: { threshold?: number; rootMargin?: string }): [
  RefObject<HTMLDivElement | null>,
  boolean,
] {
  const ref = useRef<HTMLDivElement | null>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setSeen(true)
      return
    }
    const frac = opts?.threshold ?? 0.25
    let done = false
    const check = () => {
      if (done) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      if (r.top < vh * (1 - frac * 0.4) && r.bottom > vh * 0.06) {
        done = true
        setSeen(true)
        cleanup()
      }
    }
    const id = setInterval(check, 180)
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    function cleanup() {
      clearInterval(id)
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
    check()
    return cleanup
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return [ref, seen]
}

/* blur→foco global: adiciona .rb-in ao entrar (polling por timer, à prova de tudo) */
export function RevealBlurInit() {
  useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pending = () => Array.from(document.querySelectorAll('.reveal-blur:not(.rb-in)'))
    if (reduced) {
      document.querySelectorAll('.reveal-blur').forEach((el) => el.classList.add('rb-in'))
      return
    }
    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      pending().forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top < vh * 0.9 && r.bottom > vh * 0.04) el.classList.add('rb-in')
      })
      if (!pending().length) cleanup()
    }
    const id = setInterval(check, 180)
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    function cleanup() {
      clearInterval(id)
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
    check()
    return cleanup
  }, [])
  return null
}

/* número que conta de 0 ao alvo quando entra na tela (timer-based, robusto) */
export function CountUp({
  end,
  dur = 1500,
  prefix = '',
  suffix = '',
  decimals = 0,
  sep = '.',
  className,
}: {
  end: number
  dur?: number
  prefix?: string
  suffix?: string
  decimals?: number
  sep?: string
  className?: string
}) {
  const [ref, seen] = useInView({ threshold: 0.3 })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!seen) return
    const ease = (x: number) => 1 - Math.pow(1 - x, 3)
    const start = typeof performance !== 'undefined' ? performance.now() : Date.now()
    const id = setInterval(() => {
      const now = typeof performance !== 'undefined' ? performance.now() : Date.now()
      const p = Math.min(1, (now - start) / dur)
      setVal(end * ease(p))
      if (p >= 1) clearInterval(id)
    }, 32)
    return () => clearInterval(id)
  }, [seen, end, dur])
  const fmt = (n: number) => {
    const fixed = n.toFixed(decimals)
    const [int, dec] = fixed.split('.')
    const withSep = int.replace(/\B(?=(\d{3})+(?!\d))/g, sep)
    return dec ? `${withSep},${dec}` : withSep
  }
  return (
    <span ref={ref as RefObject<HTMLSpanElement | null>} className={className}>
      {prefix}
      {fmt(val)}
      {suffix}
    </span>
  )
}
