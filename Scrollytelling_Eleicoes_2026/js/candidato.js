import { ELECTION_DATA } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const candidateId = urlParams.get('id') || document.body.getAttribute('data-candidate-id');
  
  if (!candidateId || !ELECTION_DATA.candidatos[candidateId]) {
    document.getElementById('candidato-main').innerHTML = `
      <div style="text-align:center; padding: 100px 0;">
        <h1>Candidato não encontrado</h1>
        <p>O perfil que você tentou acessar não existe ou o ID é inválido.</p>
        <a href="index.html" class="btn-magnetic" style="margin-top:24px;">Voltar ao início</a>
      </div>
    `;
    return;
  }

  const c = ELECTION_DATA.candidatos[candidateId];
  
  // Set theme colors
  document.documentElement.style.setProperty('--accent-primary', c.cor_partido);
  const rgb = hexToRgb(c.cor_partido);
  document.documentElement.style.setProperty('--accent-rgb', rgb);
  document.documentElement.style.setProperty('--accent-glow', `rgba(${rgb}, 0.15)`);

  document.title = `${c.nome_completo} — Eleições 2026`;

  // Determine avatar
  let avatarHtml = '';
  if (c.nome_completo.includes("Zema")) {
    avatarHtml = `<div class="candidato-photo-emoji">🇧🇷</div>`;
  } else if (c.nome_completo.includes("Cury")) {
    avatarHtml = `<div class="candidato-photo-emoji">🧠</div>`;
  } else {
    let src = `assets/${candidateId}.jpg`;
    if (candidateId === 'lula' || candidateId === 'flavio_bolsonaro') {
       src = `assets/${candidateId === 'flavio_bolsonaro' ? 'flavio' : 'lula'}.jpg`;
    } else if (candidateId === 'renan_santos') {
       src = 'assets/renan.jpg';
    } else if (candidateId === 'augusto_cury') {
       src = 'assets/cury.jpg';
    }
    avatarHtml = `<img src="${src}?v=final" alt="${c.nome_completo}" class="candidato-photo">`;
  }

  const main = document.getElementById('candidato-main');
  
  main.innerHTML = `
    <div class="candidato-hero fade-in">
      <div class="candidato-photo-wrapper">
        ${avatarHtml}
      </div>
      <div class="candidato-header-info">
        <h1 class="candidato-title">${c.nome_completo}</h1>
        <div class="candidato-subtitle" style="color: ${c.cor_partido}">${c.partido} • Urna ${c.numero_urna}</div>
        
        <div class="candidato-stats-grid">
          <div class="candidato-stat">
            <div class="candidato-stat-label">Idade</div>
            <div class="candidato-stat-value">${c.idade}</div>
          </div>
          <div class="candidato-stat">
            <div class="candidato-stat-label">Estado</div>
            <div class="candidato-stat-value">${c.estado_natal}</div>
          </div>
          <div class="candidato-stat">
            <div class="candidato-stat-label">Cargo Atual</div>
            <div class="candidato-stat-value">${c.cargo_atual}</div>
          </div>
          <div class="candidato-stat">
            <div class="candidato-stat-label">Formação</div>
            <div class="candidato-stat-value">${c.formacao}</div>
          </div>
          <div class="candidato-stat">
            <div class="candidato-stat-label">Ideologia</div>
            <div class="candidato-stat-value">${c.ideologia}</div>
          </div>
        </div>

        <div class="ideologia-bar-wrap" style="max-width:100%; margin-top:16px;">
          <div class="ideologia-label-row"><span>Esquerda</span><span>Centro</span><span>Direita</span></div>
          <div class="ideologia-bar">
            <div class="ideologia-marker" style="left:${c.ideologia_valor}%; background:${c.cor_partido}"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-block fade-in">
      <h3>Trajetória e Perfil</h3>
      <div class="bento-card text-content">
        <p>${c.detalhes?.biografia_expandida || c.bio}</p>
      </div>
    </div>

    <div class="bento-grid fade-in">
      <div class="section-block" style="margin-bottom:0">
        <h3>Plano de Governo</h3>
        <div class="bento-card text-content" style="height:100%">
          <p>${c.detalhes?.plano_governo || "Não especificado."}</p>
        </div>
      </div>
      <div class="section-block" style="margin-bottom:0">
        <h3>Controvérsias</h3>
        <div class="bento-card text-content" style="height:100%">
          <p>${c.detalhes?.controversias || "Nenhuma registrada."}</p>
        </div>
      </div>
    </div>

    <div class="section-block fade-in" style="margin-top:64px;">
      <h3>Propostas Principais</h3>
      <div class="propostas-list">
        ${c.propostas.map(p => `
          <div class="proposta-item">
            <div class="proposta-item-icon">${p.icone}</div>
            <div class="proposta-item-content">
              <h4>${p.tema}</h4>
              <p>${p.descricao}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    
    <div class="section-block fade-in">
      <h3>Teste de Realidade</h3>
      <div class="realidade-grid" style="grid-template-columns: 1fr 1fr; gap: 24px; display: grid;">
        <div class="bento-card" style="padding: 24px;">
          <h4 style="color: #10B981; margin-bottom: 16px; font-family: 'Outfit', sans-serif;">✅ Pontos Factuais Favoráveis</h4>
          <div class="propostas-list">
            ${c.pontos_fortes.map(p => `
              <div style="margin-bottom: 12px; font-size: 0.95rem; color: var(--text-secondary);">
                <div>${p.fato}</div>
                <div style="font-size:0.8rem; opacity:0.7; margin-top:4px;">Fonte: ${p.fonte}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="bento-card" style="padding: 24px;">
          <h4 style="color: #EF4444; margin-bottom: 16px; font-family: 'Outfit', sans-serif;">⚠️ Pontos de Atenção</h4>
          <div class="propostas-list">
            ${c.pontos_atencao.map(p => `
              <div style="margin-bottom: 12px; font-size: 0.95rem; color: var(--text-secondary);">
                <div>${p.fato}</div>
                <div style="font-size:0.8rem; opacity:0.7; margin-top:4px;">Fonte: ${p.fonte}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <div class="section-block fade-in">
      <h3>Linha do Tempo</h3>
      <div class="bento-card">
        <div class="timeline-horiz" style="justify-content: flex-start; gap: 32px; overflow-x: auto; padding-bottom: 16px;">
          ${c.timeline.map(item => `
            <div class="timeline-item fade-in" style="min-width: 150px; flex: 1; transition-delay: 0.2s;">
              <div class="timeline-dot" style="background: ${c.cor_partido}; box-shadow: 0 0 10px ${c.cor_partido}"></div>
              <div class="timeline-ano" style="color: var(--text-primary); font-weight: 800; font-family: 'Outfit', sans-serif; font-size: 1.2rem; margin: 12px 0 8px;">${item.ano}</div>
              <div class="timeline-evento" style="font-size: 0.9rem; color: var(--text-secondary);">${item.evento}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Apply simple fade-in effect to elements
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 100);
      
      // Default initial state
      if (!el.hasAttribute('style')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      }
    });
  }, 50);
});

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1],16)}, ${parseInt(result[2],16)}, ${parseInt(result[3],16)}` : '212,168,67';
}
