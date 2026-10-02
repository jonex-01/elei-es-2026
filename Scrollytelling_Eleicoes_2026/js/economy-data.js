import { INCOME_ESTIMATES } from './income-estimates.js';
import { INCOME_ANALYSIS, WORK_ANALYSIS } from './income-work-analysis.js';
import { ECONOMY_CYCLES } from './economy-cycles.js';
// Revisão editorial em 02/10/2026. Valores observados; 2026 ainda não terminou.
export const ECONOMY_SOURCES = {
  rendaCalculo: ['Estimativa do projeto · microdados IBGE · abr–jun/2026', 'dados/renda-pnad-2026-2tri.json'],
  rendaTrimestre: ['IBGE · SIDRA 6472 · renda nominal · abr–jun/2026', 'https://apisidra.ibge.gov.br/values/t/6472/n1/all/v/5929/p/202602'],
  empregoDetalhes: ['IBGE · divulgação de 29/09/2026 · via Agência Gov', 'https://agenciagov.ebc.com.br/noticias/202609/desemprego-cai-no-trimestre-e-numero-de-pessoas-ocupadas-e-o-maior-da-serie-historica'],
  empregoConceitos: ['IBGE Explica · desemprego e benefícios sociais', 'https://www.ibge.gov.br/explica/desemprego.php?screening=true'],
  cagedConceitos: ['Ministério do Trabalho · Novo Caged', 'https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/novo-caged'],
  rendaCodigo: ['Código e critérios do cálculo · projeto Eleições 2026', 'https://github.com/jonex-01/elei-es-2026/blob/main/Scrollytelling_Eleicoes_2026/scripts/calculate_income.py'],
  metodologiaTrabalho: ['IBGE · conceitos de ocupação · glossário', 'https://anuario.ibge.gov.br/2023/glossario-2023.html'],
  metodologiaSubutilizacao: ['IBGE · medidas de subutilização', 'https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/9915-ibge-produz-novos-indicadores-de-mercado-de-trabalho'],
  informalidade: ['IBGE · SIDRA 8513 · jun–ago/2026', 'https://apisidra.ibge.gov.br/values/t/8513/n1/all/v/12466/p/202608'],
  investimento: ['IBGE · SIDRA 6727 · 2º trimestre/2026', 'https://apisidra.ibge.gov.br/values/t/6727/n1/all/v/2517/p/202602'],
  precosSerie: ['BCB / IBGE · SGS 433 · jan/2023–ago/2026', 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json&dataInicial=01/01/2023&dataFinal=01/08/2026'],
  pibAtual: ['IBGE / informativo da Fazenda · 2º trimestre/2026', 'https://www.gov.br/fazenda/pt-br/central-de-conteudo/publicacoes/conjuntura-economica/atividade-economica/defeso-eleitoral-2026/informativo-pib-jun2026.html'],
  fiscalAtual: ['BCB · nota de 30/09/2026 · p. 2–3', 'https://www.bcb.gov.br/content/estatisticas/hist_estatisticasfiscais/202609_Texto_de_estatisticas_fiscais.pdf'],
  credito: ['BCB · nota de 29/09/2026 · p. 3–4', 'https://www.bcb.gov.br/content/estatisticas/hist_estatisticasmonetariascredito/202609_Texto_de_estatisticas_monetarias_e_de_credito.pdf'],
  tesouroAtual: ['Tesouro Nacional · RTN · ago/2026', 'https://www.tesourotransparente.gov.br/publicacoes/boletim-resultado-do-tesouro-nacional-rtn/2026/8'],
  fiscalTrimestre: ['Tesouro / Fazenda · Governo Geral · publicado em 01/10/2026', 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/outubro/segundo-trimestre-de-2026-registra-necessidade-liquida-de-financiamento-do-governo-geral-de-9-2-do-pib'],
  fomeAtual: ['SOFI 2026 / Consea · triênio 2023–2025', 'https://www.gov.br/secretariageral/pt-br/consea/relatorio-sofi-2026/relatorio-sofi-2026-o-estado-da-seguranca-alimentar-e-nutricional-no-mundo'],
  fomeMapa: ['SOFI 2026 / MDS · Brasil fora do Mapa da Fome', 'https://www.gov.br/mds/pt-br/noticias/relatorio-da-onu-confirma-que-brasil-permanece-fora-do-mapa-da-fome-e-aponta-melhora-em-indicadores'],
  dividaHistoria: ['BCB · SGS 13762 · dez/2010–ago/2026', 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.13762/dados?formato=json&dataInicial=01/12/2010&dataFinal=01/08/2026']
};

export const ECONOMY_BLOCKS = [
  {
    id: 'economia-bolso', title: 'Seu dinheiro compra mais?',
    analysis: INCOME_ANALYSIS,
    intro: 'A renda precisa acompanhar o custo de vida. Inflação menor é uma alta mais lenta dos preços; renda real já desconta a inflação.',
    stats: [
      ['Alta dos preços desde 2023', '17,90', '%', 'jan/2023–ago/2026 · IPCA', 'precosSerie', 'Variação acumulada do índice de preços desde dezembro de 2022.', 'Uma cesta que acompanhou exatamente o IPCA e custava R$ 100 passou a custar cerca de R$ 117,90.', 'Cálculo composto com 44 taxas mensais: produto de (1 + taxa/100), menos 1. Não é soma das taxas nem a inflação de todo o mandato.'],
      ['Rendimento médio real', '3.777', 'R$', 'jun–ago/2026 · todos os trabalhos', 'emprego', 'Renda habitual média do trabalho, corrigida pela inflação.', 'A alta real foi de 3,7% frente ao mesmo trimestre de 2025.', 'É média dos trabalhadores com rendimento, não mediana nem renda de cada família. Não se deve descontar a inflação novamente.'],
      ['Rendimento mediano estimado', INCOME_ESTIMATES.percentiles['50'].toLocaleString('pt-BR'), 'R$', 'abr–jun/2026 · nominal · cálculo do projeto', 'rendaCalculo', 'Ponto central da distribuição ponderada dos rendimentos positivos do trabalho.', 'Metade da distribuição ponderada fica até esse ponto, considerando os empates. No mesmo trimestre, a média era R$ 3.738.', 'Usa microdados trimestrais, não o trimestre móvel junho–agosto. Não compare diretamente com R$ 3.777; os períodos e bases de preços diferem. Sem intervalo de confiança.'],
      ['Cesta / salário mínimo líquido', '60,06', '%', 'ago/2026 · São Paulo', 'cesta', 'Parcela do salário mínimo após desconto previdenciário necessária para a cesta de um adulto.', 'A cesta custou R$ 900,59; ainda faltam aluguel, transporte e outras despesas.', 'A lista e as quantidades diferem entre regiões. Essa proporção não representa o orçamento de toda família brasileira.']
    ],
    charts: [{ title: 'A inflação muda conforme a despesa', unit: 'variação em 12 meses até ago/2026 · %', max: 8, source: 'ipca', note: 'Grupos do IPCA, não contribuições para o índice: os percentuais não devem ser somados.', rows: [['IPCA geral', 4.22], ['Alimentação e bebidas', 3.53], ['Habitação', 4.90], ['Transportes', 3.04], ['Saúde e cuidados', 5.84], ['Educação', 5.98]] },
      { title: 'A cesta varia entre as capitais', unit: 'ago/2026 · R$ · cinco capitais selecionadas', max: 1000, source: 'cesta', note: 'Um exemplo de cada região, não um ranking completo. No Norte e Nordeste, composição e quantidades são diferentes; o valor não representa uma cesta idêntica em todos os locais.', rows: [['São Paulo · SE', 900.59], ['Florianópolis · S', 850.90], ['Brasília · CO', 734.35], ['Belém · N', 709.12], ['Aracaju · NE', 570.98]] }],
    reading: [['O que muda no seu orçamento?', 'Se sua renda cresce menos que seus gastos, o orçamento aperta. A renda média pode melhorar enquanto algumas famílias perdem poder de compra, porque os reajustes e a composição das despesas variam.']]
  },
  {
    id: 'economia-trabalho', title: 'Há mais trabalho. Ele atende às necessidades?',
    analysis: WORK_ANALYSIS,
    intro: 'Conseguir uma ocupação é uma parte da melhora. Horas disponíveis, rendimento e proteção social também importam.',
    stats: [
      ['Desocupação', '5,3', '%', 'jun–ago/2026 · Brasil', 'emprego', 'Parcela da força de trabalho sem ocupação, disponível e procurando trabalho.', 'Caiu de 5,6% no mesmo trimestre de 2025.', 'Quem trabalha por aplicativo ou por conta própria pode ser considerado ocupado. A taxa não exige carteira assinada.'],
      ['Subutilização do trabalho', '13,1', '%', 'jun–ago/2026 · Brasil', 'emprego', 'Inclui desocupação, trabalho com horas insuficientes e força de trabalho potencial.', 'Caiu de 14,1% no mesmo trimestre de 2025.', 'Usa uma base ampliada e inclui desocupados: não some 13,1% com 5,3%.'],
      ['Informalidade', '37,5', '%', 'jun–ago/2026 · população ocupada', 'informalidade', 'Parcela dos ocupados em situações de trabalho classificadas como informais pelo IBGE.', 'Ajuda a avaliar a proteção e a qualidade das ocupações.', 'Inclui empregados sem carteira e trabalhadores por conta própria ou empregadores sem CNPJ, entre outros. Não é taxa de desemprego.'],
      ['Pessoas desalentadas', '2,4', 'milhões', 'jun–ago/2026 · Brasil', 'empregoDetalhes', 'Queriam trabalhar e estavam disponíveis, mas não buscaram por razões ligadas à falta de perspectiva de conseguir trabalho.', 'Ficam fora do numerador e do denominador da taxa de desocupação. O contingente caiu 11,9% em um ano.', 'São parte da força de trabalho potencial, não todas as pessoas que não procuraram. Já integram a medida de subutilização; não some novamente.'],
      ['Subocupação por horas', '4,3', 'milhões', 'jun–ago/2026 · Brasil', 'empregoDetalhes', 'Pessoas ocupadas com horas insuficientes que queriam e estavam disponíveis para trabalhar mais.', 'Ter ocupação não garante conseguir a jornada desejada.', 'Não mede, sozinho, trabalho abaixo da qualificação, salário baixo ou precariedade. Já está dentro dos 15 milhões de subutilizados.'],
      ['Nível de ocupação', '58,9', '%', 'jun–ago/2026 · população de 14 anos ou mais', 'empregoDetalhes', 'Percentual das pessoas em idade de trabalhar que tinham uma ocupação.', 'Usa uma população mais ampla que a taxa de desocupação.', 'Não é 100% menos desemprego. O restante inclui desocupados e pessoas fora da força de trabalho.']
    ],
    charts: [{ title: 'Compare o mesmo trimestre de cada ano', unit: 'junho–agosto · %', max: 20, source: 'emprego', note: 'Taxas sem ajuste sazonal. Cada par usa a mesma definição; desemprego e subutilização têm denominadores diferentes.', rows: [['Desocupação · 2025', 5.6], ['Desocupação · 2026', 5.3], ['Subutilização · 2025', 14.1], ['Subutilização · 2026', 13.1]] }],
    reading: [['O que falta para avaliar a qualidade?', 'Diferenças de renda entre grupos complementam a análise. A média nacional não informa se uma pessoa tem estabilidade, proteção previdenciária ou renda suficiente.']]
  },
  {
    id: 'economia-producao', title: 'O país está produzindo e investindo mais?',
    intro: 'PIB é o valor dos bens e serviços finais produzidos. Crescer amplia a atividade; investir ajuda a sustentar a capacidade de produzir.',
    stats: [
      ['Crescimento real do PIB', '+0,5', '%', '2º tri/2026 contra 1º tri/2026', 'pibAtual', 'Mudança na produção descontando preços, com ajuste sazonal.', 'Indica expansão em relação ao trimestre anterior.', 'Frente ao 2º trimestre de 2025, a alta foi de 2,0%. São comparações diferentes, não taxas que podem ser somadas.'],
      ['PIB em quatro trimestres', '+1,9', '%', 'até o 2º trimestre/2026', 'pibAtual', 'Crescimento acumulado comparado aos quatro trimestres anteriores.', 'Mostra um intervalo mais longo que a variação de um trimestre.', 'Não é o resultado anual de 2026 nem uma previsão para dezembro.'],
      ['Investimento em capital fixo', '+1,2', '%', '2º tri/2026 contra 1º tri/2026', 'pibAtual', 'Variação real da formação bruta de capital fixo: máquinas, construções e outros ativos produtivos.', 'Investimentos podem ampliar a capacidade futura.', 'Série com ajuste sazonal. Nos quatro trimestres até junho, a variação foi de −0,2%; a recuperação recente não apaga essa fraqueza.'],
      ['Taxa de investimento', '16,1', '% do PIB', '2º trimestre/2026 · Brasil', 'investimento', 'Proporção da formação bruta de capital fixo no PIB, a preços correntes.', 'Mostra quanto da produção corresponde à formação de ativos produtivos.', 'Não é a taxa de crescimento do investimento nem inclui aplicações financeiras.']
    ],
    charts: [{ title: 'Os setores cresceram em ritmos diferentes', unit: '2º tri/2026 contra 2º tri/2025 · %', max: 8, source: 'pibAtual', note: 'Variações reais por setor. Não são contribuições em pontos percentuais; os setores têm pesos diferentes.', rows: [['Agropecuária', 6.8], ['Indústria', 1.5], ['Serviços', 1.5]] }],
    reading: [['PIB maior não garante renda maior para todos', 'O PIB por habitante divide a produção pela população, mas continua sendo uma média. Distribuição da renda, produtividade e qualidade dos serviços determinam como o crescimento chega às pessoas.']]
  },
  {
    id: 'economia-contas', title: 'Como a conta pública fecha?',
    intro: 'O resultado primário compara receitas e despesas sem juros. O nominal inclui juros. A dívida é um estoque acumulado, não o déficit de um único ano.',
    stats: [
      ['Déficit primário', '0,62', '% do PIB', '12 meses até ago/2026 · setor público consolidado', 'fiscalAtual', 'Despesas primárias superaram receitas no período.', 'É uma das partes da necessidade de financiamento.', 'Inclui governos e estatais abrangidos pelo BCB. O RTN do Tesouro usa outra metodologia; não misture as séries.'],
      ['Juros nominais', '8,86', '% do PIB', '12 meses até ago/2026 · setor público consolidado', 'fiscalAtual', 'Juros apropriados por competência, inclusive efeitos financeiros previstos na metodologia.', 'Entram no resultado nominal junto com o primário.', 'Não equivalem à amortização da dívida nem apenas ao custo dos programas sociais.'],
      ['Déficit nominal', '9,48', '% do PIB', '12 meses até ago/2026 · setor público consolidado', 'fiscalAtual', 'Resultado deficitário depois de incluir os juros.', 'Neste período: 0,62 de déficit primário + 8,86 de juros = 9,48% do PIB.', 'Não é a mesma coisa que aumento da dívida bruta: há ajustes patrimoniais e variação do PIB.'],
      ['Dívida bruta / PIB', '82,9', '%', 'ago/2026 · governo geral', 'dividaHistoria', 'Estoque da dívida bruta em relação à produção anual.', 'Sua trajetória influencia o espaço fiscal e as condições de financiamento.', 'DBGG não tem a mesma abrangência do setor público consolidado. Valor da série: 82,86%, arredondado.']
    ],
    equation: [['Déficit primário', '0,62'], ['Juros nominais', '8,86'], ['Déficit nominal', '9,48']],
    charts: [{ title: 'A trajetória da dívida vem de antes de 2023', unit: '% do PIB · DBGG', max: 100, source: 'dividaHistoria', note: 'Estoques de dezembro de cada ano; último ponto é agosto de 2026, ainda parcial. Dados podem ser revisados. A marca de 2026 não é uma projeção.', rows: [['dez/2010', 51.77], ['dez/2011', 51.27], ['dez/2012', 53.67], ['dez/2013', 51.54], ['dez/2014', 56.28], ['dez/2015', 65.50], ['dez/2016', 69.84], ['dez/2017', 73.72], ['dez/2018', 75.27], ['dez/2019', 74.44], ['dez/2020', 86.94], ['dez/2021', 77.31], ['dez/2022', 71.68], ['dez/2023', 73.83], ['dez/2024', 76.27], ['dez/2025', 78.64], ['ago/2026 · parcial', 82.86]] }],
    reading: [
      ['Arrecadação e gastos: outra janela da mesma discussão', 'No RTN de agosto, a receita líquida do Governo Central cresceu 3,5% e a despesa primária 1,9% em termos reais frente a agosto de 2025. Ainda houve déficit primário de R$ 13,6 bilhões. Crescer a receita mais depressa não garante superávit quando a despesa começa de um nível maior.', ['tesouroAtual']],
      ['O que trouxe a publicação fiscal de 1º de outubro?', 'Para o Governo Geral no 2º trimestre de 2026, o Tesouro reportou receita de 40,18% do PIB e despesa de 49,39%, com necessidade de financiamento de 9,21%. Essa metodologia registra despesas por competência e receitas por caixa. É uma janela trimestral e não substitui o resultado nominal de 12 meses do BCB.', ['fiscalTrimestre']],
      ['Por que superávit primário pode coexistir com dívida crescente?', 'Exemplo hipotético: receita de R$ 100 e despesa sem juros de R$ 95 deixam superávit primário de R$ 5. Com juros de R$ 15, há déficit nominal de R$ 10. Na dívida/PIB, crescimento da economia e outros ajustes também contam.', ['fiscal']],
      ['Mais dívida significa crise?', 'Não há uma consequência automática. Uma trajetória sem perspectiva de estabilização pode encarecer financiamento e pressionar impostos, serviços e investimento. Crescimento, juros, prazos e credibilidade alteram esses riscos.', ['cenarios']]
    ]
  },
  {
    id: 'economia-futuro', title: 'Como sustentar as melhorias?',
    intro: 'Alimentação, crédito e orçamento público se encontram na vida cotidiana. Preservar avanços exige renda, políticas eficazes e financiamento sustentável.',
    stats: [
      ['Prevalência de subalimentação', '< 2,5', '%', '2023–2025 · média trienal · SOFI 2026', 'fomeMapa', 'Estimativa de acesso habitual insuficiente à energia alimentar.', 'O Brasil permanece fora do Mapa da Fome.', 'Não significa fome zero. A estimativa trienal não descreve um mês de 2026.'],
      ['Insegurança alimentar moderada ou grave', '9,6', '%', '2023–2025 · média trienal · SOFI 2026', 'fomeAtual', 'Mede dificuldades de acesso regular à alimentação.', 'Complementa a subalimentação, com conceito e método diferentes.', 'Não some os dois percentuais. Fora do Mapa da Fome não significa ausência de insegurança alimentar.'],
      ['Renda comprometida com dívidas', '28,7', '%', 'jul/2026 · famílias · BCB', 'credito', 'Estimativa da parcela de renda destinada ao serviço da dívida com o sistema financeiro.', 'Ajuda a dimensionar o espaço que sobra para outras despesas.', 'É medida agregada, não a situação de toda família; não é o percentual de pessoas endividadas.'],
      ['Meta Selic', '13,75', '% a.a.', 'vigente desde 17/09/2026', 'selic', 'Taxa básica de juros definida pelo Banco Central.', 'Influencia crédito, atividade e controle da inflação.', 'A Selic não é a taxa final do empréstimo: risco, custos e margem também influenciam o crédito.', ]
    ],
    reading: [
      ['Menos fome: o que explica e quanto custa?', 'Emprego, renda, preços e transferências podem contribuir. Para estimar o custo e o efeito de uma política, é preciso analisar sua execução e avaliar o que teria acontecido sem ela. A melhora alimentar e a alta da dívida, vistas juntas, não provam que uma causou a outra.', ['fomeAtual', 'fiscal']],
      ['O crédito pode apertar mesmo com renda maior', 'A taxa média do crédito livre às famílias era 61,7% ao ano em agosto. Dívidas e prestações reduzem o dinheiro disponível. Compare o custo efetivo total e o prazo ao avaliar um empréstimo; taxas médias agregadas não são uma oferta para você.', ['credito']],
      ['Quais caminhos ajudam a preservar os resultados?', 'Melhorar a eficiência dos gastos, revisar benefícios tributários, ampliar a base de arrecadação e favorecer produtividade são caminhos possíveis. Cortes e aumentos de impostos têm efeitos diferentes conforme quem atingem e como são executados.', ['fiscal', 'cenarios']]
    ]
  }
];

for (const block of ECONOMY_BLOCKS) block.cycle = ECONOMY_CYCLES[block.id];
