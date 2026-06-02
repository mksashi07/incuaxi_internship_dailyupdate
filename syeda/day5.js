// JS Scope

console.log("=== JS Scope ===");

// Global Scope
let globalVar = "I am Global";

function globalExample() {
    console.log(globalVar);
}
globalExample();

// Function Scope
function functionScope() {
    let age = 20;
    console.log("Function Scope:", age);
}
functionScope();

// Block Scope
{
    let x = 10;
    const y = 20;
    var z = 30;

    console.log("Block let:", x);
    console.log("Block const:", y);
}

console.log("var outside block:", z);

// Lexical Scope
function outer() {
    let name = "Ayesha";

    function inner() {
        console.log("Lexical Scope:", name);
    }

    inner();
}
outer();

// JS Code Blocks
console.log("\n=== JS Code Blocks ===");
{
    let a = 100;
    console.log("Inside block:", a);
}

// JS Hoisting
console.log("\n=== JS Hoisting ===");

console.log(testVar);
var testVar = 50;

hello();

function hello() {
    console.log("Function Hoisted");
}

// JS Strict Mode
console.log("\n=== JS Strict Mode ===");

"use strict";

let strictValue = 10;
console.log(strictValue);

// JS Sets
console.log("\n=== JS Sets ===");

let set1 = new Set();

set1.add(10);
set1.add(20);
set1.add(30);
set1.add(10);

console.log(set1);

