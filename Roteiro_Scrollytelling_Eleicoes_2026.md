# 🎬 ROTEIRO DE PRODUÇÃO — SCROLLYTELLING: ELEIÇÕES 2026

> **Projeto**: Site Scrollytelling interativo sobre as Eleições Presidenciais Brasileiras de 2026
> **Direção & Roteiro**: Antigravity (Claude Opus 4.6)
> **Pesquisa de Conteúdo**: Gemini 2.5 Pro (Fase 1)
> **Desenvolvimento Front-End**: Claude Sonnet 4.6 (Fase 2)
> **Data de Criação**: 24 de agosto de 2026
> **Hospedagem**: Local (localhost)

---

## 📋 SUMÁRIO EXECUTIVO

### Conceito
Uma experiência narrativa digital imersiva no formato **Scrollytelling** (narrativa guiada pelo scroll), que apresenta de forma **100% imparcial** o cenário político-econômico brasileiro e os 6 principais candidatos à Presidência em 2026.

### Diferencial
- Cores do site **mudam dinamicamente** conforme o candidato em foco (cores do partido)
- Dados econômicos e eleitorais **reais e atualizados** (agosto/2026)
- **Contadores animados** que constroem os números na viewport
- Abertura com **animação de urna eletrônica** estilizada

### Público-Alvo
Jovens e adultos conectados, confortáveis com infográficos, dados densos e interfaces modernas.

### Tom Editorial
100% imparcial. Fatos, dados e comparações. Sem opinião, sem viés, sem "tese".

### Registro de Linguagem
Português brasileiro formal-acessível — tom jornalístico (inspiração: Nexo Jornal, Folha Dados).

---

## 🎨 DIRETRIZES VISUAIS GLOBAIS

### Paleta de Cores por Partido

| Candidato | Partido | Cor Primária | Cor Secundária | Hex Primária |
|---|---|---|---|---|
| Lula | PT | Vermelho Estrela | Branco | `#ED1C24` |
| Flávio Bolsonaro | PL | Azul Bandeira | Branco | `#003DA5` |
| Romeu Zema | Novo | Laranja Vibrante | Cinza Carvão | `#FF6600` |
| Ronaldo Caiado | União Brasil | Azul Royal | Verde | `#2651A1` |
| Renan Santos | Missão | Verde Oliva | Dourado | `#4A7C2E` |
| Augusto Cury | Avante | Laranja Avante | Azul Escuro | `#F58220` |

> [!IMPORTANT]
> **Sistema "Chameleon"**: A cor de fundo e os acentos do site devem transitar suavemente entre essas paletas conforme o scroll avança de um candidato para outro. Usar CSS custom properties + JavaScript `IntersectionObserver` para detectar qual seção está na viewport e interpolar as cores via `transition`.

### Tipografia
- **Títulos**: Inter ou Outfit (Google Fonts), peso 700-900
- **Corpo**: Inter, peso 400
- **Dados/Números grandes**: Tabular Nums ou monospace estilizado para contadores

### Modo Escuro/Claro
- Default: **Dark Mode** (fundo `#0A0A0F`, texto `#E8E8ED`)
- Light Mode: (fundo `#F5F5F0`, texto `#1A1A2E`)
- Toggle no canto superior direito com animação de sol/lua

### Barra de Progresso
- Fixa na lateral esquerda (desktop) ou topo (mobile)
- Dots/markers para cada cena com label ao hover
- Indicador visual de progresso que preenche conforme o scroll

---

## 🎞️ ESTRUTURA DE CENAS (11 CENAS)

---

### 🎬 CENA 0 — ABERTURA (Hero / Splash)
**Cor dominante**: Neutro escuro (`#0A0A0F`) com detalhes dourados
**Duração de scroll**: 100vh (tela cheia estática até o scroll começar)

#### Conteúdo Visual
- **Animação central**: Uma urna eletrônica brasileira estilizada em 3D/2.5D (pode ser SVG animado ou CSS art)
  - A urna começa escura/desligada
  - Ao carregar a página, a tela da urna "liga" com um brilho verde
  - Na tela da urna aparece: **"ELEIÇÕES 2026"**
  - Ao fazer o primeiro scroll, a urna se "abre" (split animation) revelando o conteúdo por trás

#### Conteúdo Textual
```
ELEIÇÕES 2026
O que está em jogo para o futuro do Brasil

[Scroll para começar ↓]
```

#### Elementos Técnicos
- Parallax no fundo (textura sutil de bandeira do Brasil desfocada ou mapa topográfico)
- Partículas flutuantes sutis (estrelas? pontos de luz?)
- **Contagem regressiva** para o dia da eleição (se disponível: data do 1º turno de 2026)

#### 📋 BRIEFING PARA O GEMINI (Pesquisa)
```
DADO NECESSÁRIO: Data oficial do 1º turno das eleições presidenciais de 2026
(provavelmente primeiro domingo de outubro de 2026 — confirmar com TSE)
```

---

### 🎬 CENA 1 — O PANORAMA: "Onde estamos?"
**Cor dominante**: Neutro com acentos em azul-petróleo
**Efeito de entrada**: Fade-in + slide-up dos blocos de texto

#### Narrativa
Esta cena estabelece o contexto macroeconômico do Brasil em agosto de 2026. O objetivo é que o leitor entenda, em números concretos, a situação do país antes de conhecer os candidatos.

#### Layout
- **Lado esquerdo**: Texto narrativo (sticky, acompanha o scroll)
- **Lado direito**: Gráficos animados que mudam conforme o texto avança

#### Conteúdo Textual (Estrutura — texto final virá da pesquisa do Gemini)
```
BLOCO 1: "O preço da sua compra no mercado"
→ Dado: Inflação acumulada (IPCA) — quanto o real perdeu de poder de compra
→ Contador animado: "R$ 100 em 2022 compram o equivalente a R$ XX hoje"

BLOCO 2: "A dívida do Brasil"
→ Dado: Dívida Pública Bruta como % do PIB (projeção para 2027)
→ Gráfico de linha animado: evolução da dívida de 2014 a 2027 (projeção)
→ Analogia visual: barra de progresso "cheque especial do país" enchendo

BLOCO 3: "O PIB e o emprego"
→ Dado: Taxa de desemprego atual, crescimento do PIB
→ Contador animado: "X milhões de brasileiros buscam trabalho"

BLOCO 4: "A taxa de juros"  
→ Dado: Taxa Selic atual
→ Contexto: o que isso significa para financiamento de casa, carro
```

#### 📋 BRIEFING PARA O GEMINI (Pesquisa)
```
DADOS NECESSÁRIOS — TODOS com fonte e data de atualização:
1. IPCA acumulado 12 meses (agosto/2026 ou último disponível)
2. Dívida Pública Bruta (% do PIB) — dado mais recente + projeção 2027
3. Série histórica da dívida/PIB de 2014 a 2026 (pontos anuais)
4. PIB — crescimento acumulado no ano / projeção anual 2026
5. Taxa de desemprego (PNAD Contínua) — último trimestre disponível
6. Taxa Selic vigente em agosto/2026
7. Índice de preço da cesta básica (DIEESE) — último dado disponível
8. Poder de compra comparativo: R$100 em 2022 vale quanto em 2026?

FONTES PRIORITÁRIAS: IBGE, BCB, Tesouro Nacional, DIEESE, Focus (BCB)
FORMATO DE ENTREGA: JSON estruturado com { dado, valor, fonte, data_referencia, unidade }
```

---

### 🎬 CENA 2 — SAÚDE PÚBLICA: "A fila que não anda"
**Cor dominante**: Branco hospitalar com acentos em verde-esmeralda (saúde)
**Efeito de entrada**: Elementos surgem como "fichas de atendimento" empilhando

#### Narrativa
Foco nos problemas crônicos do SUS: filas de espera, falta de médicos, subfinanciamento.

#### Layout
- Infográfico central: mapa do Brasil com calor (heatmap) de leitos por habitante
- Contadores animados de dados de saúde
- Comparativo visual: "Brasil vs. países referência" (médicos per capita)

#### Conteúdo Textual
```
BLOCO 1: "Quantos médicos para cada brasileiro?"
→ Dado: Razão médico/habitante no Brasil vs. média OCDE

BLOCO 2: "A espera pelo SUS"
→ Dado: Tempo médio de espera para cirurgias eletivas / consultas especializadas

BLOCO 3: "O orçamento da saúde"
→ Dado: Gasto público em saúde per capita vs. países comparáveis
→ Gráfico de barras comparativo animado
```

#### 📋 BRIEFING PARA O GEMINI (Pesquisa)
```
DADOS NECESSÁRIOS:
1. Razão médico por 1.000 habitantes no Brasil (CRM/CFM — último dado)
2. Mesma métrica para média OCDE, Argentina, Chile, Portugal
3. Tempo médio de espera no SUS para consulta especializada e cirurgia eletiva
4. Orçamento federal da saúde 2026 (LOA) em R$ bilhões
5. Gasto público em saúde per capita (Brasil vs. 3-4 países comparáveis)
6. Número de leitos SUS por 1.000 habitantes
7. Fila do SUS: número de procedimentos represados (se disponível)

FONTES: CFM, DataSUS, OCDE Health Statistics, LOA 2026
FORMATO: JSON estruturado
```

---

### 🎬 CENA 3 — SEGURANÇA PÚBLICA: "O mapa da violência"
**Cor dominante**: Neutro escuro com acentos em vermelho-alarme
**Efeito de entrada**: Pontos surgindo no mapa como ocorrências policiais

#### Narrativa
Dados de violência urbana, homicídios, sensação de segurança.

#### Layout
- **Mapa do Brasil** com bolhas proporcionais de homicídios por estado
- Contador animado: taxa de homicídios por 100 mil habitantes
- Timeline animada: evolução dos homicídios na última década

#### Conteúdo Textual
```
BLOCO 1: "Os números da violência"
→ Dado: Total de homicídios/ano, taxa por 100 mil

BLOCO 2: "Onde é mais perigoso?"
→ Dado: Top 5 estados com maiores taxas de violência
→ Mapa interativo com dados por estado

BLOCO 3: "O que funciona?"
→ Dado: Estados que conseguiram reduzir violência (caso Goiás, Ceará, SP) — fatos, sem vincular a candidato
```

#### 📋 BRIEFING PARA O GEMINI (Pesquisa)
```
DADOS NECESSÁRIOS:
1. Total de homicídios no Brasil (último ano completo disponível)
2. Taxa de homicídios por 100 mil habitantes — nacional
3. Taxa por estado (27 UFs) — para o mapa
4. Série histórica nacional de homicídios (2014-2025/2026)
5. Estados com maior redução percentual de homicídios nos últimos 5 anos
6. Dados de roubo/furto de celulares ou veículos (indicador de criminalidade urbana)
7. Efetivo policial por habitante (Brasil vs. média mundial)

FONTES: Atlas da Violência (IPEA), FBSP (Anuário Brasileiro de Segurança Pública), Sinesp
FORMATO: JSON estruturado + array para mapa [{ uf, sigla, taxa, total }]
```

---

### 🎬 CENA 4 — EDUCAÇÃO: "O alicerce que falta"
**Cor dominante**: Amarelo-sol quente com detalhes em azul-ardósia
**Efeito de entrada**: Blocos de texto empilhando como livros em uma estante

#### Narrativa
Educação como pilar fundamental para desenvolvimento — dados de alfabetização, IDEB, evasão escolar.

#### Layout
- Gráfico radar: Brasil vs. países em indicadores educacionais
- Counter: "X milhões de jovens fora da escola"
- Comparativo animado: investimento por aluno Brasil vs. OCDE

#### Conteúdo Textual
```
BLOCO 1: "A nota do Brasil"
→ Dado: IDEB / PISA — posição do Brasil no ranking internacional

BLOCO 2: "Quem fica para trás?"
→ Dado: Taxa de evasão no ensino médio, analfabetismo funcional

BLOCO 3: "Investimento vs. Resultado"
→ Dado: Gasto por aluno vs. desempenho (o Brasil gasta mal, não pouco)
```

#### 📋 BRIEFING PARA O GEMINI (Pesquisa)
```
DADOS NECESSÁRIOS:
1. Nota do Brasil no PISA (último resultado disponível) — Leitura, Matemática, Ciências
2. Ranking do Brasil no PISA entre os países avaliados
3. IDEB — ensino fundamental e médio (último disponível)
4. Taxa de evasão escolar no ensino médio
5. Taxa de analfabetismo funcional (INAF ou PNAD)
6. Gasto público por aluno (Brasil) vs. média OCDE
7. Número de jovens (15-17 anos) fora da escola

FONTES: INEP, OCDE (PISA), IBGE (PNAD Educação), INAF
FORMATO: JSON estruturado
```

---

### 🎬 CENA 5 — TRANSIÇÃO: "O caminho para o 1º Mundo"
**Cor dominante**: Gradiente do escuro para dourado (transição de tom)
**Efeito**: Parallax profundo — texto sobe enquanto imagem de fundo (Brasília/Congresso) desce

#### Narrativa
Cena-ponte entre "os problemas" e "os candidatos". Resume o que um país precisa para se desenvolver: responsabilidade fiscal, educação, segurança jurídica, reforma tributária.

#### Layout
- **4 pilares** apresentados como colunas/cards que se "erguem" no scroll:
  1. 🏦 Responsabilidade Fiscal
  2. 📚 Educação de Base
  3. ⚖️ Segurança Jurídica
  4. 💰 Reforma Tributária

#### Conteúdo Textual
```
"Nenhum candidato será o 'salvador da pátria'.
Mas alguns caminhos já foram testados pelo mundo.
Países que prosperaram fizeram quatro coisas:"

[Card 1] CONTAS EM ORDEM
O país precisa parar de gastar mais do que arrecada.
→ Dado breve: Resultado primário atual

[Card 2] EDUCAÇÃO QUE FUNCIONA
Investir na base — ensino fundamental e técnico.
→ Dado breve: % do orçamento em educação

[Card 3] REGRAS CLARAS PARA INVESTIR
Empresas precisam de previsibilidade para gerar empregos.
→ Dado breve: Ranking Doing Business / posição do Brasil

[Card 4] IMPOSTOS MAIS SIMPLES
Menos impostos escondidos na comida e nos remédios.
→ Dado breve: Carga tributária sobre consumo vs. renda
```

#### 📋 BRIEFING PARA O GEMINI (Pesquisa)
```
DADOS NECESSÁRIOS:
1. Resultado primário do governo federal (último dado, R$ bi e % PIB)
2. % do orçamento federal destinado à educação
3. Posição do Brasil no Doing Business ou ranking equivalente do Banco Mundial
4. Carga tributária total (% do PIB) e composição (consumo vs. renda vs. patrimônio)
5. Exemplos de 2-3 países emergentes que fizeram reformas bem-sucedidas (breve contexto)

FONTES: Tesouro Nacional, Banco Mundial, OCDE, Receita Federal
FORMATO: JSON estruturado
```

---

### 🎬 CENA 6 — CANDIDATO: LULA (PT)
**Cor dominante**: Vermelho PT (`#ED1C24`) — transição suave a partir da cena anterior
**Efeito de entrada**: A cor do fundo gradualmente sangra para vermelho conforme o scroll avança

#### Layout Padrão de Candidato (aplicar a todas as cenas 6-11)
```
┌─────────────────────────────────────────────────┐
│  [HEADER] Nome + Partido + Cargo Atual          │
│  ────────────────────────────────────────────    │
│  [FOTO/AVATAR]     │  [FICHA RÁPIDA]            │
│  Gerada por IA     │  Idade, Estado, Profissão   │
│  ou silhueta       │  Ideologia (espectro visual) │
│  ────────────────────────────────────────────    │
│  [SEÇÃO] Quem é — Bio resumida (3-4 linhas)     │
│  ────────────────────────────────────────────    │
│  [SEÇÃO] Histórico Político                      │
│  → Timeline horizontal animada com marcos        │
│  ────────────────────────────────────────────    │
│  [SEÇÃO] Propostas-Chave (3-4 bullet cards)     │
│  → Cards com ícones temáticos                    │
│  ────────────────────────────────────────────    │
│  [SEÇÃO] Teste de Realidade (fact-check neutro)  │
│  → Pontos fortes (✓) e Pontos de atenção (!)    │
│  ────────────────────────────────────────────    │
│  [SEÇÃO] Dados Eleitorais                        │
│  → Posição nas pesquisas + aprovação/rejeição    │
└─────────────────────────────────────────────────┘
```

#### Conteúdo Específico — Lula
```
BIO: Presidente em exercício, tentando a reeleição. 
Operário, sindicalista, presidente por 3 mandatos (2003-2010, 2023-2026).
Foco em programas sociais e papel ativo do Estado.

IDEOLOGIA: Centro-esquerda a Esquerda
→ Visualização: Barra de espectro político com marcador

PROPOSTAS-CHAVE (Gemini deve pesquisar propostas REAIS do Lula para 2026):
1. [Economia/Fiscal]
2. [Social/Transferência de renda]
3. [Infraestrutura]
4. [Posição internacional]

TESTE DE REALIDADE:
✓ Pontos fortes factuais
! Pontos de atenção factuais
(sem opinião — apenas dados verificáveis)

DADOS ELEITORAIS:
→ Posição na última pesquisa (Datafolha/Ipec/Quaest)
→ Intenção de voto 1º turno (%)
→ Taxa de rejeição (%)
```

#### 📋 BRIEFING PARA O GEMINI (Pesquisa)
```
PESQUISA CANDIDATO — LULA (PT):
1. Biografia resumida oficial (idade, estado natal, formação, carreira política)
2. Principais marcos da carreira política (timeline: 5-7 eventos-chave)
3. Plataforma / propostas de campanha para 2026 (mínimo 4 propostas verificáveis)
4. Realizações comprováveis dos mandatos anteriores (dados com fonte)
5. Críticas factuais / pontos de atenção (dívida pública no mandato atual, etc.)
6. Última pesquisa de intenção de voto — 1º turno (%, instituto, data)
7. Taxa de rejeição (último dado disponível)
8. Número do candidato na urna
9. Vice-candidato(a) anunciado(a) — se já definido

REGRA DE IMPARCIALIDADE: Apresentar fatos, não opiniões. Para cada "ponto forte", 
trazer um "ponto de atenção" equivalente. Equilíbrio simétrico.

FONTES: TSE, plataformas de campanha oficiais, institutos de pesquisa, 
veículos jornalísticos de referência.
FORMATO: JSON estruturado com campos { bio, timeline[], propostas[], 
pontos_fortes[], pontos_atencao[], pesquisa_eleitoral{} }
```

---

### 🎬 CENA 7 — CANDIDATO: FLÁVIO BOLSONARO (PL)
**Cor dominante**: Azul PL (`#003DA5`) — transição suave do vermelho PT

#### 📋 BRIEFING PARA O GEMINI (Pesquisa)
```
PESQUISA CANDIDATO — FLÁVIO BOLSONARO (PL):
Mesma estrutura da Cena 6, com foco em:
1. Biografia (Senador, filho de Jair Bolsonaro, carreira no Rio de Janeiro)
2. Timeline: marcos políticos (Senado, liderança do PL, candidatura 2026)
3. Propostas de campanha 2026 (mínimo 4)
4. Realizações comprováveis como Senador / gestão
5. Pontos de atenção factuais (questões jurídicas, rachadinha — apenas FATOS judiciais, sem juízo de valor)
6. Pesquisa eleitoral + rejeição
7. Vice-candidato(a)
8. Legado e relação com o governo Bolsonaro (2019-2022) — dados factuais

REGRA: Mesmo equilíbrio da Cena 6. 
FORMATO: JSON idêntico ao de Lula.
```

---

### 🎬 CENA 8 — CANDIDATO: ROMEU ZEMA (NOVO)
**Cor dominante**: Laranja Novo (`#FF6600`) — transição suave do azul PL

#### 📋 BRIEFING PARA O GEMINI (Pesquisa)
```
PESQUISA CANDIDATO — ROMEU ZEMA (NOVO):
Mesma estrutura, com foco em:
1. Biografia (empresário, governador de MG por dois mandatos)
2. Timeline: marcos (Zema Diesel, governo MG, ajuste fiscal, candidatura 2026)
3. Propostas 2026 (privatizações, corte de gastos, eficiência)
4. Realizações em MG (superávit fiscal, Regime de Recuperação Fiscal — dados)
5. Pontos de atenção (críticas a cortes em serviços, comunicação)
6. Pesquisa eleitoral + rejeição
7. Vice-candidato(a)

FORMATO: JSON idêntico.
```

---

### 🎬 CENA 9 — CANDIDATO: RONALDO CAIADO (UNIÃO BRASIL)
**Cor dominante**: Azul Royal União (`#2651A1`) — transição do laranja

#### 📋 BRIEFING PARA O GEMINI (Pesquisa)
```
PESQUISA CANDIDATO — RONALDO CAIADO (UNIÃO BRASIL):
1. Biografia (médico, senador, governador de Goiás, ligado ao agronegócio)
2. Timeline: marcos políticos
3. Propostas 2026 (segurança pública como carro-chefe, agro, saúde)
4. Realizações em GO (redução de criminalidade — dados específicos)
5. Pontos de atenção
6. Pesquisa eleitoral + rejeição
7. Vice-candidato(a)

FORMATO: JSON idêntico.
```

---

### 🎬 CENA 10 — CANDIDATO: RENAN SANTOS (MISSÃO)
**Cor dominante**: Verde Oliva Missão (`#4A7C2E`) — transição do azul royal

#### 📋 BRIEFING PARA O GEMINI (Pesquisa)
```
PESQUISA CANDIDATO — RENAN SANTOS (MISSÃO):
1. Biografia (líder do MBL, trajetória em movimentos de rua e digitais)
2. Timeline: marcos (MBL, impeachment 2016, fundação partido Missão, candidatura)
3. Propostas 2026 (liberalismo econômico, renovação política, antissistema)
4. Realizações / histórico verificável
5. Pontos de atenção (experiência executiva, base partidária)
6. Pesquisa eleitoral + rejeição
7. Vice-candidato(a)

FORMATO: JSON idêntico.
```

---

### 🎬 CENA 11 — CANDIDATO: AUGUSTO CURY (AVANTE)
**Cor dominante**: Laranja Avante (`#F58220`) — transição do verde

#### 📋 BRIEFING PARA O GEMINI (Pesquisa)
```
PESQUISA CANDIDATO — AUGUSTO CURY (AVANTE):
1. Biografia (psiquiatra, escritor best-seller, figura nova na política)
2. Timeline: marcos (carreira literária, entrada na política, candidatura)
3. Propostas 2026 (saúde mental, educação emocional, valorização humana)
4. Realizações / credenciais verificáveis
5. Pontos de atenção (experiência em gestão pública, estrutura partidária)
6. Pesquisa eleitoral + rejeição
7. Vice-candidato(a)

FORMATO: JSON idêntico.
```

---

### 🎬 CENA 12 — ENCERRAMENTO: "A decisão é sua"
**Cor dominante**: Gradiente que retorna ao neutro dourado da abertura (ciclo narrativo)
**Efeito**: Elementos convergem para o centro, "fechando" a experiência

#### Parte A — Quadro Comparativo Final
```
Tabela/Grid visual responsivo com os 6 candidatos lado a lado:

          LULA    FLÁVIO   ZEMA    CAIADO   RENAN    CURY
Economia   [●]     [●]     [●]     [●]      [●]     [●]
Saúde      [●]     [●]     [●]     [●]      [●]     [●]
Segurança  [●]     [●]     [●]     [●]      [●]     [●]
Educação   [●]     [●]     [●]     [●]      [●]     [●]
Pesquisa % [XX%]   [XX%]   [XX%]   [XX%]    [XX%]   [XX%]

(Os [●] são resumos de 1 linha da posição de cada candidato no tema)
```

#### Parte B — Chamada à Ação
```
"Nenhum candidato é perfeito.
O voto consciente olha para planos reais,
não para promessas mágicas.

Verifique sua situação eleitoral:
[BOTÃO] → Acesse o site do TSE ↗

Compartilhe esta página:
[BOTÃO WhatsApp] [BOTÃO Twitter/X] [BOTÃO Copiar Link]
"
```

#### Parte C — Créditos
```
Dados atualizados até: [DATA]
Fontes: IBGE, BCB, TSE, IPEA, FBSP, INEP, OCDE, DataSUS
Projeto independente — sem vínculo com partidos ou candidatos
```

---

## 🔧 ESPECIFICAÇÕES TÉCNICAS PARA O DESENVOLVEDOR (Claude Sonnet 4.6)

### Stack Tecnológica
```
- HTML5 semântico
- CSS3 (Vanilla — custom properties para sistema de cores dinâmico)
- JavaScript Vanilla (sem frameworks pesados)
- Bibliotecas sugeridas:
  → ScrollMagic ou GSAP ScrollTrigger (animações vinculadas ao scroll)
  → Chart.js ou D3.js (gráficos animados)
  → CountUp.js (contadores animados)
  → Google Fonts (Inter)
```

### Funcionalidades Obrigatórias
1. **Sistema de cores dinâmico** — CSS custom properties que mudam via JS/IntersectionObserver
2. **Barra de progresso lateral** — com dots clicáveis para cada cena
3. **Contadores animados** — números que "sobem" quando entram na viewport
4. **Gráficos animados** — se constroem conforme o scroll (line charts, bar charts)
5. **Toggle escuro/claro** — com persistência em localStorage
6. **Parallax** — nas cenas de transição (Cena 0 e Cena 5)
7. **Responsivo** — mobile-first, breakpoints em 768px e 1200px
8. **Transição de cores suave** — CSS transition de 800ms nas custom properties de cor
9. **Botões de compartilhamento** — WhatsApp (deep link), Twitter/X, copiar URL

### Performance
- Lazy loading de gráficos e imagens
- Throttle no scroll event listener (16ms = 60fps)
- Prefers-reduced-motion: desabilitar animações pesadas

### SEO
- Título: "Eleições 2026 — Guia Interativo e Imparcial dos Candidatos à Presidência"
- Meta description: "Compare propostas, dados e histórico dos 6 principais candidatos à Presidência do Brasil em 2026. Dados reais e análise 100% imparcial."
- Open Graph tags para compartilhamento social

---

## 📦 PIPELINE DE PRODUÇÃO

### Fase 1 — Pesquisa (Gemini 2.5 Pro)
O Gemini recebe os **BRIEFINGS DE PESQUISA** de cada cena (marcados com 📋 acima) e retorna um arquivo JSON consolidado com todos os dados, fontes e textos finais.

**Arquivo de saída esperado**: `dados_eleicoes_2026.json`

**Estrutura do JSON**:
```json
{
  "metadata": {
    "data_pesquisa": "2026-08-XX",
    "fontes_consultadas": [...]
  },
  "cena_1_panorama": {
    "ipca": { "valor": "", "fonte": "", "data_ref": "" },
    "divida_pib": { ... },
    "serie_divida": [ ... ],
    "pib_crescimento": { ... },
    "desemprego": { ... },
    "selic": { ... },
    "cesta_basica": { ... },
    "poder_compra": { ... }
  },
  "cena_2_saude": { ... },
  "cena_3_seguranca": { ... },
  "cena_4_educacao": { ... },
  "cena_5_transicao": { ... },
  "candidatos": {
    "lula": {
      "bio": "",
      "timeline": [...],
      "propostas": [...],
      "pontos_fortes": [...],
      "pontos_atencao": [...],
      "pesquisa_eleitoral": {
        "intencao_voto_1t": "",
        "rejeicao": "",
        "instituto": "",
        "data": ""
      }
    },
    "flavio_bolsonaro": { ... },
    "zema": { ... },
    "caiado": { ... },
    "renan_santos": { ... },
    "augusto_cury": { ... }
  },
  "data_eleicao": "2026-10-XX"
}
```

### Fase 2 — Desenvolvimento (Claude Sonnet 4.6)
Recebe este roteiro + o JSON de dados do Gemini e constrói o site completo:
- `index.html`
- `styles.css`
- `app.js`
- `data.js` (dados importados do JSON)
- Assets gerados (imagens via IA, se necessário)

### Fase 3 — Validação
- Rodar localmente (`npx serve .` ou `python -m http.server`)
- Testar responsividade (mobile/desktop)
- Verificar contadores e gráficos
- Validar transições de cor
- Checar todos os links externos

---

## ⚠️ REGRAS EDITORIAIS INVIOLÁVEIS

> [!CAUTION]
> 1. **IMPARCIALIDADE ABSOLUTA**: Nenhum candidato pode receber tratamento visual ou textual privilegiado. Mesma quantidade de espaço, mesmo número de pontos fortes e de atenção.
> 2. **SEM OPINIÃO**: O site não endossa, critica ou recomenda nenhum candidato. Apenas apresenta fatos.
> 3. **FONTES VERIFICÁVEIS**: Todo dado numérico deve ter fonte citada ao rodapé ou em tooltip.
> 4. **EQUILÍBRIO VISUAL**: Todas as seções de candidatos devem ter o mesmo layout, tamanho e tratamento gráfico. Nenhum "maior" que outro.
> 5. **LINGUAGEM NEUTRA**: Evitar adjetivos valorativos. Usar "afirma que", "propõe", "dados indicam" — nunca "promete", "garante" ou "falha em".

---

*Roteiro finalizado em 24/08/2026 — Pronto para execução do pipeline.*
