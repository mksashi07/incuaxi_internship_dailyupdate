//FUNCTIONS
function nameOfTheFunction() {
//content of the function
}

function sayHello() {
let you = prompt("What's your name? ");
console.log("Hello", you + "!");
}
//EXERCISE
// Function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Two different variables
let a = 10;
let b = 20;

// Using the function with variables
let result1 = addNumbers(a, b);
console.log("Result using variables:", result1);

// Second function call with direct numbers
let result2 = addNumbers(15, 25);
console.log("Result using direct numbers:", result2);

//parameters and arguments
// Function with parameters
function greet(name, age) {
    console.log("Hello " + name);
    console.log("You are " + age + " years old");
}

// Arguments passed to the function
greet("Sam", 21);

greet("Ravi", 25);
//arrow functions
// Arrow function to add two numbers
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

// Arrow function with one parameter
const square = num => {
    return num * num;
};

console.log(square(5));

// Short arrow function
const greet = name => "Hello " + name;

console.log(greet("Sameera"));

// Spread operator with arrays
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

// Combining arrays using spread operator
let combinedNumbers = [...numbers1, ...numbers2];

console.log(combinedNumbers);

// Copying an array
let copiedArray = [...numbers1];

console.log(copiedArray);

// Spread operator with objects
let student = {
    name: "Sam",
    age: 21
};

let updatedStudent = {
    ...student,
    course: "JavaScript"
};

console.log(updatedStudent);
//Rest operator
// Rest operator in function parameters
function addNumbers(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(addNumbers(10, 20));
console.log(addNumbers(1, 2, 3, 4, 5));

// Rest operator with arrays
let [first, second, ...remaining] = [100, 200, 300, 400, 500];

console.log(first);
console.log(second);
console.log(remaining);

//Return Function
// Function with return statement
function multiply(a, b) {
    return a * b;
}

// Calling the function
let result = multiply(5, 4);

console.log("Multiplication Result:", result);

// Another example
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Sameera"));

//variable scope in functions
//1.Local Variable
function testAvailability(x) {
console.log("Available here:", x);
}
testAvailability("Hi!");
console.log("Not available here:", x);
//2.Global Variable
let globalVar = "Accessible everywhere!";
console.log("Outside function:", globalVar);
function creatingNewScope(x) {
console.log("Access to global vars inside function." , globalVar);
}
creatingNewScope("some parameter");
console.log("Still available:", globalVar);

//Recursive functions
function getRecursive(nr) {
console.log(nr);
getRecursive(--nr);
}
getRecursive(3);

function logRecursive(nr) {
console.log("Started function:", nr);
if (nr > 0) {
logRecursive(nr - 1);
} else {
console.log("done with recursion");
}
console.log("Ended function:", nr);
}
logRecursive(3);
