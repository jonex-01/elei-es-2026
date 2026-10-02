# Comparações e evidências · revisão em 02/10/2026

As séries publicadas são observações disponíveis nesta revisão. Não incluem previsão de 2026. Cada gráfico informa população, período e unidade; a tabela e os CSVs permitem conferir os pontos sem JavaScript.

- **Renda:** `renda-historico-2026-10-02.json` documenta pesos, amostra, hashes dos ZIPs, médias oficiais e IPCA mensal. Quantis ponderados calculados pelo projeto, sem interpolação ou intervalos de confiança. Correção pelo IPCA nacional médio do trimestre, diferente dos deflatores regionais oficiais da PNAD. Renda habitual positiva de todos os trabalhos de ocupados 14+. Não é renda familiar per capita.
- **PIB:** WDI, crescimento real total e por habitante; composição multiplicativa das taxas de 2023–2025 com 2022 = 100. Mundo, América Latina e Caribe de todos os níveis de renda (LCN), renda média (MIC) e renda média alta (UMC) têm abrangências distintas. Não são contrafactuais do Brasil. Consulta preservada no JSON, inclusive metadados da atualização. Nenhum ranking nominal em dólar foi convertido em crescimento real.
- **PISA:** tabelas I.B1.2a.36–38 do volume I de 2025; linhas Brazil e OECD average-35. Referência constante de 35 economias; médias e erros-padrão preservados. A menor distância é decomposição descritiva, sem teste próprio de significância da diferença entre trajetórias. A estabilidade brasileira entre 2022 e 2025 segue a interpretação publicada pela OCDE. Não atribuímos a queda externa a guerras.
- **Trabalho:** SIDRA 4099 (desocupação 4099, subutilização 4118) e 6461 (participação 4096), segundo trimestre 2022–2026. As taxas têm denominadores distintos. Valores das 27 UFs em 2025 e 2026 preservados no JSON; amplitude estadual não é taxa regional. Nenhum benefício social determina automaticamente classificação de ocupação.
- **Fiscal:** RTN agosto/2026, mesmo acumulado janeiro–agosto. Mudanças reais da receita/despesa não são diferenças nominais do déficit. Categorias selecionadas não cobrem toda a decomposição. Governo Central e setor público consolidado têm abrangências distintas.
- **Saúde:** RAG 2025 quadro 5, execução federal do MS em ano completo, não todo o SUS; RQPC 1/2026 quadro 4, execução até abril, créditos anuais. Não extrapolar quatro meses. Valores de execução transcritos em reais e apresentados em bilhões arredondados. Quadro 30 do RAG: mortalidade neonatal/materna de 2025 preliminar; recorte indígena não tem a mesma definição/população do neonatal nacional.
- **Segurança:** FBSP Anuário 2026 tabela 1. Taxas estaduais por 100 mil, com notas de comparabilidade da fonte (incluindo SP e MG). Contagem nacional e taxas não são intercambiáveis. CSV de segurança inclui todas as UFs.
- **Fome:** SOFI 2026, subalimentação mundial anual. Não foi misturada com insegurança alimentar brasileira trienal; são indicadores e janelas distintos.

## Reprodução

`scripts/calculate_income_history.py` usa biblioteca padrão Python. Consulte `--help` e forneça os ZIPs oficiais, o JSON SIDRA de médias e o JSON do IPCA. Os nomes/hashes e as URLs estão na saída publicada. Não publicamos microdados individuais.

`scripts/build_comparison_evidence.py PASTA_ENTRADAS` requer `openpyxl` e os arquivos:

1. `pisa-tables.xlsx`: [planilha oficial OCDE](https://stat.link/mrq53f).
2. `NY.GDP.MKTP.KD.ZG.json`: API WDI `/v2/country/BRA;WLD;LCN;ARG;CHL;COL;MEX/indicator/NY.GDP.MKTP.KD.ZG?format=json&date=2022:2025&per_page=100`.
3. `gdp-peers.json`: mesma API, países `BRA;WLD;LCN;MIC;UMC`, indicador `NY.GDP.PCAP.KD.ZG`.
4. `labor-series.json`, `participation-series.json`, `labor-uf.json`: URLs completas em `comparacoes-evidencias-2026-10-02.json`.

O script lê a renda histórica já calculada e gera JSON auditável e o módulo JS agregado. Revisões futuras nas fontes podem mudar resultados: guarde os arquivos e compare hashes antes de substituir a revisão. Execute `node generate_macro.mjs` a partir da pasta do site para atualizar HTML e CSVs.

## Referência em vídeo

O vídeo indicado pelo usuário foi consultado pela descrição/capítulos e por uma resposta do Gemini. O acesso direto à transcrição pelo navegador não foi concluído; o Gemini produziu timestamps incompatíveis com a duração, inclusive após pedido de conferência. Sua resposta serviu apenas como pista temática. Não tratamos essa análise automática como transcrição validada nem como fonte dos valores publicados. Os números do site usam as fontes primárias vinculadas em cada comparação.

## Lacunas mantidas explícitas

Ainda não estimamos intervalos de confiança dos quantis de renda, renda domiciliar regional, medianas/P90 nacionais de espera no SUS ou efeitos causais de programas, gastos, guerras e benefícios no emprego. “Em aberto” não é confirmação de uma hipótese. A mesma cautela vale para atribuições favoráveis e desfavoráveis a governos.

O CSV de comparações econômicas passa a formato longo: uma linha para cada referência/valor. Assim, gráficos com três séries não perdem a terceira coluna na exportação.
