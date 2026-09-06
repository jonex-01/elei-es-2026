import { ELECTION_DATA } from './data.js?v=20260906_tse_v5';
import { PHASE2_DATA } from './data_fase2.js?v=20260906_fase2_v4';

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
  const p2 = PHASE2_DATA.candidatos?.[candidateId]; // dados fase 2
  
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

        ${c.pesquisa_eleitoral ? `
        <div class="candidato-pesquisa-box" style="margin-top:20px; padding:14px 18px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:16px;">
          <div style="display:flex; align-items:center; gap:20px;">
            <div>
              <span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); display:block; font-weight:700;">Intenção 1ºT</span>
              <strong style="font-size:1.35rem; color:${c.cor_partido}; font-weight:800;">${c.pesquisa_eleitoral.intencao_voto_1t_pct}%</strong>
            </div>
            <div style="width:1px; height:32px; background:rgba(255,255,255,0.12);"></div>
            <div>
              <span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); display:block; font-weight:700;">Rejeição</span>
              <strong style="font-size:1.35rem; color:#F87171; font-weight:800;">${c.pesquisa_eleitoral.rejeicao_pct}%</strong>
            </div>
          </div>
          <div style="font-size:0.8rem; color:var(--text-secondary); text-align:right;">
            <div><span style="color:var(--text-muted); font-size:0.72rem; text-transform:uppercase; font-weight:700; letter-spacing:0.05em; display:block;">Fonte Oficial</span><strong>${c.pesquisa_eleitoral.instituto}</strong> (${c.pesquisa_eleitoral.data_pesquisa})</div>
            ${c.pesquisa_eleitoral.outras_fontes ? `<div style="font-size:0.75rem; opacity:0.85; margin-top:2px;">${c.pesquisa_eleitoral.outras_fontes}</div>` : ''}
          </div>
        </div>
        ` : ''}
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

    ${renderSabatina(p2)}

    ${renderPlanoDetalhado(p2)}
    
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

  // Initialize Chart.js donut for sabatina
  if (p2?.sabatina_globo?.fact_check) {
    initDonutChart(p2.sabatina_globo.fact_check);
  }

  // Setup toggle button listeners for accordions
  document.querySelectorAll('.btn-toggle-detalhes').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const eixoEl = e.target.closest('.plano-eixo');
      if (!eixoEl) return;
      const subDetails = eixoEl.querySelectorAll('.proposta-detalhe');
      const anyClosed = Array.from(subDetails).some(d => !d.open);
      subDetails.forEach(d => { d.open = anyClosed; });
      e.target.textContent = anyClosed ? 'Recolher Todos os Detalhes' : 'Expandir Todos os Detalhes';
    });
  });

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

// ═══════════════════════════════════════════
// RENDERIZAÇÃO: SABATINA DA GLOBO
// ═══════════════════════════════════════════

function renderSabatina(p2) {
  if (!p2?.sabatina_globo) return '';
  const sab = p2.sabatina_globo;
  const fc = sab.fact_check;

  const formatDate = (d) => {
    if (!d || d.includes('[')) return d || '';
    const parts = d.split('-');
    if (parts.length === 3) {
      const months = ['','Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
      return `${parts[2]} ${months[parseInt(parts[1])]} ${parts[0]}`;
    }
    return d;
  };

  const categories = [
    { key: 'verdades', label: '✅ Verdades', color: '#10B981' },
    { key: 'mentiras', label: '❌ Mentiras', color: '#EF4444' },
    { key: 'meias_verdades', label: '⚠️ Meias-verdades', color: '#F59E0B' },
    { key: 'nao_auditaveis', label: '🔘 Não-auditáveis', color: '#6B7280' }
  ];

  const legendHtml = categories.map(cat => {
    const data = fc[cat.key];
    return `
      <div class="legenda-item">
        <span class="legenda-cor" style="background:${cat.color}"></span>
        <span>${cat.label.split(' ').slice(1).join(' ')}</span>
        <span class="legenda-valor">${data.quantidade} (${data.percentual}%)</span>
      </div>
    `;
  }).join('');

  const exemplosHtml = categories.map(cat => {
    const data = fc[cat.key];
    if (!data.exemplos || data.exemplos.length === 0) return '';
    return `
      <details class="factcheck-category">
        <summary>
          <span class="factcheck-dot" style="background:${cat.color}"></span>
          ${cat.label} (${data.quantidade})
          <span class="factcheck-chevron">▼</span>
        </summary>
        <div class="factcheck-examples-list">
          ${data.exemplos.map(ex => `
            <div class="factcheck-example" style="border-left-color: ${cat.color}">
              <blockquote>"${ex.afirmacao}"</blockquote>
              <p class="verificacao">${ex.verificacao}</p>
              <cite>Fonte: ${ex.fonte_verificacao}${ex.url_fonte ? ` — <a href="${ex.url_fonte}" target="_blank" rel="noopener">ver ↗</a>` : ''}</cite>
            </div>
          `).join('')}
        </div>
      </details>
    `;
  }).join('');

  return `
    <div class="section-block fade-in" id="secao-sabatina">
      <h3>📺 Sabatina da TV Globo — Fact-Check</h3>
      
      <div class="sabatina-container">
        <div class="sabatina-resumo bento-card">
          <div class="sabatina-meta">
            <span class="sabatina-badge">${sab.programa}</span>
            <span>${formatDate(sab.data_sabatina)} • ${sab.duracao_minutos} min</span>
          </div>
          <p class="text-content">${sab.resumo}</p>
          <div class="sabatina-temas">
            ${(sab.temas_abordados || []).map(t => `<span>${t}</span>`).join('')}
          </div>
        </div>

        <div class="sabatina-chart bento-card">
          <div class="sabatina-chart-title">Classificação das Afirmações</div>
          <div class="sabatina-chart-total">${fc.total_afirmacoes_verificadas} afirmações verificadas</div>
          <canvas id="donut-factcheck"></canvas>
          <div class="sabatina-legenda">
            ${legendHtml}
          </div>
        </div>
      </div>

      <div class="factcheck-exemplos">
        ${exemplosHtml}
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════
// RENDERIZAÇÃO: PLANO DE GOVERNO DETALHADO
// ═══════════════════════════════════════════

function renderPlanoDetalhado(p2) {
  if (!p2?.plano_governo) return '';
  const pg = p2.plano_governo;

  const docInfo = pg.documento_oficial;
  const formatTSEDate = (d) => {
    if (!d || d.includes('[')) return d || '';
    return d.split('-').reverse().join('/');
  };

  const eixosHtml = (pg.eixos || []).map((eixo, eixoIdx) => {
    const propostasHtml = (eixo.propostas || []).map((prop, propIdx) => {
      if (typeof prop === 'string') return ''; // Skip placeholder strings

      // A primeira proposta do primeiro eixo já exibe Diagnóstico e Viabilidade abertos para impacto imediato
      const isHeroProp = (eixoIdx === 0 && propIdx === 0);
      const openDiag = isHeroProp ? 'open' : '';
      const openMec = isHeroProp ? 'open' : '';
      const openTv = isHeroProp ? 'open' : '';

      // Painel de viabilidade
      const pv = prop.painel_viabilidade || {};
      const viabClasses = {
        'BAIXO': 'viab-baixo', 'BAIXA': 'viab-baixa',
        'MÉDIO': 'viab-medio', 'MÉDIA': 'viab-media',
        'ALTO': 'viab-alto', 'ALTA': 'viab-alta',
        'SIM': 'viab-prec-sim', 'PARCIAL': 'viab-prec-parcial', 'NÃO': 'viab-prec-nao'
      };

      const painelHtml = `
        <div class="viabilidade-painel">
          <div class="viabilidade-item">
            <span class="viab-label">💰 Custo Fiscal</span>
            <span class="viab-badge ${viabClasses[pv.custo_fiscal] || ''}">${pv.custo_fiscal || '—'}</span>
          </div>
          <div class="viabilidade-item">
            <span class="viab-label">🏛️ Complexidade</span>
            <span class="viab-badge ${viabClasses[pv.complexidade_politica] || ''}">${pv.complexidade_politica || '—'}</span>
          </div>
          <div class="viabilidade-item">
            <span class="viab-label">🌍 Precedente</span>
            <span class="viab-badge ${viabClasses[pv.precedente_internacional] || ''}">${pv.precedente_internacional || '—'}</span>
          </div>
        </div>
      `;

      // Diagnóstico
      const diag = prop.diagnostico || {};
      const diagDados = (diag.dados || []).map(d => `
        <tr><td>${d.indicador}</td><td><strong>${d.valor}</strong></td><td>${d.data_ref}</td><td>${d.fonte}</td></tr>
      `).join('');

      const diagHtml = `
        <details class="proposta-detalhe" ${openDiag}>
          <summary>📊 Diagnóstico e Fatos</summary>
          <div class="proposta-detalhe-content">
            <p>${diag.texto || ''}</p>
            ${diagDados ? `
              <table class="dados-table">
                <thead><tr><th>Indicador</th><th>Valor</th><th>Ref.</th><th>Fonte</th></tr></thead>
                <tbody>${diagDados}</tbody>
              </table>
            ` : ''}
          </div>
        </details>
      `;

      // Mecanismo
      const mec = prop.mecanismo || {};
      const mecItens = (mec.itens || []).map(item => `
        <div class="mecanismo-item">
          <strong>${item.acao}</strong>
          <span class="mec-badge">${item.instrumento_legal}</span>
          <span>💵 ${item.valor_estimado}</span>
          <span>⏱️ ${item.prazo_candidato}</span>
        </div>
      `).join('');

      const mecHtml = `
        <details class="proposta-detalhe" ${openMec}>
          <summary>⚙️ Mecanismo de Implementação</summary>
          <div class="proposta-detalhe-content">
            <p>${mec.texto || ''}</p>
            ${mecItens}
          </div>
        </details>
      `;

      // Referências internacionais
      const refs = prop.referencias_internacionais || {};
      const refFunc = refs.onde_funcionou || {};
      const refFalhou = refs.onde_falhou || {};

      const refsHtml = `
        <details class="proposta-detalhe">
          <summary>🌍 Referências Internacionais</summary>
          <div class="proposta-detalhe-content">
            <div class="ref-grid">
              <div class="ref-card ref-positiva">
                <div class="ref-header">📈 Onde Funcionou: ${refFunc.pais || 'N/A'}</div>
                <div class="ref-periodo">${refFunc.periodo || ''}</div>
                <p>${refFunc.descricao || ''}</p>
                ${refFunc.dados_resultado ? `<div class="ref-resultado">${refFunc.dados_resultado}</div>` : ''}
                <cite>${refFunc.fonte || ''}</cite>
              </div>
              <div class="ref-card ref-negativa">
                <div class="ref-header">📉 Onde Falhou: ${refFalhou.pais || 'N/A'}</div>
                <div class="ref-periodo">${refFalhou.periodo || ''}</div>
                <p>${refFalhou.descricao || ''}</p>
                ${refFalhou.dados_resultado ? `<div class="ref-resultado">${refFalhou.dados_resultado}</div>` : ''}
                <cite>${refFalhou.fonte || ''}</cite>
              </div>
            </div>
          </div>
        </details>
      `;

      // Teste de viabilidade
      const tv = prop.teste_viabilidade || {};
      const tvHtml = `
        <details class="proposta-detalhe" ${openTv}>
          <summary>🔍 Teste de Viabilidade Crítica</summary>
          <div class="proposta-detalhe-content">
            <div class="viab-grid">
              <div class="viab-question">
                <h5>💰 Financiamento</h5>
                <p>${tv.financiamento || 'Não especificado.'}</p>
              </div>
              <div class="viab-question">
                <h5>🏛️ Aprovação Política</h5>
                <p>${tv.aprovacao_politica || 'Não especificado.'}</p>
              </div>
              <div class="viab-question">
                <h5>⏱️ Prazo Realista</h5>
                <p>${tv.prazo_realista || 'Não especificado.'}</p>
              </div>
              <div class="viab-question">
                <h5>⚠️ Riscos e Objeções</h5>
                <p>${tv.riscos_objecoes || 'Não especificado.'}</p>
              </div>
            </div>
          </div>
        </details>
      `;

      // Fontes
      const fontes = (prop.fontes || []).map(f => `${f.instituicao} — ${f.documento} (${f.data})`).join(' | ');

      return `
        <div class="proposta-card visible">
          <h4 class="proposta-titulo">${prop.titulo}</h4>
          <p class="proposta-resumo">${prop.resumo}</p>
          ${painelHtml}
          ${diagHtml}
          ${mecHtml}
          ${refsHtml}
          ${tvHtml}
          <div class="proposta-fontes">
            <small>Fontes: ${fontes || 'Não especificadas'}</small>
          </div>
        </div>
      `;
    }).join('');

    return `
      <details class="plano-eixo" ${eixoIdx === 0 ? 'open' : ''}>
        <summary class="plano-eixo-header">
          <span class="eixo-icone">${eixo.icone || '📌'}</span>
          <span class="eixo-nome">${eixo.nome}</span>
          ${eixo.tipo === 'especifico' ? '<span class="eixo-tipo-badge">Proposta Específica</span>' : ''}
          <span class="eixo-chevron">▼</span>
        </summary>
        <div class="eixo-content">
          <div class="eixo-resumo-bar">
            <p class="eixo-resumo">${eixo.resumo_executivo || ''}</p>
            <button type="button" class="btn-toggle-detalhes">Expandir Todos os Detalhes</button>
          </div>
          ${propostasHtml}
        </div>
      </details>
    `;
  }).join('');

  return `
    <div class="section-block fade-in" id="secao-plano-detalhado">
      <h3>📋 Plano de Governo — Análise Detalhada</h3>

      <div class="plano-doc-info bento-card">
        <div class="plano-doc-nome">${docInfo?.nome || 'Plano de Governo'}</div>
        <div class="plano-doc-meta">
          ${docInfo?.paginas ? docInfo.paginas + ' páginas' : ''} • 
          Registrado em ${formatTSEDate(docInfo?.data_registro_tse)} • 
          <a href="${docInfo?.url_tse || '#'}" target="_blank" rel="noopener">Ver no TSE ↗</a>
        </div>
        <p class="text-content">${pg.resumo_executivo_geral || ''}</p>
      </div>

      <div class="plano-eixos">
        ${eixosHtml}
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════
// CHART.JS — DONUT CHART
// ═══════════════════════════════════════════

function initDonutChart(fc) {
  const canvas = document.getElementById('donut-factcheck');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Verdades', 'Mentiras', 'Meias-verdades', 'Não-auditáveis'],
      datasets: [{
        data: [
          fc.verdades.percentual,
          fc.mentiras.percentual,
          fc.meias_verdades.percentual,
          fc.nao_auditaveis.percentual
        ],
        backgroundColor: ['#10B981', '#EF4444', '#F59E0B', '#6B7280'],
        borderColor: 'transparent',
        borderWidth: 0,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutout: '65%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(0,0,0,0.85)',
          titleFont: { family: 'Outfit' },
          bodyFont: { family: 'Lora' },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: (context) => `${context.label}: ${context.raw}%`
          }
        }
      },
      animation: {
        animateRotate: true,
        duration: 1200,
        easing: 'easeOutQuart'
      }
    }
  });
}

// ═══════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1],16)}, ${parseInt(result[2],16)}, ${parseInt(result[3],16)}` : '212,168,67';
}
