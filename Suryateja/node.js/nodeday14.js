// Function Call Stack
function display() {
    console.log("Display Function");
}
function execute() {
    display();
    console.log("Execute Function");
}
execute();


// Nested Function Calls
function stepOne() {
    console.log("Step One");
}
function stepTwo() {
    stepOne();
    console.log("Step Two");
}
function stepThree() {
    stepTwo();
    console.log("Step Three");
}
stepThree();


// Stack Execution Example
function startEngine() {
    console.log("Engine Started");
}
function driveCar() {
    startEngine();
    console.log("Car Driving");
}
driveCar();


// Multiple Function Calls
function authenticate() {
    console.log("User Authenticated");
}
function loadProfile() {
    authenticate();
    console.log("Profile Loaded");
}
function openApplication() {
    loadProfile();
    console.log("Application Opened");
}
openApplication();


// Callback Queue Example
console.log("Program Start");
setTimeout(() => {
    console.log("Callback Executed");
}, 0);
console.log("Program End");


// Multiple Timers
console.log("Timer Program Started");
setTimeout(() => {
    console.log("Timer One Completed");
}, 1000);
setTimeout(() => {
    console.log("Timer Two Completed");
}, 500);
console.log("Waiting For Timers");


// Callback Queue Order
setTimeout(() => {
    console.log("First Callback");
}, 0);
setTimeout(() => {
    console.log("Second Callback");
}, 0);
setTimeout(() => {
    console.log("Third Callback");
}, 0);


// Two Async Operations
console.log("Operation Start");
setTimeout(() => {
    console.log("Download Complete");
}, 1000);
setTimeout(() => {
    console.log("Upload Complete");
}, 2000);
console.log("Operation Running");


// Event Loop Example
console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
console.log("C");


// Blocking Event Loop
console.log("Process Started");
setTimeout(() => {
    console.log("Timer Finished");
}, 0);
for (let i = 0; i < 100000000; i++) {
    // Blocking Loop
}
console.log("Heavy Task Finished");


// File System Callback Example
const fs = require("fs");
console.log("Opening File");
fs.readFile("sample.txt", "utf8", (error, data) => {
    if (error) {
        console.log("File Not Found");
        return;
    }
    console.log("File Content:");
    console.log(data);
});
console.log("Program Continues Running");


// Complete Event Loop Flow
console.log("Application Start");
setTimeout(() => {
    console.log("Timer Callback");
}, 0);
function welcome() {
    console.log("Welcome User");
}
welcome();
console.log("Application End");


// Event Loop With Function Call
console.log("Start");
setTimeout(() => {
    console.log("Async Task");
}, 0);
function showMessage() {
    console.log("Message Displayed");
}
showMessage();
console.log("Finish");