import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { MACRO, SOURCES } from './js/macro-data.js';

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
const block = data => `<article id="${data.id}" class="economy-block" aria-labelledby="${data.id}-title">
  <header><h3 id="${data.id}-title">${escape(data.title)}</h3><p>${escape(data.intro)}</p></header>
  <div class="stats-grid macro-stats">${data.stats.map(card).join('')}</div>
  ${data.equation ? `<figure class="economy-equation"><figcaption>A conta em 12 meses até agosto de 2026 · % do PIB · setor público consolidado</figcaption><div>${data.equation.map(([label, value], i) => `${i ? `<span class="equation-operator" aria-hidden="true">${i === 1 ? '+' : '='}</span>` : ''}<p><strong>${value}%</strong><span>${escape(label)}</span></p>`).join('')}</div><p class="macro-chart-note">Valores arredondados pelo BCB. Todos os componentes usam o mesmo período e abrangência.</p><div class="macro-source">${source('fiscalAtual')}</div></figure>` : ''}
  ${(data.charts || []).map(chart).join('')}
  <div class="economy-reading">${data.reading.map(([title, text, keys = []]) => `<details class="macro-details"><summary>${escape(title)}</summary><p>${escape(text)}</p>${keys.length ? `<div class="macro-source">${keys.map(source).join(' · ')}</div>` : ''}</details>`).join('')}</div>
</article>`;
const economy = data => `<nav class="economy-nav" aria-label="Explore os temas de economia">${data.blocks.map((item, i) => `<a href="#${item.id}"><span>${['Bolso', 'Trabalho', 'Produção', 'Contas públicas', 'Futuro'][i]}</span></a>`).join('')}</nav>
  <aside class="economy-context"><strong>Como ler este retrato</strong><p>2026 ainda está em andamento. Cada indicador usa o último período verificado até 02/10/2026: inflação e contas públicas até agosto, crédito das famílias até julho, PIB até junho e alimentação no triênio 2023–2025. São dados observados, não previsões para o fim do ano.</p><a href="dados/economia-2026-10-02.csv" download>Baixar indicadores e fontes (CSV)</a></aside>
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

let html = readFileSync(path, 'utf8');
for (const data of MACRO) {
  const pattern = new RegExp(`<section id="${data.id}"[\\s\\S]*?</section>`);
  if (!pattern.test(html)) throw new Error(`Seção não encontrada: ${data.id}`);
  html = html.replace(pattern, section(data));
}
if (!html.includes('css/macro.css')) html = html.replace('<link rel="stylesheet" href="css/styles.css">', '<link rel="stylesheet" href="css/styles.css">\n  <link rel="stylesheet" href="css/macro.css?v=20261002">');
writeFileSync(path, html.replace(/ +$/gm, ''), 'utf8');
const csvCell = value => `"${String(value).replaceAll('"', '""')}"`;
const economyData = MACRO.find(item => item.blocks);
const csv = [['tema', 'indicador', 'valor', 'unidade', 'periodo', 'fonte', 'url', 'revisao'], ...economyData.blocks.flatMap(item => item.stats.map(([label, value, unit, period, key]) => [item.title, label, value, unit, period, ...SOURCES[key], '2026-10-02']))];
writeFileSync(fileURLToPath(new URL('./dados/economia-2026-10-02.csv', import.meta.url)), '\uFEFF' + csv.map(row => row.map(csvCell).join(';')).join('\n') + '\n', 'utf8');
console.log('Quatro seções macro geradas com fontes e explicações.');
