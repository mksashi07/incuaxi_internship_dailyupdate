// Import readline module
const readline = require('readline');

// Create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for name
rl.question("Enter your name: ", function(name) {

    // Print the name
    console.log("Hello " + name);

    // Close the interface
    rl.close();
});