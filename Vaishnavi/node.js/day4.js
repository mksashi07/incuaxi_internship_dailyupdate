//ES6
let age = 21;
const country = "India";
console.log(age);
console.log(country);
//Arrow functions
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3));
//templete literals
let name = "Pavithra";
console.log(`Hello ${name}`);
//destructuring
const student = {
    name: "Pavithra",
    age: 21
};
const { name, age } = student;
console.log(name);
console.log(age);
//spread operator
const numbers1 = [1, 2, 3];
const numbers2 = [...numbers1, 4, 5];
console.log(numbers2);
//default parameters
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}
greet();
greet("Pavithra");
//classes in ES6
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
//promises
const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Data Loaded");
    } else {
        reject("Error");
    }
});
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
    //asyn/await
    function fetchData() {
    return new Promise((resolve) => {
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
//app.js
import { add } from './math.js';
console.log(add(2, 3));
//backend example
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
//array map function
const numbers = [1, 2, 3, 4];
const result = numbers.map((num) => {
    return num * 2;
});
console.log(result);
//filter method
const ages = [12, 18, 25, 10, 30];
const adults = ages.filter((age) => {
    return age >= 18;
});
console.log(adults);
//reduce method
const numbers = [10, 20, 30];
const total = numbers.reduce((sum, value) => {
    return sum + value;
}, 0);
console.log(total);
