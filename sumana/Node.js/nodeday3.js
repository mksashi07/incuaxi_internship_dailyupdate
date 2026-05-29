// DAY 3 - NPM (Node Package Manager)
// Import Packages
import chalk from 'chalk';
import dotenv from 'dotenv';

// Load Environment Variables
dotenv.config();

// USING ENVIRONMENT VARIABLES
console.log(chalk.cyan("\n===== ENVIRONMENT VARIABLES ====="));

console.log("PORT:", process.env.PORT || 5000);

console.log("APP NAME:", process.env.APP_NAME || "NPM Project");

// SIMPLE FUNCTIONS
console.log(chalk.magenta("\n===== FUNCTIONS ====="));

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log("Addition:", add(10, 20));

console.log("Multiplication:", multiply(5, 4));

// ARRAY PRACTICE
console.log(chalk.red("\n===== ARRAY PRACTICE ====="));

const npmTopics = [
    "npm init",
    "npm install",
    "package.json",
    "node_modules",
    "nodemon",
    "chalk",
    "dotenv"
];

npmTopics.forEach((topic, index) => {
    console.log(`${index + 1}. ${topic}`);
});

// OBJECT PRACTICE
console.log(chalk.green("\n===== OBJECT PRACTICE ====="));

const student = {
    name: "Sumana",
    course: "Node.js",
    phase: "NPM Learning"
};

console.log(student);

// LOOP PRACTICE
console.log(chalk.blue("\n===== LOOP PRACTICE ====="));

for (let i = 1; i <= 5; i++) {
    console.log(`Iteration: ${i}`);
}

// PACKAGE INFORMATION
console.log(chalk.yellow("\n===== PACKAGE USAGE ====="));

console.log("Chalk is used for colorful terminal output");

console.log("Dotenv is used for environment variables");

console.log("Nodemon automatically restarts the server");

// FINAL MESSAGE
console.log(chalk.green("\n===== PROJECT COMPLETED ====="));

console.log(chalk.bold("Day 3 NPM Learning Completed Successfully!"));