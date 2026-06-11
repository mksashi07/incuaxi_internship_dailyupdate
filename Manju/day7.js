// 1. CLOSURES
console.log("----- Closures -----");

function outerFunction() {
    let count = 0;

    return function innerFunction() {
        count++;
        console.log("Count:", count);
    };
}
const counter = outerFunction();
counter();
counter();
counter();
// 2. SET TIMEOUT
console.log("----- setTimeout -----");
console.log("Start");
setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);
console.log("End");
// 3. ES6 MODULES

// ---- math.js ----
/*
export function add(a, b) {
    return a + b;
}

export const name = "JavaScript";
*/

// ---- app.js ----
/*
import { add, name } from "./math.js";

console.log(add(10,20));
console.log(name);
*/
// 4. ASYNCHRONOUS: PROMISES
console.log("----- Promises -----");
let promiseExample = new Promise((resolve, reject) => {

    let success = true;

    if(success){
        resolve("Promise Resolved");
    }else{
        reject("Promise Rejected");
    }
});
promiseExample
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});
// 5. ASYNC / AWAIT
console.log("----- Async Await -----");
function fetchData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data Received");
        }, 3000);

    });
}
async function displayData() {
    console.log("Loading...");
    let result = await fetchData();
    console.log(result);
}
displayData();
// 6. SIDE BY SIDE COMPARISON
console.log("----- Promise vs Async/Await -----");
// ---- PROMISE METHOD ----
function getUserPromise() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("User Data by Promise");
        }, 1000);

    });

}
getUserPromise()
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});

// ---- ASYNC / AWAIT METHOD ----
function getUserAsync() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("User Data by Async Await");
        }, 1000);

    });

}
async function showUser() {
    try {

        let data = await getUserAsync();

        console.log(data);

    } catch(error) {

        console.log(error);

    }
}
showUser();


