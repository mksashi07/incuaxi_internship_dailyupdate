//HTTP modules
const http = require('http');
const server = http.createServer((req, res) => {
    res.write('Hello from Node.js HTTP Server');
    res.end();
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
// https-module.js
const https = require('https');
https.createServer((req, res) => {
    res.writeHead(200);
    res.end("Secure HTTPS Server");
}).listen(3001, () => {
    console.log("HTTPS Server running");
});
//fil system
// fs-read.js
const fs = require('fs');
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});
// fs-write.js
const fs = require('fs');
fs.writeFile('newfile.txt', 'This is Node.js file writing', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File created successfully');
});
//path module
const path = require('path');
//basename()
const path = require('path');
const file = path.basename('C:/Users/Shreya/test.txt');
console.log(file);
//dirname()
const path = require('path');
const dir = path.dirname('C:/Users/Shreya/test.txt');
console.log(dir);
//exename()
const path = require('path');
const ext = path.extname('hello.js');
console.log(ext);
//join()
const path = require('path');
const fullPath = path.join('users', 'shreya', 'docs');
console.log(fullPath);
//parse()
const path = require('path');
const info = path.parse('C:/Users/Shreya/test.txt');
console.log(info);
//resolve
const path = require('path');
const absolutePath = path.resolve('test.txt');
console.log(absolutePath);