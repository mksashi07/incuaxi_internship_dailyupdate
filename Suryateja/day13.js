// Variables
var name = "Surya";
let age = 22;
const country = "India";
console.log(name, age, country);

// Variable Naming Rules
let firstName = "Surya";
let _salary = 50000;
let $city = "Anantapur";
let user123 = "User";
console.log(firstName, _salary, $city, user123);

// Variable Scope
var globalVar = "I am var";
function scopeDemo() {
    let localVar = "I am let";
    const localConst = "I am const";
    console.log(globalVar);
    console.log(localVar);
    console.log(localConst);
}
scopeDemo();


// Primitive Data Types
let str = "JavaScript";
let num = 100;
let isActive = true;
let undef;
let empty = null;
let bigNum = 123456789012345678901234567890n;
let sym = Symbol("id");
console.log(typeof str);
console.log(typeof num);
console.log(typeof isActive);
console.log(typeof undef);
console.log(typeof empty);
console.log(typeof bigNum);
console.log(typeof sym);


// Non-Primitive Data Types
// Object
let person = {
    name: "Surya",
    age: 22
};
console.log(person);

// Array
let colors = ["Red", "Green", "Blue"];
console.log(colors);

// Function
function greet() {
    return "Hello JavaScript";
}
console.log(greet());


// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Assignment Operators
let x = 10;
x += 5;
console.log(x);
x -= 2;
console.log(x);
x *= 2;
console.log(x);
x /= 2;
console.log(x);

// Comparison Operators
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != 5);
console.log(10 !== "10");
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 5);

// Logical Operators
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log(!true);

// Bitwise Operators
console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);
console.log(~5);
console.log(5 << 1);
console.log(5 >> 1);

// String Operators
let first = "Hello";
let second = "World";
console.log(first + " " + second);

// Ternary Operator
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// Nullish Coalescing Operator (??)
let userName = null;
console.log(userName ?? "Guest");

// Optional Chaining (?.)
let employee = {
    details: {
        name: "Surya"
    }
};
console.log(employee?.details?.name);
console.log(employee?.address?.city);

// Implicit Type Conversion
console.log("5" + 5);
console.log("10" - 5);
console.log(true + 1);

// Explicit Type Conversion
console.log(Number("100"));
console.log(String(200));
console.log(Boolean(1));
console.log(parseInt("50px"));
console.log(parseFloat("99.99"));

// console.log()
console.log("This is console.log");

// console.error()
console.error("This is console.error");

// console.warn()
console.warn("This is console.warn");

// console.table()
const students = [
    { name: "Surya", age: 22 },
    { name: "Rahul", age: 23 }
];
console.table(students);