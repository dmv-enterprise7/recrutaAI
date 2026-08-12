'use client'
/* Recruta AI · /recrutadores — pedido de acesso.
   Mesmos campos e mesmo destino de envio do formulário da home
   (webhook n8n em RECRUITER_WEBHOOK_URL, via sendRecruiterLead). */
import { useCallback, useState, type ChangeEvent, type FormEvent } from 'react'
import { VITOR_WA } from '@/lib/constants'
import { EMPTY_LEAD, sendRecruiterLead, type RecruiterLead } from '@/lib/recruiterLead'

export function AccessForm() {
  const [form, setForm] = useState<RecruiterLead>(EMPTY_LEAD)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const set =
    (k: keyof RecruiterLead) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
        await sendRecruiterLead(form, 'landing recrutaai.ia.br/recrutadores')
        setStatus('success')
      } catch {
        setStatus('error')
        setErrorMsg('Não consegui enviar agora. Tenta de novo em instantes, ou chama a gente no WhatsApp.')
      }
    },
    [form],
  )

  if (status === 'success') {
    return (
      <div className="rl-form rl-form__ok">
        <h3>
          Recebemos, <em>{form.nome.split(' ')[0] || 'tudo certo'}.</em>
        </h3>
        <p>
          A gente responde em até 1 dia útil pra entender o contexto e liberar o painel. A confirmação vai pro e-mail{' '}
          <b>{form.email}</b>.
        </p>
      </div>
    )
  }

  return (
    <form className="rl-form" onSubmit={submit} noValidate>
      <div className="rl-form__row">
        <div className="rl-fld">
          <label htmlFor="rl-nome">Nome e sobrenome</label>
          <input
            id="rl-nome" name="nome" type="text" autoComplete="name"
            placeholder="Como podemos te chamar"
            value={form.nome} onChange={set('nome')} required
          />
        </div>
        <div className="rl-fld">
          <label htmlFor="rl-email">E-mail</label>
          <input
            id="rl-email" name="email" type="email" autoComplete="email"
            placeholder="voce@empresa.com.br"
            value={form.email} onChange={set('email')} required
          />
        </div>
      </div>
      <div className="rl-form__row">
        <div className="rl-fld">
          <label htmlFor="rl-empresa">Empresa</label>
          <input
            id="rl-empresa" name="empresa" type="text" autoComplete="organization"
            placeholder="Razão social ou nome fantasia"
            value={form.empresa} onChange={set('empresa')} required
          />
        </div>
        <div className="rl-fld">
          <label htmlFor="rl-cidade">Cidade</label>
          <input
            id="rl-cidade" name="cidade" type="text" autoComplete="address-level2"
            placeholder="Macaé, Rio de Janeiro, Salvador"
            value={form.cidade} onChange={set('cidade')}
          />
        </div>
      </div>
      <div className="rl-fld">
        <label htmlFor="rl-tel">Telefone</label>
        <input
          id="rl-tel" name="telefone" type="tel" autoComplete="tel" inputMode="tel"
          placeholder="(22) 99999-9999"
          value={form.telefone} onChange={set('telefone')}
        />
      </div>
      <div className="rl-fld">
        <label htmlFor="rl-msg">O que você precisa contratar?</label>
        <textarea
          id="rl-msg" name="mensagem"
          placeholder="Ex.: 6 instrumentistas e 2 planejadores P6 pra parada em outubro, embarque de 14 por 14."
          value={form.mensagem} onChange={set('mensagem')}
        />
      </div>

      {status === 'error' && errorMsg && (
        <div className="rl-form__err">
          {errorMsg}
          <br />
          <a href={VITOR_WA} target="_blank" rel="noopener">
            Falar no WhatsApp
          </a>
        </div>
      )}

      <button className="rl-btn rl-btn--gold" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Enviando...' : 'Pedir acesso'}
      </button>
      <p className="rl-form__note">A gente responde em até 1 dia útil</p>
    </form>
  )
}
