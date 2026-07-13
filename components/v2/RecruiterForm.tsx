'use client'
/* Recruta AI v2 — Faixa RECRUTADOR (formulário → webhook n8n → e-mail enterprise.dmv7@gmail.com) */
import { useCallback, useState, type ChangeEvent, type FormEvent } from 'react'
import { RECRUITER_WEBHOOK_URL, VITOR_WA } from '@/lib/constants'
import { ArrowIcon, WaIcon } from './parts'

interface FormState {
  nome: string
  email: string
  empresa: string
  cidade: string
  telefone: string
  mensagem: string
}

const EMPTY: FormState = { nome: '', email: '', empresa: '', cidade: '', telefone: '', mensagem: '' }

export function RecruiterForm() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const set =
    (k: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      if (!form.nome.trim() || !form.email.trim() || !form.empresa.trim()) {
        setStatus('error')
        setErrorMsg('Preciso pelo menos de nome, e-mail e empresa pra te chamar de volta.')
        return
      }
      setStatus('loading')
      setErrorMsg(null)
      try {
        const res = await fetch(RECRUITER_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tipo: 'recruiter_lead',
            origem: 'landing recrutaai.ia.br',
            ...form,
            enviadoEm: new Date().toISOString(),
          }),
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        setStatus('success')
      } catch {
        setStatus('error')
        setErrorMsg('Não consegui enviar agora. Tenta de novo em instantes, ou chama a gente no WhatsApp.')
      }
    },
    [form],
  )

  return (
    <section className="section rec-dark" id="recrutador">
      <div className="container">
        <div className="rec-form-wrap">
          <div className="rec-form-intro reveal">
            <div className="rec-form-eyebrow">Para quem contrata</div>
            <h3>
              Precisa de gente de óleo &amp; gás <em>já triada</em>?
            </h3>
            <p>
              Conta pra gente sobre a sua operação. A DMV avalia cada pedido pra manter a qualidade do pool e te
              retorna em até 1 dia útil com o acesso ao painel, sem deck e sem reunião de uma hora.
            </p>
          </div>

          <div className="rec-form-card reveal">
            {status === 'success' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <h3 style={{ fontFamily: 'var(--serif-display)', fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
                  Recebemos,{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--emerald-500)' }}>
                    {form.nome.split(' ')[0] || 'tudo certo'}.
                  </em>
                </h3>
                <div className="rec-form-msg rec-form-msg--ok">
                  <b>Próximo passo:</b> em até 1 dia útil alguém da DMV te chama pra entender o contexto e liberar seu
                  acesso. Confirmação vai pro e-mail <b>{form.email}</b>.
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="rec-form-grid" noValidate>
                <div className="rec-form-field">
                  <label className="label-up" htmlFor="rec-nome">
                    Nome e sobrenome
                  </label>
                  <input id="rec-nome" className="input" required value={form.nome} onChange={set('nome')} placeholder="Ana Pereira" autoComplete="name" />
                </div>
                <div className="rec-form-field">
                  <label className="label-up" htmlFor="rec-email">
                    E-mail
                  </label>
                  <input id="rec-email" type="email" className="input" required value={form.email} onChange={set('email')} placeholder="ana@empresa.com.br" autoComplete="email" />
                </div>
                <div className="rec-form-field">
                  <label className="label-up" htmlFor="rec-empresa">
                    Empresa
                  </label>
                  <input id="rec-empresa" className="input" required value={form.empresa} onChange={set('empresa')} placeholder="Nome da empresa" autoComplete="organization" />
                </div>
                <div className="rec-form-field">
                  <label className="label-up" htmlFor="rec-cidade">
                    Cidade
                  </label>
                  <input id="rec-cidade" className="input" value={form.cidade} onChange={set('cidade')} placeholder="Macaé/RJ" autoComplete="address-level2" />
                </div>
                <div className="rec-form-field rec-form-field--full">
                  <label className="label-up" htmlFor="rec-tel">
                    WhatsApp / telefone
                  </label>
                  <input id="rec-tel" className="input" value={form.telefone} onChange={set('telefone')} placeholder="(22) 99999-9999" autoComplete="tel" inputMode="tel" />
                </div>
                <div className="rec-form-field rec-form-field--full">
                  <label className="label-up" htmlFor="rec-msg">
                    O que você precisa contratar?
                  </label>
                  <textarea id="rec-msg" className="input" value={form.mensagem} onChange={set('mensagem')} placeholder="Ex.: 3 planejadores sênior pra base em Macaé, início imediato." />
                </div>

                {status === 'error' && errorMsg && (
                  <div className="rec-form-field--full">
                    <div className="rec-form-msg rec-form-msg--err">
                      {errorMsg}
                      <a href={VITOR_WA} target="_blank" rel="noopener" className="rec-form-fallback">
                        <WaIcon size={14} />
                        <span>Falar com o Vitor no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}

                <div className="rec-form-actions">
                  <button type="submit" className="btn btn-gold btn-lg" disabled={status === 'loading'}>
                    <span>{status === 'loading' ? 'Enviando…' : 'Pedir acesso'}</span>
                    {status !== 'loading' && <ArrowIcon />}
                  </button>
                  <span className="rec-form-note">A gente responde em até 1 dia útil.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
