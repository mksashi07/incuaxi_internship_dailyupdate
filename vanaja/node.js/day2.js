// NODE.JS BUILT-IN MODULES IN ONE FILE
// fs, path, os, http, events,
// stream, crypto, buffer
// 1. FS MODULE

const fs = require("fs");

// writeFileSync() creates a file
fs.writeFileSync("demo.txt", "Hello Node.js");

// readFileSync() reads file content
const fileData = fs.readFileSync("demo.txt", "utf8");

console.log("FS MODULE:");
console.log(fileData);
// 2. PATH MODULE

const path = require("path");

const filePath = "folder/demo.txt";

console.log("\nPATH MODULE:");

// basename() gives file name
console.log("File Name:", path.basename(filePath));

// extname() gives extension
console.log("Extension:", path.extname(filePath));

// dirname() gives folder name
console.log("Folder:", path.dirname(filePath));
// 3. OS MODULE

const os = require("os");

console.log("\nOS MODULE:");

// platform() gives operating system
console.log("Platform:", os.platform());

// arch() gives CPU architecture
console.log("Architecture:", os.arch());

// freemem() gives free RAM
console.log("Free Memory:", os.freemem());


// 4. EVENTS MODULES
const EventEmitter = require("events");

// Create event object
const emitter = new EventEmitter();

console.log("\nEVENTS MODULE:");

// on() listens for event
emitter.on("welcome", () => {

    console.log("Welcome Event Triggered");
});

// emit() triggers event
emitter.emit("welcome");

// 5. STREAM MODULE

console.log("\nSTREAM MODULE:");

// createReadStream() reads file in chunks
const readStream = fs.createReadStream("demo.txt", "utf8");

// data event triggers when chunk arrives
readStream.on("data", (chunk) => {

    console.log("Chunk Data:", chunk);
});
// 6. CRYPTO MODULE

const crypto = require("crypto");

console.log("\nCRYPTO MODULE:");

const password = "12345";

// createHash() creates encryption
const hash = crypto
.createHash("sha256")
.update(password)
.digest("hex");

console.log("Encrypted Password:", hash);
// 7. BUFFER MODULE
console.log("\nBUFFER MODULE:");

// Buffer.from() converts text to binary
const buffer = Buffer.from("Hello");

// Print binary buffer
console.log(buffer);

// Convert buffer back to text
console.log(buffer.toString());

// 8. HTTP MODULE
const http = require("http");

console.log("\nHTTP MODULE:");

// createServer() creates server
const server = http.createServer((req, res) => {

    // write() sends response
    res.write("Server Running Successfully");

    // end() ends response
    res.end();
});

// listen() runs server on port 3000
server.listen(3000);

console.log("Server Started at http://localhost:3000");

