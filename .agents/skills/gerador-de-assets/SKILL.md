---
name: gerador-de-assets
description: >-
  Use this skill when you need to generate images or videos for the website (especially for the Scrollytelling_Eleicoes_2026 project). This skill teaches you how to invoke local Python scripts that interact with Imagen 3, Veo 3, and Higgsfield APIs to generate assets and save them locally.
---

# Gerador de Assets (Imagens e Vídeos)

Você é responsável por criar assets visuais (imagens e vídeos) para popular o site de scrollytelling. Para que a mídia não seja gerada em tempo real (o que consumiria recursos e causaria demora na experiência do usuário final), você deve gerar todos os assets durante o desenvolvimento e salvá-los localmente na pasta `Scrollytelling_Eleicoes_2026/assets/`.

## Preparação (Antes de rodar os scripts)

1. Certifique-se de que a pasta `Scrollytelling_Eleicoes_2026/assets/` existe. Caso não exista, crie-a.
2. Certifique-se de que o usuário possui as variáveis de ambiente necessárias num arquivo `.env` na raiz do projeto (como `GEMINI_API_KEY` ou credenciais do Vertex AI e `HIGGSFIELD_API_KEY`).
3. Certifique-se de que as dependências Python estão instaladas. Você pode instalar rodando:
   `pip install -r .agents/skills/gerador-de-assets/scripts/requirements.txt`

## 🖼️ Gerando Imagens (Imagen 3)

Use a API do Imagen 3 (via Vertex AI / Gemini) para gerar elementos visuais, fotos de candidatos falsos se necessário, fundos estilizados (como a urna eletrônica) e gráficos artísticos.

**Comando:**
```bash
python .agents/skills/gerador-de-assets/scripts/imagen3.py --prompt "Uma urna eletrônica futurista, neon verde brilhante, cyber, dark mode" --output "Scrollytelling_Eleicoes_2026/assets/urna-hero.png"
```

## 🎥 Gerando Vídeos (Veo 3)

Use a API do Veo 3 para gerar pequenos loops de vídeo, como partículas flutuantes, animações de fundo ou fundos com transições dramáticas.

**Comando:**
```bash
python .agents/skills/gerador-de-assets/scripts/veo3.py --prompt "Loop de partículas abstratas em tom vermelho vibrante, cinemático, câmera lenta" --output "Scrollytelling_Eleicoes_2026/assets/bg-particulas.mp4"
```

## 🎬 Gerando Vídeos (Higgsfield)

O Higgsfield agora está integrado de forma nativa através do protocolo MCP! Você terá as ferramentas do Higgsfield diretamente disponíveis no seu ambiente. Sempre que precisar gerar um vídeo com essa tecnologia, use as ferramentas MCP do Higgsfield (como `generate_video` ou similar, fornecidas pelo servidor) ao invés de rodar scripts locais.

## Validação e Próximos Passos
Após executar o script de geração:
1. Verifique se o arquivo foi criado com sucesso no diretório de destino.
2. Atualize o arquivo `index.html` e `styles.css` para referenciar o asset recém-criado usando caminhos relativos (ex: `assets/urna-hero.png`).
