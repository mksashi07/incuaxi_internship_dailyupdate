// ================================
// Node Process Demo
// ================================

// Class
class Employee {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    display() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

// Function
function add(a, b) {
    return a + b;
}

// Arrow Function
const multiply = (a, b) => {
    return a * b;
};

console.log("================================");
console.log("NODE PROCESS DEMO");
console.log("================================");

// Process Information
console.log("\nProcess ID:", process.pid);
console.log("Current Directory:", process.cwd());
console.log("Platform:", process.platform);
console.log("Node Version:", process.version);

// Command Line Arguments
console.log("\nCommand Line Arguments:");

for (let i = 0; i < process.argv.length; i++) {
    console.log("Argument " + i + ": " + process.argv[i]);
}

// Environment Variables
console.log("\nEnvironment Variables:");

console.log(
    "User:",
    process.env.USERNAME || process.env.USER || "Unknown"
);

// Memory Usage
console.log("\nMemory Usage:");

const memory = process.memoryUsage();

console.log("RSS:", memory.rss);
console.log("Heap Total:", memory.heapTotal);
console.log("Heap Used:", memory.heapUsed);
console.log("External:", memory.external);

// Uptime
console.log("\nProcess Uptime:");
console.log(process.uptime(), "seconds");

// Function Examples
console.log("\nFunction Examples:");

console.log("10 + 20 =", add(10, 20));
console.log("10 * 20 =", multiply(10, 20));

// Class Example
console.log("\nEmployee Details:");

const emp1 = new Employee(1, "Varsha", 21);
const emp2 = new Employee(2, "Ravi", 22);

emp1.display();

console.log("----------------");

emp2.display();

// Value Examples
console.log("\nValue Examples:");

console.log("Value:", "Hello Node.js");
console.log("Value:", 100);
console.log("Value:", true);

// Callback Example
function getData(callback) {
    callback("Data Loaded Successfully");
}

console.log("\nCallback Example:");

getData((message) => {
    console.log(message);
});

// Timeout Example
setTimeout(() => {
    console.log("\nsetTimeout executed after 2 seconds");
}, 2000);

// Exit Event
process.on("exit", (code) => {
    console.log("\nProcess exited with code", code);
});

console.log("\nProgram Finished");