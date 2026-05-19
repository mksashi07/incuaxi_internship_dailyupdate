// MATH FUNCTION & OPERATIONS
console.log(Math.PI);

//operations
let x=3.39;
let y=2;
let z;
z=Math.round(x);
z=Math.floor(x);
z=Math.ceil(x);
z=Math.pow(x);
z=Math.trunct(x);
z=Math.sqrt(x);
z=Math.log(x);
z=Math.sin(x);
z=Math.cos(x);
z=Math.tan(x);
z=Math.abs(x);
z=Math.sign(x);

//to create a random
console.log(Math.random());


//conditional statements
// if statement
let age = 18;

if (age >= 18) {
    console.log("You can vote");
}
//if.. else statements

let age = 16;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You are too young");
}

//if...else if...else
    let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else if (marks >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

//switch statement
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}


//ternary operator
let age = 20;

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);
//using logical operators

let temp = 30;

if (temp > 20 && temp < 35) {
    console.log("Weather is good");
}


//===

console.log(5 == "5");  
console.log(5 === "5"); 

//ITERATIVE STATEMENT
//for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


//while loop
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
//do...while loop

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

//for ..of loop

let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

//for..in loop

let person = {
    name: "Varsha",
    age: 18
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

//string method
let text = "JavaScript";
console.log(text.charAt(4)); // charAt


let text = "JavaScript";
console.log(text.indexOf("S")); //indexOf

let text = "Hello";
console.log(text.length); // length


let text = "   hello   ";
console.log(text.trim()); // trim

let text = "hello";
console.log(text.toUpperCase()); // toUpperCase

let text = "HELLO";
console.log(text.toLowerCase()); // toLowerCase

let text = "JavaScript";
console.log(text.startsWith("Java")); // startsWith

let text = "apple apple apple";
console.log(text.replaceAll("apple", "mango"));
// replaceAll

let num = "5";
console.log(num.padStart(3, "0")); // padStart

let num = "5";
console.log(num.padEnd(3, "0")); // padEnd

//string slicling

//simple slicing
let text = "JavaScript";
console.log(text.slice(0, 4)); 

//slice from moiddle
let text = "JavaScript";
console.log(text.slice(4, 10)); 

//without end values
let text = "JavaScript";
console.log(text.slice(4)); 

//using negative indexes

let text = "JavaScript";
console.log(text.slice(-6)); 

//extract last characters
let text = "HelloWorld";
console.log(text.slice(-5)); 

//METHOD CHAINING

// charAt + toUpperCase
let text = "javascript";
console.log(text.charAt(4).toUpperCase()); 

// indexOf + toString
console.log(text.indexOf("S").toString()); 

// length + toString
console.log(text.length.toString()); 

// trim + toUpperCase
console.log("   hello   ".trim().toUpperCase()); 

// toLowerCase + startsWith
console.log("HELLO".toLowerCase().startsWith("he")); 

// replaceAll + toUpperCase
console.log("apple apple".replaceAll("apple", "mango").toUpperCase());
// MANGO MANGO

// padStart + padEnd
console.log("5".padStart(3, "0").padEnd(5, "*")); 

// trim + slice + toUpperCase
console.log("   javascript   ".trim().slice(0, 4).toUpperCase());


//basic functions
function greet() {
    console.log("Hello!");
}

greet(); 

//function with parameters
function greet(name) {
    console.log("Hello " + name);
}

greet("Varsha");

//function with return value
function add(a, b) {
    return a + b;
}

let result = add(2, 3);
console.log(result); 

//function expression
let greet = function() {
    console.log("Hi!");
};

greet();

//arrow function
let add = (a, b)
{
    return a + b;
};

console.log(add(5, 3)); 

//anonymous function

setTimeout(function() {
    console.log("Executed after 2 seconds");
}, 2000);

//immediately invoked function

(function() {
    console.log("Runs immediately");
})();

//callback function

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Varsha", sayBye);

//recursive function

function countDown(n) {
    if (n === 0) return;
    console.log(n);
    countDown(n - 1);
}

countDown(5);

//default parameters

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet(); 

