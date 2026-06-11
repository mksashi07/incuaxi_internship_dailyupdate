let age1 = 21;
const country = "India";

console.log(age1);
console.log(country);

const add = (a, b) => a + b;

console.log(add(5, 3));

const personName = "Pavithra";
console.log(`Hello ${personName}`);

const student = {
    name: "Pavithra",
    age: 21
};

const { name: studentName, age: studentAge } = student;

console.log(studentName);
console.log(studentAge);

const numbers1 = [1, 2, 3];
const numbers2 = [...numbers1, 4, 5];

console.log(numbers2);

function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();
greet("Pavithra");

class Student {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}

const s1 = new Student("Pavithra");
s1.display();

const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Data Loaded");
    } else {
        reject("Error");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function getData() {
    const result = await fetchData();
    console.log(result);
}

getData();

const { add: mathAdd } = require("./math");

console.log(mathAdd(2, 3));

class User {
    constructor(name) {
        this.name = name;
    }
    login() {
        console.log(`${this.name} Logged In`);
    }
}

const user1 = new User("Pavithra");
user1.login();

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

const ages = [12, 18, 25, 10, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults);

const nums = [10, 20, 30];
const total = nums.reduce((sum, value) => sum + value, 0);
console.log(total);