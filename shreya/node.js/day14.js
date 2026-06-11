// NODE ARCHITECTURE INTRODUCTION
console.log("\nNODE ARCHITECTURE");
console.log("1. Client sends request");
console.log("2. Request reaches Node.js Server");
console.log("3. Event Queue stores requests");
console.log("4. Event Loop processes requests");
console.log("5. Worker Threads handle heavy tasks");
console.log("6. Response sent back to client");
// IMPORT MODULES
const fs = require("fs");
const path = require("path");
const os = require("os");
// SYSTEM INFORMATION
console.log("\nSYSTEM INFORMATION");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Count:", os.cpus().length);
console.log("Hostname:", os.hostname());
// SYNCHRONOUS OPERATION
for (let i = 1; i <= 5; i++) {
    console.log("Sync Task:", i);
}
// EVENT LOOP DEMONSTRATION
setTimeout(() => {
    console.log("setTimeout Executed");
}, 0);
setImmediate(() => {
    console.log("setImmediate Executed");
});
process.nextTick(() => {
    console.log("nextTick Executed");
});
console.log("Main Thread Finished");
// FILE SYSTEM ASYNC OPERATION
fs.writeFile(
    "sample.txt",
    "Welcome To Node.js Event Loop",
    (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("File Created");
        fs.readFile(
            "sample.txt",
            "utf8",
            (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("File Content:");
                console.log(data);
            }
                );
  }
);
// CALLBACK DEMONSTRATION
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data Retrieved");
        callback();
   }, 2000);
}
fetchData(() => {
    console.log("Callback Executed");
});
// EVENT EMITTER
const EventEmitter = require("events");
const emitter = new EventEmitter();
console.log("\nEVENT EMITTER");
emitter.on("studentAdded", () => {
    console.log("Student Added Event Triggered");
});
emitter.emit("studentAdded");
// PROMISE DEMONSTRATION
const myPromise = new Promise(
    (resolve, reject) => {
        let success = true;
        if (success) {
            resolve("Promise Resolved");
        } else {
            reject("Promise Rejected");
        }
    }
);
myPromise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});
// ASYNC AWAIT
function getUser() {
    return new Promise(
        resolve => {
            setTimeout(() => {
                rsolve(
                    "User Data Loaded"
                );
            }, 3000);
        }
    );
}
async function loadUser() {
    const user =
        await getUser();
    console.log(user);
}
loadUser();
// PATH MODULE
console.log(
    "Filename:",
    path.basename(__filename)
);
console.log(
    "Directory:",
    path.dirname(__filename)
);
console.log(
    "Extension:",
    path.extname(__filename)
);
// EVENT LOOP ORDER TEST
console.log("Start")
setTimeout(() => {
    conole.log("Timeout Callback");
}, 100);
Promise.resolve()
.then(() => {
    console.log("Promise Callback");
});
process.nextTick(() => {
    console.log("Next Tick Callback");
});
console.log("End");
// INTERVAL DEMO
let count = 0;
const timer = setInterval(() => {
    count++;
    console.log(
        "Interval Count:",
        count
    );
    if (count === 5) {
        clearInterval(timer);
        console.log(
            "Interval Stopped"
        );
        summary();
    }
}, 1000);