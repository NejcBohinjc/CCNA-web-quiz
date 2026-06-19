@echo off
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
    echo Node.js not found. Install it from https://nodejs.org then try again.
    pause
    exit /b 1
)
echo Starting NetQuiz...
node server.js
pause
