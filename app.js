const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('checking webhook ');
}).listen(3000);

console.log('Server Running');
