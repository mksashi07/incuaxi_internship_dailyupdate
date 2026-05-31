const fs = require("fs");
const crypto = require("crypto");
const EventEmitter = require("events");

// CUSTOM EVENT CLASS

class AppEvents extends EventEmitter {}

const appEvent = new AppEvents();


// EVENT LISTENERS

appEvent.on("start", () => {
  console.log("\nApplication Started\n");
});

appEvent.on("fileCopied", (file) => {
  console.log(`File Copied Successfully: ${file}`);
});

appEvent.on("hashGenerated", (hash) => {
  console.log(`SHA256 Hash: ${hash}`);
});

appEvent.on("bufferCreated", (data) => {
  console.log(`Buffer Data: ${data}`);
});

appEvent.on("completed", () => {
  console.log("\nApplication Completed\n");
});


// START EVENT

appEvent.emit("start");


// BUFFER MODULE

const userData = `
Name: Sumana
Course: Node.js
Level: Advanced
`;

const buffer = Buffer.from(userData);

appEvent.emit("bufferCreated", buffer.toString());

console.log("\nBuffer Length:", buffer.length);

fs.writeFileSync("input.txt", buffer);


// STREAM MODULE

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.on("open", () => {
  console.log("\nReading Started...");
});

readStream.on("data", (chunk) => {
  console.log("\nChunk Received:");
  console.log(chunk.toString());
});

readStream.on("end", () => {
  console.log("\nReading Finished");
});

readStream.on("error", (err) => {
  console.log(err.message);
});

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  appEvent.emit("fileCopied", "output.txt");

  // CRYPTO MODULE


  const fileData = fs.readFileSync("output.txt");

  const hash = crypto
    .createHash("sha256")
    .update(fileData)
    .digest("hex");

  appEvent.emit("hashGenerated", hash);

  // Random Token

  const token = crypto.randomBytes(32).toString("hex");

  console.log("\nRandom Token:");
  console.log(token);

  // UUID

  const uuid = crypto.randomUUID();

  console.log("\nGenerated UUID:");
  console.log(uuid);

  // HMAC

  const hmac = crypto
    .createHmac("sha256", "secretKey")
    .update("NodeJS Project")
    .digest("hex");

  console.log("\nHMAC:");
  console.log(hmac);

  appEvent.emit("completed");
});