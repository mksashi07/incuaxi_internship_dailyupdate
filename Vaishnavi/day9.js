//Form Validation is the process of checking whether the user input entered in a form is correct
// Empty Field Validation - Checks whether the input field is empty or not.
let name = "";

if(name === ""){
    console.log("Name field cannot be empty");
}
else{
    console.log("Valid Name");
}

// Email Validation - Checks whether the email entered by the user is in correct email format.

let email = "test@gmail.com";

if(email.includes("@")){
    console.log("Valid Email");
}
else{
    console.log("Invalid Email");
}

// Password Validation - Checks whether the password meets required conditions like minimum length.

let password = "abc123";

if(password.length >= 6){
    console.log("Valid Password");
}
else{
    console.log("Password must contain at least 6 characters");
}

// Number Validation - Checks whether the entered value is a valid number. 

let age = "25";

if(!isNaN(age)){
    console.log("Valid Number");
}
else{
    console.log("Please enter numbers only");
}

// Confirm Password Validation - Checks whether password and confirm password fields are the same.

let password1 = "admin123";
let confirmPassword = "admin123";

if(password1 === confirmPassword){
    console.log("Passwords Match");
}
else{
    console.log("Passwords Do Not Match");
}

// Complete Form Validation

let name = "Mounika";
let email = "mounika@gmail.com";
let password = "abc123";
let confirmPassword = "abc123";

if(name === ""){
    console.log("Name cannot be empty");
}

else if(!email.includes("@")){
    console.log("Invalid Email");
}

else if(password.length < 6){
    console.log("Password must contain at least 6 characters");
}

else if(password !== confirmPassword){
    console.log("Passwords do not match");
}

else{
    console.log("Form Submitted Successfully");
}

//Template Literals are a feature introduced in ES6 that allows you to create strings using backticks ` ` instead of single quotes ' ' or double quotes " ".
//Basic Template Literal
let name = "Puneeth";

let message = `Hello ${name}`;
console.log(message);

//Multiple Variables in Template Literals
let name = "Mounika";
let course = "JavaScript";
let message = `My name is ${name} and I am learning ${course}`;
console.log(message);

//Expression Inside Template Literals - Expressions and calculations can also be written 
// inside ${}.
let a = 10;
let b = 20;

console.log(`Subtraction is ${a - b}`);

//Multiline Strings -Template literals support multiline strings without using \n.
 let text = `
Welcome to JavaScript
I am Mounika
`;
console.log(text);

//Function Call Inside Template Literals
function greet(name){
    return `Hello,I am ${name}`;
}

console.log(`${greet("Mounika")}`);

//Object Values in Template Literals
let student = {
    name: "Mounika",
    age: 21
};

console.log(`Student Name: ${student.name}`);
console.log(`Student Age: ${student.age}`);

//Array Values in Template Literals
let names = ["Puneeth", "Mounika", "Pavan"];

console.log(`First Names: ${names[0]}`);
console.log(`Second Names: ${names[1]}`);

//Template Literal with Arrow Function
const square = num => `Square is ${num * num}`;

console.log(square(5));

//Literals Examples
let name = "Mounika";
let age = 21;
let course = "JavaScript";
let result = `
Student Details
Name : ${name}
Age  : ${age}
Course : ${course}
`;
console.log(result);