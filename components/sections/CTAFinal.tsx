import { WA_LINK } from '@/lib/constants'

export function CTAFinal() {
  return (
    <section className="cta-final" id="cta">
      <div className="cta-final__inner reveal">
        <h2>
          Pare de filtrar palavra-chave.<br />
          Comece a <em>casar contexto.</em>
        </h2>
        <p>O currículo só some na pilha quando ninguém olha direito. A gente olha e devolve sua visibilidade.</p>
        <div className="cta-final__ctas">
          <a href={WA_LINK('Axcel')} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
            Sou candidato, começar agora
          </a>
          <a
            href="#recrutador"
            className="btn btn-secondary btn-lg"
            style={{ color: 'var(--linen)', borderColor: 'rgba(244,241,234,0.25)', background: 'transparent' }}
          >
            Sou recrutador, pedir acesso
          </a>
        </div>
      </div>
    </section>
  )
}
