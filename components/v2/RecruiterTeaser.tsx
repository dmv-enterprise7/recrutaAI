/* Recruta AI v2 — teaser "Para quem contrata".
   O formulário completo agora vive em /recrutadores; aqui fica só
   a ponte curta, pra home continuar falando com o candidato. */
import Link from 'next/link'
import { ArrowIcon } from './parts'

export function RecruiterTeaser() {
  return (
    <section className="section" id="recrutador">
      <div className="container">
        <div className="rec-strip reveal">
          <div className="rec-strip__text">
            <div className="rec-strip__eyebrow">Para quem contrata</div>
            <h3>É recrutador de óleo &amp; gás?</h3>
            <p>
              Tem uma página só sua. Lá a gente mostra como a lista chega ordenada por match, o que aparece em cada
              candidato e como pedir acesso ao painel. O acesso é curado e gratuito nesta fase.
            </p>
          </div>
          <div className="rec-strip__actions">
            <Link href="/recrutadores" className="btn btn-gold btn-lg">
              <span>Ver a página do recrutador</span>
              <ArrowIcon />
            </Link>
            <span className="rec-strip__num">A gente responde em até 1 dia útil</span>
          </div>
        </div>
      </div>
    </section>
  )
}
