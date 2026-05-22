const fs = require("fs");
const os = require("os");
const http = require("http");

fs.writeFileSync("test.txt", "Hello Node.js");
const data = fs.readFileSync("test.txt", "utf-8");
console.log(`File Data: ${data}`);

console.log(`OS Platform: ${os.platform()}`);

const mathOperations = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
};

const { add, multiply } = mathOperations;
console.log(`Addition: ${add(5, 3)}`);
console.log(`Multiplication: ${multiply(4, 2)}`);

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Node.js Server Running");
    res.end();
});

server.listen(3000, () => {
    console.log("Server started on port 3000");
});