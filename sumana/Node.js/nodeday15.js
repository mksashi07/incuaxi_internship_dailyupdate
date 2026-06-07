/*
=========================================
NODE.JS 
=========================================
*/

const fs = require("fs");
const os = require("os");
const cluster = require("cluster");
const http = require("http");
const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

/* =========================================
   WORKER THREAD TASK
========================================= */

if (!isMainThread) {
  let sum = 0;

  for (let i = 1; i <= workerData; i++) {
    sum += i;
  }

  parentPort.postMessage(sum);
  return;
}

/* =========================================
   BUFFER DEMO
========================================= */

function bufferDemo() {
  console.log("\n===== BUFFER DEMO =====");

  const buffer = Buffer.from("Node.js Advanced");

  console.log("Buffer:", buffer);

  console.log("String:", buffer.toString());

  console.log("Length:", buffer.length);

  console.log("Hex:", buffer.toString("hex"));

  console.log("Base64:", buffer.toString("base64"));
}

/* =========================================
   BINARY DATA DEMO
========================================= */

function binaryDemo() {
  console.log("\n===== BINARY DATA DEMO =====");

  const text = "Hello";

  const binary = Buffer.from(text);

  console.log("Text:", text);

  console.log("Binary Representation:");

  for (const byte of binary) {
    console.log(byte.toString(2));
  }
}

/* =========================================
   FILE BUFFER DEMO
========================================= */

function fileDemo() {
  console.log("\n===== FILE BUFFER DEMO =====");

  fs.writeFileSync(
    "demo.txt",
    "Learning Node.js Buffers and Binary Data"
  );

  const fileData = fs.readFileSync("demo.txt");

  console.log("File Buffer:");

  console.log(fileData);

  console.log("File Content:");

  console.log(fileData.toString());
}

/* =========================================
   STREAM DEMO
========================================= */

function streamDemo() {
  console.log("\n===== STREAM DEMO =====");

  const readStream = fs.createReadStream("demo.txt");

  readStream.on("data", chunk => {
    console.log("Chunk Received:");
    console.log(chunk.toString());
  });

  readStream.on("end", () => {
    console.log("Reading Completed");
  });
}

/* =========================================
   WORKER THREAD DEMO
========================================= */

function workerDemo() {
  console.log("\n===== WORKER THREAD DEMO =====");

  const worker = new Worker(__filename, {
    workerData: 1000000,
  });

  worker.on("message", result => {
    console.log("Worker Result:", result);
  });

  worker.on("error", err => {
    console.log(err);
  });
}

/* =========================================
   CLUSTER SERVER
========================================= */

function startServer() {
  const server = http.createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });

    res.end(
      `Response from Worker PID: ${process.pid}`
    );
  });

  server.listen(5000, () => {
    console.log(
      `Worker ${process.pid} running on Port 5000`
    );
  });
}

/* =========================================
   PRIMARY PROCESS
========================================= */

if (cluster.isPrimary) {
  console.log("\n==========================");
  console.log("NODE.JS ADVANCED TOPICS");
  console.log("==========================");

  bufferDemo();

  binaryDemo();

  fileDemo();

  streamDemo();

  workerDemo();

  console.log("\n===== CLUSTER DEMO =====");

  const cpuCount = os.cpus().length;

  console.log("CPU Cores:", cpuCount);

  const workers = Math.min(cpuCount, 4);

  for (let i = 0; i < workers; i++) {
    cluster.fork();
  }

  cluster.on("online", worker => {
    console.log(
      `Worker Online: ${worker.process.pid}`
    );
  });

  cluster.on("exit", worker => {
    console.log(
      `Worker Died: ${worker.process.pid}`
    );

    cluster.fork();
  });
}

/* =========================================
   WORKER PROCESS
========================================= */

else {
  startServer();
}
