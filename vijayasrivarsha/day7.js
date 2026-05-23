//Basic Closure
function outer() {
    let message = "Hello Closure";

    function inner() {
        console.log(message);
    }

    return inner;
}

const fn = outer();
fn(); 

//Counter using Closure
function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter(); 
counter(); 
counter(); 


//Data Privacy
function bankAccount() {
    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;
            console.log(balance);
        },
        getBalance() {
            return balance;
        }
    };
}

const account = bankAccount();

account.deposit(500);   
console.log(account.getBalance()); 

//setTimeout 

setTimeout(() => {
    console.log("Runs after 2 seconds");
}, 2000);

//Cancel Timeout

let id = setTimeout(() => {
    console.log("Will not run");
}, 2000);

clearTimeout(id);

//ES6 Modules

export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export default function greet(name) {
    console.log("Hello " + name);
}
import { add, sub } from './math.js';
import greet from './greet.js';

console.log(add(5, 3)); 
console.log(sub(5, 3)); 

greet("Varsha");

//Asynchronous

console.log("Start");

setTimeout(() => {
    console.log("Async Task");
}, 1000);

console.log("End");

//Callback

function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

//promise

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Promise resolved"), 1000);
    });
}

getData().then(data => console.log(data));

//Async/Await

function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Async/Await data"), 1000);
    });
}
async function fetchData() {
    let result = await getData();
    console.log(result);
}
fetchData();
//Error Handling



