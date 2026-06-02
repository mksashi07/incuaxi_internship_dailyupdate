const EventEmitter = require("events");
const fs = require("fs");
const crypto = require("crypto");
const dns = require("dns");
const assert = require("assert");
const util = require("util");
const readline = require("readline");

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on("message", (msg) => {
    console.log("Event:", msg);
});

emitter.emit("message", "Hello Node.js");

const buf = Buffer.from("NodeJS");

console.log("Buffer:", buf);
console.log("String:", buf.toString());

const hash = crypto
    .createHash("sha256")
    .update("NodeJS")
    .digest("hex");

console.log("Hash:", hash);

try {
    assert.strictEqual(5, 5);
    console.log("Assertion Passed");
} catch (error) {
    console.log("Assertion Failed");
}

const student = {
    id: 101,
    name: "Surya Teja",
    course: "NodeJS"
};

console.log(util.inspect(student));

fs.writeFileSync(
    "demo.txt",
    "Node.js Stream Example"
);

const stream = fs.createReadStream(
    "demo.txt",
    "utf8"
);

stream.on("data", (chunk) => {
    console.log("File Content:", chunk);
});

stream.on("end", () => {
    console.log("Stream Ended");
});

dns.lookup("google.com", (err, address, family) => {
    if (err) {
        console.log("DNS Error:", err.message);
        return;
    }

    console.log("IP Address:", address);
    console.log("Family:", family);
});

setTimeout(() => {
    console.log("Timeout Completed");
}, 2000);

let count = 0;

const timer = setInterval(() => {
    count++;
    console.log("Count:", count);

    if (count === 3) {
        clearInterval(timer);
        console.log("Interval Stopped");
    }
}, 1000);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Name: ", (name) => {
    console.log("Hello", name);
    rl.close();
});