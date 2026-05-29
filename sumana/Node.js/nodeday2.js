// 1. SYNCHRONOUS PROGRAMMING
// Code executes line by line
console.log("===== SYNCHRONOUS PROGRAMMING =====");

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

console.log("\n");
// 2. ASYNCHRONOUS PROGRAMMING
// setTimeout executes later without blocking code
console.log("===== ASYNCHRONOUS PROGRAMMING =====");

console.log("Start");

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

console.log("\n");
// 3. CALLBACK FUNCTIONS
// A function passed as an argument to another function
console.log("===== CALLBACK FUNCTIONS =====");

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function afterGreeting() {
    console.log("Callback function executed");
}

greet("Sumana", afterGreeting);

console.log("\n");
// 4. CALLBACK HELL
// Nested callbacks become difficult to manage
console.log("===== CALLBACK HELL =====");

setTimeout(() => {
    console.log("Step 1 Completed");

    setTimeout(() => {
        console.log("Step 2 Completed");

        setTimeout(() => {
            console.log("Step 3 Completed");

            setTimeout(() => {
                console.log("Step 4 Completed");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);

console.log("\n");
// 5. PROMISES
// Promises solve callback hell problems
// States:
// Pending
// Resolved
// Rejected

console.log("===== PROMISES =====");

const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Promise Resolved Successfully");
    } else {
        reject("Promise Rejected");
    }

});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("\n");
// 6. PROMISE CHAINING
// Multiple .then() methods together
console.log("===== PROMISE CHAINING =====");

function fetchData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(10);
        }, 1000);

    });

}

fetchData()
    .then((data) => {
        console.log("Received:", data);
        return data * 2;
    })
    .then((result) => {
        console.log("After Multiplication:", result);
    });

console.log("\n");
// 7. ASYNC / AWAIT
// Cleaner way to handle promises
console.log("===== ASYNC / AWAIT =====");

function getUserData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("User Data Loaded");
        }, 2000);

    });

}

async function displayUserData() {

    console.log("Loading Data...");

    const result = await getUserData();

    console.log(result);

}

displayUserData();

console.log("\n");
// 8. EVENT LOOP
// JavaScript handles async tasks using:
// Call Stack
// Web APIs
// Callback Queue
// Event Loop
console.log("===== EVENT LOOP =====");

console.log("Start");

setTimeout(() => {
    console.log("setTimeout Callback");
}, 0);

console.log("End");

console.log("\n");
// 9. MICROTASK QUEUE
// Promise callbacks execute before setTimeout
console.log("===== MICROTASK QUEUE =====");

console.log("Start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Microtask");
});

console.log("End");

console.log("\n");
// 10. EXECUTION FLOW
// Understanding order of execution
console.log("===== EXECUTION FLOW =====");

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
console.log("\n");
// 11. REAL WORLD EXAMPLE USING ASYNC/AWAIT
// Simulating API call
console.log("===== REAL WORLD EXAMPLE =====");

function fetchUser() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve({
                id: 1,
                name: "Sumana",
                role: "Frontend Developer"
            });
        }, 2000);

    });

}

async function showUser() {

    console.log("Fetching User...");

    const user = await fetchUser();

    console.log("User Details:");
    console.log(user);

}

showUser();

console.log("\n");
