// 1. NODE ASYNC
console.log("Start Program");
setTimeout(() => {
    console.log("Async Task Completed");
}, 2000);
console.log("End Program");
// CALLBACK FUNCTION
function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}
function completed() {
    console.log("Greeting Completed");
}
greetUser("Shreya", completed);
// ASYNC FILE READING
const fs = require("fs");
fs.readFile("demo.txt", "utf8", (error, data) => {
    if (error) {
        console.log("File Error:", error.message);
    } else {
        console.log("File Data:");
        console.log(data);
    }
});
// 2. NODE PROMISES
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise Success");
    } else {
        reject("Promise Failed");
    }
});
promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
// PROMISE WITH TIMEOUT
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);
    });
}
fetchData()
    .then(data => {
        console.log(data);
    });
// MULTIPLE PROMISES
function task1() {
    return Promise.resolve("Task 1 Done");
}
function task2() {
    return Promise.resolve("Task 2 Done");
}
Promise.all([task1(), task2()])
    .then(results => {
        console.log(results);
    });
// 3. NODE ASYNC/AWAIT
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Shreya",
                course: "Node.js"
            });
        }, 2000);
    });
}
async function displayUser() {
    console.log("Loading User...");
    let user = await getUser();
   console.log(user);
}
displayUser();
// ASYNC/AWAIT WITH FILE SYSTEM
const fsPromises = require("fs").promises;
async function readFileData() {
    try {
        let data = await fsPromises.readFile(
            "demo.txt",
            "utf8"
        );
        console.log(data);
    } catch (error) {
        console.log("Read Error:", error.message);
    }
}
readFileData();
// 4. NODE ERROR HANDLING
try {
    let number = 10;
    console.log(number / 2);
} catch (error) {
    console.log(error.message);
}
// ASYNC ERROR HANDLING
function loginUser() {
    return new Promise((resolve, reject) => {
        let login = false;
        if (login) {
            resolve("Login Success");
        } else {
            reject("Invalid Login");
        }
    });
}
async function checkLogin() {
    try {
        let result = await loginUser();
        console.log(result);
    } catch (error) {
        console.log("Login Error:", error);
    }
}
checkLogin();
// UNHANDLED ERROR EXAMPLE
process.on("uncaughtException", (error) => {
    console.log(
        "Unhandled Exception:",
        error.message
    );
});
// CUSTOM ERROR
function checkAge(age) {
    if (age < 18) {
        throw new Error(
            "Age must be 18 or above"
        );
    }
    return "Access Granted";
}
try {
    console.log(checkAge(15));
} catch (error) {
    console.log("Custom Error:", error.message);
}