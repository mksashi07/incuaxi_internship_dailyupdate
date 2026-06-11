// JAVASCRIPT EVENTS - COMPLETE PRACTICE
// 1. BASIC CLICK EVENT
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  console.log("Button Clicked!");
});
// 2. EVENT OBJECT
button.addEventListener("click", (e) => {
  console.log("Event Type:", e.type);
  console.log("Target Element:", e.target);
});

// 3. INPUT EVENT
const input = document.querySelector("#name");

input.addEventListener("input", (e) => {
  console.log("Input Value:", e.target.value);
});
// 4. KEYBOARD EVENT
document.addEventListener("keydown", (e) => {
  console.log("Key Pressed:", e.key);
});

// 5. FORM SUBMIT EVENT
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Form Submitted");
});

// 6. WINDOW SCROLL EVENT
window.addEventListener("scroll", () => {
  console.log("Scroll Position:", scrollY);
});

// 7. MOUSE EVENTS
const box = document.querySelector("#box");

box.addEventListener("mouseenter", () => {
  console.log("Mouse Entered Box");
});

box.addEventListener("mouseleave", () => {
  console.log("Mouse Left Box");
});

// 8. EVENT BUBBLING
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", () => {
  console.log("Parent Clicked");
});

child.addEventListener("click", () => {
  console.log("Child Clicked");
});
// 9. stopPropagation()
child.addEventListener("click", (e) => {
  e.stopPropagation();

  console.log("Propagation Stopped");
});

// 10. EVENT DELEGATION
const list = document.querySelector("#list");

list.addEventListener("click", (e) => {
  console.log("Clicked Item:", e.target.textContent);
});

// 11. removeEventListener()
function greet() {
  console.log("Hello User");
}

button.addEventListener("click", greet);

button.removeEventListener("click", greet);

// 12. DOMContentLoaded EVENT
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Fully Loaded");
});



// JAVASCRIPT ERROR HANDLING
// 1. BASIC TRY / CATCH
console.log("===== BASIC TRY / CATCH =====");

try {

    const data = JSON.parse("invalid json");

    console.log(data);

} catch (error) {

    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);

}

console.log("\n");

// 2. TRY / CATCH / FINALLY
console.log("===== TRY / CATCH / FINALLY =====");

try {

    console.log("Trying risky code...");

    undefinedFunction();

} catch (error) {

    console.log("Caught Error");
    console.log(error.message);

} finally {

    console.log("Finally block always runs");

}

console.log("\n");

// 3. THROW CUSTOM ERROR
console.log("===== THROW CUSTOM ERROR =====");

const age = -5;

try {

    if (age < 0) {
        throw new Error("Age cannot be negative");
    }

    console.log("Valid Age");

} catch (error) {

    console.log(error.name);
    console.log(error.message);

}

console.log("\n");

// 4. DIFFERENT ERROR TYPES
console.log("===== ERROR TYPES =====");


// ReferenceError
try {

    console.log(userName);

} catch (error) {

    console.log("ReferenceError Example");
    console.log(error.message);

}


// TypeError
try {

    const num = 10;

    num.toUpperCase();

} catch (error) {

    console.log("TypeError Example");
    console.log(error.message);

}


// SyntaxError
try {

    JSON.parse("{ name: 'John' }");

} catch (error) {

    console.log("SyntaxError Example");
    console.log(error.message);

}

console.log("\n");

// 5. CUSTOM ERROR CLASS
console.log("===== CUSTOM ERROR CLASS =====");

class ValidationError extends Error {

    constructor(message) {

        super(message);

        this.name = "ValidationError";

    }

}

try {

    throw new ValidationError("Username is required");

} catch (error) {

    console.log(error.name);
    console.log(error.message);

}

console.log("\n");

// 6. ERROR HANDLING IN FUNCTIONS
console.log("===== FUNCTION ERROR HANDLING =====");

function divide(a, b) {

    if (b === 0) {

        throw new Error("Cannot divide by zero");

    }

    return a / b;

}

try {

    console.log(divide(10, 0));

} catch (error) {

    console.log(error.message);

}

console.log("\n");

// 7. ASYNC/AWAIT ERROR HANDLING
console.log("===== ASYNC/AWAIT ERROR HANDLING =====");

async function fetchData() {

    try {

        const response = await fetch("https://wrong-api-url.com");

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Async Error Caught");
        console.log(error.message);

    }

}

fetchData();

console.log("\n");

// 8. NESTED TRY/CATCH
console.log("===== NESTED TRY/CATCH =====");

try {

    try {

        JSON.parse("invalid");

    } catch (innerError) {

        console.log("Inner Catch:");
        console.log(innerError.message);

    }

} catch (outerError) {

    console.log("Outer Catch:");
    console.log(outerError.message);

}

console.log("\n");

// 9. FORM VALIDATION EXAMPLE
console.log("===== FORM VALIDATION =====");

function registerUser(username) {

    try {

        if (username.length < 3) {

            throw new Error("Username must be at least 3 characters");

        }

        console.log("User Registered");

    } catch (error) {

        console.log(error.message);

    }

}

registerUser("ab");

console.log("\n");

// 10. FINAL EXAMPLE
console.log("===== FINAL COMBINED EXAMPLE =====");

class AgeError extends Error {

    constructor(message) {

        super(message);

        this.name = "AgeError";

    }

}

function checkAge(age) {

    if (age < 0) {

        throw new AgeError("Age cannot be negative");

    }

    if (age < 18) {

        throw new AgeError("Must be 18 or older");

    }

    return "Access Granted";

}

try {

    const result = checkAge(15);

    console.log(result);

} catch (error) {

    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);

} finally {

    console.log("Program Finished");

}