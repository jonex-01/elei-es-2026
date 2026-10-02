// Fontes consultadas em 02/10/2026. Conteúdo publicado por generate_macro.mjs.
export const SOURCES = {
  ipca: ['IBGE / informativo da Fazenda · ago/2026', 'https://www.gov.br/fazenda/pt-br/central-de-conteudo/publicacoes/conjuntura-economica/inflacao/defeso-eleitoral-2026/informativo-ipca-ago2026.html'],
  emprego: ['IBGE / informativo da Fazenda · jun–ago/2026', 'https://www.gov.br/fazenda/pt-br/central-de-conteudo/publicacoes/conjuntura-economica/emprego-e-renda/defeso-eleitoral-2026/informativo-pnad-ago2026.html'],
  selic: ['BCB · decisão de 16/09/2026', 'https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?numero=45963&tipo=Comunicado'],
  divida: ['BCB · SGS 13762 · ago/2026', 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.13762/dados?formato=json&dataInicial=01/12/2024&dataFinal=01/08/2026'],
  cesta: ['Conab / DIEESE · ago/2026 · p. 3', 'https://www.dieese.org.br/analisecestabasica/2026/202608cestabasica.pdf'],
  pib: ['IBGE · o que é PIB', 'https://www.ibge.gov.br/explica/pib.php'],
  fiscal: ['Tesouro Nacional · resultado primário e dívida', 'https://www.tesourotransparente.gov.br/historias/entendendo-os-graficos-resultado-primario-e-estoque-da-divida-publica-federal'],
  cenarios: ['Tesouro Nacional · projeções fiscais e cenários', 'https://www.gov.br/tesouronacional/pt-br/noticias/tesouro-publica-6a-edicao-do-relatorio-de-projecoes-fiscais-com-cenarios-e-trajetorias-para-avaliar-o-panorama-fiscal'],
  fome: ['FAO · Panorama regional 2025, divulgado em 2026', 'https://www.fao.org/americas/news/news-detail/erradicacion-del-hambre/en'],
  orcamento: ['MPO · LOA sancionada · jan/2026', 'https://www.gov.br/planejamento/pt-br/assuntos/noticias/2026/janeiro/presidente-sanciona-orcamento-de-2026-com-foco-em-desenvolvimento-social-e-equilibrio-fiscal'],
  cirurgias: ['Ministério da Saúde · balanço do 1º semestre/2026', 'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/setembro/goias-realiza-242-mil-cirurgias-eletivas-no-primeiro-semestre-e-cresce-12-em-relacao-a-2025'],
  fila: ['Ministério da Saúde · gestão da fila de espera', 'https://wiki.saude.gov.br/regulacao/index.php/Orienta%C3%A7%C3%B5es_para_Gest%C3%A3o_da_Fila_de_Espera'],
  gestao: ['Ministério da Saúde · eficiência e equidade · set/2026', 'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/setembro/ministerio-da-saude-trabalha-o-fortalecimento-das-capacidades-nacionais-para-ampliar-eficiencia-e-equidade-no-sus/'],
  ideb: ['Inep · resultados do Ideb 2025', 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/ideb/ideb-avanca-em-todas-as-etapas-da-educacao-basica'],
  pisa: ['OCDE · PISA 2025 · nota sobre o Brasil', 'https://www.oecd.org/en/publications/pisa-2025-results-volume-i-country-notes_2d4ff9ea-en/brazil_d65ba095-en.html'],
  inaf: ['Ação Educativa / Conhecimento Social · Inaf 2024 · p. 19', 'https://acaoeducativa.org.br/wp-content/uploads/2025/11/Relatorio-INAF-Brasil-2024-Alfabetismo-do-analogico-ao-digital_compressed.pdf'],
  violencia: ['FBSP · Anuário 2026 · ano-base 2025', 'https://fontesegura.forumseguranca.org.br/mortes-violentas-intencionais-no-brasil-em-2025-entre-avancos-historicos-e-desafios-persistentes/'],
  policia: ['FBSP · atividade policial · Anuário 2026', 'https://fontesegura.forumseguranca.org.br/policia-para-quem-precisa-de-policia-o-que-os-numeros-do-anuario-brasileiro-de-seguranca-publica-2026-apontam-sobre-a-atividade-policial/']
};

// Cada indicador separa definição, efeito cotidiano e limite da interpretação.
export const MACRO = [
  {
    id: 'scene-panorama', tag: 'Economia e alimentação', title: 'O bolso de hoje. As contas de amanhã.', image: 'congresso.jpg',
    intro: 'Preços, emprego e contas públicas se conectam. Entenda o que melhorou, o que ainda pesa no orçamento e como sustentar os avanços.',
    stats: [
      ['IPCA em 12 meses', '4,22', '%', 'ago/2026 · Brasil', 'ipca', 'É a variação média dos preços de uma cesta de consumo das famílias em 12 meses.', 'Com renda sem reajuste, preços mais altos reduzem o que você consegue comprar.', 'O índice de preços recuou 0,32% em agosto; isso não apaga a alta acumulada. Sua cesta pessoal pode variar mais ou menos que a média.'],
      ['Meta Selic', '13,75', '% a.a.', 'vigente desde 17/09/2026', 'selic', 'É a taxa básica de juros definida pelo Banco Central para orientar a política monetária.', 'Juros altos tendem a encarecer crédito e desestimular consumo e investimento, ajudando a conter a inflação.', 'Não é a taxa cobrada no cartão. Também influencia parte do custo da dívida pública, com efeito que depende dos títulos e seus prazos.'],
      ['Desocupação', '5,3', '%', 'jun–ago/2026 · Brasil', 'emprego', 'É a parcela de quem está na força de trabalho e procura emprego, mas não encontra.', 'Mais emprego pode ampliar a renda das famílias e a arrecadação de impostos.', 'Não mede qualidade do trabalho, informalidade ou todos que desistiram de procurar emprego. É um trimestre móvel, não o ano inteiro.'],
      ['Dívida bruta / PIB', '82,9', '%', 'ago/2026 · governo geral', 'divida', 'Compara o estoque da dívida federal, estadual e municipal coberto pela DBGG com a produção anual da economia.', 'Mais dívida e juros podem aumentar a pressão sobre o orçamento e dificultar o financiamento de serviços.', 'Não significa que 82,9% dos impostos vão para a dívida. A razão também muda com o PIB. Valor da série: 82,86%, arredondado.'],
      ['Cesta básica em São Paulo', '900,59', 'R$', 'ago/2026 · capital paulista', 'cesta', 'É o custo de uma lista padronizada de alimentos básicos para um adulto.', 'Ajuda a mostrar quanto da renda é necessário para alimentação.', 'Não é o custo de vida de uma família nem a média do Brasil. Não inclui aluguel, transporte e todas as necessidades alimentares.'],
      ['Prevalência de subalimentação', '< 2,5', '%', '2022–2024 · média trienal', 'fome', 'É a estimativa da população sem acesso habitual a energia alimentar suficiente. Esse patamar caracteriza a saída do Mapa da Fome.', 'Mostra um avanço no acesso à alimentação, que deve ser preservado.', 'Não significa fome zero. É diferente de insegurança alimentar e não revela, sozinho, a qualidade da dieta ou o custo fiscal da melhora.']
    ],
    chart: { title: 'A dívida em relação ao tamanho da economia', unit: '% do PIB', max: 100, source: 'divida', note: 'Dezembro de 2024 e 2025; agosto de 2026. São estoques em datas específicas, não médias anuais. A série pode ser revisada pelo BCB.', rows: [['dez/2024', 76.27], ['dez/2025', 78.64], ['ago/2026', 82.86]] },
    connections: [
      ['PIB: o tamanho da produção, não o dinheiro do governo', 'PIB é o valor dos bens e serviços finais produzidos no país em um período. Não é a arrecadação de impostos nem a soma do dinheiro que cada brasileiro possui. A dívida/PIB compara uma obrigação acumulada com a capacidade econômica de gerar renda.', ['pib']],
      ['Menos fome: qual foi o custo?', 'Renda do trabalho, transferências sociais e preços dos alimentos podem melhorar o acesso à comida. Programas custam recursos, mas a saída do Mapa da Fome não demonstra que o aumento da dívida foi causado por eles. Para atribuir esse custo, seria preciso examinar despesas executadas, receitas, juros e uma avaliação do efeito de cada política.', ['fome', 'fiscal']],
      ['De onde vem o endividamento?', 'Receitas primárias incluem impostos e outras receitas não financeiras; despesas primárias financiam pessoal, benefícios, serviços e investimentos, sem os juros. Quando essas despesas superam essas receitas, há déficit primário. Ao incluir juros, chega-se ao resultado nominal. Juros, necessidades de financiamento e outros ajustes afetam a dívida; crescer menos também pode elevar a razão dívida/PIB.', ['fiscal', 'cenarios']],
      ['Um exemplo para entender a conta', 'Exemplo hipotético, não um dado do Brasil: arrecadar R$ 100 e gastar R$ 110 antes dos juros gera déficit primário de R$ 10. Com mais R$ 15 de juros, o déficit nominal seria R$ 25. Mesmo arrecadando R$ 100 e gastando R$ 95 antes dos juros, os mesmos juros de R$ 15 deixariam déficit nominal de R$ 10. Por isso, um superávit primário pode coexistir com aumento da dívida.', ['fiscal']],
      ['Se a trajetória não melhorar, o que pode acontecer?', 'Uma dívida crescendo sem perspectiva de estabilização pode elevar o prêmio de risco e o custo de financiamento, limitar investimentos e aumentar a pressão por impostos ou cortes. São riscos, não uma previsão inevitável de crise. Juros, crescimento, credibilidade e composição da dívida alteram o resultado.', ['cenarios']],
      ['Como preservar avanços sem adiar a conta?', 'Ajustar contas pode envolver reduzir desperdícios, revisar benefícios tributários, melhorar a arrecadação e priorizar despesas eficazes. Cortes em saúde, alimentação ou educação também podem gerar custos futuros. O objetivo é uma trajetória sustentável com serviços que entreguem resultados, e não reduzir toda despesa indiscriminadamente.', ['fiscal', 'cenarios']]
    ],
    flow: ['Renda e preços → acesso à alimentação', 'Políticas e serviços → despesas públicas', 'Receitas, despesas e juros → financiamento', 'Dívida, juros e crescimento → espaço futuro'],
    flowNote: 'Esquema de mecanismos econômicos. As setas não calculam correlação estatística nem atribuem a variação da dívida a um programa específico.'
  },
  {
    id: 'scene-saude', tag: 'Saúde pública', title: 'Atender mais. Fazer a espera diminuir.', image: 'bg_saude_clara.jpg?v=2',
    intro: 'Dinheiro autorizado e procedimentos realizados medem partes diferentes do SUS. O resultado para o paciente depende também de acesso, profissionais e gestão.',
    stats: [
      ['Orçamento federal da Saúde', '271,3', 'R$ bi', 'LOA 2026 · autorização inicial', 'orcamento', 'É o valor previsto para a Saúde no orçamento federal sancionado para 2026.', 'Autoriza o financiamento de serviços, medicamentos e ações do SUS.', 'Autorização não é gasto pago nem atendimento realizado. Estados e municípios também financiam o SUS; este número não soma as três esferas.'],
      ['Cirurgias eletivas realizadas', '7,55', 'milhões', '1º semestre/2026 · SUS', 'cirurgias', 'São procedimentos cirúrgicos programados registrados no período, distintos de atendimentos de emergência.', 'Mostram a capacidade de realizar tratamentos que podem reduzir dor, limitações e afastamentos.', 'O total informado é 7.552.260 procedimentos. Procedimentos não são necessariamente pessoas únicas, e produção maior não comprova fila menor.'],
      ['Variação das cirurgias eletivas', '+8', '%', '1º semestre/2026 contra 2025', 'cirurgias', 'Compara o volume realizado com o mesmo semestre do ano anterior.', 'Mostra aumento da produção, sem misturar um semestre com um ano completo.', 'Para avaliar espera, também precisamos das novas solicitações, do estoque da fila e do tempo até o atendimento.']
    ],
    connections: [
      ['Por que mais cirurgias podem não acabar com a fila?', 'A fila aumenta quando entram mais solicitações do que atendimentos concluídos. Novos diagnósticos, demanda reprimida e cadastros desatualizados também mudam o total. É preciso acompanhar o tempo de espera por especialidade e região, além da produção.', ['fila']],
      ['O que faz um orçamento virar atendimento?', 'Recursos precisam se transformar em equipes, exames, equipamentos, medicamentos e encaminhamentos. Um leito sem equipe não tem a mesma capacidade de um leito em funcionamento. A distribuição territorial e a atenção básica influenciam o acesso.', ['gestao', 'fila']],
      ['Como a saúde se conecta às contas públicas?', 'Juros e despesas obrigatórias disputam espaço no orçamento. Ao mesmo tempo, prevenção e atendimento oportuno podem evitar agravamentos e gastos posteriores. Avaliar uma política exige custo e resultado: aumentar ou cortar recursos não garante, sozinho, mais eficiência.', ['gestao', 'fiscal']]
    ],
    flow: ['Novas solicitações entram', 'Atendimentos concluídos saem', 'O saldo altera o tamanho da fila'],
    flowNote: 'Para comparar filas, verifique o procedimento, a região, a data e a forma de contar pessoas e solicitações. O volume de cirurgias não substitui uma medida de tempo de espera.'
  },
  {
    id: 'scene-seguranca', tag: 'Segurança pública', title: 'Menos mortes. Riscos que persistem.', image: 'bg_seguranca.jpg',
    intro: 'A média nacional melhorou, mas formas de violência podem seguir caminhos diferentes. Compare categorias e períodos antes de atribuir o resultado a uma política.',
    stats: [
      ['Mortes violentas intencionais', '40.775', 'vítimas', '2025 · Brasil', 'violencia', 'A categoria MVI reúne homicídios dolosos, feminicídios, latrocínios, lesões seguidas de morte e mortes por intervenção policial.', 'Mede a violência letal intencional registrada no país.', 'É uma categoria mais ampla que homicídio doloso. Não misture esta série com a mortalidade do SIM/Atlas da Violência sem harmonizar definições.'],
      ['Taxa de mortes violentas', '19,1', 'por 100 mil', '2025 · Brasil', 'violencia', 'Relaciona as vítimas à população: em média, 19,1 para cada 100 mil habitantes.', 'Permite comparar localidades com tamanhos diferentes melhor que o total absoluto.', 'A média esconde diferenças entre territórios e grupos. Não representa a probabilidade individual de qualquer pessoa ser vítima.'],
      ['Variação das MVI', '−8,2', '%', '2025 em relação a 2024', 'violencia', 'É a redução do total de mortes violentas intencionais entre os dois anos.', 'Indica melhora nacional no indicador de violência letal.', 'Não explica por que houve queda nem demonstra que todos os crimes ou estados melhoraram.'],
      ['Feminicídios registrados', '1.571', 'vítimas', '2025 · alta de 4% sobre 2024', 'violencia', 'São mortes de mulheres classificadas como feminicídio, por razões da condição do sexo feminino.', 'Revelam a necessidade de proteção e resposta à violência contra mulheres.', 'São parte das mortes violentas; não devem ser somados novamente ao total de MVI. Registros e classificação também afetam comparações.']
    ],
    connections: [
      ['Como mortes caem e feminicídios sobem ao mesmo tempo?', 'Um total agrega diferentes tipos de violência. A melhora em categorias mais numerosas pode superar a piora em outras. Por isso, a queda geral não dispensa políticas específicas de proteção às mulheres e monitoramento da letalidade policial.', ['violencia', 'policia']],
      ['Segurança, saúde e educação se cruzam', 'A violência demanda atendimento e afeta circulação e rotinas escolares. Prevenção, investigação e proteção precisam funcionar em conjunto. A comparação desses números nacionais não permite calcular quanto uma mudança na educação causou de redução do crime.', ['violencia']],
      ['Quem responde pelo resultado?', 'A segurança envolve atuação estadual, municipal e federal. Para avaliar uma intervenção, precisamos comparar territórios, períodos, registros e contexto. Uma mudança nacional não identifica, sozinha, o efeito de um presidente ou de uma medida isolada.', ['policia']]
    ],
    flow: ['Queda no total de mortes', 'Análise por território e tipo de violência', 'Proteção direcionada a quem segue em risco'],
    flowNote: 'Mortes violentas, roubos e presença de facções medem fenômenos diferentes. Uma melhora na violência letal não descreve toda a experiência de segurança da população.'
  },
  {
    id: 'scene-educacao', tag: 'Educação', title: 'Estar na escola. Conseguir aprender.', image: 'bg_educacao.jpg',
    intro: 'Aprovação, aprendizagem e uso da leitura na vida adulta são medidas diferentes. Entenda o que cada uma revela e por que seus efeitos vão além da sala de aula.',
    stats: [
      ['Ideb do ensino médio', '4,5', 'de 10', '2025 · redes públicas e privadas', 'ideb', 'O Índice de Desenvolvimento da Educação Básica combina desempenho em provas do Saeb e aprovação escolar.', 'Acompanha a aprendizagem junto com o avanço dos alunos pelas séries.', 'Não é uma nota individual. Aumento da aprovação também pode elevar o índice; é preciso examinar a aprendizagem separadamente.'],
      ['PISA: abaixo do básico em matemática', '72', '%', 'PISA 2025 · estudantes de 15 anos', 'pisa', 'O Programa Internacional de Avaliação de Estudantes testa como alunos usam conhecimentos em situações práticas. 28% atingiram ao menos o nível 2; portanto, 72% ficaram abaixo.', 'O nível 2 envolve reconhecer uma situação matemática simples, como comparar trajetos ou converter preços.', 'Não é 72% de todos os brasileiros e não significa incapacidade em qualquer cálculo. A amostra representa estudantes elegíveis de 15 anos.'],
      ['Analfabetismo funcional', '29', '%', 'Inaf 2024 · população de 15–64 anos', 'inaf', 'É a parcela classificada nos níveis analfabeto ou rudimentar em atividades de leitura e matemática do cotidiano.', 'Dificuldades de interpretação podem afetar contratos, instruções, contas e acesso a direitos.', 'É diferente de não saber ler e escrever. Usa outra população e outro instrumento que o PISA, então não se deve comparar diretamente os percentuais.']
    ],
    chart: { title: 'Ideb: o avanço depende da etapa', unit: 'escala de 0 a 10', max: 10, source: 'ideb', note: 'Brasil, redes públicas e privadas. Comparação de 2023 e 2025, sem confundir resultados com metas.', rows: [['Anos iniciais · 2023', 6], ['Anos iniciais · 2025', 6.3], ['Anos finais · 2023', 5], ['Anos finais · 2025', 5.3], ['Ensino médio · 2023', 4.3], ['Ensino médio · 2025', 4.5]] },
    connections: [
      ['Matemática que aparece na vida real', 'Comparar o preço por quilo de duas embalagens, entender um desconto e interpretar um gráfico são exemplos de uso cotidiano da matemática. São exemplos didáticos, não itens oficiais nem uma conversão dos níveis do PISA em habilidades garantidas de cada pessoa.', ['pisa']],
      ['Aprendizagem, trabalho e arrecadação', 'Aprender pode ampliar oportunidades e a capacidade de usar tecnologias. Esses efeitos dependem também de vagas, investimentos e condições sociais. Melhorar a educação não aumenta a arrecadação imediatamente: seus resultados amadurecem por anos.', ['pisa', 'fiscal']],
      ['Alimentação e saúde também entram na sala de aula', 'Aprender exige condições para frequentar a escola e participar das atividades. Alimentação, saúde e segurança podem influenciar essas condições. Os indicadores apresentados não isolam o efeito causal de cada fator nem substituem a avaliação de programas.', ['pisa', 'fome']],
      ['Mais recursos precisam chegar à aprendizagem', 'Financiar professores, infraestrutura e apoio aos alunos importa. Para avaliar eficácia, precisamos olhar execução, distribuição e aprendizagem, não apenas o orçamento. Uma média nacional pode melhorar enquanto desigualdades persistem.', ['ideb', 'pisa']]
    ],
    flow: ['Acesso e permanência', 'Ensino e condições de aprendizagem', 'Habilidades para a vida e o trabalho'],
    flowNote: 'Dados de anos diferentes refletem calendários de divulgação diferentes. PISA, Ideb e Inaf não são medidas intercambiáveis.'
  }
];
