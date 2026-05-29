//core built-in modules
//fs-filesystem
const fs = require('fs');
fs.writeFileSync('demo.txt', 'Hello Node.js');
const data = fs.readFileSync('demo.txt', 'utf8');
console.log(data);
//http
const http = require('http');
const server = http.createServer((req, res) => {
    res.write('Hello from Node.js Server');
    res.end();
});
server.listen(3000, () => {
    console.log('Server running on port 3000');
});
//path
const path = require('path');
let filePath = path.join('folder', 'file.txt');
console.log(filePath);
//os-operating system
const os = require('os');
console.log(os.platform());
console.log(os.hostname());
//events
const EventEmitter = require('events');
const event = new EventEmitter();
event.on('greet', () => {
    console.log('Hello Event Triggered');
});
event.emit('greet');
//util
const util = require('util');
let message = util.format('Hello %s', 'Shreya');
console.log(message);
//stream
const fs = require('fs');
const readStream = fs.createReadStream('demo.txt', 'utf8');
readStream.on('data', (chunk) => {
    console.log(chunk);
});
//crypto
const crypto = require('crypto');
let hash = crypto
    .createHash('sha256')
    .update('hello')
    .digest('hex');
console.log(hash);
//url
const url = require('url');
let address = 'http://localhost:3000/about?name=Shreya';
let parsedUrl = url.parse(address, true);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
//querystring
const querystring = require('querystring');
let data = querystring.parse('name=Shreya&age=20');
console.log(data);
