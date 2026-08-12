import type { Metadata } from 'next'
import Link from 'next/link'
import '../styles/recrutadores.css'
import { RevealInit } from '@/components/RevealInit'
import { Logo } from '@/components/brand/Logo'
import { RecruiterHeader } from '@/components/recrutadores/Header'
import { AccessForm } from '@/components/recrutadores/AccessForm'
import { APP_URL, LOGIN_URL } from '@/lib/constants'

const TITLE = 'Recruta AI para quem contrata: triagem estruturada em óleo & gás'
const DESCRIPTION =
  'Você abre a vaga e a lista chega ordenada por match. Cada nome traz o match com a sua vaga e a nota do currículo em 6 eixos, com o motivo a um clique. Plataforma de recrutamento feita só para óleo & gás.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/recrutadores' },
  openGraph: {
    type: 'website',
    url: 'https://recrutaai.ia.br/recrutadores',
    siteName: 'Recruta AI',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'pt_BR',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12l6 6L20 6" />
    </svg>
  )
}

export default function RecrutadoresPage() {
  return (
    <div className="rl">
      <RevealInit />
      <RecruiterHeader />

      <main id="topo">
        {/* ================= HERO ================= */}
        <section className="rl-hero">
          <div className="rl-wrap rl-hero__in">
            <div>
              <span className="rl-pill">
                <i /> Para quem contrata em óleo &amp; gás
              </span>
              <h1>
                Otimize a sua triagem e ache o candidato <em>certo</em>.
              </h1>
              <p className="rl-hero__sub">
                Você abre a vaga e a lista chega ordenada por match, cada nome com a nota do currículo, as habilidades
                que ele tem e as que faltam. Menos tempo garimpando PDF, mais tempo conversando com quem presta.
              </p>
              <div className="rl-hero__cta">
                <a className="rl-btn rl-btn--pri" href="#acesso">
                  Pedir acesso ao painel
                </a>
                <a className="rl-btn rl-btn--sec" href="#recebe">
                  Ver o que você recebe
                </a>
              </div>
              <ul className="rl-hero__bul">
                <li>
                  <b>01</b> Lista ordenada por match, com o motivo a um clique
                </li>
                <li>
                  <b>02</b> Questionário de triagem montado a partir da sua vaga
                </li>
                <li>
                  <b>03</b> Feito só pra óleo &amp; gás, e gratuito nesta fase
                </li>
              </ul>
            </div>

            {/* card de candidato: os dois scores, cada um no seu lugar */}
            <div>
              <div className="rl-mock" aria-hidden="true">
                <div className="rl-mock__top">
                  <span>Vaga · Instrumentista sênior</span>
                  <span>Triagem</span>
                </div>

                <div className="rl-cand">
                  <span className="rl-cand__av">JR</span>
                  <div>
                    <div className="rl-cand__nm">Jonas Ribeiro</div>
                    <div className="rl-cand__rl">Rank 01 · requisitos conferidos</div>
                  </div>
                  <div className="rl-rings">
                    <div className="rl-ring">
                      <b>92%</b>
                      <span>match</span>
                    </div>
                    <div className="rl-ring rl-ring--cv">
                      <b>87</b>
                      <span>currículo</span>
                    </div>
                  </div>
                </div>

                <div className="rl-block">
                  <div className="rl-block__k">
                    <span>Habilidades que a vaga pede</span>
                    <span>tem 3, falta 1</span>
                  </div>
                  <div className="rl-chips">
                    <span className="rl-ch rl-ch--on">Instrumentação</span>
                    <span className="rl-ch rl-ch--on">Calibração</span>
                    <span className="rl-ch rl-ch--on">NR-10</span>
                    <span className="rl-ch">NR-35</span>
                  </div>
                </div>

                <div className="rl-block">
                  <div className="rl-block__k">
                    <span>Nota do currículo</span>
                    <span>6 eixos</span>
                  </div>
                  <div className="rl-axes">
                    <div className="rl-axis rl-axis--cv">
                      <span>Certificações</span>
                      <span className="rl-bar">
                        <i style={{ width: '92%' }} />
                      </span>
                      <span className="rl-v">92</span>
                    </div>
                    <div className="rl-axis rl-axis--cv">
                      <span>Hard skills</span>
                      <span className="rl-bar">
                        <i style={{ width: '88%' }} />
                      </span>
                      <span className="rl-v">88</span>
                    </div>
                    <div className="rl-axis rl-axis--cv">
                      <span>Experiência</span>
                      <span className="rl-bar">
                        <i style={{ width: '90%' }} />
                      </span>
                      <span className="rl-v">90</span>
                    </div>
                    <div className="rl-axis rl-axis--cv">
                      <span>Idiomas</span>
                      <span className="rl-bar">
                        <i style={{ width: '70%' }} />
                      </span>
                      <span className="rl-v">70</span>
                    </div>
                    <div className="rl-axis rl-axis--cv">
                      <span>Leitura por sistema</span>
                      <span className="rl-bar">
                        <i style={{ width: '84%' }} />
                      </span>
                      <span className="rl-v">84</span>
                    </div>
                    <div className="rl-axis rl-axis--cv">
                      <span>Soft skills</span>
                      <span className="rl-bar">
                        <i style={{ width: '78%' }} />
                      </span>
                      <span className="rl-v">78</span>
                    </div>
                  </div>
                </div>

                <div className="rl-mock__foot">
                  <span>Ver perfil</span>
                  <p>
                    <b>Por que deu match:</b> calibração de malha em campo e parada de manutenção aparecem no currículo,
                    e a vaga pede os dois.
                  </p>
                </div>
              </div>
              <p className="rl-note-il">Ilustração da tela de triagem</p>
            </div>
          </div>
        </section>

        {/* ================= FAIXA: OS DOIS SCORES ================= */}
        <section className="rl-band" aria-label="Como a lista é ordenada">
          <div className="rl-wrap">
            <p className="rl-band__lead">
              São duas leituras diferentes. A gente nunca junta as duas num número só.
            </p>
            <div className="rl-band__grid">
              <div className="rl-bstat">
                <b>Match com a vaga</b>
                <span>
                  Responde uma pergunta só: esse candidato tem a ver com o que você abriu? É o que ordena a lista, e
                  vale só pra essa vaga.
                </span>
                <ul>
                  <li>
                    <i /> Vem com o motivo escrito, o que no currículo respondeu ao que a vaga pedia
                  </li>
                  <li>
                    <i /> As habilidades que você pediu aparecem marcadas, e as que faltam também
                  </li>
                  <li>
                    <i /> Quem não tem a ver com a vaga nem chega na sua lista
                  </li>
                </ul>
              </div>
              <div className="rl-bstat">
                <b>Nota do currículo</b>
                <span>
                  Diz o quanto o material que ele entregou está completo e legível. É uma nota do candidato: muda de
                  vaga, ela continua a mesma.
                </span>
                <ul>
                  <li>
                    <i /> Explicada em 6 eixos, de certificações a idiomas, pra você ver de onde ela veio
                  </li>
                  <li>
                    <i /> Ajuda a calibrar a leitura antes de você abrir o PDF
                  </li>
                  <li>
                    <i /> Currículo mediano com match alto acontece, e o contrário também
                  </li>
                </ul>
              </div>
            </div>
            <p className="rl-band__note">
              Na tela, as duas aparecem lado a lado e separadas. Juntar num número só esconderia justamente o que você
              precisa ver pra decidir.
            </p>
          </div>
        </section>

        {/* ================= 01 · O LIMITE DO VOLUME ================= */}
        <section className="rl-sec rl-pain" id="pilha">
          <div className="rl-wrap rl-pain__grid">
            <div className="reveal">
              <div className="rl-eb">01 · O limite do volume</div>
              <h2 className="rl-title">
                Ninguém lê a pilha inteira com o <em>mesmo cuidado</em>.
              </h2>
              <p className="rl-sub">
                É aritmética, não falta de critério: a vaga tem prazo de mobilização e o dia tem hora.
              </p>
              <ul className="rl-pain__list">
                <li>
                  <span className="rl-n">01</span>
                  <div>
                    Você acha dois bons nomes nas primeiras dezenas e segue com eles, porque a vaga precisa andar.{' '}
                    <b>É a decisão certa com o tempo que você tem.</b>
                  </div>
                </li>
                <li>
                  <span className="rl-n">02</span>
                  <div>
                    Só que o perfil que a vaga mais pedia pode estar lá no fundo.{' '}
                    <b>Sem uma ordem por critério, não tem como saber que ele estava ali.</b>
                  </div>
                </li>
              </ul>
              <p className="rl-pain__kicker">
                Quando todo currículo passa pelo mesmo critério, <em>o certo aparece</em>.
              </p>
            </div>
            <div className="reveal">
              <div className="rl-pile" aria-hidden="true">
                <div className="rl-pile__cap">
                  <span>A pilha de candidaturas</span>
                  <span>o seu dia útil</span>
                </div>
                <div className="rl-pile__row">
                  <span className="rl-tag">Topo</span> Lido com atenção
                </div>
                <div className="rl-pile__row">
                  <span className="rl-tag">Topo</span> Bom nome, segue no processo
                </div>
                <div className="rl-pile__row rl-pile__row--dim">
                  <span className="rl-tag">Meio</span> Bom nome, segue no processo
                </div>
                <div className="rl-pile__row rl-pile__row--dim">
                  <span className="rl-tag">Meio</span> Leitura na diagonal
                </div>
                <div className="rl-pile__row rl-pile__row--dim2">
                  <span className="rl-tag">Meio</span> Não foi aberto
                </div>
                <div className="rl-pile__row rl-pile__row--hit">
                  <span className="rl-tag">Fundo</span> Era o perfil da vaga
                </div>
                <div className="rl-pile__row rl-pile__row--dim2">
                  <span className="rl-tag">Fundo</span> Não foi aberto
                </div>
                <div className="rl-pile__row rl-pile__row--dim2">
                  <span className="rl-tag">Fundo</span> Não foi aberto
                </div>
              </div>
              <p className="rl-note-il">Ilustração</p>
            </div>
          </div>
        </section>

        {/* ================= 02 · A VIRADA ================= */}
        <section className="rl-sec" id="virada">
          <div className="rl-wrap">
            <div className="reveal">
              <div className="rl-eb">02 · A virada</div>
              <h2 className="rl-title">
                Um painel que entende a <em>sua vaga</em>.
              </h2>
              <p className="rl-sub">
                Cada candidatura entra com os dois números separados: o match com a sua vaga e a nota do currículo. Você
                ordena por match, lê o porquê e abre o PDF original de quem quiser.
              </p>
            </div>
            <div className="rl-turn__grid reveal">
              <div className="rl-tcard rl-tcard--now">
                <div className="rl-tcard__k">Só óleo &amp; gás</div>
                <h3>A gente sabe o que a sua vaga pede.</h3>
                <p>
                  Base genérica não lê &ldquo;parada de manutenção&rdquo;, &ldquo;POB&rdquo; ou &ldquo;P6&rdquo; como
                  termo técnico. A nossa lê, porque foi construída pra um setor só. O profissional que você não acha no
                  portal grande está aqui.
                </p>
              </div>
              <div className="rl-tcard">
                <div className="rl-tcard__k">Gratuito nesta fase</div>
                <h3>Filtrar por critério não é recurso pago.</h3>
                <p>
                  No portal grande, ordenar candidatura por aderência costuma ser justamente o que você compra. Aqui
                  você publica a vaga, faz a triagem e chama quem interessa, sem custo e sem plano.
                </p>
              </div>
            </div>
            <div className="rl-turn__note reveal">
              <span className="rl-mono">Dois canais, não um só</span>
              <p>
                Nossa comunidade já reúne <b>3.000+ profissionais de óleo &amp; gás</b> prontos pra candidatura. Você
                também pode continuar postando no LinkedIn, indicando e usando outros canais pra atrair mais gente. De
                onde quer que o candidato venha, o painel organiza a triagem pra você.
              </p>
            </div>

            <div className="rl-turn__note reveal">
              <span className="rl-mono">Como entra</span>
              <p>
                <b>Só entra na sua lista quem se candidatou à sua vaga.</b> Não existe busca livre na base, vitrine de
                candidatos nem exportação de currículo em massa.
              </p>
            </div>
          </div>
        </section>

        {/* ================= 03 · O QUE VOCÊ RECEBE ================= */}
        <section className="rl-sec rl-feat" id="recebe">
          <div className="rl-wrap">
            <div className="reveal">
              <div className="rl-eb">03 · O que você recebe</div>
              <h2 className="rl-title">
                Da abertura da vaga até o <em>aprovado</em>.
              </h2>
              <p className="rl-sub">Três movimentos dentro do painel, sem ferramenta nova pra aprender.</p>
            </div>

            <div className="rl-fgrid reveal">
              <div className="rl-fcard">
                <div className="rl-fcard__ic">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 5h16M4 10h16M4 15h10M4 20h7" />
                  </svg>
                </div>
                <div className="rl-fcard__k">Abertura</div>
                <h3>Publicou a vaga, ela já está no ar.</h3>
                <p>Um formulário só, sem etapa de aprovação no meio: a vaga entra em produção na hora.</p>
                <ul>
                  <li>
                    <Check />
                    <span>Questionário de triagem opcional, montado a partir da própria vaga</span>
                  </li>
                </ul>
              </div>

              <div className="rl-fcard">
                <div className="rl-fcard__ic">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3v18M4 9l8-6 8 6M6 21h12" />
                  </svg>
                </div>
                <div className="rl-fcard__k">Leitura</div>
                <h3>Dois números, cada um no seu lugar.</h3>
                <p>Match com a vaga e nota do currículo, sempre separados, com o porquê a um clique.</p>
                <ul>
                  <li>
                    <Check />
                    <span>Requisitos da vaga conferidos contra o currículo, com o PDF original a um clique</span>
                  </li>
                </ul>
              </div>

              <div className="rl-fcard">
                <div className="rl-fcard__ic">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 6h16M6 11h12M9 16h6M11 21h2" />
                  </svg>
                </div>
                <div className="rl-fcard__k">Condução</div>
                <h3>Funil de quatro etapas, sempre visível.</h3>
                <p>Triagem, shortlist, contatados e recusados. Você sempre sabe onde cada candidato está.</p>
                <ul>
                  <li>
                    <Check />
                    <span>Ao aprovar, o candidato recebe uma mensagem automática no WhatsApp</span>
                  </li>
                </ul>
              </div>

              <div className="rl-fcard">
                <div className="rl-fcard__ic">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3l7 4v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V7l7-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div className="rl-fcard__k">Acesso</div>
                <h3>Curado, e sem preço do seu lado.</h3>
                <p>Gratuito nesta fase. Sem plano, sem tabela, sem checkout do lado do recrutador.</p>
                <ul>
                  <li>
                    <Check />
                    <span>A gente responde em até 1 dia útil, sem deck e sem reunião de uma hora</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rl-decide reveal">
              <h3>
                A decisão é <em>sempre sua</em>.
              </h3>
              <div>
                <p>
                  A pré-classificação organiza a leitura e mostra o critério.{' '}
                  <b>Ela não contrata, não descarta ninguém sozinha e não esconde o porquê</b> de nenhuma nota.
                </p>
                <p>
                  Você pode discordar do score, abrir o currículo inteiro e seguir com quem ficou em oitavo. Quem
                  contrata é você.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 04 · QUEM ESTÁ DO OUTRO LADO ================= */}
        <section className="rl-sec" id="quem">
          <div className="rl-wrap">
            <div className="reveal">
              <div className="rl-eb">04 · Quem está do outro lado</div>
              <h2 className="rl-title">
                Construído por gente <em>do setor</em>.
              </h2>
              <p className="rl-sub">
                A Recruta AI não é software de RH adaptado pra indústria. Nasceu dentro de óleo &amp; gás, ouvindo os
                dois lados da contratação.
              </p>
            </div>

            <div className="rl-stats reveal">
              <div className="rl-stat">
                <b>3.000+</b>
                <span>
                  profissionais de óleo &amp; gás na base, de caldeireiro e soldador a planejamento, inspeção e
                  engenharia.
                </span>
                <div className="rl-src">Base Recruta AI</div>
              </div>
              <div className="rl-stat">
                <b>3 grupos</b>
                <span>
                  com mais de 1.000 pessoas cada, de onde a comunidade cresceu antes mesmo de existir plataforma.
                </span>
                <div className="rl-src">Comunidade Recruta AI</div>
              </div>
            </div>

            <div className="rl-founder reveal">
              <div className="rl-founder__ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/wellington.jpg"
                  alt="Wellington Martins, engenheiro de planejamento e fundador da Recruta AI"
                  loading="lazy"
                />
              </div>
              <div className="rl-founder__tx">
                <div className="rl-founder__eb">Quem construiu</div>
                <h3>
                  Ele conhece o setor <em>por dentro</em>.
                </h3>
                <p>
                  Wellington Martins é engenheiro de planejamento, com mais de 20 anos em multinacionais e black belt em
                  planejamento. O painel nasceu das travas que ele viu, dos dois lados da contratação.
                </p>
                <div className="rl-founder__meta">
                  <span>20+ anos de multinacionais</span>
                  <span>Black belt em planejamento</span>
                  <span>Macaé · RJ</span>
                </div>
                <div className="rl-founder__sig">
                  Wellington Martins
                  <small>Fundador · Recruta AI</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 05 · PERGUNTAS ================= */}
        <section className="rl-sec rl-faq" id="perguntas">
          <div className="rl-wrap rl-faq__grid">
            <div className="reveal">
              <div className="rl-eb">05 · Perguntas diretas</div>
              <h2 className="rl-title">
                Sem rodeio, na ordem que <em>você pensaria</em>.
              </h2>
              <p className="rl-sub">Se ficou faltando alguma, escreve no último campo do formulário.</p>
            </div>
            <div className="rl-qa reveal">
              <details open>
                <summary>
                  Quanto custa pro recrutador?<span className="rl-ic" />
                </summary>
                <div className="rl-a">
                  Nada nesta fase. O acesso de quem contrata é <b>curado e gratuito</b>: não existe plano, tabela de
                  preço nem checkout do seu lado. Você pede acesso, a gente avalia e libera o painel.
                </div>
              </details>
              <details>
                <summary>
                  Preciso escolher entre a base de vocês e meus outros canais?<span className="rl-ic" />
                </summary>
                <div className="rl-a">
                  Não, use os dois. A nossa base já traz <b>3.000+ profissionais de óleo &amp; gás</b> prontos pra
                  candidatura, e você pode continuar postando no LinkedIn, indicando e usando outros canais pra atrair
                  mais gente. De onde quer que o candidato venha, o painel organiza a triagem pra você.
                </div>
              </details>
              <details>
                <summary>
                  Quem pode entrar?<span className="rl-ic" />
                </summary>
                <div className="rl-a">
                  Recrutador, analista de RH, headhunter e gestor de contratação de óleo &amp; gás: operadora, EPCista,
                  empresa de serviço, prestadora de parada. A gente avalia cada pedido porque{' '}
                  <b>é isso que mantém o pool com qualidade</b> em vez de virar depósito de currículo.
                </div>
              </details>
              <details>
                <summary>
                  De onde vem o candidato?<span className="rl-ic" />
                </summary>
                <div className="rl-a">
                  Da própria base da Recruta AI: profissionais de óleo &amp; gás cadastrados na plataforma, gente que
                  você não encontra num portal genérico. <b>Só entra na sua lista quem se candidatou</b> à sua vaga. Ele
                  controla o próprio perfil, e não existe busca livre na base nem exportação de currículo em massa.
                </div>
              </details>
              <details>
                <summary>
                  A IA decide alguma coisa sozinha?<span className="rl-ic" />
                </summary>
                <div className="rl-a">
                  Não. Ela pré-classifica, explica o critério e mostra a conta. <b>Quem avança, contata e recusa é
                  você</b>, sempre. E dá pra discordar do score, abrir o PDF inteiro e seguir com quem estiver mais
                  embaixo na lista.
                </div>
              </details>
              <details>
                <summary>
                  Em quanto tempo eu recebo resposta?<span className="rl-ic" />
                </summary>
                <div className="rl-a">
                  <b>A gente responde em até 1 dia útil.</b> Sem deck, sem reunião de uma hora: se fizer sentido, o
                  painel é liberado e você já publica a primeira vaga.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* ================= 06 · PEDIR ACESSO ================= */}
        <section className="rl-close" id="acesso">
          <div className="rl-wrap rl-close__grid">
            <div>
              <div className="rl-close__eb">06 · Pedir acesso</div>
              <h2>
                Menos horas de triagem, mais <em>acerto</em> na escolha.
              </h2>
              <p className="rl-close__sub">
                Conta pra gente o que você precisa contratar. A gente avalia o pedido e libera o painel pra você
                publicar a primeira vaga.
              </p>
              <ul className="rl-close__pts">
                <li>
                  <Check />
                  <span>Acesso curado e gratuito nesta fase</span>
                </li>
                <li>
                  <Check />
                  <span>Mais de 3.000 profissionais de óleo &amp; gás na base</span>
                </li>
                <li>
                  <Check />
                  <span>Nota de currículo explicada em 6 eixos, além do match com a vaga</span>
                </li>
                <li>
                  <Check />
                  <span>A decisão de avançar, contatar ou recusar continua sendo sua</span>
                </li>
              </ul>
            </div>
            <AccessForm />
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="rl-ft">
        <div className="rl-wrap">
          <div className="rl-ft__in">
            <div>
              <Logo variant="dark" width={150} />
              <p className="rl-ft__meta">
                Plataforma de recrutamento feita só para <b>óleo &amp; gás</b>, da <b>DMV Enterprise</b>.
                <br />
                Macaé/RJ · Brasil
              </p>
            </div>
            <div>
              <h4>Nesta página</h4>
              <ul>
                <li>
                  <a href="#pilha">O limite do volume</a>
                </li>
                <li>
                  <a href="#virada">A virada</a>
                </li>
                <li>
                  <a href="#recebe">O que você recebe</a>
                </li>
                <li>
                  <a href="#quem">Quem está do outro lado</a>
                </li>
                <li>
                  <a href="#perguntas">Perguntas diretas</a>
                </li>
                <li>
                  <a href="#acesso">Pedir acesso</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Plataforma</h4>
              <ul>
                <li>
                  <a href={LOGIN_URL} target="_blank" rel="noopener">
                    Entrar no painel
                  </a>
                </li>
                <li>
                  <Link href="/">Sou candidato</Link>
                </li>
                <li>
                  <a href={APP_URL} target="_blank" rel="noopener">
                    {APP_URL.replace('https://', '')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Institucional</h4>
              <ul>
                <li>
                  <a href="#acesso">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#acesso">Termos de Uso</a>
                </li>
                <li>
                  <a href="#acesso">Política de Cookies</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="rl-ft__bot">
            <span>© 2026 DMV Enterprise. Feito em Macaé/RJ.</span>
            <span>Recruta AI · recrutamento para óleo &amp; gás</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
