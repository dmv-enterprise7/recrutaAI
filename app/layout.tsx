import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const SITE_URL = 'https://recrutaai.ia.br'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Recruta AI — Seu currículo deixou de ser invisível',
  description:
    'ATS inteligente que reescreve currículos por vaga e entrega candidatos triados com score explicado. Recrutador é grátis.',
  alternates: { canonical: '/' },
  icons: { icon: '/logos/favicon.svg' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Recruta AI',
    title: 'Recruta AI — Seu currículo deixou de ser invisível',
    description:
      'ATS inteligente que reescreve currículos por vaga e entrega candidatos triados com score explicado. Recrutador é grátis.',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recruta AI — Seu currículo deixou de ser invisível',
    description:
      'ATS inteligente que reescreve currículos por vaga e entrega candidatos triados com score explicado.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
