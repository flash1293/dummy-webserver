const http = require('http');
const fs = require('fs');

const html = fs
              .readFileSync(__dirname + '/index.html')
              .toString('utf8')
              .replace(/\$name/g, process.env.NAME);

const server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end(html);
});
server.listen(80);
