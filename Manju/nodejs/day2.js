// NODE.JS BUILT-IN MODULES EXAMPLES
// fs, path, os, http, events,
// stream, crypto, buffer
// Import modules
const fs = require("fs");
const path = require("path");
const os = require("os");
const http = require("http");
const EventEmitter = require("events");
const { Readable, Writable } = require("stream");
const crypto = require("crypto");
const BufferModule = require("buffer").Buffer;
console.log("1. FS MODULE");
// Create and write file
fs.writeFileSync("sample.txt", "Hello from Node.js fs module");
// Read file
const fileData = fs.readFileSync("sample.txt", "utf8");
console.log("File Content:", fileData);
// Append data
fs.appendFileSync("sample.txt", "\nAppended text");
// Read updated file
const updatedData = fs.readFileSync("sample.txt", "utf8");
console.log("Updated File Content:\n", updatedData);
console.log("2. PATH MODULE");
const filePath = path.join(__dirname, "folder", "file.txt");
console.log("Joined Path:", filePath);
console.log("Base Name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
console.log("Directory Name:", path.dirname(filePath));
console.log("3. OS MODULE");
console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());
console.log("Hostname:", os.hostname());
console.log("4. HTTP MODULE");
// Create HTTP Server
const server = http.createServer((req, res) => {
  res.write("Hello from Node.js HTTP Server");
  res.end();
});
// Start server
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
console.log("5. EVENTS MODULE");
// Create Event Emitter
const emitter = new EventEmitter();
// Create event listener
emitter.on("greet", (name) => {
  console.log(`Hello ${name}, welcome to Events Module`);
});
// Emit event
emitter.emit("greet", "Manju");
console.log("\n=================================");
console.log("6. STREAM MODULE");
console.log("=================================");
// Readable Stream
const readable = new Readable({
  read() {}
});
readable.push("This is stream data");
readable.push(null);
// Writable Stream
const writable = new Writable({
  write(chunk, encoding, callback) {
    console.log("Received from stream:", chunk.toString());
    callback();
  }
});
// Pipe readable to writable
readable.pipe(writable);
console.log("7. CRYPTO MODULE");
// Create hash
const hash = crypto
  .createHash("sha256")
  .update("password123")
  .digest("hex");
console.log("SHA256 Hash:", hash);
// Random bytes
const random = crypto.randomBytes(8).toString("hex");
console.log("Random Bytes:", random);
console.log("8. BUFFER MODULE");
// Create buffer
const buffer = BufferModule.from("Hello Buffer");
console.log("Buffer Data:", buffer);
console.log("Buffer to String:", buffer.toString());
console.log("Buffer Length:", buffer.length);