# CCNA 1 — Introduction to Networks Quiz

A self-hosted web quiz for studying the Cisco CCNA 1 (ITN v7.0) exam. 111 exam-style questions covering the full ITN syllabus, with difficulty tracking, explanations, a countdown timer, and cross-machine sync via GitHub.

---

## Features

- **111 exam-style questions** — multiple choice, multi-select, and drag-to-connect matching
- **Difficulty rating** — tag each question Easy / Medium / Hard while you study
- **Exhibit filter** — isolate the questions that reference a network diagram
- **Explanations** — wrong answers show a concise explanation of the correct answer
- **Countdown timer** — 1 minute per question; quiz ends automatically when time runs out
- **Session persistence** — refreshing the browser keeps you on the current question
- **Cross-machine sync** — difficulty ratings auto-commit and push to GitHub so your progress follows you
- **Session history** — recent session scores shown on the results screen
- **Dark / light theme toggle**

---

## Requirements

- [Node.js](https://nodejs.org/) (v16 or later)
- Git configured with push access to this repository

---

## Quick Start

### Linux / macOS

```bash
cd quiz-app
./start.sh
```

### Windows

Double-click `quiz-app/start.bat`.

Both scripts start a local server at **http://localhost:3001** and open it in your browser.

---

## How It Works

The app is a single-page application served by a tiny Node.js HTTP server (`server.js`). No frameworks, no build step.

| File | Purpose |
|---|---|
| `index.html` | All three screens (start, quiz, results) |
| `app.js` | All quiz logic, routing, state management |
| `style.css` | Styling and theming |
| `difficulty-data.js` | Persisted difficulty ratings (committed to Git) |
| `explanations.js` | Per-question explanations shown on wrong answers |
| `server.js` | Serves static files + saves difficulty ratings + auto git push |

---

## Difficulty Ratings

Rate each question while answering it using the **Easy / Medium / Hard** buttons at the bottom of the quiz card.

Ratings are saved automatically:
1. Written to `difficulty-data.js` on disk immediately
2. Committed and pushed to GitHub in the background

To sync ratings to another machine: `git pull` in the quiz folder.

You can also edit `difficulty-data.js` directly — valid values are `"easy"`, `"medium"`, and `"hard"`.

---

## Filtering Questions

On the start screen you can filter which questions appear in your session:

| Filter | Shows |
|---|---|
| All | Every question |
| Easy / Medium / Hard | Only questions tagged with that difficulty |
| Exhibit | Only questions that reference a network diagram |

---

## Autostart (optional)

To have the quiz launch automatically at login:

```bash
# Linux — set up systemd autostart
cd quiz-app
./setup-autostart.sh

# Remove autostart
./remove-autostart.sh
```

Windows: run `setup-autostart.bat` / `remove-autostart.bat`.

---

## Security Note

The server only accepts connections from `localhost`. It validates all difficulty data before writing to disk and rejects requests from other origins. The GitHub push happens via your local Git credentials — no tokens are stored in the project files.
