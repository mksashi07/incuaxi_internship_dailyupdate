// app.js
let a = 10;
let b = 20;
console.log("Value of a:", a);
console.log("Value of b:", b);
let sum = a + b;
console.log("Sum is:", sum);
//finding error using debugging
let number = 10;
console.log("Before Error");
console.log(num);
console.log("After Error");
//using debugger keywords
let x = 5;
let y = 10;
debugger;
let result = x + y;
console.log(result);
//error handling with try catch
try {
    let data = JSON.parse("invalid json");
    console.log(data);
}
catch(error) {
    console.log("Error Found");
    console.log(error.message);
}
//test.js
const add = require("./math");
const result = add(10, 20);
if(result === 30) {
    console.log("Test Passed");
}
else {
    console.log("Test Failed");
}
//server.js
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("API Working");
});
app.listen(3000, () => {
    console.log("Server Running");
});
//debugging api
app.get("/user", (req, res) => {
    console.log("API Called");
    let user = {
        name: "Pavithra",
        age: 21
    };
    console.log(user);
    res.json(user);
});
//asyn error debugging
async function fetchData() {
    try {
        throw new Error("Server Error");
    }
    catch(error) {
        console.log(error.message);
    }
}
fetchData();
//file testing
const fs = require("fs");
fs.writeFileSync("test.txt", "Hello");
const data =
fs.readFileSync("test.txt", "utf8");
if(data ="Hello") {
    console.log("File Test Passed");
}
else {
    console.log("File Test Failed");
}
//debugging variable value
let username = "Pavithra";
let age = 21;
console.log("Username:", username);
console.log("Age:", age);
age = age + 1;
console.log("Updated Age:", age);
//division error handling
function divide(a, b) {
    try {
        if(b = 0) {
            throw new Error("Cannot Divide by Zero");
        }
        console.log(a / b);
    }
    catch(error) {
        console.log(error.message);
    }
}
divide(10, 0);
//debugging array data
const fruits = ["Apple", "Banana", "Mango"];
console.log("Array Data:");
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
//file read debugging
const fs = require("fs");
console.log("Reading File...");
const data =
fs.readFileSync("test.txt", "utf8");
console.log(data);
console.log("File Reading Completed");
