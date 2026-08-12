# Landing Recruta AI — recrutaai.ia.br

## O que é este repositório

Landing page da **Recruta AI** — plataforma de **recolocação/reposicionamento de carreira em óleo & gás / planejamento** (produto da DMV Enterprise, app em `dmv-tutor-plnetc`). Next.js 15 (App Router) + React 19 + TypeScript, **export estático** (`output: 'export'` → pasta `out/`), CSS por tokens em `app/globals.css` (v1) + `app/styles/landing-v2.css` (v2).

## Posicionamento do produto (decidido nas reuniões de estratégia, jul/2026)

- **NÃO é "gerador de currículo"** (isso o GPT faz). É o parceiro que **tira o profissional da invisibilidade**: diagnostica onde trava no filtro ATS, ensina a falar a língua de quem contrata e o recoloca no mercado. Produto-núcleo = **trilha de reposicionamento**.
- **Nicho fechado:** óleo & gás / planejamento (onshore, offshore, embarcado). Base real: Macaé/RJ, ~3.000 profissionais nos grupos.
- **Marca personificada no Wellington Martins** — 20+ anos em multinacionais, Black Belt em planejamento, hoje do lado de quem contrata. **Axcel** = o método dele virado mentor de IA. Palestras/aulas de reposicionamento são Recruta AI (não confundir com o curso PLN — coisas separadas).
- **Voz:** direto, caloroso sem ser bobo, específico, honesto (a IA erra e a marca admite). NUNCA militar ("soldado/missão"), nunca corporativês, nunca buzzword. Ver `design_handoff_recruta_ai/VOICE.md` no projeto do Claude Design.
- **Compra é emoção:** narrativa da dor (fila na chuva, currículo na gaveta) > lista de features.
- **CTAs:** Navbar tem **Entrar** (`/login`) + **Criar conta grátis** (`/cadastro`) e os planos levam ao checkout do app; hero/CTA final ainda usam WhatsApp (5522998523511). Destinos do app centralizados em `lib/constants.ts` (`APP_URL` = **app.recrutaai.ia.br**; `axcel.dmventerprise.com.br` está aposentado e só redireciona).
- **Planos → checkout:** botões vão pra `APP_URL/planos?plano=<basico|axcel|max>` (página pública com checkout Pix/cartão ligado à conta, Phase 65 do app). Grátis → `/cadastro`. Gateway é **Asaas** (não Stripe). NÃO existe link de checkout avulso: o Asaas gera a URL da sessão na hora, logado, dentro do app (`POST /checkouts`). Slugs: free/basico/axcel/max.

## Rotas

- `/` — landing do **candidato** (componentes `components/v2/*`). A seção "Para quem contrata" (`#recrutador`) é só um **teaser** (`components/v2/RecruiterTeaser.tsx`) que aponta pra página do recrutador.
- `/recrutadores` — landing de **quem contrata** (`app/recrutadores/page.tsx` + `components/recrutadores/*` + `app/styles/recrutadores.css`, classes com prefixo `.rl-`). Header e rodapé próprios, com link "Sou candidato" de volta pra `/`. O formulário usa os mesmos campos e o mesmo webhook da home, via `lib/recruiterLead.ts`.
  - **Navbar segue o mesmo padrão visual da home** (2026-08-12): 4 links de seção, "Entrar" como link simples (não botão) e CTA primário em `.rl-btn--ink` (preto, igual ao "Criar conta grátis" da `Navbar.tsx`) — só os CTAs dentro do corpo da página (hero, faixa final) continuam verdes. Header em 3 blocos (`justify-content: space-between`) igual ao `.nav-inner` da home. Objetivo: quem navega da home pra cá não deve sentir que caiu num sistema diferente.
  - **Mensagem de complemento, não substituição** (2026-08-12): a página deixa explícito que a base de 3.000+ candidatos e outros canais do recrutador (LinkedIn etc.) se somam — não é "só use a nossa base" nem "só use o LinkedIn". Ver bloco "Dois canais, não um só" na seção `#virada` e a pergunta correspondente no FAQ.
- `components/v2/RecruiterForm.tsx` continua no repo mas **não está montado em nenhuma página** desde que o form completo migrou pra `/recrutadores`.

### Fonte da verdade do produto (o que pode e não pode ser dito em `/recrutadores`)

- São **dois scores separados**, nunca fundidos: **match candidato × vaga** (0 a 1, = `0.7 × similaridade semântica + 0.3 × proporção de habilidades da vaga`; abaixo de 0,50 não entra na lista) e **nota do currículo / ATS** (0 a 100, 6 eixos com pesos fixos: certificações 30, hard skills 25, experiência 20, idiomas 10, ATS-readability 10, soft skills 5).
- **Funil:** Triagem → Shortlist → Contatados → Recusados (+ Descartados só com a vaga encerrada). **Não existe desfazer.**
- **Não existe:** eixos "termos da vaga / tempo embarcado / escopo e escala / questionário", sugestão de pergunta por candidato, localização e tempo de candidatura no card, banco de talentos / vitrine / busca livre na base (desligado em produção, 404), plano pago do lado recrutador.
- **Números autorizados:** 3.000+ profissionais de óleo & gás, 3 grupos com 1.000+ pessoas cada, score em 6 eixos, 20+ anos de multinacionais, resposta em até 1 dia útil. **Nada de taxa de contratação, tempo de fechamento ou horas economizadas.**
- **Escrita:** sem travessão, sem emoji, sem "nossa IA / powered by AI", sem prometer contratação ou prazo, sem militarismo, sem "os melhores candidatos", primeira pessoa do plural. **A decisão é sempre do recrutador** precisa estar explícita na página.

## ✅ Webhook do formulário de recrutador — FUNCIONANDO (confirmado 2026-08-12)

O form de recrutador (`lib/recruiterLead.ts` → `RECRUITER_WEBHOOK_URL`, `lib/constants.ts`) faz POST pra `https://n8n.dmventerprise.com.br/webhook/recruiter-lead`. O workflow `dmv-recrutador-lead` (n8n, ativo) recebe o payload, monta um e-mail com o tema Recruta AI e manda pra **enterprise.dmv7@gmail.com** com `replyTo` do recrutador — confirmado lendo o workflow live via n8n-mcp. CORS aberto (`allowedOrigins: "*"`). Sem pendência.

## Design (fonte da verdade visual)

Projeto **Claude Design "dmv-recrutaai"** (`projectId c0d90083-a4a7-48be-84cf-414dc295acfe`, acesso via DesignSync MCP). A landing v2 implementada aqui é port fiel de `src-v2/*.jsx` + `assets/landing-v2.css` de lá. ⚠️ A API corta arquivos em 256KB — binários grandes (fotos) precisam ser trazidos manualmente pra máquina.

Tokens: linen/paper/ink + emerald (primário) + gold (acento <5%). Fontes: Instrument Serif (display) + Geist + Geist Mono, via `next/font` (variáveis mapeadas no `globals.css`).

## 🅿️ IDEIA GUARDADA — Seção "Prova / Histórias de recolocação"

**Decisão de 11/07/2026 (Daniel):** a seção de depoimentos foi **retirada da página** até existirem histórias **reais, verificadas e autorizadas** (LGPD) — não publicar placeholder nem depoimento inventado. **Vamos implementar quando os casos existirem.**

- O componente está **pronto e guardado** em `components/v2/Voices.tsx` (design: card grande com a primeira história + coluna com 2 histórias curtas de funções diferentes; prints de WhatsApp autorizados valem).
- **Para reativar:** montar `<VoicesV2 />` em `app/page.tsx` (entre Wellington e Planos), renumerar eyebrows (Planos volta a 07, FAQ a 08) e restaurar o link "Histórias" (`#vozes`) na Navbar e no Footer.
- Conteúdo necessário: 1 história longa (nome, função, base, com consentimento) + 2 curtas de funções diferentes.

## Deploy

- **Produção:** Cloudflare Pages, projeto `recruta-ai-landing` → `recrutaai.ia.br`. Manual: `npm run build` + `npx wrangler pages deploy out --project-name recruta-ai-landing --branch main` (conta enterprise.dmv7@gmail.com, `wrangler login`).
- **GitHub Pages (legado):** todo push na `main` ainda publica no endereço antigo (workflow com `GITHUB_PAGES=true` para o basePath). Desligar após consolidação do domínio.
- SEO: metadataBase/OG/robots/sitemap em `app/layout.tsx` + `app/robots.ts` + `app/sitemap.ts`, apontando `https://recrutaai.ia.br`. Search Console verificado (propriedade tipo Domínio).
- **Sempre `npm run build` antes de push** — o export estático pega erros que o dev não pega.

## Regras de trabalho

- **Consultar o Daniel antes de alterar/publicar** — propor plano, aguardar OK explícito. Nada vai ao ar sem aprovação.
- Números públicos (3.000 profissionais, 449 vagas/mês, ~15/dia, 3 vagas/dia no e-mail, 6 eixos) são **reais e aprovados** — não inventar métricas novas sem confirmação.
- Copy sempre em PT-BR coloquial-profissional; nunca mencionar tecnologia interna (n8n, GPT, prompts) em texto voltado ao público.
