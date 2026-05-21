// NODE.JS MODULE 
// CommonJS Module 
// Creating functions
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

// Exporting functions
module.exports = {
    add,
    sub,
    multiply
};

//  require()

// Importing current file module
const math = require('./app');

// Using imported functions
console.log("Addition:", math.add(10, 5));
console.log("Subtraction:", math.sub(10, 5));
console.log("Multiplication:", math.multiply(10, 5));
// ES MODULES 
// Export
export const name = "Vishnu";

export function greet() {
    console.log("Welcome to Node.js Modules");
}

//Import 
import { name, greet } from './app.js';

console.log(name);

greet(); 
