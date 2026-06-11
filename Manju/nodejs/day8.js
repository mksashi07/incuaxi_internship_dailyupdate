// mathModule.js

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = {
    add,
    multiply
};
const dns = require('dns');
const net = require('net');
const tls = require('tls');
const util = require('util');
const zlib = require('zlib');

const math = require('./mathModule');

// ================================
// MODULES
// ================================
console.log("===== CUSTOM MODULE =====");
console.log("Addition:", math.add(10, 20));
console.log("Multiplication:", math.multiply(5, 4));

// ================================
// DNS MODULE
// ================================
console.log("\n===== DNS MODULE =====");

dns.lookup('google.com', (err, address, family) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`IP Address: ${address}`);
    console.log(`IP Version: IPv${family}`);
});

// ================================
// UTIL MODULE
// ================================
console.log("\n===== UTIL MODULE =====");

const person = {
    name: "Manju",
    role: "NodeJS Developer",
    skills: ["JavaScript", "NodeJS", "React"]
};

console.log(util.inspect(person, { colors: true, depth: null }));

const formatText = util.format(
    "Hello %s, you have %d notifications",
    "Manju",
    10
);

console.log(formatText);

// ================================
// ZLIB MODULE
// ================================
console.log("\n===== ZLIB MODULE =====");

const text =
    "Node.js Zlib Compression Example. ".repeat(10);

zlib.gzip(text, (err, compressed) => {
    if (err) throw err;

    console.log("Original Size:", Buffer.byteLength(text));
    console.log("Compressed Size:", compressed.length);

    zlib.gunzip(compressed, (err, decompressed) => {
        if (err) throw err;

        console.log(
            "Decompressed Text:",
            decompressed.toString().slice(0, 50) + "..."
        );
    });
});

// ================================
// NET MODULE (TCP SERVER)
// ================================
console.log("\n===== NET MODULE =====");

const server = net.createServer(socket => {

    console.log("Client Connected");

    socket.write("Welcome to TCP Server\n");

    socket.on('data', data => {
        console.log("Received:", data.toString());

        socket.write(
            `Server Received: ${data.toString()}`
        );
    });

    socket.on('end', () => {
        console.log("Client Disconnected");
    });
});

server.listen(4000, () => {
    console.log("TCP Server Running on Port 4000");
});

// ================================
// TLS MODULE (Secure Connection)
// ================================
console.log("\n===== TLS MODULE =====");

const options = {
    host: 'google.com',
    port: 443,
    servername: 'google.com'
};

const tlsSocket = tls.connect(options, () => {

    console.log("TLS Connected");
    console.log(
        "Authorized:",
        tlsSocket.authorized
    );

    tlsSocket.write(
        "GET / HTTP/1.1\r\n" +
        "Host: google.com\r\n" +
        "Connection: close\r\n\r\n"
    );
});

tlsSocket.on('data', data => {
    console.log(
        "TLS Response Received:",
        data.toString().slice(0, 100)
    );
});

tlsSocket.on('error', err => {
    console.log("TLS Error:", err.message);
});

tlsSocket.on('end', () => {
    console.log("TLS Connection Closed");
});
