'use client'
/* Recruta AI v2 — Seção 01 · O FILTRO INVISÍVEL (vilão) + sintoma (slider) · port de src-v2/villain.jsx */
import { useCallback, useRef, useState, type PointerEvent, type KeyboardEvent, type MouseEvent } from 'react'
import { CountUp, SecHead, useInView, type CSSVars } from './parts'

export function VillainV2() {
  const [ref, seen] = useInView({ threshold: 0.3 })
  return (
    <section className="section section--paper" id="filtro">
      <div className="container">
        <SecHead
          eyebrow="01 · O filtro invisível"
          title={
            <>
              A culpa não é do seu talento. É de uma etapa <em>invisível</em>.
            </>
          }
          sub="Antes de qualquer pessoa ler o seu currículo, um filtro automático já decidiu se você passa. Quem não fala a língua dele é descartado calado, sem nunca saber por quê."
        />

        <div className="villain-grid reveal">
          <div className="villain-copy">
            <p>
              Você mandou o currículo pra dezenas de vagas e não teve resposta.{' '}
              <span className="hl">Não foi falta de experiência.</span> Foi um sistema que lê palavra-chave, formato e
              estrutura antes de um humano bater o olho.
            </p>
            <p>
              É esse filtro que separa quem <em>aparece</em> de quem some na pilha. Bom profissional de campo,
              embarcado, de planejamento, fica de fora por um detalhe de formatação que ninguém te contou.
            </p>
            <p>
              A Recruta AI começa exatamente aí: mostrando onde você trava nesse filtro e o que fazer pra passar por
              ele sem trair quem você é.
            </p>
          </div>

          <div className="scope" aria-label="Diagrama: de 247 currículos recebidos, 12 chegam a um humano">
            <div className="scope__glow" aria-hidden="true"></div>
            <div className="scope__top">
              <span className="scope__tag">Triagem · vaga real de PCP Sênior</span>
              <span className="scope__live">
                <span className="scope__dot"></span>dado real
              </span>
            </div>
            <div className="scope__hero">
              <CountUpNum end={247} className="scope__num" />
              <span className="scope__unit">currículos recebidos</span>
            </div>
            <div className={`barcode ${seen ? 'is-seen' : ''}`} ref={ref} aria-hidden="true">
              {Array.from({ length: 48 }).map((_, i) => (
                <span
                  key={i}
                  className={`barcode__bar ${PASS_IDX.has(i) ? 'barcode__bar--pass' : ''}`}
                  style={{ '--h': `${28 + ((i * 37) % 64)}%`, '--d': `${i * 22}ms` } as CSSVars}
                ></span>
              ))}
            </div>
            <div className="scope__rows">
              <div className="scope__row">
                <span className="scope__row-k">
                  <CountUpNum end={12} />
                </span>
                <span className="scope__row-l">chegam a um humano</span>
                <span className="scope__row-pct">4,8%</span>
              </div>
              <div className="scope__row scope__row--bad">
                <span className="scope__row-k">
                  <CountUpNum end={235} />
                </span>
                <span className="scope__row-l">
                  descartados por um filtro,
                  <br />
                  antes de alguém ler
                </span>
                <span className="scope__row-pct">95,2%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="symptom-head reveal">
          <h3>
            O currículo é só o <em>sintoma</em>.
          </h3>
          <p>
            Arraste pra ver a diferença entre o jeito que o filtro te lê hoje e como você aparece quando alguém te
            posiciona direito. Mesma pessoa, mesma história, sem inventar nada.
          </p>
        </div>

        <CVSlider />
      </div>
    </section>
  )
}

/* mini-gráfico "código de barras": muitas barras, poucas acesas (os que passam) */
const PASS_IDX = new Set([6, 19, 33, 41])

/* CountUp local (mesmo comportamento do design) */
function CountUpNum({ end, className }: { end: number; className?: string }) {
  return <CountUp end={end} className={className} />
}

/* Slider antes/depois — reaproveitado como evidência do vilão */
function CVSlider() {
  const [pos, setPos] = useState(50)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const draggingRef = useRef(false)
  const setFromX = (clientX: number) => {
    if (!stageRef.current) return
    const rect = stageRef.current.getBoundingClientRect()
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
    setPos(pct)
  }
  const onPointerDown = useCallback((e: PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }, [])
  const onPointerUp = useCallback((e: PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false
    e.currentTarget.releasePointerCapture?.(e.pointerId)
  }, [])
  const onPointerMove = useCallback((e: PointerEvent<HTMLDivElement>) => {
    if (draggingRef.current) setFromX(e.clientX)
  }, [])
  const onClickStage = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('.cv-handle')) return
    setFromX(e.clientX)
  }, [])
  const onKey = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4))
  }, [])

  return (
    <div className="cv-stage reveal" ref={stageRef} onClick={onClickStage} onPointerMove={onPointerMove} style={{ marginTop: 0 }}>
      <div className="cv-frame">
        <div className="cv-pane cv-pane--before">
          <h2>CURRICULUM VITAE</h2>
          <p>
            <b>NOME COMPLETO:</b> Marina Aparecida da Silva Santos
          </p>
          <p>
            <b>ENDEREÇO:</b> Rua das Palmeiras, n.º 247, bairro Centro - Macaé/RJ - CEP 27910-000
          </p>
          <p>
            <b>TELEFONE:</b> (22) 99852-XXXX <span className="cv-blob">e também (22) 2772-XXXX</span>
          </p>
          <p>
            <b>EMAIL:</b> marina.silva.santos.1985@hotmail.com.br
          </p>
          <p>
            <b>ESTADO CIVIL:</b> Solteira <span className="cv-blob">| FILHOS: não tenho</span>
          </p>
          <p style={{ marginTop: 18 }}>
            <b>OBJETIVO PROFISSIONAL:</b>
          </p>
          <p>
            Atuar em empresa de grande porte do ramo de petróleo e gás onde possa{' '}
            <span className="cv-blob">colocar em prática meus conhecimentos adquiridos ao longo da minha vida profissional</span>{' '}
            e crescer junto com a empresa.
          </p>
          <p style={{ marginTop: 14 }}>
            <b>EXPERIÊNCIA:</b>
          </p>
          <p>
            Trabalhei na empresa X por 4 anos como assistente de planejamento{' '}
            <span className="cv-blob">onde realizava várias atividades importantes</span>. Depois fui para empresa Y
            onde fiquei mais 4 anos e fui promovida para sênior.
          </p>
          <p>
            Tenho conhecimentos em Primavera, Excel avançado, BI <span className="cv-blob">e outras ferramentas</span>.
          </p>
        </div>

        <div className="cv-pane cv-pane--after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <div className="cv-after-score">
            <span>Raio-x</span>
            <span className="cv-after-score__num">94</span>
          </div>
          <h3 className="cv-name">Marina Silva</h3>
          <div className="cv-role">Analista de Planejamento Sênior · Macaé/RJ</div>
          <div className="cv-chips">
            <span className="cv-chip">Primavera P6</span>
            <span className="cv-chip">Power BI</span>
            <span className="cv-chip">PMO</span>
            <span className="cv-chip">8 anos</span>
          </div>
          <div className="cv-section-title">Resumo</div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)' }}>
            Analista sênior com 8 anos em planejamento executivo de projetos offshore. Construiu cronogramas integrados
            em Primavera P6 para portfólios &gt; R$ 80M e dashboards Power BI usados em comitê semanal.
          </p>
          <div className="cv-section-title">Resultados recentes</div>
          <div className="cv-bullet">Reduziu desvio de prazo em manutenção de 18% para 6% (2024).</div>
          <div className="cv-bullet">Implantou rotina de S-curve semanal adotada por 3 contratos.</div>
          <div className="cv-bullet">Treinou time de 6 analistas júniores em Primavera P6.</div>
          <div className="cv-section-title">Por que combina com a vaga</div>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: 'var(--ink-3)' }}>
            Posicionado para <b style={{ color: 'var(--ink)' }}>Analista PCP Sênior · Macaé/RJ</b>. Termos como
            &quot;S-curve&quot; e &quot;portfólio offshore&quot; vieram do histórico dela. Nada inventado.
          </p>
        </div>

        <div
          className="cv-handle"
          style={{ left: `calc(${pos}% - 1px)` }}
          role="slider"
          tabIndex={0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-label="Arrastar para comparar antes e depois"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onKeyDown={onKey}
        >
          <div className="cv-handle__grip" />
        </div>
      </div>
      <div className="cv-labels">
        <span className="cv-labels__before">● Antes · como o filtro te lê</span>
        <span className="cv-labels__after">Depois · como você aparece ●</span>
      </div>
    </div>
  )
}
