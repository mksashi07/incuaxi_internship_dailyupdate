//read line module
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Simple Calculator ===");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

rl.question("Choose an operation (1-4): ", (choice) => {

    rl.question("Enter first number: ", (num1) => {

        rl.question("Enter second number: ", (num2) => {

            num1 = Number(num1);
            num2 = Number(num2);

            let result;

            switch (choice) {
                case "1":
                    result = num1 + num2;
                    break;
                case "2":
                    result = num1 - num2;
                    break;
                case "3":
                    result = num1 * num2;
                    break;
                case "4":
                    result = num2 !== 0
                        ? num1 / num2
                        : "Cannot divide by zero";
                    break;
                default:
                    result = "Invalid choice";
            }

            console.log(`Result: ${result}`);
            rl.close();

        });

    });

});

rl.on('close', () => {
    console.log("Calculator Closed");
});