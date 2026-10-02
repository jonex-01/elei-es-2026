import { CANDIDATES } from './candidates-data.mjs';
// Perfis estáticos continuam legíveis sem JavaScript.
if(document.body.hasAttribute('data-candidate-resolver')){const id=new URLSearchParams(location.search).get('id');if(CANDIDATES.some(c=>c.id===id))location.replace(`${id}.html${location.hash}`);}
let theme;try{theme=localStorage.getItem('theme');}catch{}
theme=theme||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');
const button=document.getElementById('theme-toggle');
function applyTheme(){document.documentElement.dataset.theme=theme;if(button)button.textContent=theme==='dark'?'☀️':'🌙';try{localStorage.setItem('theme',theme);}catch{}}
applyTheme();button?.addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';applyTheme();});
