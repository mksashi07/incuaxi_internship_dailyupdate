
// NODE.JS STREAMS + EVENTS EXAMPLE




// IMPORT MODULES


const fs = require("fs");

const EventEmitter = require("events");


// CREATE EVENT EMITTER


const emitter = new EventEmitter();



// CREATE CUSTOM EVENTS

emitter.on("start", () => {

    console.log("Program Started");

});

emitter.on("dataRead", () => {

    console.log("File Reading Completed");

});

emitter.on("end", () => {

    console.log("Program Finished");

});



// EMIT START EVENT

emitter.emit("start");



// CREATE WRITE STREAM

const writeStream = fs.createWriteStream("demo.txt");

writeStream.write("Hello Manju\n");

writeStream.write("Welcome to Node.js Streams\n");

writeStream.write("Streams are used for reading and writing data\n");

writeStream.end();



// WRITE STREAM EVENTS


writeStream.on("finish", () => {

    console.log("Data Written Successfully");

});

writeStream.on("error", (error) => {

    console.log("Write Error:", error);

});



// CREATE READ STREAM


const readStream = fs.createReadStream("demo.txt", "utf-8");


// READ STREAM EVENTS


readStream.on("data", (chunk) => {

    console.log("Reading Chunk:");
    console.log(chunk);

});

readStream.on("end", () => {

    emitter.emit("dataRead");

    emitter.emit("end");

});

readStream.on("error", (error) => {

    console.log("Read Error:", error);

});

