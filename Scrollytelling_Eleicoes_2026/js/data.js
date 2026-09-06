export const ELECTION_DATA = {
  "metadata": {
    "data_pesquisa": "2026-09-06",
    "pesquisador": "Antigravity AI (Fontes Oficiais TSE & Datafolha/Quaest)",
    "projeto": "Scrollytelling Eleições 2026",
    "aviso": "Dados factuais de registros oficiais no TSE e pesquisas registradas de setembro/2026. Sem viés editorial.",
    "fontes_consultadas": ["TSE","Datafolha","Quaest","IBGE","BCB","IPEA","FBSP","INEP","OCDE","DataSUS","CFM","DIEESE","Tesouro Nacional","Receita Federal"]
  },
  "data_eleicao_1t": "2026-10-04",
  "cena_1_panorama": {
    "ipca_12m": { "valor": "4,44", "unidade": "%", "data_ref": "Julho 2026", "fonte": "IBGE" },
    "divida_pib": { "valor": "81,9", "unidade": "% do PIB", "data_ref": "Junho 2026", "fonte": "BCB" },
    "divida_pib_projecao_2027": { "valor": "83,0", "unidade": "% do PIB", "fonte": "Relatório Prisma (Fazenda)" },
    "serie_divida_pib": [
      { "ano": 2014, "valor": 57.2 },{ "ano": 2015, "valor": 65.5 },{ "ano": 2016, "valor": 69.8 },
      { "ano": 2017, "valor": 73.7 },{ "ano": 2018, "valor": 75.3 },{ "ano": 2019, "valor": 74.4 },
      { "ano": 2020, "valor": 87.7 },{ "ano": 2021, "valor": 78.3 },{ "ano": 2022, "valor": 71.7 },
      { "ano": 2023, "valor": 74.3 },{ "ano": 2024, "valor": 76.5 },{ "ano": 2025, "valor": 78.6 },
      { "ano": 2026, "valor": 81.9 }
    ],
    "pib_crescimento": { "valor": "1,95", "unidade": "%", "tipo": "projeção anual", "data_ref": "Agosto 2026", "fonte": "Boletim Focus (BCB)" },
    "desemprego": { "valor": "5,4", "unidade": "%", "trimestre": "2º tri 2026", "fonte": "IBGE PNAD Contínua" },
    "serie_desemprego": [
      { "ano": 2014, "valor": 6.8 },{ "ano": 2015, "valor": 8.5 },{ "ano": 2016, "valor": 11.5 },
      { "ano": 2017, "valor": 12.7 },{ "ano": 2018, "valor": 12.3 },{ "ano": 2019, "valor": 11.9 },
      { "ano": 2020, "valor": 13.5 },{ "ano": 2021, "valor": 13.2 },{ "ano": 2022, "valor": 9.3 },
      { "ano": 2023, "valor": 7.8 },{ "ano": 2024, "valor": 6.9 },{ "ano": 2025, "valor": 6.1 },
      { "ano": 2026, "valor": 5.4 }
    ],
    "poder_compra_r100_2022": { "valor_equivalente_2026": "124,50", "unidade": "R$", "fonte": "Cálculo baseado no IPCA acumulado" },
    "selic": { "valor": "14,00", "unidade": "% a.a.", "data_ref": "Agosto 2026", "fonte": "BCB (Copom)" },
    "cesta_basica": { "valor": "915,01", "unidade": "R$", "cidade_ref": "São Paulo", "data_ref": "Julho 2026", "fonte": "DIEESE" },
    "serie_falencias_rj": [
      { "ano": 2018, "rj": 1400, "falencias": 1500 },
      { "ano": 2019, "rj": 1380, "falencias": 1400 },
      { "ano": 2020, "rj": 1179, "falencias": 978 },
      { "ano": 2021, "rj": 891, "falencias": 730 },
      { "ano": 2022, "rj": 833, "falencias": 866 },
      { "ano": 2023, "rj": 1405, "falencias": 973 },
      { "ano": 2024, "rj": 1950, "falencias": 1200 },
      { "ano": 2025, "rj": 2200, "falencias": 1350 },
      { "ano": 2026, "rj": 2350, "falencias": 1480 }
    ],
    "fonte_falencias": "Serasa Experian"
  },
  "cena_2_saude": {
    "medicos_por_mil_hab_brasil": { "valor": "2,98", "fonte": "CFM (Demografia Médica 2025)" },
    "medicos_por_mil_hab_comparativo": [
      { "pais": "Brasil", "valor": 2.98 },{ "pais": "Média OCDE", "valor": 3.7 },
      { "pais": "Argentina", "valor": 4.0 },{ "pais": "Chile", "valor": 2.8 },{ "pais": "Portugal", "valor": 5.5 }
    ],
    "espera_consulta_especializada": { "valor": "120 a 180", "unidade": "dias (média est.)", "fonte": "DataSUS" },
    "espera_cirurgia_eletiva": { "valor": "8 a 14", "unidade": "meses (média est.)", "fonte": "DataSUS" },
    "orcamento_saude_2026": { "valor": "231,5", "unidade": "R$ bilhões", "fonte": "LOA 2026" },
    "gasto_saude_per_capita_comparativo": [
      { "pais": "Brasil", "valor_usd": 1500 },{ "pais": "Média OCDE", "valor_usd": 4000 },
      { "pais": "Reino Unido", "valor_usd": 5300 },{ "pais": "Chile", "valor_usd": 2200 }
    ],
    "leitos_sus_por_mil": { "valor": "1,55", "fonte": "DataSUS / CNES" },
    "fila_sus_procedimentos": { "valor": "2,1", "unidade": "milhões", "fonte": "DataSUS" },
    "serie_leitos_sus": [
      { "ano": 2014, "valor": 1.85 },{ "ano": 2015, "valor": 1.82 },{ "ano": 2016, "valor": 1.78 },
      { "ano": 2017, "valor": 1.75 },{ "ano": 2018, "valor": 1.70 },{ "ano": 2019, "valor": 1.65 },
      { "ano": 2020, "valor": 1.80 },{ "ano": 2021, "valor": 1.76 },{ "ano": 2022, "valor": 1.68 },
      { "ano": 2023, "valor": 1.62 },{ "ano": 2024, "valor": 1.59 },{ "ano": 2025, "valor": 1.57 },
      { "ano": 2026, "valor": 1.55 }
    ],
    "serie_fila_sus": [
      { "ano": 2014, "valor": 0.9 },{ "ano": 2015, "valor": 1.0 },{ "ano": 2016, "valor": 1.1 },
      { "ano": 2017, "valor": 1.2 },{ "ano": 2018, "valor": 1.2 },{ "ano": 2019, "valor": 1.4 },
      { "ano": 2020, "valor": 2.8 },{ "ano": 2021, "valor": 3.2 },{ "ano": 2022, "valor": 2.5 },
      { "ano": 2023, "valor": 1.8 },{ "ano": 2024, "valor": 1.9 },{ "ano": 2025, "valor": 2.0 },
      { "ano": 2026, "valor": 2.1 }
    ]
  },
  "cena_3_seguranca": {
    "homicidios_total": { "valor": "40.775", "ano_ref": "2025", "fonte": "FBSP (Anuário 2026)" },
    "taxa_homicidios_100mil": { "valor": "19,1", "fonte": "FBSP (Anuário 2026)" },
    "serie_homicidios": [
      { "ano": 2014, "total": 59627, "taxa": 29.8 },{ "ano": 2017, "total": 65602, "taxa": 31.6 },
      { "ano": 2020, "total": 50448, "taxa": 23.6 },{ "ano": 2022, "total": 47328, "taxa": 22.3 },
      { "ano": 2024, "total": 44127, "taxa": 20.8 },{ "ano": 2025, "total": 40775, "taxa": 19.1 }
    ],
    "top5_maiores_taxas": ["Amapá","Bahia","Pernambuco","Ceará","Alagoas"],
    "top5_maior_reducao": ["Goiás","São Paulo","Ceará","Rio Grande do Norte","Pará"],
    "roubos_furtos": { "tipo": "Veículos", "total": "370.000", "ano_ref": "2025", "fonte": "FBSP" },
    "serie_roubos": [
      { "ano": 2014, "valor": 1.5 },{ "ano": 2017, "valor": 1.9 },
      { "ano": 2020, "valor": 1.1 },{ "ano": 2022, "valor": 1.3 },
      { "ano": 2024, "valor": 1.4 },{ "ano": 2025, "valor": 1.35 }
    ],
    "faccoes_criminosas": {
      "anos": [2014, 2017, 2020, 2023, 2025],
      "pcc": [18, 24, 27, 27, 27],
      "cv": [6, 11, 15, 18, 20]
    },
    "efetivo_policial_por_100mil": { "brasil": "220", "media_onu": "250", "fonte": "UNODC/FBSP" }
  },
  "cena_4_educacao": {
    "pisa": { "leitura": 410, "matematica": 379, "ciencias": 403, "ranking_posicao": "65º (Mat)", "total_paises": "81", "ano_ref": "2022", "fonte": "OCDE" },
    "ideb": { "fund_anos_iniciais": 6.0, "fund_anos_finais": 5.2, "ensino_medio": 4.3, "ano_ref": "2023", "fonte": "INEP" },
    "evasao_ensino_medio": { "valor": "5,8", "unidade": "%", "fonte": "INEP" },
    "analfabetismo_funcional": { "valor": "29", "unidade": "%", "fonte": "INAF" },
    "gasto_por_aluno_usd_ppp": { "brasil": 3500, "media_ocde": 10500, "fonte": "OCDE" },
    "jovens_fora_escola_15_17": { "valor": "1,2", "unidade": "milhões", "fonte": "IBGE PNAD" },
    "serie_analfabetismo_funcional": [
      { "ano": 2011, "valor": 27 }, { "ano": 2015, "valor": 27 },
      { "ano": 2018, "valor": 29 }, { "ano": 2022, "valor": 30 },
      { "ano": 2025, "valor": 29 }
    ],
    "serie_jovens_fora_escola": [
      { "ano": 2016, "valor": 1.7 }, { "ano": 2018, "valor": 1.5 },
      { "ano": 2020, "valor": 1.8 }, { "ano": 2022, "valor": 1.6 },
      { "ano": 2024, "valor": 1.4 }, { "ano": 2025, "valor": 1.2 }
    ]
  },
  "cena_5_transicao": {
    "resultado_primario": { "valor_rbi": "-55,0", "valor_pct_pib": "-0,45", "data_ref": "Projeção 2026", "fonte": "Tesouro Nacional" },
    "pct_orcamento_educacao": { "valor": "5,5", "fonte": "LOA 2026" },
    "ranking_doing_business": { "posicao": "124º", "total_paises": "190", "fonte": "Banco Mundial" },
    "carga_tributaria_pct_pib": { "valor": "32,40", "fonte": "Tesouro Nacional (Ref: 2025)" },
    "composicao_tributaria": { "consumo_pct": "43", "renda_pct": "22", "patrimonio_pct": "5", "fonte": "Receita Federal" }
  },
  "candidatos": {
    "lula": {
      "nome_completo": "Luiz Inácio Lula da Silva", "partido": "PT", "numero_urna": "13",
      "cargo_atual": "Presidente da República", "idade": "80 anos", "estado_natal": "Pernambuco",
      "formacao": "Ensino Fundamental, Torneiro Mecânico", "ideologia": "Centro-esquerda", "vice": "A definir",
      "cor_partido": "#ED1C24", "cor_secundaria": "#B01018",
      "bio": "Atual Presidente do Brasil, cumprindo seu terceiro mandato. Historicamente ligado ao movimento sindical e fundador do Partido dos Trabalhadores. Busca a reeleição apostando na retomada de programas sociais e na presença do Estado como indutor da economia.",
      "ideologia_valor": 25,
      "timeline": [
        { "ano": "1980", "evento": "Fundação do PT" },
        { "ano": "2003", "evento": "Assume a Presidência pela 1ª vez" },
        { "ano": "2010", "evento": "Termina o 2º mandato com alta aprovação" },
        { "ano": "2018", "evento": "Prisão em Curitiba (condenações anuladas pelo STF)" },
        { "ano": "2023", "evento": "Assume o 3º mandato presidencial" }
      ],
      "propostas": [
        { "tema": "Economia", "icone": "💰", "descricao": "Manutenção da valorização real do salário mínimo." },
        { "tema": "Social", "icone": "🏠", "descricao": "Expansão do Bolsa Família e Minha Casa Minha Vida." },
        { "tema": "Infraestrutura", "icone": "🏗️", "descricao": "Investimentos via Novo PAC." },
        { "tema": "Meio Ambiente", "icone": "🌿", "descricao": "Transição energética e redução do desmatamento." }
      ],
      "pontos_fortes": [
        { "fato": "Queda do desemprego para menores níveis desde 2014.", "fonte": "IBGE" },
        { "fato": "Ampla experiência presidencial e trânsito internacional.", "fonte": "Histórico Factual" },
        { "fato": "Redução expressiva do desmatamento na Amazônia.", "fonte": "INPE" }
      ],
      "pontos_atencao": [
        { "fato": "Aumento progressivo da Dívida Pública Bruta no mandato.", "fonte": "BCB" },
        { "fato": "Dificuldades com um Congresso de perfil conservador.", "fonte": "Fato Político" },
        { "fato": "Completará 81 anos após as eleições.", "fonte": "Dado Biográfico" }
      ],
      "detalhes": {
        "biografia_expandida": "Com uma das trajetórias mais marcantes da política mundial, Luiz Inácio Lula da Silva migrou de retirante nordestino a líder sindical no ABC Paulista nos anos 1970. Fundou o PT e a CUT, consolidando-se como a principal voz da esquerda no Brasil. Após três tentativas frustradas, chegou à Presidência em 2002. Seu terceiro mandato (iniciado em 2023) foi marcado pelo desafio de governar com um Congresso majoritariamente conservador e pela tentativa de reconstruir pontes diplomáticas internacionais.",
        "plano_governo": "O plano de governo baseia-se na forte indução do crescimento econômico por meio de investimentos estatais e bancos públicos (como o BNDES). Foca na transição energética ecológica e na reindustrialização do país. Defende o aumento real do salário mínimo, a expansão do crédito para a população de baixa renda e a proteção ambiental rigorosa na Amazônia como vitrine para atrair investimentos estrangeiros.",
        "controversias": "A sua prisão no âmbito da Operação Lava Jato em 2018 marcou profundamente sua imagem política. Embora o Supremo Tribunal Federal tenha anulado as condenações por erros processuais e suspeição do juiz, parte significativa do eleitorado (e adversários) ainda associa os governos petistas a escândalos de corrupção. Além disso, no atual mandato, sofre críticas do mercado financeiro devido ao persistente déficit primário e ao aumento da Dívida Pública."
      },
      "pesquisa_eleitoral": {
        "intencao_voto_1t_pct": 38,
        "rejeicao_pct": 45,
        "instituto": "Datafolha (TSE: BR-03669/2026)",
        "data_pesquisa": "03/Setembro/2026",
        "outras_fontes": "Quaest (BR-07065/2026): 37% (1ºT) · 42% (2ºT)"
      }
    },
    "flavio_bolsonaro": {
      "nome_completo": "Flávio Bolsonaro", "partido": "PL", "numero_urna": "22",
      "cargo_atual": "Senador pelo Rio de Janeiro", "idade": "45 anos", "estado_natal": "Rio de Janeiro",
      "formacao": "Direito", "ideologia": "Direita a Extrema-Direita", "vice": "A definir",
      "cor_partido": "#003DA5", "cor_secundaria": "#002880",
      "bio": "Senador e filho do ex-presidente Jair Bolsonaro. Principal herdeiro político da direita conservadora em 2026. Foca na oposição ao governo atual e em pautas de segurança, agronegócio e livre mercado.",
      "ideologia_valor": 82,
      "timeline": [
        { "ano": "2003", "evento": "Deputado Estadual no RJ (4 mandatos)" },
        { "ano": "2018", "evento": "Eleito Senador pelo RJ" },
        { "ano": "2021", "evento": "Filia-se ao PL com o grupo bolsonarista" },
        { "ano": "2024", "evento": "Coordena campanhas do PL nas municipais" },
        { "ano": "2026", "evento": "Candidato presidencial da direita" }
      ],
      "propostas": [
        { "tema": "Economia", "icone": "📉", "descricao": "Redução da intervenção do Estado e desregulamentação." },
        { "tema": "Segurança", "icone": "🛡️", "descricao": "Endurecimento de penas e facilitação do porte de armas." },
        { "tema": "Valores", "icone": "👨‍👩‍👧", "descricao": "Defesa de pautas conservadoras e familiares." },
        { "tema": "Impostos", "icone": "🧾", "descricao": "Simplificação tributária e redução da carga bruta." }
      ],
      "pontos_fortes": [
        { "fato": "Herda base eleitoral consolidada do ex-presidente Bolsonaro.", "fonte": "Fato Político" },
        { "fato": "Forte penetração em redes sociais e mídias alternativas.", "fonte": "Análise de Engajamento" },
        { "fato": "Amplo apoio do agronegócio e bancadas conservadoras.", "fonte": "Fato Político" }
      ],
      "pontos_atencao": [
        { "fato": "Investigações sobre 'rachadinha' (processos anulados pelo STJ/STF).", "fonte": "STJ/STF" },
        { "fato": "Elevada rejeição entre eleitores de centro e esquerda.", "fonte": "Pesquisas Eleitorais" },
        { "fato": "Experiência apenas legislativa, sem histórico executivo.", "fonte": "Histórico Factual" }
      ],
      "detalhes": {
        "biografia_expandida": "Filho primogênito de Jair Bolsonaro, Flávio consolidou sua carreira política no Rio de Janeiro, sendo deputado estadual por quatro mandatos antes de chegar ao Senado Federal em 2018. Com a inelegibilidade de seu pai, assumiu o protagonismo nas articulações da direita conservadora no Congresso. Destaca-se por uma postura mais pragmática e política que a do ex-presidente, buscando construir pontes sólidas com o Centrão e empresários moderados.",
        "plano_governo": "Seu plano é a continuidade da agenda liberal-conservadora. Economicamente, propõe privatizações, desburocratização, redução rigorosa de impostos (focando no setor produtivo) e flexibilização das leis trabalhistas. Na pauta de costumes, defende a oposição estrita ao aborto, oposição à descriminalização das drogas e a facilitação do porte de armas para defesa pessoal e proteção ao agronegócio.",
        "controversias": "O ponto mais sensível de sua trajetória são as investigações do caso das 'rachadinhas' na ALERJ, envolvendo ex-assessores. Embora os processos tenham sido trancados ou anulados nas instâncias superiores (STJ/STF) devido a ilegalidades processuais nas quebras de sigilo, o caso ainda é amplamente usado como munição pela oposição. Flávio também enfrenta o desafio interno de liderar alas mais radicais da direita."
      },
      "pesquisa_eleitoral": {
        "intencao_voto_1t_pct": 33,
        "rejeicao_pct": 47,
        "instituto": "Datafolha (TSE: BR-03669/2026)",
        "data_pesquisa": "03/Setembro/2026",
        "outras_fontes": "Quaest (BR-07065/2026): 30% (1ºT) · 41% (2ºT)"
      }
    },
    "zema": {
      "nome_completo": "Romeu Zema", "partido": "Novo", "numero_urna": "30",
      "cargo_atual": "Governador de Minas Gerais", "idade": "61 anos", "estado_natal": "Minas Gerais",
      "formacao": "Administração de Empresas", "ideologia": "Direita Liberal", "vice": "A definir",
      "cor_partido": "#FF6600", "cor_secundaria": "#CC5200",
      "bio": "Empresário varejista em seu segundo mandato como governador de MG. Plataforma estritamente liberal: privatizações e eficiência da gestão privada aplicada ao governo.",
      "ideologia_valor": 78,
      "timeline": [
        { "ano": "1990", "evento": "Assume o Grupo Zema" },
        { "ano": "2018", "evento": "Eleito Governador de MG na 1ª disputa" },
        { "ano": "2022", "evento": "Reeleito Governador no 1º turno" },
        { "ano": "2025", "evento": "Avança concessões e Regime de Recuperação Fiscal" }
      ],
      "propostas": [
        { "tema": "Economia", "icone": "🏭", "descricao": "Privatizações de estatais federais e corte de gastos." },
        { "tema": "Gestão", "icone": "📊", "descricao": "Metas e indicadores de produtividade no serviço público." },
        { "tema": "Infraestrutura", "icone": "🛣️", "descricao": "Concessões agressivas de rodovias e portos." },
        { "tema": "Educação", "icone": "🎓", "descricao": "Municipalização do ensino e vouchers para escolas privadas." }
      ],
      "pontos_fortes": [
        { "fato": "Recuperou a capacidade de pagamento de MG.", "fonte": "Governo de MG" },
        { "fato": "Apoio do mercado financeiro pelo discurso fiscal rígido.", "fonte": "Fato Político" },
        { "fato": "Reeleito no 2º maior colégio eleitoral do país em 1º turno.", "fonte": "TSE" }
      ],
      "pontos_atencao": [
        { "fato": "Forte oposição de servidores pelo congelamento de salários.", "fonte": "Sindicatos de MG" },
        { "fato": "Dívida pública de MG continuou crescendo em seus mandatos.", "fonte": "Tesouro Nacional" },
        { "fato": "Comunicação criticada por analogias mal recebidas em outras regiões.", "fonte": "Fato Político" }
      ],
      "detalhes": {
        "biografia_expandida": "Nascido em Araxá (MG), Romeu Zema liderou por décadas o Grupo Zema, um vasto conglomerado varejista. Entrou na política formal de supetão em 2018 pelo Partido Novo, surfando na onda anti-PT e sendo eleito governador de Minas Gerais na sua primeira disputa eleitoral. Reeleito no 1º turno em 2022, Zema consolidou-se como um gestor pragmático, voltado quase inteiramente ao controle de contas e à eficiência administrativa estilo iniciativa privada.",
        "plano_governo": "Sua visão de país é ultra focada no livre mercado. Zema defende o Estado mínimo, propondo a venda rápida de estatais federais, reforma administrativa profunda para acabar com a estabilidade de novos servidores públicos, e o estabelecimento de metas corporativas rígidas para o serviço público. Defende também o pacto federativo, exigindo que impostos federais fiquem, em maior parte, nos próprios estados onde são gerados.",
        "controversias": "Enfrenta duras críticas de sindicatos e servidores estaduais, que o acusam de sucatear serviços e congelar salários por anos em Minas Gerais sob o pretexto de austeridade. Apesar do forte discurso fiscal, a dívida total de Minas Gerais continuou subindo expressivamente durante seus mandatos, forçando-o a aderir ao polêmico Regime de Recuperação Fiscal imposto pela União."
      },
      "pesquisa_eleitoral": {
        "intencao_voto_1t_pct": 2,
        "rejeicao_pct": 16,
        "instituto": "Datafolha (TSE: BR-03669/2026)",
        "data_pesquisa": "03/Setembro/2026",
        "outras_fontes": "Quaest (BR-07065/2026): 1% (1ºT)"
      }
    },
    "caiado": {
      "nome_completo": "Ronaldo Caiado", "partido": "União Brasil", "numero_urna": "44",
      "cargo_atual": "Governador de Goiás", "idade": "76 anos", "estado_natal": "Goiás",
      "formacao": "Medicina (Ortopedia)", "ideologia": "Centro-Direita a Direita", "vice": "A definir",
      "cor_partido": "#2651A1", "cor_secundaria": "#1A3A80",
      "bio": "Médico e produtor rural com longa trajetória no Congresso Nacional. Segundo mandato como Governador de GO. Traz a segurança pública como principal vitrine e forte conexão com o agronegócio.",
      "ideologia_valor": 70,
      "timeline": [
        { "ano": "1989", "evento": "Fundador da UDR e candidato à Presidência" },
        { "ano": "1991", "evento": "5 mandatos como Deputado Federal" },
        { "ano": "2014", "evento": "Eleito Senador por Goiás" },
        { "ano": "2018", "evento": "Eleito Governador de Goiás" },
        { "ano": "2025", "evento": "Vitrine da direita na pauta de segurança" }
      ],
      "propostas": [
        { "tema": "Segurança", "icone": "🚔", "descricao": "Integração nacional das polícias e combate ao crime organizado." },
        { "tema": "Economia", "icone": "🌾", "descricao": "Estímulo ao agronegócio e reindustrialização." },
        { "tema": "Saúde", "icone": "🏥", "descricao": "Regionalização da saúde de alta complexidade." },
        { "tema": "Federativo", "icone": "🗺️", "descricao": "Revisão da divisão de recursos entre União e estados." }
      ],
      "pontos_fortes": [
        { "fato": "Redução drástica dos homicídios e roubos em Goiás.", "fonte": "FBSP / SSP-GO" },
        { "fato": "Um dos governadores com maior aprovação do Brasil.", "fonte": "Atlas/Quaest" },
        { "fato": "Vasta experiência: Executivo (2 mandatos), Senado e Câmara.", "fonte": "Histórico Factual" }
      ],
      "pontos_atencao": [
        { "fato": "Terminaria o mandato com mais de 80 anos.", "fonte": "Dado Biográfico" },
        { "fato": "Baixo conhecimento nas regiões Sul e Nordeste.", "fonte": "Pesquisas Eleitorais" },
        { "fato": "Goiás está sob Regime de Recuperação Fiscal.", "fonte": "Tesouro Nacional" }
      ],
      "detalhes": {
        "biografia_expandida": "Ronaldo Caiado é uma das figuras políticas mais duradouras da Nova República. Médico ortopedista e produtor rural expoente, fundou a influente UDR nos anos 80. Construiu sólida carreira parlamentar (Deputado Federal e Senador) antes de assumir o governo de Goiás em 2018. Em seus dois mandatos como governador, priorizou intensamente a segurança pública, o que o transformou em uma das maiores vitrines nacionais do combate à violência.",
        "plano_governo": "No plano federal, Caiado tem como base a tolerância zero contra facções criminosas. Ele propõe a federalização parcial de crimes relacionados ao tráfico, a unificação das polícias sob comandos integrados fortes, e construção massiva de novos presídios de segurança máxima. Na economia, é o principal escudo do agronegócio, defendendo pesados subsídios, renegociação de dívidas do setor e expansão da infraestrutura escoadora de safra.",
        "controversias": "Sua idade avançada (completará mais de 80 anos ao fim de um eventual mandato presidencial) levanta constantes questionamentos sobre vigor e renovação política. Apesar do sucesso midiático na segurança, Goiás continua enfrentando graves problemas fiscais, dependendo do Regime de Recuperação Fiscal. A oposição acusa sua política de segurança de ser pautada na letalidade policial e em abusos de autoridade institucional."
      },
      "pesquisa_eleitoral": {
        "intencao_voto_1t_pct": 4,
        "rejeicao_pct": 13,
        "instituto": "Datafolha (TSE: BR-03669/2026)",
        "data_pesquisa": "03/Setembro/2026",
        "outras_fontes": "Quaest (BR-07065/2026): 1% (1ºT)"
      }
    },
    "renan_santos": {
      "nome_completo": "Renan Santos", "partido": "Missão", "numero_urna": "14",
      "cargo_atual": "Presidente do Partido Missão", "idade": "42 anos", "estado_natal": "São Paulo",
      "formacao": "Direito (Incompleto)", "ideologia": "Centro-Direita (Liberal Antissistema)", "vice": "A definir",
      "cor_partido": "#4A7C2E", "cor_secundaria": "#2E5019",
      "bio": "Líder fundador do MBL. Voz antissistema que atrai eleitorado jovem e digital. Campanha baseada em renovação política, liberalismo econômico radical e ruptura com a polarização PT-Bolsonaro.",
      "ideologia_valor": 68,
      "timeline": [
        { "ano": "2014", "evento": "Cofunda o MBL nos protestos pró-impeachment" },
        { "ano": "2018", "evento": "Elege parlamentares apoiados pelo MBL" },
        { "ano": "2022", "evento": "Rompe com o bolsonarismo" },
        { "ano": "2025", "evento": "Cria e registra o partido Missão no TSE" },
        { "ano": "2026", "evento": "Lança candidatura própria à Presidência" }
      ],
      "propostas": [
        { "tema": "Política", "icone": "🏛️", "descricao": "Fim dos fundos eleitoral e partidário, redução dos parlamentares." },
        { "tema": "Economia", "icone": "📉", "descricao": "Corte radical de impostos e privatização das estatais." },
        { "tema": "Tecnologia", "icone": "💻", "descricao": "Digitalização total do governo com IA na gestão pública." },
        { "tema": "Educação", "icone": "📚", "descricao": "Fim da estabilidade de professores sem atingir metas." }
      ],
      "pontos_fortes": [
        { "fato": "Capacidade de mobilização orgânica em redes sociais.", "fonte": "Análise de Engajamento" },
        { "fato": "Discurso inovador fora da polarização tradicional.", "fonte": "Fato Político" },
        { "fato": "Domínio de comunicação digital e debates em podcast.", "fonte": "Análise de Mídia" }
      ],
      "pontos_atencao": [
        { "fato": "Zero experiência em gestão pública ou parlamentar.", "fonte": "Histórico Factual" },
        { "fato": "Partido novo sem estrutura, tempo de TV ou fundo partidário.", "fonte": "TSE" },
        { "fato": "Declarações polêmicas históricas do MBL afastam moderados.", "fonte": "Fato Político" }
      ],
      "detalhes": {
        "biografia_expandida": "Um dos fundadores e principal mente estratégica do Movimento Brasil Livre (MBL), Renan Santos emergiu nas jornadas de 2013 e nos protestos pró-impeachment de 2016. Diferente de outros fundadores, atuou mais nos bastidores até decidir concorrer ao cargo executivo em 2026, pelo novo partido Missão. Representa a direita que rompeu definitivamente com Jair Bolsonaro, apostando em um discurso afiado, jovem, digital e implacável contra privilégios.",
        "plano_governo": "Promete uma verdadeira 'demolição' do sistema político tradicional: defende a extinção dos fundos eleitoral e partidário, o fim da reeleição para todos os cargos e a redução drástica de deputados e senadores. Na economia, é um liberal purista, pregando choque de capitalismo e a implementação pesada de Inteligência Artificial para automatizar e reduzir pela metade a máquina pública em 4 anos.",
        "controversias": "Possui total inexperiência em cargos eletivos ou administração pública formal, um alvo constante de seus adversários. O histórico do MBL, recheado de declarações inflamadas, cancelamentos e brigas públicas com aliados do passado, dificulta a criação de pontes e o afasta de eleitores mais moderados. Além disso, a capacidade de sua base jovem e altamente digital se transformar em votos reais na urna em escala nacional permanece uma grande incógnita."
      },
      "pesquisa_eleitoral": {
        "intencao_voto_1t_pct": 3,
        "rejeicao_pct": 15,
        "instituto": "Datafolha (TSE: BR-03669/2026)",
        "data_pesquisa": "03/Setembro/2026",
        "outras_fontes": "Quaest (BR-07065/2026): 3% (1ºT)"
      }
    },
    "augusto_cury": {
      "nome_completo": "Augusto Cury", "partido": "Avante", "numero_urna": "70",
      "cargo_atual": "Escritor e Psiquiatra", "idade": "67 anos", "estado_natal": "São Paulo",
      "formacao": "Medicina (Psiquiatria)", "ideologia": "Centro (Foco Humanista)", "vice": "A definir",
      "cor_partido": "#F58220", "cor_secundaria": "#C26510",
      "bio": "Médico psiquiatra e um dos autores mais lidos do mundo em saúde emocional. Figura nova na política que se apresenta como candidato capaz de pacificar o país e tratar as feridas sociais do Brasil.",
      "ideologia_valor": 45,
      "timeline": [
        { "ano": "1999", "evento": "Lança 'Inteligência Multifocal'" },
        { "ano": "2003", "evento": "Best-seller com 'O Vendedor de Sonhos'" },
        { "ano": "2015", "evento": "30 milhões de livros vendidos no Brasil" },
        { "ano": "2024", "evento": "Palestras sobre política e saúde mental" },
        { "ano": "2026", "evento": "Candidatura à Presidência pelo Avante" }
      ],
      "propostas": [
        { "tema": "Saúde", "icone": "🧠", "descricao": "Saúde mental como prioridade absoluta do SUS." },
        { "tema": "Educação", "icone": "❤️", "descricao": "Gestão da emoção obrigatória desde a pré-escola." },
        { "tema": "Economia", "icone": "😊", "descricao": "Métricas de 'PIB da Felicidade' atreladas à gestão fiscal." },
        { "tema": "Segurança", "icone": "🕊️", "descricao": "Recuperação humanizada de presidiários e redução da reincidência." }
      ],
      "pontos_fortes": [
        { "fato": "Alta popularidade nas classes C, D e E pelos seus livros.", "fonte": "Fato Político" },
        { "fato": "Traz pautas ignoradas por políticos: saúde mental e burnout.", "fonte": "Fato Político" },
        { "fato": "Rejeição muito baixa, visto como figura apaziguadora.", "fonte": "Pesquisas Eleitorais" }
      ],
      "pontos_atencao": [
        { "fato": "Nenhuma experiência em administração pública.", "fonte": "Histórico Factual" },
        { "fato": "Propostas econômicas vagas sem equipe econômica definida.", "fonte": "Análise de Especialistas" },
        { "fato": "Partido Avante com estrutura limitada nacionalmente.", "fonte": "TSE" }
      ],
      "detalhes": {
        "biografia_expandida": "Augusto Cury é médico psiquiatra, professor e autor de algumas das obras mais vendidas do Brasil e do mundo nas áreas de desenvolvimento pessoal e inteligência emocional. Sem histórico prévio em cargos políticos, decidiu se lançar nas eleições de 2026 se apresentando como um pacificador, um 'curador' focado em tratar as fraturas sociais, a depressão coletiva e a polarização tóxica que tomaram conta do país.",
        "plano_governo": "Sua principal plataforma é completamente atípica: a saúde mental. Propõe reformar o SUS para que a psiquiatria e a psicologia sejam acessíveis a todos, além de tornar disciplinas de Gestão de Emoção obrigatórias desde a pré-escola até o ensino médio para estancar a violência estrutural. Na economia, defende que a gestão fiscal seja atrelada ao que chama de 'PIB da Felicidade', medindo o retorno social e humano de cada real gasto.",
        "controversias": "Sua total ausência de histórico executivo, somada a um discurso que muitos críticos da ciência política classificam como 'utópico' e de 'autoajuda', geram fortes desconfianças sobre sua real capacidade de liderar o país diante do Congresso. Sua equipe econômica é praticamente inexistente no momento, gerando nervosismo no mercado. Conta com uma máquina partidária muito incipiente, dificultando alianças estaduais fortes."
      },
      "pesquisa_eleitoral": {
        "intencao_voto_1t_pct": 8,
        "rejeicao_pct": 9,
        "instituto": "Datafolha (TSE: BR-03669/2026)",
        "data_pesquisa": "03/Setembro/2026",
        "outras_fontes": "Quaest (BR-07065/2026): 10% (1ºT)"
      }
    }
  }
};

export const CANDIDATOS_ORDEM = ["lula","flavio_bolsonaro","zema","caiado","renan_santos","augusto_cury"];
