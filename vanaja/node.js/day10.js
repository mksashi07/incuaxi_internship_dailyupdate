// app.js

console.log("===== NODE PROCESS MODULE =====");

// Process Information
console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);
console.log("Current Directory:", process.cwd());

// Command Line Arguments
console.log("\nCommand Line Arguments:");
process.argv.forEach((arg, index) => {
    console.log(`${index}: ${arg}`);
});

// Environment Variable
console.log("\nUsername:", process.env.USERNAME || process.env.USER);

console.log("\n===== NODE FEATURES =====");

// Variables
let studentName = "Vanaja";
let age = 21;
let isIntern = true;

console.log(studentName, age, isIntern);

// Function
function add(a, b) {
    return a + b;
}

console.log("Sum =", add(10, 20));

// Array
let skills = ["Node.js", "JavaScript", "TypeScript"];
console.log("Skills:", skills);

// Object
const student = {
    name: "Vanaja",
    age: 21
};

console.log("Student:", student);

// Class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    display() {
        console.log(`Employee Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
    }
}

const emp = new Employee("Vanaja", 50000);
emp.display();

// Promise
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded Successfully");
        }, 1000);
    });
}

fetchData().then((data) => {
    console.log(data);
});

// Async/Await
async function getData() {
    const result = await fetchData();
    console.log("Async Result:", result);
}

getData();

// Exit Event
process.on("exit", (code) => {
    console.log(`\nProcess exited with code ${code}`);
});

console.log("\nProgram Running...");