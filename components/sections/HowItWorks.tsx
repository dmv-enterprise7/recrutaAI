'use client'
import { useState } from 'react'
import { AudienceToggle } from '@/components/brand/AudienceToggle'

const STEPS = {
  candidato: [
    { num: '01', title: 'Suba seu currículo.', desc: 'PDF, Word ou cole o texto direto. A gente aceita tudo, inclusive aquele PDF do Word de 2014.' },
    { num: '02', title: 'A IA reescreve por vaga.', desc: 'Hierarquia clara, palavras-chave do setor, score com motivo. Você aprova antes de enviar. Nada sai sem você ver.' },
    { num: '03', title: 'Recrutador chama no WhatsApp.', desc: 'Sem expor seu número. Quando o match passar do limite, a gente avisa com nome da vaga e empresa.' },
  ],
  recrutador: [
    { num: '01', title: 'Preencha o formulário.', desc: 'Você manda nome, empresa e o que precisa. A gente avalia o pedido e abre seu acesso depois da aprovação.' },
    { num: '02', title: 'Crie a vaga em 2 minutos.', desc: 'Você escreve em português, a IA estrutura. Receba candidatos com score e motivo, sem template engessado de RH.' },
    { num: '03', title: 'Aprove e contate via WhatsApp.', desc: 'Conversa direta no WhatsApp da empresa, sem expor o telefone do candidato. Tudo registrado no painel.' },
  ],
}

export function HowItWorks() {
  const [audience, setAudience] = useState<'candidato' | 'recrutador'>('candidato')
  const steps = STEPS[audience]

  return (
    <section className="section" id="how">
      <div className="container">
        <div className="sec-head reveal" style={{ alignItems: 'flex-start' }}>
          <div className="sec-head__eyebrow">02 · Como funciona</div>
          <h2 className="sec-head__title">
            Mesma plataforma. <em>Dois caminhos.</em>
          </h2>
          <p className="sec-head__sub">
            Recruta AI conecta candidatos qualificados e recrutadores honestos.
            Escolha de qual lado você está. A gente conta o resto.
          </p>
          <div style={{ marginTop: 'var(--s-3)' }}>
            <AudienceToggle value={audience} onChange={setAudience} />
          </div>
        </div>

        <div className="steps-grid">
          {steps.map((s, i) => (
            <div className="step" key={i}>
              <div className="step__num">{s.num}</div>
              <div className="step__title">{s.title}</div>
              <div className="step__desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
