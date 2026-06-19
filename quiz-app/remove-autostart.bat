@echo off
del "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\NetQuiz-server.lnk" 2>nul
if errorlevel 1 (
    echo Autostart was not set up, nothing to remove.
) else (
    echo Autostart removed. Server will no longer start on login.
)
pause
