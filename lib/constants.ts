export const WA_NUMBER = '5522998523511'

export const WA_LINK = (planName: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Oi, vim da landing do Recruta AI e tenho interesse no plano ${planName}.`
  )}`

export const VITOR_WA = `https://wa.me/5521973495805?text=${encodeURIComponent(
  'Oi Vitor, vim pela landing do Recruta AI e queria entender o acesso de recrutador.'
)}`
