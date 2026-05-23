//node promises
// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an async operation (e.g., API call, file read)
  setTimeout(() => {
    const success = Math.random() > 0.5;
    
    if (success) {
      resolve('Operation completed successfully');
    } else {
      reject(new Error('Operation failed'));
    }
  }, 1000); // Simulate delay
});

// Using the Promise
myPromise
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error.message));
  //basic async/await
  async function getData() {
  console.log('Starting...');
  const result = await someAsyncOperation();
  console.log(`Result: ${result}`);
  return result;
}
function someAsyncOperation() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Operation completed'), 1000);
  });
}
// Call the async function
getData().then(data => console.log('Final data:', data));
//readfile with async/await
const fs = require('fs').promises;
async function readFile() {
  try {
    const data = await fs.readFile('myfile.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}
readFile();
//Error Handling
const fs = require('fs');
const express = require('express');
const app = express();
console.log("NODE.JS ERROR HANDLING ");
// try...catch

try {
    let result = 10 / 2;
    console.log("Division Result:", result);
}catch(error){
    console.log("Error:", error.message);
}
//Reference Error
try {
    console.log(data);
}catch(error){
    console.log("Reference Error:", error.message);
}
// Custom Error using throw

try {

    let age = 15;

    if(age < 18){
        throw new Error("Age must be 18+");
    }
    console.log("Eligible");
}catch(error){
    console.log("Custom Error:", error.message);
}
// finally Block

try {
    console.log("Inside Try Block");
}catch(error){
    console.log(error.message);
}finally{
    console.log("Finally Block Executed");
}
// File Handling Error
try {
    const data = fs.readFileSync('test.txt', 'utf8');
    console.log(data);
}catch(error){
    console.log("File Error:", error.message);
}
// JSON Parsing Error
try {
    const user = JSON.parse('{name:"Vishnu"}');
    console.log(user);
}catch(error){
    console.log("JSON Error:", error.message);
// Callback Error Handling

fs.readFile('demo.txt', 'utf8', (err, data) => {
    if(err){
        console.log("Callback Error:", err.message);
        return;
    }
    console.log(data);
});
// Promise Error Handling


const promise = new Promise((resolve, reject) => {

    let success = false;

    if(success){
        resolve("Promise Success");
    }else{
        reject("Promise Failed");
    }
});
promise
.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log("Promise Error:", err);
});
// Async/Await Error Handling
function fetchData(){
    return new Promise((resolve, reject) => {
        reject("Server Error");
    });
}
async function getData(){
    try {
        const result = await fetchData();
        console.log(result);
    }catch(error){
        console.log("Async Error:", error);
    }
}
getData();
// Custom Function Error

function divide(a, b){
    if(b === 0){
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
try {
    console.log(divide(10, 0));
}catch(error){
    console.log("Divide Error:", error.message);
}
// Express.js Error Handling

app.get('/', (req, res) => {
    try {
        throw new Error("Server Error");
    }catch(error){
        res.status(500).send(error.message);
    }
});
//Express Global Error Middleware
app.use((err, req, res, next) => {
    res.status(500).send("Global Error: " + err.message);
});
// 404 Error Handling
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});
// Global Process Error Handling

process.on('uncaughtException', (err) => {
    console.log("Uncaught Exception:", err.message);
});
process.on('unhandledRejection', (err) => {
    console.log("Unhandled Rejection:", err);
});
// Start Server
app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});}