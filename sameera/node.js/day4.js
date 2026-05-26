// V8 Engine Example in Node.js

console.log("Running JavaScript using V8 Engine");

let a = 10;
let b = 20;

function add(x, y) {
    return x + y;
}

let result = add(a, b);

console.log("Addition:", result);

// Checking memory usage handled by V8
console.log("Memory Usage:");
console.log(process.memoryUsage());
//ASYNCHRONOUS
// asynchronous example in Node.js

console.log("Program Started");

// asynchronous function
setTimeout(() => {
    console.log("This message appears after 3 seconds");
}, 3000);

console.log("Program Ended");
//ERROR HANDLING
const fs = require("fs");

// reading a file that does not exist

fs.readFile("missing.txt", "utf8", (err, data) => {

    if (err) {
        console.log("Error Occurred:");
        console.log(err.message);
        return;
    }

    console.log(data);
});
//PROMISE ERROR HANDLING
function divide(a, b) {

    return new Promise((resolve, reject) => {

        if (b === 0) {
            reject("Cannot divide by zero");
        } else {
            resolve(a / b);
        }

    });
}

divide(10, 0)
    .then((result) => {
        console.log("Result:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
    //TRY CATCH ERROR HANDLING
    // error handling using try-catch

try {
    let result = 10 / 0;

    console.log(result);

    // generating manual error
    throw new Error("Something went wrong");

} catch (error) {

    console.log("Error Message:", error.message);

} finally {

    console.log("Program Finished");

}
