const http = require('http');
const fs   = require('fs');
const path = require('path');
const { execFile } = require('child_process');

const PORT = 3001;
const DIR  = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.ico':  'image/x-icon',
  '.png':  'image/png',
};

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
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (req.method === 'POST' && req.url === '/save-difficulties') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      try {
        const { content } = JSON.parse(body);
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

  const urlPath = req.url.split('?')[0];
  const filePath = path.join(DIR, urlPath === '/' ? 'index.html' : urlPath);
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
