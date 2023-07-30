const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');
const Chatbot = require('../Question3/chatbot');

const server = http.createServer(function (req, res) {
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    fs.readFile(filePath, function (err, content) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

const wss = new WebSocket.Server({ server });

wss.on('connection', function (ws) {
    ws.on('message', async function (message) {
        const reply = await Chatbot.ChatbotReply(message);
        ws.send(reply);
    });
});

server.listen(8000, () => {
    console.log(`Server is listening on PORT : 8000`);
});
