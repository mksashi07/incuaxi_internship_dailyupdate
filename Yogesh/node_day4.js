//Get request using http module in node js
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.write("GET request received");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});


//Post request using http module in node js
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        res.write("POST request received");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

//put request using http module in node js
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'PUT') {
        res.write("PUT request received");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});