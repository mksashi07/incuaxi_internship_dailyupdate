
// NODE.JS MODULES & FILE HANDLING

// 1. COMMONJS MODULE
// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function sub(a, b) {
    return a - b;
}

// Exporting functions
module.exports = {
    add,
    sub
};

// 2. REQUIRE()

// Importing module
const math = require("./math");

// Using exported functions
console.log("Addition:", math.add(5, 10));
console.log("Subtraction:", math.sub(10, 5));

// 3. ES MODULES
// Exporting function using ES Module
export function greet(name) {
    return `Hello ${name}`;
}

// 4. IMPORT / EXPORT
// Importing ES Module
import { greet } from "./greet.js";

console.log(greet("Manju"));

// 5. ANOTHER MODULE EXAMPLE
const student = {
    name: "Sravya",
    course: "Node.js"
};

// Exporting object
module.exports.student = student;

console.log(student);

// 6. FILE HANDLING IN NODE.JS

// Importing File System module
const fs = require("fs");

// CREATE FILE - SYNCHRONOUS METHOD

fs.writeFileSync("hello.txt", "Hey You");

console.log("File created using Sync method");

// CREATE FILE - ASYNCHRONOUS METHOD

fs.writeFile("hello2.txt", "Hey You Async", (err) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("File created using Async method");
    }
});

// READ FILE - SYNCHRONOUS METHOD

const readSync = fs.readFileSync("./hello.txt", "utf-8");

console.log("Sync File Content:");
console.log(readSync);


// READ FILE - ASYNCHRONOUS METHOD

fs.readFile("./hello2.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Async File Content:");
        console.log(data);
    }
});


