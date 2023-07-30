const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/gethello' && req.method == "GET") {
        res.end("<div style='font-size:100px'>Hello NodeJS!!</div>")
    }
    else if (req.url === '/' && req.method == "GET"){
        fs.readFile('./index.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
}).listen(8000, () => {
    console.log("Server is listening on PORT : 8000");
})