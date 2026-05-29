// DOM MANIPULATION
// Creating elements dynamically
const heading = document.createElement("h1");
heading.textContent = "JavaScript Concepts Demo";
document.body.appendChild(heading);
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);
const output = document.createElement("p");
output.textContent = "Output appears here...";
document.body.appendChild(output);
// DOM Event
button.addEventListener("click", () => {
    output.textContent = "Button Clicked!";
});

// CALLBACK FUNCTION
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function afterGreeting() {
    console.log("Callback function executed!");
}

greet("Manju", afterGreeting);
// PROMISES
const promiseExample = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve("Promise Resolved Successfully!");
        } else {
            reject("Promise Rejected!");
        }
    }, 2000);
});

promiseExample
    .then(result => console.log(result))
    .catch(error => console.log(error));
// ASYNC / AWAIT
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched using Async/Await!");
        }, 3000);
    });
}

async function getData() {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data);
}
getData();
// CLOSURES
function counter() {
    let count = 0;

    return function () {
        count++;
        console.log("Current Count:", count);
    };
}

const increment = counter();
increment();
increment();
increment();
// EXTRA DOM INTERACTION
const input = document.createElement("input");
input.placeholder = "Type something...";
document.body.appendChild(input);

input.addEventListener("keyup", (event) => {
    console.log("Key Pressed:", event.key);
});