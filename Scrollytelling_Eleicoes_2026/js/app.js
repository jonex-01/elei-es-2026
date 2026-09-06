import { ELECTION_DATA, CANDIDATOS_ORDEM } from './data.js?v=20260906_tse_v5';

// ── GLOBAL STATE ──
let currentTheme = localStorage.getItem('theme') || 
  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
let chartInstances = {};

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  initNavMorph();
  initDoubleBezel();
  initScrollProgress();
  initChapterRoute();
  buildCena1();
  buildCena2();
  buildCena3();
  buildCena4();
  buildCandidatos();
  buildEncerramento();
  initScrollObserver();
  initCountdown();
  startParticles();
});

// ── VANGUARD LOGIC ──
function initNavMorph() {
  const trigger = document.getElementById('nav-trigger');
  const overlay = document.getElementById('nav-overlay');
  if (!trigger || !overlay) return;
  
  trigger.addEventListener('click', () => {
    trigger.classList.toggle('is-active');
    overlay.classList.toggle('is-active');
  });

  overlay.querySelectorAll('.nav-overlay-link').forEach(link => {
    link.addEventListener('click', () => {
      trigger.classList.remove('is-active');
      overlay.classList.remove('is-active');
    });
  });
}

function initDoubleBezel() {
  // Envolvemos automaticamente as estatísticas e gráficos na arquitetura Double-Bezel
  const targets = document.querySelectorAll('.stat-card, .chart-container');
  targets.forEach(el => {
    // Evita duplicar se já foi adicionado
    if (el.querySelector('.double-bezel-inner')) return;
    
    el.classList.add('double-bezel');
    
    // Transfere o conteúdo atual para o inner-core
    const inner = document.createElement('div');
    inner.className = 'double-bezel-inner';
    
    while(el.firstChild) {
      inner.appendChild(el.firstChild);
    }
    el.appendChild(inner);
  });
}

// ── THEME ──
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
  setTimeout(() => Object.values(chartInstances).forEach(c => { if(c) c.update(); }), 100);
});

// ── PARTICLES ──
function startParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      animation-duration: ${Math.random() * 14 + 8}s;
      animation-delay: ${Math.random() * 10}s;
      opacity: ${Math.random() * 0.5 + 0.1};
    `;
    container.appendChild(p);
  }
}

// ── COUNTDOWN ──
function initCountdown() {
  const target = new Date(ELECTION_DATA.data_eleicao_1t + 'T06:00:00');
  function update() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) { setCountdown(0, 0, 0, 0); return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    setCountdown(d, h, m, s);
  }
  function setCountdown(d, h, m, s) {
    const fmt = n => String(n).padStart(2, '0');
    document.getElementById('cd-days')  && (document.getElementById('cd-days').textContent  = fmt(d));
    document.getElementById('cd-hours') && (document.getElementById('cd-hours').textContent = fmt(h));
    document.getElementById('cd-mins')  && (document.getElementById('cd-mins').textContent  = fmt(m));
    document.getElementById('cd-secs')  && (document.getElementById('cd-secs').textContent  = fmt(s));
  }
  update();
  setInterval(update, 1000);
}

// ── SCROLL PROGRESS BAR (top) ──
function initScrollProgress() {
  const fill = document.getElementById('scroll-progress-fill');
  if (!fill) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        fill.style.width = pct + '%';
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ── CHAPTER ROUTE NAV ──
function initChapterRoute() {
  const buttons = document.querySelectorAll('.chapter-route__btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function updateChapterRoute(activeId) {
  const buttons = document.querySelectorAll('.chapter-route__btn');
  buttons.forEach(btn => {
    if (btn.dataset.target === activeId) {
      btn.setAttribute('aria-current', 'step');
    } else {
      btn.removeAttribute('aria-current');
    }
  });
}

// ── SCROLL OBSERVER ──
function initScrollObserver() {
  const candidatoScenes = {
    'scene-lula':  'lula',
    'scene-flavio':'flavio_bolsonaro',
    'scene-zema':  'zema',
    'scene-caiado':'caiado',
    'scene-renan': 'renan_santos',
    'scene-cury':  'augusto_cury',
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        updateChapterRoute(id);
        updateMarquee(id);

        if (id === 'scene-panorama' && currentTheme !== 'dark') {
          currentTheme = 'dark';
          applyTheme('dark');
          setTimeout(() => Object.values(chartInstances).forEach(c => { if(c) c.update(); }), 100);
        } else if (['scene-saude', 'scene-seguranca', 'scene-educacao'].includes(id) && currentTheme !== 'light') {
          currentTheme = 'light';
          applyTheme('light');
          setTimeout(() => Object.values(chartInstances).forEach(c => { if(c) c.update(); }), 100);
        }

        // Color shifting for candidates
        if (candidatoScenes[id]) {
          const key = candidatoScenes[id];
          const c = ELECTION_DATA.candidatos[key];
          setAccentColor(c.cor_partido);
        } else {
          const isLight = document.documentElement.getAttribute('data-theme') === 'light';
          const defaultColor = isLight ? '#B8860B' : '#D4A843';
          if (!Object.keys(candidatoScenes).includes(id)) {
            setAccentColor(defaultColor);
          }
        }
      }
    });
  }, { threshold: 0.15 });

  // Fade-in animations
  const animIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scene').forEach(s => io.observe(s));
  document.querySelectorAll('.fade-in, .pilar-card, .timeline-item, .proposta-card').forEach(el => animIO.observe(el));

  // Lazy chart init
  const chartIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.dataset.chartId;
        if (id && !chartInstances[id]) initChart(id);
        chartIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('[data-chart-id]').forEach(el => chartIO.observe(el));
}

// ── DYNAMIC COLORS ──
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1],16)}, ${parseInt(result[2],16)}, ${parseInt(result[3],16)}` : '212,168,67';
}

function setAccentColor(hex) {
  const root = document.documentElement;
  root.style.setProperty('--accent-primary', hex);
  root.style.setProperty('--accent-rgb', hexToRgb(hex));
  root.style.setProperty('--accent-glow', `rgba(${hexToRgb(hex)}, 0.10)`);
  root.style.setProperty('--accent-secondary', hex);
}

// ── ANIMATED COUNTERS ──
function animateCounter(el, target, duration = 2000, decimals = 0, prefix = '', suffix = '') {
  if (!el) return;
  const start = performance.now();
  function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = easeOutExpo(progress);
    const val = target * eased;
    el.textContent = prefix + val.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function observeCounter(el, target, decimals = 0, suffix = '') {
  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounter(el, target, 2200, decimals, '', suffix);
      io.disconnect();
    }
  }, { threshold: 0.5 });
  io.observe(el);
}

// ── DATA SCENES ──
function buildCena1() {
  const D = ELECTION_DATA.cena_1_panorama;
  setText('stat-ipca', D.ipca_12m.valor);
  setText('stat-selic', D.selic.valor);
  setText('stat-desemprego', D.desemprego.valor);
  setText('stat-cesta', 'R$ ' + D.cesta_basica.valor);
  setText('stat-divida', D.divida_pib.valor + '%');

  const poderEl = document.getElementById('stat-poder');
  if (poderEl) observeCounter(poderEl, parseFloat(D.poder_compra_r100_2022.valor_equivalente_2026.replace(',', '.')), 2);
}

function buildCena2() {
  const D = ELECTION_DATA.cena_2_saude;
  setText('stat-medicos', D.medicos_por_mil_hab_brasil.valor);
  setText('stat-fila-sus', D.fila_sus_procedimentos.valor + ' mi');
  setText('stat-orcamento-saude', 'R$ ' + D.orcamento_saude_2026.valor + ' bi');
  setText('stat-leitos', D.leitos_sus_por_mil.valor);
}

function buildCena3() {
  const D = ELECTION_DATA.cena_3_seguranca;
  setText('stat-homicidios', D.homicidios_total.valor);
  setText('stat-taxa-hom', D.taxa_homicidios_100mil.valor);
  setText('stat-roubos', D.roubos_furtos.total);
}

function buildCena4() {
  const D = ELECTION_DATA.cena_4_educacao;
  setText('stat-pisa-mat', D.pisa.matematica);
  setText('stat-ideb-medio', D.ideb.ensino_medio);
  setText('stat-analfab', D.analfabetismo_funcional.valor + '%');
  const jovensEl = document.getElementById('stat-jovens-fora');
  if (jovensEl) observeCounter(jovensEl, 1.2, 1, ' mi');
}

// ── CANDIDATES ──
function buildCandidatos() {
  const mapa = {
    'lula': 'scene-lula',
    'flavio_bolsonaro': 'scene-flavio',
    'zema': 'scene-zema',
    'caiado': 'scene-caiado',
    'renan_santos': 'scene-renan',
    'augusto_cury': 'scene-cury',
  };
  CANDIDATOS_ORDEM.forEach(key => {
    const c = ELECTION_DATA.candidatos[key];
    const sceneEl = document.getElementById(mapa[key]);
    if (!sceneEl) return;
    populateCandidato(sceneEl, c, key);
  });
}

function populateCandidato(el, c, key) {
  const nameEl = el.querySelector('.candidate-name');
  if (nameEl) nameEl.textContent = c.nome_completo;

  const badgeEl = el.querySelector('.candidate-partido-badge');
  if (badgeEl) badgeEl.textContent = `${c.partido} • Urna ${c.numero_urna}`;

  setTextInEl(el, '.info-idade span', c.idade);
  setTextInEl(el, '.info-estado span', c.estado_natal);
  setTextInEl(el, '.info-cargo span', c.cargo_atual);
  setTextInEl(el, '.info-formacao span', c.formacao);
  setTextInEl(el, '.info-ideologia-txt', c.ideologia);

  const marker = el.querySelector('.ideologia-marker');
  if (marker) marker.style.left = c.ideologia_valor + '%';

  const bioEl = el.querySelector('.candidate-bio');
  if (bioEl) bioEl.textContent = c.bio;

  // Saiba Mais Button
  const btnSaibaMais = el.querySelector('.btn-saiba-mais');
  if (btnSaibaMais) {
    btnSaibaMais.onclick = () => { window.location.href = `${key}.html`; };
  }

  // Timeline
  const tl = el.querySelector('.timeline-horiz');
  if (tl) {
    tl.innerHTML = '';
    c.timeline.forEach(item => {
      const div = document.createElement('div');
      div.className = 'timeline-item';
      div.innerHTML = `<div class="timeline-dot"></div><div class="timeline-ano">${item.ano}</div><div class="timeline-evento">${item.evento}</div>`;
      tl.appendChild(div);
    });
  }

  // Proposals
  const pg = el.querySelector('.propostas-grid');
  if (pg) {
    pg.innerHTML = '';
    c.propostas.forEach(p => {
      const div = document.createElement('div');
      div.className = 'proposta-card';
      div.innerHTML = `<span class="proposta-icon">${p.icone}</span><div class="proposta-tema">${p.tema}</div><div class="proposta-desc">${p.descricao}</div>`;
      pg.appendChild(div);
    });
  }

  // Pros
  const pfEl = el.querySelector('.col-fortes');
  if (pfEl) {
    pfEl.innerHTML = '';
    c.pontos_fortes.forEach(p => {
      pfEl.innerHTML += `<div class="realidade-item"><span class="icon">✅</span><div><div>${p.fato}</div><div class="fonte">Fonte: ${p.fonte}</div></div></div>`;
    });
  }

  // Cons
  const paEl = el.querySelector('.col-atencao');
  if (paEl) {
    paEl.innerHTML = '';
    c.pontos_atencao.forEach(p => {
      paEl.innerHTML += `<div class="realidade-item"><span class="icon">⚠️</span><div><div>${p.fato}</div><div class="fonte">Fonte: ${p.fonte}</div></div></div>`;
    });
  }

  // Poll data
  const intEl = el.querySelector('.intencao');
  const rejEl = el.querySelector('.rejeicao');
  const intBar = el.querySelector('.bar-intencao');
  const rejBar = el.querySelector('.bar-rejeicao');
  const srcEl = el.querySelector('.pesquisa-source');

  if (intEl && c.pesquisa_eleitoral) {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounter(intEl, c.pesquisa_eleitoral.intencao_voto_1t_pct, 1500, 0, '', '%');
        animateCounter(rejEl, c.pesquisa_eleitoral.rejeicao_pct, 1500, 0, '', '%');
        if (intBar) setTimeout(() => intBar.style.width = c.pesquisa_eleitoral.intencao_voto_1t_pct + '%', 200);
        if (rejBar) setTimeout(() => rejBar.style.width = c.pesquisa_eleitoral.rejeicao_pct + '%', 200);
        io.disconnect();
      }
    }, { threshold: 0.1 });
    io.observe(intEl);
  }

  if (srcEl && c.pesquisa_eleitoral) {
    srcEl.innerHTML = `<strong>${c.pesquisa_eleitoral.instituto}</strong> — ${c.pesquisa_eleitoral.data_pesquisa}${c.pesquisa_eleitoral.outras_fontes ? `<div style="font-size:0.75rem;margin-top:4px;opacity:0.85;color:var(--text-secondary)">Comparativo: ${c.pesquisa_eleitoral.outras_fontes}</div>` : ''}`;
  }
}

// ── CHARTS ──
function getChartColors() {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  return {
    isDark,
    grid: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.06)',
    text: isDark ? '#A8A29E' : '#57534E',
    accent: getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim() || (isDark ? '#D4A843' : '#B8860B'),
    whiteOrDark: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)',
    whiteOrDarkBg: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
  };
}

function initChart(id) {
  const D1 = ELECTION_DATA.cena_1_panorama;
  const D2 = ELECTION_DATA.cena_2_saude;
  const D3 = ELECTION_DATA.cena_3_seguranca;
  const D4 = ELECTION_DATA.cena_4_educacao;
  const el = document.getElementById(id);
  if (!el) return;
  const ctx = el.getContext('2d');
  const c = getChartColors();

  const baseOpts = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { labels: { color: c.text, font: { family: 'Inter Tight', size: 11 } } },
      tooltip: { titleFont: { family: 'Inter Tight' }, bodyFont: { family: 'Inter Tight' } }
    },
    scales: {
      x: { ticks: { color: c.text, font: { family: 'Inter Tight', size: 10 } }, grid: { color: c.grid } },
      y: { ticks: { color: c.text, font: { family: 'Inter Tight', size: 10 } }, grid: { color: c.grid } }
    }
  };

  if (id === 'chart-divida') {
    chartInstances[id] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: D1.serie_divida_pib.map(d => d.ano),
        datasets: [{
          label: 'Dívida Bruta (% PIB)',
          data: D1.serie_divida_pib.map(d => d.valor),
          borderColor: c.accent,
          backgroundColor: c.accent + '14',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: c.accent,
          pointRadius: 3,
          pointHoverRadius: 6,
          borderWidth: 2,
        }]
      },
      options: { ...baseOpts, plugins: { ...baseOpts.plugins, legend: { display: false } } }
    });
  }

  if (id === 'chart-desemprego') {
    chartInstances[id] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: D1.serie_desemprego.map(d => d.ano),
        datasets: [{
          label: 'Taxa de Desemprego (%)',
          data: D1.serie_desemprego.map(d => d.valor),
          borderColor: c.isDark ? '#34D399' : '#10B981', // Emerald green
          backgroundColor: c.isDark ? 'rgba(52,211,153,0.06)' : 'rgba(16,185,129,0.06)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: c.isDark ? '#34D399' : '#10B981',
          pointRadius: 4,
          borderWidth: 2,
        }]
      },
      options: { ...baseOpts, plugins: { ...baseOpts.plugins, legend: { display: false } } }
    });
  }

  if (id === 'chart-falencias') {
    const dataSeries = D1.serie_falencias_rj || [
      { ano: 2018, rj: 1400, falencias: 1500 },
      { ano: 2019, rj: 1380, falencias: 1400 },
      { ano: 2020, rj: 1179, falencias: 978 },
      { ano: 2021, rj: 891, falencias: 730 },
      { ano: 2022, rj: 833, falencias: 866 },
      { ano: 2023, rj: 1405, falencias: 973 },
      { ano: 2024, rj: 1950, falencias: 1200 },
      { ano: 2025, rj: 2200, falencias: 1350 },
      { ano: 2026, rj: 2350, falencias: 1480 }
    ];

    chartInstances[id] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dataSeries.map(d => d.ano),
        datasets: [
          {
            label: 'Recuperações Judiciais',
            data: dataSeries.map(d => d.rj),
            borderColor: c.accent,
            backgroundColor: c.accent + '14',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: c.accent,
            pointRadius: 3,
            borderWidth: 2,
          },
          {
            label: 'Falências Decretadas',
            data: dataSeries.map(d => d.falencias),
            borderColor: c.isDark ? '#EF4444' : '#DC2626',
            backgroundColor: c.isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(220, 38, 38, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: c.isDark ? '#EF4444' : '#DC2626',
            pointRadius: 3,
            borderWidth: 2,
          }
        ]
      },
      options: { 
        ...baseOpts, 
        plugins: { 
          ...baseOpts.plugins, 
          legend: { 
            display: true,
            position: 'bottom',
            labels: { color: c.text, font: { family: 'Inter Tight', size: 11 } }
          } 
        } 
      }
    });
  }

  if (id === 'chart-medicos') {
    chartInstances[id] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: D2.medicos_por_mil_hab_comparativo.map(d => d.pais),
        datasets: [{
          label: 'Médicos por 1.000 hab.',
          data: D2.medicos_por_mil_hab_comparativo.map(d => d.valor),
          backgroundColor: D2.medicos_por_mil_hab_comparativo.map(d => d.pais === 'Brasil' ? c.accent : c.accent + '44'),
          borderRadius: 8,
        }]
      },
      options: { ...baseOpts, plugins: { ...baseOpts.plugins, legend: { display: false } } }
    });
  }

  if (id === 'chart-leitos') {
    chartInstances[id] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: D2.serie_leitos_sus.map(d => d.ano),
        datasets: [{
          label: 'Leitos por 1.000 hab.',
          data: D2.serie_leitos_sus.map(d => d.valor),
          borderColor: c.accent,
          backgroundColor: c.accent + '14',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: c.accent,
          pointRadius: 3,
          borderWidth: 2,
        }]
      },
      options: { ...baseOpts, plugins: { ...baseOpts.plugins, legend: { display: false } } }
    });
  }

  if (id === 'chart-fila') {
    chartInstances[id] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: D2.serie_fila_sus.map(d => d.ano),
        datasets: [{
          label: 'Fila do SUS (Milhões)',
          data: D2.serie_fila_sus.map(d => d.valor),
          borderColor: c.isDark ? '#F87171' : '#DC2626', // Red color for negative aspect
          backgroundColor: c.isDark ? 'rgba(248,113,113,0.06)' : 'rgba(220,38,38,0.06)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: c.isDark ? '#F87171' : '#DC2626',
          pointRadius: 4,
          borderWidth: 2,
        }]
      },
      options: { ...baseOpts, plugins: { ...baseOpts.plugins, legend: { display: false } } }
    });
  }

  if (id === 'chart-homicidios') {
    chartInstances[id] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: D3.serie_homicidios.map(d => d.ano),
        datasets: [{
          label: 'Homicídios/ano',
          data: D3.serie_homicidios.map(d => d.total),
          borderColor: c.isDark ? '#F87171' : '#DC2626',
          backgroundColor: c.isDark ? 'rgba(248,113,113,0.06)' : 'rgba(220,38,38,0.06)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: c.isDark ? '#F87171' : '#DC2626',
          pointRadius: 4,
          borderWidth: 2,
        }]
      },
      options: { ...baseOpts, plugins: { ...baseOpts.plugins, legend: { display: false } } }
    });
  }

  if (id === 'chart-roubos') {
    chartInstances[id] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: D3.serie_roubos.map(d => d.ano),
        datasets: [{
          label: 'Milhões de Registros',
          data: D3.serie_roubos.map(d => d.valor),
          backgroundColor: c.isDark ? 'rgba(212, 168, 67, 0.7)' : 'rgba(184, 134, 11, 0.7)',
          borderRadius: 6,
        }]
      },
      options: { ...baseOpts, plugins: { ...baseOpts.plugins, legend: { display: false } } }
    });
  }

  if (id === 'chart-faccoes') {
    chartInstances[id] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: D3.faccoes_criminosas.anos,
        datasets: [
          {
            label: 'PCC',
            data: D3.faccoes_criminosas.pcc,
            borderColor: c.isDark ? '#9CA3AF' : '#4B5563', // Cinza
            backgroundColor: c.isDark ? 'rgba(156, 163, 175, 0.1)' : 'rgba(75, 85, 99, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: c.isDark ? '#9CA3AF' : '#4B5563',
            pointRadius: 4,
            borderWidth: 2,
          },
          {
            label: 'Comando Vermelho',
            data: D3.faccoes_criminosas.cv,
            borderColor: c.isDark ? '#F87171' : '#DC2626', // Vermelho
            backgroundColor: c.isDark ? 'rgba(248, 113, 113, 0.1)' : 'rgba(220, 38, 38, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: c.isDark ? '#F87171' : '#DC2626',
            pointRadius: 4,
            borderWidth: 2,
          }
        ]
      },
      options: {
        ...baseOpts,
        plugins: { 
          ...baseOpts.plugins, 
          legend: { 
            display: true, 
            position: 'bottom',
            labels: { color: c.text, font: { family: 'Inter Tight', size: 11 } }
          } 
        },
        scales: {
          x: { ticks: { color: c.text, font: { family: 'Inter Tight', size: 10 } }, grid: { color: c.grid } },
          y: { 
            min: 0,
            max: 28, // Ajustado para 28 para não cortar a bolinha do valor 27 no topo
            ticks: { 
              color: c.text, 
              font: { family: 'Inter Tight', size: 10 },
              stepSize: 5
            }, 
            grid: { color: c.grid } 
          }
        },
        layout: {
          padding: {
            top: 10 // Adicionando um pequeno espaçamento no topo para garantir que o ponto não seja cortado
          }
        }
      }
    });
  }

  if (id === 'chart-educacao') {
    chartInstances[id] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['IDEB Fund. I', 'IDEB Fund. II', 'IDEB E. Médio'],
        datasets: [{
          label: 'IDEB Brasil',
          data: [D4.ideb.fund_anos_iniciais, D4.ideb.fund_anos_finais, D4.ideb.ensino_medio],
          backgroundColor: [c.accent + 'B3', c.accent + '80', c.accent + '59'],
          borderRadius: 8,
        },{
          label: 'Meta 2023',
          data: [7.0, 6.0, 5.2],
          backgroundColor: c.whiteOrDarkBg,
          borderColor: c.whiteOrDark,
          borderWidth: 2,
          borderRadius: 8,
        }]
      },
      options: { ...baseOpts }
    });
  }

  if (id === 'chart-analfabetismo') {
    chartInstances[id] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: D4.serie_analfabetismo_funcional.map(d => d.ano),
        datasets: [{
          label: 'Analfabetismo Funcional (%)',
          data: D4.serie_analfabetismo_funcional.map(d => d.valor),
          borderColor: c.isDark ? '#F59E0B' : '#D97706', // Laranja
          backgroundColor: c.isDark ? 'rgba(245, 158, 11, 0.06)' : 'rgba(217, 119, 6, 0.06)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: c.isDark ? '#F59E0B' : '#D97706',
          pointRadius: 4,
          borderWidth: 2,
        }]
      },
      options: { 
        ...baseOpts, 
        plugins: { ...baseOpts.plugins, legend: { display: false } },
        scales: {
          x: { ticks: { color: c.text, font: { family: 'Inter Tight', size: 10 } }, grid: { color: c.grid } },
          y: { 
            min: 20, // Define um mínimo para destacar melhor a variação na casa dos 20-30%
            ticks: { color: c.text, font: { family: 'Inter Tight', size: 10 } }, 
            grid: { color: c.grid } 
          }
        }
      }
    });
  }

  if (id === 'chart-evasao') {
    chartInstances[id] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: D4.serie_jovens_fora_escola.map(d => d.ano),
        datasets: [{
          label: 'Milhões de Jovens',
          data: D4.serie_jovens_fora_escola.map(d => d.valor),
          backgroundColor: c.isDark ? 'rgba(248, 113, 113, 0.7)' : 'rgba(220, 38, 38, 0.7)', // Vermelho (problema)
          borderRadius: 6,
        }]
      },
      options: { ...baseOpts, plugins: { ...baseOpts.plugins, legend: { display: false } } }
    });
  }

  if (id === 'chart-pesquisa') {
    const cands = CANDIDATOS_ORDEM.map(k => ELECTION_DATA.candidatos[k]);
    chartInstances[id] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: cands.map(c => c.nome_completo.split(' ')[0]),
        datasets: [
          {
            label: 'Intenção de Voto (%)',
            data: cands.map(c => c.pesquisa_eleitoral.intencao_voto_1t_pct),
            backgroundColor: cands.map(c => c.cor_partido + 'CC'),
            borderRadius: 8,
          },
          {
            label: 'Rejeição (%)',
            data: cands.map(c => c.pesquisa_eleitoral.rejeicao_pct),
            backgroundColor: cands.map(c => c.cor_partido + '44'),
            borderRadius: 8,
          }
        ]
      },
      options: { ...baseOpts }
    });
  }
}

// ── ENCERRAMENTO ──
function buildEncerramento() {
  const tbody = document.getElementById('comparativo-tbody');
  if (tbody) {
    const temas = [
      { label: '⭐ Prioridade 1', fn: c => `<span style="font-size:0.75rem; color:${c.cor_partido}; text-transform:uppercase; font-weight:800; display:block; margin-bottom:4px">${c.propostas[0].tema}</span>${c.propostas[0].descricao}` },
      { label: '⭐ Prioridade 2', fn: c => `<span style="font-size:0.75rem; color:${c.cor_partido}; text-transform:uppercase; font-weight:800; display:block; margin-bottom:4px">${c.propostas[1].tema}</span>${c.propostas[1].descricao}` },
      { label: '⭐ Prioridade 3', fn: c => `<span style="font-size:0.75rem; color:${c.cor_partido}; text-transform:uppercase; font-weight:800; display:block; margin-bottom:4px">${c.propostas[2].tema}</span>${c.propostas[2].descricao}` },
      { label: '⭐ Prioridade 4', fn: c => `<span style="font-size:0.75rem; color:${c.cor_partido}; text-transform:uppercase; font-weight:800; display:block; margin-bottom:4px">${c.propostas[3].tema}</span>${c.propostas[3].descricao}` },
      { label: '📊 Voto', fn: c => `<span class="pesquisa-pct-cell">${c.pesquisa_eleitoral.intencao_voto_1t_pct}%</span>` },
    ];

    const cands = CANDIDATOS_ORDEM.map(k => ELECTION_DATA.candidatos[k]);
    temas.forEach(tema => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td class="tema-cell">${tema.label}</td>` +
        cands.map(c => `<td>${tema.fn(c)}</td>`).join('');
      tbody.appendChild(tr);
    });
  }
}

// ── SHARING ──
window.shareWhatsApp = function() {
  const text = encodeURIComponent('🗳️ Eleições 2026: veja o guia interativo e imparcial sobre os candidatos!\n\nAcesse: ' + window.location.href);
  window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
};

window.shareTwitter = function() {
  const text = encodeURIComponent('🗳️ Eleições 2026 — Guia interativo e 100% imparcial dos candidatos à Presidência do Brasil. Dados reais, sem viés!');
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
};

window.copyLink = function() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const feedback = document.getElementById('copy-feedback');
    if (feedback) { feedback.classList.add('show'); setTimeout(() => feedback.classList.remove('show'), 2500); }
  });
};

// ── UTILS ──
function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function setTextInEl(parent, selector, val) {
  const el = parent.querySelector(selector);
  if (el) el.textContent = val;
}

function buildFooter() {} // Footer is static in HTML

// ── DYNAMIC MARQUEE ──
const MARQUEE_DATA = {
  default: [
    { text: "150 milhões de eleitores aptos", type: 'neutral' },
    { text: "6 candidatos confirmados", type: 'neutral' },
    { text: "1º turno em Outubro 2026", type: 'neutral' },
    { text: "Dados de Ago/2026", type: 'neutral' },
    { text: "100% imparcial e independente", type: 'neutral' },
    { text: "Fontes: IBGE, BCB, TSE, IPEA", type: 'neutral' },
    { text: "Voto consciente é voto informado", type: 'neutral' },
    { text: "Compare propostas sem viés", type: 'neutral' }
  ],
  'scene-panorama': [
    { text: "Inflação (IPCA) em 4,44%", type: 'bad' },
    { text: "Selic a 14,00%", type: 'bad' },
    { text: "Desemprego em 5,4%", type: 'good' },
    { text: "Dívida Pública 81,9% do PIB", type: 'bad' },
    { text: "Cesta Básica R$ 915,01", type: 'bad' }
  ],
  'scene-saude': [
    { text: "Médicos: 2,98 por 1.000 hab.", type: 'good' },
    { text: "Fila SUS: 2,1 milhões", type: 'bad' },
    { text: "Orçamento Saúde: R$ 231,5 bi", type: 'neutral' },
    { text: "Leitos SUS: 1,55 por 1.000 hab.", type: 'bad' }
  ],
  'scene-seguranca': [
    { text: "Mortes violentas em queda (2025)", type: 'good' },
    { text: "Taxa abaixo de 20/100 mil", type: 'good' },
    { text: "Roubos e furtos: 1,8 mi", type: 'bad' },
    { text: "Amapá lidera em taxas", type: 'bad' }
  ],
  'scene-educacao': [
    { text: "IDEB Ensino Médio: 4,3", type: 'bad' },
    { text: "Analfabetismo Funcional: 29%", type: 'bad' },
    { text: "Jovens fora da escola: 18%", type: 'bad' },
    { text: "Evasão Escolar: 5,2%", type: 'bad' }
  ]
};

function updateMarquee(sceneId) {
  const track = document.querySelector('.facts-marquee__track');
  const marquee = document.querySelector('.facts-marquee');
  if (!track || !marquee) return;
  
  const root = document.documentElement;
  const isDark = root.getAttribute('data-theme') !== 'light';
  
  const candidatoScenes = { 'scene-lula': 'lula', 'scene-flavio': 'flavio_bolsonaro', 'scene-zema': 'zema', 'scene-caiado': 'caiado', 'scene-renan': 'renan_santos', 'scene-cury': 'augusto_cury' };
  
  let data = [];
  if (sceneId === 'scene-saude') {
    marquee.style.setProperty('--marquee-color', '#10B981'); 
    data = MARQUEE_DATA['scene-saude'];
  } else if (sceneId === 'scene-seguranca') {
    marquee.style.setProperty('--marquee-color', '#3B82F6'); 
    data = MARQUEE_DATA['scene-seguranca'];
  } else if (sceneId === 'scene-educacao') {
    marquee.style.setProperty('--marquee-color', '#F59E0B'); 
    data = MARQUEE_DATA['scene-educacao'];
  } else if (sceneId === 'scene-panorama') {
    marquee.style.setProperty('--marquee-color', isDark ? '#D4A843' : '#B8860B'); 
    data = MARQUEE_DATA['scene-panorama'];
  } else if (candidatoScenes[sceneId]) {
    const c = ELECTION_DATA.candidatos[candidatoScenes[sceneId]];
    marquee.style.setProperty('--marquee-color', c.cor_partido);
    data = [
      { text: `CANDIDATO: ${c.nome_completo.toUpperCase()}`, type: 'neutral' },
      ...c.pontos_fortes.map(p => ({ text: p.fato, type: 'good' })),
      ...c.pontos_atencao.map(p => ({ text: p.fato, type: 'bad' }))
    ];
  } else {
    marquee.style.removeProperty('--marquee-color');
    data = MARQUEE_DATA[sceneId] || MARQUEE_DATA.default;
  }

  let html = '';
  for(let i = 0; i < 4; i++) {
    data.forEach(item => {
      let icon = '';
      if (item.type === 'good') icon = '<span style="color:#10B981;margin-right:8px;font-size:0.85em">▲</span>';
      else if (item.type === 'bad') icon = '<span style="color:#EF4444;margin-right:8px;font-size:0.85em">▼</span>';
      else icon = '<span style="margin-right:8px;font-size:0.85em;color:var(--marquee-color, var(--text-secondary))">■</span>';
      html += `<span class="facts-marquee__item">${icon}${item.text}</span>`;
    });
  }
  track.innerHTML = html;
}

// ── MODAL LOGIC REMOVED (Now using standalone pages) ──

// Drawer logic removed (Now using standalone pages)

