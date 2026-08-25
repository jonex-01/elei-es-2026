# 🗳️ Scrollytelling Eleições 2026

Site interativo e imparcial sobre as Eleições Presidenciais Brasileiras de 2026.

## Como rodar localmente

```bash
# Opção 1 (recomendado — npx, sem instalar nada)
npx serve .

# Opção 2 (Python)
python -m http.server 8080

# Opção 3
# Abrir index.html diretamente no navegador Chrome/Edge/Firefox
```

Acesse: `http://localhost:3000`

## Estrutura

```
Scrollytelling_Eleicoes_2026/
├── index.html          (página principal)
├── css/styles.css      (design system completo)
├── js/
│   ├── app.js          (orquestrador: countdown, cores, gráficos, candidatos)
│   └── data.js         (dados eleitorais de agosto/2026)
└── README.md
```

## Funcionalidades

- 🎨 **Sistema "Chameleon"** — cores mudam conforme o candidato em foco
- ⏱️ **Countdown em tempo real** para o 1º turno (4/Out/2026)
- 📊 **4 gráficos animados** (dívida, médicos, homicídios, IDEB)
- 🌙 **Toggle Dark/Light mode** com persistência
- 📍 **Barra de progresso lateral** com 13 dots clicáveis
- 📱 **Responsivo** — mobile a desktop
- 🔗 **Compartilhamento** WhatsApp, Twitter/X e copiar link
- ♿ **Acessível** — aria-labels, skip link, contraste AA

## Dados (agosto/2026)

- Fontes: IBGE, BCB, TSE, FBSP, INEP, OCDE, CFM, DIEESE
- Pesquisas: Quaest/Genial (Agosto/2026)
- Projeto 100% imparcial — sem vínculo com partidos ou candidatos
