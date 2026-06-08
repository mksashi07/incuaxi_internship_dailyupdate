"use strict";
// ==============================
// Node Process + TypeScript Demo
// ==============================
class Employee {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}
function add(a, b) {
    return a + b;
}
const multiply = (a, b) => {
    return a * b;
};
console.log("================================");
console.log("NODE PROCESS + TYPESCRIPT DEMO");
console.log("================================");
// Process Information
console.log("\nProcess ID:");
console.log(process.pid);
console.log("\nCurrent Directory:");
console.log(process.cwd());
console.log("\nPlatform:");
console.log(process.platform);
console.log("\nNode Version:");
console.log(process.version);
// Command Line Arguments
console.log("\nArguments:");
process.argv.forEach((arg, index) => {
    console.log(`Argument ${index}: ${arg}`);
});
// Environment Variables
console.log("\nEnvironment Variables:");
console.log("User:", process.env.USERNAME || process.env.USER);
// Memory Usage
console.log("\nMemory Usage:");
const memory = process.memoryUsage();
console.log("RSS:", memory.rss);
console.log("Heap Total:", memory.heapTotal);
console.log("Heap Used:", memory.heapUsed);
// Uptime
console.log("\nUptime:");
console.log(process.uptime(), "seconds");
// Functions
console.log("\nFunctions:");
console.log("10 + 20 =", add(10, 20));
console.log("10 * 20 =", multiply(10, 20));
// Class Example
console.log("\nEmployee Details:");
const emp1 = new Employee(1, "Varsha", 21);
const emp2 = new Employee(2, "Ravi", 22);
emp1.display();
console.log("----------------");
emp2.display();
// Generic Function
function printData(value) {
    console.log("Value:", value);
}
console.log("\nGenerics:");
printData("Hello TypeScript");
printData(100);
printData(true);
// Async Function
async function getData() {
    return "Data Loaded Successfully";
}
console.log("\nAsync/Await:");
getData().then((data) => {
    console.log(data);
});
// Exit Event
process.on("exit", (code) => {
    console.log(`\nProcess exited with code ${code}`);
});
console.log("\nProgram Finished");
