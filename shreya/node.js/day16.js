// Node Get Started
console.log("Welcome to Node.js");
console.log("Node.js is running successfully!\n");

// Node.js Requirements
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);
console.log("Architecture:", process.arch);

console.log("\nCurrent Directory:");
console.log(__dirname);

console.log("\nCurrent File:");
console.log(__filename);
// Node.js Built-in Modules
const os = require("os");
const fs = require("fs");
const path = require("path");

console.log("OS Type:", os.type());
console.log("Hostname:", os.hostname());
console.log("CPU Cores:", os.cpus().length);
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());

// File System Example
const fileName = "student.txt";

fs.writeFileSync(
    fileName,
    "Name: Shreya\nBranch: CSE\nCGPA: 9.2"
);

console.log("File Created Successfully");

const data = fs.readFileSync(
    fileName,
    "utf8"
);

console.log("\nFile Content:");
console.log(data);
// Path Module Example
console.log("File Name:", path.basename(fileName));
console.log("Extension:", path.extname(fileName));
console.log("Absolute Path:", path.resolve(fileName));

// Command Line Arguments
process.argv.forEach((value, index) => {
    console.log(`Argument ${index}: ${value}`);
});
// Timers

setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

// Node.js vs Browser

console.log(`
NODE.JS
--------
1. Runs outside browser
2. Has File System access
3. Has OS access
4. Uses require()
5. Can create servers
6. No DOM

BROWSER
--------
1. Runs inside browser
2. No direct File System access
3. No OS access
4. Uses document/window
5. Cannot create backend servers
6. Supports DOM manipulation
`);

// HTTP Server Example
const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Hello from Node.js Server");
});

server.listen(3000, () => {
    console.log("Server Running at http://localhost:3000");
});
// Memory Usage
console.log("\n=== MEMORY USAGE ===");

console.log(process.memoryUsage());