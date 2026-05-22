//Ananomous Functions
//ex 1 
const add = function (a, b) {
    return a + b;
};

console.log(add(10, 5));

//ex2
setTimeout(function () {
    console.log("Welcome Yogesh!");
}, 2000);

//string slicing

let fullName = "Yogesh Kumar";

let firstName = fullName.slice(1, 3);

console.log(firstName);

//method chaining
let word = "   programming   ";

let result = word.trim().toUpperCase().slice(0, 7);

console.log(result);

//callback function

function doTask(taskName, callback) {
    console.log(taskName + " started");
    callback();
}

function taskDone() {
    console.log("Task completed");
}

doTask("Homework", taskDone);

//spread operator
let fruits = ["Apple", "Banana", "Mango"];

let copiedFruits = [fruits];

console.log(copiedFruits);

//merge two arrays 
let frontend = ["HTML", "CSS"];
let backend = ["Node.js", "MongoDB"];

let fullStack = [...frontend, ...backend];

console.log(fullStack);

//rest operator

function show(...items) {
    console.log(items);
}

show("Pen", "Book", "Bag");