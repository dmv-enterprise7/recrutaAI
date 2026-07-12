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
   Hoje: axcel.dmventerprise.com.br. Quando a Fase B subir o
   app.recrutaai.ia.br, basta trocar APP_URL aqui (1 linha).
   ============================================================ */
export const APP_URL = 'https://axcel.dmventerprise.com.br'
export const LOGIN_URL = `${APP_URL}/login`
export const CADASTRO_URL = `${APP_URL}/cadastro`

/* Página pública de planos (checkout Pix/cartão ligado à conta).
   slug: 'basico' | 'axcel' | 'max' — casa com recruta_ai.plano no app. */
export const planosUrl = (slug?: 'basico' | 'axcel' | 'max') =>
  `${APP_URL}/planos${slug ? `?plano=${slug}` : ''}`

/* Webhook n8n que recebe o lead do recrutador e dispara e-mail
   para enterprise.dmv7@gmail.com. Criar em n8n.dmventerprise.com.br
   com CORS liberado para https://recrutaai.ia.br. */
export const RECRUITER_WEBHOOK_URL = 'https://n8n.dmventerprise.com.br/webhook/recruiter-lead'
