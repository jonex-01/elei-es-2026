import { INCOME_ESTIMATES as income } from './income-estimates.js';

export const INCOME_ANALYSIS = {
  title: 'R$ 3.777 não é o que recebe o trabalhador do meio',
  paragraphs: [
    'A média soma todos os rendimentos e divide pelo número de trabalhadores. Rendimentos muito altos puxam esse valor para cima. A mediana procura o meio da distribuição: é mais adequada para perguntar quanto recebe quem está na posição central, mas também não descreve todas as famílias.',
    'Para comparar as duas medidas corretamente, usamos o mesmo recorte: pessoas ocupadas de 14 anos ou mais com rendimento habitual positivo em todos os trabalhos, no segundo trimestre de 2026. Nesse grupo, a média nominal foi R$ 3.738 e a mediana estimada pelo projeto foi R$ 2.300. Cerca de 73,0% ficaram abaixo da média. A média recente de R$ 3.777 continua válida para junho–agosto; ela responde a outra janela da pesquisa.',
    'No mesmo cálculo, aproximadamente 31,5% tinham rendimento habitual até R$ 1.621, o salário mínimo vigente. Isso não permite concluir que todos tinham uma jornada integral ou que houve descumprimento do piso: o grupo inclui diferentes jornadas e posições na ocupação.'
  ],
  sources: ['rendaCalculo', 'rendaTrimestre'],
  table: {
    title: 'A renda ao longo da distribuição',
    headers: ['Ponto da distribuição', 'Rendimento mensal'],
    rows: [['Média · não é percentil', `R$ ${Math.round(income.mean).toLocaleString('pt-BR')}`], ...Object.entries(income.percentiles).map(([percentile, value]) => [`Percentil ${percentile}${percentile === '50' ? ' · mediana' : ''}`, `R$ ${value.toLocaleString('pt-BR')}`])],
    note: 'Abr–jun/2026, valores nominais. Ordenamos os rendimentos do menor para o maior: o P10 marca o ponto alcançado pelos primeiros 10% da distribuição ponderada, o P50 é a mediana e o P90 marca os 90%. Empates podem ampliar a parcela até um valor. P90 não é renda máxima. Estimativas do projeto; sem pessoas sem rendimento ou benefícios sociais.',
    sources: ['rendaCalculo', 'rendaCodigo']
  },
  demo: 'income',
  reading: [
    ['Como fizemos o cálculo?', 'Lemos 231.474 observações de ocupados com renda habitual positiva no arquivo público PNADC_022026.zip. Usamos VD4019 (renda de todos os trabalhos), VD4002=1 (ocupação) e V1028 (peso calibrado). A média resultante foi R$ 3.738,16, reproduzindo os R$ 3.738 arredondados do SIDRA 6472. A mediana ponderada é o menor valor cuja soma acumulada dos pesos chega a 50%. O resultado e a identificação do arquivo estão disponíveis para download. Não estimamos intervalo de confiança.', ['rendaCalculo', 'rendaTrimestre']],
    ['O que a média e a mediana ainda não contam?', 'Os rendimentos são do trabalho, antes de interpretar despesas familiares, e não incluem transferências nessa variável. Uma pessoa pode sustentar dependentes; outra pode dividir despesas com alguém que também trabalha. Para estudar padrão de vida e pobreza, precisamos da renda domiciliar por pessoa, da distribuição, de preços e de acesso a serviços. O crescimento da média não prova que todos ganharam mais.'],
    ['Por que não usamos uma mediana de junho–agosto?', 'Os microdados trimestrais verificados mais recentes cobrem abril–junho. Não inferimos a mediana de junho–agosto a partir da média e não transportamos uma razão antiga entre média e mediana. A comparação mostrada mantém período, população e conceito iguais. Não descontamos inflação de uma renda que já foi apresentada como real.']
  ]
};

export const WORK_ANALYSIS = {
  title: '5,3% de desemprego não significa que 94,7% dos brasileiros têm trabalho',
  paragraphs: [
    'A taxa divide quem está desocupado pela força de trabalho, formada por ocupados e desocupados. Em regra, a pessoa desocupada não tinha ocupação, tomou providências para conseguir trabalho nos 30 dias anteriores e estava disponível para começar na semana de referência. Em junho–agosto, eram aproximadamente 5,8 milhões de desocupados entre 109,3 milhões na força de trabalho. Quem está fora dela não entra nessa divisão. Há ainda a exceção metodológica de quem já conseguiu trabalho para começar em breve, sob os critérios da pesquisa.',
    'Fora da força de trabalho havia 66,4 milhões de pessoas. Esse grupo inclui situações diferentes, como estudo, aposentadoria, cuidados, limitações de saúde e falta de busca por trabalho. Dentro dele estavam 2,4 milhões de desalentados. Não é correto tratar os 66,4 milhões como desempregados ocultos, nem ignorar quem gostaria de trabalhar e perdeu a perspectiva de conseguir uma vaga.'
  ],
  sources: ['empregoDetalhes', 'metodologiaTrabalho'],
  population: [
    ['Ocupados', '103,5 milhões', 'Inclui empregados, conta própria e outras posições; não exige carteira assinada.'],
    ['Desocupados', '5,8 milhões', 'Sem ocupação, disponíveis e com busca, ressalvadas as exceções metodológicas.'],
    ['Fora da força de trabalho', '66,4 milhões', 'Grupo amplo. Os desalentados são um subconjunto, não uma categoria a somar ao total.']
  ],
  populationNote: 'Jun–ago/2026 · pessoas de 14 anos ou mais. Valores arredondados. A força de trabalho soma os dois primeiros grupos: 103,5 + 5,8 ≈ 109,3 milhões. Os 4,3 milhões subocupados por horas estão dentro dos ocupados.',
  demo: 'work',
  reading: [
    ['Quem desistiu some da pesquisa?', 'A pessoa pode sair da conta da desocupação, mas continua sendo medida pela PNAD em outras categorias. Desalento exige querer trabalhar, estar disponível e não buscar por motivos como falta de trabalho na localidade, experiência ou qualificação, ou percepção de não conseguir pela idade. Nem toda pessoa que não procurou é desalentada. A força de trabalho potencial também inclui outras situações de desejo, busca e disponibilidade.', ['metodologiaSubutilizacao']],
    ['Uma hora de bico já pode contar como ocupação?', 'Sim: ao menos uma hora completa de trabalho remunerado na semana de referência pode caracterizar ocupação. A definição também abrange ajuda sem remuneração direta em atividade econômica familiar e afastamentos temporários conforme os critérios. Isso identifica atividade econômica; não certifica renda suficiente, emprego formal ou estabilidade. Por isso, analisamos horas, rendimentos e informalidade em conjunto.', ['metodologiaTrabalho']],
    ['Subutilização mede emprego abaixo da qualificação?', 'A taxa de 13,1% junta desocupação, subocupação por insuficiência de horas e força de trabalho potencial. Ela é mais ampla que desemprego, mas não mede todas as formas de precariedade ou o desencontro entre formação e função. Quem trabalha 40 horas com baixa remuneração pode estar ocupado sem aparecer como subocupado por horas.', ['metodologiaSubutilizacao']],
    ['A queda recente veio apenas de desistência?', 'Os indicadores não sustentam essa conclusão: em um ano, a ocupação cresceu 1,0%, o contingente desocupado caiu 4,9%, o desalento caiu 11,9% e a subutilização passou de 14,1% para 13,1%. Isso indica melhora em várias dimensões, embora não elimine informalidade e insuficiência de horas. Não permite atribuir os resultados a uma medida isolada.', ['empregoDetalhes']],
    ['Carteira assinada: pessoas ocupadas e saldo de vagas são a mesma coisa?', 'A PNAD estimou 39,5 milhões de empregados do setor privado com carteira, excluindo domésticos. É um estoque de pessoas estimado pela pesquisa. O saldo de admissões menos desligamentos do Novo Caged conta vínculos formais e suas movimentações. Uma pessoa pode ter mais de um vínculo; por isso não somamos essas séries nem usamos o saldo como se fosse o total de pessoas empregadas.', ['empregoDetalhes', 'cagedConceitos']],
    ['Receber benefício social muda a classificação?', 'Receber um benefício não é exercer trabalho e não transforma automaticamente alguém em ocupado. Para a situação de trabalho, importam ocupação, busca e disponibilidade. Uma pessoa beneficiária pode estar ocupada, desocupada ou fora da força de trabalho. O rendimento do benefício e o rendimento do trabalho também são conceitos distintos.', ['empregoConceitos']],
    ['Como ler uma queda do desemprego com cuidado?', 'Compare o mesmo período do ano e observe ocupação, participação, desalento, horas, formalização e renda. A participação era 62,2%, contra 62,3% um ano antes: o movimento pequeno dessa taxa não demonstra que toda a melhora seja resultado de desistência. Também não basta haver mais ocupação para afirmar que todas as vagas ficaram melhores.', ['emprego']],
  ]
};
