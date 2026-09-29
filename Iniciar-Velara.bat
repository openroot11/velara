@echo off
title Velara - Servidor de desarrollo
cd /d "%~dp0sitio"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js no esta instalado. Descargalo en https://nodejs.org
  pause
  exit /b 1
)

if not exist node_modules (
  echo Instalando dependencias...
  call npm install
  if errorlevel 1 (
    echo Error instalando dependencias.
    pause
    exit /b 1
  )
)

echo Iniciando Velara en http://localhost:5173 ...
start "" /b cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:5173"
call npm run dev -- --port 5173 --strictPort
pause
