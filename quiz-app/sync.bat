@echo off
rem Manual fallback — only needed if you are NOT using start.bat.
rem When you use start.bat, difficulty ratings are saved and pushed automatically.
cd /d "%~dp0"
set "DOWNLOAD=%USERPROFILE%\Downloads\difficulty-data.js"
if exist "%DOWNLOAD%" (
    copy /Y "%DOWNLOAD%" "%~dp0difficulty-data.js" >nul
    del "%DOWNLOAD%"
    echo Ratings file copied from Downloads.
)
git add difficulty-data.js
git diff --cached --quiet && (echo No changes to push.) || (git commit -m "Update difficulty ratings" && git push && echo Pushed to GitHub.)
pause
