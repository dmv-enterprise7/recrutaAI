# Landing Recruta AI — recrutaai.ia.br

## O que é este repositório

Landing page da **Recruta AI** — plataforma de **recolocação/reposicionamento de carreira em óleo & gás / planejamento** (produto da DMV Enterprise, app em `dmv-tutor-plnetc`). Next.js 15 (App Router) + React 19 + TypeScript, **export estático** (`output: 'export'` → pasta `out/`), CSS por tokens em `app/globals.css` (v1) + `app/styles/landing-v2.css` (v2).

## Posicionamento do produto (decidido nas reuniões de estratégia, jul/2026)

- **NÃO é "gerador de currículo"** (isso o GPT faz). É o parceiro que **tira o profissional da invisibilidade**: diagnostica onde trava no filtro ATS, ensina a falar a língua de quem contrata e o recoloca no mercado. Produto-núcleo = **trilha de reposicionamento**.
- **Nicho fechado:** óleo & gás / planejamento (onshore, offshore, embarcado). Base real: Macaé/RJ, ~3.000 profissionais nos grupos.
- **Marca personificada no Wellington Martins** — 20+ anos em multinacionais, Black Belt em planejamento, hoje do lado de quem contrata. **Axcel** = o método dele virado mentor de IA. Palestras/aulas de reposicionamento são Recruta AI (não confundir com o curso PLN — coisas separadas).
- **Voz:** direto, caloroso sem ser bobo, específico, honesto (a IA erra e a marca admite). NUNCA militar ("soldado/missão"), nunca corporativês, nunca buzzword. Ver `design_handoff_recruta_ai/VOICE.md` no projeto do Claude Design.
- **Compra é emoção:** narrativa da dor (fila na chuva, currículo na gaveta) > lista de features.
- **CTAs:** Navbar tem **Entrar** (`/login`) + **Criar conta grátis** (`/cadastro`) e os planos levam ao checkout do app; hero/CTA final ainda usam WhatsApp (5522998523511). Destinos do app centralizados em `lib/constants.ts` (`APP_URL` = axcel.dmventerprise.com.br hoje → trocar 1 linha quando a Fase B subir `app.recrutaai.ia.br`).
- **Planos → checkout:** botões vão pra `APP_URL/planos?plano=<basico|axcel|max>` (página pública com checkout Pix/cartão ligado à conta, Phase 65 do app). Grátis → `/cadastro`. NÃO existe link `buy.stripe.com` avulso — o checkout é logado, dentro do app. Slugs: free/basico/axcel/max.

## ⚠️ PENDÊNCIA — Webhook do formulário de recrutador

O form de recrutador (`components/v2/RecruiterForm.tsx`) faz POST pra `RECRUITER_WEBHOOK_URL` (`lib/constants.ts`), hoje apontando pra `https://n8n.dmventerprise.com.br/webhook/recruiter-lead`. **Mariel precisa criar esse webhook no n8n** que: (1) recebe o JSON `{tipo, origem, nome, email, empresa, cidade, telefone, mensagem, enviadoEm}`, (2) dispara e-mail pra **enterprise.dmv7@gmail.com**, (3) tem **CORS liberado pra `https://recrutaai.ia.br`** (senão o browser bloqueia o POST cross-origin). Se o path do webhook for outro, ajustar a constante. Enquanto não existir, o form mostra erro amigável ao enviar.

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
