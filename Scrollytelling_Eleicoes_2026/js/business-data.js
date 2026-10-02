// Valores transcritos dos gráficos da série revisada da Serasa, publicada em 07/04/2026.
// Ano, processos de RJ, CNPJs em pedidos de RJ, processos de falência, CNPJs em pedidos de falência.
export const BUSINESS_HISTORY = [
  [2012, 547, 779, 1879, 1810],
  [2013, 522, 783, 1641, 1607],
  [2014, 526, 822, 1749, 1706],
  [2015, 826, 1412, 1861, 1828],
  [2016, 1011, 1738, 1807, 1797],
  [2017, 769, 1814, 1562, 1571],
  [2018, 657, 1382, 1360, 1377],
  [2019, 632, 1441, 1257, 1302],
  [2020, 517, 1155, 764, 814],
  [2021, 402, 911, 747, 817],
  [2022, 464, 1269, 787, 826],
  [2023, 772, 1728, 823, 846],
  [2024, 926, 2184, 812, 862],
  [2025, 977, 2466, 686, 698]
];

const release = 'https://www.serasaexperian.com.br/sala-de-imprensa/indicadores/recuperacoes-judiciais-avancam-no-brasil-e-atingem-25-mil-empresas-em-2025-maior-nivel-da-serie-aponta-serasa-experian/';
const imageBase = 'https://www.serasaexperian.com.br/content/dam/serasa-institucional/releases-images-2025/indicadores/';
const imageSuffix = '-recuperacoes-judiciais-avancam-no-brasil-e-atingem-25-mil-empresas-em-2025-maior-nivel-da-serie-aponta.png';
export const BUSINESS_SOURCES = {
  empresasMapa: ['MEMP / Receita Federal · painel até jul/2026', 'https://www.gov.br/empresas-e-negocios/pt-br/mapa-de-empresas'],
  empresasPainel: ['MEMP · referência e abrangência do painel', 'https://www.gov.br/empresas-e-negocios/pt-br/mapa-de-empresas/painel-mapa-de-empresas'],
  empresas2024: ['MEMP · maio–agosto/2024 · tabela 19', 'https://www.gov.br/empresas-e-negocios/pt-br/mapa-de-empresas/boletins/mapa-de-empresas-boletim-2o-quadrimestre-2024.pdf'],
  empresas2025: ['MEMP · maio–agosto/2025 · tabela 19', 'https://www.gov.br/empresas-e-negocios/pt-br/mapa-de-empresas/boletins/mapa-de-empresas-boletim-2o-quadrimestre-2025.pdf'],
  empresasJudicial: ['Serasa Experian · revisão metodológica · 07/04/2026', release],
  empresasSerieAntiga: ['Serasa Experian · divulgação anterior de 2024 · não concatenada', 'https://www.serasaexperian.com.br/sala-de-imprensa/indicadores/brasil-registra-22-mil-pedidos-de-recuperacao-judicial-em-2024-o-maior-numero-da-serie-historica-aponta-serasa-experian/'],
  empresasRJHistoria: ['Serasa Experian · gráfico revisado de recuperação judicial · 2012–2025', imageBase + '01' + imageSuffix],
  empresasFalHistoria: ['Serasa Experian · gráfico revisado de falência requerida · 2012–2025', imageBase + '06' + imageSuffix],
  empresasJudicialAtual: ['Serasa Experian · acumulado até abr/2026', 'https://www.serasaexperian.com.br/conteudos/indicadores-economicos/'],
  empresasJudicialAbril: ['Serasa Experian · abril/2026 · publicado em 12/08/2026', 'https://www.serasaexperian.com.br/sala-de-imprensa/indicadores/pedidos-de-recuperacao-judicial-somaram-60-processos-em-abril-aponta-serasa-experian/'],
  empresasLei: ['Lei 11.101 · conceitos · arts. 47, 73, 75 e 99', 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11101.htm'],
  empresasCaged: ['MTE · Novo Caged · agosto/2026 · divulgação de 29/09', 'https://www.gov.br/trabalho-e-emprego/pt-br/noticias-e-conteudo/2026/setembro/novo-caged-emprego-formal-gera-165-8-mil-vagas-em-agosto-e-acumula-1-13-milhao-de-postos-no-ano/'],
  empresasDados: ['Dados e critérios do histórico · projeto', 'dados/empresas-historico-2026-10-02.json']
};

const format = n => n.toLocaleString('pt-BR');
export const BUSINESS_CYCLE = {
  question: 'Empresas em dificuldade significam menos empregos formais?',
  purpose: 'Comparar aberturas, baixas, pedidos judiciais e vínculos de trabalho sem tratar essas medidas como equivalentes.',
  tables: [{
    caption: 'Aberturas e baixas: o mesmo quadrimestre em dois anos',
    headers: ['Registros · Brasil · inclui MEI e filiais', 'Mai–ago/2024', 'Mai–ago/2025'],
    rows: [['Aberturas', '1.459.079', '1.668.753'], ['Baixas', '830.525', '942.049'], ['Saldo · aberturas menos baixas', '+628.554', '+726.704']],
    note: 'Valores dos boletins de cada ano; cadastros podem ser revisados. Baixa cadastral não identifica a causa do encerramento nem quantos empregados havia. O saldo de registros não é saldo de empregos. Esta comparação não descreve 2026; o painel mais recente informa referência até julho/2026.',
    sources: ['empresas2024', 'empresas2025', 'empresasPainel']
  }, {
    caption: 'Histórico anual de CNPJs envolvidos em pedidos judiciais',
    layout: 'year',
    presentation: 'paired-bars',
    chartMax: 2500,
    chartRows: BUSINESS_HISTORY.map(([year, , recovery, , bankruptcy]) => [year, recovery, bankruptcy]),
    headers: ['Ano completo', 'Recuperação judicial · requerida', 'Falência · requerida'],
    rows: BUSINESS_HISTORY.map(([year, , rj, , bankruptcy]) => [String(year), format(rj), format(bankruptcy)]),
    note: 'Série revisada publicada em abril/2026. CNPJs envolvidos nos pedidos de cada ano, não estoque de empresas ainda em recuperação nem número de falências decretadas. Dados de 2025 preliminares; não concatenamos o indicador antigo com esta metodologia. As duas colunas não devem ser somadas: pode haver sobreposição.',
    sources: ['empresasRJHistoria', 'empresasFalHistoria', 'empresasDados']
  }, {
    caption: '2026 parcial: processos e CNPJs são contagens distintas',
    headers: ['Pedidos · janeiro–abril/2026', 'Processos', 'CNPJs envolvidos'],
    rows: [['Recuperação judicial requerida', '268', '602'], ['Falência requerida', '224', '234']],
    note: 'Última referência localizada no indicador até a revisão de 02/10/2026. Há defasagem informacional média de três meses e revisões retroativas. Quatro meses não são comparáveis a um ano inteiro; não anualizamos estes números.',
    sources: ['empresasJudicialAtual', 'empresasJudicialAbril']
  }, {
    caption: 'Emprego formal: admissões e desligamentos no mesmo mês',
    headers: ['Novo Caged · Brasil · agosto/2026', 'Vínculos'],
    rows: [['Admissões', '2.294.563'], ['Desligamentos', '2.128.736'], ['Saldo · admissões menos desligamentos', '+165.827']],
    note: 'Vínculos, não pessoas únicas ou CNPJs. Os desligamentos abrangem diferentes motivos; esta tabela não identifica demissões causadas por falências. É outra base e outro período, apresentados separadamente dos pedidos judiciais.',
    sources: ['empresasCaged']
  }],
  explanation: {
    title: 'O caminho entre dificuldade financeira e perda de emprego tem etapas',
    paragraphs: ['Recuperação judicial é um pedido de reorganização de dívidas; sua finalidade legal inclui manter a atividade e os empregos. O pedido não prova fechamento. Falência requerida é uma solicitação; a decretação depende de decisão judicial. Baixa é o encerramento de um registro, que também pode ocorrer sem processo de falência.', 'Uma empresa pode reunir vários CNPJs num processo; um CNPJ pode aparecer em mais de um pedido de falência. Por isso, contar processos, registros e trabalhadores produz números diferentes.', 'Encerrar uma operação pode eliminar vagas e afetar fornecedores. O resultado agregado também depende de admissões em empresas novas ou já existentes, do porte de quem fecha e de quem expande.'],
    sources: ['empresasLei', 'empresasJudicial', 'empresasCaged']
  },
  alternative: {
    title: 'Mais pedidos podem coexistir com mais registros e vínculos?',
    paragraphs: ['Sim. No histórico revisado, os CNPJs em pedidos de recuperação passaram de 1.269 em 2022 para 2.466 em 2025; os envolvidos em pedidos de falência passaram de 826 para 698. São movimentos diferentes, não uma contagem de empresas que desapareceram.', 'Nos boletins de maio–agosto, houve mais baixas em 2025 que em 2024, mas também mais aberturas e saldo positivo nos dois períodos. Isso não informa a sobrevivência dos negócios nem prova expansão do número de empregadores.', 'O Novo Caged registrou saldo positivo de 1.134.033 vínculos em janeiro–agosto/2026. Esse total pode coexistir com perdas em empresas ou localidades específicas. Não demonstra que a dificuldade empresarial seja irrelevante, nem permite atribuir uma quantidade de vagas aos processos judiciais.'],
    sources: ['empresasRJHistoria', 'empresasFalHistoria', 'empresas2024', 'empresas2025', 'empresasCaged']
  },
  conclusion: 'Os CNPJs envolvidos em pedidos de recuperação aumentaram entre 2022 e 2025, enquanto os pedidos de falência por CNPJ recuaram nesse intervalo. Os registros de aberturas superaram as baixas nos quadrimestres comparados, e o emprego formal teve saldo positivo no período informado de 2026. Esses dados não medem quantas vagas foram perdidas por falências ou quantas empresas empregadoras deixaram de operar.',
  nextEvidence: 'Para medir essa ligação: acompanhar empregadores com funcionários, vínculos nos estabelecimentos que encerram atividade, sobrevivência dos negócios e resultados por setor e região, com bases e períodos compatíveis.',
  sources: ['empresasRJHistoria', 'empresasFalHistoria', 'empresas2024', 'empresas2025', 'empresasCaged'],
  detailLabel: 'Explorar conceitos, limites do histórico e a ligação com o emprego'
};

export const BUSINESS_BLOCK = {
  id: 'economia-empresas', navLabel: 'Empresas', title: 'Empresas, recuperação judicial e falências',
  stats: [
    ['Registros empresariais ativos', '25,4', 'milhões', 'jul/2026 · referência do painel · Brasil', 'empresasMapa', 'Quantidade arredondada exibida pelo Mapa de Empresas, com MEI e filiais.', 'Descreve a base de registros empresariais.', 'Um registro ativo não prova operação ou contratação. Não equivale a 25,4 milhões de empregadores.'],
    ['CNPJs em pedidos de recuperação', '2.466', 'CNPJs', '2025 completo · série revisada · preliminar', 'empresasRJHistoria', 'Registros empresariais envolvidos nos pedidos de recuperação judicial do ano.', 'Descreve empresas que recorreram à reorganização judicial.', 'Não são empresas fechadas nem o estoque de todas as recuperações em andamento.'],
    ['CNPJs em pedidos de falência', '698', 'CNPJs', '2025 completo · série revisada · preliminar', 'empresasFalHistoria', 'Registros envolvidos em falências requeridas durante o ano.', 'Descreve pedidos que alcançaram empresas devedoras.', 'Pedido não significa falência decretada nem permite contar empregos perdidos.'],
    ['CNPJs em pedidos de recuperação', '602', 'CNPJs', 'jan–abr/2026 · parcial', 'empresasJudicialAtual', 'Acumulado exibido na referência de abril/2026.', 'Complementa o histórico anual com uma janela parcial.', 'Não compare quatro meses com os doze meses de 2025; dados podem ser revistos.'],
    ['CNPJs em pedidos de falência', '234', 'CNPJs', 'jan–abr/2026 · parcial', 'empresasJudicialAtual', 'CNPJs envolvidos nos pedidos de falência do período.', 'Complementa a contagem de processos, que foi de 224.', 'Não são falências decretadas ou baixas cadastrais.'],
    ['Saldo de vínculos formais', '+1.134.033', 'vínculos', 'jan–ago/2026 · Novo Caged', 'empresasCaged', 'Admissões menos desligamentos no período.', 'Descreve o movimento líquido do emprego formal.', 'Não identifica o efeito de falências; vínculos e pessoas são unidades diferentes.']
  ],
  reading: [
    ['O que mudou no histórico da Serasa?', 'A divulgação de abril/2026 revisou a metodologia e separou processos de CNPJs. O histórico aqui vem dos gráficos revisados de 2012–2025; não usa a antiga contagem de 2.273 pedidos divulgada para 2024. Atualizações podem alterar meses anteriores.', ['empresasJudicial', 'empresasSerieAntiga', 'empresasDados']],
    ['Por que baixa cadastral não é sinônimo de falência?', 'A baixa identifica encerramento de registro. Os totais apresentados não distinguem dificuldades financeiras, mudança da organização do negócio ou outros motivos. Também não mostram se havia funcionários. Para medir perda de postos, precisamos de informação sobre vínculos nos estabelecimentos envolvidos.', ['empresas2025', 'empresasCaged']],
    ['Recuperação, decretação e resultado são etapas diferentes', 'O pedido de recuperação, o processamento, a aprovação do plano e seu cumprimento não são a mesma etapa. A recuperação pode ser convertida em falência nas hipóteses legais. Esta série de pedidos não acompanha o desfecho de cada processo e não mede a proporção de empresas que voltaram a operar normalmente.', ['empresasLei', 'empresasJudicialAbril']],
    ['Um exemplo: menos empresas pode coexistir com mais vagas', 'Exemplo fictício: duas empresas com dez empregados cada encerram operações, eliminando vinte vagas. Uma empresa existente contrata trinta pessoas. Há duas empresas a menos e dez vínculos a mais. O exemplo apenas mostra por que contagens de empresas não substituem contagens de empregos; não descreve o resultado do Brasil.'],
    ['O que ainda falta para medir o impacto nos trabalhadores?', 'É necessário ligar registros empresariais e eventos judiciais a admissões, desligamentos e estoques de vínculos ao longo do tempo. Os agregados publicados aqui não fazem esse cruzamento. Uma perda numa empresa pode ser compensada no total nacional e ainda atingir trabalhadores, fornecedores e uma economia local.', ['empresasCaged', 'empresasJudicial']]
  ]
};
