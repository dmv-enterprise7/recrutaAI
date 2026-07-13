'use client'
/* Recruta AI v2 — Recrutador (faixa) + CTA final + Footer · port de src-v2/close.jsx */
import { Logo } from '@/components/brand/Logo'
import { VITOR_WA, WA_NUMBER, WA_TEXT } from '@/lib/constants'
import { ArrowIcon, WaIcon } from './parts'

export function RecStrip() {
  return (
    <section className="section" id="recrutador" style={{ paddingTop: 0, borderBottom: 'none' }}>
      <div className="container">
        <div className="rec-strip reveal">
          <div className="rec-strip__text">
            <div className="rec-strip__eyebrow">Para quem contrata</div>
            <h3>É recrutador? O acesso é por avaliação.</h3>
            <p>
              Pra manter a qualidade do pool, a DMV avalia cada pedido antes de liberar o painel. Fale direto com o
              Vitor: sem deck, sem reunião de uma hora.
            </p>
          </div>
          <div className="rec-strip__actions">
            <a href={VITOR_WA} target="_blank" rel="noopener" className="btn btn-gold btn-lg">
              <WaIcon />
              <span>Falar com o Vitor</span>
            </a>
            <a href={VITOR_WA} target="_blank" rel="noopener" className="rec-strip__num">
              +55 21 97349-5805 · Co-fundador DMV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CTAFinalV2() {
  return (
    <section className="cta-v2" id="cta">
      <div className="cta-v2__grid" aria-hidden="true"></div>
      <div className="cta-v2__inner reveal">
        <div className="cta-kinetic">
          <span className="cta-kinetic__l cta-kinetic__l--1">Bora</span>
          <span className="cta-kinetic__l cta-kinetic__l--2">resolver</span>
          <span className="cta-kinetic__l cta-kinetic__l--3">
            <em>isso</em>?
          </span>
        </div>
        <p>
          Veja o seu score agora. É de graça, não pede cartão e leva menos de dois minutos pra descobrir o quanto do
          seu currículo está invisível.
        </p>
        <div className="cta-v2__ctas">
          <a href={WA_TEXT('Oi! Quero ver meu score grátis no Recruta AI.')} target="_blank" rel="noopener" className="btn btn-emerald btn-lg">
            <span>Quero procurar uma oportunidade</span>
            <ArrowIcon />
          </a>
          <a href={WA_TEXT('Oi! Vim da landing do Recruta AI e queria falar com vocês.')} target="_blank" rel="noopener" className="btn btn-textlink btn-lg">
            <WaIcon />
            <span>Falar com a gente no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function FooterV2() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Logo variant="dark" width={150} />
          <p className="footer-meta">
            Plataforma de reposicionamento de carreira em óleo &amp; gás, da{' '}
            <b style={{ color: 'var(--linen)' }}>DMV Enterprise</b>.
            <br />
            A gente tira da invisibilidade quem já provou que sabe trabalhar. Sem corporativês, sem militarês.
            <br />
            Macaé/RJ · Brasil
          </p>
        </div>
        <div className="footer-col">
          <h4>A jornada</h4>
          <ul>
            <li>
              <a href="#filtro">O filtro invisível</a>
            </li>
            <li>
              <a href="#jornada">A jornada</a>
            </li>
            <li>
              <a href="#wellington">Quem te guia</a>
            </li>
            <li>
              <a href="#planos">Planos</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Ecossistema DMV</h4>
          <ul>
            <li>
              <a href="#recrutador">Para empresas</a>
            </li>
            <li>
              <a href={WA_TEXT('Oi! Quero ver meu score grátis no Recruta AI.')} target="_blank" rel="noopener">
                Ver meu score grátis
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener">
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Institucional</h4>
          <ul>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Termos de Uso</a>
            </li>
            <li>
              <a href="#">Política de Cookies</a>
            </li>
            <li>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 DMV Enterprise. Feito em Macaé/RJ.</span>
        <span>Recruta AI · +3.000 profissionais de óleo &amp; gás</span>
      </div>
    </footer>
  )
}
