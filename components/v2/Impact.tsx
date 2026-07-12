'use client'
/* Recruta AI v2 — Faixa IMPACTO (bento emerald escuro, count-up + glow) · port de src-v2/impact.jsx */
import { CountUp, type CSSVars } from './parts'

export function ImpactV2() {
  return (
    <section className="section impact" id="impacto">
      <div className="container">
        <div className="impact__eyebrow reveal-blur">Todo número aqui tem fonte real</div>
        <h2 className="impact__title reveal-blur" style={{ '--rb-d': '80ms' } as CSSVars}>
          Um ecossistema <em>vivo</em>, não uma promessa.
        </h2>

        <div className="bento">
          <div className="bento__tile bento__tile--hero">
            <div className="bento__glow" aria-hidden="true"></div>
            <div className="bento__k">
              <CountUp end={3} prefix="+" suffix=" mil" />
            </div>
            <div className="bento__label">profissionais no ecossistema</div>
          </div>

          <div className="bento__tile">
            <div className="bento__k">
              <CountUp end={449} />
            </div>
            <div className="bento__label">vagas curadas no último mês</div>
          </div>

          <div className="bento__tile bento__tile--accent">
            <div className="bento__glow" aria-hidden="true"></div>
            <div className="bento__k">
              <CountUp end={15} prefix="~" />
              <span className="bento__unit">/dia</span>
            </div>
            <div className="bento__label">vagas novas, filtradas pra você</div>
          </div>

          <div className="bento__tile">
            <div className="bento__k">
              <CountUp end={6} />
            </div>
            <div className="bento__label">eixos no seu score, explicados um a um</div>
          </div>
        </div>
      </div>
    </section>
  )
}
