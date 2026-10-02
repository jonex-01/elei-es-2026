import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { CANDIDATES, TOPICS, REVIEW_DATE, ROSTER_URL, DOCUMENT_NOTES } from './js/candidates-data.mjs';
import { directoryHtml, compareHtml, profileHtml, escapeHtml } from './js/candidate-view.mjs';
const dir=fileURLToPath(new URL('.',import.meta.url));
const page=(title,body)=>`<!DOCTYPE html>
<html lang="pt-BR" data-theme="dark"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)} — Eleições 2026</title><meta name="description" content="Propostas documentadas em economia, saúde, educação e segurança, com fontes, explicações e limites da análise.">
<link rel="stylesheet" href="css/styles.css?v=20261002_banners3"><link rel="stylesheet" href="css/candidatos.css?v=20261002_banners3"></head>
<body><a class="sr-only" href="#candidato-main">Pular para o conteúdo</a><nav id="navbar" class="profile-navbar" aria-label="Navegação do perfil"><a class="nav-brand" href="index.html#scene-candidatos">← Voltar às candidaturas</a><button id="theme-toggle" aria-label="Alternar tema claro ou escuro">☀️</button></nav>
${body}<footer class="fontes-footer"><p>Projeto independente, sem vínculo com partidos ou candidatos. Consulta de propostas: ${REVIEW_DATE}. Análises são identificadas e seus limites estão descritos no método.</p></footer><script type="module" src="js/candidato.js?v=20261002_banners3"></script></body></html>\n`;
for(const c of CANDIDATES)writeFileSync(dir+c.id+'.html',page(c.name,profileHtml(c)));
writeFileSync(dir+'candidato.html',page('Escolha uma candidatura',`<main id="candidato-main" class="candidate-profile"><h1>Escolha uma candidatura</h1><p>Use os perfis documentados abaixo.</p><ul>${CANDIDATES.map(c=>`<li><a href="${c.id}.html">${escapeHtml(c.name)} · ${c.party}</a></li>`).join('')}</ul></main>`).replace('<body>','<body data-candidate-resolver>'));
let index=readFileSync(dir+'index.html','utf8');
const start='<!-- CANDIDATES_DOCUMENTED_START -->',end='<!-- CANDIDATES_DOCUMENTED_END -->',html=start+'\n'+directoryHtml()+'\n'+compareHtml()+'\n'+end;
if(index.includes(start))index=index.slice(0,index.indexOf(start))+html+index.slice(index.indexOf(end)+end.length);
else{const candidateStart=index.lastIndexOf('<!-- ═════════',index.indexOf('<!-- LULA -->'));const candidateEnd=index.indexOf('<!-- CANDIDATE MODAL OVERLAY REMOVED -->');if(candidateStart<0||candidateEnd<0)throw Error('Marcadores da seção de candidatos ausentes');index=index.slice(0,candidateStart)+html+'\n\n'+index.slice(candidateEnd);}
writeFileSync(dir+'index.html',index);mkdirSync(dir+'dados',{recursive:true});
writeFileSync(dir+'dados/candidatos-2026-10-02.json',JSON.stringify({reviewDate:REVIEW_DATE,rosterUrl:ROSTER_URL,scope:'13 candidaturas listadas na página de planos do TSE; situação do registro não auditada',method:'Resumos do índice temático; mecanismos e contrapontos são análise do projeto. Custo e compatibilidade jurídica não auditados integralmente; isto não comprova ausência no plano.',topics:TOPICS,candidates:CANDIDATES,additionalPdfPassages:DOCUMENT_NOTES},null,2)+'\n');
console.log(`Gerados ${CANDIDATES.length} perfis e ${CANDIDATES.length*Object.keys(TOPICS).length} recortes temáticos.`);
