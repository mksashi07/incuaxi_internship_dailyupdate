// get method

const http = require('http');

const server = http.createServer((req, res) => {

    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('GET Request Received');
    }

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});


// post method

const http = require('http');

const server = http.createServer((req, res) => {

    if (req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('POST Request Received');
    }

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});