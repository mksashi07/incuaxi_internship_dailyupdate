// NPM 
// IMPORTING PACKAGES
const express = require("express");
const _ = require("lodash");
const chalk = require("chalk");
const axios = require("axios");
const figlet = require("figlet");
const cowsay = require("cowsay");
// EXPRESS APP
const app = express();
const PORT = 3000;
// SIMPLE VARIABLES
let students = [
    { id: 1, name: "Shreya", marks: 85 },
    { id: 2, name: "Rahul", marks: 90 },
    { id: 3, name: "Amit", marks: 70 },
    { id: 4, name: "Neha", marks: 95 }
];
// FIGLET PACKAGE EXAMPLE
figlet("NPM DEMO", (err, data) => {
    if (err) {
        console.log("Error");
        return;
    }
    console.log(chalk.yellow(data));
});
// COWSAY PACKAGE EXAMPLE
console.log(
    cowsay.say({
        text: "Welcome to Node.js NPM Example",
        e: "oo",
        T: "U "
    })
);
// LODASH EXAMPLES
let numbers = [1, 2, 3, 4, 5];
console.log("Original Array:", numbers);
// Shuffle Array
let shuffled = _.shuffle(numbers);
console.log("Shuffled Array:", shuffled);
// Reverse Array
let reversed = _.reverse([...numbers]);
console.log("Reversed Array:", reversed);
// Chunk Array
let chunked = _.chunk(numbers, 2);
console.log("Chunked Array:", chunked);
// Random Number
console.log("Random Number:", _.random(1, 100));
