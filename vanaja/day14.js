console.log("===== JavaScript Debugging Demo =====");

console.log("\n1. DEBUGGING INTRO");

let a = 17;
let b = 29;
let sum = a + b;

console.log("A =", a);
console.log("B =", b);
console.log("Sum =", sum);

// debugger statement pauses execution
debugger;
let product = a * b;
console.log("Product =", product);
//  2. DEBUGGING CONSOLE
console.log("\n2. DEBUGGING CONSOLE");

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
console.log("\n3. DEBUGGING BREAKPOINTS");

function calculateSquare(number) {

    debugger; // breakpoint

    let result = number * number;

    console.log("Square of", number, "=", result);

    return result;
}

calculateSquare(5);
calculateSquare(10);

// 4. DEBUGGING ERRORS


console.log("\n4. DEBUGGING ERRORS");

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

// 5. DEBUGGING ASYNC

console.log("\n5. DEBUGGING ASYNC");

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
function findLargest(numbers) {
    debugger;
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        console.log(
            "Comparing",
            largest,
            "with",
            numbers[i]
        );
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
const nums = [12, 45, 7, 89, 23, 100];
console.log(
    "Largest Number =",
    findLargest(nums)
);
console.log("\nEnd of Debugging Demo ");