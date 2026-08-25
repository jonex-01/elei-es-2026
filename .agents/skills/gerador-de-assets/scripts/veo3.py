import argparse
import os
import sys
import time
from dotenv import load_dotenv

load_dotenv()

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("Erro: A biblioteca google-genai não está instalada. Execute: pip install -r requirements.txt")
    sys.exit(1)

def generate_video(prompt, output_path):
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Erro: A variável de ambiente GEMINI_API_KEY não foi encontrada no arquivo .env")
        sys.exit(1)

    print(f"Gerando vídeo com o Veo via AI Studio...\nPrompt: {prompt}\nDestino: {output_path}")
    print("Aguarde, a geração de vídeo pode demorar alguns minutos...")
    
    try:
        # Inicializa o cliente GenAI com a chave do AI Studio
        client = genai.Client(api_key=api_key)

        # O modelo exato pode variar dependendo do seu acesso no AI Studio.
        # Nomes comuns no preview são 'veo-2.0-generate-001' ou similares.
        # Substitua caso você tenha recebido um nome de modelo diferente.
        model_name = 'veo-2.0-generate-001' 
        
        # Chama a API de geração de vídeo.
        # Nota: A API de vídeo costuma ser assíncrona, portanto o SDK lida com o LRO internamente ou retorna quando pronto.
        result = client.models.generate_videos(
            model=model_name,
            prompt=prompt,
            config=types.GenerateVideosConfig(
                aspect_ratio="16:9",
                person_generation="ALLOW_ADULT"
            )
        )

        for generated_video in result.generated_videos:
            # Salva no disco
            with open(output_path, "wb") as f:
                f.write(generated_video.video.video_bytes)
            
            print(f"✅ Vídeo salvo com sucesso em: {output_path}")
            return

    except Exception as e:
        print(f"❌ Erro ao gerar o vídeo: {e}")
        print("Nota: O acesso ao Veo via AI Studio pode ainda estar restrito a contas com acesso antecipado (Private Preview).")
        sys.exit(1)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Gera um vídeo usando Google Veo (via AI Studio).")
    parser.add_argument("--prompt", required=True, help="O prompt de texto para gerar o vídeo.")
    parser.add_argument("--output", required=True, help="O caminho do arquivo de destino (ex: assets/video.mp4).")
    
    args = parser.parse_args()
    generate_video(args.prompt, args.output)
