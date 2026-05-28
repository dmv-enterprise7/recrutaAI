'use client'
import { useState } from 'react'

const FAQ_ITEMS = [
  {
    q: 'A IA decide quem é contratado?',
    a: 'Não. A IA pré-classifica e explica o porquê. A decisão é sempre do recrutador. A gente nunca filtra candidato sem deixar o motivo visível pros dois lados.',
  },
  {
    q: 'Meus dados ficam seguros?',
    a: 'Sim. Somos LGPD-ready, com criptografia em trânsito e em repouso. Você pode pedir exclusão a qualquer momento, sem ter que falar com suporte.',
  },
  {
    q: 'Funciona pra qualquer setor?',
    a: 'Sim. Recruta AI é multi-setor: indústria, varejo, tech, serviços. O foco mais profundo hoje é técnico industrial (planejamento, soldagem, caldeiraria, montagem, E&I, QHSE). É onde a IA aprendeu primeiro.',
  },
  {
    q: 'Como o recrutador entra em contato comigo?',
    a: 'Pelo WhatsApp da empresa, com seu primeiro nome e o nome da vaga. Seu número não é exposto, a gente faz a ponte. Você pode bloquear empresas específicas a qualquer hora.',
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim. Sem fidelidade, sem multa, sem ligação de retenção. Você cancela direto no app ou manda mensagem pelo WhatsApp do suporte.',
  },
  {
    q: 'Sou ex-aluno do curso Wellington Martins, ganho algo?',
    a: 'Sim, alunos do curso têm condição especial. Manda o código do curso no WhatsApp do SDR pra confirmar antes de assinar.',
  },
  {
    q: 'E se o recrutador não me chamar de volta?',
    a: 'A gente avisa. Se passarem 5 dias úteis após o match sem contato, você recebe uma notificação no WhatsApp com a opção de reativar o currículo pra outras vagas parecidas.',
  },
  {
    q: 'Como funciona o acesso pra empresa contratante?',
    a: 'Acesso por avaliação. A empresa preenche o formulário ou fala direto com Vitor (Co-Fundador DMV) no WhatsApp. A DMV avalia o pedido, entra em contato e libera o painel após aprovação. Condições comerciais são alinhadas na conversa, caso a caso.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="sec-head reveal">
          <div className="sec-head__eyebrow">07 · FAQ</div>
          <h2 className="sec-head__title">
            Perguntas <em>honestas</em>, respostas honestas.
          </h2>
          <p className="sec-head__sub">
            Se a sua pergunta não está aqui, manda no WhatsApp do SDR. Respondemos em texto, não em link de Help Center.
          </p>
        </div>
        <div className="faq-list reveal">
          {FAQ_ITEMS.map((it, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{it.q}</span>
                <span className="faq-q__icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-a">
                <div className="faq-a__inner">{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
