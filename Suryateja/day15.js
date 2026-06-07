//Functions
// Function Declaration
function greet(name) {
    return "Hello " + name;
}
console.log(greet("Surya"));


// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(10, 20));


// Anonymous Function
setTimeout(function() {
    console.log("Anonymous Function Executed");
}, 1000);


// Arrow Function
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 4));


// Callback Function
function display(message) {
    console.log(message);
}
function processUser(callback) {
    callback("Callback Function Executed");
}
processUser(display);


// Higher Order Function
function calculate(a, b, operation) {
    return operation(a, b);
}
const subtract = (a, b) => a - b;
console.log(calculate(20, 5, subtract));


// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("IIFE Executed");
})();


// Recursive Function
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));


// 10. Strings
const text = "JavaScript Learning";


// String Methods
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.charAt(0));
console.log(text.indexOf("Script"));
console.log(text.includes("Learn"));
console.log(text.startsWith("Java"));
console.log(text.endsWith("Learning"));
console.log(text.slice(0, 10));
console.log(text.replace("Learning", "Practice"));
console.log(text.split(" "));
console.log(text.trim());


// Template Literals
const name = "Surya";
const city = "Vijayawada";
const message = `My name is ${name} and I am from ${city}.`;
console.log(message);