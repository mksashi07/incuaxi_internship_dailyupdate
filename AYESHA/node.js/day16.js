

const EventEmitter = require("events");
const path = require("path");
const os = require("os");
const process = require("process");
const crypto = require("crypto");
const dns = require("dns");
const fs = require("fs");
const { exec } = require("child_process");

console.log("\n=================================");
console.log("NODE.JS CORE MODULES DEMO");
console.log("=================================");

/* =========================================
   1. EVENT EMITTER
========================================= */

console.log("\n===== EVENT EMITTER =====");

const emitter = new EventEmitter();

emitter.on("login", (user) => {
  console.log(`${user} logged in`);
});

emitter.on("logout", (user) => {
  console.log(`${user} logged out`);
});

emitter.emit("login", "Sumana");
emitter.emit("logout", "Sumana");

/* =========================================
   2. PATH MODULE
========================================= */

console.log("\n===== PATH MODULE =====");

console.log("File Name:", path.basename(__filename));
console.log("Directory:", path.dirname(__filename));
console.log("Extension:", path.extname(__filename));

const joinedPath = path.join(
  "users",
  "documents",
  "resume.pdf"
);

console.log("Joined Path:", joinedPath);

/* =========================================
   3. OS MODULE
========================================= */

console.log("\n===== OS MODULE =====");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());

/* =========================================
   4. PROCESS OBJECT
========================================= */

console.log("\n===== PROCESS OBJECT =====");

console.log("PID:", process.pid);
console.log("Node Version:", process.version);
console.log("Current Directory:", process.cwd());
console.log("Platform:", process.platform);

/* =========================================
   5. CRYPTO MODULE
========================================= */

console.log("\n===== CRYPTO MODULE =====");

const password = "NodeJS123";

const hash = crypto
  .createHash("sha256")
  .update(password)
  .digest("hex");

console.log("Original Password:", password);
console.log("SHA256 Hash:", hash);

/* =========================================
   6. DNS MODULE
========================================= */

console.log("\n===== DNS MODULE =====");

dns.lookup("google.com", (err, address) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Google IP:", address);
  }
});

/* =========================================
   7. CHILD PROCESS
========================================= */

console.log("\n===== CHILD PROCESS =====");

exec("node -v", (err, stdout) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Installed Node Version:", stdout);
  }
});

/* =========================================
   8. STREAMS
========================================= */

console.log("\n===== STREAMS =====");

fs.writeFileSync(
  "input.txt",
  "Learning Node.js Streams and Core Modules"
);

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);

readStream.on("data", (chunk) => {
  console.log("Chunk Received:");
  console.log(chunk.toString());
});

readStream.on("end", () => {
  console.log("File Copied Successfully");
});