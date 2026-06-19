@echo off
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
    echo Node.js not found. Install it from https://nodejs.org then run this again.
    pause
    exit /b 1
)

:: Add a startup shortcut so the server launches on every Windows login
powershell -NoProfile -Command ^
  "$s = New-Object -ComObject WScript.Shell;" ^
  "$sc = $s.CreateShortcut([IO.Path]::Combine([Environment]::GetFolderPath('Startup'), 'NetQuiz-server.lnk'));" ^
  "$sc.TargetPath = 'node';" ^
  "$sc.Arguments = '\"%~dp0server.js\"';" ^
  "$sc.WorkingDirectory = '%~dp0';" ^
  "$sc.WindowStyle = 7;" ^
  "$sc.Save()"

echo.
echo Done. The quiz server will now start automatically on every login.
echo.
echo Starting server now...
start /min "" node "%~dp0server.js"
echo.
echo Open this in your browser and bookmark it:
echo   http://localhost:3001
echo.
pause
