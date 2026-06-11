// NODE.JS EVENTS, STREAMS, BUFFER MODULES


// IMPORT MODULES

const EventEmitter = require("events");
const fs = require("fs");
const {
    Readable,
    Writable,
    Duplex,
    Transform
} = require("stream");

// 1. EVENTS MODULE

console.log("\n===== EVENTS MODULE =====");

/*
EventEmitter:
Used to create and handle custom events.
*/

const emitter = new EventEmitter();

// on() -> Register Event Listener

emitter.on("welcome", () => {
    console.log("Welcome Event Triggered");
});


// emit() -> Trigger Event
emitter.emit("welcome");

// Passing Arguments

emitter.on("student", (name, marks) => {
    console.log("Student Name:", name);
    console.log("Student Marks:", marks);
});

emitter.emit("student", "Ayesha", 95);

// Multiple Listeners


emitter.on("multi", () => {
    console.log("First Listener");
});

emitter.on("multi", () => {
    console.log("Second Listener");
});

emitter.emit("multi");

// once() -> Runs Only Once

emitter.once("onceEvent", () => {
    console.log("This Runs Only One Time");
});

emitter.emit("onceEvent");
emitter.emit("onceEvent");

// removeListener()

function removeExample() {
    console.log("This Listener Will Be Removed");
}

emitter.on("removeTest", removeExample);

emitter.emit("removeTest");

emitter.removeListener("removeTest", removeExample);

emitter.emit("removeTest");

// 2. STREAM MODULE

console.log("\n===== STREAM MODULE =====");

// Readable Stream

const readable = Readable.from([
    "Chunk 1\n",
    "Chunk 2\n",
    "Chunk 3\n"
]);

readable.on("data", (chunk) => {
    console.log("Readable Data:", chunk.toString());
});

readable.on("end", () => {
    console.log("Readable Stream Ended");
});

// Writable Stream

const writable = new Writable({
    write(chunk, encoding, callback) {
        console.log("Writable Received:", chunk.toString());
        callback();
    }
});

writable.write("Write Data 1\n");
writable.write("Write Data 2\n");
writable.end();

// Duplex Stream

const duplex = new Duplex({

    read(size) {
        this.push("Duplex Read Data\n");
        this.push(null);
    },

    write(chunk, encoding, callback) {
        console.log("Duplex Write:", chunk.toString());
        callback();
    }
});

duplex.on("data", (chunk) => {
    console.log(chunk.toString());
});

duplex.write("Duplex Stream Example\n");

// Transform Stream

const transform = new Transform({

    transform(chunk, encoding, callback) {

        const upperCase = chunk.toString().toUpperCase();

        callback(null, upperCase);
    }
});

transform.on("data", (chunk) => {
    console.log("Transform Output:", chunk.toString());
});

transform.write("node js transform stream");
transform.end();

// pipe()

const readPipe = Readable.from([
    "Pipe Data 1\n",
    "Pipe Data 2\n"
]);

const writePipe = new Writable({

    write(chunk, encoding, callback) {

        console.log("Pipe Output:", chunk.toString());

        callback();
    }
});

readPipe.pipe(writePipe);

// Stream Events

const streamEvent = Readable.from([
    "Event Stream Data\n"
]);

streamEvent.on("data", (chunk) => {
    console.log("Data Event:", chunk.toString());
});

streamEvent.on("end", () => {
    console.log("End Event Triggered");
});

streamEvent.on("close", () => {
    console.log("Close Event Triggered");
});

// 3. BUFFER MODULE

console.log("\n===== BUFFER MODULE =====");

// Buffer.alloc()

const buffer1 = Buffer.alloc(10);
console.log("Empty Buffer:");
console.log(buffer1);

// Buffer.from()

const buffer2 = Buffer.from("Hello Node.js");

console.log("Buffer From String:");
console.log(buffer2);

// Buffer to String
console.log("Convert Buffer To String:");
console.log(buffer2.toString());

// Writing Into Buffer

const buffer3 = Buffer.alloc(20);
buffer3.write("Node Buffer");
console.log("Written Buffer:");
console.log(buffer3.toString());

// Reading Individual Bytes

console.log("Buffer Byte Values:");

for (let i = 0; i < buffer2.length; i++) {

    console.log(`Index ${i} = ${buffer2[i]}`);
}

// Buffer Length

console.log("Buffer Length:", buffer2.length);

// Buffer.concat()

const bufA = Buffer.from("Hello ");
const bufB = Buffer.from("World");

const combined = Buffer.concat([bufA, bufB]);

console.log("Combined Buffer:");
console.log(combined.toString());

// Buffer.compare()

const compare1 = Buffer.from("ABC");
const compare2 = Buffer.from("XYZ");

const compareResult = Buffer.compare(compare1, compare2);

console.log("Buffer Compare Result:", compareResult);

// Buffer JSON

console.log("Buffer JSON:");
console.log(buffer2.toJSON());



console.log("\n===== ALL MODULES EXECUTED =====");