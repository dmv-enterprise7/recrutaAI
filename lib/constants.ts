export const WA_NUMBER = '5522998523511'

export const WA_LINK = (planName: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Oi, vim da landing do Recruta AI e tenho interesse no plano ${planName}.`
  )}`

/* Link de WhatsApp com mensagem livre (CTAs contextuais por card/seção). */
export const WA_TEXT = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`

export const VITOR_WA = `https://wa.me/5521973495805?text=${encodeURIComponent(
  'Oi Vitor, vim pela landing do Recruta AI e queria entender o acesso de recrutador.'
)}`

/* ============================================================
   App Recruta AI — destino de login/cadastro/checkout.
   axcel.dmventerprise.com.br está aposentado e só redireciona:
   o destino oficial agora é app.recrutaai.ia.br.
   ============================================================ */
export const APP_URL = 'https://app.recrutaai.ia.br'
export const LOGIN_URL = `${APP_URL}/login`
export const CADASTRO_URL = `${APP_URL}/cadastro`

/* Página pública de planos (checkout Pix/cartão ligado à conta).

   Desde ago/2026 existe UM plano pago só, vendido em dois ciclos (mensal e
   trimestral). O slug segue 'max' porque é o valor de recruta_ai.plano no app —
   role, gating e provisionamento não mudaram; o que mudou foi a vitrine.
   'basico' e 'axcel' viraram legado: ninguém novo assina, mas quem já assinava
   manteve o preço. Não usar nos CTAs.

   `ciclo` pré-seleciona o seletor da /planos (o app valida contra a união
   literal e ignora valor inválido). Sem ele, a página abre em mensal. */
export const planosUrl = (
  slug?: 'basico' | 'axcel' | 'max',
  ciclo?: 'mensal' | 'trimestral',
) => {
  const qs = [slug && `plano=${slug}`, ciclo && `ciclo=${ciclo}`]
    .filter(Boolean)
    .join('&')
  return `${APP_URL}/planos${qs ? `?${qs}` : ''}`
}

/* Webhook n8n que recebe o lead do recrutador e dispara e-mail
   para enterprise.dmv7@gmail.com. Criar em n8n.dmventerprise.com.br
   com CORS liberado para https://recrutaai.ia.br. */
export const RECRUITER_WEBHOOK_URL = 'https://n8n.dmventerprise.com.br/webhook/recruiter-lead'
