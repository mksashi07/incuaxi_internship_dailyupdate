//1. DEBUGGING INTRO
let a = 10;
let b = 20;
let sum = a + b;
console.log("A =", a);
console.log("B =", b);
console.log("Sum =", sum);
// debugger statement pauses execution
debugger;
let product = a * b;
console.log("Product =", product);
//2. DEBUGGING CONSOLE
// Normal message
console.log("This is a log message");
// Information
console.info("Information Message");
// Warning
console.warn("Warning Message");
// Error
console.error("Error Message");
// Table Output
const students = [
    { id: 1, name: "John", marks: 90 },
    { id: 2, name: "Alice", marks: 85 },
    { id: 3, name: "Bob", marks: 78 }
];
console.table(students);
// Grouping Logs
console.group("User Details");
console.log("Name: Rahul");
console.log("Age: 22");
console.log("City: Bangalore");
console.groupEnd();
// Timer
console.time("Loop Time");
for (let i = 0; i < 1000000; i++) {
    // loop
}
console.timeEnd("Loop Time");
//3. DEBUGGING BREAKPOINTS
function calculateSquare(number) {
    debugger; // breakpoint
    let result = number * number;
    console.log("Square of", number, "=", result);
    return result;
}
calculateSquare(5);
calculateSquare(10);
//4. DEBUGGING ERRORS
// Try Catch Example
try {
    let value = 100;
    console.log("Value =", value);
    // Intentional error
    console.log(undefinedVariable);
}
catch (error) {
    console.error("Caught Error:");
    console.error(error.message);
}
finally {
    console.log("Finally Block Executed");

}
// Custom Error Example
function divide(x, y) {
    if (y === 0) {
        throw new Error("Cannot divide by zero");
    }
    return x / y;
}
try {
    console.log("Division =", divide(10, 2));
    console.log("Division =", divide(10, 0));
}
catch (error) {
    console.error("Custom Error:", error.message);
}
   //5. DEBUGGING ASYNC
// Async using setTimeout
console.log("Task 1 Started");
setTimeout(() => {
    debugger;
    console.log("Task 2 Completed After 2 Seconds");
}, 2000);
console.log("Task 3 Running");
// Promise Example
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data Received Successfully");
            } else {
                reject("Data Fetch Failed");
            }
        }, 3000);
    });
}
fetchData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
//ASYNC AWAIT DEBUGGING
async function getUser() {
    try {
        console.log("Loading User...");
        debugger;
        const user = await new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    name: "Shreya",
                    role: "Developer"
                });
            }, 2000);
        });
        console.log("User Loaded");
        console.table(user);
    }
    catch (error) {
        console.error(error);
    }
}
getUser();
//1. INTRO TO EVENTS
function showMessage() {
    console.log("Button Clicked");
}
const introButton = document.getElementById("introBtn");
if (introButton) {
    introButton.onclick = showMessage;
}
//2. MOUSE EVENTS
const mouseButton = document.getElementById("mouseBtn");
if (mouseButton) {
    mouseButton.addEventListener("click", () => {
        console.log("Mouse Click Event");
    });
    mouseButton.addEventListener("dblclick", () => {
        console.log("Double Click Event");
    });
    mouseButton.addEventListener("mouseover", () => {
        console.log("Mouse Over Event");
    });
    mouseButton.addEventListener("mouseout", () => {
        console.log("Mouse Out Event");
    });
    mouseButton.addEventListener("mousedown", () => {
        console.log("Mouse Down Event");
    });
    mouseButton.addEventListener("mouseup", () => {
        console.log("Mouse Up Event");
    });
}
//3. KEYBOARD EVENTS
const keyboardInput =
document.getElementById("keyboardInput");
if (keyboardInput) {
    keyboardInput.addEventListener(
        "keydown",
        (event) => {
            console.log(
                "Key Down:",
                event.key
            );
        }
    );
    keyboardInput.addEventListener(
        "keyup",
        (event) => {
            console.log(
                "Key Up:",
                event.key
            );
        }
    );
    keyboardInput.addEventListener(
        "keypress",
        (event) => {
            console.log(
                "Key Press:",
                event.key
            );
        }
    );
}
   //4. LOAD EVENTS
window.addEventListener(
    "load",
    () => {
        console.log(
            "Window Loaded Successfully"
        );
    }
);

document.addEventListener(
    "DOMContentLoaded",
    () => {
        console.log(
            "DOM Fully Loaded"
        );
    }
);
// 5. TIMING EVENTS
setTimeout(() => {
    console.log(
        "Executed After 3 Seconds"
    );
}, 3000);
let count = 0;
const timer = setInterval(() => {
    count++;
    console.log(
        "Counter:",
        count
    );
    if (count === 5) {
        clearInterval(timer);
        console.log(
            "Interval Stopped"
        );
    }
}, 1000);
//6. MANAGE EVENTS
const testButton =
document.getElementById("testBtn");
function greet() {
    console.log(
        "Event Listener Active"
    );
}
const addEventBtn =
document.getElementById("addEvent");
const removeEventBtn =
document.getElementById("removeEvent");
if (addEventBtn) {
    addEventBtn.addEventListener(
        "click",
        () => {
            testButton.addEventListener(
                "click",
                greet
            );
            console.log(
                "Event Added"
            );
        }
    );
}
if (removeEventBtn) {
    removeEventBtn.addEventListener(
        "click",
        () => {
            testButton.removeEventListener(
                "click",
                greet
            );
            console.log(
                "Event Removed"
            );
        }
    );
}
//8. EVENT LISTENER
const heading =
document.getElementById("heading");
if (heading) {
    heading.addEventListener(
        "click",
        () => {
            console.log(
                "Heading Clicked"
            );
        }
    );
    heading.addEventListener(
        "mouseover",
        () => {
            console.log(
                "Mouse Enter Heading"
            );
        }
    );
    heading.addEventListener(
        "mouseout",
        () => {
            console.log(
                "Mouse Leave Heading"
            );
        }
    );
}