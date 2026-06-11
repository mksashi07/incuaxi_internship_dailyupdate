const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("     READLINE MODULE PROJECT");

rl.question("Enter your name: ", (name) => {

    rl.question("Enter your age: ", (age) => {

        rl.question("Enter first number: ", (num1) => {

            rl.question("Enter second number: ", (num2) => {

                num1 = Number(num1);
                num2 = Number(num2);

                const sum = num1 + num2;
                const difference = num1 - num2;
                const product = num1 * num2;
                const quotient = num2 !== 0
                    ? num1 / num2
                    : "Cannot divide by zero";

                console.log("\n USER DETAILS ");
                console.log("Name :", name);
                console.log("Age  :", age);

                console.log("\n CALCULATIONS ");
                console.log("Sum        :", sum);
                console.log("Difference :", difference);
                console.log("Product    :", product);
                console.log("Quotient   :", quotient);

                console.log("\n===== TABLE OF FIRST NUMBER =====");

                for (let i = 1; i <= 10; i++) {
                    console.log(`${num1} x ${i} = ${num1 * i}`);
                }

                console.log("\nType anything.");
                console.log("Type 'exit' to close program.");
            });
        });
    });
});

rl.on("line", (input) => {

    if (input.toLowerCase() === "exit") {

        console.log("\nClosing Interface...");
        rl.close();

    } else {

        console.log(`You typed: ${input}`);

    }
});

rl.on("close", () => {

    console.log(" Readline Interface Closed");
    console.log(" Program Ended Successfully");

    process.exit(0);
});