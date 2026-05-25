
//fs
const fs = require('fs');


fs.writeFileSync('example.txt', 'Hello World');


const data = fs.readFileSync('example.txt', 'utf-8');
console.log(data);

//http
const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello from server');
    res.end();
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

//path
const path = require('path');

const filePath = path.join('folder', 'file.txt');
console.log(filePath);

//os
const os = require('os');

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);

//events

const EventEmitter = require('events');

const event = new EventEmitter();

event.on('greet', () => {
    console.log('Hello Event Triggered!');
});

event.emit('greet');

//url

const EventEmitter = require('events');

const event = new EventEmitter();

event.on('greet', () => {
    console.log('Hello Event Triggered!');
});

event.emit('greet');

//crypto

const crypto = require('crypto');

const hash = crypto.createHash('sha256')
                   .update('password123')
                   .digest('hex');

console.log(hash);

//timer
setTimeout(() => {
    console.log('Runs after 2 seconds');
}, 2000);

//fs
const fs = require('fs');


fs.writeFileSync('example.txt', 'Hello World');


const data = fs.readFileSync('example.txt', 'utf-8');
console.log(data);

//http
const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello from server');
    res.end();
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

//path

const path = require('path');

const filePath = path.join('folder', 'file.txt');
console.log(filePath);


//os

const os = require('os');

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);

//events

const EventEmitter = require('events');

const event = new EventEmitter();

event.on('greet', () => {
    console.log('Hello Event Triggered!');
});

event.emit('greet');

//url

const url = require('url');

const myUrl = new URL('http://example.com/page?name=varsha');

console.log(myUrl.hostname);
console.log(myUrl.searchParams.get('name'));

//crypto

const crypto = require('crypto');

const hash = crypto.createHash('sha256')
                   .update('password123')
                   .digest('hex');

console.log(hash);

//timers

setTimeout(() => {
    console.log('Runs after 2 seconds');
}, 2000);
