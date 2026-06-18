const fs = require("fs");
const EventEmitter = require("events");

console.log("Node.js Advanced Debugging Demo\n");

console.log("1. Console Log Debugging");

const num1 = 10;
const num2 = 20;

console.log("Num1 :", num1);
console.log("Num2 :", num2);

const sum = num1 + num2;

console.log("Sum :", sum);

console.log("\n2. Console Table Debugging");

const students = [
    { id: 1, name: "Mounika", marks: 90 },
    { id: 2, name: "Teja", marks: 85 },
    { id: 3, name: "Ravi", marks: 88 }
];

console.table(students);

console.log("3. Performance Debugging");

console.time("Execution Time");

for (let i = 0; i < 1000000; i++) {
}

console.timeEnd("Execution Time");

console.log("\n4. Try Catch Debugging");

try {
    let result = 100 / 2;
    console.log("Result :", result);
}
catch (error) {
    console.log("Error :", error.message);
}

console.log("\n5. Function Debugging");

function calculate(a, b) {
    debugger;
    return a + b;
}

console.log("Answer :", calculate(15, 25));

console.log("\n6. File System Debugging");

fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) {
        console.log("File Error :", err.message);
    } else {
        console.log("File Data :", data);
    }
});

console.log("\n7. Promise Debugging");

function fetchData() {
    return new Promise((resolve, reject) => {
        const success = true;

        if (success) {
            resolve("Data Loaded Successfully");
        } else {
            reject("Failed To Load Data");
        }
    });
}

fetchData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

console.log("\n8. Async Await Debugging");

async function getUserData() {
    try {
        const response = await Promise.resolve("User Data Received");
        console.log(response);
    }
    catch (error) {
        console.log(error.message);
    }
}

getUserData();

console.log("\n9. Event Emitter Debugging");

const emitter = new EventEmitter();

emitter.on("start", () => {
    console.log("Application Started");
});

emitter.on("error", (err) => {
    console.log("Event Error :", err.message);
});

emitter.emit("start");

emitter.emit("error", new Error("Server Connection Failed"));

console.log("\n10. Process Level Error Handling");

process.on("uncaughtException", (error) => {
    console.log("Uncaught Exception :", error.message);
});

process.on("unhandledRejection", (reason) => {
    console.log("Unhandled Rejection :", reason);
});

Promise.reject("Database Connection Failed");

console.log("\n11. Object Inspection");

const employee = {
    id: 101,
    name: "Mounika",
    department: "CSE",
    salary: 50000
};

console.dir(employee);

console.log("\n12. Memory Usage Information");

console.log(process.memoryUsage());

console.log("\n13. Process Information");

console.log("Process ID :", process.pid);
console.log("Node Version :", process.version);
console.log("Platform :", process.platform);

console.log("\n14. Stack Trace Example");

function levelOne() {
    levelTwo();
}

function levelTwo() {
    levelThree();
}

function levelThree() {
    console.trace("Trace Information");
}

levelOne();

console.log("\n15. Final Debug Summary");

console.log("Console Logging Completed");
console.log("Performance Check Completed");
console.log("Error Handling Completed");
console.log("Async Debugging Completed");
console.log("Event Debugging Completed");

console.log("\nProgram Completed Successfully");