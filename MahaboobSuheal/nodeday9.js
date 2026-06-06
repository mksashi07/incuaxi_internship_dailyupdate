const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
        message: "API Working"
    }));
});

server.listen(3000);

const fs = require('fs');

const data = fs.readFileSync('student.json');

const student = JSON.parse(data);

console.log(student);
