const fs = require("fs");
const os = require("os");
const http = require("http");

fs.writeFileSync("venky.txt", "Hello Venky\n");

fs.appendFileSync("venky.txt", "Welcome to Node.js\n");

const data = fs.readFileSync("venky.txt", "utf-8");

console.log("FILE CONTENT ");
console.log(data);

console.log("OS DETAILS");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("User Name:", os.userInfo().username);

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log("VENKY CALCULATIONS ");
console.log("Addition:", add(15, 5));
console.log("Multiplication:", multiply(6, 4));

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(`
        <h1>Welcome Venky</h1>
        <p>Node.js Server Running Successfully</p>
    `);

    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
