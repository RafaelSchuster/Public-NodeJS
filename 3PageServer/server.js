const fs = require('fs');
const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
    let filePath;
    switch (req.url) {
        case '/':
            filePath = './index.html';
            break
        case '/about':
            filePath = './about.html';
            break
        default:
            filePath = './404.html';
    }
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log('Woops');
            res.statusCode = 200;
            res.end();
        } else {
            res.setHeader('Content-type', 'text/html');
            res.statusCode = 200;
            res.write(data);
            res.end();
        };
    });
})
server.listen(port, () => {
    console.log('Server running smoooth');
})