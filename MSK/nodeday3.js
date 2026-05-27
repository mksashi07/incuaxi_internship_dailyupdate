const readline = require("readline");

// Create interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Simple Calculator REPL ===");
console.log("Type 'exit' to quit");

// Function to start REPL
function startREPL() {

    rl.question("Enter calculation: ", (input) => {

        // Exit condition
        if (input.toLowerCase() === "exit") {

            console.log("Goodbye!");
            rl.close();
            return;
        }

        try {

            // Evaluate expression
            let result = eval(input);

            console.log("Result:", result);

        } catch (error) {

            console.log("Invalid calculation");
        }

        // Repeat loop
        startREPL();
    });
}

// Start program
startREPL();