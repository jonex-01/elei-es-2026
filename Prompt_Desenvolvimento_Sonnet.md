# 🛠️ PROMPT DE DESENVOLVIMENTO — CLAUDE SONNET 4.6
## Projeto: Scrollytelling Eleições 2026

> **INSTRUÇÃO**: Após receber o JSON de dados do Gemini, copie TODO o conteúdo abaixo + cole o JSON como contexto no Claude Sonnet 4.6.

---

## INÍCIO DO PROMPT

Você é o desenvolvedor front-end sênior responsável por construir um site **Scrollytelling** (narrativa guiada pelo scroll) sobre as Eleições Presidenciais Brasileiras de 2026. O site será hospedado **localmente** (localhost).

Você receberá um JSON com todos os dados pesquisados (`dados_eleicoes_2026.json`). Seu trabalho é transformar esses dados em uma experiência visual **premium, imersiva e 100% imparcial**.

---

## ARQUITETURA DE ARQUIVOS

Crie o projeto na pasta `Scrollytelling_Eleicoes_2026/` com esta estrutura:

```
Scrollytelling_Eleicoes_2026/
├── index.html          (página principal — todo o conteúdo)
├── css/
│   ├── styles.css      (design system, layout, tipografia, cores)
│   ├── animations.css  (keyframes, scroll animations, parallax)
│   └── responsive.css  (breakpoints mobile/tablet/desktop)
├── js/
│   ├── app.js          (orquestrador principal — scroll observer, theme toggle)
│   ├── charts.js       (inicialização e animação dos gráficos)
│   ├── counters.js     (contadores animados com IntersectionObserver)
│   ├── colors.js       (sistema chameleon — transição de cores por candidato)
│   └── data.js         (JSON de dados exportado como módulo JS)
├── assets/
│   └── (imagens geradas, ícones SVG inline no HTML)
└── README.md
```

---

## STACK TECNOLÓGICA

```
HTML5 semântico
CSS3 Vanilla (custom properties obrigatórias para sistema de cores)
JavaScript Vanilla (ES6+ modules)

CDN Libraries (incluir no <head> do HTML):
- Google Fonts: Inter (400, 600, 700, 900)
- GSAP + ScrollTrigger (animações vinculadas ao scroll)
  → https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js
  → https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js
- Chart.js (gráficos animados)
  → https://cdn.jsdelivr.net/npm/chart.js
- CountUp.js (contadores animados)
  → https://cdn.jsdelivr.net/npm/countup.js@2/dist/countUp.umd.min.js
```

> **NÃO use**: React, Vue, Angular, Tailwind, Bootstrap, ou qualquer framework CSS/JS pesado.

---

## DESIGN SYSTEM

### Cores — Custom Properties (CSS)

```css
:root {
  /* === BASE (Dark Mode — Default) === */
  --bg-primary: #0A0A0F;
  --bg-secondary: #12121A;
  --bg-card: #1A1A2E;
  --text-primary: #E8E8ED;
  --text-secondary: #A0A0B0;
  --text-accent: #FFD700;
  --border: rgba(255, 255, 255, 0.08);
  
  /* === CORES DINÂMICAS (mudam por candidato via JS) === */
  --accent-primary: #FFD700;    /* dourado neutro — default */
  --accent-secondary: #B8860B;
  --accent-glow: rgba(255, 215, 0, 0.15);
  
  /* === CORES DOS PARTIDOS (constantes de referência) === */
  --cor-pt: #ED1C24;
  --cor-pl: #003DA5;
  --cor-novo: #FF6600;
  --cor-uniao: #2651A1;
  --cor-missao: #4A7C2E;
  --cor-avante: #F58220;
  
  /* === TRANSIÇÃO === */
  --color-transition: 800ms cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="light"] {
  --bg-primary: #F5F5F0;
  --bg-secondary: #EAEAE5;
  --bg-card: #FFFFFF;
  --text-primary: #1A1A2E;
  --text-secondary: #555566;
  --border: rgba(0, 0, 0, 0.08);
}
```

### Tipografia

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 18px;
  line-height: 1.7;
  letter-spacing: -0.01em;
}

h1 { font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 900; }
h2 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; }
h3 { font-size: clamp(1.25rem, 2.5vw, 1.75rem); font-weight: 600; }

.counter-number {
  font-variant-numeric: tabular-nums;
  font-weight: 900;
  font-size: clamp(3rem, 8vw, 6rem);
}
```

---

## FUNCIONALIDADES OBRIGATÓRIAS

### 1. Sistema de Cores "Chameleon" 🦎
- Use `IntersectionObserver` para detectar qual seção de candidato está na viewport
- Quando uma seção de candidato entra (threshold: 0.3), atualize `--accent-primary`, `--accent-secondary` e `--accent-glow` com as cores daquele partido
- Todas as transições de cor devem usar `var(--color-transition)` (800ms ease)
- Elementos que mudam de cor: header/navbar accent, barra de progresso, títulos de seção, bordas de cards, glow effects

### 2. Barra de Progresso Lateral
- Fixa na esquerda (desktop) ou topo (mobile)
- Composta de dots/markers — um por cena (13 dots)
- Dot ativo = preenchido com `--accent-primary`
- Label aparece ao hover (desktop) ou sempre visível (mobile)
- Ao clicar em um dot, faz smooth scroll até a cena
- Linha de conexão entre dots que preenche conforme o scroll

### 3. Contadores Animados
- Números grandes que "contam" de 0 até o valor final quando entram na viewport
- Usar CountUp.js com IntersectionObserver (triggerOnce: true)
- Duração: 2-3 segundos
- Easing: easeOutExpo
- Formatar com separador de milhares (ponto) e vírgula para decimal

### 4. Gráficos Animados
- Chart.js com animação `onComplete` ao entrar na viewport
- Line charts: dívida/PIB, homicídios
- Bar charts: comparativos (saúde, educação)
- Radar chart: Brasil vs. OCDE em educação (se aplicável)
- Paleta dos gráficos deve respeitar o tema dark/light
- Tooltips com dados formatados em PT-BR

### 5. Toggle Escuro/Claro
- Botão fixo no canto superior direito
- Ícone: ☀️ / 🌙 com animação de rotação
- Persistir preferência em `localStorage`
- Respeitar `prefers-color-scheme` do sistema como default

### 6. Parallax
- Cena 0 (Hero): fundo se move a 50% da velocidade do scroll
- Cena 5 (Transição): texto sobe enquanto imagem de fundo desce
- Usar GSAP ScrollTrigger para parallax (performance > CSS puro)

### 7. Responsividade
- **Mobile-first**
- Breakpoints: 480px (mobile), 768px (tablet), 1200px (desktop), 1600px (ultra-wide)
- Barra de progresso: lateral no desktop, topo horizontal no mobile
- Gráficos: largura 100% com aspect-ratio preservado
- Layout candidatos: single column no mobile, two-column no desktop

### 8. Botões de Compartilhamento
- WhatsApp: `https://api.whatsapp.com/send?text=...`
- Twitter/X: `https://twitter.com/intent/tweet?text=...&url=...`
- Copiar link: `navigator.clipboard.writeText()`
- Feedback visual ao copiar ("Link copiado! ✓")

---

## ESTRUTURA DAS CENAS

### CENA 0 — HERO (Abertura)
- Full viewport (100vh), nenhum scroll visível
- Animação central: **urna eletrônica estilizada** feita em CSS/SVG
  - A urna "liga" com glow verde na tela
  - Texto "ELEIÇÕES 2026" aparece na tela da urna com efeito typewriter
  - Contagem regressiva em tempo real para a data do 1º turno (usar `data_eleicao_1t` do JSON)
- Fundo: gradiente escuro com partículas flutuantes sutis (CSS animation ou canvas)
- Call-to-action: seta ↓ pulsante "Scroll para começar"
- Ao scrollar, a urna faz split animation (se divide ao meio revelando o conteúdo)

### CENAS 1-4 — DADOS DO BRASIL (Panorama, Saúde, Segurança, Educação)
- Layout: **texto sticky à esquerda** (40% width) + **gráficos/dados à direita** (60%) que mudam conforme o scroll avança
- Cada bloco de texto dentro da cena tem seu gráfico correspondente
- Contadores animados para números-destaque
- Fonte citada em tag `<small>` abaixo de cada dado
- Transição entre cenas: fade + color shift sutil

### CENA 5 — TRANSIÇÃO ("Caminho para o 1º Mundo")
- **4 cards/pilares** que se "erguem" no scroll (GSAP stagger animation)
  - 🏦 Responsabilidade Fiscal
  - 📚 Educação de Base
  - ⚖️ Segurança Jurídica
  - 💰 Reforma Tributária
- Fundo com parallax (imagem sutil de Brasília/Congresso gerada ou gradiente)
- Frase-âncora em destaque: *"Nenhum candidato será o 'salvador da pátria'."*

### CENAS 6-11 — CANDIDATOS (template idêntico para todos)

**Layout desktop:**
```
┌──────────────────────────────────────────────────────┐
│ ┌──────────┐  NOME DO CANDIDATO                      │
│ │  AVATAR  │  Partido | Cargo Atual | Idade          │
│ │  (CSS    │  ─────────────────────────────           │
│ │  circle) │  Espectro ideológico [===●=====]         │
│ └──────────┘                                          │
│                                                        │
│ ══ BIOGRAFIA ══════════════════════════════════════    │
│ Texto bio (4-5 linhas)                                │
│                                                        │
│ ══ TRAJETÓRIA ═════════════════════════════════════    │
│ ●──●──●──●──●──●──●  (timeline horizontal animada)    │
│ 1970 1980 2003 2010 2023 2026                         │
│                                                        │
│ ══ PROPOSTAS-CHAVE ════════════════════════════════    │
│ [Card 1] [Card 2] [Card 3] [Card 4]                  │
│  Economia  Saúde   Segurança  Social                  │
│                                                        │
│ ══ TESTE DE REALIDADE ═════════════════════════════    │
│ ✓ Ponto forte 1          ! Ponto de atenção 1         │
│ ✓ Ponto forte 2          ! Ponto de atenção 2         │
│ ✓ Ponto forte 3          ! Ponto de atenção 3         │
│                                                        │
│ ══ PESQUISA ELEITORAL ═════════════════════════════    │
│ Intenção de voto: XX%    Rejeição: XX%                │
│ Instituto: Datafolha     Data: XX/XX/2026             │
└──────────────────────────────────────────────────────┘
```

**Animações da seção candidato:**
- Avatar: círculo com borda na cor do partido + glow sutil
- Background: gradiente da cor do partido (opacidade 5-10%) atrás da seção
- Timeline: pontos aparecem um a um com stagger (GSAP)
- Propostas: cards fazem flip ou slide-in ao entrar na viewport
- Pontos fortes/atenção: check ✓ em verde e ! em amarelo, aparecem com fade stagger
- Transição para próximo candidato: as cores mudam suavemente

### CENA 12 — ENCERRAMENTO
- **Tabela comparativa**: grid responsivo 6 colunas × N linhas
  - Cada coluna = 1 candidato (foto + nome)
  - Linhas = temas (Economia, Saúde, Segurança, Educação, Pesquisa %)
  - Resumo de 1 linha por célula
- **Chamada à ação**: texto em destaque + botão para site do TSE
- **Botões de compartilhamento**: WhatsApp, Twitter/X, copiar link
- **Créditos/fontes**: rodapé com lista de fontes do JSON
- Animação final: os 6 avatares convergem para o centro em um "grid de unidade"

---

## COMO CONSUMIR O JSON DE DADOS

O JSON será fornecido junto com este prompt. Você deve:

1. Criar o arquivo `js/data.js` exportando os dados como constante:
```javascript
export const ELECTION_DATA = { /* conteúdo do JSON colado aqui */ };
```

2. Importar nos módulos que precisam:
```javascript
import { ELECTION_DATA } from './data.js';
```

3. Popular TODOS os textos, números e gráficos dinamicamente a partir do JSON
4. Se algum campo do JSON tiver valor `"[DADO NÃO DISPONÍVEL]"`, exibir como "Dado não disponível" com estilo esmaecido

---

## REGRAS DE PERFORMANCE

1. **Lazy initialization**: gráficos e contadores só inicializam quando entram na viewport
2. **Throttle** no scroll: 16ms (60fps) — usar `requestAnimationFrame`
3. **`prefers-reduced-motion`**: se ativado, desabilitar parallax e animações pesadas
4. **Imagens**: usar `loading="lazy"` em todas as `<img>`
5. **Fontes**: `font-display: swap` no Google Fonts
6. **No framework overhead**: tudo vanilla, sem npm, sem build step

---

## REGRAS DE ACESSIBILIDADE

1. Contraste mínimo AA (4.5:1) em ambos os temas
2. `aria-label` em elementos interativos (toggle, botões, dots da barra de progresso)
3. `role="progressbar"` na barra de progresso
4. Skip-to-content link oculto
5. Focus visible em todos os interativos

---

## SEO

```html
<title>Eleições 2026 — Guia Interativo e Imparcial dos Candidatos à Presidência</title>
<meta name="description" content="Compare propostas, dados e histórico dos 6 principais candidatos à Presidência do Brasil em 2026. Dados reais e análise 100% imparcial.">
<meta property="og:title" content="Eleições 2026 — Guia Interativo">
<meta property="og:description" content="Guia visual e imparcial sobre os candidatos à Presidência do Brasil em 2026.">
<meta property="og:type" content="website">
<meta name="robots" content="index, follow">
<link rel="canonical" href="/">
```

---

## INSTRUÇÃO FINAL

Construa o site COMPLETO, funcional, com todos os arquivos listados na arquitetura. O site deve:
- Funcionar abrindo `index.html` diretamente no navegador OU via `npx serve .`
- Ser VISUALMENTE IMPRESSIONANTE — premium, moderno, animado
- Popular TODOS os dados a partir do JSON fornecido
- Ter transições de cor suaves entre candidatos
- Ser responsivo (mobile a desktop)
- Ser 100% imparcial na apresentação

**Comece pelo `styles.css` (design system), depois `index.html` (estrutura), depois os JS modules.**

## FIM DO PROMPT
