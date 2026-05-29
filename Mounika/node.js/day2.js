const fs = require("fs");
const os = require("os");
const http = require("http");

//  FS module

// Create file
fs.writeFileSync("test.txt", "Hello Node.js");

// Read file
const data = fs.readFileSync("test.txt", "utf-8");
console.log("File Data:", data);

// OS module
console.log("OS Platform:", os.platform());

// custom module
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
console.log("Addition:", add(5, 3));
console.log("Multiplication:", multiply(4, 2));

// HTTP module 
const server = http.createServer((req, res) => {
    res.write("Node.js Server Running");
    res.end();
});
server.listen(3000, () => {
    console.log("Server started on port 3000");
});