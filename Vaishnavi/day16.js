//MODULES - Modules are used to divide JavaScript code into separate files so that code becomes reusable, maintainable, and organized.
//Expot Example
//math.js
// Exporting variables
export const PI = 3.14;

// Exporting function
export function add(a, b) {
    return a + b;
}

// Exporting class
export class Calculator {
    multiply(a, b) {
        return a * b;
    }
}

//Import example
//app.js
import { PI, add, Calculator } from "./math.js";

console.log(PI);

console.log(add(10, 20));

const calc = new Calculator();
console.log(calc.multiply(5, 4));

//Default Export
//user.js
export default function greet(name) {
    return `Hello ${name}`;
}
//app.js
import greet from "./user.js";

console.log(greet("Mounika"));

// Export Multiple Functions
//operations.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

//app.js
import { add, subtract, multiply } from "./operations.js";

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));

//Event Bubbling is the process where an event starts from the target element and moves upward through its parent elements.
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
    console.log("Parent Clicked");
});

child.addEventListener("click", () => {
    console.log("Child Clicked");
});

//Menu System
document.getElementById("menu")
.addEventListener("click", () => {
    console.log("Menu Opened");
});

document.getElementById("item")
.addEventListener("click", () => {
    console.log("Item Selected");
});

//Event Capturing is the process where the event starts from the top-most ancestor and travels down to the target element.
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener(
    "click",
    () => {
        console.log("Parent Capturing");
    },
    true
);

child.addEventListener(
    "click",
    () => {
        console.log("Child Capturing");
    },
    true
);

//Form Submission
document.body.addEventListener("click", () => {
    console.log("Body Capture");
}, true);

document.getElementById("form")
.addEventListener("click", () => {
    console.log("Form Capture");
}, true);

document.getElementById("submitBtn")
.addEventListener("click", () => {
    console.log("Button Capture");
}, true);

//Debouncing ensures that a function executes only after a specified delay has passed since the last event occurred.
function search(text) {
    console.log("Searching:", text);
}

const debouncedSearch = debounce(search, 1000);

debouncedSearch("M");
debouncedSearch("Mo");
debouncedSearch("Mou");
debouncedSearch("Mounika");

//Resize Window
window.addEventListener(
    "resize",
    debounce(() => {
        console.log("Window Resized");
    }, 1000)
);

//Throttling ensures that a function executes at most once during a specified time interval.
function showMessage() {
    console.log("Button Clicked");
}

const throttledClick = throttle(showMessage, 2000);

setInterval(throttledClick, 500);

//Button Example
function throttle(func, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
}

function submitForm() {
    console.log("Form Submitted");
}

const throttledSubmit = throttle(submitForm, 3000);
