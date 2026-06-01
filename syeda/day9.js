// 1. JavaScript Scope
console.log("===== JavaScript Scope =====");
// Global Scope
let globalVar = "I am Global";
function globalExample() {
    console.log(globalVar);
}
globalExample();
// Function Scope
function functionScopeExample() {
    let functionVar = "I am Function Scope";
    console.log(functionVar);
}
functionScopeExample();
// Block Scope with let
{
    let blockVar = "I am Block Scope";
    console.log(blockVar);
}

// console.log(blockVar); // Error
// var is NOT block scoped
{
    var testVar = "var is function scoped";
}
console.log(testVar);
// Lexical Scope
function outerFunction() {
    let outerVar = "Outer Variable";

    function innerFunction() {
        console.log(outerVar);
    }

    innerFunction();
}
outerFunction();

// Scope Chain
let name = "JavaScript";

function first() {
    function second() {
        console.log(name);
    }
    second();
}
first();
// 2. JavaScript Date
console.log("\n===== JavaScript Date =====");
// Current Date and Time
let currentDate = new Date();
console.log("Current Date:", currentDate);
// Specific Date
let customDate = new Date("2025-12-25");
console.log("Custom Date:", customDate);
// Creating Date with Parameters
let dateObj = new Date(2025, 5, 15, 10, 30, 0);
console.log("Date Object:", dateObj);
// Get Methods
console.log("\n--- Get Methods ---");
console.log("Year:", currentDate.getFullYear());
console.log("Month:", currentDate.getMonth() + 1);
console.log("Date:", currentDate.getDate());
console.log("Day:", currentDate.getDay());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());
// Set Methods
console.log("\n--- Set Methods ---");
let modifyDate = new Date();
modifyDate.setFullYear(2030);
modifyDate.setMonth(11);
modifyDate.setDate(31);
console.log("Modified Date:", modifyDate);
// Date Formats
console.log("toDateString():", currentDate.toDateString());
console.log("toTimeString():", currentDate.toTimeString());
console.log("toISOString():", currentDate.toISOString());
console.log("toLocaleDateString():",
    currentDate.toLocaleDateString());
console.log("toLocaleTimeString():",
    currentDate.toLocaleTimeString());

// Date Difference
console.log("\n--- Date Difference ---");
let startDate = new Date("2025-01-01");
let endDate = new Date("2025-12-31");
let difference =
    endDate.getTime() - startDate.getTime();
let days =
    difference / (1000 * 60 * 60 * 24);
console.log("Difference in Days:", days);
// Timestamp
console.log("\n--- Timestamp ---");
console.log("Current Timestamp:", Date.now());
