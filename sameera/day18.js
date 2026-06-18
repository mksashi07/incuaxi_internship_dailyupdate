//ES Modules (Modern JavaScript)
export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}
//CommonJS 
function add(a, b) {
    return a + b;
}

module.exports = {
    add
};
//Webpack
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet("Sameera"));

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
//Vite
function welcome() {
    console.log("Welcome to Vite");
}

welcome();
//Babel
const greet = (name) => {
    return `Hello ${name}`;
};

console.log(greet("Sameera"));
//JSON Objects
const student = {
    "id": 101,
    "name": "Sameera",
    "course": "EEE"
};

console.log(student.name);
console.log(student.course);
//JSON.parse()
const jsonString =
'{"name":"Sameera","age":20}';

const student = JSON.parse(jsonString);

console.log(student.name);
console.log(student.age);

//JSON.stringify()
const student = {
    name: "Sameera",
    age: 20
};

const jsonString =
    JSON.stringify(student);

console.log(jsonString);
//Pretty Print JSON
const student = {
    id: 101,
    name: "Sameera",
    city: "Hyderabad"
};

console.log(
    JSON.stringify(
        student,
        null,
        4
    )
);
//Add Element to JSON Object
const student = {
    name: "Sameera",
    age: 20
};

student.city = "Hyderabad";

console.log(student);
//Update Existing JSON Value
const student = {
    name: "Sameera",
    age: 20
};

student.age = 21;

console.log(student);
//Delete Property from JSON
const student = {
    name: "Sameera",
    age: 20,
    city: "Hyderabad"
};

delete student.city;

console.log(student);
//Read JSON File in Node.js
const fs = require("fs");

fs.readFile(
    "student.json",
    "utf8",
    (err, data) => {

        if (err) {
            console.log(err);
            return;
        }

        const student =
            JSON.parse(data);

        console.log(student);
    }
);
//Write JSON to File
const fs = require("fs");

const student = {
    name: "Sameera",
    age: 20
};

fs.writeFile(
    "student.json",
    JSON.stringify(student, null, 2),
    err => {
        if (!err)
            console.log("Saved");
    }
);
