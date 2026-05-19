//1. JS Syntax

document.getElementById("demo").innerHTML = "Hello JavaScript.Ayesha";

// 2.JS Statements

let a = 10;
let b = 20;
let sum = a + b;
document.getElementById("demo").innerHTML = sum;


//3. JS Comments

// This is a single-line comment

let name = "Ayesha";
console.log(name);

 // Store age value
 let age = 21;
console.log(age);
    

    /*This is amulti-line comment*/

let city = "Hyderabad";
console.log(city);

/*Program:Display student marks*/

let marks = 90;
console.log(marks);

//4. JS Types

let name = "Ayesha";          // String
let age = 20;                // Number
let isStudent = true;        // Boolean
let futureValue;             // Undefined
let empty = null;            // Null
let id = Symbol();           // Symbol
let big = 123456789n;        // BigInt

let student = {              // Object
    name: "Ayesha"
};

let fruits = ["Guva", "Mango", "beery"];      // Array

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

// 5. JS Operators

// Arithmetic Operators
let a = 10;
let b = 20;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// Logical Operators
let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn);

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
// Increment and Decrement Operators
let count = 1;

count++;
console.log(count);
count--;
console.log(count);

// typeof Operator
console.log(typeof age);

console.log(typeof studentName);

// String Concatenation
let first = "Hello";
let second = "World";

console.log(first + " " + second);

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

// 7.Using let
let studentName = "Ayesha";


console.log("Student Name:", studentName);

studentName = "Chandu";

console.log("updated Name:", studenthame);

// 8. Using const

const pi = 3.14;
console.log("Value of Pi:", pi);
const collegeName = "MLEW College";
console.log("College Name:", collegeName);

// 9.using var

var city = "Chilkaluripet";
console.log("City:", city);
city = "GUNTUR";
console.log("Updated City:", city);
