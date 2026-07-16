'use client'
/* Recruta AI v2 — Seção 02 · A VIRADA (de → para, encadeado) · port de src-v2/value.jsx */
import { LOGIN_URL } from '@/lib/constants'
import { ArrowIcon, SecHead } from './parts'

const VIRA_ROWS: Array<[string, string]> = [
  ['Currículo enviado, silêncio do outro lado.', 'Sua história reescrita na língua que o mercado contrata.'],
  ['No fim da pilha, atrás de todo mundo.', 'Reposicionado, você aparece lá na frente no processo.'],
  ['Você nem sabe por que não te chamaram.', 'Você sabe o que trava e exatamente o que arrumar.'],
  ['Entrevista no susto, se um dia aparece.', 'Você treina pra vaga antes mesmo de te chamarem.'],
]

export function ValueV2() {
  return (
    <section className="section" id="virada">
      <div className="container">
        <SecHead
          eyebrow="02 · A virada"
          title={
            <>
              Do fim da pilha pra <em>frente da fila</em>.
            </>
          }
          sub="A gente não deixa seu currículo mais bonito. A gente te reposiciona: te faz aparecer, entendido e disputado por quem contrata."
        />
        <div className="vira reveal">
          <div className="vira__head">
            <span>Hoje, sozinho</span>
            <span aria-hidden="true"></span>
            <span>Com a Recruta AI</span>
          </div>
          {VIRA_ROWS.map((r, i) => (
            <div className="vira__row" key={i}>
              <div className="vira__before">{r[0]}</div>
              <div className="vira__arrow" aria-hidden="true">
                →
              </div>
              <div className="vira__after">{r[1]}</div>
            </div>
          ))}
        </div>
        <div className="bab__cta reveal">
          <a href={LOGIN_URL} target="_blank" rel="noopener" className="btn btn-emerald btn-lg">
            <span>Quero sair da invisibilidade</span>
            <ArrowIcon />
          </a>
          <span className="bab__cta-note">Grátis · 2 min · sem cartão</span>
        </div>
      </div>
    </section>
  )
}
