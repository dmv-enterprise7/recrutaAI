'use client'
import { useState, useCallback } from 'react'
import { VITOR_WA } from '@/lib/constants'

const WA_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.5 13.5l-1.5-.75a.6.6 0 00-.7.1l-.8.9c-.2.2-.5.3-.8.1-1.2-.6-2.3-1.7-2.9-2.9-.2-.3-.1-.6.1-.8l.9-.8a.6.6 0 00.1-.7l-.75-1.5a.6.6 0 00-.8-.3l-1.4.6a1 1 0 00-.6 1c.2 2.7 2.4 4.9 5.1 5.1.5.04.9-.24 1-.6l.6-1.4a.6.6 0 00-.3-.8z" />
    <path d="M12 3a9 9 0 00-7.7 13.7L3 21l4.5-1.3A9 9 0 1012 3zm0 16.5a7.4 7.4 0 01-3.9-1.1l-.3-.2-2.7.8.8-2.7-.2-.3A7.5 7.5 0 1112 19.5z" />
  </svg>
)

interface FormState {
  nome: string
  email: string
  cidade: string
  empresa: string
  interesse: string
}

export function RecruiterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>({
    nome: '', email: '', cidade: '', empresa: '', interesse: '',
  })

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.nome || !form.email || !form.empresa) {
      setStatus('error')
      setErrorMsg('Preciso de nome, email e empresa pra te chamar de volta.')
      return
    }
    setStatus('loading')
    setErrorMsg(null)
    // TODO: conectar com /api/recruiter-lead
    await new Promise(r => setTimeout(r, 900))
    setStatus('success')
  }, [form])

  return (
    <section className="section section--paper" id="recrutador">
      <div className="container">
        <div className="sec-head reveal">
          <div className="sec-head__eyebrow">06 · Acesso de recrutador</div>
          <h2 className="sec-head__title">
            Acesso por <em>avaliação.</em>
          </h2>
          <p className="sec-head__sub">
            Pra manter a qualidade do pool, todo recrutador passa por uma avaliação curta da DMV
            antes de receber acesso. São 3 passos: preenche o formulário, a gente avalia,
            e a gente entra em contato com sua liberação.
          </p>
        </div>

        <div className="rec-grid">
          <div className="form-card form-card--solo reveal">
            {status === 'success' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
                  Recebemos seu pedido,{' '}
                  <em className="serif-italic-em">{form.nome.split(' ')[0] || 'tudo certo'}.</em>
                </h3>
                <div className="form-success">
                  <b>Próximo passo:</b> em até 1 dia útil, alguém da DMV vai te chamar pra entender
                  o contexto e abrir seu acesso.<br />
                  Confirmação enviada para <b>{form.email}</b>.
                </div>
                <p style={{ fontSize: 14, color: 'var(--ink-3)', margin: 0 }}>
                  Enquanto isso, vale dar uma olhada no{' '}
                  <a href="#demo" style={{ color: 'var(--emerald-500)' }}>antes e depois</a>{' '}
                  do currículo. É o que vai aterrissar no seu painel.
                </p>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 18 }}>
                  <div className="t-label" style={{ marginBottom: 6 }}>Passo 1 de 3 · Pedido de acesso</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
                    Conta um pouco da sua operação.
                  </h3>
                </div>
                <form onSubmit={submit} className="form-grid" noValidate>
                  <div className="form-field">
                    <label className="label-up" htmlFor="rec-nome">Nome e sobrenome</label>
                    <input id="rec-nome" className="input" required value={form.nome} onChange={set('nome')} placeholder="Ana Pereira" autoComplete="name" />
                  </div>
                  <div className="form-field">
                    <label className="label-up" htmlFor="rec-email">Melhor email</label>
                    <input id="rec-email" type="email" className="input" required value={form.email} onChange={set('email')} placeholder="ana@empresa.com.br" autoComplete="email" />
                  </div>
                  <div className="form-field">
                    <label className="label-up" htmlFor="rec-cidade">Cidade / Estado</label>
                    <input id="rec-cidade" className="input" value={form.cidade} onChange={set('cidade')} placeholder="Macaé / RJ" autoComplete="address-level2" />
                  </div>
                  <div className="form-field">
                    <label className="label-up" htmlFor="rec-empresa">Empresa</label>
                    <input id="rec-empresa" className="input" required value={form.empresa} onChange={set('empresa')} placeholder="Construtora Atlântico" autoComplete="organization" />
                  </div>
                  <div className="form-field form-field--full">
                    <label className="label-up" htmlFor="rec-int">O que te trouxe aqui?</label>
                    <textarea id="rec-int" className="input" rows={2} value={form.interesse} onChange={set('interesse')} placeholder="Procuro analista PCP com Primavera P6 pra contrato offshore em Macaé." />
                  </div>

                  {status === 'error' && (
                    <div className="form-field--full form-error" role="alert">
                      {errorMsg}
                    </div>
                  )}

                  <div className="form-field--full" style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                    <button type="submit" disabled={status === 'loading'} className="btn btn-emerald btn-lg">
                      {status === 'loading' ? 'Enviando…' : 'Enviar pedido de acesso →'}
                    </button>
                    <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>
                      Levamos LGPD a sério.{' '}
                      <a href="#" style={{ color: 'var(--emerald-500)' }}>Política de privacidade</a>.
                    </span>
                  </div>
                </form>
              </>
            )}
          </div>

          <aside className="rec-contact reveal">
            <div className="t-label" style={{ color: 'var(--mute)' }}>Prefere conversar primeiro?</div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, lineHeight: 1.15, letterSpacing: '-0.02em', margin: '8px 0 4px', color: 'var(--linen)' }}>
              Fala direto com a DMV.
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(244,241,234,0.7)', lineHeight: 1.55, margin: 0 }}>
              Se você já tem vaga aberta ou quer entender o processo antes de preencher, manda mensagem.
            </p>

            <div className="rec-contact__card">
              <div className="rec-contact__avatar" aria-hidden="true">VC</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ fontWeight: 500, color: 'var(--linen)' }}>Vitor Castro</div>
                <div className="t-label" style={{ color: 'var(--gold-300)' }}>Co-Fundador · DMV Enterprise</div>
              </div>
            </div>

            <a href={VITOR_WA} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
              {WA_ICON}
              <span>WhatsApp do Vitor</span>
            </a>
            <a href={VITOR_WA} target="_blank" rel="noopener noreferrer" className="rec-contact__num">
              +55 21 97349-5805
            </a>

            <div className="rec-contact__divider" />

            <div className="t-label" style={{ color: 'var(--mute)', marginBottom: 8 }}>O que esperar</div>
            <ul className="rec-contact__list">
              <li>Resposta em até 1 dia útil.</li>
              <li>Sem reunião de descoberta de 1h.</li>
              <li>Conversa em português, sem deck.</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
