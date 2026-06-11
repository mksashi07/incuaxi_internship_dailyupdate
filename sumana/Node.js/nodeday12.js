/*
NODE.JS 
Topics Covered:
1. Buffers
2. Binary Data
3. Cluster Module
4. Multi-Core Processing
5. Worker Threads
*/

const cluster = require("cluster");
const os = require("os");
const http = require("http");
const fs = require("fs");
const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");

console.log("\n================================");
console.log("NODE.JS ADVANCED CONCEPTS DEMO");
console.log("================================\n");

/* =====================================================
   SECTION 1 - BUFFERS
===================================================== */

console.log("1. BUFFER EXAMPLES\n");

const buffer1 = Buffer.from("Node.js Buffer Example");

console.log("Original Buffer:");
console.log(buffer1);

console.log("\nBuffer To String:");
console.log(buffer1.toString());

console.log("\nBuffer Length:");
console.log(buffer1.length);

const buffer2 = Buffer.alloc(10);
buffer2.write("Hello");

console.log("\nAllocated Buffer:");
console.log(buffer2.toString());

const mergedBuffer = Buffer.concat([
  Buffer.from("Node "),
  Buffer.from("JS "),
  Buffer.from("Learning")
]);

console.log("\nMerged Buffer:");
console.log(mergedBuffer.toString());

console.log("\n================================\n");

/* =====================================================
   SECTION 2 - BINARY DATA
===================================================== */

console.log("2. BINARY DATA EXAMPLES\n");

const text = "A";

const binaryBuffer = Buffer.from(text);

console.log("Character:", text);
console.log("Hexadecimal:", binaryBuffer.toString("hex"));
console.log("Binary:", binaryBuffer[0].toString(2));

const base64Data = Buffer.from("NodeJS Advanced Learning");

console.log("\nBase64 Encoding:");
console.log(base64Data.toString("base64"));

console.log("\nBase64 Decoding:");
console.log(
  Buffer.from(base64Data.toString("base64"), "base64").toString()
);

console.log("\n================================\n");

/* =====================================================
   SECTION 3 - FILE BINARY OPERATIONS
===================================================== */

console.log("3. FILE & BINARY OPERATIONS\n");

const sampleText =
  "This file demonstrates binary data processing using buffers.";

fs.writeFileSync("sample.txt", sampleText);

const fileBuffer = fs.readFileSync("sample.txt");

console.log("File Read Successfully");
console.log("Buffer Length:", fileBuffer.length);
console.log("Content:");
console.log(fileBuffer.toString());

console.log("\n================================\n");

/* =====================================================
   SECTION 4 - WORKER THREADS
===================================================== */

function runWorkerThread() {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__filename, {
      workerData: 5000000
    });

    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", code => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

if (!isMainThread) {
  let total = 0;

  for (let i = 0; i < workerData; i++) {
    total += i;
  }

  parentPort.postMessage(
    `Worker Completed Calculation Result = ${total}`
  );
}

/* =====================================================
   SECTION 5 - CLUSTER MODULE
===================================================== */

if (cluster.isPrimary && isMainThread) {
  console.log("4. CLUSTER MODULE DEMO\n");

  const cpuCount = os.cpus().length;

  console.log(`Available CPU Cores: ${cpuCount}`);
  console.log("Creating Worker Processes...\n");

  const workerCount = Math.min(cpuCount, 4);

  for (let i = 0; i < workerCount; i++) {
    cluster.fork();
  }

  cluster.on("fork", worker => {
    console.log(`Worker Created => PID ${worker.process.pid}`);
  });

  cluster.on("exit", worker => {
    console.log(
      `Worker ${worker.process.pid} crashed. Restarting...`
    );

    cluster.fork();
  });

  /* ==========================================
     WORKER THREAD DEMO
  ========================================== */

  console.log("\n5. MULTI-CORE PROCESSING DEMO\n");

  runWorkerThread()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
}

/* =====================================================
   CLUSTER WORKER SERVER
===================================================== */

if (cluster.isWorker && isMainThread) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });

    res.end(
      `Hello From Cluster Worker PID: ${process.pid}\n`
    );
  });

  server.listen(3000, () => {
    console.log(
      `Server Running On Port 3000 - Worker PID ${process.pid}`
    );
  });
}

