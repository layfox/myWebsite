const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'data/json'
    });
    res.write({
        data: 'my first website'
    });
    res.end();
}).listen(4000);
console.log('run server on port 4000');