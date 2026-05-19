// 1. VARIABLES IN JAVASCRIPT
// Variables are containers used to store data.
//var, let, const are used to declare variables in JavaScript.
// var: It is function-scoped and can be re-declared and updated.
//let: It is block-scoped and can be updated but not re-declared.
//const: It is block-scoped and cannot be updated or re-declared.

// Using let
let studentName = "Sumana";

console.log("Student Name:", studentName);

studentName = "Ravi";

console.log("Updated Name:", studentName);

// Using const

const pi = 3.14;
console.log("Value of Pi:", pi);
const collegeName = "RGM College";
console.log("College Name:", collegeName);

// using var

var city = "Anantapur";
console.log("City:", city);
city = "Hyderabad";
console.log("Updated City:", city);

// 2. VARIABLE SCOPES

// Global Scope: Variables declared outside any function or block are in the global scope and can be accessed from anywhere in the code.
let globalVariable = "I am Global";

function showGlobal() {
    console.log(globalVariable);
}

showGlobal();
console.log(globalVariable);

// Function Scope: Variables declared inside a function are in the function scope and can only be accessed within that function.
function testFunctionScope() {

    let functionVariable = "Inside Function";

    console.log(functionVariable);
}
testFunctionScope();

// Block Scope: Variables declared inside a block (e.g., inside an if statement or loop) are in the block scope and can only be accessed within that block.

{
    let blockVariable = "Inside Block";

    console.log(blockVariable);
}





//data types in javascript
// JavaScript has several data types, including:
// 1. Primitive Data Types:
//   - String: Represents text. Example: "Hello, World!"
//   - Number: Represents numeric values. Example: 42, 3.14
//   - Boolean: Represents true or false. Example: true, false
//   - Null: Represents the intentional absence of any object value. Example: null
//   - Undefined: Represents a variable that has been declared but not assigned a value. Example: undefined 
// 2. Non-Primitive Data Types:
//   - Object: Represents a collection of properties. Example: { name: "Alice", age: 30 }
//   - Array: Represents an ordered list of values. Example: [1, 2, 3, 4, 5]
//   - Function: Represents a reusable block of code. Example: function greet() { console.log("Hello!"); }

let name = "Suman";          // String
let age = 20;                // Number
let isStudent = true;        // Boolean
let futureValue;             // Undefined
let empty = null;            // Null
let id = Symbol();           // Symbol
let big = 123456789n;        // BigInt

let student = {              // Object
    name: "Suman"
};

let fruits = ["Apple", "Banana", "Cherry"];      // Array

function greet() {           // Function
    console.log("Hello");
}

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof futureValue);
console.log(typeof empty);
console.log(typeof id);
console.log(typeof big);
console.log(typeof student);
console.log(typeof fruits);
console.log(typeof greet);



// 5. OPERATORS IN JAVASCRIPT
// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// Assignment Operators
let x = 10;

x += 5;
console.log("x += 5 :", x);
x -= 2;
console.log("x -= 2 :", x);
x *= 2;
console.log("x *= 2 :", x);
x /= 2;
console.log("x /= 2 :", x);

// Comparison Operators
let num1 = 10;
let num2 = 20;

console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// Logical Operators

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn);

// Increment and Decrement Operators
let count = 1;

count++;
console.log(count);
count--;
console.log(count);

// Ternary Operator
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// typeof Operator
console.log(typeof age);

console.log(typeof studentName);

// String Concatenation
let first = "Hello";
let second = "World";

console.log(first + " " + second);

// TEMPLATE LITERALS
let userName = "Suman";
let userAge = 20;

console.log(`My name is ${userName} and age is ${userAge}`);

// 6. CONDITIONAL STATEMENTS
// if statement
let number = 10;    
if (number > 0) {
    console.log("The number is positive.");
}
// if-else statement
let num = -5;
if (num > 0) {
    console.log("The number is positive.");
}   else {  
    console.log("The number is negative.");
}
// else if statement
let score = 85;

if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 70) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}

// 7. LOOPS

// For Loop
for (let i = 1; i <= 5; i++) {
    console.log("For Loop:", i);
}

// While Loop
let number = 1;

while (number <= 3) {
    console.log("While Loop:", number);
    number++;
}

// 8. FUNCTIONS
function addNumbers(num1, num2) {

    return num1 + num2;
}
let total = addNumbers(10, 20);

console.log("Total:", total);
