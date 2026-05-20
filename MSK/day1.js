// JavaScript Basics Up To Functions

// 1. Variables
let name = "MSK";
let age = 22;

// 2. Printing Output
console.log("Hello " + name);
console.log("Age: " + age);

// 3. Different Data Types
let city = "Anantapur";   // String
let marks = 95;           // Number
let isStudent = true;     // Boolean

console.log(city);
console.log(marks);
console.log(isStudent);

// 4. Arithmetic Operations
let a = 10;
let b = 5;

console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));

// 5. Function
function greet(user) {
    return "Welcome " + user;
}

// Function Call
let message = greet(name);

console.log(message);