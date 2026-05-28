import { Logo } from '@/components/brand/Logo'
import { WA_LINK, WA_NUMBER } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Logo variant="dark" width={150} />
          <p className="footer-meta">
            ATS inteligente da <b style={{ color: 'var(--linen)' }}>DMV Enterprise</b>.<br />
            Recrutamento técnico industrial. Sem caixa-preta, sem militarismo, sem corporativês.<br />
            Macaé/RJ · Brasil
          </p>
        </div>
        <div className="footer-col">
          <h4>Produto</h4>
          <ul>
            <li><a href="#demo">Antes e depois</a></li>
            <li><a href="#how">Como funciona</a></li>
            <li><a href="#features">Recursos</a></li>
            <li><a href="#planos">Planos</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Ecossistema DMV</h4>
          <ul>
            <li><a href="#cursos">Cursos Planejamento&amp;Etc</a></li>
            <li><a href="#cursos">Pacote completo</a></li>
            <li><a href="#recrutador">Para empresas</a></li>
            <li><a href={WA_LINK('Empresa')} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Institucional</h4>
          <ul>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Política de Cookies</a></li>
            <li>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 DMV Enterprise. Feito em Macaé/RJ.</span>
        <span>Recruta AI v1.0 · Beta aberto · +500 validações</span>
      </div>
    </footer>
  )
}
