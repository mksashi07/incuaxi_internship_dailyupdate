// debugging.js

function calculateTotal(price, quantity) {
    let total = price * quantity;

    debugger; // Execution pauses here when DevTools is open

    return total;
}

let price = 100;
let quantity = 5;

let result = calculateTotal(price, quantity);

console.log("Total Amount:", result);
// error-debugging.js

try {
    let num = 10;

    console.log("Value:", num);

    // Intentional error
    console.log(value);

} catch (error) {
    console.error("Error Found:", error.message);
}

console.log("Program Continues...");
// terminal.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    console.log(`Welcome ${name}`);
    rl.close();
});
// calculator.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (num1) => {

    rl.question("Enter second number: ", (num2) => {

        let sum = Number(num1) + Number(num2);

        console.log("Sum =", sum);

        rl.close();
    });
});
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (num) => {

    let number = Number(num);

    debugger; // Pause here during debugging

    if (isNaN(number)) {
        console.log("Invalid Input");
    } else {
        console.log("Square =", number * number);
    }

    rl.close();
});
//# Run JavaScript file
//node filename.js

//# Check Node.js version
//node -v
//node
//# Open Node.js REPL

//# Clear terminal
//cls      # Windows
//clear    # Linux/Mac

//# Exit Node REPL
//.exit