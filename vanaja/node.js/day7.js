// Node.js Modules Demo
// DNS, NET, TLS, UTIL, ZLIB
const dns = require("dns");
const net = require("net");
const tls = require("tls");
const util = require("util");
const zlib = require("zlib");
// 1. DNS MODULE
dns.lookup("google.com", (err, address, family) => {
    if (err) throw err;

    console.log("\n=== DNS MODULE ===");
    console.log("Address:", address);
    console.log("IP Version:", family);
});
// 2. UTIL MODULE
console.log("\n=== UTIL MODULE ===");

const student = {
    id: 101,
    name: "Vanaja",
    course: "Node.js"
};
console.log(util.inspect(student));
const formatText = util.format(
    "Hello %s, Welcome to %s",
    "Vanaja",
    "Node.js"
);
console.log(formatText);
// 3. ZLIB MODULE
console.log("\n=== ZLIB MODULE ===");
const text = "Welcome to Node.js Modules Learning";
zlib.gzip(text, (err, compressed) => {
    if (err) throw err;
    console.log("Compressed Data:", compressed);
    zlib.gunzip(compressed, (err, result) => {
        if (err) throw err;

        console.log("Decompressed Data:", result.toString());
    });
});
// 4. NET MODULE (TCP Server)
console.log("\n=== NET MODULE ===");
const server = net.createServer((socket) => {
    socket.write("Hello Client from TCP Server!\n");
    socket.end();
});
server.listen(5000, () => {
    console.log("TCP Server Running on Port 5000");
});
// 5. TLS MODULE
console.log("\n=== TLS MODULE ===");
console.log(
    "TLS module is used to create secure SSL/TLS connections."
);
console.log(
    "To create a TLS server, SSL certificate and key files are required."
);