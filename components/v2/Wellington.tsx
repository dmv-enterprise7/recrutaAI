'use client'
/* Recruta AI v2 — Seção 05 · QUEM É O WELLINGTON (chapter escuro) · port de src-v2/wellington.jsx */

const WELL_CREDS = [
  '20+ anos de indústria',
  'Multinacionais bilionárias',
  'Black belt em planejamento',
  'Hoje do lado de quem contrata',
]

export function WellingtonV2() {
  return (
    <section className="section well" id="wellington">
      <div className="container">
        <div className="well__grid">
          <div className="well__photo reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wellington.jpg"
              alt="Wellington Martins, engenheiro de planejamento, fundador-personagem da Recruta AI"
              loading="lazy"
            />
            <div className="well__badge">
              <b>20+ anos</b>
              <span>de multinacionais</span>
            </div>
          </div>

          <div className="well__text reveal">
            <div className="well__eyebrow">05 · Quem te guia</div>
            <h2 className="well__title">
              Eu já fiz esse caminho. E sei <em>onde ele trava</em>.
            </h2>
            <div className="well__body">
              <p>
                Sou <b>Wellington Martins</b>. Já entreguei currículo pra vaga que eu sabia fazer e recebi de volta o
                pior: o silêncio. Nenhum retorno, nenhum motivo, nada. Vivi isso mais de uma vez, e conheço o vazio de
                ficar no escuro sem entender o que aconteceu.
              </p>
              <p>
                O problema nunca foi a experiência. Foi a <b>tradução</b>. Passei{' '}
                <b>mais de 20 anos em multinacionais bilionárias</b> do óleo e gás e aprendi a falar a língua que o
                mercado contrata, a mesma que o algoritmo lê e o recrutador reconhece.
              </p>
              <p>
                Hoje estou do lado de quem contrata. E construí a plataforma que ensina esse caminho:{' '}
                <b>o que eu faria sentado do seu lado</b>, disponível a qualquer hora.
              </p>
            </div>

            <div className="well__creds">
              {WELL_CREDS.map((c) => (
                <span key={c} className="well__cred">
                  {c}
                </span>
              ))}
            </div>

            <div className="axcel-note">
              <div className="axcel-note__mark">
                A<em>x</em>
              </div>
              <p>
                <b>Axcel</b> é o meu jeito de trabalhar virado IA. Ele carrega o que aprendi em duas décadas de setor e
                te acompanha 24h: te posiciona, te treina pra entrevista e te prepara pra hora que a vaga certa
                aparecer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
