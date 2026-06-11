//ES6+ module

// mathUtils.js

export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
}

// Default export
export default function square(num) {
    return num * num;
}
// user.js

export const name = "Varsha";
export const age = 21;

export function greet() {
    return `Hello, ${name}!`;
}

// app.js

// Named imports
import { PI, add, subtract, multiply, divide } from "./mathUtils.js";

// Default import
import square from "./mathUtils.js";

// Import everything as an object
import * as User from "./user.js";

console.log(" ES6 Modules Example ");

// Using named exports
console.log("PI:", PI);
console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));

// Using default export
console.log("Square:", square(6));

// Using namespace import
console.log("Name:", User.name);
console.log("Age:", User.age);
console.log(User.greet());

// Dynamic Import
async function loadModule() {
    const mathModule = await import("./mathUtils.js");

    console.log(" Dynamic Import ");
    console.log("20 + 30 =", mathModule.add(20, 30));
    console.log("20 × 30 =", mathModule.multiply(20, 30));
}

loadModule();