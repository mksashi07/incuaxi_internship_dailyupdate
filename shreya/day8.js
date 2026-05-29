// 1. REFERENCE ERROR
try {
    console.log(userName);
}
catch(error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
}
// 2. TYPE ERROR
try {
    let number = 10;
    number.toUpperCase();
}
catch(error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
}
// 3. RANGE ERROR
try {
    let num = 10;
    console.log(num.toPrecision(500));
}
catch(error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
}
// 4. URI ERROR
try {
    decodeURI("%");
}
catch(error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
}
// 5. SYNTAX ERROR
try {
    eval("if(true { console.log('Hello') }");
}
catch(error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
}
// 6. EVAL ERROR
try {
    throw new EvalError("This is an Eval Error");
}
catch(error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
}
// 7. SILENT ERRORS
let x = 10;
x == "10";
console.log("Value of x:", x);
// Another Silent Error
let num2 = 5;
num2 + "5";
console.log("Value of num2:", num2);
// Typo creates bug
let total = 100;
totl = 200;
console.log("total:", total);
console.log("totl:", totl);
// 8. TRY...CATCH

try {
    let result = myFunction();
}
catch(error) {
    console.log("Caught an Error");
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
}
// 9. THROW STATEMENT
function checkAge(age) {
    if(age < 18) {
        throw "You are underage";
    }
    return "Access Granted";
}
try {
    console.log(checkAge(15));
}
catch(error) {
    console.log("Error:", error);
}
// 10. CUSTOM ERROR OBJECT
function divide(a, b) {
    if(b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
try {
    console.log(divide(10, 0));
}
catch(error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
}
// 11. FINALLY BLOCK
try {
    console.log("Try Block Running");
}
catch(error) {
    console.log("Catch Block Running");
}
finally {
    console.log("Finally Block Always Runs");
}
// 12. NESTED TRY CATCH
try {
    try {
        let value = null;
        console.log(value.name);
    }
    catch(innerError) {
        console.log("Inner Catch:");
        console.log(innerError.message);
    }
}
catch(outerError) {
    console.log("Outer Catch:");
    console.log(outerError.message);
}
// 13. ERROR WITH USER INPUT
function validateNumber(num) {
    try {
        if(isNaN(num)) {
            throw new Error("Input is not a number");
        }
        console.log("Valid Number:", num);
    }
    catch(error) {
        console.log("Validation Error:", error.message);
    }
}
validateNumber(100);
validateNumber("Hello");
// 14. ASYNC ERROR HANDLING
async function fetchData() {
    try {
        throw new Error("Network Error");
    }
    catch(error) {
        console.log("Async Error:", error.message);
    }
}
fetchData();
// 15. OPTIONAL CHAINING TO AVOID ERRORS
let student = null;
console.log(student?.name);
// 16. STRICT MODE
"use strict";
try {
    undeclaredVariable = 100;
}
catch(error) {
    console.log("Strict Mode Error:", error.message);
}
// 17. ERROR STACK
try {
    throw new Error("Something Went Wrong");
}
catch(error) {
    console.log(error.stack);
}
// 18. REAL WORLD LOGIN VALIDATION
function login(username, password) {
    try {
        if(username === "") {
            throw new Error("Username Required");
        }
        if(password.length < 6) {
            throw new Error("Password Too Short");
        }
        console.log("Login Successful");
    }
    catch(error) {
        console.log("Login Error:", error.message);
    }
}
login("", "123");
login("admin", "123456");
// 19. ARRAY ERROR HANDLING
function getElement(arr, index) {
    try {
        if(index >= arr.length) {
            throw new Error("Index Out of Bounds");
        }
        console.log(arr[index]);
    }
    catch(error) {
        console.log(error.message);
    }
}
getElement([10, 20, 30], 5);
// 20. JSON ERROR HANDLING
try {
    let jsonData = '{"name":"Shreya"}';
    let data = JSON.parse(jsonData);
    console.log(data);
}
catch(error) {
    console.log("JSON Error:", error.message);
}
// Invalid JSON
try {
    let invalidJson = '{"name":"Shreya"';
    JSON.parse(invalidJson);
}
catch(error) {

    console.log("Invalid JSON Error:", error.message);
}



