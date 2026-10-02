import { initComparator } from './candidate-view.mjs';
import { MACRO } from './macro-data.js?v=20261002_evidence1';

// ── GLOBAL STATE ──
let savedTheme;
try { savedTheme = localStorage.getItem('theme'); } catch {}
let currentTheme = savedTheme ||
  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');


// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  initNavMorph();
  initDoubleBezel();
  initEconomyDemonstrations();
  initScrollProgress();
  initChapterRoute();
  initComparator();
  initScrollObserver();
  initCountdown();
  startParticles();
});

function initEconomyDemonstrations() {
  const currency = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  const income = document.querySelector('[data-income-demo]');
  if (income) {
    const input = income.querySelector('input');
    input.disabled = false;
    const update = () => {
      const high = Number(input.value);
      income.querySelector('[data-high]').textContent = currency(high);
      income.querySelector('[data-mean]').textContent = currency((8000 + high) / 5);
    };
    input.addEventListener('input', update);
    update();
  }
  const work = document.querySelector('[data-work-demo]');
  if (work) {
    const input = work.querySelector('input');
    input.disabled = false;
    const update = () => {
      const leavers = Number(input.value);
      const seekers = 10 - leavers;
      const rate = (seekers / (90 + seekers) * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 });
      work.querySelector('[data-seekers]').textContent = seekers;
      work.querySelector('[data-leavers]').textContent = leavers;
      work.querySelector('[data-rate]').textContent = `${rate}%`;
      work.querySelector('[data-work-formula]').textContent = `${seekers} ÷ (90 + ${seekers}) × 100 = ${rate}%`;
    };
    input.addEventListener('input', update);
    update();
  }
}

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
  try { localStorage.setItem('theme', theme); } catch {}
}

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
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
  const target = new Date('2026-10-04T06:00:00-03:00');
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
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        updateChapterRoute(id);
        updateMarquee(id);

        if (id === 'scene-panorama' && currentTheme !== 'dark') {
          currentTheme = 'dark';
          applyTheme('dark');
        } else if (['scene-saude', 'scene-seguranca', 'scene-educacao'].includes(id) && currentTheme !== 'light') {
          currentTheme = 'light';
          applyTheme('light');
        }

        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        setAccentColor(isLight ? '#B8860B' : '#D4A843');
      }
    });
  // Uma seção longa deve continuar ativa quando cruza o centro da tela.
  }, { threshold: 0, rootMargin: '-40% 0px -40% 0px' });

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

// Macro indicators are rendered statically by generate_macro.mjs.

// ── SHARING ──
window.shareWhatsApp = function() {
  const text = encodeURIComponent('🗳️ Eleições 2026: veja o guia com propostas documentadas e indicadores sobre os candidatos!\n\nAcesse: ' + window.location.href);
  window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
};

window.shareTwitter = function() {
  const text = encodeURIComponent('🗳️ Eleições 2026 — Compare propostas documentadas, indicadores e limites das análises dos candidatos à Presidência do Brasil.');
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
    { text: "Planos e indicadores com fontes", type: 'neutral' },
    { text: "13 candidaturas na página de planos do TSE", type: 'neutral' },
    { text: "1º turno em Outubro 2026", type: 'neutral' },
    { text: "Indicadores macro revisados em 02/10/2026", type: 'neutral' },
    { text: "Projeto independente · análises identificadas", type: 'neutral' },
    { text: "Fontes: IBGE, BCB, TSE, IPEA", type: 'neutral' },
    { text: "Voto consciente é voto informado", type: 'neutral' },
    { text: "Compare propostas e seus limites", type: 'neutral' }
  ],
  ...Object.fromEntries(MACRO.map(scene => [scene.id, scene.stats.map(([label, value, unit, period]) => ({ text: `${label}: ${value} ${unit} · ${period}`, type: 'neutral' }))]))
};

function updateMarquee(sceneId) {
  const track = document.querySelector('.facts-marquee__track');
  const marquee = document.querySelector('.facts-marquee');
  if (!track || !marquee) return;
  
  const root = document.documentElement;
  const isDark = root.getAttribute('data-theme') !== 'light';
  
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
