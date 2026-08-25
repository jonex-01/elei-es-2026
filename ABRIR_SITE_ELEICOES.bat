@echo off
title Eleicoes 2026 - Scrollytelling
echo.
echo  ╔══════════════════════════════════════════════════════════╗
echo  ║  🗳️  ELEICOES 2026 — SCROLLYTELLING INTERATIVO         ║
echo  ╚══════════════════════════════════════════════════════════╝
echo.
echo  Iniciando servidor e abrindo o navegador...
echo.

cd /d "%~dp0"

echo Iniciando o servidor local na porta 3000...
start "Servidor Scrollytelling" cmd /c "npx -y serve Scrollytelling_Eleicoes_2026 -l 3000"

echo Aguardando o servidor carregar...
timeout /t 4 /nobreak >nul

start "" http://localhost:3000
