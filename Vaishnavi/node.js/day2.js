//The Event Loop is a mechanism in JavaScript that handles asynchronous operations.
console.log("Start");
setTimeout(() => {
    console.log("Inside Timeout");
}, 2000);
console.log("End");

//Asynchronous programming allows tasks to run without blocking other tasks.
console.log("Start");
setTimeout(() => {
    console.log("Loading Data...");
}, 3000);

console.log("End");

// callback - it is a function passed as an argument to another function.
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function message() {
    console.log("Welcome to JavaScript");
}
greet("Mounika", message);

/* Promise - it  represents a value that may be available:
now
later
never */
let myPromise = new Promise((resolve, reject) => {

    let success = true;

    if(success) {
        resolve("Data Loaded Successfully");
    }
    else {
        reject("Error Loading Data");
    }
});
myPromise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

//promise chaining
Promise.resolve(31)

.then((num) => {
    return num - 2;
})

.then((num) => {
    return num / 5;
})

.then((result) => {
    console.log(result);
})

/* Async / Await
async → function returns promise
await → waits for promise result */
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}
async function getData() {
    let result = await fetchData();
    console.log(result);
}
getData();

/* Event Emitters are used to:
create events
trigger events
listen to events */
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("greet", () => {
    console.log("Hello Event Triggered");
});
emitter.emit("greet");

//Event with Parameters
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("student", (name) => {
    console.log("Welcome " + name);
});
emitter.emit("student", "Mounika");

// Streams handle reading and writing data continuously.
const fs = require("fs");
const writeStream = fs.createWriteStream("demo.txt");
writeStream.write("Hello Node.js Streams");
writeStream.end();
console.log("Data Written");
