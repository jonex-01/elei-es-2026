# 🔬 PROMPT DE PESQUISA — FASE 2: PLANOS DE GOVERNO & SABATINAS
## Projeto: Scrollytelling Eleições 2026

> **INSTRUÇÃO**: Copie todo o conteúdo abaixo (a partir de "INÍCIO DO PROMPT") e cole como prompt no Gemini 2.5 Pro / 3.1 Pro.
> **CONTEXTO**: Este prompt é COMPLEMENTAR ao `Prompt_Pesquisa_Gemini.md` original. Ele cobre duas novas seções que serão adicionadas às páginas individuais de cada candidato.

---

## INÍCIO DO PROMPT

---

Você é um pesquisador sênior de políticas públicas e análise política para um projeto jornalístico digital (Scrollytelling) sobre as Eleições Presidenciais Brasileiras de 2026. Este é um trabalho de FASE 2 — os dados básicos dos candidatos já foram coletados. Agora, sua missão é produzir **duas pesquisas profundas**:

**PESQUISA A** → Fact-check das Sabatinas da TV Globo (2026) para cada candidato
**PESQUISA B** → Análise detalhada do Plano de Governo de cada candidato, seguindo um método rigoroso de 8 passos

---

## REGRAS ABSOLUTAS (LEIA ANTES DE TUDO)

1. **IMPARCIALIDADE TOTAL**: Você NÃO tem opinião. Apresente apenas fatos verificáveis. O leitor decide.
2. **FONTES OBRIGATÓRIAS**: TODA afirmação factual, dado numérico ou referência internacional DEVE ter fonte (instituição, documento, URL quando possível) e data de referência. Afirmações sem fonte serão descartadas.
3. **EQUILÍBRIO RIGOROSO**: Todos os candidatos recebem EXATAMENTE a mesma estrutura, quantidade e profundidade de análise. Nenhum candidato recebe mais espaço, mais detalhes ou tratamento privilegiado.
4. **ATUALIDADE**: Use dados de 2025 e 2026. Se o dado mais recente for de 2024, indique claramente.
5. **FORMATO**: Entregue EXCLUSIVAMENTE em formato JSON, seguindo a estrutura fornecida ao final deste prompt.
6. **LINGUAGEM**: Português brasileiro, registro jornalístico formal-acessível. Usar "afirma que", "propõe", "dados indicam" — NUNCA "promete", "garante", "falha em".
7. **HONESTIDADE SOBRE LACUNAS**: Se um dado não for encontrado com fonte confiável, preencha com `"[DADO NÃO DISPONÍVEL]"` e fonte `"Não localizado em fontes públicas até a data da pesquisa"`. NÃO invente dados.
8. **SEPARAÇÃO FATO vs. INTERPRETAÇÃO**: Toda análise de viabilidade deve ser apresentada como questionamento ("Como o candidato pretende...?"), nunca como sentença definitiva ("Isso não vai funcionar").

---

## LISTA DE CANDIDATOS

Para referência em ambas as pesquisas:

| # | Candidato | Partido | Sigla Interna |
|---|-----------|---------|---------------|
| 1 | Luiz Inácio Lula da Silva | PT | `lula` |
| 2 | Flávio Bolsonaro | PL | `flavio_bolsonaro` |
| 3 | Romeu Zema | Novo | `zema` |
| 4 | Ronaldo Caiado | União Brasil | `caiado` |
| 5 | Renan Santos | Missão | `renan_santos` |
| 6 | Augusto Cury | Avante | `augusto_cury` |

---

# ═══════════════════════════════════════════
# PESQUISA A — SABATINA DA TV GLOBO (FACT-CHECK)
# ═══════════════════════════════════════════

## Objetivo

Para cada candidato, pesquisar a **sabatina realizada pela TV Globo** (Jornal Nacional ou programa específico de entrevistas eleitorais) em 2026. O objetivo é produzir:

1. **Resumo da Sabatina**: Síntese jornalística de 150-250 palavras sobre os principais temas abordados, posicionamentos do candidato e momentos-chave.
2. **Fact-Check Categorizado**: Classificação de TODAS as afirmações verificáveis feitas pelo candidato durante a sabatina em 4 categorias:
   - ✅ **VERDADE** — Afirmação corroborada por dados oficiais ou fontes confiáveis
   - ❌ **MENTIRA** — Afirmação contradita por dados oficiais ou fontes confiáveis
   - ⚠️ **MEIA-VERDADE** — Afirmação parcialmente correta mas que omite contexto relevante, distorce dados ou exagera
   - 🔘 **NÃO AUDITÁVEL** — Afirmação que não pode ser verificada (opinião, promessa futura, dado sem fonte pública)

## Fontes Prioritárias para Fact-Check

Busque análises JÁ PUBLICADAS por agências de fact-check brasileiras reconhecidas:
- **Aos Fatos** (aosfatos.org)
- **Agência Lupa** (lupa.uol.com.br)
- **Estadão Verifica** (estadao.com.br/estadao-verifica)
- **UOL Confere** (uol.com.br/confere)
- **G1 Fato ou Fake** (g1.globo.com/fato-ou-fake)
- **Folha de S.Paulo** (Seção de checagem)
- **Poder360** (Seção de checagem)

> **IMPORTANTE**: Se a sabatina de 2026 de algum candidato ainda NÃO tiver ocorrido na data desta pesquisa, ou se NÃO houver fact-check disponível, preencha com `"[SABATINA NÃO REALIZADA/NÃO DISPONÍVEL ATÉ A DATA DA PESQUISA]"`. NÃO invente uma sabatina.

## Estrutura por Candidato (Sabatina)

Para CADA candidato, forneça:

```
sabatina_globo: {
  data_sabatina: "AAAA-MM-DD",
  programa: "Jornal Nacional / Outro",
  duracao_minutos: XX,
  resumo: "Texto de 150-250 palavras...",
  temas_abordados: ["Economia", "Saúde", ...],
  
  fact_check: {
    total_afirmacoes_verificadas: XX,
    verdades: {
      quantidade: XX,
      percentual: XX.X,
      exemplos: [
        {
          afirmacao: "O candidato disse que...",
          verificacao: "Dados do IBGE confirmam que...",
          fonte_verificacao: "Nome da agência de fact-check ou fonte primária",
          url_fonte: "https://..."
        }
      ]
    },
    mentiras: {
      quantidade: XX,
      percentual: XX.X,
      exemplos: [...]
    },
    meias_verdades: {
      quantidade: XX,
      percentual: XX.X,
      exemplos: [...]
    },
    nao_auditaveis: {
      quantidade: XX,
      percentual: XX.X,
      exemplos: [...]
    }
  },
  
  fonte_factcheck: "Nome da agência principal usada",
  url_factcheck: "https://..."
}
```

### Regras Específicas da Sabatina
- Liste no mínimo **2 exemplos** por categoria (se houver). Se uma categoria tiver 0 ocorrências, liste 0 exemplos.
- Os percentuais devem somar 100%.
- Cada exemplo deve ter a afirmação EXATA do candidato (ou paráfrase fidedigna) e a verificação com fonte.
- **NÃO CLASSIFIQUE POR CONTA PRÓPRIA**: Use classificações JÁ PUBLICADAS por agências de fact-check. Sua função é COMPILAR, não JULGAR.

---

# ═══════════════════════════════════════════
# PESQUISA B — PLANO DE GOVERNO DETALHADO
# ═══════════════════════════════════════════

## Objetivo

Para cada candidato, realizar uma análise profunda e estruturada do Plano de Governo registrado no TSE, seguindo um **método padronizado de 8 passos**.

## Método de Análise (8 Passos)

### PASSO 1 — Localizar o Plano de Governo Oficial
- Buscar o documento registrado no TSE (Tribunal Superior Eleitoral) via DivulgaCand
- Identificar o nome do documento (ex: "Livro Amarelo", "Plano Brasil Forte", etc.)
- Registrar: número de páginas, data de registro, URL do TSE

### PASSO 2 — Separar em Eixos Temáticos Principais
- Identificar os **5 a 6 eixos temáticos centrais** do plano de governo
- Eixos PADRONIZADOS (presentes para TODOS os candidatos, mesmo que o plano não os aborde explicitamente — nesse caso, indicar que o candidato não aborda o tema):
  1. 🏦 **Economia e Gestão Fiscal**
  2. 🏥 **Saúde**
  3. 🛡️ **Segurança Pública**
  4. 📚 **Educação**
  5. 🏛️ **Governança e Reforma do Estado**
- Eixos ESPECÍFICOS (até 2 extras por candidato, de acordo com suas propostas únicas):
  - Exemplos: "Geopolítica e Soberania" (Renan), "Saúde Mental" (Cury), "Agronegócio" (Caiado), etc.

### PASSO 3 — Separar cada Eixo em Propostas-Chave
- Para cada eixo, identificar **2 a 4 propostas-chave** (as mais relevantes e concretas)
- Priorizar propostas que tenham mecanismos descritos, não apenas intenções vagas

### PASSO 4 — Detalhar cada Proposta-Chave
Para cada proposta, fornecer:
- **a) Resumo Executivo** (2-3 frases): O que é, em linguagem simples
- **b) Diagnóstico** (dados reais): Os números do problema que a proposta tenta resolver. Usar fontes oficiais.
- **c) Mecanismo** (como funciona): COMO o candidato diz que vai implementar — instrumentos legais, prazos, orçamento

### PASSO 5 — Referências Internacionais
Para cada proposta-chave, buscar:
- **a) 📈 Onde funcionou**: Um caso internacional onde uma política SIMILAR foi implementada com resultados POSITIVOS. Incluir: país, período, dados de resultado, fonte.
- **b) 📉 Onde falhou ou teve efeitos colaterais**: Um caso internacional onde uma política SIMILAR teve resultados NEGATIVOS ou efeitos colaterais graves. Incluir: país, período, dados de resultado, fonte.

> **REGRA**: Se não houver precedente internacional claro, indique "Sem precedente internacional direto identificado" em vez de forçar uma comparação inadequada.

### PASSO 6 — Teste de Viabilidade
Para cada proposta-chave, responder (em formato de QUESTIONAMENTO, não de sentença):
- **a) 💰 Financiamento**: De onde vem o dinheiro? O plano especifica a fonte de recursos? Qual o custo estimado?
- **b) 🏛️ Aprovação Política**: Requer emenda constitucional? PEC? Lei ordinária? Qual a composição provável do Congresso e a viabilidade de aprovação?
- **c) ⏱️ Prazo Realista**: O candidato indica prazo? É viável tecnicamente dentro de um mandato (4 anos)?
- **d) ⚠️ Riscos e Objeções**: Quais os principais argumentos contrários? Quais grupos são afetados negativamente? Quais são os riscos de implementação?

### PASSO 7 — Painel de Viabilidade (Indicadores Rápidos)
Para cada proposta-chave, classificar em escala de 3 níveis:
- **Custo Fiscal**: `BAIXO` / `MÉDIO` / `ALTO`
- **Complexidade Política**: `BAIXA` / `MÉDIA` / `ALTA` (depende de aprovação no Congresso? PEC? Resistência de lobbies?)
- **Precedente Internacional**: `SIM` (há exemplos claros) / `PARCIAL` (há exemplos parcialmente comparáveis) / `NÃO` (proposta inédita ou sem comparação)

### PASSO 8 — Fontes
Listar TODAS as fontes usadas na análise de cada proposta, com:
- Nome da instituição/publicação
- Título do documento/artigo
- Data de publicação
- URL (quando disponível)

---

## INSTRUÇÕES ESPECÍFICAS POR CANDIDATO

### 1. LULA (PT)
- **Plano de Governo**: Buscar no TSE/DivulgaCand ou plataforma oficial de campanha 2026
- **Foco especial**: Comparar propostas com o que JÁ FOI FEITO nos mandatos anteriores (2003-2010, 2023-2026). Dados de execução vs. promessa.
- **Eixos prováveis**: Economia (valorização do salário mínimo, PAC), Social (Bolsa Família, Minha Casa), Meio Ambiente (desmatamento), Infraestrutura, Política Internacional
- **Atenção**: Ele é o presidente em exercício — as propostas devem ser analisadas também à luz do que ele JÁ CONSEGUIU ou NÃO CONSEGUIU fazer no mandato atual

### 2. FLÁVIO BOLSONARO (PL)
- **Plano de Governo**: Buscar no TSE/DivulgaCand ou plataforma oficial de campanha 2026
- **Foco especial**: Distinguir propostas PESSOAIS de Flávio vs. herança do governo Jair Bolsonaro (2019-2022). O que é continuidade e o que é novo?
- **Eixos prováveis**: Economia (desregulamentação, imposto único), Segurança (armamento, penas), Valores/Costumes, Agro, Relações Internacionais
- **Atenção**: Verificar dados factuais do governo Bolsonaro pai que ele cite como referência — conferir se os números batem

### 3. ROMEU ZEMA (NOVO)
- **Plano de Governo**: Buscar no TSE/DivulgaCand ou plataforma oficial de campanha 2026
- **Foco especial**: Usar MG como laboratório. Ele governou por 8 anos — quais resultados concretos de MG podem ser escalados para o Brasil? Quais não podem?
- **Eixos prováveis**: Privatizações, Corte de Gastos, Concessões, Eficiência na Gestão, Educação (vouchers), Desburocratização
- **Atenção**: Verificar os dados fiscais de MG (dívida cresceu ou caiu? Superávit real ou contábil? Impacto em serviços públicos?)

### 4. RONALDO CAIADO (UNIÃO BRASIL)
- **Plano de Governo**: Buscar no TSE/DivulgaCand ou plataforma oficial de campanha 2026
- **Foco especial**: Segurança pública como vitrine. Verificar os dados de Goiás em detalhe — a redução de criminalidade é real e sustentável? Quais metodologias foram usadas?
- **Eixos prováveis**: Segurança Pública, Agronegócio, Saúde (regionalização), Pacto Federativo, Infraestrutura do Centro-Oeste
- **Atenção**: Goiás está em Regime de Recuperação Fiscal — como ele justifica expandir gastos federais enquanto seu estado está sob restrição?

### 5. RENAN SANTOS (MISSÃO)
- **Plano de Governo**: "Livro Amarelo" — registrado no TSE. Buscar o documento completo.
- **Foco especial**: Propostas mais radicais e detalhadas (ZEEs, terras raras, frentes cidadãs, cesta de moedas). O plano tem alta ambição — verificar a viabilidade técnica de cada proposta.
- **Eixos prováveis**: Economia e Ajuste Fiscal, Assistencialismo vs. Produtividade (Frentes Cidadãs), ZEEs e Nordeste, Indústria Estratégica (Terras Raras), Geopolítica e Soberania
- **Atenção**: O candidato não tem experiência executiva. As propostas são tecnicamente sofisticadas — mas como ele pretende executá-las sem máquina pública e com um partido sem estrutura?
- **REFERÊNCIA**: O esboço abaixo serve como modelo do NÍVEL DE PROFUNDIDADE esperado para TODOS os candidatos. Use-o como benchmark de qualidade:

```
EXEMPLO DE PROFUNDIDADE ESPERADA (Renan Santos — Eixo Economia):

PROPOSTA: Ajuste Fiscal via "PEC de Transição"
- Diagnóstico: Dívida pública R$ 8,64 tri (18% de alta em 1 ano). Projeção IFI: 80% → 100% do PIB até 2030.
  Atualização: Dívida já superou R$ 9,28 tri (jul/2026). DBGG a 82,5% do PIB.
- Mecanismo: PEC baseada na PEC do Equilíbrio Fiscal. Economia de R$ 1,1 tri até 2031:
  • Desindexação Previdência/BPC (R$ 455 bi / R$ 91 bi ao ano)
  • Desvinculação Saúde/Educação/Fundeb (R$ 306 bi / R$ 61 bi ao ano)
  • Revisão Abono Salarial (R$ 108 bi / R$ 22 bi ao ano)
  • Redução Isenções Fiscais (R$ 104 bi / R$ 38 bi ao ano)
  • Fim dos Supersalários
- Onde funcionou: Estônia (2008-2010) — cortes de 20% no funcionalismo, retomada em 2011, dívida < 10% PIB
- Onde falhou: Grécia (pós-2010) — congelamento de pensões, PIB caiu 25%, desemprego de 28%
- Teste de Viabilidade:
  • Financiamento: A própria PEC gera as economias — mas exige aprovação prévia
  • Congresso: PEC de lame duck? Como convencer deputados de saída?
  • Supersalários: Lobby de juízes e procuradores — como enfrentar?
  • Risco social: Inflação dos pobres > IPCA geral — rede de proteção?
- Painel: Custo BAIXO | Complexidade ALTA | Precedente SIM
```

### 6. AUGUSTO CURY (AVANTE)
- **Plano de Governo**: Buscar no TSE/DivulgaCand ou plataforma oficial de campanha 2026
- **Foco especial**: Propostas inovadoras mas potencialmente vagas. Verificar se há MECANISMOS CONCRETOS ou se são apenas intenções.
- **Eixos prováveis**: Saúde Mental, Educação Emocional, Economia (PIB da Felicidade), Segurança (humanização prisional), Cultura e Valores
- **Atenção**: É o candidato com menos estrutura política. Suas propostas são originais mas podem carecer de detalhamento técnico — registre essa observação factualmente se for o caso.

---

## REGRA DE EQUILÍBRIO FINAL

Cada candidato DEVE ter:
- Mesmo número de eixos padronizados analisados (5)
- Pelo menos 2 propostas-chave por eixo (se o plano do candidato não abordar um eixo, registrar: "O plano de governo não apresenta propostas específicas para este eixo")
- Para cada proposta: 1 referência internacional positiva + 1 negativa (ou "não identificada")
- Teste de viabilidade com as 4 dimensões respondidas
- Painel de viabilidade com os 3 indicadores

Se um candidato tem um plano de governo mais detalhado que outro (ex: Renan Santos vs. Augusto Cury), **NÃO encurte o mais detalhado**. Em vez disso, **aprofunde o menos detalhado** buscando fontes externas, análises de especialistas e reportagens sobre as propostas do candidato.

---

## FORMATO DE ENTREGA (JSON)

Entregue **UM ÚNICO JSON** com a seguinte estrutura completa. O exemplo abaixo mostra a estrutura para UM candidato — replique EXATAMENTE para todos os 6.

```json
{
  "metadata": {
    "data_pesquisa": "2026-09-XX",
    "pesquisador": "Gemini",
    "projeto": "Scrollytelling Eleições 2026 — Fase 2",
    "descricao": "Pesquisa complementar: Sabatinas da TV Globo (fact-check) e Planos de Governo detalhados",
    "aviso": "Dados factuais compilados de fontes públicas. Fact-checks baseados em agências de verificação reconhecidas. Sem viés editorial.",
    "metodo": "Análise de 8 passos: (1) Localização do plano no TSE, (2) Eixos temáticos, (3) Propostas-chave, (4) Detalhamento, (5) Referências internacionais, (6) Teste de viabilidade, (7) Painel de indicadores, (8) Fontes verificáveis"
  },

  "candidatos": {
    "lula": {

      "sabatina_globo": {
        "data_sabatina": "2026-MM-DD",
        "programa": "Jornal Nacional",
        "duracao_minutos": 40,
        "resumo": "Texto jornalístico de 150-250 palavras resumindo a sabatina: temas abordados, posicionamentos do candidato, momentos mais relevantes, tom geral da entrevista...",
        "temas_abordados": ["Economia", "Saúde", "Educação", "Segurança", "Política Externa"],

        "fact_check": {
          "total_afirmacoes_verificadas": 18,
          "verdades": {
            "quantidade": 7,
            "percentual": 38.9,
            "exemplos": [
              {
                "afirmacao": "Citação exata ou paráfrase fidedigna do que o candidato disse",
                "verificacao": "Explicação da verificação com dados e fontes",
                "fonte_verificacao": "Aos Fatos / Lupa / Estadão Verifica",
                "url_fonte": "https://aosfatos.org/noticias/..."
              },
              {
                "afirmacao": "Segunda afirmação verificada...",
                "verificacao": "Verificação...",
                "fonte_verificacao": "Agência",
                "url_fonte": "https://..."
              }
            ]
          },
          "mentiras": {
            "quantidade": 3,
            "percentual": 16.7,
            "exemplos": [
              {
                "afirmacao": "...",
                "verificacao": "...",
                "fonte_verificacao": "...",
                "url_fonte": "..."
              }
            ]
          },
          "meias_verdades": {
            "quantidade": 5,
            "percentual": 27.8,
            "exemplos": [
              {
                "afirmacao": "...",
                "verificacao": "...",
                "fonte_verificacao": "...",
                "url_fonte": "..."
              }
            ]
          },
          "nao_auditaveis": {
            "quantidade": 3,
            "percentual": 16.7,
            "exemplos": [
              {
                "afirmacao": "...",
                "verificacao": "Afirmação de intenção futura / opinião subjetiva — não passível de verificação factual",
                "fonte_verificacao": "N/A",
                "url_fonte": ""
              }
            ]
          }
        },

        "fonte_factcheck_principal": "Nome da agência de fact-check que mais cobriu esta sabatina",
        "url_factcheck_principal": "https://..."
      },

      "plano_governo": {
        "documento_oficial": {
          "nome": "Nome oficial do documento (ex: 'Plano Brasil Justo', 'Livro Amarelo')",
          "paginas": 120,
          "data_registro_tse": "2026-MM-DD",
          "url_tse": "https://divulgacandcontas.tse.jus.br/...",
          "observacao": "Qualquer nota relevante sobre o documento"
        },

        "resumo_executivo_geral": "Parágrafo de 3-5 frases resumindo a visão geral do plano de governo: qual a tese central, quais os pilares, qual o tom (liberal, desenvolvimentista, humanista, etc.)",

        "eixos": [
          {
            "id": "economia",
            "nome": "Economia e Gestão Fiscal",
            "icone": "🏦",
            "tipo": "padronizado",
            "resumo_executivo": "O que o candidato propõe em 1 frase | O maior risco | O maior potencial",

            "propostas": [
              {
                "id": "prop_eco_1",
                "titulo": "Nome curto da proposta (ex: 'Ajuste Fiscal via PEC')",

                "resumo": "2-3 frases explicando a proposta em linguagem simples, acessível a qualquer leitor",

                "diagnostico": {
                  "texto": "Descrição do problema que a proposta tenta resolver, com dados reais",
                  "dados": [
                    {
                      "indicador": "Dívida Pública Federal",
                      "valor": "R$ 9,28 trilhões",
                      "data_ref": "Julho 2026",
                      "fonte": "Tesouro Nacional"
                    }
                  ]
                },

                "mecanismo": {
                  "texto": "COMO o candidato diz que vai implementar: instrumentos legais, prazos, orçamento",
                  "itens": [
                    {
                      "acao": "Descrição da ação específica proposta",
                      "instrumento_legal": "PEC / Lei Ordinária / Decreto / etc.",
                      "valor_estimado": "R$ XX bilhões (se o candidato informar)",
                      "prazo_candidato": "Prazo que o candidato afirma (se informar)"
                    }
                  ]
                },

                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Nome do país",
                    "periodo": "2008-2011",
                    "descricao": "O que foi feito e quais foram os resultados positivos (3-5 frases)",
                    "dados_resultado": "Dados concretos do resultado (ex: 'PIB cresceu X%, dívida caiu Y%')",
                    "fonte": "Nome da fonte + URL se possível"
                  },
                  "onde_falhou": {
                    "pais": "Nome do país",
                    "periodo": "2010-2015",
                    "descricao": "O que foi feito e quais foram os resultados negativos ou efeitos colaterais (3-5 frases)",
                    "dados_resultado": "Dados concretos (ex: 'desemprego subiu de X% para Y%')",
                    "fonte": "Nome da fonte + URL se possível"
                  }
                },

                "teste_viabilidade": {
                  "financiamento": "De onde vem o dinheiro? O plano especifica? Qual o custo estimado? (3-5 frases em formato de questionamento)",
                  "aprovacao_politica": "Requer PEC? Lei? Qual a composição provável do Congresso? (3-5 frases)",
                  "prazo_realista": "É viável em 4 anos? O que dizem especialistas? (2-3 frases)",
                  "riscos_objecoes": "Quais os principais argumentos contrários? Quem é afetado negativamente? (3-5 frases)"
                },

                "painel_viabilidade": {
                  "custo_fiscal": "BAIXO | MÉDIO | ALTO",
                  "complexidade_politica": "BAIXA | MÉDIA | ALTA",
                  "precedente_internacional": "SIM | PARCIAL | NÃO"
                },

                "fontes": [
                  {
                    "instituicao": "Nome",
                    "documento": "Título",
                    "data": "AAAA-MM",
                    "url": "https://..."
                  }
                ]
              }
            ]
          },

          {
            "id": "saude",
            "nome": "Saúde",
            "icone": "🏥",
            "tipo": "padronizado",
            "resumo_executivo": "...",
            "propostas": ["(MESMA ESTRUTURA ACIMA — mínimo 2 propostas)"]
          },

          {
            "id": "seguranca",
            "nome": "Segurança Pública",
            "icone": "🛡️",
            "tipo": "padronizado",
            "resumo_executivo": "...",
            "propostas": ["(MESMA ESTRUTURA)"]
          },

          {
            "id": "educacao",
            "nome": "Educação",
            "icone": "📚",
            "tipo": "padronizado",
            "resumo_executivo": "...",
            "propostas": ["(MESMA ESTRUTURA)"]
          },

          {
            "id": "governanca",
            "nome": "Governança e Reforma do Estado",
            "icone": "🏛️",
            "tipo": "padronizado",
            "resumo_executivo": "...",
            "propostas": ["(MESMA ESTRUTURA)"]
          },

          {
            "id": "eixo_especifico_1",
            "nome": "Nome do eixo específico deste candidato",
            "icone": "🎯",
            "tipo": "especifico",
            "resumo_executivo": "...",
            "propostas": ["(MESMA ESTRUTURA)"]
          }
        ]
      }
    },

    "flavio_bolsonaro": {
      "sabatina_globo": "(MESMA ESTRUTURA COMPLETA DO LULA)",
      "plano_governo": "(MESMA ESTRUTURA COMPLETA DO LULA)"
    },
    "zema": {
      "sabatina_globo": "(MESMA ESTRUTURA COMPLETA DO LULA)",
      "plano_governo": "(MESMA ESTRUTURA COMPLETA DO LULA)"
    },
    "caiado": {
      "sabatina_globo": "(MESMA ESTRUTURA COMPLETA DO LULA)",
      "plano_governo": "(MESMA ESTRUTURA COMPLETA DO LULA)"
    },
    "renan_santos": {
      "sabatina_globo": "(MESMA ESTRUTURA COMPLETA DO LULA)",
      "plano_governo": "(MESMA ESTRUTURA COMPLETA DO LULA)"
    },
    "augusto_cury": {
      "sabatina_globo": "(MESMA ESTRUTURA COMPLETA DO LULA)",
      "plano_governo": "(MESMA ESTRUTURA COMPLETA DO LULA)"
    }
  }
}
```

> **IMPORTANTE**: Para TODOS os 6 candidatos, preencha com a MESMA estrutura completa mostrada no exemplo do `lula`. O exemplo acima está detalhado apenas para o `lula` por questão de espaço — mas TODOS devem ter todos os campos preenchidos com a mesma profundidade.

> **IMPORTANTE 2**: Cada eixo `padronizado` deve ter a MESMA estrutura interna (propostas, referências internacionais, teste de viabilidade, painel). Os eixos `especifico` seguem a mesma estrutura mas são únicos por candidato.

> **IMPORTANTE 3**: Se o plano de governo de um candidato for vago em algum eixo, NÃO preencha com invenções. Registre: "O plano de governo não detalha mecanismos específicos para esta proposta" e busque em entrevistas, debates e documentos complementares da campanha para enriquecer a análise.

> **DICA DE PROFUNDIDADE**: Use como referência de nível de detalhe esperado o esboço do Renan Santos (Economia) fornecido acima nas instruções específicas. TODOS os candidatos devem receber análise com essa mesma profundidade de dados, referências internacionais e questionamentos de viabilidade.

> **TAMANHO ESPERADO**: Este é um trabalho de pesquisa extenso. O JSON final deve ter entre 4.000 e 8.000 linhas. Não economize em detalhes — este conteúdo será a base de informação mais rica do site. Se necessário, divida a entrega em partes (Parte 1: 3 candidatos, Parte 2: 3 candidatos), mas mantenha o mesmo JSON schema.

---

## CHECKLIST FINAL ANTES DE ENTREGAR

Antes de entregar o JSON, verifique:

- [ ] Todos os 6 candidatos têm a mesma estrutura?
- [ ] Todos os 5 eixos padronizados estão presentes para cada candidato?
- [ ] Cada proposta tem: resumo, diagnóstico com dados, mecanismo, referências (📈 + 📉), teste de viabilidade (4 dimensões), painel (3 indicadores), e fontes?
- [ ] Todos os dados numéricos têm fonte e data de referência?
- [ ] A sabatina tem fact-check com exemplos e percentuais que somam 100%?
- [ ] A linguagem é neutra e sem juízo de valor?
- [ ] Campos não encontrados estão marcados como `"[DADO NÃO DISPONÍVEL]"`?

## FIM DO PROMPT
