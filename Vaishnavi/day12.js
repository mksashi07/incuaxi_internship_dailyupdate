//CLOSURES
//A Closure is a function that remembers and can access variables from its outer scope even after the outer function has finished executing.
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log("Count:", count);
    }

    return inner;
}

const counter = outer();

counter(); 
counter(); 
counter(); 

//A Higher Order Function is a function that:

//Accepts another function as an argument Or Returns another function
//Function as Parameter
function greet(name) {
    return "Hello " + name;
}

function processUser(callback) {
    console.log(callback("Mounika"));
}

processUser(greet);

//Function Returning Function
function multiplier(num) {
    return function(value) {
        return value * num;
    };
}

const double = multiplier(2);

console.log(double(5));

//Common Higher Order Functions
//map()
const numbers = [1, 2, 3, 4];

const squares = numbers.map(num => num * num);

console.log(squares);

//filter()
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

//reduce()
const numbers = [10, 20, 30];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum);

//Prototype - JavaScript uses prototypes to inherit properties and methods.
function Student(name) {
    this.name = name;
}

Student.prototype.sayHello = function() {
    console.log("Hello " + this.name);
};

const s1 = new Student("Mounika");

s1.sayHello();

//Prototype Inheritance
//Parent Object
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(this.name + " is eating");
};

//Child Object
function Dog(name, breed) {
    Animal.call(this, name);

    this.breed = breed;
}

//Connect Prototype Chain
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

//Add Child Method
Dog.prototype.bark = function() {
    console.log("Woof Woof");
};

//Usage
const dog1 = new Dog("Tommy", "Labrador");

dog1.eat();
dog1.bark();

//An object is a collection of properties and methods.
const student = {
    name: "Mounika",
    age: 22,

    study() {
        console.log("Studying...");
    }
};

student.study();

//A class is a blueprint for creating objects.
//Creating a Class
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(
            `My name is ${this.name} and I am ${this.age} years old`
        );
    }
}
//Creating Objects
const s1 = new Student("Mounika", 22);
const s2 = new Student("Anjali", 21);

s1.introduce();
s2.introduce();

//Inheritance using Classes
//Parent Class
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

//Child Class
class Employee extends Person {
    constructor(name, salary) {
        super(name);

        this.salary = salary;
    }

    showSalary() {
        console.log("Salary:", this.salary);
    }
}

//Usage
const emp = new Employee("Mounika", 50000);

emp.greet();
emp.showSalary();

//Modules allow splitting code into multiple files and reusing functionality.
//Named Export
//math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

//app.js
import { add, subtract } from "./math.js";

console.log(add(10, 20));
console.log(subtract(20, 5));

//Exporting Variable
//Config.js
export const appName = "Student Portal";

export const version = "1.0";

//app.js
import { appName, version } from "./config.js";

console.log(appName);
console.log(version);
//Default Export
//msg.js
export default function greet() {
    console.log("Welcome");
}
//app.js
import greet from "./msg.js";

greet();
//Import Everything
//Math.js
export const PI = 3.14;

export function square(num) {
    return num * num;
}

//app.js
import * as MathUtils from "./math.js";

console.log(MathUtils.PI);

console.log(MathUtils.square(5));
