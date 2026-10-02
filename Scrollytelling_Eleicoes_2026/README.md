# 🗳️ Scrollytelling Eleições 2026

Guia independente das Eleições Presidenciais Brasileiras de 2026, com indicadores, propostas documentadas e limites das análises.

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

- 🎨 **Temas claro e escuro** com a mesma apresentação para todas as candidaturas
- ⏱️ **Countdown em tempo real** para o 1º turno (4/Out/2026)
- 📊 **Gráficos de linhas** com valores consultáveis, fontes e escalas explícitas
- 🌙 **Toggle Dark/Light mode** com persistência
- 📍 **Navegação por capítulos** com acesso às candidaturas e ao comparador
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

A economia usa `js/economy-data.js`, organizada em bolso, trabalho, produção, contas públicas e futuro. Cada indicador inclui unidade, referência, definição, limite e fonte. Os gráficos distinguem variação de contribuição e períodos completos de períodos parciais. Os dados observados de 2026 não são tratados como um mandato encerrado.

`js/economy-cycles.js` organiza os temas na sequência **Pergunta → dados comparáveis → explicação → interpretação alternativa → conclusão que os dados permitem**. Essa leitura fica visível em HTML estático. Os indicadores completos, exemplos interativos e metodologia ficam em detalhes expansíveis por teclado. As interpretações alternativas são confrontadas com evidências; não recebem o mesmo peso automaticamente. Cada conclusão indica também o que acompanhar para avançar na análise.

`js/business-data.js` acrescenta empresas, pedidos de recuperação judicial e pedidos de falência. O histórico 2012–2025 foi transcrito dos gráficos revisados da Serasa Experian publicados em 07/04/2026; o gerador exporta processos e CNPJs separadamente em `dados/empresas-historico-2026-10-02.json`. Não concatenamos a antiga metodologia com a série revisada. A referência parcial localizada para 2026 é janeiro–abril; o indicador tem defasagem informacional e revisões. A comparação de aberturas e baixas usa maio–agosto/2024 e maio–agosto/2025, conforme os boletins do MEMP, enquanto o painel cadastral informa referência até julho/2026. Novo Caged usa vínculos de agosto/2026 e o acumulado janeiro–agosto. Pedidos, falências decretadas, baixas, registros ativos e empregos não são equivalentes, e os agregados não identificam perdas de vagas por falência.

`dados/analises-economia-2026-10-02.csv` exporta as tabelas dessa sequência, com períodos, limites e fontes. O investimento é comparado em duas janelas separadas: variação trimestral com ajuste sazonal e acumulado de quatro trimestres. A decomposição da mudança da DBGG/PIB entre janeiro e agosto vem do BCB: juros +6,5 p.p., emissões líquidas +1,5 p.p., PIB nominal −3,6 p.p. e câmbio −0,2 p.p., total +4,2 p.p. Ela não é somada à conta fiscal de 12 meses, que tem outra abrangência.

O gerador também exporta `dados/economia-2026-10-02.csv` com os indicadores e links. A inflação acumulada de jan/2023 a ago/2026 (17,90%) é calculada pelo produto de 44 fatores mensais da série SGS 433, não pela soma das taxas. A informalidade usa SIDRA 8513, variável 12466; a taxa de investimento usa SIDRA 6727, variável 2517. O SOFI 2026 usa o triênio 2023–2025.

A conta fiscal soma déficit primário (0,62%) e juros nominais (8,86%) no déficit nominal (9,48% do PIB), todos do setor público consolidado nos 12 meses até agosto. A DBGG tem outra abrangência e não é obtida somando esses fluxos. O RTN e o boletim trimestral do Governo Geral aparecem em explicações separadas com seus próprios conceitos e períodos.

### Renda mediana e leitura do mercado de trabalho

`js/income-work-analysis.js` aprofunda média, mediana, percentis, desalento, subocupação, participação e diferenças entre a PNAD e o Novo Caged. Dois exemplos interativos ilustram a influência de uma renda alta na média e a queda da desocupação quando alguém sai da força de trabalho. Os exemplos são fictícios e não são usados para atribuir a evolução real do Brasil a um mecanismo específico.

A mediana de R$ 2.300 é uma **estimativa do projeto**, obtida nos microdados trimestrais públicos de abril–junho de 2026. A comparação é com a média nominal do mesmo trimestre, R$ 3.738, e não com a média real de junho–agosto, R$ 3.777. Incluímos apenas pessoas ocupadas (`VD4002=1`) com renda habitual positiva de todos os trabalhos (`VD4019`), ponderadas pelo peso calibrado (`V1028`). Não incluímos rendimentos de benefícios sociais nessa variável. Os resultados são estimativas pontuais sem intervalo de confiança.

Para reproduzir, baixe `PNADC_022026.zip` na pasta oficial de microdados do IBGE indicada no JSON e execute, sem descompactar nem instalar dependências:

```bash
python scripts/calculate_income.py /caminho/PNADC_022026.zip dados/renda-pnad-2026-2tri.json --module js/income-estimates.js
node generate_macro.mjs
```

O cálculo confere a média e a população ocupada contra os totais independentes divulgados no SIDRA. O JSON registra variáveis, critérios, fonte e SHA-256 do ZIP. A mediana é o menor valor em que a soma dos pesos alcança 50%; percentis usam o mesmo critério e não interpolam valores. Dados individuais não são publicados nem versionados no repositório.

O gráfico de dívida usa a série SGS 13762 do BCB (76,27% em dez/2024; 78,64% em dez/2025; 82,86% em ago/2026). A comparação de Ideb usa os resultados nacionais de 2023 e 2025 do Inep. O percentual de estudantes abaixo do nível 2 em matemática no PISA 2025 é calculado como 100% − 28%, conforme a nota da OCDE sobre o Brasil.

Séries e estimativas antigas sem metodologia rastreável deixaram de ser exibidas: filas e tempos médios do SUS, leitos, comparação internacional de médicos, falências, roubos, facções e jovens fora da escola. Os arquivos de pesquisa antigos e os campos macro de `js/data.js` permanecem como material legado, mas não alimentam os quatro blocos nem a faixa macro. Os dados eleitorais e os perfis de candidatos não foram revisados nesta atualização.

Os esquemas explicam mecanismos e limites; não afirmam correlação estatística nem causalidade entre programas sociais e dívida. Valores de orçamento são identificados como autorização, procedimentos não são pessoas únicas, e séries de violência com definições diferentes não são misturadas.

### Candidaturas: revisão documental de 02/10/2026

`js/candidates-data.mjs` substitui os dados eleitorais antigos na interface. A revisão usa as **13 candidaturas listadas na página de planos do TSE**, com partido e número conforme essa fonte. A inclusão não equivale à auditoria da situação do registro ou da elegibilidade. Caiado passa de UNIÃO/44 para **PSD/55**. A ordem é alfabética e os quatro temas são iguais para todos.

Cada perfil segue **pergunta → proposta e dados comparáveis → explicação → interpretação alternativa → conclusão permitida**. Os resumos partem do índice temático do TSE, com página indicada e links para índice e plano. Os mecanismos e contrapontos são inferências do projeto, identificadas no texto. Há passagens adicionais lidas diretamente em cinco PDFs, registradas em `DOCUMENT_NOTES`; não se afirma leitura integral de todos os planos.

Custos, financiamento, cronogramas e compatibilidade jurídica não foram auditados integralmente. “Não auditado” não significa ausência no plano. Trajetórias, controvérsias e declarações antigas sem documentação suficiente não são exibidas; novas inclusões exigem fontes específicas e distinção entre alegação, declaração e decisão. Percentuais de pesquisas estimados e gráficos de checagens sem comprovação foram retirados. Não há notas de ideologia ou de viabilidade.

O comparador em `js/candidate-view.mjs` confronta duas candidaturas no mesmo tema e permite copiar uma URL que preserva as seleções. No celular, as candidaturas aparecem dentro de cada critério, antes do próximo critério. Sem JavaScript, os 13 perfis e uma comparação inicial continuam disponíveis em HTML. Não há ranking ou recomendação de voto.

**Apresentação principal:** manter os seis capítulos originais (Lula, Flávio, Zema, Caiado, Renan e Cury), cada um com foto, identidade, apresentação biográfica, características do programa, propostas e botão para sua página individual. Essa estrutura é uma preferência explícita do usuário: não substituir os capítulos por um diretório ou grade de links. As outras sete candidaturas ficam em uma seção adicional expansível. O comparador complementa a apresentação. `js/candidate-overviews.mjs` contém as apresentações e suas fontes; rótulos de cargos distinguem atuação atual e passada. Banners partidários antigos divergentes dos registros atuais não são reaproveitados para Caiado ou Cury.

Para gerar os perfis, diretório, comparação inicial e arquivo público de referências:

```bash
node generate_candidates.mjs
# O comando anterior node generate_pages.js também continua funcionando.
```

`dados/candidatos-2026-10-02.json` contém os 52 recortes, fontes e limites. O gerador é idempotente e preserva os blocos macro. Atualizações exigem nova consulta à fonte, revisão humana das sínteses e atualização da data. `js/data.js` e `js/data_fase2.js` permanecem apenas como legado, não são carregados pela interface e não devem ser reutilizados como fontes verificadas.

### Saúde, educação e segurança: a mesma sequência de análise

`js/social-data.js` acrescenta seis perguntas com comparação, explicação, hipótese alternativa, conclusão e evidências a acompanhar. Saúde separa produção, pessoas e espera, e usa a execução do INCA até agosto/2026 como exemplo delimitado — nunca como total da Saúde. A comparação do rol de cirurgias não reproduz o percentual da notícia, que diverge dos totais informados. Fila e fluxo têm um exemplo fictício, sem estimar uma fila nacional ausente.

Educação mostra o Ideb observado de 2005–2025, confrontado com matemática do Saeb nas redes públicas (recorte diferente). O Inaf usa o percentual agregado publicado, sem somar níveis já arredondados: 27% em 2015 e 29% em 2018/2024. O PISA não é tratado como percentual de todos os brasileiros.

Segurança usa exclusivamente o histórico revisado do Anuário 2026: 44.220 MVI em 2024 e 40.775 em 2025. A queda de 8,2% é da taxa; a queda do total é 7,79%. O histórico de homicídios de mulheres inclui feminicídios, impedindo soma duplicada. As taxas e participações têm denominadores identificados.

Os gráficos usam anos no eixo horizontal com espaçamento temporal proporcional, eixo vertical iniciado em zero, cores e traçados distintos, identificação acessível e tabela opcional. Não interpolam resultados em anos sem avaliação. Os arquivos `dados/saude-2026-10-02.csv`, `dados/educacao-2026-10-02.csv` e `dados/seguranca-2026-10-02.csv` exportam todas as comparações, inclusive as três séries do Ideb, com limites e fontes.
