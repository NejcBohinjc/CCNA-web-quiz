const http = require('http');
const fs   = require('fs');
const path = require('path');
const { execFile } = require('child_process');

const PORT = 3001;
const DIR  = __dirname;

const ALLOWED_ORIGIN = `http://localhost:${PORT}`;
const ALLOWED_HOSTS  = new Set([`localhost:${PORT}`, `127.0.0.1:${PORT}`]);
const VALID_DIFFS    = new Set(['easy', 'medium', 'hard']);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.ico':  'image/x-icon',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
};

// Reject requests whose Host/Origin headers don't match localhost:PORT.
// This blocks DNS-rebinding attacks and cross-site POST requests.
function isValidRequest(req) {
  const host   = req.headers['host']   || '';
  const origin = req.headers['origin'] || '';
  if (!ALLOWED_HOSTS.has(host)) return false;
  // Origin is always present for cross-origin fetches and sendBeacon.
  // Reject anything that arrives with a foreign origin.
  if (origin && origin !== ALLOWED_ORIGIN) return false;
  return true;
}

function buildFileContent(validated) {
  const entries = Object.keys(validated)
    .sort((a, b) => Number(a) - Number(b))
    .map(k => `  "${k}": "${validated[k]}"`)
    .join(',\n');
  return (
    `/* CCNA1 Question Difficulty Ratings\n` +
    `   Values: "easy" | "medium" | "hard"\n` +
    `   Edit directly here, or use the Export button in the app and commit the downloaded file.\n` +
    `   Commit this file to GitHub to sync your ratings across machines. */\n` +
    `window.DIFFICULTY_DATA = {\n${entries}\n};\n`
  );
}

function git(args, cb) {
  execFile('git', args, { cwd: DIR }, cb);
}

function gitSync(cb) {
  git(['add', 'difficulty-data.js'], err => {
    if (err) { cb(err); return; }
    git(['diff', '--cached', '--quiet'], diffErr => {
      if (!diffErr) { cb(null, 'nothing-to-commit'); return; }
      git(['commit', '-m', 'Update difficulty ratings'], err2 => {
        if (err2) { cb(err2); return; }
        git(['push'], cb);
      });
    });
  });
}

const server = http.createServer((req, res) => {
  // Only serve same-origin / localhost requests
  if (!isValidRequest(req)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  // Restrict ACAO to this specific origin (no wildcard)
  if (req.headers['origin']) {
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (req.method === 'POST' && req.url === '/save-difficulties') {
    let body = '';
    req.on('data', c => { body += c; if (body.length > 65536) req.destroy(); });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const raw = parsed.difficulties;
        if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error('invalid payload');

        // Validate every key/value — only known difficulty strings allowed.
        // The file is reconstructed from this validated map, never from raw bytes.
        const validated = {};
        for (const [k, v] of Object.entries(raw)) {
          if (!/^\d{1,4}$/.test(k))    throw new Error(`invalid id: ${k}`);
          if (!VALID_DIFFS.has(v))      throw new Error(`invalid difficulty: ${v}`);
          validated[k] = v;
        }

        const content = buildFileContent(validated);
        fs.writeFileSync(path.join(DIR, 'difficulty-data.js'), content, 'utf8');
        console.log('[quiz] difficulty-data.js saved');

        gitSync((err, result) => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          if (err) {
            console.warn('[quiz] git error:', err.message || err);
            res.end(JSON.stringify({ ok: true, pushed: false }));
          } else if (result === 'nothing-to-commit') {
            res.end(JSON.stringify({ ok: true, pushed: false }));
          } else {
            console.log('[quiz] pushed to GitHub');
            res.end(JSON.stringify({ ok: true, pushed: true }));
          }
        });
      } catch (e) {
        res.writeHead(400); res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
    return;
  }

  // Static file serving
  const urlPath  = req.url.split('?')[0];
  const filePath = path.join(DIR, urlPath === '/' ? 'index.html' : urlPath);

  // Prevent path traversal outside the quiz directory
  if (!filePath.startsWith(DIR + path.sep) && filePath !== DIR) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  const ext = path.extname(filePath).toLowerCase();
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  const url = `http://localhost:${PORT}`;
  console.log(`\n  NetQuiz running at ${url}\n  Close this window to stop.\n`);
  execFile('cmd', ['/c', 'start', url]);
});
