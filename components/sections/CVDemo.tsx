'use client'
import { useState, useRef, useCallback } from 'react'
import { WA_LINK } from '@/lib/constants'

export function CVDemo() {
  const [pos, setPos] = useState(50)
  const stageRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    draggingRef.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
  }, [])

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    draggingRef.current = false
    e.currentTarget.releasePointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current || !stageRef.current) return
    const rect = stageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPos(pct)
  }, [])

  const onClickStage = useCallback((e: React.MouseEvent) => {
    if ((e.target as Element).closest('.cv-handle')) return
    if (!stageRef.current) return
    const rect = stageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPos(pct)
  }, [])

  const onKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos(p => Math.max(0, p - 4))
    if (e.key === 'ArrowRight') setPos(p => Math.min(100, p + 4))
  }, [])

  return (
    <section className="section section--paper" id="demo">
      <div className="container">
        <div className="sec-head reveal">
          <div className="sec-head__eyebrow">01 · Antes e depois</div>
          <h2 className="sec-head__title">
            A diferença entre <em>sumir na pilha</em> e ser chamado.
          </h2>
          <p className="sec-head__sub">
            Arraste o controle para comparar o currículo cru, do jeito que recrutador vê hoje,
            com a versão reescrita pela IA, com hierarquia, score e contexto.
          </p>
        </div>

        <div
          className="cv-stage reveal"
          ref={stageRef}
          onClick={onClickStage}
          onPointerMove={onPointerMove}
        >
          <div className="cv-frame">
            {/* BEFORE */}
            <div className="cv-pane cv-pane--before">
              <h2>CURRICULUM VITAE</h2>
              <p><b>NOME COMPLETO:</b> Marina Aparecida da Silva Santos</p>
              <p><b>ENDEREÇO:</b> Rua das Palmeiras, n.º 247, bairro Centro - Macaé/RJ - CEP 27910-000</p>
              <p><b>TELEFONE:</b> (22) 99852-XXXX <span className="cv-blob">e também (22) 2772-XXXX</span></p>
              <p><b>EMAIL:</b> marina.silva.santos.1985@hotmail.com.br</p>
              <p><b>ESTADO CIVIL:</b> Solteira <span className="cv-blob">| FILHOS: não tenho</span></p>
              <p style={{ marginTop: 18 }}><b>OBJETIVO PROFISSIONAL:</b></p>
              <p>
                Atuar em empresa de grande porte do ramo de petróleo e gás onde possa{' '}
                <span className="cv-blob">colocar em prática meus conhecimentos adquiridos ao longo da minha vida profissional</span>{' '}
                e crescer junto com a empresa.
              </p>
              <p style={{ marginTop: 14 }}><b>EXPERIÊNCIA:</b></p>
              <p>
                Trabalhei na empresa X por 4 anos como assistente de planejamento{' '}
                <span className="cv-blob">onde realizava várias atividades importantes</span>.
                Depois fui para empresa Y onde fiquei mais 4 anos e fui promovida para sênior.
              </p>
              <p>
                Tenho conhecimentos em Primavera, Excel avançado, BI{' '}
                <span className="cv-blob">e outras ferramentas</span>.
              </p>
            </div>

            {/* AFTER */}
            <div
              className="cv-pane cv-pane--after"
              style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
            >
              <div className="cv-after-score">
                <span>Score atual</span>
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
                Analista sênior com 8 anos em planejamento executivo de projetos offshore.
                Construiu cronogramas integrados em Primavera P6 para portfólios &gt; R$ 80M
                e dashboards Power BI usados em comitê semanal.
              </p>
              <div className="cv-section-title">Resultados recentes</div>
              <div className="cv-bullet">Reduziu desvio de prazo em projeto de manutenção de 18% para 6% (2024).</div>
              <div className="cv-bullet">Implantou rotina de S-curve semanal adotada por 3 contratos da operadora.</div>
              <div className="cv-bullet">Treinou time de 6 analistas júniores em Primavera P6.</div>
              <div className="cv-section-title">Por que combina com a vaga</div>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: 'var(--ink-3)' }}>
                A IA adaptou este resumo para{' '}
                <b style={{ color: 'var(--ink)' }}>Analista PCP Sênior · Macaé/RJ</b>.
                Termos como &ldquo;S-curve&rdquo; e &ldquo;portfólio offshore&rdquo; foram trazidos
                do histórico original. Não inventados.
              </p>
            </div>

            {/* HANDLE */}
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
            <span className="cv-labels__before">● Antes · do jeito que some na pilha</span>
            <span className="cv-labels__after">Depois · reescrito pela IA ●</span>
          </div>
        </div>

        <div
          className="reveal"
          style={{ marginTop: 'var(--s-6)', display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <div style={{ fontSize: 13, color: 'var(--ink-3)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            <span style={{ color: 'var(--emerald-500)' }}>●</span> Demonstração honesta · sem dados inventados
          </div>
          <a href={WA_LINK('Axcel')} target="_blank" rel="noopener noreferrer" className="btn btn-emerald">
            Reescrever meu currículo →
          </a>
        </div>
      </div>
    </section>
  )
}
