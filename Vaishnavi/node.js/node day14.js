//Call Stack is a data structure that keeps track of function execution in JavaScript.
//Basic Call Stack
function first() {
    console.log("First Function");
}

function second() {
    first();
    console.log("Second Function");
}

second();

//Nested Functions
function one() {
    console.log("One");
}

function two() {
    one();
    console.log("Two");
}

function three() {
    two();
    console.log("Three");
}

three();

//Stack Flow
function add() {
    console.log("Add");
}

function multiply() {
    add();
    console.log("Multiply");
}

multiply();

//Multiple Function Calls
function login() {
    console.log("Login Function");
}

function dashboard() {
    login();
    console.log("Dashboard Function");
}

function app() {
    dashboard();
    console.log("App Function");
}

app();

// Callback Queue stores callback functions that have completed their asynchronous operations and are waiting to be executed.
//setTimeout
console.log("Start");

setTimeout(() => {
    console.log("Timeout Callback");
}, 0);

console.log("End");

//Multiple Timers
console.log("Program Started");

setTimeout(() => {
    console.log("Timer 1");
}, 1000);

setTimeout(() => {
    console.log("Timer 2");
}, 500);

console.log("Program Ended");

//Callback Queue Order
setTimeout(() => {
    console.log("A");
}, 0);

setTimeout(() => {
    console.log("B");
}, 0);

setTimeout(() => {
    console.log("C");
}, 0);

//Two Async Operations
console.log("Start");

setTimeout(() => {
    console.log("First Callback");
}, 1000);

setTimeout(() => {
    console.log("Second Callback");
}, 2000);

console.log("End");

//The Event Loop continuously checks:
//Is the Call Stack empty
//Are there callbacks waiting in the Callback Queue
//Event Loop with setTimeout
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");

//Blocking the Event Loop
console.log("Start");

setTimeout(() => {
    console.log("Timer Finished");
}, 0);

for (let i = 0; i < 1000000000; i++) {}

console.log("Loop Finished");

//Node.js File System Callback
const fs = require("fs");

console.log("Reading File");

fs.readFile("sample.txt", "utf8", (err, data) => {
    console.log("File Read Complete");
});

console.log("Program Continues");

//COMPLETE FLOW EXAMPLE
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

function greet() {
    console.log("Hello");
}

greet();

console.log("End");

//Event Loop with Function Call
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

function greet() {
    console.log("Hello");
}

greet();

console.log("End");