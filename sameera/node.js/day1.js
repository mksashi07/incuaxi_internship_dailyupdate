console.log("hey there! i am js")

// Creating functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Exporting functions
module.exports = {
    add,
    subtract
};

// Importing the module
const math = require('./mathModule');

// Using module functions
console.log("Addition:", math.add(10, 5));
console.log("Subtraction:", math.subtract(10, 5));

