// NODE.JS STREAMS + EVENTS COMPLETE EXAMPLE
// Import required modules
const fs = require("fs");
const EventEmitter = require("events");
// 1. CREATE EVENT EMITTER
const emitter = new EventEmitter();

// Create event listener
emitter.on("userLogin", (username) => {
    console.log(`${username} logged in successfully`);
});

// Trigger event
emitter.emit("userLogin", "Manju");
// 2. CUSTOM EVENTS
emitter.on("courseStart", (courseName) => {
    console.log(`Course Started: ${courseName}`);
});
emitter.emit("courseStart", "Node.js");
// 3. STREAMS - WRITE STREAM
// Create writable stream
const writeStream = fs.createWriteStream("demo.txt");
// Write data into file
writeStream.write("Hello Node.js Streams\n");
writeStream.write("Learning Streams and Events\n");
// End stream
writeStream.end();
// Event when writing finished
writeStream.on("finish", () => {
    console.log("Data written successfully");
});
// 4. STREAMS - READ STREAM
// Create readable stream
const readStream = fs.createReadStream("demo.txt", "utf8");
// Read data chunk by chunk
readStream.on("data", (chunk) => {
    console.log("Reading File Content:");
    console.log(chunk);
});
// Event when reading completed
readStream.on("end", () => {
    console.log("Finished reading file");
});
// Handle errors
readStream.on("error", (err) => {
    console.log("Error:", err.message);
});
// 5. PIPE STREAMS
// Copy data from one file to another
const source = fs.createReadStream("demo.txt");
const destination = fs.createWriteStream("copy.txt");

// Pipe data
source.pipe(destination);

destination.on("finish", () => {
    console.log("File copied using pipe()");
});
// 6. PRACTICAL EVENT EXAMPLE
class Student extends EventEmitter {

    attendClass(studentName) {
        console.log(`${studentName} attended class`);

        // Emit attendance event
        this.emit("attendance", studentName);
    }
}

const student1 = new Student();
// Listen to attendance event
student1.on("attendance", (name) => {
    console.log(`Attendance marked for ${name}`);
});
// Trigger method
student1.attendClass("Manju");
// 7. STREAM WITH LARGE DATA
// Create big text file stream
const largeWrite = fs.createWriteStream("largeData.txt");

for (let i = 1; i <= 100; i++) {
    largeWrite.write(`This is line number ${i}\n`);
}

largeWrite.end();

largeWrite.on("finish", () => {
    console.log("Large file created successfully");
});
// 8. READ LARGE FILE USING STREAM
const largeRead = fs.createReadStream("largeData.txt", {
    encoding: "utf8",
    highWaterMark: 32 // chunk size
});

largeRead.on("data", (chunk) => {
    console.log("Chunk Received:");
    console.log(chunk);
});

largeRead.on("end", () => {
    console.log("Completed reading large file");
});
// END