import argparse
import os
import sys
from dotenv import load_dotenv

# Carrega as variáveis do .env
load_dotenv()

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("Erro: A biblioteca google-genai não está instalada. Execute: pip install google-genai")
    sys.exit(1)

def generate_image(prompt, output_path):
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Erro: A variável de ambiente GEMINI_API_KEY não foi encontrada no arquivo .env")
        sys.exit(1)

    print(f"Gerando imagem com o Imagen 3...\nPrompt: {prompt}\nDestino: {output_path}")
    
    try:
        # Inicializa o cliente GenAI
        client = genai.Client(api_key=api_key)

        # Chama a API de geração de imagem (o modelo e parâmetros podem variar conforme a API exata, aqui usamos o padrão atual)
        result = client.models.generate_images(
            model='imagen-3.0-generate-001',
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                output_mime_type="image/jpeg",
                aspect_ratio="16:9" # Pode ser ajustado para 1:1, 9:16, etc.
            )
        )

        for generated_image in result.generated_images:
            # Salva no disco
            with open(output_path, "wb") as f:
                f.write(generated_image.image.image_bytes)
            
            print(f"[SUCESSO] Imagem salva com sucesso em: {output_path}")
            return

    except Exception as e:
        print(f"[ERRO] Erro ao gerar a imagem: {e}")
        sys.exit(1)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Gera uma imagem usando Google Imagen 3.")
    parser.add_argument("--prompt", required=True, help="O prompt de texto para gerar a imagem.")
    parser.add_argument("--output", required=True, help="O caminho do arquivo de destino (ex: assets/imagem.jpg).")
    
    args = parser.parse_args()
    generate_image(args.prompt, args.output)
