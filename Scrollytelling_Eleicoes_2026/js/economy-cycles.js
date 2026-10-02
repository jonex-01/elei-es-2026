import { INCOME_ESTIMATES as income } from './income-estimates.js';
import { BUSINESS_CYCLE } from './business-data.js';

// Uma comparação tem período, população e conceito próprios.
// Interpretações alternativas são confrontadas com evidências, não equiparadas a elas.
export const ECONOMY_CYCLES = {
  'economia-empresas': BUSINESS_CYCLE,
  'economia-bolso': {
    question: 'A renda melhorou para quem?',
    purpose: 'Distinguir ganho médio de poder de compra e posição central da distribuição.',
    tables: [{
      caption: 'Média e mediana no mesmo recorte',
      headers: ['Rendimento do trabalho', 'Abr–jun/2026'],
      rows: [
        ['Média nominal · IBGE', `R$ ${Math.round(income.mean).toLocaleString('pt-BR')}`],
        ['Mediana ponderada · projeto', `R$ ${income.percentiles['50'].toLocaleString('pt-BR')}`],
        ['Parcela abaixo da média · projeto', `${income.share_below_mean.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%`]
      ],
      note: 'Ocupados de 14 anos ou mais, com rendimento habitual positivo de todos os trabalhos. Valores monetários nominais do mesmo trimestre. Mediana e parcela abaixo da média são estimativas pontuais do projeto, sem intervalo de confiança.',
      sources: ['rendaTrimestre', 'rendaCalculo']
    }],
    explanation: {
      title: 'A média cresce sem representar o trabalhador central',
      paragraphs: ['A média soma rendimentos; a mediana identifica o ponto central da distribuição ponderada. Rendas muito altas puxam a média para cima. Os R$ 3.777 de junho–agosto são uma média real de outra janela: não entram na comparação com esta mediana.', 'A média real aumentou 3,7% frente a junho–agosto de 2025. Como essa variação já desconta preços, ela indica ganho médio de poder de compra. Não se deve subtrair a inflação outra vez.'],
      sources: ['emprego', 'rendaCalculo']
    },
    alternative: {
      title: 'E se o ganho estiver concentrado em poucos grupos?',
      paragraphs: ['Isso é possível, mas a distância entre média e mediana num único trimestre não prova concentração do ganho ao longo do tempo. Para distinguir melhora disseminada de melhora concentrada, precisamos comparar medianas e percentis em períodos equivalentes, com a mesma correção de preços. Esta distribuição é um retrato, não uma série de crescimento.', 'Rendimento individual também difere de renda familiar por pessoa: dependentes, outros trabalhadores do domicílio e transferências mudam as condições de vida.'],
      sources: ['rendaCalculo']
    },
    conclusion: 'Há ganho real na média recente, enquanto o retrato de abril–junho mostra a mediana abaixo da média e cerca de 73% dos trabalhadores com renda positiva abaixo do valor médio. Esses dados não demonstram quanto a renda de cada faixa cresceu.',
    nextEvidence: 'Para avaliar distribuição dos ganhos: evolução da mediana e dos percentis, renda domiciliar por pessoa e recortes regionais.',
    sources: ['emprego', 'rendaCalculo'],
    detailLabel: 'Explorar distribuição da renda, preços, exemplo interativo e método'
  },
  'economia-trabalho': {
    question: 'O desemprego caiu porque apareceu trabalho ou porque as pessoas desistiram?',
    purpose: 'Confrontar a taxa de desemprego com ocupação, subutilização e desalento.',
    tables: [{
      caption: 'O mesmo trimestre móvel em dois anos',
      headers: ['Indicador · Brasil', 'Jun–ago/2025', 'Jun–ago/2026'],
      rows: [['Desocupação · força de trabalho', '5,6%', '5,3%'], ['Subutilização · força ampliada', '14,1%', '13,1%'], ['Nível de ocupação · população 14+', '58,8%', '58,9%']],
      note: 'Cada linha preserva sua definição e base populacional nos dois anos. As linhas usam denominadores diferentes e não devem ser somadas. O nível de ocupação ficou estável na comparação anual segundo a divulgação do IBGE.',
      sources: ['empregoDetalhes', 'emprego']
    }],
    explanation: {
      title: 'O denominador importa tanto quanto quem está sem trabalho',
      paragraphs: ['A desocupação divide quem procura e está disponível pela força de trabalho, não por todos os brasileiros. Se alguém sai da busca e da força de trabalho, a taxa pode cair sem contratação. Essa pessoa continua medida em outras categorias da PNAD.', 'Na comparação anual observada, a população ocupada aumentou 1,0%, o contingente desocupado caiu 4,9% e o desalento caiu 11,9%. Há evidência de melhora além da taxa isolada.'],
      sources: ['empregoDetalhes', 'empregoConceitos']
    },
    alternative: {
      title: 'E se as novas ocupações forem insuficientes ou precárias?',
      paragraphs: ['Ocupação não exige carteira assinada nem jornada integral: uma atividade econômica de uma hora na semana pode contar, sob os critérios da pesquisa. A taxa de desemprego não informa, sozinha, se a pessoa conseguiu renda adequada ou trabalho compatível com sua formação.', 'Ainda havia 4,3 milhões de subocupados por horas e informalidade de 37,5%. Subutilização amplia o diagnóstico, mas não mede toda precariedade nem todo desencontro entre qualificação e função.'],
      sources: ['metodologiaTrabalho', 'metodologiaSubutilizacao', 'empregoDetalhes']
    },
    conclusion: 'A queda recente não se resume a uma taxa menor: ocupação aumentou e desalento e subutilização recuaram. Isso sustenta uma melhora agregada, sem provar que todas as ocupações oferecem jornada, renda e proteção suficientes.',
    nextEvidence: 'Para avaliar qualidade: horas, rendimentos por grupo, formalização, participação e duração da busca.',
    sources: ['empregoDetalhes'],
    detailLabel: 'Explorar desalento, bicos, benefícios, carteira assinada e exemplo interativo'
  },
  'economia-producao': {
    question: 'O crescimento de hoje está preparando a produção de amanhã?',
    purpose: 'Separar expansão recente da produção e trajetória do investimento.',
    tables: [{
      caption: 'Variação real frente ao trimestre imediatamente anterior',
      headers: ['Indicador · ajuste sazonal', '1º tri/2026', '2º tri/2026'],
      rows: [['PIB', '+1,1%', '+0,5%'], ['Investimento em capital fixo', '+3,4%', '+1,2%'], ['Consumo das famílias', '+0,8%', '−0,4%']],
      note: 'Variações reais com ajuste sazonal. Cada coluna compara com o trimestre anterior; não são contribuições ao PIB nem taxas para somar.',
      sources: ['pibAtual']
    }, {
      caption: 'Outra janela: quatro trimestres até junho de 2026',
      headers: ['Indicador', 'Contra os quatro trimestres anteriores'],
      rows: [['PIB', '+1,9%'], ['Investimento em capital fixo', '−0,2%']],
      note: 'A mesma janela de quatro trimestres para os dois indicadores. Este resultado não é o ano fechado de 2026.',
      sources: ['pibAtual']
    }],
    explanation: {
      title: 'Recuperar investimento num trimestre não apaga a trajetória anterior',
      paragraphs: ['O PIB mede produção realizada. A formação bruta de capital fixo mede aquisição e produção de ativos como máquinas e construções, que podem ampliar a capacidade de produzir. Consumo e investimento têm funções diferentes na economia.', 'O investimento cresceu na comparação trimestral, mas ainda recuou na janela de quatro trimestres. Não há contradição: uma recuperação recente pode coexistir com perda acumulada.'],
      sources: ['pib', 'pibAtual']
    },
    alternative: {
      title: 'É o começo de uma retomada ou um movimento temporário?',
      paragraphs: ['As duas hipóteses exigem acompanhamento. Um trimestre positivo pode iniciar uma recuperação, mas também refletir concentração de obras ou compras de equipamentos. Juros, demanda, crédito, expectativas e composição dos projetos podem influenciar o investimento.', 'Também não basta o setor com maior taxa crescer mais para explicar a maior parte do PIB: os setores têm pesos diferentes. Taxa de crescimento, contribuição ao PIB e produtividade são medidas distintas.'],
      sources: ['pibAtual', 'selic']
    },
    conclusion: 'A produção e o investimento cresceram no segundo trimestre, em ritmo menor que no primeiro. A recuperação recente do investimento ainda não se traduziu em expansão no acumulado de quatro trimestres. Os dados não confirmam uma aceleração duradoura nem permitem prever uma crise.',
    nextEvidence: 'Para avaliar continuidade: próximos trimestres, composição e taxa de investimento, produtividade e contribuição dos setores.',
    sources: ['pibAtual'],
    detailLabel: 'Explorar PIB, taxa de investimento e diferenças entre setores'
  },
  'economia-contas': {
    question: 'Por que a dívida aumentou: gastos, juros ou crescimento?',
    purpose: 'Separar resultado fiscal e fatores que alteram o estoque da dívida em relação ao PIB.',
    tables: [{
      caption: 'A conta fiscal na mesma janela e abrangência',
      headers: ['Setor público consolidado · 12 meses até ago/2026', '% do PIB'],
      rows: [['Déficit primário', '0,62'], ['Juros nominais', '8,86'], ['Déficit nominal', '9,48']],
      note: 'O déficit nominal inclui primário e juros: 0,62 + 8,86 = 9,48% do PIB. É um fluxo; não é a dívida bruta.',
      sources: ['fiscalAtual']
    }, {
      caption: 'O que alterou a dívida bruta / PIB em 2026?',
      headers: ['DBGG · janeiro a agosto', 'Efeito em pontos percentuais do PIB'],
      rows: [['Incorporação de juros', '+6,5 p.p.'], ['Emissões líquidas de dívida', '+1,5 p.p.'], ['Crescimento do PIB nominal', '−3,6 p.p.'], ['Valorização cambial', '−0,2 p.p.'], ['Variação total', '+4,2 p.p.']],
      note: 'Decomposição divulgada pelo BCB, com valores arredondados. Emissões líquidas não são sinônimo de déficit primário. A DBGG tem abrangência diferente do setor público consolidado; não somamos esta tabela à anterior.',
      sources: ['fiscalAtual']
    }],
    explanation: {
      title: 'O déficit é uma conta de receitas e despesas; dívida / PIB é uma razão',
      paragraphs: ['Juros e emissões elevaram a relação dívida/PIB no ano, enquanto o crescimento do PIB nominal e o câmbio reduziram parte do movimento. Um denominador maior pode diminuir a razão mesmo sem reduzir o estoque de dívida.', 'O déficit primário descreve receitas e gastos sem juros. Mesmo com superávit primário, juros e outros ajustes podem fazer a dívida crescer. Financiamento e renovação de títulos também não equivalem a gasto com um serviço público específico.'],
      sources: ['fiscalAtual', 'fiscal']
    },
    alternative: {
      title: 'Se os juros pesam tanto, os gastos primários deixam de importar?',
      paragraphs: ['Não. A receita e a composição das despesas influenciam o resultado primário e as necessidades de financiamento. A decomposição identifica fatores contábeis; não estima o que aconteceria com os juros se o governo adotasse outra política.', 'Também não permite atribuir a alta da dívida a um programa social. Para isso, seria necessário examinar despesas executadas, receitas, alternativas de financiamento e efeitos da política. Cortes e aumentos de impostos têm custos diferentes conforme sua composição.'],
      sources: ['fiscal', 'cenarios']
    },
    conclusion: 'A dívida bruta / PIB aumentou em 2026. A decomposição mostra pressão de juros e emissões, parcialmente compensada por PIB nominal e câmbio. Os números permitem identificar esses componentes, mas não calcular o custo causal de um programa nem anunciar uma crise inevitável.',
    nextEvidence: 'Para avaliar sustentabilidade: trajetória primária, execução das despesas, custo e prazo da dívida e cenários de crescimento e juros.',
    sources: ['fiscalAtual', 'cenarios'],
    detailLabel: 'Explorar a dívida desde 2010, resultado do Tesouro e conceitos fiscais'
  },
  'economia-futuro': {
    question: 'A melhora na alimentação pode ser preservada sem adiar a conta?',
    purpose: 'Reconhecer o avanço social e examinar os limites da atribuição de custo e sustentabilidade.',
    tables: [{
      caption: 'Segurança alimentar com a mesma definição',
      headers: ['Insegurança alimentar moderada ou grave · SOFI', 'Parcela da população'],
      rows: [['Triênio 2020–2022', '22,1%'], ['Triênio 2023–2025', '9,6%']],
      note: 'Estimativas trienais, com a mesma medida. O primeiro período inclui a pandemia. A comparação não isola o efeito de um governo ou programa. Este indicador é diferente da subalimentação usada no Mapa da Fome.',
      sources: ['fomeAtual']
    }],
    explanation: {
      title: 'Resultado social, mecanismo e financiamento são perguntas diferentes',
      paragraphs: ['A redução indica melhora no acesso regular à alimentação na medida apresentada. Renda do trabalho, preços e transferências podem contribuir, mas esses totais não dizem quanto veio de cada fator.', 'Sair do Mapa da Fome significa ficar abaixo do limiar de subalimentação da FAO, não eliminar toda dificuldade alimentar. Preservar a melhora depende de condições de renda e preços e de políticas com financiamento e resultados acompanhados.'],
      sources: ['fomeAtual', 'fomeMapa']
    },
    alternative: {
      title: 'A melhora foi comprada com aumento da dívida?',
      paragraphs: ['Observar melhora alimentar e dívida maior em períodos próximos não demonstra que uma causou a outra. Há mudanças no trabalho, nos preços, nas receitas, nos juros e em outras despesas. Precisamos medir a execução e o efeito de cada política para estimar esse custo.', 'O contraste com o período da pandemia também exige cuidado: parte da diferença pode refletir mudanças de contexto. Isso não apaga o avanço observado, mas limita sua atribuição.'],
      sources: ['fomeAtual', 'fiscalAtual']
    },
    conclusion: 'A insegurança alimentar diminuiu na comparação trienal. Essa evidência permite reconhecer melhora, mas não determinar seu custo fiscal ou garantir que ela continuará. Avaliar continuidade exige acompanhar renda, alimentação, execução das políticas e financiamento.',
    nextEvidence: 'Para avaliar permanência: novas pesquisas alimentares, renda por faixa, cobertura e avaliação dos programas e trajetória fiscal.',
    sources: ['fomeAtual', 'fomeMapa'],
    detailLabel: 'Explorar Mapa da Fome, crédito das famílias e caminhos de financiamento'
  }
};
