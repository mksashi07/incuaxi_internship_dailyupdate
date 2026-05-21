// 1. COMMONJS MODULE

// Exporting functions using module.exports
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Export object
module.exports = { add, subtract };
// 2. REQUIRE()

// Importing CommonJS module
const math = require('./math');

console.log("Addition:", math.add(10, 5));
console.log("Subtraction:", math.subtract(10, 5));

// 3. ES MODULES

// Exporting using ES Modules
export function greet(name) {
    return `Hello ${name}`;
}

// 4. IMPORT / EXPORT

// Importing ES Module
import { greet } from './greet.js';

console.log(greet("Manju"));

// 5. MODULES EXAMPLE
// Another module example
const student = {
    name: "Sravya",
    course: "Node.js"
};

module.exports.student = student;