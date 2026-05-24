// Variables
var name1 = "Surya";
let age = 20;
const country = "India";
document.write("Var Variable: " + name1);
document.write("<br>");
document.write("Let Variable: " + age);
document.write("<br>");
document.write("Const Variable: " + country);
document.write("<br><br>");


// Data Types
let name = "Surya";          // String
let number = 100;            // Number
let isStudent = true;        // Boolean
let x;                       // Undefined
let data = null;             // Null

let student = {              // Object
    sname: "Surya",
    sage: 20
};

let fruits = ["Apple", "Mango", "Banana"]; // Array
document.write("String: " + name);
document.write("<br>");
document.write("Number: " + number);
document.write("<br>");
document.write("Boolean: " + isStudent);
document.write("<br>");
document.write("Undefined: " + x);
document.write("<br>");
document.write("Null: " + data);
document.write("<br>");
document.write("Object: " + student.sname);
document.write("<br>");
document.write("Array: " + fruits[1]);
document.write("<br><br>");


// Operators
let a = 10;
let b = 5;


// Arithmetic Operators
document.write("Addition: " + (a + b));
document.write("<br>");
document.write("Subtraction: " + (a - b));
document.write("<br>");
document.write("Multiplication: " + (a * b));
document.write("<br>");
document.write("Division: " + (a / b));
document.write("<br><br>");


// Assignment Operator
let c = 10;
c += 5;
document.write("Assignment Operator: " + c);
document.write("<br><br>");


// Comparison Operator
document.write("Comparison Operator: " + (a > b));
document.write("<br><br>");


// Logical Operator
document.write("Logical Operator: " + (a > 5 && b < 10));
document.write("<br><br>");


// Increment & Decrement
let d = 5;
d++;
document.write("Increment: " + d);
document.write("<br>");
d--;
document.write("Decrement: " + d);
document.write("<br><br>");


// Input and Output
let userName = prompt("Enter Your Name");
document.write("Prompt Output: " + userName);
document.write("<br>");
alert("Welcome " + userName);
console.log(userName);
document.write("<br><br>");


// Conditional Statements
let marks = 75;
if(marks >= 90){
    document.write("Grade A");
}
else if(marks >= 70){
    document.write("Grade B");
}
else{
    document.write("Grade C");
}
document.write("<br><br>");


// Switch Statement
let day = 2;
switch(day){
    case 1:
        document.write("Monday");
        break;

    case 2:
        document.write("Tuesday");
        break;

    default:
        document.write("Invalid Day");
}
document.write("<br><br>");


// Loops
// For Loop
for(let i = 1; i <= 5; i++){
    document.write("For Loop: " + i);
    document.write("<br>");
}
document.write("<br>");


// While Loop
let i = 1;
while(i <= 3){
    document.write("While Loop: " + i);
    document.write("<br>");
    i++;
}
document.write("<br>");


// Do While Loop
let j = 1;
do{
    document.write("Do While Loop: " + j);
    document.write("<br>");
    j++;
}
while(j <= 3);
document.write("<br>");


// For Of Loop
let colors = ["Red", "Green", "Blue"];
for(let color of colors){
    document.write("For Of Loop: " + color);
    document.write("<br>");
}
document.write("<br>");


// For In Loop
let person = {
    pname: "Surya",
    page: 20
};
for(let key in person){
    document.write("For In Loop: " + key + " = " + person[key]);
    document.write("<br>");
}
document.write("<br>");


// Jumping Statements
// Break
for(let k = 1; k <= 5; k++){
    if(k == 3){
        break;
    }
    document.write("Break: " + k);
    document.write("<br>");
}
document.write("<br>");


// Continue
for(let l = 1; l <= 5; l++){
    if(l == 3){
        continue;
    }
    document.write("Continue: " + l);
    document.write("<br>");
}