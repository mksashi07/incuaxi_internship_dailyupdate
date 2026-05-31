// readline_module_example.js

const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Student Information System ");

// Ask for student name
rl.question("Enter Student Name: ", (name) => {

    // Ask for age
    rl.question("Enter Age: ", (age) => {

        // Ask for course
        rl.question("Enter Course: ", (course) => {

            // Ask for city
            rl.question("Enter City: ", (city) => {

                console.log("\n===== Student Details =====");

                console.log("Name   :", name);
                console.log("Age    :", age);
                console.log("Course :", course);
                console.log("City   :", city);

                console.log("\n===== Additional Information =====");

                let currentYear = new Date().getFullYear();

                console.log("Current Year :", currentYear);

                if (age >= 18) {
                    console.log("Status : Adult");
                } else {
                    console.log("Status : Minor");
                }

                console.log("Course Length :",
                    course.length);

                console.log("City in Uppercase :",
                    city.toUpperCase());

                console.log("Name in Lowercase :",
                    name.toLowerCase());

                console.log("\n===== Program Completed =====");

                rl.close();
            });
        });
    });
});

// Event when readline closes
rl.on("close", () => {
    console.log("Readline Interface Closed.");
    process.exit(0);
});