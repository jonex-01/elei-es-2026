import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { MACRO, SOURCES } from './js/macro-data.js';
import { BUSINESS_HISTORY, BUSINESS_SOURCES } from './js/business-data.js';

const path = fileURLToPath(new URL('./index.html', import.meta.url));
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const source = key => {
  const [label, url] = SOURCES[key];
  return `<a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)} ↗</a>`;
};
const number = value => value.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
const card = ([label, value, unit, period, key, definition, impact, limit]) => `
    <article class="stat-card macro-stat">
      <h3 class="stat-label">${escape(label)}</h3>
      <div class="macro-value">${unit.startsWith('R$') ? `<span class="stat-unit">R$</span>` : ''}<span class="stat-value">${escape(value)}</span><span class="stat-unit">${escape(unit.startsWith('R$') ? unit.slice(2).trim() : unit)}</span></div>
      <p class="macro-period">${escape(period)}</p>
      <p class="macro-definition">${escape(definition)}</p>
      <details class="macro-details"><summary>Como isso afeta você?</summary>
        <p>${escape(impact)}</p><p><strong>Como interpretar:</strong> ${escape(limit)}</p>
      </details>
      <div class="macro-source">${source(key)}</div>
    </article>`;
const chart = data => !data ? '' : `
  <figure class="macro-chart">
    <figcaption><h3>${escape(data.title)}</h3><p>${escape(data.unit)} · eixo começa em zero</p></figcaption>
    <div class="macro-bars">${data.rows.map(([label, value]) => `
      <div class="macro-bar-row"><span>${escape(label)}</span><div class="macro-bar-track" aria-hidden="true"><div style="width:${value / data.max * 100}%"></div></div><strong>${number(value)}</strong></div>`).join('')}
    </div>
    <p class="macro-chart-note">${escape(data.note)}</p><div class="macro-source">${source(data.source)}</div>
  </figure>`;
const demonstration = kind => kind === 'income' ? `<figure class="economy-demo" data-income-demo>
  <figcaption><h4>Uma renda muito alta muda a média. E a mediana?</h4><p>Exemplo fictício: cinco trabalhadores; quatro recebem R$ 2.000 cada.</p></figcaption>
  <label for="income-high">Renda do quinto trabalhador</label>
  <input id="income-high" type="range" min="2000" max="30000" step="500" value="12000" disabled>
  <div class="demo-results" aria-live="polite" aria-atomic="true"><p>Quinto rendimento <output data-high>R$ 12.000</output></p><p>Média <output data-mean>R$ 4.000</output></p><p>Mediana <output>R$ 2.000</output></p></div>
  <p class="macro-chart-note">Cada pessoa tem o mesmo peso neste exemplo. A mediana permanece R$ 2.000 porque quatro dos cinco rendimentos são iguais. Na PNAD, usamos os pesos da amostra, não contamos todos os entrevistados como se representassem o mesmo número de pessoas.</p>
</figure>` : `<figure class="economy-demo" data-work-demo>
  <figcaption><h4>O desemprego pode cair sem nenhuma contratação</h4><p>Exemplo fictício: 90 pessoas ocupadas e 10 desocupadas. A taxa inicial é 10 ÷ 100 = 10%.</p></figcaption>
  <label for="work-leavers">Das 10 pessoas desocupadas, quantas deixam de buscar e saem da força de trabalho?</label>
  <input id="work-leavers" type="range" min="0" max="10" step="1" value="5" disabled>
  <div class="demo-results" aria-live="polite" aria-atomic="true"><p>Ocupados <output>90</output></p><p>Desocupados <output data-seekers>5</output></p><p>Fora da força <output data-leavers>5</output></p><p>Desocupação <output data-rate>5,3%</output></p></div>
  <p class="demo-formula" data-work-formula>5 ÷ (90 + 5) × 100 = 5,3%</p>
  <p class="macro-chart-note">Nenhuma pessoa foi contratada neste cenário. Se, em vez de saírem da busca, cinco conseguissem emprego, teríamos 95 ocupados e 5 desocupados, taxa de 5%. São mecanismos diferentes. O exemplo não explica automaticamente a trajetória real do Brasil.</p>
</figure>`;
const analysis = data => !data ? '' : `<div class="economy-analysis">
  <h4>${escape(data.title)}</h4>
  ${data.paragraphs.map(text => `<p>${escape(text)}</p>`).join('')}
  <div class="macro-source">${data.sources.map(source).join(' · ')}</div>
  ${data.population ? `<figure class="work-population"><figcaption>Quem entra na conta da desocupação?</figcaption><div>${data.population.map(([label, value, text]) => `<article><h5>${escape(label)}</h5><strong>${escape(value)}</strong><p>${escape(text)}</p></article>`).join('')}</div><p class="macro-chart-note">${escape(data.populationNote)}</p></figure>` : ''}
  ${data.table ? `<div class="income-distribution"><table><caption>${escape(data.table.title)}</caption><thead><tr>${data.table.headers.map(label => `<th scope="col">${escape(label)}</th>`).join('')}</tr></thead><tbody>${data.table.rows.map(row => `<tr>${row.map((value, i) => i === 0 ? `<th scope="row">${escape(value)}</th>` : `<td>${escape(value)}</td>`).join('')}</tr>`).join('')}</tbody></table><p class="macro-chart-note">${escape(data.table.note)}</p><div class="macro-source">${data.table.sources.map(source).join(' · ')}</div></div>` : ''}
  ${demonstration(data.demo)}
  <div class="economy-reading">${data.reading.map(([title, text, keys = []]) => `<details class="macro-details"><summary>${escape(title)}</summary><p>${escape(text)}</p>${keys.length ? `<div class="macro-source">${keys.map(source).join(' · ')}</div>` : ''}</details>`).join('')}</div>
</div>`;
const historyChart = data => `<figure class="cycle-evidence business-history" aria-labelledby="business-history-title">
  <figcaption id="business-history-title">${escape(data.caption)}</figcaption>
  <p class="business-chart-unit">CNPJs por ano · mesma escala nas duas séries · eixo começa em zero</p>
  <ul class="business-chart-legend"><li><i class="business-recovery" aria-hidden="true"></i>Recuperação judicial requerida</li><li><i class="business-bankruptcy" aria-hidden="true"></i>Falência requerida</li></ul>
  <div class="business-chart-axis" aria-hidden="true"><span>0</span><span>${number(data.chartMax)} CNPJs</span></div>
  <ol class="business-chart-years" aria-label="Valores anuais de recuperação judicial e falência requeridas">${data.chartRows.map(([year, recovery, bankruptcy]) => `<li class="business-chart-year"><strong>${year}</strong><div>${[[recovery, 'recovery', 'Recuperação judicial requerida'], [bankruptcy, 'bankruptcy', 'Falência requerida']].map(([value, kind, label]) => `<div class="business-series"><span class="business-chart-sr">${label}: </span><div class="business-chart-track" aria-hidden="true"><span class="business-${kind}" style="width:${value / data.chartMax * 100}%"></span></div><span class="business-chart-value">${number(value)}<span class="business-chart-sr"> CNPJs</span></span></div>`).join('')}</div></li>`).join('')}</ol>
  <p class="macro-chart-note">${escape(data.note)}</p><div class="macro-source">${data.sources.map(source).join(' · ')}</div>
  <details class="macro-details business-chart-data"><summary>Consultar valores em tabela</summary>${cycleTable({ ...data, presentation: 'table' })}</details>
</figure>`;
const cycleTable = data => data.presentation === 'paired-bars' ? historyChart(data) : `<figure class="cycle-evidence">
  <table class="cycle-table" data-columns="${data.headers.length}" data-layout="${escape(data.layout || 'indicator')}"><caption>${escape(data.caption)}</caption>
    <thead><tr>${data.headers.map(label => `<th scope="col">${escape(label)}</th>`).join('')}</tr></thead>
    <tbody>${data.rows.map(row => `<tr>${row.map((value, i) => i === 0 ? `<th scope="row">${escape(value)}</th>` : `<td>${escape(value)}</td>`).join('')}</tr>`).join('')}</tbody>
  </table>
  <p class="macro-chart-note">${escape(data.note)}</p><div class="macro-source">${data.sources.map(source).join(' · ')}</div>
</figure>`;
const cycleText = data => `<h4>${escape(data.title)}</h4>${data.paragraphs.map(text => `<p>${escape(text)}</p>`).join('')}<div class="macro-source">${data.sources.map(source).join(' · ')}</div>`;
const cycle = data => `<ol class="economy-cycle" start="2" aria-label="Da comparação à conclusão">
  <li class="cycle-step"><span class="cycle-label">Dados comparáveis</span><div>${data.tables.map(cycleTable).join('')}</div></li>
  <li class="cycle-step"><span class="cycle-label">Explicação</span><div>${cycleText(data.explanation)}</div></li>
  <li class="cycle-step"><span class="cycle-label">Interpretação alternativa</span><div>${cycleText(data.alternative)}</div></li>
  <li class="cycle-step cycle-conclusion"><span class="cycle-label">Conclusão que os dados permitem</span><div><p>${escape(data.conclusion)}</p><p class="cycle-next"><strong>O que acompanhar:</strong> ${escape(data.nextEvidence)}</p><div class="macro-source">${data.sources.map(source).join(' · ')}</div></div></li>
</ol>`;
const block = data => `<article id="${data.id}" class="economy-block" aria-labelledby="${data.id}-title">
  <header><span class="cycle-question-label">1 · Pergunta</span><h3 id="${data.id}-title">${escape(data.cycle.question)}</h3><p>${escape(data.cycle.purpose)}</p></header>
  ${cycle(data.cycle)}
  <details class="economy-dossier"><summary>${escape(data.cycle.detailLabel)}</summary><div class="economy-dossier-body">
  <div class="stats-grid macro-stats">${data.stats.map(card).join('')}</div>
  ${analysis(data.analysis)}
  ${data.equation ? `<figure class="economy-equation"><figcaption>A conta em 12 meses até agosto de 2026 · % do PIB · setor público consolidado</figcaption><div>${data.equation.map(([label, value], i) => `${i ? `<span class="equation-operator" aria-hidden="true">${i === 1 ? '+' : '='}</span>` : ''}<p><strong>${value}%</strong><span>${escape(label)}</span></p>`).join('')}</div><p class="macro-chart-note">Valores arredondados pelo BCB. Todos os componentes usam o mesmo período e abrangência.</p><div class="macro-source">${source('fiscalAtual')}</div></figure>` : ''}
  ${(data.charts || []).map(chart).join('')}
  <div class="economy-reading">${data.reading.map(([title, text, keys = []]) => `<details class="macro-details"><summary>${escape(title)}</summary><p>${escape(text)}</p>${keys.length ? `<div class="macro-source">${keys.map(source).join(' · ')}</div>` : ''}</details>`).join('')}</div>
  </div></details>
</article>`;
const economyLabels = { 'economia-bolso': 'Bolso', 'economia-trabalho': 'Trabalho', 'economia-producao': 'Produção', 'economia-contas': 'Contas públicas', 'economia-futuro': 'Futuro' };
const economy = data => `<nav class="economy-nav" aria-label="Explore os temas de economia">${data.blocks.map(item => `<a href="#${item.id}"><span>${escape(item.navLabel || economyLabels[item.id] || item.title)}</span></a>`).join('')}</nav>
  <aside class="economy-context"><strong>Como ler este retrato</strong><p>Cada tema parte de uma pergunta, compara dados, explica mecanismos, examina outra interpretação e conclui dentro dos limites da evidência. Os períodos estão em cada tabela. 2026 está em andamento: os resultados parciais não são previsões para o fim do ano. As conclusões ficam visíveis; indicadores completos, exemplos e metodologia estão nos detalhes.</p><a href="dados/economia-2026-10-02.csv" download>Baixar indicadores e fontes (CSV)</a> · <a href="dados/analises-economia-2026-10-02.csv" download>Baixar comparações da análise (CSV)</a></aside>
  ${data.blocks.map(block).join('')}
  <aside class="macro-flow"><ul><li>Renda e preços → poder de compra</li><li>Trabalho e investimento → capacidade produtiva</li><li>Receitas e despesas → resultado primário</li><li>Juros, crescimento e ajustes → trajetória da dívida</li></ul><p>As setas explicam mecanismos. Não são um cálculo de correlação nem uma atribuição de resultados a um governo ou programa específico.</p></aside>`;
const section = data => `<section id="${data.id}" class="scene data-scene macro-scene" aria-labelledby="${data.id}-title">
  <div class="scene-bg"><img src="assets/${data.image}" alt="" loading="lazy"></div>
  <div class="scene-header">
    <span class="scene-tag">${escape(data.tag)}</span>
    <h2 class="scene-title" id="${data.id}-title">${escape(data.title)}</h2>
    <p class="scene-description">${escape(data.intro)}</p>
    <p class="macro-review">Revisão: <time datetime="2026-10-02">02/10/2026</time> · período e fonte em cada indicador</p>
  </div>
  ${data.blocks ? economy(data) : `<div class="stats-grid macro-stats">${data.stats.map(card).join('')}</div>
  ${chart(data.chart)}
  <div class="macro-reading"><h3>Como esses dados se conectam</h3>
    <div class="macro-connections">${data.connections.map(([title, text, keys]) => `<article><h4>${escape(title)}</h4><p>${escape(text)}</p><div class="macro-source">${keys.map(source).join(' · ')}</div></article>`).join('')}</div>
  </div>
  <aside class="macro-flow" aria-label="Relações entre indicadores">
    <ul>${data.flow.map(text => `<li>${escape(text)}</li>`).join('')}</ul>
    <p>${escape(data.flowNote)}</p>
  </aside>`}
</section>`;

const economyData = MACRO.find(item => item.blocks);
for (const item of economyData.blocks) {
  if (!item.cycle) throw new Error(`Ciclo ausente: ${item.id}`);
  for (const table of item.cycle.tables) {
    if (table.rows.some(row => row.length !== table.headers.length)) throw new Error(`Tabela inconsistente: ${table.caption}`);
  }
}
let html = readFileSync(path, 'utf8');
for (const data of MACRO) {
  const pattern = new RegExp(`<section id="${data.id}"[\\s\\S]*?</section>`);
  if (!pattern.test(html)) throw new Error(`Seção não encontrada: ${data.id}`);
  html = html.replace(pattern, section(data));
}
if (!html.includes('css/macro.css')) html = html.replace('<link rel="stylesheet" href="css/styles.css">', '<link rel="stylesheet" href="css/styles.css">\n  <link rel="stylesheet" href="css/macro.css?v=20261002">');
writeFileSync(path, html.replace(/ +$/gm, ''), 'utf8');
const csvCell = value => `"${String(value).replaceAll('"', '""')}"`;
const csv = [['tema', 'indicador', 'valor', 'unidade', 'periodo', 'fonte', 'url', 'revisao'], ...economyData.blocks.flatMap(item => item.stats.map(([label, value, unit, period, key]) => [item.title, label, value, unit, period, SOURCES[key][0], new URL(SOURCES[key][1], 'https://jonex-01.github.io/elei-es-2026/Scrollytelling_Eleicoes_2026/').href, '2026-10-02']))];
writeFileSync(fileURLToPath(new URL('./dados/economia-2026-10-02.csv', import.meta.url)), '\uFEFF' + csv.map(row => row.map(csvCell).join(';')).join('\n') + '\n', 'utf8');
const comparisonRows = economyData.blocks.flatMap(item => item.cycle.tables.flatMap(table => table.rows.map(row => [
  item.cycle.question, table.caption, row[0], table.headers[1], row[1],
  table.headers[2] || '', row[2] || '', table.note,
  table.sources.map(key => new URL(SOURCES[key][1], 'https://jonex-01.github.io/elei-es-2026/Scrollytelling_Eleicoes_2026/').href).join(' | '),
  '2026-10-02'
])));
const comparisons = [['tema', 'comparacao', 'indicador', 'referencia_1', 'valor_1', 'referencia_2', 'valor_2', 'limites', 'fontes', 'revisao'], ...comparisonRows];
writeFileSync(fileURLToPath(new URL('./dados/analises-economia-2026-10-02.csv', import.meta.url)), '\uFEFF' + comparisons.map(row => row.map(csvCell).join(';')).join('\n') + '\n', 'utf8');
writeFileSync(fileURLToPath(new URL('./dados/empresas-historico-2026-10-02.json', import.meta.url)), JSON.stringify({
  review: '2026-10-02', publisher: 'Serasa Experian', release_date: '2026-04-07',
  methodology: 'Série revisada que separa processos e CNPJs envolvidos nos pedidos de cada ano. Valores transcritos dos gráficos publicados; 2025 preliminar. Não mede estoque de recuperações em andamento, falências decretadas, baixas ou empregos perdidos.',
  sources: ['empresasJudicial', 'empresasRJHistoria', 'empresasFalHistoria'].map(key => BUSINESS_SOURCES[key][1]),
  rows: BUSINESS_HISTORY.map(([year, recovery_processes, recovery_cnpjs, bankruptcy_processes, bankruptcy_cnpjs]) => ({ year, recovery_processes, recovery_cnpjs, bankruptcy_processes, bankruptcy_cnpjs }))
}, null, 2) + '\n', 'utf8');
console.log('Quatro seções macro geradas com fontes e explicações.');
