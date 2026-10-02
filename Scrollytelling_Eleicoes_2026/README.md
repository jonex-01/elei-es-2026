# 🗳️ Scrollytelling Eleições 2026

Site interativo e imparcial sobre as Eleições Presidenciais Brasileiras de 2026.

## Como rodar localmente

```bash
# Opção 1 (recomendado — npx, sem instalar nada)
npx serve .

# Opção 2 (Python)
python -m http.server 8080

# Opção 3
# Abrir index.html diretamente no navegador Chrome/Edge/Firefox
```

Acesse: `http://localhost:3000`

## Estrutura

```
Scrollytelling_Eleicoes_2026/
├── index.html          (página principal)
├── css/styles.css      (design system completo)
├── js/
│   ├── app.js          (orquestrador: countdown, cores, gráficos, candidatos)
│   └── data.js         (dados eleitorais de agosto/2026)
└── README.md
```

## Funcionalidades

- 🎨 **Sistema "Chameleon"** — cores mudam conforme o candidato em foco
- ⏱️ **Countdown em tempo real** para o 1º turno (4/Out/2026)
- 📊 **4 gráficos animados** (dívida, médicos, homicídios, IDEB)
- 🌙 **Toggle Dark/Light mode** com persistência
- 📍 **Barra de progresso lateral** com 13 dots clicáveis
- 📱 **Responsivo** — mobile a desktop
- 🔗 **Compartilhamento** WhatsApp, Twitter/X e copiar link
- ♿ **Acessível** — aria-labels, skip link, contraste AA

## Dados (agosto/2026)

### Indicadores macro revisados em 02/10/2026

As quatro seções de economia, saúde, educação e segurança usam agora `js/macro-data.js`, com período, definição, efeito cotidiano, limites e links por indicador. O conteúdo é gerado como HTML estático, legível mesmo sem JavaScript. Para atualizar:

```bash
node generate_macro.mjs
```

O gerador mantém as outras seções. A faixa de fatos utiliza a mesma base macro, sem duplicar valores. `css/macro.css` adapta os novos blocos aos temas e tamanhos de tela.

O gráfico de dívida usa a série SGS 13762 do BCB (76,27% em dez/2024; 78,64% em dez/2025; 82,86% em ago/2026). A comparação de Ideb usa os resultados nacionais de 2023 e 2025 do Inep. O percentual de estudantes abaixo do nível 2 em matemática no PISA 2025 é calculado como 100% − 28%, conforme a nota da OCDE sobre o Brasil.

Séries e estimativas antigas sem metodologia rastreável deixaram de ser exibidas: filas e tempos médios do SUS, leitos, comparação internacional de médicos, falências, roubos, facções e jovens fora da escola. Os arquivos de pesquisa antigos e os campos macro de `js/data.js` permanecem como material legado, mas não alimentam os quatro blocos nem a faixa macro. Os dados eleitorais e os perfis de candidatos não foram revisados nesta atualização.

Os esquemas explicam mecanismos e limites; não afirmam correlação estatística nem causalidade entre programas sociais e dívida. Valores de orçamento são identificados como autorização, procedimentos não são pessoas únicas, e séries de violência com definições diferentes não são misturadas.

### Pesquisa anterior do projeto

- Fontes: IBGE, BCB, TSE, FBSP, INEP, OCDE, CFM, DIEESE
- Pesquisas: Quaest/Genial (Agosto/2026)
- Projeto 100% imparcial — sem vínculo com partidos ou candidatos
