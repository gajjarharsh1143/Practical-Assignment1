const http = require("http");
const fs = require("fs");


http.createServer((req, res) => {
    const responseObject = { API: req.url, METHOD: req.method, Body: (req.body) ? req.body : {} };
    if (req.url === '/' && req.method == 'GET') {
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(responseObject));
        res.end();
    }
    else if (req.url === '/data' && req.method == 'GET') {
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(responseObject));
        res.end();
    }
    else if (req.url === '/form' && req.method == 'GET') {
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
    else if (req.url === '/submit' && req.method == 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const formData = new URLSearchParams(body);
            const email = formData.get('email');
            const password = formData.get('password');
            responseObject.Body = {
                email : email,
                password : password
            }
            res.write(JSON.stringify(responseObject));
            res.end();
        });
    }
    else {
        res.write(JSON.stringify(responseObject));
        res.end();
    }
}).listen(8000, () => {
    console.log("server i listening on port 8000");
    console.log("localhost:8000/");
})