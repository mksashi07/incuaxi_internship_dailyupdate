//Testing & Debugging
//Testing -  It is the process of verifying that your Node.js application works correctly and produces the expected output.
function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // 30
console.log(add(5, 5));   // 10

//Debugging is the process of finding and fixing errors (bugs) in a program.
function greet() {
    console.log("Hello")
}

//Runtime Error Example
let user;

console.log(user.name);

//Logical Error Example
function multiply(a, b) {
    return a + b;
}

console.log(multiply(10, 5));

//Basic Debugging Using console.log()
function calculateTotal(price, quantity) {

    console.log("Price:", price);
    console.log("Quantity:", quantity);

    return price * quantity;
}

const total = calculateTotal(100, 5);

console.log("Total:", total);

//Basic Debugging Using console.log()
function calculateTotal(price, quantity) {

    console.log("Price:", price);
    console.log("Quantity:", quantity);

    return price * quantity;
}

const total = calculateTotal(100, 5);

console.log("Total:", total);

//Node Advanced Debugging - Node.js provides built-in debugging tools that allow developers to pause execution, inspect variables, and trace errors.
//Using debugger Keyword
function add(a, b) {

    debugger;

    return a + b;
}

console.log(add(10, 20));

//Using try...catch
try {

    let user = null;

    console.log(user.name);

}
catch(error) {

    console.log("Error:", error.message);

}

//Stack Trace Debugging
function level1() {
    level2();
}

function level2() {
    level3();
}

function level3() {
    throw new Error("Something went wrong");
}

level1();

//Testing applications means writing automated tests that verify your application functionality.
//Application Code
function square(number) {
    return number * number;
}

module.exports = square;

//Test Code
const square = require("./square");

console.log(square(5));

//Assertion Testing - Assertions compare actual results with expected results.
//Using Node assert Module
const assert = require("assert");

function add(a, b) {
    return a + b;
}

assert.strictEqual(add(5, 5), 10);

console.log("Test Passed");

//Failed Assertion
const assert = require("assert");

function add(a, b) {
    return a + b;
}

assert.strictEqual(add(5, 5), 15);

//A Test Framework is a library that helps automate writing and running tests.
//math.js
function add(a, b) {
    return a + b;
}

module.exports = add;

//math.test.js
const add = require("./math");

test("adds numbers", () => {

    expect(add(5, 5)).toBe(10);

});

//Mocha Example
//math.js
function multiply(a, b) {
    return a * b;
}

module.exports = multiply;

//test.js
const assert = require("assert");
const multiply = require("./math");

describe("Multiply Test", () => {

    it("Should multiply numbers", () => {

        assert.equal(
            multiply(5, 2),
            10
        );

    });

});

//Node.js Test Runner is a built-in testing module introduced in modern Node.js versions that allows running tests without installing external frameworks.
//Built-in Test Runner
//math.js
function add(a, b) {
    return a + b;
}

module.exports = add;

//math.test.js
const test = require("node:test");
const assert = require("node:assert");

function add(a, b) {
    return a + b;
}

test("Addition Test", () => {

    assert.strictEqual(
        add(10, 20),
        30
    );

});

//MULTIPLE TESTS
const test = require("node:test");
const assert = require("node:assert");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

test("Add Test", () => {

    assert.strictEqual(
        add(10, 10),
        20
    );

});

test("Subtract Test", () => {

    assert.strictEqual(
        subtract(10, 5),
        5
    );

});
