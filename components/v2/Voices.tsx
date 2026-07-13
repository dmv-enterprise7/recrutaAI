'use client'
/* Recruta AI v2 — Seção PROVA (Histórias de recolocação) · port de src-v2/voices.jsx
   ⚠️ FORA DO AR por decisão de 11/07/2026: só volta quando existirem depoimentos
   reais, verificados e autorizados (LGPD). Ao remontar em app/page.tsx, renumerar
   os eyebrows das seções seguintes (Planos/FAQ) e restaurar os links "Histórias"
   (#vozes) na Navbar e no Footer. Contexto completo no CLAUDE.md do repo. */
import { SecHead } from './parts'

export function VoicesV2() {
  return (
    <section className="section section--paper" id="vozes">
      <div className="container">
        <SecHead
          eyebrow="06 · Prova"
          title={
            <>
              Histórias de <em>recolocação</em>.
            </>
          }
          sub="Não são elogios ao produto. São pessoas do setor contando o que mudou quando pararam de ser invisíveis."
        />

        <div className="voices reveal">
          <div className="voice voice--lead voice--ph">
            <p className="voice__quote voice__quote--ph">“Aqui entra a primeira história real de recolocação.”</p>
            <div className="voice__ph-note">depoimento real · aguardando caso verificado e autorizado</div>
          </div>

          <div className="voices__col">
            <div className="voice voice--ph">
              <p className="voice__quote voice__quote--sm voice__quote--ph">
                “História curta de um membro da comunidade, com autorização.”
              </p>
              <div className="voice__ph-note">print de WhatsApp autorizado · comentário no grupo</div>
            </div>
            <div className="voice voice--ph">
              <p className="voice__quote voice__quote--sm voice__quote--ph">
                “Segunda história curta, de função diferente da primeira.”
              </p>
              <div className="voice__ph-note">nome · função · base · só com consentimento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
