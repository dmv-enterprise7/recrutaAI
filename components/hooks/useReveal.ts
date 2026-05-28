'use client'
import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    const reduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    els.forEach(el => el.classList.add('in'))
    if (reduced || !('IntersectionObserver' in window)) return

    els.forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top > window.innerHeight) el.classList.remove('in')
    })

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )

    els.forEach(el => {
      if (!el.classList.contains('in')) obs.observe(el)
    })

    const t = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'))
    }, 1500)

    return () => {
      obs.disconnect()
      clearTimeout(t)
    }
  }, [])
}
