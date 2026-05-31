//Callback Functions - is a function passed as an argument to another function and executed later when a specific task is completed.
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayGudmng() {
    console.log("Good morning!");
}

greet("Mounika", sayGudmng);

//A Promise is an object that represents the eventual completion or failure of an asynchronous operation.
let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));

//async and await make asynchronous code easier to write and read.
//async makes a function return a Promise.
//await pauses execution until the Promise resolves. 

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function getData() {
    console.log("Fetching Data...");

    let result = await fetchData();

    console.log(result);
}

getData();

//JSON is a lightweight format used for storing and exchanging data between applications.
let studentJSON = `{
    "id": 101,
    "name": "Mounika",
    "course": "JavaScript"
}`;

console.log(studentJSON);

//Local Storage stores data permanently in the browser until it is manually removed.
//Store data
localStorage.setItem("username", "Mounika");
//Retrive Data
let user = localStorage.getItem("username");
console.log(user);
//Remove data
localStorage.removeItem("username");
//Clear All Data
localStorage.clear();

//Session Storage stores data only for the current browser session.
//store data
sessionStorage.setItem("course", "JavaScript");
//retrive data
let course = sessionStorage.getItem("course");

console.log(course);
//remove data
sessionStorage.removeItem("course");

//Error handling allows programs to continue running even when errors occur
//try and catch
try {
    let result = 10 / 0;

    console.log(result);

    console.log(myVariable); // Error
}
catch(error) {
    console.log("Error Occurred:");
    console.log(error.message);
}

//try, catch, finally
try {
    console.log("Inside Try Block");
}
catch(error) {
    console.log(error.message);
}
finally {
    console.log("Finally Block Executed");
}

//throw Custom Error
let age = 15;

try {
    if (age < 18) {
        throw new Error("You are not eligible to vote.");
    }

    console.log("Eligible to vote");
}
catch(error) {
    console.log(error.message);
}
// All Examples
function getUser(callback) {
    setTimeout(() => {
        callback({
            id: 1,
            name: "Mounika"
        });
    }, 1000);
}

getUser((user) => {
    console.log("Callback User:", user);

    let json = JSON.stringify(user);

    localStorage.setItem("userData", json);

    let storedData = localStorage.getItem("userData");

    console.log(JSON.parse(storedData));
});

async function fetchData() {
    try {
        let promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data Loaded Successfully");
            }, 2000);
        });

        let result = await promise;

        console.log(result);
    }
    catch(error) {
        console.log(error.message);
    }
}

fetchData();
