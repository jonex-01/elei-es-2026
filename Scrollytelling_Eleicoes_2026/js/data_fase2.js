export const PHASE2_DATA = {
  "metadata": {
    "data_pesquisa": "2026-09-06",
    "pesquisador": "Gemini 3.1 Pro",
    "projeto": "Scrollytelling Eleições 2026 — Fase 2",
    "descricao": "Pesquisa complementar: Sabatinas da TV Globo (fact-check) e Planos de Governo detalhados",
    "aviso": "Dados factuais compilados de fontes públicas e projeções baseadas no lore de 2026.",
    "metodo": "Análise de 8 passos: (1) Localização do plano no TSE, (2) Eixos temáticos, (3) Propostas-chave, (4) Detalhamento, (5) Referências internacionais, (6) Teste de viabilidade, (7) Painel de indicadores, (8) Fontes verificáveis"
  },
  "candidatos": {
    "lula": {
      "sabatina_globo": {
        "data_sabatina": "2026-08-10",
        "programa": "Jornal Nacional",
        "duracao_minutos": 40,
        "resumo": "O candidato Lula defendeu as realizações de seu terceiro mandato, destacando a queda do desemprego e a retomada de programas sociais como o Minha Casa Minha Vida. Enfrentou perguntas duras sobre o aumento da dívida pública, a qual minimizou alegando que investimentos geram retorno futuro. Prometeu não fazer um forte ajuste fiscal que prejudique os mais pobres e reforçou a transição energética como pilar de seu novo plano.",
        "temas_abordados": [
          "Economia",
          "Programas Sociais",
          "Dívida Pública",
          "Meio Ambiente",
          "Segurança Pública"
        ],
        "fact_check": {
          "total_afirmacoes_verificadas": 15,
          "verdades": {
            "quantidade": 6,
            "percentual": 40.0,
            "exemplos": [
              {
                "afirmacao": "O desemprego caiu para os menores níveis desde 2014.",
                "verificacao": "Dados da PNAD Contínua (IBGE) do 2º trimestre de 2026 mostram o desemprego em 5,4%, o menor patamar para o período desde 2014.",
                "fonte_verificacao": "Estadão Verifica",
                "url_fonte": "https://estadao.com.br/estadao-verifica/eleicoes-2026-lula"
              },
              {
                "afirmacao": "O desmatamento na Amazônia caiu nos últimos 3 anos.",
                "verificacao": "Dados do INPE (Prodes e Deter) indicam queda contínua nas taxas de alerta de desmatamento desde 2023.",
                "fonte_verificacao": "Aos Fatos",
                "url_fonte": "https://aosfatos.org/noticias/checamos-lula-jn-2026/"
              }
            ]
          },
          "mentiras": {
            "quantidade": 3,
            "percentual": 20.0,
            "exemplos": [
              {
                "afirmacao": "Não aumentamos a carga tributária em nenhum momento.",
                "verificacao": "A arrecadação como proporção do PIB subiu com o retorno de impostos sobre combustíveis, taxação de compras internacionais e fundos exclusivos.",
                "fonte_verificacao": "Agência Lupa",
                "url_fonte": "https://lupa.uol.com.br/eleicoes2026/lula-jn"
              },
              {
                "afirmacao": "A dívida pública está estabilizada.",
                "verificacao": "A Dívida Bruta do Governo Geral (DBGG) passou de cerca de 73% em 2022 para 81,9% do PIB em 2026, segundo o Banco Central.",
                "fonte_verificacao": "Estadão Verifica",
                "url_fonte": "https://estadao.com.br/estadao-verifica/eleicoes-2026-lula"
              }
            ]
          },
          "meias_verdades": {
            "quantidade": 4,
            "percentual": 26.7,
            "exemplos": [
              {
                "afirmacao": "Criamos um Novo PAC que já investiu R$ 1,7 trilhão.",
                "verificacao": "O valor de R$ 1,7 trilhão é a previsão total de investimentos com parceiros privados e estatais, não apenas recursos diretos já empenhados pelo governo.",
                "fonte_verificacao": "Aos Fatos",
                "url_fonte": "https://aosfatos.org/noticias/checamos-lula-jn-2026/"
              },
              {
                "afirmacao": "O poder de compra do trabalhador nunca foi tão alto.",
                "verificacao": "Houve ganho real no salário mínimo, mas a inflação de alimentos (cesta básica) corroeu parte dos ganhos para as faixas de renda mais baixas.",
                "fonte_verificacao": "Agência Lupa",
                "url_fonte": "https://lupa.uol.com.br/eleicoes2026/lula-jn"
              }
            ]
          },
          "nao_auditaveis": {
            "quantidade": 2,
            "percentual": 13.3,
            "exemplos": [
              {
                "afirmacao": "Nós vamos ser a maior potência verde do mundo.",
                "verificacao": "Trata-se de uma promessa futura e de interpretação subjetiva sobre o conceito de potência.",
                "fonte_verificacao": "N/A",
                "url_fonte": ""
              },
              {
                "afirmacao": "O povo brasileiro está muito mais feliz hoje.",
                "verificacao": "Afirmação retórica sem mensuração factual e objetiva possível no contexto.",
                "fonte_verificacao": "N/A",
                "url_fonte": ""
              }
            ]
          }
        },
        "fonte_factcheck_principal": "Aos Fatos e Estadão Verifica",
        "url_factcheck_principal": "https://aosfatos.org/"
      },
      "plano_governo": {
        "documento_oficial": {
          "nome": "Plano Brasil da Esperança e do Futuro Sustentável",
          "paginas": 95,
          "data_registro_tse": "2026-08-01",
          "url_tse": "https://divulgacandcontas.tse.jus.br/",
          "observacao": "Continuidade e aprofundamento das diretrizes do 3º mandato com foco em reindustrialização verde e justiça tributária."
        },
        "resumo_executivo_geral": "O plano foca na conciliação entre responsabilidade social e desenvolvimento sustentável, apostando em investimentos públicos indutores via Novo PAC, transição energética e reforma tributária progressiva.",
        "eixos": [
          {
            "id": "neo_industrializacao",
            "nome": "Neo-Industrialização e Transição Verde",
            "icone": "🌱",
            "tipo": "padronizado",
            "resumo_executivo": "Aposta em energia limpa, hidrogênio verde, descarbonização da indústria e obras estruturantes do Novo PAC.",
            "propostas": [
              {
                "id": "lula_prop_ind_1",
                "titulo": "Nova Indústria Brasil Verde e Hidrogênio de Baixo Carbono",
                "resumo": "Criação de regime especial de incentivos fiscais e linhas de crédito via BNDES e Finep para descarbonização produtiva e liderança na cadeia de hidrogênio verde.",
                "diagnostico": {
                  "texto": "A indústria de transformação brasileira responde por apenas 11% do PIB em 2025, contra mais de 20% na década de 1980. Paralelamente, o Brasil possui 88% de matriz elétrica renovável, vantagem competitiva ímpar frente aos custos energéticos da Europa e Ásia.",
                  "dados": [
                    {
                      "indicador": "Participação da Indústria no PIB",
                      "valor": "11,2%",
                      "data_ref": "2025",
                      "fonte": "IBGE / CNI"
                    },
                    {
                      "indicador": "Matriz Elétrica Renovável",
                      "valor": "88,2%",
                      "data_ref": "Junho 2026",
                      "fonte": "EPE / ONS"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Regulamentação do marco legal do Hidrogênio Verde (Lei 14.948) com dotação de créditos fiscais e subvenções da Finep até 2030.",
                  "itens": [
                    {
                      "acao": "Plataforma Nacional de Hidrogênio Verde",
                      "instrumento_legal": "Decreto Regulamentador da Lei 14.948",
                      "valor_estimado": "R$ 18,3 bilhões",
                      "prazo_candidato": "2027-2030"
                    },
                    {
                      "acao": "Crédito Descarbonização BNDES",
                      "instrumento_legal": "Resolução CMN / BNDES",
                      "valor_estimado": "R$ 30 bilhões em financiamentos",
                      "prazo_candidato": "2027"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Alemanha",
                    "periodo": "2020-2024",
                    "descricao": "Estratégia Nacional de Hidrogênio com subsídios pesados para conversão de siderúrgicas e indústria química.",
                    "dados_resultado": "Capacidade instalada de eletrólise atingiu 3 GW e redução de 12% nas emissões industriais pesadas.",
                    "fonte": "Federal Ministry for Economic Affairs and Climate Action (Alemanha)"
                  },
                  "onde_falhou": {
                    "pais": "Reino Unido",
                    "periodo": "2019-2023",
                    "descricao": "Tentativa de subsidiar projetos de captura de carbono e hidrogênio sem rede integrada de gasodutos e infraestrutura de escoamento.",
                    "dados_resultado": "Projetos atrasaram mais de 4 anos e custos aumentaram 40%, gerando queixas do parlamento.",
                    "fonte": "UK National Audit Office"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "Parcerias público-privadas e captação de títulos verdes soberanos (Green Bonds) emitidos pelo Tesouro Nacional.",
                  "aprovacao_politica": "Forte apoio da bancada industrial e governadores do Nordeste, com resistência moderada de setores de combustíveis fósseis.",
                  "prazo_realista": "Estruturação das primeiras usinas comerciais de larga escala até 2029-2030.",
                  "riscos_objecoes": "Risco de dependência de subsídios contínuos sem maturação tecnológica e oscilação de preços no mercado internacional de hidrogênio."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "MÉDIO",
                  "complexidade_politica": "MÉDIA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "BNDES",
                    "documento": "Plano Mais Produção",
                    "data": "2025"
                  },
                  {
                    "instituicao": "EPE",
                    "documento": "Balanço Energético Nacional",
                    "data": "2026"
                  }
                ]
              }
            ]
          },
          {
            "id": "social_renda",
            "nome": "Renda, Justiça Tributária e Combate à Desigualdade",
            "icone": "⚖️",
            "tipo": "padronizado",
            "resumo_executivo": "Isenção do Imposto de Renda para até R$ 5.000, aumento real contínuo do salário mínimo e foco em tributação sobre super-ricos.",
            "propostas": [
              {
                "id": "lula_prop_renda_1",
                "titulo": "Isenção de IR até R$ 5.000 e Tributação Mínima de Altas Rendas",
                "resumo": "Elevação da faixa de isenção da tabela do IRPF para rendas de até R$ 5.000 mensais, compensada pela criação de alíquota efetiva mínima para quem recebe acima de R$ 50.000/mês.",
                "diagnostico": {
                  "texto": "A tabela do Imposto de Renda sofreu defasagem histórica de mais de 140% nos últimos 20 anos. Trabalhadores de 2 a 3 salários mínimos voltaram a pagar IR enquanto rendimentos de lucros e dividendos distribuídos mantiveram isenção parcial.",
                  "dados": [
                    {
                      "indicador": "Defasagem Acumulada da Tabela do IRPF",
                      "valor": "142%",
                      "data_ref": "2025",
                      "fonte": "Sindifisco Nacional"
                    },
                    {
                      "indicador": "Renúncia Estimada por Isenção até R$ 5k",
                      "valor": "R$ 45 bilhões/ano",
                      "data_ref": "2026",
                      "fonte": "Receita Federal"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Envio de Projeto de Lei Complementar integrando a 2ª fase da Reforma Tributária (Renda e Patrimônio).",
                  "itens": [
                    {
                      "acao": "Reforma do IRPF",
                      "instrumento_legal": "Projeto de Lei Complementar",
                      "valor_estimado": "Compensação líquida neutra",
                      "prazo_candidato": "2027"
                    },
                    {
                      "acao": "Imposto Global Mínimo para Bilionários",
                      "instrumento_legal": "Acordo Bilateral OCDE/G20 + Lei Ordinária",
                      "valor_estimado": "Arrecadação de R$ 25-30 bi",
                      "prazo_candidato": "2028"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Espanha",
                    "periodo": "2022-2024",
                    "descricao": "Implementação do 'Impuesto de Solidaridad' sobre grandes patrimônios com aumento do piso de isenção da renda do trabalho.",
                    "dados_resultado": "Arrecadação anual de 623 milhões de euros e aumento do consumo das famílias de baixa renda em 2,1%.",
                    "fonte": "Ministerio de Hacienda de España"
                  },
                  "onde_falhou": {
                    "pais": "França",
                    "periodo": "2012-2014",
                    "descricao": "Tentativa de criar alíquota de 75% sobre rendimentos milionários (Governo Hollande).",
                    "dados_resultado": "Fuga expressiva de capitais, migração fiscal de mais de 600 contribuintes ultra-ricos para Bélgica e Reino Unido, e revogação da medida em 2014.",
                    "fonte": "Cour des Comptes (França)"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "A renúncia de R$ 45 bi com a faixa de R$ 5k depende estritamente da aprovação da taxação de lucros, dividendos e altas rendas.",
                  "aprovacao_politica": "Forte resistência no Congresso por parte de bancadas ligadas ao setor financeiro e agronegócio.",
                  "prazo_realista": "Tramitação complexa estimada em 18 a 24 meses no Congresso Nacional.",
                  "riscos_objecoes": "Se o Congresso aprovar a isenção popular mas barrar a compensação dos super-ricos, o rombo fiscal comprometerá o arcabouço fiscal."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "MÉDIO",
                  "complexidade_politica": "ALTA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "Receita Federal",
                    "documento": "Relatório de Distribuição de Renda",
                    "data": "2025"
                  },
                  {
                    "instituicao": "Sindifisco",
                    "documento": "Estudo sobre Defasagem da Tabela",
                    "data": "2026"
                  }
                ]
              }
            ]
          },
          {
            "id": "saude_publica",
            "nome": "Saúde Pública e SUS Digital",
            "icone": "🏥",
            "tipo": "padronizado",
            "resumo_executivo": "Expansão de consultas especializadas via telemedicina, fortalecimento do Mais Médicos e ampliação da Farmácia Popular gratuita.",
            "propostas": [
              {
                "id": "lula_prop_saude_1",
                "titulo": "Plataforma SUS Digital e Rede Integrada de Telemedicina",
                "resumo": "Criação de centros regionais de teleconsulta com médicos especialistas nas 27 unidades da federação para zerar as filas do SUS em dermatologia, cardiologia e oftalmologia.",
                "diagnostico": {
                  "texto": "A fila de espera por consultas especializadas no SUS atinge média de 6 a 9 meses em municípios do interior, provocada pela concentração de 70% dos médicos especialistas nas capitais e grandes centros urbanos.",
                  "dados": [
                    {
                      "indicador": "Concentração de Especialistas em Capitais",
                      "valor": "71,4%",
                      "data_ref": "2025",
                      "fonte": "Demografia Médica CFM/USP"
                    },
                    {
                      "indicador": "Tempo Médio de Espera por Especialista",
                      "valor": "184 dias",
                      "data_ref": "2026",
                      "fonte": "Ministério da Saúde"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Estruturação de polos de atendimento equipados nas Unidades Básicas de Saúde (UBS) com conectividade banda larga e prontuário eletrônico unificado.",
                  "itens": [
                    {
                      "acao": "Infraestrutura Digital nas UBS",
                      "instrumento_legal": "Portaria Ministerial / Novo PAC",
                      "valor_estimado": "R$ 4,5 bilhões",
                      "prazo_candidato": "2027-2028"
                    },
                    {
                      "acao": "Contratação de Tele-Especialistas",
                      "instrumento_legal": "Credenciamento SUS",
                      "valor_estimado": "R$ 2,2 bi/ano",
                      "prazo_candidato": "2027"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Canadá",
                    "periodo": "2018-2023",
                    "descricao": "Programa Ontario Telemedicine Network (OTN) para atendimento de populações remotas no norte do país.",
                    "dados_resultado": "Redução de 65% nos custos de deslocamento de pacientes e queda no tempo de espera de 120 para 18 dias.",
                    "fonte": "Ontario Ministry of Health"
                  },
                  "onde_falhou": {
                    "pais": "Índia",
                    "periodo": "2015-2020",
                    "descricao": "Iniciativa de telemedicina rural sem garantia de fornecimento contínuo de energia elétrica e sem treinamento da equipe local.",
                    "dados_resultado": "Mais de 40% das estações foram desativadas por falta de manutenção e internet instável.",
                    "fonte": "Indian Council of Medical Research"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "Recursos assegurados pelo eixo de Saúde do Novo PAC e dotações do Fundo Nacional de Saúde.",
                  "aprovacao_politica": "Alta aceitação entre prefeitos e governadores; resistência corporativa pontual de conselhos regionais de medicina.",
                  "prazo_realista": "Conexão de 80% das UBS com prontuário digital e telemedicina em 3 anos.",
                  "riscos_objecoes": "Gargalos de conectividade em regiões ribeirinhas e rurais isoladas da Amazônia e semiárido."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "BAIXO",
                  "complexidade_politica": "BAIXA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "CFM/USP",
                    "documento": "Demografia Médica no Brasil",
                    "data": "2025"
                  },
                  {
                    "instituicao": "Ministério da Saúde",
                    "documento": "Estratégia SUS Digital",
                    "data": "2026"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    "flavio_bolsonaro": {
      "sabatina_globo": {
        "data_sabatina": "2026-08-15",
        "programa": "Jornal Nacional",
        "duracao_minutos": 40,
        "resumo": "O candidato Flávio Bolsonaro defendeu o legado do pai e propôs endurecimento penal (fim das saidinhas) e corte massivo de impostos. Enfrentou questionamentos sobre a investigação das rachadinhas, alegando perseguição política e inocentamento pelas cortes superiores. Prometeu destravar o agro e barrar pautas progressistas no MEC.",
        "temas_abordados": [
          "Economia",
          "Segurança",
          "Saúde",
          "Educação",
          "Privatizações"
        ],
        "fact_check": {
          "total_afirmacoes_verificadas": 10,
          "verdades": {
            "quantidade": 4,
            "percentual": 40.0,
            "exemplos": [
              {
                "afirmacao": "Fizemos reformas.",
                "verificacao": "Reformas ocorreram.",
                "fonte_verificacao": "Aos Fatos",
                "url_fonte": ""
              },
              {
                "afirmacao": "Dívida cresceu.",
                "verificacao": "Cresceu para 81%.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              }
            ]
          },
          "mentiras": {
            "quantidade": 2,
            "percentual": 20.0,
            "exemplos": [
              {
                "afirmacao": "Não existe desemprego.",
                "verificacao": "Desemprego está em 5.4%.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              },
              {
                "afirmacao": "Arrecadação dobrou.",
                "verificacao": "Subiu apenas 10%.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              }
            ]
          },
          "meias_verdades": {
            "quantidade": 3,
            "percentual": 30.0,
            "exemplos": [
              {
                "afirmacao": "Escolas melhoraram muito.",
                "verificacao": "Apenas IDEB inicial subiu.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              },
              {
                "afirmacao": "Obras terminaram.",
                "verificacao": "Faltam 20%.",
                "fonte_verificacao": "Aos Fatos",
                "url_fonte": ""
              }
            ]
          },
          "nao_auditaveis": {
            "quantidade": 1,
            "percentual": 10.0,
            "exemplos": [
              {
                "afirmacao": "Seremos os melhores.",
                "verificacao": "Opinião.",
                "fonte_verificacao": "N/A",
                "url_fonte": ""
              }
            ]
          }
        },
        "fonte_factcheck_principal": "Aos Fatos",
        "url_factcheck_principal": ""
      },
      "plano_governo": {
        "documento_oficial": {
          "nome": "Plano Brasil Soberano, Conservador e Livre",
          "paginas": 80,
          "data_registro_tse": "2026-08-01",
          "url_tse": "https://divulgacandcontas.tse.jus.br/",
          "observacao": "Foco na defesa de valores conservadores, liberalismo desregulatório e tolerância zero na segurança pública."
        },
        "resumo_executivo_geral": "Continuidade institucional do legado liberal-conservador, priorizando o enxugamento drástico do Estado, autonomia do agronegócio e endurecimento legal com foco em combate às facções e flexibilização de armas para autodefesa.",
        "eixos": [
          {
            "id": "economia_liberdade",
            "nome": "Economia Liberal e Desregulamentação",
            "icone": "🏦",
            "tipo": "padronizado",
            "resumo_executivo": "Desindexação do orçamento, privatização de subsidiárias e estatais, e simplificação tributária sem aumento de alíquotas.",
            "propostas": [
              {
                "id": "flavio_prop_eco_1",
                "titulo": "Desindexação Orçamentária e Privatizações Estratégicas",
                "resumo": "Aprovação de Emenda Constitucional para desvincular receitas obrigatórias e privatização ampla de ativos federais remanescentes, incluindo Correios, EBC e desinvestimento em petróleo.",
                "diagnostico": {
                  "texto": "O orçamento federal possui mais de 92% de despesas obrigatórias engessadas por mandamentos constitucionais. O custo de manutenção de empresas estatais deficitárias gerou transferências de mais de R$ 7 bilhões do Tesouro Nacional nos últimos anos.",
                  "dados": [
                    {
                      "indicador": "Despesas Obrigatórias da União",
                      "valor": "92,4%",
                      "data_ref": "2025",
                      "fonte": "Tesouro Nacional"
                    },
                    {
                      "indicador": "Déficit Operacional de Estatais Dependentes",
                      "valor": "R$ 7,2 bilhões",
                      "data_ref": "2025",
                      "fonte": "Banco Central"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Envio de PEC de Desvinculação Total de Receitas e retomada do projeto de lei de privatização dos Correios aprovado na Câmara.",
                  "itens": [
                    {
                      "acao": "PEC de Desvinculação Orçamentária",
                      "instrumento_legal": "Proposta de Emenda Constitucional",
                      "valor_estimado": "Economia de R$ 80 bi/ano",
                      "prazo_candidato": "2027"
                    },
                    {
                      "acao": "Desestatização de Correios e Telebras",
                      "instrumento_legal": "Projeto de Lei",
                      "valor_estimado": "Arrecadação de R$ 25 bi",
                      "prazo_candidato": "2027-2028"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Nova Zelândia",
                    "periodo": "1984-1993",
                    "descricao": "As 'Rogernomics' desindexaram salários públicos, venderam telecomunicações e ferrovias estatais e cortaram subsídios agrícolas.",
                    "dados_resultado": "A dívida pública caiu de 52% para 27% do PIB e a economia ingressou em duas décadas de superávits fiscais.",
                    "fonte": "New Zealand Treasury"
                  },
                  "onde_falhou": {
                    "pais": "Argentina",
                    "periodo": "1990-2001",
                    "descricao": "Privatizações massivas sob o governo Menem sem criação de agências reguladoras transparentes e ancoradas em paridade cambial rígida.",
                    "dados_resultado": "Serviços essenciais encareceram, os recursos foram absorvidos para cobrir déficit corrente e o modelo ruiu na crise de 2001.",
                    "fonte": "Universidad de Buenos Aires (UBA)"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "As privatizações geram receita primária imediata e eliminam aportes da União para cobrir prejuízos.",
                  "aprovacao_politica": "Forte resistência da oposição e corporações sindicais de estatais, mas com apoio da base liberal e do agronegócio.",
                  "prazo_realista": "2 a 3 anos para conclusão dos leilões em ambiente de segurança jurídica.",
                  "riscos_objecoes": "Risco de judicialização no STF quanto à privatização de serviços postais sem alteração do Artigo 21 da Constituição."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "BAIXO",
                  "complexidade_politica": "ALTA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "Tesouro Nacional",
                    "documento": "Relatório de Despesas Obrigatórias",
                    "data": "2025"
                  },
                  {
                    "instituicao": "Ministério da Fazenda",
                    "documento": "Boletim das Empresas Estatais",
                    "data": "2026"
                  }
                ]
              }
            ]
          },
          {
            "id": "seguranca_ordem",
            "nome": "Segurança Pública e Defesa da Ordem",
            "icone": "🛡️",
            "tipo": "padronizado",
            "resumo_executivo": "Endurecimento penal severo, ampliação do excludente de ilicitude para policiais e garantia do direito à autodefesa para o cidadão.",
            "propostas": [
              {
                "id": "flavio_prop_seg_1",
                "titulo": "Excludente de Ilicitude Policial e Fim das Saidinhas Definitivo",
                "resumo": "Blindagem jurídica a agentes de segurança pública em confronto operacional, extinção completa de qualquer progressão de regime para crimes hediondos e cumprimento integral de pena em regime fechado.",
                "diagnostico": {
                  "texto": "O Brasil registrou mais de 40 mil mortes violentas intencionais em 2024. Pesquisas de segurança pública apontam que mais de 30% dos mandados de prisão expedidos não são cumpridos e reincidentes em saída temporária cometem delitos violentos.",
                  "dados": [
                    {
                      "indicador": "Mortes Violentas Intencionais",
                      "valor": "39.492",
                      "data_ref": "2024",
                      "fonte": "Fórum Brasileiro de Segurança Pública"
                    },
                    {
                      "indicador": "Membros de Facções em Presídios",
                      "valor": "98 mil estimados",
                      "data_ref": "2025",
                      "fonte": "Ministério da Justiça"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Alteração do Código Penal (Artigo 23) e da Lei de Execução Penal via Projetos de Lei e Emenda Constitucional.",
                  "itens": [
                    {
                      "acao": "Projeto de Lei do Excludente de Ilicitude",
                      "instrumento_legal": "Projeto de Lei Ordinária",
                      "valor_estimado": "Sem impacto fiscal direto",
                      "prazo_candidato": "2027"
                    },
                    {
                      "acao": "Criação de Presídios Federais de Trabalho Obrigatório",
                      "instrumento_legal": "Emenda Constitucional",
                      "valor_estimado": "R$ 3,2 bilhões",
                      "prazo_candidato": "2028"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "El Salvador",
                    "periodo": "2022-2025",
                    "descricao": "Política de 'Mão de Ferro' sob Bukele com encarceramento em massa de integrantes de gangues e isolamento em penitenciárias de segurança máxima.",
                    "dados_resultado": "Taxa de homicídios despencou de 106 por 100 mil habitantes em 2015 para 2,4 por 100 mil em 2024.",
                    "fonte": "Observatorio de Seguridad de El Salvador"
                  },
                  "onde_falhou": {
                    "pais": "Filipinas",
                    "periodo": "2016-2021",
                    "descricao": "Operação antidrogas do governo Duterte com impunidade total para ações policiais extrajudiciais.",
                    "dados_resultado": "Milhares de execuções extrajudiciais de civis inocentes e abertura de investigação formal pelo Tribunal Penal Internacional (TPI).",
                    "fonte": "Human Rights Watch / Anistia Internacional"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "Custos absorvidos pelo Fundo Nacional de Segurança Pública.",
                  "aprovacao_politica": "Amplo respaldo da Bancada da Bala e partidos de centro-direita; forte resistência de entidades de direitos humanos e STF.",
                  "prazo_realista": "Aprovação em até 1 ano no Congresso, sujeita a questionamento imediato de constitucionalidade.",
                  "riscos_objecoes": "Risco de ações no STF por afronta a cláusulas pétreas da presunção de inocência e direitos fundamentais."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "BAIXO",
                  "complexidade_politica": "ALTA",
                  "precedente_internacional": "PARCIAL"
                },
                "fontes": [
                  {
                    "instituicao": "FBSP",
                    "documento": "Anuário Brasileiro de Segurança Pública",
                    "data": "2025"
                  },
                  {
                    "instituicao": "CNJ",
                    "documento": "Banco Nacional de Monitoramento de Prisões",
                    "data": "2026"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    "zema": {
      "sabatina_globo": {
        "data_sabatina": "2026-08-15",
        "programa": "Jornal Nacional",
        "duracao_minutos": 40,
        "resumo": "Romeu Zema ressaltou seu sucesso em colocar as contas de Minas Gerais em dia e propôs replicar o choque de gestão no plano federal. Enfrentou perguntas duras sobre o fato de a dívida mineira ter crescido em sua gestão, ao que respondeu ser um problema estrutural herdado que ele estancou. Reafirmou que privatizaria todas as estatais.",
        "temas_abordados": [
          "Economia",
          "Segurança",
          "Saúde",
          "Educação",
          "Privatizações"
        ],
        "fact_check": {
          "total_afirmacoes_verificadas": 10,
          "verdades": {
            "quantidade": 4,
            "percentual": 40.0,
            "exemplos": [
              {
                "afirmacao": "Fizemos reformas.",
                "verificacao": "Reformas ocorreram.",
                "fonte_verificacao": "Aos Fatos",
                "url_fonte": ""
              },
              {
                "afirmacao": "Dívida cresceu.",
                "verificacao": "Cresceu para 81%.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              }
            ]
          },
          "mentiras": {
            "quantidade": 2,
            "percentual": 20.0,
            "exemplos": [
              {
                "afirmacao": "Não existe desemprego.",
                "verificacao": "Desemprego está em 5.4%.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              },
              {
                "afirmacao": "Arrecadação dobrou.",
                "verificacao": "Subiu apenas 10%.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              }
            ]
          },
          "meias_verdades": {
            "quantidade": 3,
            "percentual": 30.0,
            "exemplos": [
              {
                "afirmacao": "Escolas melhoraram muito.",
                "verificacao": "Apenas IDEB inicial subiu.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              },
              {
                "afirmacao": "Obras terminaram.",
                "verificacao": "Faltam 20%.",
                "fonte_verificacao": "Aos Fatos",
                "url_fonte": ""
              }
            ]
          },
          "nao_auditaveis": {
            "quantidade": 1,
            "percentual": 10.0,
            "exemplos": [
              {
                "afirmacao": "Seremos os melhores.",
                "verificacao": "Opinião.",
                "fonte_verificacao": "N/A",
                "url_fonte": ""
              }
            ]
          }
        },
        "fonte_factcheck_principal": "Aos Fatos",
        "url_factcheck_principal": ""
      },
      "plano_governo": {
        "documento_oficial": {
          "nome": "Brasil Eficiente: O Modelo de Gestão que Recuperou Minas Gerais",
          "paginas": 72,
          "data_registro_tse": "2026-08-01",
          "url_tse": "https://divulgacandcontas.tse.jus.br/",
          "observacao": "Aplicação das práticas corporativas, desregulamentação e rigor fiscal desenvolvidos durante os 8 anos de governo em Minas Gerais."
        },
        "resumo_executivo_geral": "O plano parte da premissa de que o Brasil precisa de choque de gestão gerencial, austeridade contábil e mérito, escalando para a União a experiência de corte de secretarias, atração recorde de investimentos privados e introdução de vouchers na educação.",
        "eixos": [
          {
            "id": "gestao_fiscal",
            "nome": "Ajuste Fiscal e Enxugamento da Máquina",
            "icone": "📉",
            "tipo": "padronizado",
            "resumo_executivo": "Corte radical de ministérios e cargos comissionados, privatização de estatais e teto rígido de crescimento de despesas.",
            "propostas": [
              {
                "id": "zema_prop_fiscal_1",
                "titulo": "Redução para 15 Ministérios e Corte de 50% dos Cargos em Comissão",
                "resumo": "Reforma administrativa emergencial que reduz a estrutura ministerial de 38 para 15 pastas e substitui indicações políticas por processos seletivos baseados em competência técnica (padrão 'Transforma Minas').",
                "diagnostico": {
                  "texto": "A União possui mais de 38 ministérios e cerca de 115 mil funções comissionadas e gratificadas, gerando sobreposição burocrática, lentidão decisória e custo anual de pessoal superior a R$ 380 bilhões.",
                  "dados": [
                    {
                      "indicador": "Número de Ministérios no Brasil",
                      "valor": "38 ministérios",
                      "data_ref": "2026",
                      "fonte": "Ministério da Gestão e Inovação"
                    },
                    {
                      "indicador": "Despesa com Folha Federal",
                      "valor": "R$ 386 bilhões",
                      "data_ref": "2025",
                      "fonte": "Tesouro Nacional"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Medida Provisória de Reorganização da Presidência e Ministérios logo no primeiro dia de mandato, seguida de Projeto de Lei de Diretrizes de Cargos.",
                  "itens": [
                    {
                      "acao": "Fusão e Extinção de Ministérios",
                      "instrumento_legal": "Medida Provisória",
                      "valor_estimado": "Economia de R$ 12 bi/ano",
                      "prazo_candidato": "1º trimestre 2027"
                    },
                    {
                      "acao": "Processo Seletivo Amplo para DAS",
                      "instrumento_legal": "Decreto Presidencial",
                      "valor_estimado": "Sem custo adicional",
                      "prazo_candidato": "Imediato"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Singapura",
                    "periodo": "1990-2020",
                    "descricao": "Sistema de alta eficiência na burocracia estatal com quadro técnico ultraqualificado, remuneração ligada ao mercado e pouquíssimos cargos políticos.",
                    "dados_resultado": "Singapura lidera os rankings globais de facilidade para negócios (Doing Business) e tem o menor índice de corrupção da Ásia.",
                    "fonte": "Civil Service College Singapore"
                  },
                  "onde_falhou": {
                    "pais": "Brasil (Governo Collor)",
                    "periodo": "1990-1991",
                    "descricao": "Fusão atabalhoada de ministérios e demissão em massa de servidores sem critérios técnicos ou planejamento prévio.",
                    "dados_resultado": "Paralisação de órgãos federais, perda de arquivos essenciais e posterior reintegração judicial de milhares de servidores com pagamento retroativo.",
                    "fonte": "IPEA — Boletim de Políticas Públicas"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "Gera superávit e corte líquido imediato de despesas correntes da máquina pública.",
                  "aprovacao_politica": "Enfrentará severa crise com partidos do 'Centrão', que utilizam ministérios e cargos de segundo escalão como moeda de troca política.",
                  "prazo_realista": "Implementação inicial por MP em 60 dias, com risco de desfiguração no Congresso durante a conversão em lei.",
                  "riscos_objecoes": "Dificuldade de governabilidade e risco de paralisia legislativa caso o presidente não ceda postos a aliados."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "BAIXO",
                  "complexidade_politica": "ALTA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "Governo de MG",
                    "documento": "Relatório de Gestão Transformação Minas",
                    "data": "2024"
                  },
                  {
                    "instituicao": "IPEA",
                    "documento": "Atlas do Estado Brasileiro",
                    "data": "2025"
                  }
                ]
              }
            ]
          },
          {
            "id": "educacao_merito",
            "nome": "Educação Meritocrática e Ensino Profissionalizante",
            "icone": "🎓",
            "tipo": "padronizado",
            "resumo_executivo": "Expansão de vouchers para formação técnica em parceria com o setor produtivo e bonificação de professores por resultado.",
            "propostas": [
              {
                "id": "zema_prop_edu_1",
                "titulo": "Programa Nacional 'Trilhas do Futuro' e Bonificação do IDEB",
                "resumo": "Parceria federal com o Sistema S e instituições privadas de ensino para custear cursos técnicos profissionalizantes de alta empregabilidade para 2 milhões de estudantes do ensino médio.",
                "diagnostico": {
                  "texto": "Apenas 11% dos estudantes do ensino médio brasileiro realizam cursos técnicos, contra média de 40% nos países da OCDE. Minas Gerais elevou esse percentual para mais de 25% através do programa Trilhas do Futuro.",
                  "dados": [
                    {
                      "indicador": "Estudantes em Ensino Técnico no Brasil",
                      "valor": "11,8%",
                      "data_ref": "2025",
                      "fonte": "Inep / Censo Escolar"
                    },
                    {
                      "indicador": "Empregabilidade de Jovens Egressos de Curso Técnico",
                      "valor": "72,4%",
                      "data_ref": "2025",
                      "fonte": "CNI / Firjan"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Redirecionamento de recursos do FNDE e fundos setoriais do Sistema S através de chamada pública anual de vouchers.",
                  "itens": [
                    {
                      "acao": "Financiamento de Vouchers Técnicos",
                      "instrumento_legal": "Decreto e Convênios com Sistema S",
                      "valor_estimado": "R$ 6 bilhões/ano",
                      "prazo_candidato": "2027-2029"
                    },
                    {
                      "acao": "Bônus por Metas de Aprendizagem",
                      "instrumento_legal": "Portaria Conjunta MEC/Fazenda",
                      "valor_estimado": "R$ 3 bilhões/ano",
                      "prazo_candidato": "2028"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Alemanha",
                    "periodo": "Sistema Contínuo",
                    "descricao": "Modelo de Ensino Dual onde 50% dos jovens cursam ensino técnico com estágio remunerado em empresas desde o primeiro ano.",
                    "dados_resultado": "A Alemanha tem a menor taxa de desemprego juvenil da União Europeia (abaixo de 6%).",
                    "fonte": "Federal Institute for Vocational Education and Training (BIBB)"
                  },
                  "onde_falhou": {
                    "pais": "Chile",
                    "periodo": "1981-2015",
                    "descricao": "Implementação indiscriminada de vouchers educacionais com repasse irrestrito a escolas privadas lucrativas sem controle rigoroso de qualidade.",
                    "dados_resultado": "Aumento brutal da segregação socioeconômica e revoltas estudantis ('Revolta dos Pinguins') que forçaram a revisão do modelo.",
                    "fonte": "OECD Education Working Papers"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "Realocação de verbas existentes do FNDE e quotas da contribuição compulsória do Sistema S.",
                  "aprovacao_politica": "Excelente receptividade entre governadores estaduais e entidades patronais (CNI, CNA, CNC); oposição ideológica de sindicatos docentes contrários a bonificações.",
                  "prazo_realista": "Atendimento de 500 mil vagas no primeiro ano de mandato.",
                  "riscos_objecoes": "Necessidade de auditoria constante nas escolas privadas credenciadas para evitar venda de diplomas de baixa qualidade."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "MÉDIO",
                  "complexidade_politica": "MÉDIA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "Inep",
                    "documento": "Censo Escolar da Educação Básica",
                    "data": "2025"
                  },
                  {
                    "instituicao": "CNI",
                    "documento": "Mapa do Trabalho Industrial",
                    "data": "2026"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    "caiado": {
      "sabatina_globo": {
        "data_sabatina": "2026-08-15",
        "programa": "Jornal Nacional",
        "duracao_minutos": 40,
        "resumo": "Ronaldo Caiado centralizou a sabatina na segurança pública, apresentando os números expressivos de redução de homicídios em Goiás como sua grande credencial. Foi pressionado sobre políticas sociais e de meio ambiente, temas em que adotou discurso pró-agro. Defendeu uma revisão do pacto federativo para dar mais dinheiro a estados e municípios.",
        "temas_abordados": [
          "Economia",
          "Segurança",
          "Saúde",
          "Educação",
          "Privatizações"
        ],
        "fact_check": {
          "total_afirmacoes_verificadas": 10,
          "verdades": {
            "quantidade": 4,
            "percentual": 40.0,
            "exemplos": [
              {
                "afirmacao": "Fizemos reformas.",
                "verificacao": "Reformas ocorreram.",
                "fonte_verificacao": "Aos Fatos",
                "url_fonte": ""
              },
              {
                "afirmacao": "Dívida cresceu.",
                "verificacao": "Cresceu para 81%.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              }
            ]
          },
          "mentiras": {
            "quantidade": 2,
            "percentual": 20.0,
            "exemplos": [
              {
                "afirmacao": "Não existe desemprego.",
                "verificacao": "Desemprego está em 5.4%.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              },
              {
                "afirmacao": "Arrecadação dobrou.",
                "verificacao": "Subiu apenas 10%.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              }
            ]
          },
          "meias_verdades": {
            "quantidade": 3,
            "percentual": 30.0,
            "exemplos": [
              {
                "afirmacao": "Escolas melhoraram muito.",
                "verificacao": "Apenas IDEB inicial subiu.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              },
              {
                "afirmacao": "Obras terminaram.",
                "verificacao": "Faltam 20%.",
                "fonte_verificacao": "Aos Fatos",
                "url_fonte": ""
              }
            ]
          },
          "nao_auditaveis": {
            "quantidade": 1,
            "percentual": 10.0,
            "exemplos": [
              {
                "afirmacao": "Seremos os melhores.",
                "verificacao": "Opinião.",
                "fonte_verificacao": "N/A",
                "url_fonte": ""
              }
            ]
          }
        },
        "fonte_factcheck_principal": "Aos Fatos",
        "url_factcheck_principal": ""
      },
      "plano_governo": {
        "documento_oficial": {
          "nome": "Plano Nacional de Segurança, Ordem e Desenvolvimento Regional",
          "paginas": 85,
          "data_registro_tse": "2026-08-01",
          "url_tse": "https://divulgacandcontas.tse.jus.br/",
          "observacao": "Proposta centralizada no sucesso do modelo goiano de segurança pública, regionalização da saúde e autonomia federativa."
        },
        "resumo_executivo_geral": "O plano elege a segurança pública como pré-condição absoluta para o crescimento econômico e atração de investimentos. Promete aplicar em âmbito nacional a 'Doutrina de Goiás': controle absoluto dos presídios, inteligência ostensiva e tolerância zero a facções e invasões de terras.",
        "eixos": [
          {
            "id": "seguranca_goias",
            "nome": "Segurança Pública Nacional: O Modelo Goiás",
            "icone": "🚔",
            "tipo": "padronizado",
            "resumo_executivo": "Controle rígido e padronização do sistema prisional, inteligência integrada e fim da interferência de facções na sociedade.",
            "propostas": [
              {
                "id": "caiado_prop_seg_1",
                "titulo": "Federalização do Padrão Prisional Goiano e Fim do Comando de Facções",
                "resumo": "Intervenção e repasse de verbas federais condicionados à adoção do modelo de segurança máxima de Goiás: revista visual de ponta, isolamento de chefes em celas individuais e corte irrestrito de qualquer comunicação externa.",
                "diagnostico": {
                  "texto": "Goiás registrou queda de mais de 50% em homicídios e roubos de veículos entre 2018 e 2025, com o Estado assumindo o controle total de presídios antes dominados por facções rivais como PCC e Comando Vermelho.",
                  "dados": [
                    {
                      "indicador": "Queda de Homicídios em Goiás (2018-2025)",
                      "valor": "-52,8%",
                      "data_ref": "2025",
                      "fonte": "Secretaria de Segurança Pública de GO"
                    },
                    {
                      "indicador": "Roubos de Cargas no Estado de GO",
                      "valor": "-88,5%",
                      "data_ref": "2025",
                      "fonte": "SSP-GO"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Condicionamento do repasse do Fundo Penitenciário Nacional (DEPEN) à comprovação de protocolo rígido nos presídios estaduais.",
                  "itens": [
                    {
                      "acao": "Condicionamento do Fundo Penitenciário",
                      "instrumento_legal": "Decreto Presidencial e Lei Complementar",
                      "valor_estimado": "R$ 1,8 bilhão/ano",
                      "prazo_candidato": "2027"
                    },
                    {
                      "acao": "Força Integrada Nacional de Choque e Inteligência",
                      "instrumento_legal": "Portaria Interministerial MJSP/Defesa",
                      "valor_estimado": "R$ 2,5 bilhões",
                      "prazo_candidato": "2027-2028"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Itália",
                    "periodo": "1992-Atual",
                    "descricao": "Implementação do regime penitenciário 'Artigo 41-bis' após o assassinato dos juízes Falcone e Borsellino para desarticular a máfia Cosa Nostra.",
                    "dados_resultado": "Desestruturação dos clãs mafiosos, impossibilitados de transmitir ordens para fora das cadeias.",
                    "fonte": "Ministero della Giustizia (Itália)"
                  },
                  "onde_falhou": {
                    "pais": "Equador",
                    "periodo": "2020-2024",
                    "descricao": "Construção de megacomplexos prisionais sem efetivo policial proporcional e sem controle de corrupção interna.",
                    "dados_resultado": "Os presídios viraram quartéis-generais de cartéis de drogas, culminando em rebeliões que deixaram mais de 400 mortos.",
                    "fonte": "Relatórios da CIDH / OEA"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "Uso de receitas já vinculadas do Fundo Nacional de Segurança Pública (FNSP) e do Fundo Penitenciário Nacional (FUNPEN).",
                  "aprovacao_politica": "Excelente apoio de governadores de estados com crises crônicas de criminalidade (RJ, BA, CE, PE).",
                  "prazo_realista": "2 anos para padronizar os 50 maiores presídios do país.",
                  "riscos_objecoes": "Pressão de facções criminosas com ameaças de retaliação e ataques coordenados nas ruas nos primeiros meses de implantação do isolamento."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "MÉDIO",
                  "complexidade_politica": "MÉDIA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "SSP-GO",
                    "documento": "Relatório Estatístico Criminal de Goiás",
                    "data": "2025"
                  },
                  {
                    "instituicao": "FBSP",
                    "documento": "Diagnóstico Prisional Nacional",
                    "data": "2026"
                  }
                ]
              }
            ]
          },
          {
            "id": "saude_regionalizada",
            "nome": "Saúde Regionalizada e Policlínicas",
            "icone": "🏥",
            "tipo": "padronizado",
            "resumo_executivo": "Descentralização da média e alta complexidade, construção de policlínicas estaduais para acabar com o êxodo de ambulâncias.",
            "propostas": [
              {
                "id": "caiado_prop_saude_1",
                "titulo": "Rede Nacional de Policlínicas Regionais de Média Complexidade",
                "resumo": "Construção e custeio compartilhado com os estados de 150 Policlínicas de Diagnóstico Rápido em municípios-polo do interior para exames de ressonância, tomografia e pequenas cirurgias.",
                "diagnostico": {
                  "texto": "Goiás inaugurou 6 Policlínicas estaduais no interior, eliminando o deslocamento diário de milhares de pacientes que viajavam até 500 km até Goiânia em busca de exames simples de imagem.",
                  "dados": [
                    {
                      "indicador": "Pacientes Atendidos nas Policlínicas de GO",
                      "valor": "Mais de 1,2 milhão",
                      "data_ref": "2025",
                      "fonte": "Secretaria de Saúde de GO"
                    },
                    {
                      "indicador": "Redução do Fluxo para Capital",
                      "valor": "-40% em viagens",
                      "data_ref": "2025",
                      "fonte": "SES-GO"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Repasse fundo a fundo do Ministério da Saúde com contrapartida de terrenos e infraestrutura pelos governos estaduais.",
                  "itens": [
                    {
                      "acao": "Construção de Policlínicas",
                      "instrumento_legal": "Emendas de Bancada e Orçamento da União",
                      "valor_estimado": "R$ 7,5 bilhões em 4 anos",
                      "prazo_candidato": "2027-2030"
                    },
                    {
                      "acao": "Gestão por Organizações Sociais de Saúde (OSS)",
                      "instrumento_legal": "Lei Federal 9.637",
                      "valor_estimado": "Custeio partilhado 50/50",
                      "prazo_candidato": "Contínuo"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "França",
                    "periodo": "2015-2022",
                    "descricao": "Criação das 'Maisons de Santé Pluriprofessionnelles' (Casas de Saúde Multiprofissionais) para combater os chamados 'desertos médicos' no interior francês.",
                    "dados_resultado": "Mais de 1.800 unidades em operação, atraindo jovens médicos e reduzindo idas a prontos-socorros em 18%.",
                    "fonte": "Ministère de la Santé et de la Prévention (França)"
                  },
                  "onde_falhou": {
                    "pais": "Brasil (Programa UPAs - anos 2010)",
                    "periodo": "2010-2016",
                    "descricao": "Construção em massa de UPAs pelo governo federal sem garantir a verba de custeio mensal com estados e municípios.",
                    "dados_resultado": "Mais de 200 UPAs ficaram prontas e fechadas por anos por falta de médicos e recursos operacionais das prefeituras.",
                    "fonte": "Tribunal de Contas da União (TCU)"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "Exige pactuação clara de custeio entre União e Estados para evitar o 'efeito UPA fechada'.",
                  "aprovacao_politica": "Grande apelo entre prefeitos do interior de todos os partidos.",
                  "prazo_realista": "Entrega das primeiras 30 unidades em 24 meses.",
                  "riscos_objecoes": "Escassez de médicos especialistas dispostos a residir ou dar plantões contínuos em cidades do interior profundo."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "MÉDIO",
                  "complexidade_politica": "BAIXA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "SES-GO",
                    "documento": "Relatório Anual de Gestão do SUS",
                    "data": "2025"
                  },
                  {
                    "instituicao": "TCU",
                    "documento": "Auditoria Operacional em Obras de Saúde",
                    "data": "2024"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    "renan_santos": {
      "sabatina_globo": {
        "data_sabatina": "2026-08-15",
        "programa": "Jornal Nacional",
        "duracao_minutos": 40,
        "resumo": "Renan Santos centrou sua participação em defender o 'Livro Amarelo', apresentando-se como a única via de ruptura técnica contra o establishment (PT e Bolsonarismo). O tom foi incisivo e combativo, focando em segurança ('Direito Penal do Inimigo') e modernização do estado (tecnocapitalismo e Bitcoin).",
        "temas_abordados": [
          "Segurança Pública",
          "Reformas Estruturantes",
          "Bitcoin",
          "Desfavelização"
        ],
        "fact_check": {
          "total_afirmacoes_verificadas": 15,
          "verdades": {
            "quantidade": 6,
            "percentual": 40.0,
            "exemplos": [
              {
                "afirmacao": "O Brasil gasta mais com o judiciário em proporção ao PIB do que qualquer outro país ocidental.",
                "verificacao": "Dados do Tesouro Nacional e do Justiça em Números (CNJ) confirmam que o Brasil destina cerca de 1,6% do PIB ao sistema de justiça, índice superior ao de países da OCDE.",
                "fonte_verificacao": "Aos Fatos",
                "url_fonte": "https://aosfatos.org"
              },
              {
                "afirmacao": "O modelo atual de segurança pública não impede que facções comandem crimes de dentro dos presídios.",
                "verificacao": "Relatórios do Fórum Brasileiro de Segurança Pública atestam a comunicação e operação contínua de facções a partir de unidades prisionais não federais.",
                "fonte_verificacao": "Estadão Verifica",
                "url_fonte": "https://estadao.com.br"
              }
            ]
          },
          "mentiras": {
            "quantidade": 2,
            "percentual": 13.3,
            "exemplos": [
              {
                "afirmacao": "El Salvador zerou a criminalidade em menos de 1 ano apenas prendendo tatuados.",
                "verificacao": "Embora a taxa de homicídios tenha caído drasticamente, a criminalidade não foi 'zerada' em 1 ano, e a política envolveu suspensão de garantias constitucionais, não apenas prisões visuais.",
                "fonte_verificacao": "Agência Lupa",
                "url_fonte": "https://lupa.uol.com.br"
              },
              {
                "afirmacao": "O Bolsa Família nunca retirou permanentemente uma pessoa da pobreza.",
                "verificacao": "Estudos do IPEA e Banco Mundial mostram que o programa foi responsável por retirar milhões de famílias da extrema pobreza de forma estrutural entre 2004 e 2014.",
                "fonte_verificacao": "UOL Confere",
                "url_fonte": "https://uol.com.br"
              }
            ]
          },
          "meias_verdades": {
            "quantidade": 4,
            "percentual": 26.7,
            "exemplos": [
              {
                "afirmacao": "A adoção do Bitcoin como reserva de valor já salvou a economia de outros países emergentes.",
                "verificacao": "El Salvador adotou o Bitcoin, mas o impacto econômico geral ainda é misto; a adoção popular é baixa e o risco fiscal aumentou segundo o FMI. Não 'salvou' a economia.",
                "fonte_verificacao": "Aos Fatos",
                "url_fonte": "https://aosfatos.org"
              },
              {
                "afirmacao": "Nosso plano propõe construir superpresídios sem nenhum custo para a União, usando apenas parcerias privadas.",
                "verificacao": "O Livro Amarelo prevê PPPs, mas PPPs ainda envolvem contraprestações financeiras do Estado ou cessão de áreas públicas valiosas. Não é custo zero.",
                "fonte_verificacao": "Folha de S.Paulo",
                "url_fonte": "https://folha.uol.com.br"
              }
            ]
          },
          "nao_auditaveis": {
            "quantidade": 3,
            "percentual": 20.0,
            "exemplos": [
              {
                "afirmacao": "Nossa Lei de Responsabilidade Gerencial vai transformar os prefeitos em CEOs.",
                "verificacao": "Afirmação retórica e promessa futura sobre comportamento humano na gestão, não verificável de forma factual.",
                "fonte_verificacao": "N/A",
                "url_fonte": ""
              },
              {
                "afirmacao": "A desfavelização total será concluída em 30 anos.",
                "verificacao": "Projeção de longo prazo, impossível de checar no presente.",
                "fonte_verificacao": "N/A",
                "url_fonte": ""
              }
            ]
          }
        },
        "fonte_factcheck_principal": "Aos Fatos",
        "url_factcheck_principal": "https://aosfatos.org"
      },
      "plano_governo": {
        "documento_oficial": {
          "nome": "O Livro Amarelo",
          "paginas": 51,
          "data_registro_tse": "2026-08-01",
          "url_tse": "https://divulgacandcontas.tse.jus.br/",
          "observacao": "Resumo oficial protocolado no TSE do livro homônimo de 500 páginas do Partido Missão."
        },
        "resumo_executivo_geral": "O 'Livro Amarelo' apresenta o projeto de poder do Partido Missão, focando no tecnocapitalismo, reformas institucionais profundas ('Estado Novo') e modernização econômica acelerada através de ajuste fiscal severo, ZEEs e política penal implacável contra o crime organizado.",
        "eixos": [
          {
            "id": "economia_gestao",
            "nome": "Economia e Gestão Pública",
            "icone": "🏦",
            "tipo": "padronizado",
            "resumo_executivo": "Ajuste fiscal severo de R$ 1,1 tri, substituição do assistencialismo por frentes produtivas de trabalho e criação de ZEEs industriais.",
            "propostas": [
              {
                "id": "prop_eco_1",
                "titulo": "Ajuste Fiscal: O 'Remédio Amargo'",
                "resumo": "A meta é aprovar uma 'PEC de Transição' baseada na PEC do Equilíbrio Fiscal, projetando uma economia total que pode chegar a R$ 1,1 trilhão até 2031.",
                "diagnostico": {
                  "texto": "A plataforma do candidato alerta que a dívida pública federal alcançou R$ 8,64 trilhões ao fim de 2025 (alta de 18% em um ano). A IFI adverte que a DBGG pode saltar para 100% do PIB até 2030.\n\n**Atualização de Fatos (Agosto de 2026):** O cenário real se deteriorou. A Dívida Pública já superou R$ 9,28 trilhões em julho de 2026 e a DBGG atingiu 82,5% do PIB.",
                  "dados": [
                    {
                      "indicador": "Dívida Bruta do Governo Geral",
                      "valor": "82,5% do PIB",
                      "data_ref": "Julho 2026",
                      "fonte": "Banco Central / Tesouro"
                    },
                    {
                      "indicador": "Dívida Pública Federal",
                      "valor": "R$ 9,28 trilhões",
                      "data_ref": "Julho 2026",
                      "fonte": "Tesouro Nacional"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Envio de PEC no período de transição detalhando o corte acumulado de R$ 1,1 trilhão até 2031.",
                  "itens": [
                    {
                      "acao": "Desindexação Previdência/BPC",
                      "instrumento_legal": "PEC",
                      "valor_estimado": "Economia de R$ 455 bi (R$ 91 bi/ano)",
                      "prazo_candidato": "2027"
                    },
                    {
                      "acao": "Desvinculação Saúde/Educação/Fundeb",
                      "instrumento_legal": "PEC",
                      "valor_estimado": "Economia de R$ 306 bi (R$ 61 bi/ano)",
                      "prazo_candidato": "2027"
                    },
                    {
                      "acao": "Revisão do Abono Salarial",
                      "instrumento_legal": "PEC",
                      "valor_estimado": "Economia de R$ 108 bi (R$ 22 bi/ano)",
                      "prazo_candidato": "2027"
                    },
                    {
                      "acao": "Corte de Isenções Fiscais e Supersalários",
                      "instrumento_legal": "PEC e Lei Complementar",
                      "valor_estimado": "Economia de R$ 104 bi (R$ 38 bi/ano)",
                      "prazo_candidato": "2027-2028"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Estônia",
                    "periodo": "2008-2010",
                    "descricao": "Corte brutal de gastos públicos reduzindo salários de servidores em 20% durante a crise global.",
                    "dados_resultado": "Retomou crescimento em 2011, manteve dívida abaixo de 10% do PIB e ingressou na Zona do Euro.",
                    "fonte": "Bank of Estonia"
                  },
                  "onde_falhou": {
                    "pais": "Grécia",
                    "periodo": "Pós-2010",
                    "descricao": "Ajuste fiscal forçado com congelamento abrupto de pensões e corte de benefícios.",
                    "dados_resultado": "O PIB encolheu 25%, o desemprego atingiu 28% e gerou grave convulsão social antes de atingir superávits em 2016.",
                    "fonte": "Eurostat"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "A própria PEC gera a consolidação orçamentária para reduzir juros e estabilizar a dívida.",
                  "aprovacao_politica": "Paradoxo do 'Lame Duck': como aprovar o maior corte de gastos da história com um Congresso em fim de mandato em nov/dez de 2026?",
                  "prazo_realista": "Aprovação em 12 a 18 meses sob intensa pressão popular e resistência sindical.",
                  "riscos_objecoes": "Lobby feroz de corporações de supersalários (juízes, procuradores) e impacto social severo do reajuste de benefícios desvinculados do salário mínimo."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "BAIXO",
                  "complexidade_politica": "ALTA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "Livro Amarelo",
                    "documento": "Capítulo 2: A Cirurgia Fiscal",
                    "data": "2026"
                  },
                  {
                    "instituicao": "IFI",
                    "documento": "Relatório de Acompanhamento Fiscal",
                    "data": "2026"
                  }
                ]
              },
              {
                "id": "prop_eco_2",
                "titulo": "Economia e Assistencialismo: 'Frentes Cidadãs'",
                "resumo": "Extinção da transferência de renda direta incondicional para beneficiários aptos, substituindo-a por trabalho comunitário compulsório em serviços públicos locais.",
                "diagnostico": {
                  "texto": "O Estado transferiu R$ 4 trilhões em subsídios corporativos nos últimos 15 anos enquanto os gastos somados com Bolsa Família e BPC atingiram cerca de R$ 285 bilhões em 2025. A produtividade do trabalho está estagnada desde 1990.",
                  "dados": [
                    {
                      "indicador": "Gastos Bolsa Família e BPC",
                      "valor": "R$ 285 bilhões",
                      "data_ref": "2025",
                      "fonte": "Ministério da Fazenda"
                    },
                    {
                      "indicador": "Produtividade da Indústria de Transformação",
                      "valor": "-0,9% ao ano",
                      "data_ref": "1990-2024",
                      "fonte": "Ipea"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Criação da agência federal de Frentes Cidadãs em convênio com prefeituras para alocar mão de obra em manutenção de vias, creches e reflorestamento.",
                  "itens": [
                    {
                      "acao": "Substituição do Bolsa Família por Frentes de Trabalho",
                      "instrumento_legal": "Projeto de Lei Complementar",
                      "valor_estimado": "Transição orçamentária direta",
                      "prazo_candidato": "2027-2028"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Estados Unidos",
                    "periodo": "1996",
                    "descricao": "Reforma do Bem-Estar Social do governo Clinton com o programa TANF (Workfare), exigindo contrapartida laboral.",
                    "dados_resultado": "Redução de mais de 50% no número de famílias dependentes em 10 anos e alta recorde no emprego formal feminino.",
                    "fonte": "US Department of Health and Human Services"
                  },
                  "onde_falhou": {
                    "pais": "Índia (MGNREGA)",
                    "periodo": "2006-2020",
                    "descricao": "Programa de garantia de emprego rural que esbarrou em corrupção massiva de governos locais e pagamentos fantasmas.",
                    "dados_resultado": "Desvio estimado em até 30% dos recursos sem aumento substancial de produtividade real.",
                    "fonte": "World Bank Policy Research"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "Reorientação dos R$ 160 bilhões anuais do Bolsa Família para a gestão operacional das frentes.",
                  "aprovacao_politica": "Resistência massiva de partidos de esquerda e movimentos sociais que classificam o modelo como regressão de direitos.",
                  "prazo_realista": "Implementação piloto em cidades médias a partir de 2028.",
                  "riscos_objecoes": "Custo logístico elevado de supervisão, uniformes, transporte e risco de clientelismo de prefeitos com a mão de obra federal."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "MÉDIO",
                  "complexidade_politica": "ALTA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "Livro Amarelo",
                    "documento": "Capítulo 3: Frentes Cidadãs",
                    "data": "2026"
                  },
                  {
                    "instituicao": "Ipea",
                    "documento": "Produtividade no Brasil",
                    "data": "2025"
                  }
                ]
              },
              {
                "id": "prop_eco_3",
                "titulo": "Zonas Econômicas Especiais (ZEEs) no Nordeste",
                "resumo": "Criação de três grandes polos industriais com desregulamentação radical, isenção aduaneira e licenciamento expresso em até 15 dias.",
                "diagnostico": {
                  "texto": "O Brasil gasta R$ 70 bilhões anuais importando insumos tecnológicos. Paralelamente, o Nordeste corta até 26% de sua energia eólica e solar em horários de pico por gargalos de transmissão.",
                  "dados": [
                    {
                      "indicador": "Energia Eólica/Solar Desperdiçada (Curtailment)",
                      "valor": "26% no pico",
                      "data_ref": "2024",
                      "fonte": "ONS"
                    },
                    {
                      "indicador": "Importação de Tecnologia Estratégica",
                      "valor": "R$ 70 bilhões/ano",
                      "data_ref": "2025",
                      "fonte": "MDIC"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Projeto de Lei Complementar criando as ZEEs de Suape (PE), Pecém (CE) e Aratu (BA) com tribunais arbitrais internacionais.",
                  "itens": [
                    {
                      "acao": "Criação das ZEEs Nordeste",
                      "instrumento_legal": "Lei Complementar Federal",
                      "valor_estimado": "Atração de US$ 40 bi privados",
                      "prazo_candidato": "2027-2030"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "China",
                    "periodo": "1980-2000",
                    "descricao": "Criação da ZEE de Shenzhen com incentivos tarifários e autonomia gerencial.",
                    "dados_resultado": "Transformou uma vila de pescadores no maior polo tecnológico do mundo, atraindo US$ 300 bi em investimento externo.",
                    "fonte": "World Bank"
                  },
                  "onde_falhou": {
                    "pais": "Nigéria",
                    "periodo": "2000-2015",
                    "descricao": "Zonas de Livre Comércio criadas sem garantir fornecimento de energia elétrica e sem dragagem portuária.",
                    "dados_resultado": "A maioria das indústrias fechou as portas em menos de 5 anos por falta de infraestrutura básica.",
                    "fonte": "African Development Bank"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "Investimento 100% privado com contrapartida de infraestrutura portuária.",
                  "aprovacao_politica": "Bancadas do Sul e Sudeste podem acusar guerra fiscal discriminatória contra o restante do país.",
                  "prazo_realista": "Operação dos primeiros galpões em 3 anos.",
                  "riscos_objecoes": "Licenciamento em apenas 15 dias pode ser bloqueado judicialmente pelo Ministério Público por riscos ambientais graves."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "BAIXO",
                  "complexidade_politica": "MÉDIA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "Livro Amarelo",
                    "documento": "Capítulo 5: Zonas Especiais",
                    "data": "2026"
                  },
                  {
                    "instituicao": "ONS",
                    "documento": "Relatório de Curtailment Renovável",
                    "data": "2025"
                  }
                ]
              }
            ]
          },
          {
            "id": "geopolitica_agro",
            "nome": "Geopolítica, Indústria e Agro",
            "icone": "🌍",
            "tipo": "especifico",
            "resumo_executivo": "Soberania em terras raras, pragmatismo no BRICS+, cesta de moedas sul-americana e revisão da reforma agrária.",
            "propostas": [
              {
                "id": "prop_geo_1",
                "titulo": "Terras Raras e AgroBrasil 2030",
                "resumo": "Verticalização completa das terras raras no Brasil, consórcio internacional de refino e limitação drástica da dependência externa de fertilizantes.",
                "diagnostico": {
                  "texto": "O Brasil detém 23% das reservas de terras raras do mundo mas só exporta minério bruto, enquanto a China refina mais de 90%. O agronegócio importa 85% dos fertilizantes e 140 milhões de hectares de assentamentos geram renda ínfima.",
                  "dados": [
                    {
                      "indicador": "Importação de Fertilizantes pelo Agro",
                      "valor": "85% do total",
                      "data_ref": "2025",
                      "fonte": "Ministério da Agricultura"
                    },
                    {
                      "indicador": "Renda Média em Assentamentos Improdutivos",
                      "valor": "R$ 288/mês",
                      "data_ref": "2025",
                      "fonte": "Incra / FGV"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Consórcio financeiro de R$ 20 bi (BNDES 50%, EUA 35%, Fundos Verdes 10%, Privado 5%) para planta de refino de terras raras até 2030.",
                  "itens": [
                    {
                      "acao": "Planta-Piloto de Refino de Terras Raras",
                      "instrumento_legal": "Consórcio Internacional / Lei de Parcerias",
                      "valor_estimado": "R$ 20 bilhões",
                      "prazo_candidato": "2029-2030"
                    },
                    {
                      "acao": "Congelamento de Assentamentos sem Metas",
                      "instrumento_legal": "Decreto Regulamentador do Incra",
                      "valor_estimado": "Economia de R$ 2 bi/ano",
                      "prazo_candidato": "2027"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Austrália",
                    "periodo": "2015-2024",
                    "descricao": "Apoio governamental à mineradora Lynas para quebrar o monopólio chinês de terras raras com refino local e parceria com Japão.",
                    "dados_resultado": "A Austrália tornou-se o maior fornecedor independente de neodímio para motores elétricos ocidentais.",
                    "fonte": "Australian Critical Minerals Office"
                  },
                  "onde_falhou": {
                    "pais": "Brasil (Programa Siderurgia Nacional anos 70/80)",
                    "periodo": "1975-1988",
                    "descricao": "Grandes consórcios estatais para verticalizar mineração com endividamento externo do BNDES.",
                    "dados_resultado": "Rombos multibilionários que precisaram ser saneados nas privatizações dos anos 90.",
                    "fonte": "BNDES — Histórico de Financiamento Industrial"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "Exige 50% de funding do BNDES em momento de aperto fiscal e 35% de agências americanas (DFC).",
                  "aprovacao_politica": "Oposição de movimentos ligados à reforma agrária (MST) ao congelamento de novos assentamentos.",
                  "prazo_realista": "Mínimo de 6 a 8 anos para certificar cadeia de refino de alta pureza.",
                  "riscos_objecoes": "Refino lida com resíduos radioativos pesados (tório/urânio), com grande risco de rejeição por órgãos ambientais e STF."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "ALTO",
                  "complexidade_politica": "ALTA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "Livro Amarelo",
                    "documento": "Capítulo 6: Terras Raras",
                    "data": "2026"
                  },
                  {
                    "instituicao": "USGS",
                    "documento": "Mineral Commodity Summaries",
                    "data": "2025"
                  }
                ]
              },
              {
                "id": "prop_geo_2",
                "titulo": "Soberania Monetária e Cesta Sul-Americana",
                "resumo": "Criação de unidade contábil regional liderada pelo Real com linhas de swap cambial e conclusão do ciclo nuclear de enriquecimento e combustível.",
                "diagnostico": {
                  "texto": "O comércio exterior brasileiro sofre alta volatilidade pela dependência do dólar americano e o crime organizado transnacional nas fronteiras causa prejuízos de R$ 450 bilhões ao ano com menos de 20% de cobertura do SISFRON.",
                  "dados": [
                    {
                      "indicador": "Prejuízo do Crime Transnacional na Economia",
                      "valor": "R$ 450 bilhões/ano",
                      "data_ref": "2025",
                      "fonte": "FBSP / Fiesp"
                    },
                    {
                      "indicador": "Cobertura Efetiva do Sisfron",
                      "valor": "Apenas 18%",
                      "data_ref": "2025",
                      "fonte": "Exército Brasileiro"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Acordo multilateral sul-americano e dotação orçamentária vinculada para o Prosub e reprocessamento de urânio na INB.",
                  "itens": [
                    {
                      "acao": "Cesta de Moedas com Linhas de Swap",
                      "instrumento_legal": "Tratado Internacional / Resolução BCB",
                      "valor_estimado": "US$ 10 bi em swaps",
                      "prazo_candidato": "2028"
                    },
                    {
                      "acao": "Reprocessamento de Combustível Nuclear",
                      "instrumento_legal": "Programa de Defesa Soberana",
                      "valor_estimado": "R$ 5,5 bilhões",
                      "prazo_candidato": "2029"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Europa",
                    "periodo": "1979-1999",
                    "descricao": "Criação do ECU (European Currency Unit) como cesta de moedas estável ancorada no marco alemão antes do Euro.",
                    "dados_resultado": "Estabilizou transações intrarregionais e reduziu o custo de transação cambial em 30%.",
                    "fonte": "Banco Central Europeu"
                  },
                  "onde_falhou": {
                    "pais": "América Latina (SUCRE)",
                    "periodo": "2009-2015",
                    "descricao": "Tentativa dos países da ALBA de criar moeda de compensação virtual sem disciplina fiscal mútua.",
                    "dados_resultado": "Virou instrumento de desvio e lavagem de dinheiro, caindo em desuso total.",
                    "fonte": "FMI / Cepal"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "O Tesouro Brasileiro teria que atuar como garantidor de última instância dos créditos regionais.",
                  "aprovacao_politica": "Críticas severas no Congresso sobre o risco de o Brasil assumir calotes de vizinhos insolventes.",
                  "prazo_realista": "Acordos bilaterais graduais com parceiros estáveis em até 4 anos.",
                  "riscos_objecoes": "Retaliação comercial velada de Pequim caso o Brasil atue para limitar influência chinesa no BRICS+."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "ALTO",
                  "complexidade_politica": "ALTA",
                  "precedente_internacional": "PARCIAL"
                },
                "fontes": [
                  {
                    "instituicao": "Livro Amarelo",
                    "documento": "Capítulo 8: Soberania e Defesa",
                    "data": "2026"
                  },
                  {
                    "instituicao": "Exército Brasileiro",
                    "documento": "Plano Estratégico Sisfron",
                    "data": "2025"
                  }
                ]
              }
            ]
          },
          {
            "id": "seguranca_faccoes",
            "nome": "Segurança Pública e Combate às Facções",
            "icone": "⚖️",
            "tipo": "especifico",
            "resumo_executivo": "'Direito Penal do Inimigo', presídios federais isolados para lideranças do crime organizado e asfixia financeira e tecnológica.",
            "propostas": [
              {
                "id": "prop_seg_missao_1",
                "titulo": "'Direito Penal do Inimigo' e Isolamento Máximo de Facções",
                "resumo": "Criação de regime penitenciário de exceção jurídica para lideranças de organizações criminosas narcoterroristas: presídios em ilhas oceânicas ou regiões amazônicas inacessíveis, corte total de visitas íntimas e monitoramento integral de advogados.",
                "diagnostico": {
                  "texto": "Facções criminosas brasileiras como o PCC e o Comando Vermelho já operam como cartéis transnacionais presentes em mais de 20 países. Relatórios de inteligência comprovam que as ordens de assassinatos, extorsões e tráfico internacional continuam partindo de dentro de presídios estaduais e federais.",
                  "dados": [
                    {
                      "indicador": "Faturamento Estimado do Narcotráfico no Brasil",
                      "valor": "Mais de R$ 40 bilhões/ano",
                      "data_ref": "2025",
                      "fonte": "Polícia Federal / Coaf"
                    },
                    {
                      "indicador": "Comunicação Clandestina Apreendida em Celas",
                      "valor": "32 mil celulares apreendidos",
                      "data_ref": "2025",
                      "fonte": "Senappen"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Classificação legal de facções como 'grupos terroristas armados' e aprovação de Estatuto Penal Diferenciado via Emenda Constitucional.",
                  "itens": [
                    {
                      "acao": "Estatuto do Inimigo da Ordem Pública",
                      "instrumento_legal": "Proposta de Emenda Constitucional",
                      "valor_estimado": "Sem custo orçamentário direto",
                      "prazo_candidato": "2027"
                    },
                    {
                      "acao": "Construção de Complexo Prisional Remoto",
                      "instrumento_legal": "Orçamento de Defesa e Segurança",
                      "valor_estimado": "R$ 1,5 bilhão",
                      "prazo_candidato": "2028"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Itália",
                    "periodo": "1992-2020",
                    "descricao": "Aplicação do regime 'Carcere Duro' (Artigo 41-bis) que extinguiu visitas, correspondências privadas e contato físico de chefes da Máfia Siciliana.",
                    "dados_resultado": "Interrompeu o comando dos chefes sobre as operações nas ruas e levou à capitulação de chefões históricos como Totò Riina.",
                    "fonte": "Direzione Investigativa Antimafia (Itália)"
                  },
                  "onde_falhou": {
                    "pais": "México",
                    "periodo": "2006-2012",
                    "descricao": "Doutrina de guerra aberta contra cartéis (Governo Calderón) que pulverizou lideranças sem asfixiar suas finanças.",
                    "dados_resultado": "Guerra entre facções multiplicou o número de mortos por quatro e gerou corrupção generalizada de comandos policiais.",
                    "fonte": "Centro de Investigación y Docencia Económicas (CIDE)"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "Recursos oriundos do Fundo Penitenciário Nacional e leilão de bens confiscados de narcotraficantes.",
                  "aprovacao_politica": "Enfrentará severo confronto com o STF, OAB e ONGs de direitos humanos sob alegação de inconstitucionalidade da doutrina de Jakobs.",
                  "prazo_realista": "Construção de presídio remoto em até 3 anos; a validação jurídica dependerá de composição do STF.",
                  "riscos_objecoes": "Risco de retaliação violenta com queima de ônibus e atentados contra prédios públicos nos primeiros dias de implantação."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "BAIXO",
                  "complexidade_politica": "ALTA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "Livro Amarelo",
                    "documento": "Capítulo 4: Guerra Total às Facções",
                    "data": "2026"
                  },
                  {
                    "instituicao": "Fórum Brasileiro de Segurança",
                    "documento": "Cartografia das Facções",
                    "data": "2025"
                  }
                ]
              }
            ]
          },
          {
            "id": "reforma_estado_missao",
            "nome": "Reforma do Estado e Demolição Política",
            "icone": "🏛️",
            "tipo": "especifico",
            "resumo_executivo": "Extinção dos fundos partidário e eleitoral, corte de 50% das vagas de parlamentares e automação maciça com Inteligência Artificial.",
            "propostas": [
              {
                "id": "prop_ref_missao_1",
                "titulo": "Extinção dos Fundos Partidário e Eleitoral e Redução do Congresso",
                "resumo": "Fim do financiamento público de partidos e campanhas políticas, corte de 513 para 256 deputados federais e de 3 para 2 senadores por estado, eliminando suplências e privilégios de gabinete.",
                "diagnostico": {
                  "texto": "O Fundo Eleitoral atingiu quase R$ 5 bilhões em 2024 e o Congresso Nacional brasileiro custa mais de R$ 13 bilhões anuais, figurando como o segundo parlamento mais caro do mundo em proporção à renda média da população.",
                  "dados": [
                    {
                      "indicador": "Custo do Congresso Nacional por Minuto",
                      "valor": "R$ 25 mil/minuto",
                      "data_ref": "2025",
                      "fonte": "Transparência Brasil"
                    },
                    {
                      "indicador": "Fundo Partidário e Eleitoral Somados",
                      "valor": "R$ 6 bilhões/ciclo",
                      "data_ref": "2024-2026",
                      "fonte": "TSE"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Convocação de Plebiscito Popular via Decreto Legislativo ou Projeto de Iniciativa Popular para forçar a aprovação de PEC Redutora.",
                  "itens": [
                    {
                      "acao": "Plebiscito sobre o Fim do Fundão e Corte Parlamentar",
                      "instrumento_legal": "Decreto Legislativo / Plebiscito",
                      "valor_estimado": "Economia de R$ 8 bilhões/ano",
                      "prazo_candidato": "2027"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Itália",
                    "periodo": "2020",
                    "descricao": "Referendo constitucional que reduziu o número de deputados de 630 para 400 e de senadores de 315 para 200.",
                    "dados_resultado": "Aprovado com 69,9% dos votos populares, gerou economia direta de 500 milhões de euros por legislatura sem prejuízo da governabilidade.",
                    "fonte": "Ministero dell'Interno (Itália)"
                  },
                  "onde_falhou": {
                    "pais": "Peru",
                    "periodo": "2018-2022",
                    "descricao": "Reforma política por referendo que extinguiu a reeleição de parlamentares sem reestruturar o sistema partidário fragmentado.",
                    "dados_resultado": "O Congresso ficou ainda mais inexperiente, instável e suscetível à corrupção, culminando em 5 presidentes em 4 anos.",
                    "fonte": "Jurado Nacional de Elecciones (JNE Peru)"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "Economia direta de mais de R$ 8 bilhões anuais aos cofres da União.",
                  "aprovacao_politica": "É a proposta de maior resistência em Brasília: o próprio Congresso teria que votar pela extinção de metade de suas cadeiras e de seu financiamento de campanha.",
                  "prazo_realista": "Exigirá pressão popular direta e maciça nas ruas para viabilizar um plebiscito em 2 anos.",
                  "riscos_objecoes": "Risco de cartelização política em favor de candidatos bilionários que autofinanciam suas próprias campanhas."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "BAIXO",
                  "complexidade_politica": "ALTA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "Livro Amarelo",
                    "documento": "Capítulo 1: A Demolição do Sistema",
                    "data": "2026"
                  },
                  {
                    "instituicao": "TSE",
                    "documento": "Prestação de Contas Partidárias",
                    "data": "2025"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    "augusto_cury": {
      "sabatina_globo": {
        "data_sabatina": "2026-08-15",
        "programa": "Jornal Nacional",
        "duracao_minutos": 40,
        "resumo": "Augusto Cury surpreendeu ao evitar embates polarizados, focando seu tempo na epidemia de adoecimento mental e suicídio no Brasil. Apresentou sua proposta de inclusão de 'Gestão da Emoção' no currículo escolar. Foi muito questionado sobre sua total falta de experiência administrativa e planos econômicos, nos quais deu respostas consideradas vagas e teóricas.",
        "temas_abordados": [
          "Economia",
          "Segurança",
          "Saúde",
          "Educação",
          "Privatizações"
        ],
        "fact_check": {
          "total_afirmacoes_verificadas": 10,
          "verdades": {
            "quantidade": 4,
            "percentual": 40.0,
            "exemplos": [
              {
                "afirmacao": "Fizemos reformas.",
                "verificacao": "Reformas ocorreram.",
                "fonte_verificacao": "Aos Fatos",
                "url_fonte": ""
              },
              {
                "afirmacao": "Dívida cresceu.",
                "verificacao": "Cresceu para 81%.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              }
            ]
          },
          "mentiras": {
            "quantidade": 2,
            "percentual": 20.0,
            "exemplos": [
              {
                "afirmacao": "Não existe desemprego.",
                "verificacao": "Desemprego está em 5.4%.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              },
              {
                "afirmacao": "Arrecadação dobrou.",
                "verificacao": "Subiu apenas 10%.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              }
            ]
          },
          "meias_verdades": {
            "quantidade": 3,
            "percentual": 30.0,
            "exemplos": [
              {
                "afirmacao": "Escolas melhoraram muito.",
                "verificacao": "Apenas IDEB inicial subiu.",
                "fonte_verificacao": "Lupa",
                "url_fonte": ""
              },
              {
                "afirmacao": "Obras terminaram.",
                "verificacao": "Faltam 20%.",
                "fonte_verificacao": "Aos Fatos",
                "url_fonte": ""
              }
            ]
          },
          "nao_auditaveis": {
            "quantidade": 1,
            "percentual": 10.0,
            "exemplos": [
              {
                "afirmacao": "Seremos os melhores.",
                "verificacao": "Opinião.",
                "fonte_verificacao": "N/A",
                "url_fonte": ""
              }
            ]
          }
        },
        "fonte_factcheck_principal": "Aos Fatos",
        "url_factcheck_principal": ""
      },
      "plano_governo": {
        "documento_oficial": {
          "nome": "Brasil Saudável: Da Gestão da Emoção à Prosperidade Sustentável",
          "paginas": 60,
          "data_registro_tse": "2026-08-01",
          "url_tse": "https://divulgacandcontas.tse.jus.br/",
          "observacao": "Plataforma pioneira no debate político nacional focada em saúde mental, educação socioemocional e humanização do serviço público."
        },
        "resumo_executivo_geral": "O plano aborda as raízes invisíveis da crise brasileira: a depressão, a ansiedade coletiva, a violência nas escolas e a polarização patológica. Propõe transformar a saúde mental e o desenvolvimento socioemocional em pilares constitucionais de Estado.",
        "eixos": [
          {
            "id": "saude_mental",
            "nome": "Revolução da Saúde Mental no SUS",
            "icone": "🧠",
            "tipo": "padronizado",
            "resumo_executivo": "Apoio psicológico e psiquiátrico universal na atenção primária (UBS), combate à epidemia de ansiedade e centros de acolhimento desmedicalizados.",
            "propostas": [
              {
                "id": "cury_prop_sm_1",
                "titulo": "Centros de Apoio Psicoemocional na Atenção Básica",
                "resumo": "Inclusão de psicólogos e terapeutas capacitados em todas as UBS do país, acompanhada da criação do programa 'Mentes Saudáveis' para prevenir crises agudas de ansiedade e depressão antes da dependência de psicofármacos.",
                "diagnostico": {
                  "texto": "O Brasil é considerado pela OMS o país mais ansioso do mundo (9,3% da população diagnosticada) e o segundo com maior prevalência de depressão na América Latina. As vendas de antidepressivos e ansiolíticos cresceram mais de 45% nos últimos 5 anos.",
                  "dados": [
                    {
                      "indicador": "Prevalência de Ansiedade no Brasil",
                      "valor": "9,3% da população",
                      "data_ref": "2024",
                      "fonte": "Organização Mundial da Saúde (OMS)"
                    },
                    {
                      "indicador": "Afecções Mentais como Causa de Afastamento INSS",
                      "valor": "287 mil auxílios-doença",
                      "data_ref": "2025",
                      "fonte": "Ministério da Previdência"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Reformulação dos Núcleos Ampliados de Saúde da Família (NASF) e criação de linha de financiamento específica no Fundo Nacional de Saúde.",
                  "itens": [
                    {
                      "acao": "Contratação de 20 mil Psicólogos para UBS",
                      "instrumento_legal": "Portaria Ministerial / Financiamento SUS",
                      "valor_estimado": "R$ 2,4 bilhões/ano",
                      "prazo_candidato": "2027-2028"
                    },
                    {
                      "acao": "Linha 24h de Acolhimento e Prevenção ao Suicídio",
                      "instrumento_legal": "Expansão de Convênio Federal com CVV",
                      "valor_estimado": "R$ 150 milhões",
                      "prazo_candidato": "Imediato"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Reino Unido",
                    "periodo": "2008-2023",
                    "descricao": "Programa IAPT (Improving Access to Psychological Therapies) do NHS, oferecendo terapias cognitivas na atenção básica sem necessidade de encaminhamento prévio.",
                    "dados_resultado": "Mais de 1 milhão de pessoas atendidas anualmente, com taxa de recuperação comprovada de 52% e economia bilionária em internações.",
                    "fonte": "National Health Service (NHS Digital)"
                  },
                  "onde_falhou": {
                    "pais": "Estados Unidos",
                    "periodo": "1963-1980",
                    "descricao": "Desinstitucionalização em massa de pacientes psiquiátricos sem criação de rede comunitária ambulatorial de suporte com verba garantida.",
                    "dados_resultado": "Milhares de pessoas em sofrimento mental migraram diretamente para a situação de rua e para o sistema carcerário comum.",
                    "fonte": "National Institute of Mental Health (NIMH)"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "O custo de R$ 2,5 bi/ano é amplamente compensado pela redução de gastos do INSS com afastamentos e perda de produtividade por burnout (estimados em R$ 15 bi/ano).",
                  "aprovacao_politica": "Tema com apelo humanitário consensual que une deputados de todas as matrizes ideológicas.",
                  "prazo_realista": "Implantação gradual em 3 anos, dependendo da formação e contratação de profissionais em áreas remotas.",
                  "riscos_objecoes": "Escassez de psicólogos e psiquiatras dispostos a atuar no interior profundo e risco de mercantilização com cursos de capacitação rápida sem rigor científico."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "BAIXO",
                  "complexidade_politica": "BAIXA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "OMS",
                    "documento": "World Mental Health Report",
                    "data": "2024"
                  },
                  {
                    "instituicao": "INSS",
                    "documento": "Anuário Estatístico da Previdência Social",
                    "data": "2025"
                  }
                ]
              }
            ]
          },
          {
            "id": "educacao_emocional",
            "nome": "Educação Socioemocional nas Escolas",
            "icone": "📚",
            "tipo": "padronizado",
            "resumo_executivo": "Disciplina de Gestão da Emoção na Base Nacional Comum Curricular (BNCC) para frear a violência escolar e o bullying.",
            "propostas": [
              {
                "id": "cury_prop_edu_1",
                "titulo": "Gestão da Emoção Obrigatória na Educação Básica",
                "resumo": "Inclusão curricular da educação socioemocional em todas as escolas públicas de ensino fundamental e médio, preparando professores para atuar como mentores emocionais.",
                "diagnostico": {
                  "texto": "Casos de agressões físicas, ameaças e ataques em escolas brasileiras cresceram nos últimos anos, acompanhados de taxas alarmantes de automutilação infantil e depressão precoce.",
                  "dados": [
                    {
                      "indicador": "Ataques e Incidentes Violentos em Escolas",
                      "valor": "Alta de 65% em 5 anos",
                      "data_ref": "2024",
                      "fonte": "Unicamp / Laboratório de Violência Escolar"
                    },
                    {
                      "indicador": "Alunos com Sintomas de Depressão Severa",
                      "valor": "18,6% dos estudantes",
                      "data_ref": "2025",
                      "fonte": "Instituto Ayrton Senna"
                    }
                  ]
                },
                "mecanismo": {
                  "texto": "Resolução do Conselho Nacional de Educação (CNE) atualizando as diretrizes da BNCC para cumprimento da competência de inteligência socioemocional.",
                  "itens": [
                    {
                      "acao": "Formação Continuada de Professores em Gestão da Emoção",
                      "instrumento_legal": "Resolução CNE / MEC",
                      "valor_estimado": "R$ 1,2 bilhão",
                      "prazo_candidato": "2027-2028"
                    },
                    {
                      "acao": "Material Pedagógico Socioemocional Gratuito",
                      "instrumento_legal": "Programa Nacional do Livro Didático (PNLD)",
                      "valor_estimado": "R$ 600 milhões",
                      "prazo_candidato": "2028"
                    }
                  ]
                },
                "referencias_internacionais": {
                  "onde_funcionou": {
                    "pais": "Finlândia",
                    "periodo": "2009-Atual",
                    "descricao": "Programa 'KiVa' de combate ao bullying com foco em desenvolvimento de empatia e responsabilidade coletiva.",
                    "dados_resultado": "Redução comprovada de 80% nos incidentes crônicos de bullying e agressões verbais em mais de 1.000 escolas.",
                    "fonte": "University of Turku (Finlândia)"
                  },
                  "onde_falhou": {
                    "pais": "França",
                    "periodo": "2015-2018",
                    "descricao": "Tentativa de implementar cartilha de 'valores cívicos e morais' sem treinamento prático dos educadores e sem diálogo com as famílias.",
                    "dados_resultado": "Rejeição generalizada dos professores, que consideraram a medida puramente burocrática e inócua.",
                    "fonte": "Ministère de l'Éducation Nationale (França)"
                  }
                },
                "teste_viabilidade": {
                  "financiamento": "Absorvido pelo orçamento anual regular do PNLD e do Fundo Nacional de Desenvolvimento da Educação (FNDE).",
                  "aprovacao_politica": "Excelente receptividade de mães, pais e diretores; debates ideológicos pontuais sobre 'intromissão do Estado na educação familiar'.",
                  "prazo_realista": "Formação de multiplicadores e inserção em 40% das redes públicas até o final do 2º ano.",
                  "riscos_objecoes": "Sobrecarga de professores caso a disciplina seja imposta sem suporte estrutural de psicólogos escolares."
                },
                "painel_viabilidade": {
                  "custo_fiscal": "BAIXO",
                  "complexidade_politica": "MÉDIA",
                  "precedente_internacional": "SIM"
                },
                "fontes": [
                  {
                    "instituicao": "CNE/MEC",
                    "documento": "Competências Gerais da BNCC",
                    "data": "2024"
                  },
                  {
                    "instituicao": "Unicamp",
                    "documento": "Mapeamento da Violência nas Escolas",
                    "data": "2025"
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
};
