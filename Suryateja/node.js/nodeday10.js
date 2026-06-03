const fs = require("fs");
const http = require("http");
const path = require("path");
const os = require("os");
const EventEmitter = require("events");
const querystring = require("querystring");
const crypto = require("crypto");

// fs (File System)
fs.writeFileSync("demo.txt", "Hello Node.js");
fs.appendFileSync("demo.txt", "\nLearning Core Modules");

const fileData = fs.readFileSync("demo.txt", "utf8");
console.log(fileData);
console.log("File Exists:", fs.existsSync("demo.txt"));

// path
console.log("File Name:", path.basename(__filename));
console.log("Directory Name:", path.dirname(__filename));
console.log("Extension:", path.extname(__filename));
console.log("Joined Path:", path.join("users", "surya", "profile"));

// os
console.log("OS Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Host Name:", os.hostname());
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());

// events
const emitter = new EventEmitter();
emitter.on("login", (name) => {
    console.log(`${name} logged in`);
});
emitter.on("logout", (name) => {
    console.log(`${name} logged out`);
});
emitter.emit("login", "Surya");
emitter.emit("logout", "Surya");

// url
const myUrl = new URL("https://example.com/users?id=101&name=surya");
console.log("Protocol:", myUrl.protocol);
console.log("Host:", myUrl.host);
console.log("Path:", myUrl.pathname);
console.log("Search:", myUrl.search);

// querystring
const userData = querystring.parse(
    "name=surya&age=22&course=nodejs"
);
console.log(userData);

// crypto
const hash = crypto
    .createHash("sha256")
    .update("NodeJS")
    .digest("hex");
console.log("Hash:", hash);
const randomId = crypto.randomBytes(8).toString("hex");
console.log("Random ID:", randomId);

// stream
const readStream = fs.createReadStream("demo.txt");
readStream.on("data", (chunk) => {
    console.log("Stream Data:");
    console.log(chunk.toString());
});

// buffer
const buffer = Buffer.from("Hello Node.js");
console.log("Buffer:", buffer);
console.log("Buffer String:", buffer.toString());

// timers
setTimeout(() => {
    console.log("Timeout Executed");
}, 2000);
let count = 0;
const interval = setInterval(() => {
    count++;
    console.log("Interval:", count);
    if (count === 3) {
        clearInterval(interval);
    }
}, 1000);


// process
console.log("Node Version:", process.version);
console.log("Process ID:", process.pid);
console.log("Current Directory:", process.cwd());


// Arrays
const students = [
    { id: 1, name: "Surya" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Kiran" }
];
students.forEach((student) => {
    console.log(student);
});


// Loops
for (let i = 1; i <= 5; i++) {
    console.log("Loop Value:", i);
}


// http
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.end("Hello from Node.js Server");
});
server.listen(3000, () => {
    console.log("Server Running at http://localhost:3000");
});
console.log("Program Finished Initial Execution");