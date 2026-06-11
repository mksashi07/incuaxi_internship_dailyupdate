// streams-demo.js

const fs = require("fs");
const path = require("path");
// STREAMS DEMO PROJECT

console.log("\n===== NODE.JS STREAMS DEMO =====\n");
// CREATE SAMPLE FILE

const inputFile = path.join(__dirname, "input.txt");
const outputFile = path.join(__dirname, "output.txt");

let content = "";

for (let i = 1; i <= 100; i++) {
  content += `Line ${i} - Learning Node.js Streams\n`;
}

fs.writeFileSync(inputFile, content);

console.log("Input file created.\n");

// READABLE STREAM

console.log("===== READABLE STREAM =====\n");

const readStream = fs.createReadStream(inputFile, {
  encoding: "utf8",
  highWaterMark: 64
});

let chunkCount = 0;

readStream.on("data", (chunk) => {
  chunkCount++;
  console.log(`Chunk ${chunkCount}`);
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("\nReadable Stream Finished.\n");

  writableDemo();
});

readStream.on("error", (err) => {
  console.error("Read Error:", err.message);
});
// WRITABLE STREAM

function writableDemo() {
  console.log("===== WRITABLE STREAM =====\n");

  const writeStream = fs.createWriteStream(outputFile);

  writeStream.write("Node.js Streams Project\n");
  writeStream.write("=========================\n");
  writeStream.write("Writable Stream Example\n\n");

  for (let i = 1; i <= 20; i++) {
    writeStream.write(`Record ${i}\n`);
  }

  writeStream.end();

  writeStream.on("finish", () => {
    console.log("Data written successfully.\n");

    pipeDemo();
  });

  writeStream.on("error", (err) => {
    console.error("Write Error:", err.message);
  });
}
// PIPE DEMO

function pipeDemo() {
  console.log("===== PIPE DEMO =====\n");

  const source = fs.createReadStream(inputFile);
  const destination = fs.createWriteStream("copied-file.txt");

  source.pipe(destination);

  destination.on("finish", () => {
    console.log("File copied using pipe().\n");

    advancedDemo();
  });

  destination.on("error", (err) => {
    console.error(err.message);
  });
}
// PAUSE / RESUME DEMO

function advancedDemo() {
  console.log("===== PAUSE & RESUME =====\n");

  const stream = fs.createReadStream(inputFile, {
    encoding: "utf8",
    highWaterMark: 128
  });

  let counter = 0;

  stream.on("data", (chunk) => {
    counter++;

    console.log(`Processing Chunk ${counter}`);

    stream.pause();

    console.log("Stream Paused");

    setTimeout(() => {
      console.log("Stream Resumed\n");
      stream.resume();
    }, 500);
  });

  stream.on("end", () => {
    console.log("Pause/Resume Demo Completed\n");

    streamInfo();
  });
}
// STREAM INFORMATION

function streamInfo() {
  console.log("===== STREAM INFORMATION =====\n");

  const stream = fs.createReadStream(inputFile);

  console.log("Readable:", stream.readable);
  console.log("Path:", stream.path);
  console.log("HighWaterMark:", stream.readableHighWaterMark);

  stream.destroy();

  console.log("\nProject Completed Successfully.");
}
// GLOBAL ERROR HANDLER

process.on("uncaughtException", (err) => {
  console.error("Unhandled Error:", err.message);
});

process.on("exit", () => {
  console.log("\nApplication Exited.");
});