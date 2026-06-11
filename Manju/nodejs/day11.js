// NODE PROCESS

console.log("===== Node Process Information =====");

console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);
console.log("Current Working Directory:", process.cwd());
// VARIABLES


let name = "Sravya";
let age = 22;
let isIntern = true;

console.log("\n===== Variables =====");
console.log(name);
console.log(age);
console.log(isIntern);
// FUNCTION
function add(a, b) {
    return a + b;
}

console.log("\n===== Function =====");
console.log("Sum =", add(10, 20));

// ARRAY

let skills = ["HTML", "CSS", "JavaScript", "Node.js"];

console.log("\n===== Array =====");
skills.forEach(skill => console.log(skill));


// OBJECT

const student = {
    id: 101,
    name: "Sravya",
    course: "Node.js"
};

console.log("\n===== Object =====");
console.log(student);

// CLASS

class Employee {
    constructor(empName, salary) {
        this.empName = empName;
        this.salary = salary;
    }

    display() {
        console.log(`Employee: ${this.empName}`);
        console.log(`Salary: ${this.salary}`);
    }
}

console.log("\n===== Class =====");
const emp = new Employee("John", 50000);
emp.display();

// INHERITANCE
class Animal {
    sound() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

console.log("\n===== Inheritance =====");
const dog = new Dog();
dog.sound();
dog.bark();
// ASYNC / AWAIT
async function getData() {
    return "Data Received";
}

async function displayData() {
    const result = await getData();

    console.log("\n===== Async/Await =====");
    console.log(result);
}
displayData();
// PROCESS EVENT
process.on("exit", (code) => {
    console.log(`\nProcess exiting with code ${code}`);
});