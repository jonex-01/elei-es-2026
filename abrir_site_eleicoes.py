"""
ELEICOES 2026 - SCROLLYTELLING INTERATIVO
Launcher: Abre o servidor local e o navegador.

Basta dar duplo-clique neste arquivo ou rodar:
  python abrir_site_eleicoes.py
"""

import http.server
import socketserver
import webbrowser
import threading
import os
import sys

PORT = 8026
DIRETORIO = os.path.join(os.path.dirname(os.path.abspath(__file__)), "Scrollytelling_Eleicoes_2026")

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    """Handler silencioso que nao polui o terminal com logs."""
    def log_message(self, format, *args):
        pass

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

def iniciar_servidor():
    os.chdir(DIRETORIO)
    with socketserver.TCPServer(("", PORT), QuietHandler) as httpd:
        httpd.serve_forever()

if __name__ == "__main__":
    # Forcar UTF-8 no stdout para evitar erros de encoding no Windows
    if sys.stdout.encoding != 'utf-8':
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')

    if not os.path.isdir(DIRETORIO):
        print(f"ERRO: Pasta nao encontrada: {DIRETORIO}")
        print("Certifique-se de que a pasta 'Scrollytelling_Eleicoes_2026' esta no mesmo diretorio deste script.")
        input("\nPressione ENTER para sair...")
        sys.exit(1)

    url = f"http://localhost:{PORT}"

    print("=" * 58)
    print("  ELEICOES 2026 - SCROLLYTELLING INTERATIVO")
    print("=" * 58)
    print()
    print(f"  Servidor rodando em: {url}")
    print(f"  Servindo arquivos de: {DIRETORIO}")
    print()
    print("  Abrindo no navegador...")
    print()
    print("  MANTENHA ESTA JANELA ABERTA enquanto navega no site.")
    print("  Para encerrar, feche esta janela ou pressione Ctrl+C.")
    print()

    servidor = threading.Thread(target=iniciar_servidor, daemon=True)
    servidor.start()

    webbrowser.open(url)

    try:
        while True:
            input()
    except (KeyboardInterrupt, EOFError):
        print("\n  Servidor encerrado.")
