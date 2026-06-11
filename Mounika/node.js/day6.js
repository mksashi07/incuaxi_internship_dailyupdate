1. Node Advanced Debugging 

function calculateTotal(price, quantity) {
    debugger;

    if (price < 0 || quantity < 0) {
        throw new Error("Price and Quantity must be positive");
    }

    return price * quantity;
}

try {
    const total = calculateTotal(100, 5);
    console.log("Total Amount:", total);
} catch (error) {
    console.error("Error:", error.message);
}

Run:

node inspect app.js


---

2. Node Testing Application
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));


---

3. Node Test Framework Using Mocha

calculator.js

function add(a, b) {
    return a + b;
}

module.exports = add;

test.js

const assert = require('assert');
const add = require('./calculator');

describe('Calculator Test', function () {
    it('Should return 15', function () {
        assert.strictEqual(add(10, 5), 15);
    });

    it('Should return 30', function () {
        assert.strictEqual(add(20, 10), 30);
    });
});

Install Mocha:

npm install mocha --save-dev

Run:

npx mocha test.js


---

4. Node Test Runner (Built-in Node.js)

math.js

function multiply(a, b) {
    return a * b;
}

module.exports = multiply;

math.test.js

const test = require('node:test');
const assert = require('node:assert');
const multiply = require('./math');

test('Multiply 5 and 4', () => {
    assert.strictEqual(multiply(5, 4), 20);
});

test('Multiply 10 and 2', () => {
    assert.strictEqual(multiply(10, 2), 20);
});

Run:

node --test


---

5. Combined Testing & Debugging 

const test = require('node:test');
const assert = require('node:assert');

function add(a, b) {
    debugger;
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));

test('Addition Test', () => {
    assert.strictEqual(add(10, 5), 15);
});

test('Subtraction Test', () => {
    assert.strictEqual(subtract(10, 5), 5);
});

test('Multiplication Test', () => {
    assert.strictEqual(multiply(10, 5), 50);
});

test('Division Test', () => {
    assert.strictEqual(divide(10, 5), 2);
});