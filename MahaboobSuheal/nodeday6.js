// put method

const http = require('http');

const server = http.createServer((req, res) => {

    if (req.method === 'PUT') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('PUT Request Received');
    }

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});


// delete 

const http = require('http');

const server = http.createServer((req, res) => {

    if (req.method === 'DELETE') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('DELETE Request Received');
    }

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});