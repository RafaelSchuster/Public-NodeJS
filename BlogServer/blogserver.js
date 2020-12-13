const http = require('http');
const port = 5000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./blog.txt', (err, data) => {
        if (err) {
            console.log('Woops');
            res.statusCode = 200;
            res.end();
        } else {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 200;
            res.write(data);
            res.end();
        };
    });
})

server.listen(port, () => {
    console.log('Server running...');
})