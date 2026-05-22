
//setTimeout is a function that allows you to execute a piece of code after a
//  specified delay.
console.log("Start");

setTimeout(() => {
    console.log("Runs after 2 seconds");
}, 2000);

console.log("End");


//simple https server

const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from Node.js server");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});

// http://localhost:3000


//os used to get computer information like platform, home directory, etc.
const os = require("os");
console.log("Platform:", os.platform());
console.log("Home directory:", os.homedir());

//update files
const fs = require("fs");

fs.appendFileSync("hello.txt", "\nThis is new updated content.");

console.log("File updated successfully");


//append file
const f = require("fs");

f.appendFileSync("hello.txt", "\nThis is appended text.");

console.log("Content added successfully");


//deleting files
const fss = require("fs");

fss.unlinkSync("hello2.txt");

console.log("File deleted successfully");
