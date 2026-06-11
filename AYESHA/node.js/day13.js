const cluster = require("cluster");
const os = require("os");
const fs = require("fs");
const http = require("http");
const crypto = require("crypto");
const {
  Worker,
  isMainThread,
  parentPort,
  workerData
} = require("worker_threads");

/* ==========================================
   WORKER THREAD SECTION
========================================== */

if (!isMainThread) {
  let result = 1;

  for (let i = 1; i <= workerData; i++) {
    result *= i;

    if (result > Number.MAX_SAFE_INTEGER) {
      result = result % 1000000007;
    }
  }

  parentPort.postMessage(
    `Worker Completed Task. Result = ${result}`
  );

  return;
}

/* ==========================================
   BUFFER EXAMPLES
========================================== */

function bufferExamples() {
  console.log("\n========== BUFFER EXAMPLES ==========\n");

  const userBuffer = Buffer.from("NodeJS Backend");

  console.log("Buffer Data:");
  console.log(userBuffer);

  console.log("\nConvert Buffer To String:");
  console.log(userBuffer.toString());

  console.log("\nConvert To JSON:");
  console.log(userBuffer.toJSON());

  const newBuffer = Buffer.alloc(15);

  newBuffer.fill("A");

  console.log("\nFilled Buffer:");
  console.log(newBuffer.toString());

  const copyBuffer = Buffer.alloc(userBuffer.length);

  userBuffer.copy(copyBuffer);

  console.log("\nCopied Buffer:");
  console.log(copyBuffer.toString());
}

/* ==========================================
   BINARY DATA EXAMPLES
========================================== */

function binaryExamples() {
  console.log("\n========== BINARY DATA ==========\n");

  const data = "Backend";

  const binary = Buffer.from(data);

  console.log("Original Text:", data);

  console.log(
    "Hex Format:",
    binary.toString("hex")
  );

  console.log(
    "Base64 Format:",
    binary.toString("base64")
  );

  const decoded = Buffer.from(
    binary.toString("base64"),
    "base64"
  );

  console.log(
    "Decoded Text:",
    decoded.toString()
  );
}

/* ==========================================
   FILE PROCESSING USING BUFFER
========================================== */

function fileBufferDemo() {
  console.log("\n========== FILE BUFFER ==========\n");

  const content =
    "Node.js handles files internally using buffers.";

  fs.writeFileSync("buffer-demo.txt", content);

  const fileData =
    fs.readFileSync("buffer-demo.txt");

  console.log("File Size:", fileData.length);

  console.log(
    "File Content:",
    fileData.toString()
  );
}

/* ==========================================
   HASHING BINARY DATA
========================================== */

function binaryHashDemo() {
  console.log("\n========== HASHING ==========\n");

  const text = "NodeJS Learning";

  const hash = crypto
    .createHash("sha256")
    .update(text)
    .digest("hex");

  console.log("Original Text:", text);

  console.log("SHA256 Hash:");
  console.log(hash);
}

/* ==========================================
   WORKER THREAD EXECUTION
========================================== */

function startWorker() {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__filename, {
      workerData: 20
    });

    worker.on("message", resolve);

    worker.on("error", reject);

    worker.on("exit", code => {
      if (code !== 0) {
        reject("Worker Failed");
      }
    });
  });
}

/* ==========================================
   CLUSTER SERVER
========================================== */

function startClusterServer() {
  const server = http.createServer(
    (req, res) => {
      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      res.end(
        JSON.stringify({
          message: "Cluster Worker Active",
          pid: process.pid,
          worker: cluster.worker.id,
          time: new Date()
        })
      );
    }
  );

  server.listen(4000, () => {
    console.log(
      `Worker ${cluster.worker.id} Running (PID ${process.pid})`
    );
  });
}

/* ==========================================
   PRIMARY PROCESS
========================================== */

if (cluster.isPrimary) {
  console.log("\n=================================");
  console.log("NODE.JS ADVANCED CONCEPTS");
  console.log("=================================");

  bufferExamples();

  binaryExamples();

  fileBufferDemo();

  binaryHashDemo();

  console.log(
    "\n========== MULTI CORE PROCESSING ==========\n"
  );

  startWorker()
    .then(result => console.log(result))
    .catch(err => console.log(err));

  const cpuCount = os.cpus().length;

  console.log(
    `\nSystem CPU Cores: ${cpuCount}`
  );

  const workers = Math.min(cpuCount, 4);

  console.log(
    `Creating ${workers} Cluster Workers...\n`
  );

  for (let i = 0; i < workers; i++) {
    cluster.fork();
  }

  cluster.on("online", worker => {
    console.log(
      `Worker Online -> PID ${worker.process.pid}`
    );
  });

  cluster.on("exit", worker => {
    console.log(
      `Worker ${worker.process.pid} Died`
    );

    console.log("Creating New Worker");

    cluster.fork();
  });
}

/* ==========================================
   WORKER PROCESS
========================================== */

else {
  startClusterServer();
}