'use client'
/* Recruta AI v2 — Seção 08 · FAQ (quebra de objeções antes do CTA final) · port de src-v2/faq.jsx */
import { useState } from 'react'
import { WA_TEXT } from '@/lib/constants'
import { SecHead } from './parts'

const FAQ_V2: Array<{ q: string; a: string }> = [
  {
    q: 'É grátis mesmo? Tem pegadinha?',
    a: 'Ver seu score é grátis e não pede cartão. Candidatar-se às vagas também é grátis, em qualquer plano. A análise completa dos 6 eixos, com o que melhorar, entra a partir do Basic (R$ 19,90/mês).',
  },
  {
    q: 'Funciona pra minha função?',
    a: 'A comunidade é focada em indústria e óleo & gás: soldador, caldeireiro, planejador, instrumentista, coordenador, engenheiro. Se você é do setor, foi feito pra você.',
  },
  {
    q: 'Não entendo de tecnologia. Vou me perder?',
    a: 'Se você usa WhatsApp, consegue usar a Recruta AI. Tudo em português claro, passo a passo, e com gente de verdade pra ajudar quando precisar.',
  },
  {
    q: 'A IA vai inventar coisas no meu currículo?',
    a: 'Não. O Axcel reorganiza o que você já viveu na linguagem de quem contrata. Nada é inventado e você aprova cada mudança antes de enviar.',
  },
  {
    q: 'Em quanto tempo vejo resultado?',
    a: 'O seu score sai em 2 minutos. O resto depende do seu ritmo: tem gente que arruma o currículo numa noite e aplica no dia seguinte. A gente não promete prazo mágico nem garante vaga, promete que você não vai mais ficar no escuro.',
  },
  {
    q: 'Quem vê os meus dados?',
    a: 'O recrutador nunca vê seu telefone ou e-mail. Se ele te aprova, VOCÊ recebe o contato dele e decide se chama. Seu currículo fica em área privada e seus dados não alimentam o perfil de mais ninguém.',
  },
]

export function FAQV2() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="faq2">
          <div className="faq2__intro reveal">
            <SecHead
              eyebrow="07 · Perguntas diretas"
              title={
                <>
                  O que você deve estar <em>se perguntando</em>.
                </>
              }
            />
            <p className="faq2__note">
              Ficou outra dúvida?{' '}
              <a href={WA_TEXT('Oi! Tenho uma dúvida sobre o Recruta AI.')} target="_blank" rel="noopener">
                Chama a gente no WhatsApp
              </a>
              . Respondemos gente como gente.
            </p>
          </div>
          <div className="faq-list reveal">
            {FAQ_V2.map((f, i) => (
              <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
                <button className="faq-item__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  <span>{f.q}</span>
                  <span className="faq-item__toggle" aria-hidden="true">
                    {open === i ? '–' : '+'}
                  </span>
                </button>
                <div className="faq-item__a" style={{ maxHeight: open === i ? '220px' : '0' }}>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
