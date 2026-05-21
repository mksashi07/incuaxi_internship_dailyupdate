//mathOperations.js

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

module.exports = {
    multiply,
    divide
};

//app.js

const operations = require("./mathOperations");
console.log(operations.multiply(5, 10), operations.divide(10, 5));

//fileSystemDemo.js

const fs = require("fs");

fs.writeFileSync("note1.txt", "Hello Node JS File System");

fs.writeFile("note2.txt", "Hello Async File", (err) => {
    if (err) console.log(err);
});

const dataSync = fs.readFileSync("note2.txt", "utf-8");
console.log(dataSync);

const dataAsync = fs.readFile("note1.txt", "utf-8");
console.log(dataAsync);

fs.readFile("note2.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("error:", err);
    } else {
        console.log(data);
    }
});
