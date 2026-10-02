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
const section = data => `<section id="${data.id}" class="scene data-scene macro-scene" aria-labelledby="${data.id}-title">
  <div class="scene-bg"><img src="assets/${data.image}" alt="" loading="lazy"></div>
  <div class="scene-header">
    <span class="scene-tag">${escape(data.tag)}</span>
    <h2 class="scene-title" id="${data.id}-title">${escape(data.title)}</h2>
    <p class="scene-description">${escape(data.intro)}</p>
    <p class="macro-review">Revisão: <time datetime="2026-10-02">02/10/2026</time> · período e fonte em cada indicador</p>
  </div>
  <div class="stats-grid macro-stats">${data.stats.map(card).join('')}</div>
  ${chart(data.chart)}
  <div class="macro-reading"><h3>Como esses dados se conectam</h3>
    <div class="macro-connections">${data.connections.map(([title, text, keys]) => `<article><h4>${escape(title)}</h4><p>${escape(text)}</p><div class="macro-source">${keys.map(source).join(' · ')}</div></article>`).join('')}</div>
  </div>
  <aside class="macro-flow" aria-label="Relações entre indicadores">
    <ul>${data.flow.map(text => `<li>${escape(text)}</li>`).join('')}</ul>
    <p>${escape(data.flowNote)}</p>
  </aside>
</section>`;

let html = readFileSync(path, 'utf8');
for (const data of MACRO) {
  const pattern = new RegExp(`<section id="${data.id}"[\\s\\S]*?</section>`);
  if (!pattern.test(html)) throw new Error(`Seção não encontrada: ${data.id}`);
  html = html.replace(pattern, section(data));
}
if (!html.includes('css/macro.css')) html = html.replace('<link rel="stylesheet" href="css/styles.css">', '<link rel="stylesheet" href="css/styles.css">\n  <link rel="stylesheet" href="css/macro.css?v=20261002">');
writeFileSync(path, html.replace(/ +$/gm, ''), 'utf8');
console.log('Quatro seções macro geradas com fontes e explicações.');
