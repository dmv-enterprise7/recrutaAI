# Brief de Reformulação — Landing Recruta AI (v2, pós-reunião Wellington)

> Documento de direção para a reformulação da landing + ambiente integrado.
> Base: reunião de estratégia da Recruta AI com Wellington. Escopo: **só Recruta AI**
> (a DMV Enterprise tem presença separada). Espírito da reunião: **sprint rápido,
> perfeição não existe** — decidir, executar, ajustar nos grupos.

---

## 1. A essência (o que a Recruta AI é de verdade)

A Recruta AI **não é "faz currículo"** (isso o GPT faz em 1 minuto). A ideia é
**tirar a pessoa da invisibilidade** — mostrar o que o algoritmo escondeu, o que a
pessoa não conseguiu deixar claro, e colocá-la de mãos dadas numa **trilha de
reposicionamento** até o emprego que ela quer.

**Produto-núcleo:** a trilha de reposicionamento (quase finalizada). Não é uma
ferramenta avulsa de CV — é o parceiro que acompanha a jornada e ensina a pessoa a
**falar a linguagem do mercado** de óleo & gás.

**Nicho:** óleo & gás / planejamento. Fechado.

---

## 2. A grande decisão nova: personificar no Wellington

A marca ganha rosto. Ninguém compra um sistema de alguém que nunca viu — precisa de
**toque humano**. O Wellington é a personificação:

- 20+ anos de experiência, Black Belt em planejamento, passou por multinacionais
  bilionárias no Brasil e fora.
- A história dele é a prova viva: "passei por isso e hoje estou onde estou porque
  aprendi a falar a língua que os recrutadores querem ouvir."
- Gatilho de desejo: as pessoas veem o Wellington e pensam **"quero ser igual a
  ele"** — e se para isso custa R$49–59/mês, elas pagam.

**Regra de comunicação:** sempre trazer a mensagem para a realidade do Wellington
(primeira pessoa, "isso aconteceu comigo"), mantendo a identidade da Recruta AI.
Cuidado: palestras/aulas de reposicionamento são **Recruta AI**, não o curso PLN
(são coisas separadas).

---

## 3. A narrativa emocional (o coração da landing e dos anúncios)

O storytelling que resume a missão (curta-metragem em produção com filmmaker parceiro):

> A pessoa sai da Bahia, 30h de ônibus, dorme num colchonete no chão na casa de um
> amigo, acorda 2h da madrugada, pega fila debaixo de chuva e frio, 10–12h sem comer,
> currículo na pastinha. Entrega o papel na mão do recrutador — que dá uma risadinha
> e joga numa gaveta de descartáveis.

Essa é a dor. A Recruta AI é a saída dela. **A compra acontece na emoção, não na
lógica** — a landing e os criativos têm que personificar essa dor e a virada.

---

## 4. Ambiente integrado (o "ecossistema" — muda o fluxo de entrada)

Hoje o problema: a pessoa digita o domínio e **cai direto numa tela de login** que
ela não entende. Isso acaba.

**Novo fluxo:**
1. Pessoa entra pelo domínio → **cai na landing primeiro** (não no login).
2. A landing explica o que é o sistema, o que tem dentro, os planos, o que ganha no
   grátis vs no pago — com um **vídeo do fundador/Wellington** dando o toque humano.
3. Botões de **login / cadastre-se** no topo.
4. **Link de vaga:** clicar num link de vaga → login → **redireciona direto para
   aquela vaga** (hoje cai numa tela genérica e a pessoa se perde). Correção de app.
5. **Login com Google (OAuth)** além de e-mail — agilidade para a massa.
6. **Onboarding estendido e melhor** (não mais leve): a trilha de reposicionamento
   precisa entender o perfil a fundo. Mas **não é a primeira coisa** — a pessoa
   explora antes; o "conclua seu perfil" vem depois.

A landing vira o hub: chamadas para LinkedIn, Instagram, vagas, cases, notas de
atualização. Tudo aponta para um lugar só: `recrutaai.ia.br`.

---

## 5. Mapa de seções da landing

1. **Hero** — dor personificada (invisibilidade) + promessa de reposicionamento +
   CTA "Comece de graça". Vídeo/rosto do Wellington logo no topo.
2. **Vídeo do fundador** — 1 min explicando o que é a Recruta AI, com a cara do
   Wellington. Toque humano = confiança.
3. **A narrativa** — a história (seção 3), personificada. "Isso acontece todo dia
   com milhares de profissionais de óleo & gás."
4. **Como funciona / a trilha de reposicionamento** — os passos da jornada, não só
   "análise de CV".
5. **A plataforma por dentro** — desmembrar o que já existe: análise ATS · reescrita
   de CV por vaga · IA Axcel · treino de entrevista por voz · score explicado.
6. **Vagas no seu e-mail** — a mecânica (ver seção 6). "Você escolhe o que quer,
   recebe isso e o que é parecido."
7. **Prova social / números** — ver seção 7.
8. **Comunidade** — 3 grupos com 1000+ pessoas cada; visão diária de conteúdo da
   área. Cresce o olho: "os caras têm comunidade, é isso que eu preciso."
9. **Planos** — grátis (vê o score do CV) → R$19,90 e acima (trilha completa).
10. **Recrutadores (B2B)** — publiquem vagas / triem candidatos. Ver seção 8.
11. **FAQ** — objeções do nicho (só Macaé? offshore? preciso saber de tecnologia?).
12. **CTA final** — "Comece de graça", distribuído ao longo da página.

---

## 6. Mecânica de vagas por e-mail (confirmada e ampliada)

- **Acaba o grupo VIP para disparo** (não escala; os grupos gerais do Wellington
  continuam como comunidade).
- Onboarding captura perfil + interesses → **disparo por e-mail** só do que a pessoa
  quer. Modelo de referência: site da Rallyburton (a pessoa escolhe o cargo e recebe
  aquele cargo **+ cargos semelhantes** — planejador → coordenador de plataforma).
- **Semelhança de cargos, nunca ranking** ("vaga melhor/pior" é relativo).
- Banco de vagas cresce com Adzuna + Jooble (LinkedIn scraping fora — risco jurídico).

⚠️ **Dependência de backend:** esse motor (match por perfil + semelhança + disparo
por e-mail) ainda não existe assim no n8n. A landing pode prometer e já capturar o
cadastro grátis; o disparo acende conforme o backend fica pronto.

---

## 7. Prova social (números aprovados — framing de venda)

Não é mentira — é como se conta. A compra é emoção:

- **"Mais de 3.000 profissionais de petróleo & gás atendidos"** (a base dos grupos
  do Wellington, sendo abastecida com vagas).
- **3 grupos com 1000+ pessoas cada** — comunidade ativa.
- **"200 usuários ativos / 200 pessoas já melhorando o currículo"** — gatilho de
  FOMO: "tem 3.000 pessoas se reposicionando e eu tô de fora?".

---

## 8. B2C + B2B (dois motores)

- **B2C** (individual): ~200 pessoas em modo individual. Recorrência é o alvo —
  manter base ativa. Produto é **passageiro por natureza** (a pessoa usa ~6 meses até
  se reposicionar), mas o nicho é **volátil** (sempre buscando nova oportunidade), o
  que dá vida útil ao sistema.
- **B2B** (recrutadores / head hunters / empresas): **"o boom"**. Uma chamada de
  recrutador = milhares de candidatos (multirão), não um/dois. A infra precisa
  aguentar: não cair, não travar no meio de uma campanha. Isso conecta com a
  Fase B / escala da VPS (Recruta AI já foi isolado em VPS + banco próprios; gateway
  de pagamento rodando).

---

## 9. Marca e identidade (sprint rápido, sem sobre-polir)

- **Domínio profissional:** ✅ `recrutaai.ia.br` no ar (era pré-requisito de imagem).
- **Nome:** fica **Recruta AI**.
- **Logo:** Pellegrino gosta da atual, mas acha que dá pra fazer melhor — revisar
  **rápido**, sem travar o resto.
- **Brand guideline / paleta:** dar uma olhada, ajustes sutis mas importantes. Regra
  da reunião: **não perder tempo demais** — sprint, aprovar nos grupos, seguir.
- **Personalidade/valores da Recruta AI:** estruturar e passar pro grupo para todos
  se alinharem antes de comunicar externamente.

---

## 10. Funil de marketing → landing (contexto que a landing precisa suportar)

Exemplo de criativo aprovado (VSL curta, LinkedIn + Instagram):
> "Tenho 20 anos de experiência, Black Belt, trabalhei em várias multinacionais.
> Você sabe o que NÃO te contam na hora de pedirem seu currículo? Tenho segredos que
> posso te destravar — de graça." → **Saiba mais** → landing → vídeo de 1 min →
> "entra de graça, vê o score do seu CV, ou se reposiciona com o método comprovado
> que eu usei" → assina R$19,90.

A landing precisa entregar exatamente esse destino: vídeo, score grátis, método,
cadastro grátis. Marketing: Wellington lidera LinkedIn (experiência/treinamentos),
Instagram foca engajamento/emoção (reels 30s, rosto dos fundadores). Carlos executa,
os três fundadores supervisionam/aprovam nos grupos.

---

## 11. Decisões fechadas vs. abertas

**Fechadas:**
- Nicho óleo & gás · nome Recruta AI · escopo só Recruta AI · domínio `recrutaai.ia.br`.
- Personificar no Wellington · landing antes do login (ambiente integrado) · login Google.
- Disparo por e-mail (fim do grupo VIP) · vagas por semelhança · CTA no cadastro grátis.
- Contrato 80/20 (DMV 80% / Wellington 20%) em P.I. e faturamento; Wellington paga
  ~R$220–230 de custo (domínio + futuro tráfego pago). Contrato novo — área do Daniel.

**Abertas (bater na reunião de layout / grupo):**
- Personalidade/valores/paleta finais da marca.
- Segurar a landing até o motor de e-mail existir, ou lançar antes com cadastro grátis.
- Quantas vagas/dia na promessa (1 free / 3 pago / configurável).
- Recruta AI Class (aulas presenciais/palestras do Wellington) — quando entra.

---

## 12. O que já está pronto (não re-decidir)

- Domínio `recrutaai.ia.br` no ar (Cloudflare Pages, SSL, SEO, Search Console).
- Deploy da landing por CLI funcionando.
- Recruta AI isolado em VPS + banco de dados próprios; gateway de pagamento rodando.
- Plano técnico da unificação landing+app (Fase B — `app.recrutaai.ia.br`) desenhado,
  aguardando execução com o Mariel. A correção "link de vaga → redirect" entra aqui.
