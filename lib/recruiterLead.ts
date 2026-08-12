/* ============================================================
   Lead de recrutador — payload único para o webhook n8n.
   Usado pelo teaser da home e pela landing /recrutadores, pra
   que os dois formulários caiam exatamente no mesmo destino.
   ============================================================ */
import { RECRUITER_WEBHOOK_URL } from '@/lib/constants'

export interface RecruiterLead {
  nome: string
  email: string
  empresa: string
  cidade: string
  telefone: string
  mensagem: string
}

export const EMPTY_LEAD: RecruiterLead = {
  nome: '',
  email: '',
  empresa: '',
  cidade: '',
  telefone: '',
  mensagem: '',
}

/** Envia o lead pro mesmo webhook que a home já usa. Lança em falha de rede/HTTP. */
export async function sendRecruiterLead(lead: RecruiterLead, origem: string): Promise<void> {
  const res = await fetch(RECRUITER_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      tipo: 'recruiter_lead',
      origem,
      ...lead,
      enviadoEm: new Date().toISOString(),
    }),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
}
