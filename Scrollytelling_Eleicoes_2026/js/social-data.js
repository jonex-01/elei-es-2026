// Revisão em 02/10/2026. Séries observadas; metas e projeções não entram nos gráficos.
export const SOCIAL_SOURCES = {
  despesaConceito: ['CGU · etapas da despesa pública', 'https://portaldatransparencia.gov.br/entenda-a-gestao-publica/execucao-despesa-publica'],
  incaExecucao: ['INCA · execução até ago/2026', 'https://www.gov.br/inca/pt-br/acesso-a-informacao/receitas-e-despesas/2026'],
  idebConceito: ['Inep · composição do Ideb', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/ideb/indice-de-desenvolvimento-da-educacao-basica/'],
  idebHistoria: ['Inep · série histórica do Ideb · resultados 2025', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/ideb/resultados'],
  anuario: ['FBSP · Anuário 2026 · tabelas 1, 2, 8 e 9; violência contra mulheres e gráfico 35', 'https://forumseguranca.org.br/wp-content/uploads/2026/07/anuario-2026.pdf']
};
const n = value => value.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
const text = (title, paragraphs, sources) => ({ title, paragraphs, sources });
const table = (caption, headers, rows, note, sources) => ({ caption, headers, rows, note, sources });
const lines = (id, caption, labels, chartRows, chartMax, unit, note, sources) => ({
  ...table(caption, ['Ano', ...labels], chartRows.map(row => row.map((value,i) => i === 0 ? String(value) : n(value))), note, sources),
  id, layout: 'year', presentation: 'lines', labels, chartRows, chartMax, unit
});
const topic = (id, title, question, purpose, tables, explanation, alternative, conclusion, nextEvidence, sources, reading = []) => ({
  id, title, navLabel: title, stats: [], reading,
  cycle: { question, purpose, tables, explanation, alternative, conclusion, nextEvidence, sources, detailLabel: 'Abrir indicadores, conceitos e exemplos' }
});
export const SOCIAL_BLOCKS = {
  'scene-saude': [
    topic('saude-acesso', 'Acesso e espera', 'Mais cirurgias significam menos tempo na fila?',
      'Separe produção, pessoas atendidas, demanda e espera: um número maior de procedimentos responde apenas à primeira parte.', [
        table('Cirurgias eletivas: 1º semestre de cada ano', ['Recorte', '2025', '2026'], [
          ['Brasil · total SUS', 'Não informado', '7.552.260 · alta de 8% informada pelo MS'],
          ['Brasil · rol do Agora Tem Especialistas', '2.658.742', '2.923.242']
        ], 'O rol do programa é um subconjunto do total, não uma parcela a somar. O MS informa 8% para o total; não reconstruímos uma base exata a partir de percentual arredondado. Para o rol, mostramos os totais, pois o percentual citado na notícia não coincide com a divisão desses valores.', ['cirurgias'])
      ], text('A fila é um estoque; as cirurgias são um fluxo', [
        'Exemplo fictício: uma fila começa com 1.000 solicitações, recebe 300 e conclui 250 atendimentos. Termina com 1.050. Mesmo com 250 atendimentos, cresceu 5%. Isso não descreve uma fila real do SUS.',
        'Pessoas podem ter mais de uma solicitação ou procedimento. Compare a mesma especialidade e região, com cadastro deduplicado, entradas, saídas e tempo entre solicitação e atendimento. A mediana da espera descreve o caso central; o percentil 90 mostra o prazo abaixo do qual estão 90% das esperas medidas.'
      ], ['fila']), text('Uma fila maior pode revelar demanda antes invisível', [
        'Mais diagnósticos e encaminhamentos podem ampliar a fila registrada mesmo quando o serviço atende mais. Limpeza de cadastros pode reduzi-la sem realizar uma cirurgia. São hipóteses a verificar, não explicações comprovadas para o aumento nacional.',
        'A espera dos casos já concluídos pode omitir quem ainda aguarda há muito tempo. Publique também a idade das solicitações abertas e a prioridade clínica, sem transformar todo procedimento em um caso de igual urgência.'
      ], ['fila']), 'O SUS registrou mais produção no semestre. Este balanço não permite afirmar quanto a fila nacional diminuiu, quantas pessoas únicas foram atendidas ou quanto tempo passaram esperando.',
      'Estoque e novas solicitações, atendimentos de pessoas únicas, mediana e percentil 90 de espera por especialidade e território, com a mesma regra de contagem.', ['cirurgias', 'fila'], [
        ['Por que não comparar semestre com ano inteiro?', '7,55 milhões em seis meses não podem ser comparados diretamente com um total anual. Dobrar o semestre seria uma projeção: sazonalidade e capacidade mudam ao longo do ano.', ['cirurgias']],
        ['Onde entram atenção básica e distribuição territorial?', 'A trajetória inclui identificação da necessidade, encaminhamento, exames e tratamento. Para localizar um gargalo, acompanhe cada etapa e a disponibilidade de equipes na região, além do total nacional.', ['gestao', 'fila']]
      ]),
    topic('saude-recursos', 'Recursos e resultado', 'O dinheiro autorizado já virou atendimento?',
      'Veja as etapas da execução e um caso concreto. O orçamento federal e o demonstrativo do INCA têm abrangências diferentes.', [
        table('INCA: mesma instituição e mesmo período · acumulado até agosto/2026', ['Etapa', 'R$ milhões'], [
          ['Provisão recebida', '389,91'], ['Empenhado', '384,45'], ['Liquidado', '315,92'], ['Pago', '274,34']
        ], 'Valores nominais arredondados a R$ milhões. Demonstrativo do INCA, não do SUS inteiro. Etapas do mesmo recurso: não somar as quatro linhas. Não inclui automaticamente todo o custo da assistência oncológica no país.', ['incaExecucao'])
      ], text('Quatro etapas, quatro perguntas', [
        'Autorização é a permissão orçamentária. Provisão é o crédito disponibilizado à unidade. Empenho compromete o recurso; liquidação verifica o direito do credor após comprovação da entrega; pagamento é a saída financeira. A diferença entre etapas não equivale automaticamente a dinheiro desperdiçado.',
        'No demonstrativo do INCA, o pago corresponde a cerca de 70,4% da provisão recebida: 274,34 ÷ 389,91. É uma razão calculada pelo projeto, não uma nota de qualidade. Crédito recebido até agosto não tem necessariamente vencimento de execução em agosto.'
      ], ['incaExecucao', 'despesaConceito']), text('Pagar mais também não comprova eficiência', [
        'Cronogramas de obras, entregas e pagamentos podem explicar parte do saldo. Para identificar atraso, precisamos das obrigações vencidas e do planejamento, não apenas da diferença numérica.',
        'Gasto nominal maior pode refletir preços maiores, expansão do serviço ou maior complexidade dos casos. Compare custos em preços constantes, perfil dos pacientes, capacidade efetiva e resultados. Um hospital de referência não é diretamente comparável a uma unidade de baixa complexidade.'
      ], ['incaExecucao', 'gestao']), 'O exemplo mostra que crédito recebido, compromisso, entrega verificada e pagamento são etapas distintas. Não mede a execução de toda a Saúde nem prova melhora ou piora da qualidade do atendimento.',
      'Execução atualizada, obrigações vencidas, entregas, custo ajustado por complexidade, equipes em funcionamento e resultados do serviço.', ['incaExecucao', 'orcamento'], [
        ['Orçamento federal não é o financiamento total do SUS', 'Os R$ 271,3 bilhões são a autorização inicial federal da LOA 2026. Estados e municípios também financiam o sistema. Não use esse total como denominador do INCA e não confunda autorização com valor pago.', ['orcamento']],
        ['Como conectar saúde e economia sem inventar causalidade?', 'A relação entre recursos e atendimento passa por custos, gestão e capacidade. Para estimar economia gerada por prevenção ou efeito de um corte, é preciso avaliar uma intervenção concreta; estes totais não fornecem esse cálculo.', ['gestao']]
      ])
  ],
  'scene-educacao': [
    topic('educacao-aprendizagem', 'Aprendizagem', 'O Ideb subiu: os alunos aprenderam mais ou foram mais aprovados?',
      'Confronte o índice composto com o desempenho nas provas. Mantenha a mesma rede e etapa em cada comparação.', [
        lines('ideb-historico', 'Ideb observado · Brasil · redes públicas e privadas', ['Anos iniciais', 'Anos finais', 'Ensino médio'],
          [2005,2007,2009,2011,2013,2015,2017,2019,2021,2023,2025].map((year,i) => [year,
            [3.8,4.2,4.6,5,5.2,5.5,5.8,5.9,5.8,6,6.3][i], [3.5,3.8,4,4.1,4.2,4.5,4.7,4.9,5.1,5,5.3][i], [3.4,3.5,3.6,3.7,3.7,3.7,3.8,4.2,4.2,4.3,4.5][i]]),
          10, 'Índice de 0 a 10', 'Observações bienais, sem metas ou interpolação de resultados para anos sem avaliação. A escala não é porcentagem de aprendizagem.', ['ideb', 'idebHistoria']),
        table('Saeb: matemática · redes públicas · comparação dentro de cada etapa', ['Etapa', '2023', '2025'], [
          ['5º ano', '218,3', '227,4'], ['9º ano', '249,9', '255,3'], ['3ª série do ensino médio', '263,9', '268,0']
        ], 'Proficiência na escala Saeb (0–500), distinta do Ideb (0–10). Aqui o recorte é só de redes públicas; não comparar estes níveis diretamente com o gráfico público + privado nem interpretar diferenças entre séries como ganho dos mesmos alunos.', ['ideb'])
      ], text('Ideb combina desempenho e fluxo escolar', [
        'O índice multiplica uma medida padronizada de desempenho no Saeb por uma medida do fluxo baseada na aprovação. Exemplo fictício: desempenho 5 e fator de fluxo 0,8 produzem Ideb 4; elevar o fluxo para 0,9 produz 4,5 sem mudar o desempenho.',
        'A aprovação importa porque a repetência afeta a trajetória. Mas, para verificar aprendizagem, precisamos abrir o componente das provas. O avanço da matemática no Saeb das redes públicas acompanha a alta do Ideb, embora os números apresentados não decomponham quanto cada componente contribuiu.'
      ], ['idebConceito', 'ideb']), text('Uma média maior pode esconder quem ficou para trás', [
        'Mudanças de participação e de composição dos estudantes também influenciam médias. A alta nacional não garante avanço em todas as escolas, redes ou grupos. A comparação entre edições avalia conjuntos de estudantes, não o progresso individual de uma mesma turma.',
        'Investigar uma política exige participação na avaliação, distribuição de proficiência, aprovação e comparação entre contextos semelhantes. A trajetória por si só não identifica qual programa ou governo causou a mudança.'
      ], ['idebHistoria']), 'Há avanço nos índices das três etapas e na matemática do Saeb das redes públicas. Não é correto reduzir toda a alta à aprovação, nem afirmar que o aumento do Ideb corresponde integralmente a mais aprendizagem.',
      'Componentes do Ideb, participação no Saeb, estudantes nos níveis de proficiência, desigualdades por rede e território e trajetórias de abandono.', ['ideb', 'idebConceito']),
    topic('educacao-vida', 'Habilidades para a vida', 'Estudar mais significa conseguir interpretar textos e contas?',
      'Escolaridade, desempenho de estudantes e alfabetismo de jovens e adultos respondem a perguntas diferentes.', [
        lines('inaf-historico', 'Inaf · analfabetismo funcional · população de 15 a 64 anos', ['Analfabetismo funcional'], [[2015,27],[2018,29],[2024,29]], 100, '% da população de 15–64 anos',
          'Percentual agregado publicado na tabela 3 (p. 19), sem somar percentuais de níveis já arredondados. Os intervalos entre edições não são anuais. Não estimamos resultados de 2019–2023 ou 2025–2026. A edição 2024 atualizou tarefas e incorporou o ambiente digital; consulte a metodologia.', ['inaf']),
        table('O que cada avaliação representa', ['Avaliação', 'População / unidade', 'O que responde'], [
          ['Ideb 2025', 'Etapas da educação básica · índice', 'Desempenho combinado com fluxo escolar'],
          ['PISA 2025', 'Estudantes elegíveis de 15 anos · 72% abaixo do nível 2 em matemática', 'Uso de conhecimentos em problemas avaliados'],
          ['Inaf 2024', 'População de 15–64 anos · 29% de analfabetismo funcional', 'Leitura e matemática no cotidiano']
        ], '72% = 100% − 28% que atingiram pelo menos o nível 2, cálculo do projeto. Percentuais de populações e instrumentos distintos não devem ser subtraídos ou unidos numa mesma série.', ['ideb', 'pisa', 'inaf'])
      ], text('Saber ler palavras não resolve toda tarefa de leitura', [
        'O Inaf reúne os níveis analfabeto e rudimentar na categoria analfabetismo funcional. Ela não significa que todas essas pessoas sejam incapazes de ler qualquer palavra ou fazer qualquer conta.',
        'Exemplo didático: uma embalagem de 500 g custa R$ 12 e outra de 1 kg custa R$ 20. O preço por quilo é R$ 24 na primeira e R$ 20 na segunda. Interpretar quantidade, unidade e preço exige mais que reconhecer os números. Este não é um item oficial do Inaf ou do PISA.'
      ], ['inaf']), text('Os percentuais não acompanham os mesmos indivíduos', [
        'O PISA representa estudantes elegíveis de uma idade; não descreve quem está fora da escola nem todos os adultos. O Inaf inclui faixas etárias mais amplas. A coexistência de avanços escolares e dificuldades adultas não é uma contradição.',
        'Os 29% publicados em 2018 e 2024 indicam estabilidade do percentual arredondado. Não demonstram que ninguém melhorou, que a distribuição é idêntica ou que uma diferença de um ponto em outra edição seria estatisticamente significativa.'
      ], ['pisa', 'inaf']), 'Os indicadores mostram dificuldades em habilidades práticas, apesar de avanços no índice escolar. Não permitem converter 72% do PISA em uma estimativa para a população brasileira nem atribuir o resultado adulto exclusivamente à escola atual.',
      'Distribuição de habilidades por idade e escolaridade, metodologia e incerteza das pesquisas, formação de jovens e adultos e desigualdades de aprendizagem.', ['inaf', 'pisa'])
  ],
  'scene-seguranca': [
    topic('seguranca-tendencia', 'Tendência nacional', 'A queda das mortes significa que o país ficou mais seguro em tudo?',
      'Separe contagem de vítimas, taxa por habitante e outros crimes. A série abaixo usa uma única edição revisada.', [
        lines('mvi-historico', 'Mortes violentas intencionais · Brasil · 2012–2025', ['Vítimas de MVI'],
          [54694,55844,59739,58437,61600,64079,57592,47765,50448,48286,47963,46441,44220,40775].map((value,i) => [2012+i,value]),
          70000, 'Vítimas por ano', 'Série revisada do Anuário 2026, tabela 2. Não mistura números de edições antigas. É registro administrativo de vítimas, não pesquisa de percepção de segurança.', ['anuario']),
        table('Total e taxa: denominadores diferentes', ['Medida', '2024 revisado', '2025'], [
          ['Vítimas de MVI', '44.220', '40.775'], ['Taxa por 100 mil habitantes', '20,8', '19,1']
        ], 'O total caiu 7,79% (cálculo: 40.775 ÷ 44.220 − 1). A redução de 8,2% publicada pelo FBSP é da taxa, calculada com valores não arredondados. Não a reproduzir dividindo apenas 19,1 por 20,8.', ['anuario'])
      ], text('Uma taxa relaciona o evento à população exposta', [
        'Taxa = vítimas ÷ população × 100.000. Exemplo fictício: 100 mortes em 1 milhão de habitantes representam 10 por 100 mil; 150 em 3 milhões representam 5. O segundo lugar tem mais mortes, mas uma taxa menor.',
        'MVI agrega homicídios dolosos, feminicídios, latrocínios, lesões seguidas de morte e mortes por intervenção policial conforme as regras de composição do FBSP. Não some novamente as subcategorias ao total nem trate séries do sistema de saúde como equivalentes automáticos.'
      ], ['anuario']), text('Menos violência letal não resume todos os riscos', [
        'Roubos, ameaças, golpes e atuação de organizações criminosas não estão todos neste indicador. Uma pessoa pode perceber mais insegurança mesmo quando a violência letal registrada diminui.',
        'Mudanças no registro, na classificação ou na população estimada afetam comparações. Para atribuir a queda a uma intervenção, é preciso examinar territórios, outras mudanças simultâneas e uma comparação adequada; o gráfico nacional sozinho não identifica causalidade.'
      ], ['anuario']), 'As mortes registradas caíram em 2025 e ficaram abaixo do pico da série. A taxa também caiu. Isso sustenta uma melhora na violência letal nacional, sem comprovar melhora de todos os crimes, territórios ou grupos.',
      'Taxas e totais por território, qualidade dos registros, demais crimes e pesquisas de vitimização, usando definições constantes.', ['anuario']),
    topic('seguranca-riscos', 'Riscos que persistem', 'Como as mortes caem enquanto o feminicídio aumenta?',
      'Abra o total: uma categoria numerosa pode cair enquanto outra cresce. Cada recorte precisa de sua própria leitura.', [
        lines('mulheres-historico', 'Violência letal contra mulheres · Brasil · 2016–2025', ['Homicídios de mulheres, incluindo feminicídios', 'Feminicídios'],
          [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025].map((year,i) => [year,[4245,4556,4340,3966,3999,3869,3934,3937,3728,3539][i],[929,1075,1229,1330,1354,1347,1455,1475,1504,1571][i]]),
          5000, 'Vítimas por ano', 'Anuário 2026, gráfico 35. Feminicídios estão incluídos no total de homicídios de mulheres mostrado: não somar as linhas. A classificação registrada também pode mudar; a série não isola sua contribuição.', ['anuario']),
        table('Intervenções policiais: quantidade e participação nas MVI', ['Medida', '2024 revisado', '2025'], [
          ['Vítimas de intervenção policial', '6.237', '6.602'], ['Participação nas MVI', '14,1%', '16,2%']
        ], 'Inclui intervenções em serviço e fora de serviço. A participação sobe quando o numerador aumenta e/ou o total diminui. Não é taxa por habitante, medida de legalidade ou avaliação da produtividade policial.', ['anuario'])
      ], text('O total não exige que todas as partes sigam a mesma direção', [
        'O gráfico mostra queda dos homicídios de mulheres e aumento dos registros de feminicídio no último ano. O segundo é um subconjunto do primeiro. Já as mortes por intervenção policial aumentaram 365 vítimas, cálculo de 6.602 − 6.237.',
        'Feminicídio é uma classificação específica ligada à condição de mulher, não sinônimo de todo homicídio de mulher. Para comparar riscos, a taxa de feminicídio usa a população de mulheres; a taxa geral de MVI usa a população total.'
      ], ['anuario']), text('Registro melhor e violência maior são hipóteses distintas', [
        'Mudanças de classificação podem alterar o número registrado de feminicídios. Isso não autoriza dizer que toda a alta é apenas reclassificação: seriam necessários dados de investigação e critérios aplicados a cada período.',
        'O total de mortes em intervenções não informa, por si só, se cada uso da força foi legal ou ilegal. Para avaliar atuação policial, cruze investigações, circunstâncias, proteção de agentes e civis e resultados de segurança.'
      ], ['anuario']), 'A melhora agregada convive com aumentos nos registros de feminicídio e de mortes por intervenção policial. Estes dados justificam acompanhar separadamente os riscos, mas não determinam sozinhos suas causas.',
      'Classificação e investigação dos casos, distribuição territorial, medidas de proteção e circunstâncias das intervenções, além das taxas de cada categoria.', ['anuario'])
  ]
};
