# 🔬 PROMPT DE PESQUISA — GEMINI 2.5 PRO
## Projeto: Scrollytelling Eleições 2026

> **INSTRUÇÃO**: Copie todo o conteúdo abaixo e cole como prompt no Gemini 2.5 Pro.

---

## INÍCIO DO PROMPT

Você é um pesquisador de dados factuais para um projeto jornalístico digital (Scrollytelling) sobre as Eleições Presidenciais Brasileiras de 2026. Sua missão é levantar dados REAIS, ATUALIZADOS e com FONTES VERIFICÁVEIS para popular o site.

### REGRAS ABSOLUTAS
1. **IMPARCIALIDADE TOTAL**: Você NÃO tem opinião. Apresente apenas fatos verificáveis.
2. **FONTES OBRIGATÓRIAS**: Todo dado numérico deve ter fonte (instituição) e data de referência.
3. **EQUILÍBRIO**: Para cada candidato, forneça a MESMA quantidade de informação (mesma estrutura JSON).
4. **ATUALIDADE**: Priorize dados de 2025 e 2026. Use os mais recentes disponíveis.
5. **FORMATO**: Entregue EXCLUSIVAMENTE em formato JSON, seguindo a estrutura fornecida abaixo.
6. **LINGUAGEM**: Português brasileiro, registro jornalístico formal-acessível.
7. **SEM JUÍZO DE VALOR**: Use "afirma que", "propõe", "dados indicam" — nunca "promete", "garante", "falha em".

---

## BLOCO 1 — DADOS MACROECONÔMICOS (Cena 1: Panorama)

Pesquise e forneça:

| # | Dado | Fonte Primária |
|---|------|----------------|
| 1 | IPCA acumulado 12 meses (último disponível até ago/2026) | IBGE |
| 2 | Dívida Pública Bruta (% do PIB) — dado mais recente | Tesouro Nacional / BCB |
| 3 | Projeção da dívida/PIB para 2027 | Relatório Focus (BCB) ou IFI |
| 4 | Série histórica dívida/PIB anual de 2014 a 2026 (13 pontos) | BCB |
| 5 | PIB — crescimento acumulado no ano / projeção anual 2026 | IBGE / Focus |
| 6 | Taxa de desemprego — PNAD Contínua (último trimestre) | IBGE |
| 7 | Taxa Selic vigente em agosto/2026 | BCB (Copom) |
| 8 | Preço médio da cesta básica nacional | DIEESE |
| 9 | Poder de compra: R$100 em jan/2022 equivalem a quanto em ago/2026? | Cálculo via IPCA acumulado |
| 10 | Data oficial do 1º turno das eleições 2026 | TSE |

---

## BLOCO 2 — SAÚDE PÚBLICA (Cena 2)

| # | Dado | Fonte Primária |
|---|------|----------------|
| 1 | Razão médico por 1.000 habitantes (Brasil) | CFM |
| 2 | Mesma métrica para: média OCDE, Argentina, Chile, Portugal | OCDE Health Stats |
| 3 | Tempo médio de espera no SUS (consulta especializada) | DataSUS / CNS |
| 4 | Tempo médio de espera no SUS (cirurgia eletiva) | DataSUS / CNS |
| 5 | Orçamento federal da saúde 2026 (LOA) em R$ bilhões | LOA 2026 / Câmara |
| 6 | Gasto público em saúde per capita — Brasil vs. 3-4 países comparáveis | OMS / OCDE |
| 7 | Leitos SUS por 1.000 habitantes | DataSUS / CNES |
| 8 | Fila do SUS: procedimentos represados (se disponível) | CNS / DataSUS |

---

## BLOCO 3 — SEGURANÇA PÚBLICA (Cena 3)

| # | Dado | Fonte Primária |
|---|------|----------------|
| 1 | Total de homicídios no Brasil (último ano completo) | FBSP (Anuário) |
| 2 | Taxa de homicídios por 100 mil hab. (nacional) | FBSP / IPEA |
| 3 | Taxa de homicídios por UF (27 estados) — para mapa | FBSP |
| 4 | Série histórica nacional de homicídios (2014-2025) — 12 pontos | Atlas da Violência |
| 5 | Top 5 estados com MAIOR taxa | FBSP |
| 6 | Top 5 estados com MAIOR REDUÇÃO % nos últimos 5 anos | FBSP |
| 7 | Dados de roubo/furto de celulares OU veículos (nacional) | Sinesp / FBSP |
| 8 | Efetivo policial por 100 mil hab. (Brasil vs. média ONU) | FBSP / UNODC |

---

## BLOCO 4 — EDUCAÇÃO (Cena 4)

| # | Dado | Fonte Primária |
|---|------|----------------|
| 1 | Nota do Brasil no PISA — Leitura, Matemática, Ciências (último) | OCDE PISA |
| 2 | Posição/ranking do Brasil no PISA | OCDE PISA |
| 3 | IDEB — ensino fundamental (anos iniciais e finais) e médio | INEP |
| 4 | Taxa de evasão escolar no ensino médio | INEP / IBGE |
| 5 | Taxa de analfabetismo funcional | INAF / IBGE PNAD |
| 6 | Gasto público por aluno (Brasil) vs. média OCDE (em USD PPP) | OCDE Education |
| 7 | Número de jovens 15-17 anos fora da escola | IBGE PNAD |

---

## BLOCO 5 — INDICADORES ESTRUTURAIS (Cena 5: Transição)

| # | Dado | Fonte Primária |
|---|------|----------------|
| 1 | Resultado primário do governo federal (último, R$ bi e % PIB) | Tesouro Nacional |
| 2 | % do orçamento federal destinado à educação | LOA 2026 |
| 3 | Posição do Brasil no Doing Business / B-Ready (Banco Mundial) | Banco Mundial |
| 4 | Carga tributária total (% do PIB) | Receita Federal |
| 5 | Composição tributária (% consumo vs. renda vs. patrimônio) | Receita / OCDE |
| 6 | 2-3 exemplos de países emergentes com reformas bem-sucedidas (breve) | OCDE / Banco Mundial |

---

## BLOCO 6 — CANDIDATOS (Cenas 6-11)

Para **CADA UM** dos 6 candidatos abaixo, pesquise **EXATAMENTE** a mesma estrutura:

### Lista de Candidatos:
1. **Luiz Inácio Lula da Silva** (PT) — Presidente, busca reeleição
2. **Flávio Bolsonaro** (PL) — Senador, direita
3. **Romeu Zema** (Novo) — Governador de MG
4. **Ronaldo Caiado** (União Brasil) — Governador de GO
5. **Renan Santos** (Missão) — Líder do MBL
6. **Augusto Cury** (Avante) — Psiquiatra e escritor

### Estrutura por candidato (IDÊNTICA para todos):

| Campo | Descrição |
|-------|-----------|
| `nome_completo` | Nome completo oficial |
| `partido` | Sigla e nome do partido |
| `numero_urna` | Número na urna (se já definido pelo TSE) |
| `cargo_atual` | Cargo que ocupa atualmente |
| `idade` | Idade em agosto/2026 |
| `estado_natal` | Estado de nascimento |
| `formacao` | Formação acadêmica |
| `bio` | Biografia resumida — 4 a 5 frases, tom neutro |
| `ideologia` | Posição no espectro político (escala: extrema-esquerda a extrema-direita) |
| `vice` | Vice-candidato(a) anunciado(a), se já definido |
| `timeline` | Array de 5-7 marcos políticos/profissionais com { ano, evento } |
| `propostas` | Array de 4-5 propostas de campanha verificáveis { tema, descricao } |
| `pontos_fortes` | Array de 3 realizações/pontos positivos FACTUAIS com fonte |
| `pontos_atencao` | Array de 3 pontos de atenção/críticas FACTUAIS com fonte |
| `pesquisa_eleitoral` | Objeto: { intencao_voto_1t_pct, rejeicao_pct, instituto, data_pesquisa } |
| `cor_partido` | Hex da cor oficial do partido |

> **REGRA DE EQUILÍBRIO**: Cada candidato DEVE ter exatamente 3 pontos fortes e 3 pontos de atenção. Mesma profundidade para todos. Se um candidato tem menos informação disponível, pesquise mais — não encurte.

---

## FORMATO DE ENTREGA

Entregue **UM ÚNICO JSON** com esta estrutura:

```json
{
  "metadata": {
    "data_pesquisa": "2026-08-24",
    "pesquisador": "Gemini 2.5 Pro",
    "projeto": "Scrollytelling Eleições 2026",
    "aviso": "Dados factuais coletados de fontes públicas. Sem viés editorial.",
    "fontes_consultadas": [
      "IBGE", "BCB", "TSE", "IPEA", "FBSP", "INEP", "OCDE", 
      "DataSUS", "CFM", "DIEESE", "Tesouro Nacional", "Receita Federal"
    ]
  },
  "data_eleicao_1t": "2026-10-04",
  "cena_1_panorama": {
    "ipca_12m": { "valor": "", "unidade": "%", "data_ref": "", "fonte": "IBGE" },
    "divida_pib": { "valor": "", "unidade": "% do PIB", "data_ref": "", "fonte": "" },
    "divida_pib_projecao_2027": { "valor": "", "unidade": "% do PIB", "fonte": "" },
    "serie_divida_pib": [
      { "ano": 2014, "valor": 0 },
      { "ano": 2015, "valor": 0 },
      { "ano": 2016, "valor": 0 },
      { "ano": 2017, "valor": 0 },
      { "ano": 2018, "valor": 0 },
      { "ano": 2019, "valor": 0 },
      { "ano": 2020, "valor": 0 },
      { "ano": 2021, "valor": 0 },
      { "ano": 2022, "valor": 0 },
      { "ano": 2023, "valor": 0 },
      { "ano": 2024, "valor": 0 },
      { "ano": 2025, "valor": 0 },
      { "ano": 2026, "valor": 0 }
    ],
    "pib_crescimento": { "valor": "", "unidade": "%", "tipo": "acumulado_ano", "data_ref": "", "fonte": "" },
    "desemprego": { "valor": "", "unidade": "%", "trimestre": "", "fonte": "IBGE PNAD" },
    "selic": { "valor": "", "unidade": "% a.a.", "data_ref": "", "fonte": "BCB" },
    "cesta_basica": { "valor": "", "unidade": "R$", "cidade_ref": "São Paulo", "data_ref": "", "fonte": "DIEESE" },
    "poder_compra_r100_2022": { "valor_equivalente_2026": "", "unidade": "R$", "fonte": "Cálculo IPCA" }
  },
  "cena_2_saude": {
    "medicos_por_mil_hab_brasil": { "valor": "", "fonte": "" },
    "medicos_por_mil_hab_comparativo": [
      { "pais": "Brasil", "valor": 0 },
      { "pais": "Média OCDE", "valor": 0 },
      { "pais": "Argentina", "valor": 0 },
      { "pais": "Chile", "valor": 0 },
      { "pais": "Portugal", "valor": 0 }
    ],
    "espera_consulta_especializada": { "valor": "", "unidade": "dias", "fonte": "" },
    "espera_cirurgia_eletiva": { "valor": "", "unidade": "dias/meses", "fonte": "" },
    "orcamento_saude_2026": { "valor": "", "unidade": "R$ bilhões", "fonte": "" },
    "gasto_saude_per_capita_comparativo": [
      { "pais": "Brasil", "valor_usd": 0 },
      { "pais": "", "valor_usd": 0 },
      { "pais": "", "valor_usd": 0 },
      { "pais": "", "valor_usd": 0 }
    ],
    "leitos_sus_por_mil": { "valor": "", "fonte": "" },
    "fila_sus_procedimentos": { "valor": "", "unidade": "milhões", "fonte": "" }
  },
  "cena_3_seguranca": {
    "homicidios_total": { "valor": "", "ano_ref": "", "fonte": "FBSP" },
    "taxa_homicidios_100mil": { "valor": "", "fonte": "" },
    "taxa_por_uf": [
      { "uf": "AC", "sigla": "AC", "nome": "Acre", "taxa": 0, "total": 0 }
    ],
    "serie_homicidios": [
      { "ano": 2014, "total": 0, "taxa": 0 }
    ],
    "top5_maiores_taxas": [],
    "top5_maior_reducao": [],
    "roubos_furtos": { "tipo": "", "total": "", "ano_ref": "", "fonte": "" },
    "efetivo_policial_por_100mil": { "brasil": "", "media_onu": "", "fonte": "" }
  },
  "cena_4_educacao": {
    "pisa": {
      "leitura": 0, "matematica": 0, "ciencias": 0,
      "ranking_posicao": "", "total_paises": "", "ano_ref": "", "fonte": "OCDE"
    },
    "ideb": {
      "fund_anos_iniciais": 0, "fund_anos_finais": 0, "ensino_medio": 0,
      "ano_ref": "", "fonte": "INEP"
    },
    "evasao_ensino_medio": { "valor": "", "unidade": "%", "fonte": "" },
    "analfabetismo_funcional": { "valor": "", "unidade": "%", "fonte": "" },
    "gasto_por_aluno_usd_ppp": { "brasil": 0, "media_ocde": 0, "fonte": "" },
    "jovens_fora_escola_15_17": { "valor": "", "unidade": "milhões", "fonte": "" }
  },
  "cena_5_transicao": {
    "resultado_primario": { "valor_rbi": "", "valor_pct_pib": "", "data_ref": "", "fonte": "" },
    "pct_orcamento_educacao": { "valor": "", "fonte": "" },
    "ranking_doing_business": { "posicao": "", "total_paises": "", "ano_ref": "", "fonte": "" },
    "carga_tributaria_pct_pib": { "valor": "", "fonte": "" },
    "composicao_tributaria": {
      "consumo_pct": "", "renda_pct": "", "patrimonio_pct": "", "fonte": ""
    },
    "exemplos_reformas": [
      { "pais": "", "reforma": "", "resultado": "", "fonte": "" }
    ]
  },
  "candidatos": {
    "lula": {
      "nome_completo": "",
      "partido": "PT",
      "numero_urna": "",
      "cargo_atual": "",
      "idade": "",
      "estado_natal": "",
      "formacao": "",
      "bio": "",
      "ideologia": "",
      "vice": "",
      "cor_partido": "#ED1C24",
      "timeline": [
        { "ano": "", "evento": "" }
      ],
      "propostas": [
        { "tema": "", "descricao": "" }
      ],
      "pontos_fortes": [
        { "fato": "", "fonte": "" }
      ],
      "pontos_atencao": [
        { "fato": "", "fonte": "" }
      ],
      "pesquisa_eleitoral": {
        "intencao_voto_1t_pct": "",
        "rejeicao_pct": "",
        "instituto": "",
        "data_pesquisa": ""
      }
    },
    "flavio_bolsonaro": { "cor_partido": "#003DA5" },
    "zema": { "cor_partido": "#FF6600" },
    "caiado": { "cor_partido": "#2651A1" },
    "renan_santos": { "cor_partido": "#4A7C2E" },
    "augusto_cury": { "cor_partido": "#F58220" }
  }
}
```

> **IMPORTANTE**: Para os candidatos `flavio_bolsonaro`, `zema`, `caiado`, `renan_santos` e `augusto_cury`, preencha com a MESMA estrutura completa mostrada no exemplo do `lula`. O exemplo acima está abreviado para economizar espaço — mas TODOS devem ter todos os campos preenchidos.

> **IMPORTANTE 2**: Se algum dado NÃO for encontrado com fonte confiável, preencha o valor com `"[DADO NÃO DISPONÍVEL]"` e a fonte com `"Não localizado em fontes públicas até a data da pesquisa"`. NÃO invente dados.

## FIM DO PROMPT
