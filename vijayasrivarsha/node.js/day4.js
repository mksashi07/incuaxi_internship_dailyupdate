
// Import Required Modules

const fs = require("fs");
const EventEmitter = require("events");



// CREATE EVENT EMITTER

const emitter = new EventEmitter();




// Event Listener
emitter.on("greet", (name) => {
    console.log(`Hello ${name}`);
});

// Trigger Event
emitter.emit("greet", "Vijay");


// Multiple Events
emitter.on("login", (user) => {
    console.log(`${user} logged in`);
});

emitter.on("logout", (user) => {
    console.log(`${user} logged out`);
});

emitter.emit("login", "Rahul");
emitter.emit("logout", "Rahul");



// EVENT WITH MULTIPLE PARAMETERS

emitter.on("student", (name, age, course) => {
    console.log(`
Student Details
Name   : ${name}
Age    : ${age}
Course : ${course}
`);
});

emitter.emit("student", "Anu", 20, "Node.js");


// ONCE EVENT
// Runs only one time


emitter.once("payment", () => {
    console.log("Payment Successful");
});

emitter.emit("payment");
emitter.emit("payment"); 



// STREAMS




// WRITABLE STREAM


const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello Node.js Streams\n");
writeStream.write("Writing data using streams\n");
writeStream.write("Streams are memory efficient\n");

writeStream.end();

writeStream.on("finish", () => {
    console.log("Data written successfully");
});



// READABLE STREAM

const readStream = fs.createReadStream("output.txt", "utf8");

readStream.on("data", (chunk) => {
    console.log("\nReading Chunk:");
    console.log(chunk);
});

readStream.on("end", () => {
    console.log("Finished Reading File");
});

readStream.on("error", (err) => {
    console.log("Error:", err.message);
});



// PIPE METHOD
// Copy data from one file to another


const source = fs.createReadStream("output.txt");
const destination = fs.createWriteStream("copy.txt");

source.pipe(destination);

destination.on("finish", () => {
    console.log("File copied successfully");
});



// TRANSFORM STREAM
// Convert text to uppercase


const { Transform } = require("stream");

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {

        // Convert data to uppercase
        const upperData = chunk.toString().toUpperCase();

        callback(null, upperData);
    }
});

const readFile = fs.createReadStream("output.txt");
const writeFile = fs.createWriteStream("uppercase.txt");

readFile.pipe(upperCaseTransform).pipe(writeFile);

writeFile.on("finish", () => {
    console.log("Uppercase file created");
});



// STREAM EVENTS


readStream.on("open", () => {
    console.log("File opened");
});

readStream.on("close", () => {
    console.log("File closed");
});



// REAL-TIME COUNTDOWN USING EVENTS


let count = 5;

const timer = setInterval(() => {

    emitter.emit("countdown", count);

    count--;

    if (count < 0) {
        clearInterval(timer);
        emitter.emit("done");
    }

}, 1000);


emitter.on("countdown", (num) => {
    console.log(`Countdown: ${num}`);
});

emitter.on("done", () => {
    console.log("Countdown Finished");
});


// SIMPLE CHAT EVENT SIMULATION


emitter.on("message", (user, msg) => {
    console.log(`${user}: ${msg}`);
});

emitter.emit("message", "Vijay", "Hello Everyone");
emitter.emit("message", "Anu", "Welcome to Node.js");



emitter.on("errorOccured", (err) => {
    console.log("Custom Error:", err);
});

emitter.emit("errorOccured", "Database Connection Failed");


console.log("\nProgram Running...\n");